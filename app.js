'use strict';
const products = [
    // ── MEN ──
    {
        id: 1,
        name: 'Camel Wool Overshirt Jacket',
        brand: 'UrbanThread',
        category: 'men',
        image: 'assets/image.png',
        price: 2499,
        originalPrice: 3499,
        sizes: ['S', 'M', 'L', 'XL', 'XXL'],
        outOfStock: [],
        rating: 4.6,
        ratingCount: 238,
        badge: 'sale',
        badgeText: '29% OFF',
        isNew: false,
        description: 'A structured camel-tone wool shirt jacket with patch chest pockets, worn over a white turtleneck. Paired with clean black trousers and white sneakers — the perfect smart-casual layered look.',
        tags: ['sale']
    },
    {
        id: 2,
        name: 'Ribbed Cream Knit Polo',
        brand: 'Crafted Co.',
        category: 'men',
        image: 'assets/image1.png',
        price: 1199,
        originalPrice: 1699,
        sizes: ['S', 'M', 'L', 'XL'],
        outOfStock: [],
        rating: 4.5,
        ratingCount: 312,
        badge: 'new',
        badgeText: 'NEW IN',
        isNew: true,
        description: 'A refined cream ribbed-knit polo with an open collar and short sleeves. Paired with slim black trousers for a quietly elevated look that transitions from café to office.',
        tags: ['new']
    },
    {
        id: 3,
        name: 'Pinstripe Shirt + Beige Trousers',
        brand: 'NóvoLine',
        category: 'men',
        image: 'assets/image3.png',
        price: 1899,
        originalPrice: 2699,
        sizes: ['S', 'M', 'L', 'XL', 'XXL'],
        outOfStock: [],
        rating: 4.7,
        ratingCount: 412,
        badge: 'hot',
        badgeText: '🔥 HOT',
        isNew: true,
        description: 'A slim-fit cream and brown pinstripe dress shirt with rolled sleeves, styled with tailored beige high-waist trousers. A gold watch and bracelet complete this timeless dressed-up look.',
        tags: ['new', 'sale']
    },
    {
        id: 4,
        name: 'Olive Linen Shirt + Beige Trousers',
        brand: 'BlueLine',
        category: 'men',
        image: 'assets/image4.png',
        price: 2299,
        originalPrice: 3199,
        sizes: ['S', 'M', 'L', 'XL', 'XXL'],
        outOfStock: ['XXL'],
        rating: 4.6,
        ratingCount: 189,
        badge: 'sale',
        badgeText: '28% OFF',
        isNew: false,
        description: 'A slim-fit deep olive green linen shirt with white buttons, paired with relaxed beige pleated trousers. A sophisticated earth-tone combination perfect for the office or a dinner date.',
        tags: ['sale']
    },
    {
        id: 5,
        name: 'Olive Relaxed Linen Overshirt',
        brand: 'SunKissed',
        category: 'men',
        image: 'assets/image5.png',
        price: 1399,
        originalPrice: 1899,
        sizes: ['S', 'M', 'L', 'XL'],
        outOfStock: [],
        rating: 4.8,
        ratingCount: 527,
        badge: 'hot',
        badgeText: '🔥 HOT',
        isNew: true,
        description: 'A relaxed olive green linen overshirt worn casually open, paired with cream wide-leg linen trousers. A breezy summer co-ord perfect for beach outings and rooftop evenings.',
        tags: ['new', 'sale']
    },
    {
        id: 6,
        name: 'Sand Linen Shirt + Brown Trousers',
        brand: 'NordWear',
        category: 'men',
        image: 'assets/image6.png',
        price: 2099,
        originalPrice: 2899,
        sizes: ['S', 'M', 'L', 'XL', 'XXL'],
        outOfStock: ['S'],
        rating: 4.9,
        ratingCount: 607,
        badge: 'hot',
        badgeText: '🔥 BESTSELLER',
        isNew: false,
        description: 'A soft sand-toned linen shirt with an open collar, paired with rich chocolate brown pleated trousers and a leather belt. A warm, sophisticated palette ideal for dates and evenings out.',
        tags: ['sale']
    },

    // ── WOMEN ──
    {
        id: 7,
        name: 'Mocha Waistcoat Wide-Leg Co-ord',
        brand: 'Blossom Studio',
        category: 'women',
        image: 'assets/image_women1.png',
        price: 2799,
        originalPrice: 3999,
        sizes: ['XS', 'S', 'M', 'L', 'XL'],
        outOfStock: [],
        rating: 4.9,
        ratingCount: 526,
        badge: 'hot',
        badgeText: '🔥 BESTSELLER',
        isNew: false,
        description: 'A sleek mocha-taupe co-ord set with a fitted button-down waistcoat and flowy wide-leg trousers. Styled with oversized sunglasses and a tan saddle bag — effortlessly editorial and chic.',
        tags: ['sale', 'new']
    },
    {
        id: 8,
        name: 'Ivory Linen Waistcoat Co-ord',
        brand: 'SuiteSense',
        category: 'women',
        image: 'assets/image_women2.png',
        price: 2599,
        originalPrice: 3699,
        sizes: ['XS', 'S', 'M', 'L'],
        outOfStock: [],
        rating: 4.7,
        ratingCount: 343,
        badge: 'new',
        badgeText: 'NEW IN',
        isNew: true,
        description: 'A fresh ivory linen V-neck waistcoat with gold buttons paired with wide-leg trousers in a matching neutral tone. Layered with delicate gold jewellery for a minimalist luxe look.',
        tags: ['new']
    },
    {
        id: 9,
        name: 'Chocolate Asymmetric Vest Set',
        brand: 'Velvet Luxe',
        category: 'women',
        image: 'assets/image_women3.png',
        price: 2399,
        originalPrice: 3299,
        sizes: ['XS', 'S', 'M', 'L', 'XL'],
        outOfStock: [],
        rating: 4.5,
        ratingCount: 291,
        badge: 'sale',
        badgeText: '27% OFF',
        isNew: false,
        description: 'A bold chocolate brown asymmetric wrap vest with a gold button detail, paired with matching wide-leg trousers. A sleek monochrome power set that makes a strong statement.',
        tags: ['sale']
    },
    {
        id: 10,
        name: 'Beige 3-Piece Blazer Suit',
        brand: 'FreeSpirit',
        category: 'women',
        image: 'assets/image_women4.png',
        price: 3999,
        originalPrice: 5599,
        sizes: ['XS', 'S', 'M', 'L'],
        outOfStock: ['XS'],
        rating: 4.8,
        ratingCount: 488,
        badge: 'sale',
        badgeText: '29% OFF',
        isNew: false,
        description: 'A sophisticated 3-piece set — a long-line beige blazer, matching button-up vest, and wide-leg trousers. Finished with leather oxfords and a burgundy bag for pure boardroom elegance.',
        tags: ['sale']
    },
    {
        id: 11,
        name: 'Rust Structured Power Blazer Set',
        brand: 'Studio W',
        category: 'women',
        image: 'assets/image_women5.png',
        price: 3499,
        originalPrice: 4799,
        sizes: ['XS', 'S', 'M', 'L', 'XL'],
        outOfStock: [],
        rating: 4.9,
        ratingCount: 674,
        badge: 'hot',
        badgeText: '🔥 HOT',
        isNew: true,
        description: 'A commanding rust-brown structured blazer with an asymmetric single-button closure, paired with matching flared wide-leg trousers. A gold button detail elevates this head-turning power suit.',
        tags: ['new', 'sale']
    },
    {
        id: 12,
        name: 'Cropped Leather Jacket + Wide Denim',
        brand: 'Anokhi Arts',
        category: 'women',
        image: 'assets/image_women6.png',
        price: 3299,
        originalPrice: 4699,
        sizes: ['S', 'M', 'L', 'XL'],
        outOfStock: [],
        rating: 4.7,
        ratingCount: 412,
        badge: 'new',
        badgeText: 'NEW IN',
        isNew: true,
        description: 'A dark brown cropped faux-leather oversized jacket over a white tee, worn with ultra-wide-leg dark navy denim jeans. Street-style perfection — finished with black shades and a mini bag.',
        tags: ['new']
    }
];

