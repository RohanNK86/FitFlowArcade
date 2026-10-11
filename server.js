'use strict';

const http = require('node:http');
const fs = require('node:fs');
const path = require('node:path');
const crypto = require('node:crypto');
const { URL } = require('node:url');

const PORT = Number(process.env.PORT) || 3000;
const ROOT = __dirname;
const DATA_DIR = path.join(ROOT, 'data');
const DATA_FILE = path.join(DATA_DIR, 'store.json');
const sessions = new Map();
const statusFlow = ['confirmed', 'packed', 'out-for-delivery', 'delivered'];

function readStore() {
    fs.mkdirSync(DATA_DIR, { recursive: true });
    if (!fs.existsSync(DATA_FILE)) return { users: [], orders: [] };
    try {
        return JSON.parse(fs.readFileSync(DATA_FILE, 'utf8'));
    } catch (error) {
        console.error('[store] Could not read data/store.json:', error.message);
        throw new Error('Stored data is invalid. Fix data/store.json before starting the server.');
    }
}

let store = readStore();

function saveStore() {
    fs.mkdirSync(DATA_DIR, { recursive: true });
    const temporaryFile = `${DATA_FILE}.tmp`;
    fs.writeFileSync(temporaryFile, JSON.stringify(store, null, 2));
    fs.renameSync(temporaryFile, DATA_FILE);
}

function json(response, statusCode, body) {
    response.writeHead(statusCode, { 'Content-Type': 'application/json; charset=utf-8' });
    response.end(JSON.stringify(body));
}

function requestBody(request) {
    return new Promise((resolve, reject) => {
        let raw = '';
        request.on('data', chunk => {
            raw += chunk;
            if (raw.length > 1_000_000) request.destroy(new Error('Request body is too large'));
        });
        request.on('end', () => {
            try {
                resolve(raw ? JSON.parse(raw) : {});
            } catch {
                reject(new Error('Request body must be valid JSON'));
            }
        });
        request.on('error', reject);
    });
}

function hashPassword(password, salt = crypto.randomBytes(16).toString('hex')) {
    return {
        salt,
        hash: crypto.scryptSync(password, salt, 64).toString('hex')
    };
}

function passwordsMatch(password, user) {
    const candidate = Buffer.from(hashPassword(password, user.passwordSalt).hash, 'hex');
    const stored = Buffer.from(user.passwordHash, 'hex');
    return candidate.length === stored.length && crypto.timingSafeEqual(candidate, stored);
}

function publicUser(user) {
    return { id: user.id, name: user.name, email: user.email };
}

function authenticatedUser(request) {
    const header = request.headers.authorization || '';
    const token = header.startsWith('Bearer ') ? header.slice(7) : '';
    const userId = sessions.get(token);
    return store.users.find(user => user.id === userId) || null;
}

