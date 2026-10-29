
/* ==========================================
   HARRETH OUTFITTERS
   COMPLETE MASTER WEBSITE SCRIPT
   ========================================== */

/* PRODUCT CATALOG */

const harrethProducts = [
  {
    name: "HARRETH Logo Tee",
    detail: "Men's • Black",
    keywords: "men mens black shirt tshirt t-shirt tee",
    image: "images/shirtcol.png",
    url: "mens-black-tee.html",
    cartName: "Harreth Logo Tee - Black"
  },
  {
    name: "HARRETH Logo Tee",
    detail: "Men's • White",
    keywords: "men mens white shirt tshirt t-shirt tee",
    image: "images/shirtcolwhite.png",
    url: "mens-white-tee.html",
    cartName: "Harreth Logo Tee - White"
  },
  {
    name: "HARRETH Logo Tee",
    detail: "Women's • Tan",
    keywords: "women womens tan shirt tshirt t-shirt tee",
    image: "images/womenstan.png",
    url: "womens-tan-tee.html",
    cartName: "Harreth Women's Logo Tee - Tan"
  },
  {
    name: "HARRETH Logo Hat",
    detail: "Headwear • Loden / Black",
    keywords: "hat cap richardson 112 trucker headwear",
    image: "images/rich112.png",
    url: "headwear-hat.html",
    cartName: "Harreth Logo Hat - Loden / Black"
  },
  {
    name: "HARRETH Rugged Pack",
    detail: "Gear • Coyote Brown",
    keywords: "backpack bag gear rugged pack outdoor",
    image: "images/backpack3.png",
    url: "gear-backpack.html",
    cartName: "Harreth Rugged Pack - Coyote Brown"
  }
];

/* ==========================================
   CUSTOM STYLES
   ========================================== */