/* ── STATE ─────────────────────────────────── */
let cart = JSON.parse(localStorage.getItem('fitflow_cart') || '[]');
let wishlist = JSON.parse(localStorage.getItem('fitflow_wishlist') || '[]');
let activeCategory = 'all';
let activeSize = 'all';
let activeRating = 0;
let priceMin = 0;
let priceMax = 5000;
let sortMode = 'default';
let searchQuery = '';
let currentModalProductId = null;
let currentModalSize = null;

/* ── DOM REFERENCES ──────────────────────────*/
const productsGrid = document.getElementById('productsGrid');
const noResults = document.getElementById('noResults');
const resultsCount = document.getElementById('resultsCount');
const cartBtn = document.getElementById('cartBtn');
const cartClose = document.getElementById('cartClose');
const cartOverlay = document.getElementById('cartOverlay');
const cartDrawer = document.getElementById('cartDrawer');
const cartItems = document.getElementById('cartItems');
const cartEmpty = document.getElementById('cartEmpty');
const cartFooter = document.getElementById('cartFooter');
const cartCount = document.getElementById('cartCount');
const cartSubtotal = document.getElementById('cartSubtotal');
const cartDelivery = document.getElementById('cartDelivery');
const cartTotal = document.getElementById('cartTotal');
const modalOverlay = document.getElementById('modalOverlay');
const productModal = document.getElementById('productModal');
const modalClose = document.getElementById('modalClose');
const modalInner = document.getElementById('modalInner');
const checkoutBtn = document.getElementById('checkoutBtn');
const checkoutModal = document.getElementById('checkoutModal');
const checkoutOverlay = document.getElementById('checkoutOverlay');
const checkoutClose = document.getElementById('checkoutClose');
const checkoutForm = document.getElementById('checkoutForm');
const orderSuccess = document.getElementById('orderSuccess');
const orderSummaryItems = document.getElementById('orderSummaryItems');
const orderTotalEl = document.getElementById('orderTotal');
const rangeMin = document.getElementById('rangeMin');
const rangeMax = document.getElementById('rangeMax');
const priceMinEl = document.getElementById('priceMin');
const priceMaxEl = document.getElementById('priceMax');
const clearFilters = document.getElementById('clearFilters');
const sortSelect = document.getElementById('sortSelect');
const searchBtn = document.getElementById('searchBtn');
const searchBar = document.getElementById('searchBar');
const searchInput = document.getElementById('searchInput');
const searchClose = document.getElementById('searchClose');
const filterToggle = document.getElementById('filterToggle');
const filterPanel = document.getElementById('filterPanel');
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');
const navbar = document.getElementById('navbar');
const toast = document.getElementById('toast');