function validateCredentials(body) {
    const name = String(body.name || '').trim();
    const email = String(body.email || '').trim().toLowerCase();
    const password = String(body.password || '');
    if (!name || !email || password.length < 6) {
        return 'Name, email and a password of at least 6 characters are required';
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return 'Enter a valid email address';
    return null;
}

function createSession(user) {
    const token = crypto.randomBytes(32).toString('hex');
    sessions.set(token, user.id);
    return token;
}

function orderForClient(order) {
    const elapsedSeconds = (Date.now() - Date.parse(order.createdAt)) / 1000;
    const nextIndex = Math.min(statusFlow.length - 1, Math.floor(elapsedSeconds / 15));
    while (statusFlow.indexOf(order.status) < nextIndex) {
        const nextStatus = statusFlow[statusFlow.indexOf(order.status) + 1];
        order.status = nextStatus;
        order.tracking.push({
            status: nextStatus,
            label: nextStatus === 'packed' ? 'Packed at FITFLOW warehouse'
                : nextStatus === 'out-for-delivery' ? 'Out for delivery'
                    : 'Delivered successfully',
            at: new Date().toISOString()
        });
    }
    return {
        id: order.id,
        status: order.status,
        createdAt: order.createdAt,
        total: order.total,
        items: order.items,
        customer: order.customer,
        tracking: order.tracking
    };
}

function routeApi(request, response, url) {
    if (request.method === 'GET' && url.pathname === '/api/health') {
        return json(response, 200, { ok: true, service: 'FITFLOW API' });
    }

    if (request.method === 'POST' && (url.pathname === '/api/register' || url.pathname === '/api/login')) {
        return requestBody(request).then(body => {
            if (url.pathname === '/api/register') {
                const error = validateCredentials(body);
                if (error) return json(response, 400, { error });
                const email = String(body.email).trim().toLowerCase();
                if (store.users.some(user => user.email === email)) {
                    return json(response, 409, { error: 'An account with this email already exists' });
                }
                const credentials = hashPassword(String(body.password));
                const user = {
                    id: crypto.randomUUID(),
                    name: String(body.name).trim(),
                    email,
                    passwordSalt: credentials.salt,
                    passwordHash: credentials.hash,
                    createdAt: new Date().toISOString()
                };
                store.users.push(user);
                saveStore();
                console.log(`[auth] registered ${user.email}`);
                return json(response, 201, { user: publicUser(user), token: createSession(user) });
            }

            const email = String(body.email || '').trim().toLowerCase();
            const user = store.users.find(candidate => candidate.email === email);
            if (!user || !passwordsMatch(String(body.password || ''), user)) {
                return json(response, 401, { error: 'Invalid email or password' });
            }
            console.log(`[auth] logged in ${user.email}`);
            return json(response, 200, { user: publicUser(user), token: createSession(user) });
        }).catch(error => json(response, 400, { error: error.message }));
    }

    if (request.method === 'POST' && url.pathname === '/api/orders') {
        const user = authenticatedUser(request);
        if (!user) return json(response, 401, { error: 'Please register or log in before placing an order' });
        return requestBody(request).then(body => {
            if (!Array.isArray(body.items) || body.items.length === 0) {
                return json(response, 400, { error: 'At least one item is required' });
            }
            const order = {
                id: `FF-${Date.now().toString(36).toUpperCase()}-${crypto.randomBytes(2).toString('hex').toUpperCase()}`,
                userId: user.id,
                status: 'confirmed',
                createdAt: new Date().toISOString(),
                total: Number(body.total) || 0,
                items: body.items.map(item => ({
                    id: item.id,
                    name: String(item.name || 'Product'),
                    size: String(item.size || ''),
                    qty: Number(item.qty) || 1,
                    price: Number(item.price) || 0
                })),
                customer: {
                    name: String(body.customer?.name || user.name),
                    email: user.email,
                    phone: String(body.customer?.phone || ''),
                    address: String(body.customer?.address || ''),
                    payment: String(body.customer?.payment || 'cod')
                },
                tracking: [{ status: 'confirmed', label: 'Order confirmed', at: new Date().toISOString() }]
            };
            store.orders.push(order);
            saveStore();
            console.log(`[order] ${order.id} created for ${user.email}`);
            return json(response, 201, { order: orderForClient(order) });
        }).catch(error => json(response, 400, { error: error.message }));
    }

    if (request.method === 'GET' && url.pathname === '/api/orders') {
        const user = authenticatedUser(request);
        if (!user) return json(response, 401, { error: 'Please log in to view your orders' });
        const orders = store.orders.filter(order => order.userId === user.id).map(orderForClient);
        return json(response, 200, { orders });
    }

    const orderMatch = url.pathname.match(/^\/api\/orders\/([^/]+)$/);
    if (request.method === 'GET' && orderMatch) {
        const user = authenticatedUser(request);
        if (!user) return json(response, 401, { error: 'Please log in to track an order' });
        const order = store.orders.find(candidate => candidate.id === orderMatch[1] && candidate.userId === user.id);
        return order ? json(response, 200, { order: orderForClient(order) }) : json(response, 404, { error: 'Order not found' });
    }

    return json(response, 404, { error: 'API route not found' });
}

function serveStatic(request, response, url) {
    const requested = url.pathname === '/' ? '/index.html' : url.pathname;
    const filePath = path.resolve(ROOT, `.${requested}`);
    if (!filePath.startsWith(ROOT) || !fs.existsSync(filePath) || fs.statSync(filePath).isDirectory()) {
        return json(response, 404, { error: 'Page not found' });
    }
    const contentTypes = { '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css', '.png': 'image/png', '.jpg': 'image/jpeg' };
    response.writeHead(200, { 'Content-Type': contentTypes[path.extname(filePath)] || 'application/octet-stream' });
    fs.createReadStream(filePath).pipe(response);
}

const server = http.createServer((request, response) => {
    const url = new URL(request.url, `http://${request.headers.host || 'localhost'}`);
    if (url.pathname.startsWith('/api/')) return routeApi(request, response, url);
    return serveStatic(request, response, url);
});

server.listen(PORT, () => console.log(`FITFLOW running at http://localhost:${PORT}`));