const harrethStyles = `

/* SEARCH */

.harreth-search-overlay {
  position: fixed;
  inset: 0;
  z-index: 99999;
  display: none;
  align-items: flex-start;
  justify-content: center;
  overflow-y: auto;
  padding: 8vh 16px 24px;
  background: rgba(8,10,9,0.96);
  backdrop-filter: blur(9px);
}

.harreth-search-overlay.active {
  display: flex;
}

.harreth-search-panel {
  position: relative;
  width: 100%;
  max-width: 740px;
  padding: 38px;
  background: #202320;
  color: #f3f0e7;
  border: 1px solid #57513d;
  border-top: 4px solid #b7924a;
  box-shadow: 0 24px 80px rgba(0,0,0,0.6);
  font-family: Arial, sans-serif;
}

.harreth-search-eyebrow {
  margin: 0 0 12px;
  color: #b7924a;
  font-size: 11px;
  font-weight: bold;
  letter-spacing: 4px;
}

.harreth-search-title {
  margin: 0 0 12px;
  color: #fff;
  font-size: clamp(28px,5vw,44px);
  font-weight: 900;
  line-height: 1.1;
}

.harreth-search-subtitle {
  margin: 0 0 28px;
  color: #bcbcb4;
  font-size: 14px;
  line-height: 1.6;
}

.harreth-search-close {
  position: absolute;
  top: 18px;
  right: 20px;
  background: transparent;
  border: none;
  color: #eee;
  font-size: 30px;
  cursor: pointer;
}

.harreth-search-close:hover {
  color: #b7924a;
}

.harreth-search-field {
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 16px 20px;
  background: #111411;
  border: 1px solid #6b6554;
}

.harreth-search-field:focus-within {
  border-color: #d5b474;
}

.harreth-search-icon {
  width: 22px;
  height: 22px;
  flex-shrink: 0;
  color: #b7924a;
}

#harreth-search-input {
  flex: 1;
  width: 100%;
  min-width: 0;
  background: transparent;
  border: none;
  outline: none;
  color: #fff;
  font-size: 17px;
}

#harreth-search-input::placeholder {
  color: #aeb2a7;
}

.harreth-search-label {
  margin: 30px 0 14px;
  padding-bottom: 12px;
  border-bottom: 1px solid #444840;
  color: #b7924a;
  font-size: 11px;
  font-weight: bold;
  letter-spacing: 2px;
}

.harreth-search-results {
  display: grid;
  gap: 10px;
}

.harreth-search-item {
  display: flex;
  align-items: center;
  gap: 18px;
  padding: 10px;
  color: #fff;
  text-decoration: none;
  background: #292d29;
  border: 1px solid transparent;
}

.harreth-search-item:hover,
.harreth-search-item:focus-visible {
  background: #343a33;
  border-color: #b7924a;
}

.harreth-search-item img {
  width: 86px;
  height: 86px;
  flex-shrink: 0;
  object-fit: contain;
  background: #dddcd4;
}

.harreth-search-product-info {
  flex: 1;
  min-width: 0;
}

.harreth-search-product-info strong {
  display: block;
  margin-bottom: 7px;
  font-size: 15px;
}

.harreth-search-product-info span {
  color: #b5b9af;
  font-size: 12px;
}

.harreth-search-arrow {
  margin-right: 10px;
  color: #b7924a;
  font-size: 23px;
}

.harreth-search-empty {
  padding: 34px 10px;
  color: #c7c7c0;
  text-align: center;
}

.harreth-search-footer {
  margin: 30px 0 0;
  color: #b7924a;
  font-size: 10px;
  letter-spacing: 2px;
  text-align: center;
}

/* CLICKABLE CART ITEMS */

#snipcart .snipcart-item-line__title,
#snipcart .snipcart-item-line__media {
  cursor: pointer !important;
}

#snipcart .snipcart-item-line__title:hover {
  color: #d0aa60 !important;
  text-decoration: underline;
}

#snipcart .snipcart-item-line__title:focus-visible,
#snipcart .snipcart-item-line__media:focus-visible {
  outline: 2px solid #d0aa60 !important;
  outline-offset: 3px;
}

/* GOLD CHECKOUT */

#snipcart .snipcart-cart-button--highlight {
  background: #b7924a !important;
  background-image: none !important;
  color: #0b0b0b !important;
  border-color: #b7924a !important;
}

#snipcart .snipcart-cart-button--highlight:hover {
  background: #d0aa60 !important;
}

/* CONTINUE SHOPPING */

#snipcart .harreth-continue-shopping {
  display: flex !important;
  width: 100% !important;
  min-height: 44px !important;
  align-items: center;
  justify-content: center;
  margin-top: 14px !important;
  padding: 12px 18px !important;
  box-sizing: border-box;
  background: #181818 !important;
  color: #fff !important;
  border: 1px solid #b7924a !important;
  border-radius: 0;
  font-family: Arial, sans-serif;
  font-size: 12px;
  font-weight: 800;
  letter-spacing: 1.5px;
  text-align: center;
  text-decoration: none !important;
  text-transform: uppercase;
  cursor: pointer;
}

#snipcart .harreth-continue-shopping:hover {
  background: #b7924a !important;
  color: #0b0b0b !important;
}

/* CLEAR CART */

#snipcart .harreth-clear-cart {
  display: flex !important;
  width: 100% !important;
  min-height: 42px !important;
  align-items: center;
  justify-content: center;
  margin-top: 10px !important;
  padding: 10px 18px !important;
  box-sizing: border-box;
  background: #251919 !important;
  color: #e6a09a !important;
  border: 1px solid #80423c !important;
  border-radius: 0;
  font-family: Arial, sans-serif;
  font-size: 11px;
  font-weight: 800;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  cursor: pointer;
}

#snipcart .harreth-clear-cart:hover {
  background: #442522 !important;
  color: #fff !important;
}

#snipcart .harreth-clear-cart:disabled {
  opacity: 0.65;
  cursor: progress;
}

#snipcart .harreth-clear-cart:focus-visible,
#snipcart .harreth-continue-shopping:focus-visible {
  outline: 2px solid #fff !important;
  outline-offset: 3px;
}

/* READABLE PAYMENT-STEP TEXT OUTSIDE IFRAME */

#snipcart .snipcart-payment,
#snipcart .snipcart-payment p,
#snipcart .snipcart-payment label,
#snipcart .snipcart-payment .snipcart__font--tiny,
#snipcart .snipcart-payment .snipcart__font--secondary,
#snipcart .snipcart-payment .snipcart__font--std,
#snipcart .snipcart-payment-info,
#snipcart .snipcart-payment-info * {
  color: #e5e5e5 !important;
  opacity: 1 !important;
}

#snipcart .snipcart-payment__header {
  color: #fff !important;
}

#snipcart .snipcart-payment .snipcart__font--slim {
  color: #d0d0d0 !important;
  opacity: 1 !important;
}

/* COMPLETED BILLING AND SHIPPING DETAILS */

#snipcart .snipcart-billing-completed__information,
#snipcart .snipcart-shipping-completed__information,
#snipcart .snipcart-checkout-step__cols,
#snipcart .snipcart-checkout-step__cols span,
#snipcart .snipcart-cart-summary .snipcart__font--tiny {
  color: #dddddd !important;
  opacity: 1 !important;
}

/* MOBILE */

@media (max-width:600px) {
  .harreth-search-overlay {
    padding: 16px 10px;
  }

  .harreth-search-panel {
    padding: 30px 18px;
  }

  .harreth-search-item img {
    width: 65px;
    height: 65px;
  }
}

`;