/* ══════════════════════════════════════════
   RENDER
   ══════════════════════════════════════════ */
function getStars(rating) {
    const filled = Math.floor(rating);
    const half = rating % 1 >= 0.5 ? 1 : 0;
    const empty = 5 - filled - half;
    return '★'.repeat(filled) + (half ? '½' : '') + '☆'.repeat(empty);
}

function renderProducts() {
    let filtered = products.filter(p => {
        const catOk = activeCategory === 'all' ||
            p.category === activeCategory ||
            (activeCategory === 'new' && p.isNew) ||
            (activeCategory === 'sale' && p.tags.includes('sale'));
        const sizeOk = activeSize === 'all' || p.sizes.includes(activeSize);
        const priceOk = p.price >= priceMin && p.price <= priceMax;
        const ratingOk = p.rating >= activeRating;
        const searchOk = !searchQuery ||
            p.name.toLowerCase().includes(searchQuery) ||
            p.brand.toLowerCase().includes(searchQuery) ||
            p.category.toLowerCase().includes(searchQuery);
        return catOk && sizeOk && priceOk && ratingOk && searchOk;
    });

    // Sort
    switch (sortMode) {
        case 'price-asc': filtered.sort((a, b) => a.price - b.price); break;
        case 'price-desc': filtered.sort((a, b) => b.price - a.price); break;
        case 'rating': filtered.sort((a, b) => b.rating - a.rating); break;
        case 'newest': filtered.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0)); break;
        case 'discount':
            filtered.sort((a, b) => {
                const discA = ((a.originalPrice - a.price) / a.originalPrice);
                const discB = ((b.originalPrice - b.price) / b.originalPrice);
                return discB - discA;
            });
            break;
    }

    // Update count
    resultsCount.textContent = filtered.length === products.length
        ? `Showing all ${products.length} products`
        : `Showing ${filtered.length} of ${products.length} products`;

    productsGrid.style.display = filtered.length ? 'grid' : 'none';
    noResults.style.display = filtered.length ? 'none' : 'flex';

    productsGrid.innerHTML = filtered.map((p, i) => {
        const disc = Math.round(((p.originalPrice - p.price) / p.originalPrice) * 100);
        const wished = wishlist.includes(p.id);
        const badgeClass = p.badge === 'sale' ? 'badge-discount' : p.badge === 'new' ? 'badge-new' : 'badge-hot';
        return `
    <article class="product-card" style="animation-delay:${i * 0.05}s" data-id="${p.id}" role="button" aria-label="View ${p.name}">
      <div class="product-img-wrap">
        <img
          src="${p.image}"
          alt="${p.name}"
          loading="lazy"
          width="300" height="400"
          decoding="async"
        />
        <span class="product-badge ${badgeClass}">${p.badgeText}</span>
        <button class="product-wishlist${wished ? ' liked' : ''}" data-wid="${p.id}" aria-label="${wished ? 'Remove from wishlist' : 'Add to wishlist'}">
          ${wished ? '♥' : '♡'}
        </button>
        <button class="product-quick-view" data-qid="${p.id}">Quick View</button>
      </div>
      <div class="product-info">
        <p class="product-brand">${p.brand}</p>
        <h2 class="product-name">${p.name}</h2>
        <div class="product-sizes">
          ${p.sizes.slice(0, 5).map(s => `<span class="product-size-tag">${s}</span>`).join('')}
        </div>
        <div class="product-rating">
          <span class="stars">${getStars(p.rating)}</span>
          <span class="rating-count">(${p.ratingCount})</span>
        </div>
        <div class="product-price-row">
          <div class="product-price-group">
            <span class="price-current">₹${p.price.toLocaleString('en-IN')}</span>
            <span class="price-original">₹${p.originalPrice.toLocaleString('en-IN')}</span>
            <span class="price-off">${disc}% off</span>
          </div>
          <button class="add-cart-btn" data-cid="${p.id}">+ Cart</button>
        </div>
      </div>
    </article>`;
    }).join('');

    attachCardListeners();
}

