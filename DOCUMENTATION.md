# 🛍️ FitFlowArcade — Project Documentation

> A premium fashion e-commerce storefront built with pure HTML, CSS, and Vanilla JavaScript.  
> No frameworks. No dependencies. Just fast, clean, modern web.

---

## 📌 Table of Contents

1. [Project Overview](#1-project-overview)
2. [Tech Stack](#2-tech-stack)
3. [Project Structure](#3-project-structure)
4. [Features](#4-features)
5. [Page Sections](#5-page-sections)
6. [Product Catalog](#6-product-catalog)
7. [User Flows](#7-user-flows)
8. [Promo Popup Banner](#8-promo-popup-banner)
9. [Cart System](#9-cart-system)
10. [Checkout & Coupon System](#10-checkout--coupon-system)
11. [JavaScript Architecture](#11-javascript-architecture)
12. [CSS Architecture](#12-css-architecture)
13. [Performance Optimizations](#13-performance-optimizations)
14. [Running the Project](#14-running-the-project)
15. [Branch & Git Info](#15-branch--git-info)

---

## 1. Project Overview

**FitFlowArcade** is a fully client-side, static e-commerce fashion website. It simulates a real-world premium online clothing store with:

- A browsable product catalog (Men, Women, Kids, New In, Sale)
- A live shopping cart with quantity controls
- A full checkout form with coupon code support
- A promotional popup banner offering discounts
- Search, wishlist, and category filtering

All data (products, cart) is stored in the browser's `localStorage` — no backend or server required.

---

## 2. Tech Stack

| Technology | Purpose |
|---|---|
| **HTML5** | Page structure and semantic layout |
| **CSS3** | Styling, animations, glassmorphism effects |
| **Vanilla JavaScript (ES6+)** | All interactivity, cart, filters, modals |
| **Google Fonts** | `Inter` (body) + `Playfair Display` (headings) |
| **localStorage** | Persistent cart data across page refreshes |

> ⚡ Zero external libraries or frameworks — no React, Vue, jQuery, or Bootstrap.

---

## 3. Project Structure

```
FitFlowArcade/
│
├── index.html          # Main HTML file — all page sections and modals
├── style.css           # All styles — tokens, components, animations
├── app.js              # All JavaScript — data, logic, interactions
│
├── assets/             # Product images
│   ├── image.png           # Men's product 1
│   ├── image1.png          # Men's product 2
│   ├── image3.png          # Men's product 3
│   ├── image4.png          # Men's product 4
│   ├── image5.png          # Men's product 5
│   ├── image6.png          # Men's product 6
│   ├── image_women1.png    # Women's product 1 (also used in hero)
│   ├── image_women2.png    # Women's product 2
│   ├── image_women3.png    # Women's product 3
│   ├── image_women4.png    # Women's product 4
│   ├── image_women5.png    # Women's product 5
│   └── image_women6.png    # Women's product 6
│
├── README.md           # Short project intro
└── DOCUMENTATION.md    # This file
```

---

## 4. Features

### 🛒 Shopping
- Product grid with category filter chips (All / Men / Women / Kids / New In / Sale)
- Quick-add to cart from the product card
- Product detail modal with size selector and full description
- Wishlist button (heart icon) on product cards

### 🔍 Search
- Live search bar in the navbar
- Filters products in real time as you type (by name, brand, description)

### 🛍️ Cart
- Slide-in cart drawer from the right
- Add, remove, increase/decrease quantity of items
- Shows subtotal, delivery charge, and grand total
- Cart count badge on the navbar icon
- Persists across page refresh via `localStorage`

### 💳 Checkout
- Full checkout form (name, email, phone, address, payment method)
- Order summary with item list
- Coupon code field — apply/remove discount codes
- Order success screen with toast notification

### 🎉 Promo Popup
- Auto-appears 1.5 seconds after page load
- Displays **Flat ₹299 OFF** on orders ≥ ₹1000
- Copyable coupon code: `SAVE299`
- "Shop Now" CTA scrolls to product section
- Dismissible by × button or clicking outside

### 📱 Responsive Design
- Fully responsive for mobile, tablet, and desktop
- Hamburger menu on mobile
- Adaptive grid layout for product cards

---

## 5. Page Sections

| Section | ID / Anchor | Description |
|---|---|---|
| Navbar | `#navbar` | Sticky top bar with logo, nav links, search, wishlist, cart |
| Hero | `#home` | Full-screen hero with headline, CTA, and animated image card |
| Categories | `#shop` | Filter chips — All, Men, Women, Kids, New In, Sale |
| Kids Collection | `#kids` | Editorial banner for the Juniors (10–18) range |
| Products Grid | `#productsGrid` | Dynamically rendered product cards |
| Trending | — | Curated trending / featured section |
| Newsletter | — | Email subscription CTA section |
| Footer | — | Brand links, social icons, copyright |

### Modals / Overlays

| Component | Trigger | Description |
|---|---|---|
| Promo Popup | Auto (1.5s delay) | Discount offer with coupon code |
| Search Bar | Search icon in navbar | Full-width expandable search |
| Cart Drawer | Cart icon in navbar | Slide-in cart panel |
| Product Modal | "Quick View" on product card | Product detail with size picker |
| Checkout Modal | "Proceed to Checkout" in cart | Full checkout form |

---

## 6. Product Catalog

Products are defined as a static array in `app.js`. Each product object has the following shape:

```js
{
    id: 1,                          // Unique numeric ID
    name: 'Camel Wool Overshirt',   // Display name
    brand: 'UrbanThread',           // Brand label
    category: 'men',                // 'men' | 'women' | 'kids' | 'new' | 'sale'
    image: 'assets/image.png',      // Path to product image
    price: 2499,                    // Selling price (INR)
    originalPrice: 3499,            // MRP / crossed-out price (INR)
    sizes: ['S', 'M', 'L', 'XL'],  // Available sizes
    outOfStock: [],                 // Sizes that are out of stock
    rating: 4.6,                    // Star rating (out of 5)
    ratingCount: 238,               // Number of reviews
    badge: 'sale',                  // Badge type: 'sale' | 'new' | 'hot'
    badgeText: '29% OFF',           // Badge label shown on card
    isNew: false,                   // Whether it appears in "New In"
    description: '...',             // Full product description
    tags: ['sale']                  // Filter tags
}
```

### Current Products

| # | Name | Category | Price | Original Price |
|---|---|---|---|---|
| 1 | Camel Wool Overshirt Jacket | Men | Rs.2,499 | Rs.3,499 |
| 2 | Ribbed Cream Knit Polo | Men | Rs.1,199 | Rs.1,699 |
| 3 | Pinstripe Shirt + Beige Trousers | Men | Rs.1,899 | Rs.2,699 |
| 4 | Olive Linen Shirt + Beige Trousers | Men | Rs.1,599 | Rs.2,299 |
| 5–6 | Additional Men's items | Men | — | — |
| 7–12 | Women's Collection | Women | — | — |

---

## 7. User Flows

### Add to Cart Flow

```
User lands on page
    → Promo popup appears (1.5s)
    → User dismisses or clicks "Shop Now"
    → Browses product grid
    → Clicks "+ Cart" on a product card  (selects default size)
    → OR clicks "Quick View" → picks size → clicks "Add to Cart"
    → Cart count badge updates
    → Toast notification shown
```

### Checkout Flow

```
User clicks Cart icon
    → Cart drawer slides in
    → Reviews items, adjusts quantities
    → Clicks "Proceed to Checkout"
    → Checkout modal opens
    → Fills in: Name, Email, Phone, Address, Payment Method
    → (Optional) Enters coupon code SAVE299 → clicks Apply
    → Discount applied, total updates live
    → Clicks "Place Order"
    → Success screen shown
    → Toast: "Order placed successfully!"
    → Cart is cleared from localStorage
```

### Search Flow

```
User clicks search icon in navbar
    → Search bar expands
    → User types query (e.g. "polo")
    → Product grid filters in real time
    → User clicks X or presses Escape to close
    → Grid resets to full catalog
```

---

## 8. Promo Popup Banner

The popup is defined in `index.html` and controlled by an IIFE in `app.js`.

### Behavior
- **Auto-shows** 1.5 seconds after page load
- **Hidden by default** via CSS class `.hidden` (added on load, removed by `setTimeout`)
- **Close triggers:** × button, clicking the overlay background
- **"Shop Now"** closes popup and smooth-scrolls to the product section
- **"Copy" button** copies `SAVE299` to clipboard using `navigator.clipboard`

### Coupon Details

| Field | Value |
|---|---|
| Code | `SAVE299` |
| Discount | Rs.299 flat off |
| Minimum Order | Rs.1,000 |

---

## 9. Cart System

The cart is an array stored in `localStorage` under the key `fitflow_cart`.

### Cart Item Structure

```js
{
    id: 1,
    name: 'Camel Wool Overshirt Jacket',
    brand: 'UrbanThread',
    image: 'assets/image.png',
    price: 2499,
    size: 'M',    // Selected size
    qty: 2        // Quantity
}
```

### Pricing Logic

```
Subtotal    = sum(price × qty) for all cart items
Delivery    = FREE if subtotal >= Rs.999, else Rs.79
Grand Total = Subtotal + Delivery
```

### Key Functions

| Function | What it does |
|---|---|
| `addToCart(id, size)` | Adds item or increments qty if already in cart |
| `removeFromCart(id, size)` | Removes specific item (by id + size) from cart |
| `changeQty(id, size, delta)` | Increases or decreases item quantity |
| `renderCart()` | Re-renders the entire cart drawer UI |
| `saveCart()` | Persists cart array to `localStorage` |
| `updateCartCount()` | Updates the badge counter on the cart icon |

---

## 10. Checkout & Coupon System

### Coupon Configuration

Coupons are defined as a plain object in `app.js`:

```js
const VALID_COUPONS = {
    'SAVE299': {
        discount: 299,      // Amount deducted (INR)
        minOrder: 1000,     // Minimum cart subtotal required
        label: 'SAVE299'    // Display label
    }
};
```

> To add more coupons, simply add more keys to `VALID_COUPONS`.

### Coupon Validation Rules

| Scenario | Message Shown |
|---|---|
| Empty input | Please enter a coupon code. |
| Invalid code | Invalid coupon code. |
| Order below minimum | Add items worth Rs.1000 or more to use this coupon. |
| Already applied | A coupon is already applied. Remove it first. |
| Valid code | Coupon "SAVE299" applied! You save Rs.299. |

### Discount Calculation

```
Grand Total = Subtotal + Delivery - Coupon Discount
```

### Key Functions

| Function | What it does |
|---|---|
| `openCheckout()` | Opens modal, resets coupon UI, binds apply/remove events |
| `getCheckoutTotals()` | Calculates subtotal, delivery, discount, and grand total |
| `updateCheckoutTotal()` | Re-renders the discount row and total amount in the UI |

---

## 11. JavaScript Architecture

`app.js` is organized in logical sections marked by banner comments:

```
'use strict'
│
├── PROMO POPUP              — IIFE, auto-show after 1.5s, copy button, close logic
├── products[]               — Static product data array (all catalog items)
├── DOM References           — All getElementById / querySelector calls (top-level)
├── FILTERING & RENDERING    — Category chips, search filter, renderProducts()
├── PRODUCT MODAL            — Quick view modal, size selection, add to cart
├── CART OPERATIONS          — addToCart, removeFromCart, changeQty, renderCart
├── CART DRAWER              — openCart, closeCart, event listeners
├── COUPON STATE             — VALID_COUPONS object, appliedCoupon state
├── CHECKOUT                 — openCheckout, coupon apply/remove, form submit
├── NAVBAR                   — Scroll effects, mobile hamburger, active link tracking
├── SEARCH                   — Toggle search bar, live product filtering
└── MISC                     — Toast notifications, scroll-to-top button, lazy load
```

---

## 12. CSS Architecture

`style.css` is organized top-down:

```
├── Promo Popup styles        — .promo-overlay, .promo-popup, @keyframes
├── Coupon Section styles     — .coupon-section, .coupon-row, .coupon-feedback
├── Design Tokens (:root)     — CSS variables for colors, spacing, border-radius
├── Reset & Base              — *, body, html defaults
├── Navbar                    — .navbar, .nav-links, .nav-actions, search bar
├── Hero                      — .hero, .hero-bg, animated orbs, image card stack
├── Category Chips            — .cat-chips, .cat-chip active states
├── Kids Collection           — .kids-collection, .kids-lookbook
├── Products Grid             — .products-grid, .product-card, badges
├── Product Modal             — .modal-overlay, .product-modal, size buttons
├── Cart Drawer               — .cart-drawer, .cart-item, .cart-footer
├── Checkout Modal            — .checkout-modal, .checkout-form, .order-summary
├── Toast Notification        — .toast, slide-in animation
├── Trending / Newsletter     — Editorial sections
├── Footer                    — .footer, .footer-grid, social icons
└── Media Queries             — Breakpoints for mobile and tablet
```

### Design Tokens (CSS Variables)

```css
--bg-primary:      #0d0d14    /* Main dark background */
--bg-secondary:    #13131e    /* Card / section background */
--accent-violet:   #7c3aed    /* Primary purple accent */
--accent-pink:     #ec4899    /* Secondary pink accent */
--accent-cyan:     #06b6d4    /* Tertiary cyan accent */
```

---

## 13. Performance Optimizations

| Technique | Where Applied |
|---|---|
| **Lazy loading images** | All product `<img>` tags use `loading="lazy"` |
| **Eager loading for hero** | Hero image uses `loading="eager"` (above the fold) |
| **CSS animations** | GPU-accelerated `transform` and `opacity` only |
| **No external JS libraries** | Zero bundle size overhead |
| **localStorage caching** | Cart state persists without any server calls |
| **IIFE for popup** | Scoped module pattern — avoids polluting global scope |
| **Event delegation** | Cart and product buttons use delegated listeners |
| **`'use strict'`** | Prevents silent JavaScript errors |

---

## 14. Running the Project

### Option A — Open directly in browser

```
Double-click index.html
```

### Option B — Local development server (recommended)

```bash
# Using Python (built-in, no install needed)
python -m http.server 3000

# Then open in browser:
http://localhost:3000
```

### Option C — VS Code Live Server

1. Install the **Live Server** extension in VS Code
2. Right-click `index.html`
3. Select **"Open with Live Server"**

> No build step, no `npm install`, no configuration needed. It just works.

---

## 15. Branch & Git Info

| Field | Value |
|---|---|
| Repository | https://github.com/RohanNK86/FitFlowArcade |
| Main branch | `main` |
| Feature branch | `saisagar` |
| Latest commit | `Add promo popup banner and coupon code at checkout` |

### Changes made on branch `saisagar`

**1. Promo Popup Banner** — `index.html`, `style.css`, `app.js`
- Auto-appearing discount popup (Rs.299 off on Rs.1000+)
- Copyable coupon code: `SAVE299`
- Smooth close and dismiss behavior

**2. Coupon Code at Checkout** — `index.html`, `style.css`, `app.js`
- Coupon input field in the checkout modal order summary
- Full validation (invalid code, minimum order, duplicate apply prevention)
- Live discount row and total update on apply/remove
- Remove coupon button to undo applied discount

### Create a Pull Request
https://github.com/RohanNK86/FitFlowArcade/pull/new/saisagar

---

*Documentation for FitFlowArcade — branch `saisagar`*