/* ==========================================
   PAYMENT FORM CUSTOMIZATION
   ========================================== */

/*
  Snipcart places credit card fields inside
  a secure iframe.

  Standard CSS cannot style its contents.
  Use Snipcart's supported SDK instead.
*/

let harrethPaymentThemeApplied = false;

function applyHarrethPaymentTheme() {

  if (harrethPaymentThemeApplied) return;

  const customize =
    window.Snipcart?.api?.theme?.customization
      ?.registerPaymentFormCustomization;

  if (typeof customize !== "function") return;

  customize({
    input: {
      backgroundColor: "#262626",
      color: "#ffffff",
      border: "1px solid #777777",
      fontSize: "16px",
      placeholder: {
        color: "#d3d3d3"
      }
    },
    label: {
      color: "#eeeeee",
      fontSize: "14px",
      backgroundColor: "#191919"
    }
  });

  harrethPaymentThemeApplied = true;
}

/*
  Register the customization as soon as
  Snipcart's SDK becomes ready.

  It must be registered BEFORE the
  payment form is created.
*/

document.addEventListener(
  "snipcart.ready",
  applyHarrethPaymentTheme
);

/*
  Also handle a page where Snipcart
  initialized before this script ran.
*/

if (window.Snipcart?.api?.theme) {
  applyHarrethPaymentTheme();
}


/* ==========================================
   SEARCH INITIALIZATION
   ========================================== */