function attachCardListeners() {
    // Quick view
    productsGrid.querySelectorAll('.product-quick-view').forEach(btn => {
        btn.addEventListener('click', e => {
            e.stopPropagation();
            openModal(+btn.dataset.qid);
        });
    });

    // Wishlist
    productsGrid.querySelectorAll('.product-wishlist').forEach(btn => {
        btn.addEventListener('click', e => {
            e.stopPropagation();
            toggleWishlist(+btn.dataset.wid, btn);
        });
    });

    // Add to cart from grid
    productsGrid.querySelectorAll('.add-cart-btn').forEach(btn => {
        btn.addEventListener('click', e => {
            e.stopPropagation();
            openModal(+btn.dataset.cid);
        });
    });

    // Click card (not buttons) → modal
    productsGrid.querySelectorAll('.product-card').forEach(card => {
        card.addEventListener('click', () => openModal(+card.dataset.id));
    });
}

/* ══════════════════════════════════════════
   QUICK VIEW MODAL
   ══════════════════════════════════════════ */
function openModal(id) {
    const p = products.find(x => x.id === id);
    if (!p) return;
    currentModalProductId = id;
    currentModalSize = null;

    const disc = Math.round(((p.originalPrice - p.price) / p.originalPrice) * 100);
    const wished = wishlist.includes(p.id);

    modalInner.innerHTML = `
    <div class="modal-img-col">
      <div class="modal-img">
        <img src="${p.image}" alt="${p.name}" loading="lazy" />
      </div>
    </div>
    <div class="modal-info">
      <p class="modal-brand">${p.brand}</p>
      <h2 class="modal-name">${p.name}</h2>
      <div class="modal-rating" style="display:flex;align-items:center;gap:8px;margin-bottom:4px;">
        <span class="stars">${getStars(p.rating)}</span>
        <span style="font-size:.8rem;color:var(--text-muted)">(${p.ratingCount} reviews)</span>
      </div>
      <div class="modal-price-row">
        <span class="modal-price">₹${p.price.toLocaleString('en-IN')}</span>
        <span class="modal-original">₹${p.originalPrice.toLocaleString('en-IN')}</span>
        <span class="modal-off">${disc}% OFF</span>
      </div>
      <p class="modal-desc">${p.description}</p>
      <div>
        <p class="modal-section-label">Select Size</p>
        <div class="modal-sizes">
          ${p.sizes.map(s => {
        const oos = p.outOfStock.includes(s) ? 'out-of-stock' : '';
        return `<button class="modal-size-btn ${oos}" data-sz="${s}" ${oos ? 'disabled' : ''}>${s}</button>`;
    }).join('')}
        </div>
        <p style="font-size:.75rem;color:var(--text-muted);margin-top:8px;"><a href="#" style="color:var(--accent-violet)">Size Guide</a> &nbsp;•&nbsp; Free delivery above ₹999</p>
      </div>
      <div class="modal-actions">
        <button class="btn-primary" id="modalAddCart" style="opacity:.5;pointer-events:none;">Select a Size</button>
        <button class="modal-wish-btn ${wished ? 'active' : ''}" id="modalWish" aria-label="Wishlist">
          ${wished ? '♥' : '♡'}
        </button>
      </div>
    </div>`;

    // Size selection
    modalInner.querySelectorAll('.modal-size-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            currentModalSize = btn.dataset.sz;
            modalInner.querySelectorAll('.modal-size-btn').forEach(b => b.classList.remove('selected'));
            btn.classList.add('selected');
            const addBtn = document.getElementById('modalAddCart');
            addBtn.textContent = `Add to Cart – Size ${currentModalSize}`;
            addBtn.style.opacity = '1';
            addBtn.style.pointerEvents = 'auto';
        });
    });

    // Add to cart from modal
    document.getElementById('modalAddCart').addEventListener('click', () => {
        if (!currentModalSize) return;
        addToCart(currentModalProductId, currentModalSize);
        closeModal();
        openCart();
        showToast(`Added to cart: ${p.name} (${currentModalSize}) ✓`);
    });

    // Wishlist from modal
    document.getElementById('modalWish').addEventListener('click', () => {
        const btn = document.getElementById('modalWish');
        toggleWishlist(currentModalProductId, btn, true);
    });

    modalOverlay.classList.add('open');
    productModal.classList.add('open');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    modalOverlay.classList.remove('open');
    productModal.classList.remove('open');
    document.body.style.overflow = '';
}