function initializeHarrethSearch() {

  if (document.getElementById(
    "harreth-search-overlay"
  )) {
    return;
  }

  const overlay = document.createElement("div");

  overlay.id = "harreth-search-overlay";
  overlay.className = "harreth-search-overlay";

  overlay.innerHTML = `
    <div class="harreth-search-panel"
         role="dialog"
         aria-modal="true"
         aria-labelledby="harreth-search-title">

      <button
        type="button"
        class="harreth-search-close"
        aria-label="Close search"
      >×</button>

      <p class="harreth-search-eyebrow">
        HARRETH OUTFITTERS
      </p>

      <h2 class="harreth-search-title"
          id="harreth-search-title">
        FIND YOUR GEAR.
      </h2>

      <p class="harreth-search-subtitle">
        Live where adventure leads.
        Find your next essential.
      </p>

      <div class="harreth-search-field">

        <svg class="harreth-search-icon"
             viewBox="0 0 24 24"
             fill="none"
             stroke="currentColor"
             stroke-width="2"
             aria-hidden="true">
          <circle cx="11" cy="11" r="7"></circle>
          <path d="m16 16 5 5"></path>
        </svg>

        <input
          id="harreth-search-input"
          type="search"
          placeholder="Search shirts, hats, gear..."
          autocomplete="off"
          aria-label="Search HARRETH products"
        >

      </div>

      <div class="harreth-search-label"
           id="harreth-search-results-label">
        EXPLORE HARRETH
      </div>

      <div class="harreth-search-results"
           id="harreth-search-results"
           aria-live="polite"></div>

      <p class="harreth-search-footer">
        LIVE WHERE ADVENTURE LEADS.
      </p>

    </div>
  `;

  document.body.appendChild(overlay);

  const input = document.getElementById(
    "harreth-search-input"
  );

  const closeButton = overlay.querySelector(
    ".harreth-search-close"
  );

  input.addEventListener("input", () => {
    renderHarrethSearch(input.value);
  });

  closeButton.addEventListener(
    "click",
    closeHarrethSearch
  );

  overlay.addEventListener("click", event => {
    if (event.target === overlay) {
      closeHarrethSearch();
    }
  });

  overlay.addEventListener("keydown", event => {

    if (event.key !== "Tab") return;

    const focusable = [
      closeButton,
      input,
      ...overlay.querySelectorAll(".harreth-search-item")
    ];

    const first = focusable[0];
    const last = focusable[focusable.length - 1];

    if (
      event.shiftKey &&
      document.activeElement === first
    ) {
      event.preventDefault();
      last.focus();
    } else if (
      !event.shiftKey &&
      document.activeElement === last
    ) {
      event.preventDefault();
      first.focus();
    }
  });

  renderHarrethSearch("");
}


/* ==========================================
   SEARCH RESULTS
   ========================================== */

function renderHarrethSearch(term) {

  const results = document.getElementById(
    "harreth-search-results"
  );

  const label = document.getElementById(
    "harreth-search-results-label"
  );

  if (!results || !label) return;

  const query = term.trim().toLowerCase();

  const matches = harrethProducts.filter(product => {

    const searchable = [
      product.name,
      product.detail,
      product.keywords
    ].join(" ").toLowerCase();

    return searchable.includes(query);
  });

  label.textContent = query
    ? `SEARCH RESULTS (${matches.length})`
    : "EXPLORE HARRETH";

  results.replaceChildren();

  if (!matches.length) {
    const message = document.createElement("p");

    message.className = "harreth-search-empty";

    message.textContent =
      "No gear found. Try a shirt, hat, or backpack.";

    results.appendChild(message);
    return;
  }

  matches.forEach(product => {

    const link = document.createElement("a");
    link.className = "harreth-search-item";
    link.href = product.url;

    const image = document.createElement("img");
    image.src = product.image;
    image.alt = product.name;
    image.loading = "lazy";

    const info = document.createElement("div");
    info.className = "harreth-search-product-info";

    const name = document.createElement("strong");
    name.textContent = product.name;

    const detail = document.createElement("span");
    detail.textContent = product.detail;

    const arrow = document.createElement("span");
    arrow.className = "harreth-search-arrow";
    arrow.textContent = "→";
    arrow.setAttribute("aria-hidden", "true");

    info.append(name, detail);
    link.append(image, info, arrow);
    results.appendChild(link);
  });
}


/* ==========================================
   OPEN AND CLOSE SEARCH
   ========================================== */

let harrethPreviousFocus = null;

function openHarrethSearch() {

  initializeHarrethSearch();

  harrethPreviousFocus = document.activeElement;

  const overlay = document.getElementById(
    "harreth-search-overlay"
  );

  const input = document.getElementById(
    "harreth-search-input"
  );

  overlay.classList.add("active");

  document.body.style.overflow = "hidden";

  input.value = "";

  renderHarrethSearch("");

  input.focus();
}