modalClose.addEventListener('click', closeModal);
modalOverlay.addEventListener('click', closeModal);

/* ══════════════════════════════════════════
   CART
   ══════════════════════════════════════════ */
function addToCart(id, size) {
    const product = products.find(p => p.id === id);
    const existing = cart.find(i => i.id === id && i.size === size);
    if (existing) {
        existing.qty++;
    } else {
        cart.push({ id, size, qty: 1, name: product.name, price: product.price, image: product.image, brand: product.brand });
    }
    saveCart();
    updateCartCount();
}

function removeFromCart(id, size) {
    cart = cart.filter(i => !(i.id === id && i.size === size));
    saveCart();
    renderCart();
    updateCartCount();
}

function changeQty(id, size, delta) {
    const item = cart.find(i => i.id === id && i.size === size);
    if (!item) return;
    item.qty = Math.max(1, item.qty + delta);
    saveCart();
    renderCart();
    updateCartCount();
}

function saveCart() {
    localStorage.setItem('fitflow_cart', JSON.stringify(cart));
}

function updateCartCount() {
    const total = cart.reduce((sum, i) => sum + i.qty, 0);
    cartCount.textContent = total;
    cartCount.classList.toggle('visible', total > 0);
}

function renderCart() {
    const totalItems = cart.reduce((s, i) => s + i.qty, 0);
    const subtotal = cart.reduce((s, i) => s + i.price * i.qty, 0);
    const delivery = subtotal >= 999 ? 0 : 79;
    const grandTotal = subtotal + delivery;

    cartEmpty.style.display = cart.length ? 'none' : 'flex';
    cartFooter.style.display = cart.length ? 'block' : 'none';

    cartItems.innerHTML = cart.map(item => `
    <div class="cart-item" data-cid="${item.id}" data-csz="${item.size}">
      <div class="cart-item-img">
        <img src="${item.image}" alt="${item.name}" loading="lazy" />
      </div>
      <div class="cart-item-info">
        <p class="cart-item-name">${item.name}</p>
        <p class="cart-item-meta">${item.brand} · Size: ${item.size}</p>
        <div class="cart-item-controls">
          <button class="qty-btn" data-qid="${item.id}" data-qsz="${item.size}" data-delta="-1">−</button>
          <span class="qty-num">${item.qty}</span>
          <button class="qty-btn" data-qid="${item.id}" data-qsz="${item.size}" data-delta="1">+</button>
          <button class="cart-item-remove" data-rid="${item.id}" data-rsz="${item.size}">Remove</button>
        </div>
      </div>
      <span class="cart-item-price">₹${(item.price * item.qty).toLocaleString('en-IN')}</span>
    </div>`).join('');

    // Qty buttons
    cartItems.querySelectorAll('.qty-btn').forEach(btn => {
        btn.addEventListener('click', () => changeQty(+btn.dataset.qid, btn.dataset.qsz, +btn.dataset.delta));
    });
    // Remove buttons
    cartItems.querySelectorAll('.cart-item-remove').forEach(btn => {
        btn.addEventListener('click', () => removeFromCart(+btn.dataset.rid, btn.dataset.rsz));
    });

    cartSubtotal.textContent = `₹${subtotal.toLocaleString('en-IN')}`;
    cartDelivery.textContent = delivery === 0 ? 'FREE' : `₹${delivery}`;
    cartTotal.textContent = `₹${grandTotal.toLocaleString('en-IN')}`;
}

function openCart() {
    renderCart();
    cartDrawer.classList.add('open');
    cartOverlay.classList.add('open');
    document.body.style.overflow = 'hidden';
}
window.closeCart = function () {
    cartDrawer.classList.remove('open');
    cartOverlay.classList.remove('open');
    document.body.style.overflow = '';
};

cartBtn.addEventListener('click', openCart);
cartClose.addEventListener('click', closeCart);
cartOverlay.addEventListener('click', closeCart);

/* ══════════════════════════════════════════
   CHECKOUT
   ══════════════════════════════════════════ */
checkoutBtn.addEventListener('click', () => {
    if (!cart.length) return;
    closeCart();
    openCheckout();
});

function openCheckout() {
    const subtotal = cart.reduce((s, i) => s + i.price * i.qty, 0);
    const delivery = subtotal >= 999 ? 0 : 79;
    const grand = subtotal + delivery;

    orderSummaryItems.innerHTML = cart.map(i =>
        `<div class="order-summary-item"><span>${i.name} × ${i.qty} (${i.size})</span><span>₹${(i.price * i.qty).toLocaleString('en-IN')}</span></div>`
    ).join('')
        + `<div class="order-summary-item"><span>Delivery</span><span>${delivery === 0 ? 'FREE' : '₹' + delivery}</span></div>`;

    orderTotalEl.textContent = `₹${grand.toLocaleString('en-IN')}`;
    checkoutModal.style.display = 'block';
    checkoutOverlay.style.display = 'block';
    checkoutForm.style.display = 'flex';
    orderSuccess.style.display = 'none';
    document.body.style.overflow = 'hidden';
}