function closeHarrethSearch() {

  const overlay = document.getElementById(
    "harreth-search-overlay"
  );

  if (!overlay ||
      !overlay.classList.contains("active")) {
    return;
  }

  overlay.classList.remove("active");

  document.body.style.overflow = "";

  if (harrethPreviousFocus &&
      typeof harrethPreviousFocus.focus === "function") {
    harrethPreviousFocus.focus();
  }
}

document.addEventListener("keydown", event => {
  if (event.key === "Escape") {
    closeHarrethSearch();
  }
});


/* ==========================================
   CLICKABLE CART PRODUCTS
   ========================================== */

function getHarrethCartTarget(element) {

  if (!(element instanceof Element)) return null;

  return element.closest(
    ".snipcart-item-line__title, " +
    ".snipcart-item-line__media"
  );
}

function getHarrethCartProduct(element) {

  const row = element.closest(".snipcart-item-line");

  if (!row) return null;

  const title = row.querySelector(
    ".snipcart-item-line__title"
  );

  if (!title) return null;

  const cartName = title.textContent
    .trim()
    .replace(/\s+/g, " ")
    .toLowerCase();

  return harrethProducts.find(product =>
    product.cartName.toLowerCase() === cartName
  ) || null;
}

document.addEventListener("click", event => {

  const target = getHarrethCartTarget(event.target);
  if (!target) return;

  const product = getHarrethCartProduct(target);
  if (!product) return;

  event.preventDefault();
  event.stopPropagation();

  window.location.href = product.url;

}, true);

document.addEventListener("keydown", event => {

  if (event.key !== "Enter" &&
      event.key !== " ") {
    return;
  }

  const target = getHarrethCartTarget(event.target);
  if (!target) return;

  const product = getHarrethCartProduct(target);
  if (!product) return;

  event.preventDefault();

  window.location.href = product.url;
});

function prepareHarrethCartLinks() {

  document.querySelectorAll(
    "#snipcart .snipcart-item-line__title, " +
    "#snipcart .snipcart-item-line__media"
  ).forEach(element => {

    const product = getHarrethCartProduct(element);
    if (!product) return;

    if (element.getAttribute("role") !== "link") {

      element.tabIndex = 0;
      element.setAttribute("role", "link");

      element.setAttribute(
        "aria-label",
        "View " + product.cartName
      );

      element.setAttribute(
        "title",
        "View product"
      );
    }
  });
}


/* ==========================================
   CONTINUE SHOPPING
   ========================================== */

function addHarrethContinueShopping() {

  const snipcart = document.getElementById(
    "snipcart"
  );

  if (!snipcart) return;

  const checkoutButton = snipcart.querySelector(
    ".snipcart-cart__footer " +
    ".snipcart-cart-button--highlight"
  );

  if (!checkoutButton) return;

  const footer = checkoutButton.closest("footer");
  if (!footer) return;

  if (footer.querySelector(
    ".harreth-continue-shopping"
  )) return;

  const link = document.createElement("a");

  link.href = "index.html";
  link.className = "harreth-continue-shopping";
  link.textContent = "← CONTINUE SHOPPING";

  link.setAttribute(
    "aria-label",
    "Continue shopping at HARRETH Outfitters"
  );

  checkoutButton.insertAdjacentElement(
    "afterend",
    link
  );
}


/* ==========================================
   CART ITEMS
   ========================================== */

function getHarrethCartItems() {

  const store = window.Snipcart?.store;
  if (!store) return [];

  const collection =
    store.getState()?.cart?.items?.items;

  if (Array.isArray(collection)) {
    return collection;
  }

  if (collection && typeof collection === "object") {
    return Object.values(collection).filter(
      item => item && typeof item === "object"
    );
  }

  return [];
}


/* ==========================================
   CLEAR ENTIRE CART
   ========================================== */