window.closeCheckout = function () {
    checkoutModal.style.display = 'none';
    checkoutOverlay.style.display = 'none';
    document.body.style.overflow = '';
};

checkoutClose.addEventListener('click', closeCheckout);
checkoutOverlay.addEventListener('click', closeCheckout);

checkoutForm.addEventListener('submit', e => {
    e.preventDefault();
    // Simulate order placement
    cart = [];
    saveCart();
    updateCartCount();
    renderCart();
    checkoutForm.style.display = 'none';
    orderSuccess.style.display = 'flex';
    orderSuccess.style.flexDirection = 'column';
    orderSuccess.style.alignItems = 'center';
    showToast('🎉 Order placed successfully!');
});

/* ══════════════════════════════════════════
   WISHLIST
   ══════════════════════════════════════════ */
function toggleWishlist(id, btn, fromModal = false) {
    const idx = wishlist.indexOf(id);
    if (idx > -1) {
        wishlist.splice(idx, 1);
        btn.classList.remove('liked', 'active');
        btn.innerHTML = '♡';
        showToast('Removed from wishlist');
    } else {
        wishlist.push(id);
        btn.classList.add('liked', 'active');
        btn.innerHTML = '♥';
        showToast('Added to wishlist ♥');
    }
    localStorage.setItem('fitflow_wishlist', JSON.stringify(wishlist));
    if (!fromModal) return;
    // update grid card if visible
    const gridBtn = productsGrid.querySelector(`.product-wishlist[data-wid="${id}"]`);
    if (gridBtn) {
        gridBtn.classList.toggle('liked', wishlist.includes(id));
        gridBtn.innerHTML = wishlist.includes(id) ? '♥' : '♡';
    }
}

/* ══════════════════════════════════════════
   FILTERS
   ══════════════════════════════════════════ */
// Category chips
document.querySelectorAll('.cat-chip').forEach(chip => {
    chip.addEventListener('click', () => {
        document.querySelectorAll('.cat-chip').forEach(c => c.classList.remove('active'));
        chip.classList.add('active');
        activeCategory = chip.dataset.cat;
        renderProducts();
    });
});

// Size chips
document.querySelectorAll('.size-chip').forEach(chip => {
    chip.addEventListener('click', () => {
        document.querySelectorAll('.size-chip').forEach(c => c.classList.remove('active'));
        chip.classList.add('active');
        activeSize = chip.dataset.size;
        renderProducts();
    });
});

// Rating chips
document.querySelectorAll('.rating-chip').forEach(chip => {
    chip.addEventListener('click', () => {
        document.querySelectorAll('.rating-chip').forEach(c => c.classList.remove('active'));
        chip.classList.add('active');
        activeRating = +chip.dataset.rating;
        renderProducts();
    });
});

// Price range — dual sliders
function updatePriceRange() {
    let mn = +rangeMin.value;
    let mx = +rangeMax.value;
    if (mn > mx) { [mn, mx] = [mx, mn]; }
    priceMin = mn;
    priceMax = mx;
    priceMinEl.textContent = mn.toLocaleString('en-IN');
    priceMaxEl.textContent = mx.toLocaleString('en-IN');
    renderProducts();
}
rangeMin.addEventListener('input', updatePriceRange);
rangeMax.addEventListener('input', updatePriceRange);

// Sort
sortSelect.addEventListener('change', () => {
    sortMode = sortSelect.value;
    renderProducts();
});

// Clear filters
clearFilters.addEventListener('click', () => {
    activeCategory = 'all';
    activeSize = 'all';
    activeRating = 0;
    priceMin = 0;
    priceMax = 5000;
    sortMode = 'default';
    searchQuery = '';
    searchInput.value = '';

    rangeMin.value = 0;
    rangeMax.value = 5000;
    priceMinEl.textContent = '0';
    priceMaxEl.textContent = '5,000';
    sortSelect.value = 'default';

    document.querySelectorAll('.cat-chip').forEach(c => c.classList.remove('active'));
    document.querySelector('.cat-chip[data-cat="all"]').classList.add('active');
    document.querySelectorAll('.size-chip').forEach(c => c.classList.remove('active'));
    document.querySelector('.size-chip[data-size="all"]').classList.add('active');
    document.querySelectorAll('.rating-chip').forEach(c => c.classList.remove('active'));
    document.querySelector('.rating-chip[data-rating="0"]').classList.add('active');

    renderProducts();
    showToast('Filters cleared');
});

/* ══════════════════════════════════════════
   SEARCH
   ══════════════════════════════════════════ */
searchBtn.addEventListener('click', () => {
    searchBar.classList.toggle('open');
    if (searchBar.classList.contains('open')) searchInput.focus();
});
searchClose.addEventListener('click', () => {
    searchBar.classList.remove('open');
    searchQuery = '';
    searchInput.value = '';
    renderProducts();
});
searchInput.addEventListener('input', () => {
    searchQuery = searchInput.value.toLowerCase().trim();
    renderProducts();
});
searchInput.addEventListener('keydown', e => {
    if (e.key === 'Escape') searchClose.click();
});

/* ══════════════════════════════════════════
   NAVBAR — SCROLL & HAMBURGER
   ══════════════════════════════════════════ */
window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 10);
}, { passive: true });

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('open');
    const open = navLinks.classList.contains('open');
    hamburger.setAttribute('aria-expanded', open);
});

// Close menu on link click
navLinks.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => navLinks.classList.remove('open'));
});

// Active nav link on scroll
const sections = document.querySelectorAll('section[id], main');
const navanchors = document.querySelectorAll('.nav-link');
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            navanchors.forEach(a => {
                a.classList.toggle('active', a.getAttribute('href') === '#' + entry.target.id);
            });
        }
    });
}, { threshold: 0.3 });
sections.forEach(s => observer.observe(s));

/* ══════════════════════════════════════════
   FILTER TOGGLE (MOBILE)
   ══════════════════════════════════════════ */
filterToggle.addEventListener('click', () => {
    filterPanel.classList.toggle('mobile-open');
});

/* ══════════════════════════════════════════
   TOAST
   ══════════════════════════════════════════ */
let toastTimeout;
function showToast(msg) {
    clearTimeout(toastTimeout);
    toast.textContent = msg;
    toast.classList.add('show');
    toastTimeout = setTimeout(() => toast.classList.remove('show'), 3000);
}

/* ══════════════════════════════════════════
   KEYBOARD ACCESSIBILITY
   ══════════════════════════════════════════ */
document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
        if (productModal.classList.contains('open')) closeModal();
        if (cartDrawer.classList.contains('open')) closeCart();
        if (checkoutModal.style.display === 'block') closeCheckout();
        if (searchBar.classList.contains('open')) searchClose.click();
    }
});

/* ══════════════════════════════════════════
   INIT
   ══════════════════════════════════════════ */
updateCartCount();
renderProducts();

// Smooth entrance animation for hero
document.querySelector('.hero-content').style.animation = 'cardIn 0.8s both';