let harrethClearingCart = false;

async function clearHarrethCart() {

  if (harrethClearingCart) return;

  const api = window.Snipcart?.api?.cart?.items;

  if (!api || typeof api.remove !== "function") {

    window.alert(
      "The cart is still loading. Please try again."
    );

    return;
  }

  const items = getHarrethCartItems();

  if (!items.length) {

    const count = window.Snipcart?.store
      ?.getState()?.cart?.items?.count || 0;

    window.alert(
      count > 0
        ? "The cart is updating. Please try again."
        : "Your cart is already empty."
    );

    return;
  }

  const confirmed = window.confirm(
    "Clear your entire HARRETH shopping cart?\n\n" +
    "All products and selected sizes will be removed."
  );

  if (!confirmed) return;

  harrethClearingCart = true;

  const button = document.querySelector(
    "#snipcart .harreth-clear-cart"
  );

  if (button) {
    button.disabled = true;
    button.textContent = "CLEARING CART...";
  }

  let removed = 0;

  try {

    for (const item of items) {

      if (!item.uniqueId) {
        throw new Error("Missing Snipcart item ID");
      }

      await api.remove(item.uniqueId);

      removed++;

      if (button && button.isConnected) {
        button.textContent =
          `REMOVING ITEMS (${removed}/${items.length})...`;
      }
    }

  } catch (error) {

    console.error(
      "HARRETH cart removal error:",
      error
    );

    window.alert(
      "We couldn't remove every item. " +
      "Please check your cart and try again."
    );

  } finally {

    harrethClearingCart = false;

    if (button && button.isConnected) {
      button.disabled = false;
      button.textContent = "✕ CLEAR ENTIRE CART";
    }

    updateHarrethCart();
  }
}


/* ==========================================
   CLEAR CART BUTTON
   ========================================== */

function addHarrethClearCart() {

  const snipcart = document.getElementById(
    "snipcart"
  );

  if (!snipcart) return;

  const continueLink = snipcart.querySelector(
    ".harreth-continue-shopping"
  );

  if (!continueLink) return;

  const footer = continueLink.closest("footer");
  if (!footer) return;

  if (footer.querySelector(
    ".harreth-clear-cart"
  )) return;

  const button = document.createElement("button");

  button.type = "button";
  button.className = "harreth-clear-cart";
  button.textContent = "✕ CLEAR ENTIRE CART";

  button.setAttribute(
    "aria-label",
    "Remove all items from shopping cart"
  );

  button.addEventListener(
    "click",
    clearHarrethCart
  );

  continueLink.insertAdjacentElement(
    "afterend",
    button
  );
}


/* ==========================================
   MONITOR SNIPCART
   ========================================== */

let harrethUpdateScheduled = false;

function updateHarrethCart() {

  if (harrethUpdateScheduled) return;

  harrethUpdateScheduled = true;

  requestAnimationFrame(() => {

    harrethUpdateScheduled = false;

    prepareHarrethCartLinks();
    addHarrethContinueShopping();
    addHarrethClearCart();
  });
}


/* ==========================================
   INITIALIZE WEBSITE
   ========================================== */

function initializeHarrethWebsite() {

  if (!document.getElementById(
    "harreth-custom-styles"
  )) {

    const style = document.createElement("style");

    style.id = "harreth-custom-styles";

    style.textContent = harrethStyles;

    document.head.appendChild(style);
  }

  initializeHarrethSearch();

  const observer = new MutationObserver(() => {
    updateHarrethCart();
  });

  observer.observe(document.body, {
    childList: true,
    subtree: true
  });

  updateHarrethCart();

  applyHarrethPaymentTheme();
}

if (document.readyState === "loading") {

  document.addEventListener(
    "DOMContentLoaded",
    initializeHarrethWebsite
  );

} else {

  initializeHarrethWebsite();
}

/* END OF HARRETH MASTER SCRIPT */
