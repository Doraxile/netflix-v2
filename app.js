/**
 * NENGNETPLIX Storefront Interactive Logic
 * Features: 2-Step Order Modal, 130+ Photo Testimonial Collage, Lightbox, Quick Filters & Latest Rules.
 */

// Application State
let currentCategory = "all";
let searchQuery = "";
let selectedProduct = null;
let selectedPackage = null;
let selectedOption = null;
let selectedPayment = "QRIS";
let currentModalStep = 1;

// Testimonial Collage State
let currentTestiFilter = "all";
let testiVisibleCount = 18;
let currentLightboxIndex = 0;
let currentLightboxList = [];

// SVG Icons Dictionary
const APP_ICONS = {
  netflix: `<svg class="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M5.398 0v24c1.17-.41 2.379-.76 3.602-1.049V0H5.398zm9.604 0v19.467c1.223-.19 2.432-.32 3.6-.39V0h-3.6zM9.002 0l5.996 22.951V0H9.002z"/></svg>`,
  disney: `<svg class="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M11.996 2.004C6.478 2.004 2 6.482 2 12s4.478 9.996 9.996 9.996 9.996-4.478 9.996-9.996S17.514 2.004 11.996 2.004zm4.195 14.372c-.85 1.107-2.31 1.776-3.87 1.776-2.502 0-4.394-1.636-4.394-4.22 0-3.056 2.533-5.074 5.765-5.074 1.258 0 2.221.31 2.822.756l-.758 1.487c-.505-.333-1.19-.537-2.03-.537-2.128 0-3.666 1.344-3.666 3.336 0 1.636 1.157 2.653 2.723 2.653 1.054 0 1.944-.452 2.482-1.137l.926.96z"/></svg>`,
  prime: `<svg class="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M13.62 13.57c-1.57 0-2.48-.96-2.48-2.61 0-1.89 1.12-2.73 2.71-2.73 1.41 0 2.04.57 2.37 1.31l-1.47.74c-.16-.39-.42-.64-.9-.64-.69 0-1.1.47-1.1 1.33 0 .82.38 1.26 1.03 1.26.47 0 .81-.22.98-.6l1.45.74c-.45.86-1.34 1.54-2.59 1.54zm-9.35 4.39c5.96 4.38 14.28 2.04 18.06-2.09.28-.31-.03-.7-.41-.53-3.69 1.65-8.23 2.14-12.78-.58-.41-.25-.87.21-.49.61l-4.38 2.59z"/></svg>`,
  hbo: `<svg class="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-4.5 13H6V9h1.5v2.25h2V9H11v6H9.5v-2.25h-2V15zm8.5 0h-3V9h3a3 3 0 0 1 0 6zm0-1.5a1.5 1.5 0 0 0 0-3h-1.5v3H16z"/></svg>`,
  youtube: `<svg class="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>`,
  spotify: `<svg class="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.498 17.306c-.215.353-.674.464-1.027.248-2.812-1.718-6.353-2.107-10.523-1.155-.403.092-.808-.16-.9-.564-.092-.403.16-.808.564-.9 4.567-1.043 8.49-.606 11.637 1.344.354.216.465.675.249 1.027zm1.467-3.262c-.27.441-.849.58-1.29.31-3.22-1.978-8.128-2.55-11.936-1.394-.496.15-1.026-.134-1.176-.63-.15-.496.134-1.026.63-1.176 4.353-1.321 9.774-.682 13.462 1.583.44.27.58.849.31 1.29zm.126-3.41c-3.86-2.292-10.228-2.503-13.906-1.387-.593.18-1.223-.156-1.403-.749-.18-.593.156-1.223.749-1.403 4.227-1.284 11.26-1.037 15.698 1.597.533.316.708 1.008.392 1.541-.316.533-1.008.708-1.541.392z"/></svg>`,
  openai: `<svg class="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M22.282 9.821a5.985 5.985 0 0 0-.516-4.91 6.046 6.046 0 0 0-6.51-2.9A6.065 6.065 0 0 0 4.981 4.18a5.985 5.985 0 0 0-3.998 2.9 6.046 6.046 0 0 0 .743 7.097 5.98 5.98 0 0 0 .51 4.911 6.051 6.051 0 0 0 6.515 2.9A5.985 5.985 0 0 0 13.26 24a6.056 6.056 0 0 0 5.771-4.204 5.99 5.99 0 0 0 3.997-2.9 6.056 6.056 0 0 0-.746-7.075zM12 15a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/></svg>`,
  claude: `<svg class="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm1 14.5h-2v-2h2zm0-4h-2V7h2z"/></svg>`,
  canva: `<svg class="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0zm5.12 15.65c-.88 1.48-2.67 2.4-4.7 2.4-3.5 0-6.05-2.68-6.05-6.22 0-3.72 2.8-6.43 6.32-6.43 2.05 0 3.82.95 4.67 2.45l-1.8 1.15c-.55-.95-1.63-1.55-2.87-1.55-2.28 0-4.08 1.8-4.08 4.38 0 2.47 1.7 4.22 3.98 4.22 1.3 0 2.4-.67 2.95-1.68l1.58 1.28z"/></svg>`,
  capcut: `<svg class="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M19.34 7.07L16.27 4a1.5 1.5 0 0 0-2.12 0l-9.9 9.9a1.5 1.5 0 0 0 0 2.12l3.07 3.07a1.5 1.5 0 0 0 2.12 0l9.9-9.9a1.5 1.5 0 0 0 0-2.12zm-12.73 12l-2-2 7.78-7.78 2 2-7.78 7.78z"/></svg>`,
  vidio: `<svg class="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z"/></svg>`,
  viu: `<svg class="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M4 6h3.5l3 8.5L13.5 6H17l-5 12h-3L4 6zm14 0h3v12h-3V6z"/></svg>`,
  wetv: `<svg class="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M21 3H3a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2zm-11 13H7l-2-7h2.5l1 4.5 1.2-4.5h2.6l1.2 4.5 1-4.5H19l-2 7h-3l-2-5.5-2 5.5z"/></svg>`,
  iqiyi: `<svg class="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm-1 14H8V8h3v8zm5 0h-3V8h3v8z"/></svg>`,
  "apple-music": `<svg class="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.477 2 12c0 5.524 4.477 10 10 10s10-4.476 10-10c0-5.523-4.477-10-10-10zm4.015 7.086l-4.57 1.055a.75.75 0 0 0-.585.733v5.188a2.25 2.25 0 1 1-1.5-2.121v-4.88a1.5 1.5 0 0 1 1.17-1.464l4.57-1.055a.75.75 0 0 1 .915.732v4.868a2.25 2.25 0 1 1-1.5-2.121V9.818a.75.75 0 0 1 1.5 0z"/></svg>`,
  duolingo: `<svg class="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M12 2a9 9 0 0 0-9 9c0 3.57 2.11 6.64 5.15 8.04l-.65 2.61a.5.5 0 0 0 .68.57l3.82-1.91A8.995 8.995 0 0 0 21 11a9 9 0 0 0-9-9zm-3 7.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm6 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3z"/></svg>`,
  bstation: `<svg class="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M17.813 4.653h.854c1.51 0 2.733 1.224 2.733 2.734v10.18a2.734 2.734 0 0 1-2.733 2.734H5.333A2.734 2.734 0 0 1 2.6 17.567V7.387a2.734 2.734 0 0 1 2.733-2.734h.854L4.31 2.775a.75.75 0 1 1 1.06-1.06l2.5 2.5h8.26l2.5-2.5a.75.75 0 1 1 1.06 1.06l-1.877 1.878zM8.5 10a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm7 0a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z"/></svg>`,
  crunchyroll: `<svg class="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M12 2a10 10 0 1 0 10 10A10.011 10.011 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8.01 8.01 0 0 1-8 8zm4.5-8a4.5 4.5 0 1 1-4.5-4.5 4.5 4.5 0 0 1 4.5 4.5zm-3 0a1.5 1.5 0 1 0-1.5 1.5 1.5 1.5 0 0 0 1.5-1.5z"/></svg>`,
  dramabox: `<svg class="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2zm6 3v10l7-5-7-5z"/></svg>`,
  alight: `<svg class="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M12 2L2 22h20L12 2zm0 5.5l5.5 11h-11L12 7.5z"/></svg>`,
  ilovepdf: `<svg class="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>`,
  dazz: `<svg class="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6zm0-7a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z"/></svg>`,
  getcontact: `<svg class="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 14.93V19a1 1 0 0 1-2 0v-2.07A6.002 6.002 0 0 1 6.07 13H4a1 1 0 0 1 0-2h2.07A6.002 6.002 0 0 1 11 6.07V4a1 1 0 0 1 2 0v2.07A6.002 6.002 0 0 1 17.93 11H20a1 1 0 0 1 0 2h-2.07A6.002 6.002 0 0 1 13 16.93z"/></svg>`,
  line: `<svg class="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.087.495.239l2.475 3.357V8.108c0-.345.282-.63.631-.63.345 0 .626.285.626.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314"/></svg>`,
  convert: `<svg class="w-6 h-6 fill-none stroke-current" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"/></svg>`
};

// Helper: Format Rupiah
function formatRupiah(amount) {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(amount).replace('IDR', 'Rp');
}

// Operational Status Indicator
function checkOperatingStatus() {
  const now = new Date();
  const utc = now.getTime() + (now.getTimezoneOffset() * 60000);
  const wibDate = new Date(utc + (3600000 * 7));
  const day = wibDate.getDay();
  const hour = wibDate.getHours();
  
  let isOpen = false;
  if (day >= 1 && day <= 5) {
    isOpen = hour >= 10 && hour < 22; // Mon - Fri: 10:00 - 22:00 WIB
  } else {
    isOpen = hour >= 10 && hour <= 23; // Sat - Sun: 10:00 - 00:00 WIB
  }

  const statusText = document.getElementById("status-text");
  const statusIndicator = document.getElementById("status-indicator");
  if (statusText && statusIndicator) {
    if (isOpen) {
      statusText.innerHTML = `Online • Fast Response 1-15 Menit`;
      statusIndicator.className = "w-2 h-2 rounded-full bg-emerald-500 calm-pulsing-dot";
    } else {
      statusText.innerHTML = `Istirahat • Pesanan Tetap Ditampung via WA`;
      statusIndicator.className = "w-2 h-2 rounded-full bg-amber-400";
    }
  }
}

// Render Clean Category Filter Tabs
function renderFilterControls() {
  const categoryContainer = document.getElementById("category-filter-pills");

  if (categoryContainer) {
    categoryContainer.innerHTML = CATEGORIES.map(cat => {
      const isActive = cat.id === currentCategory;
      const count = cat.id === 'all' ? PRODUCTS.length : PRODUCTS.filter(p => p.category === cat.id).length;
      return `
        <button 
          type="button"
          onclick="setCategory('${cat.id}')"
          class="filter-chip px-3.5 py-2 rounded-xl text-xs font-medium whitespace-nowrap min-touch-target cursor-pointer flex items-center gap-1.5 ${isActive ? 'active' : ''}"
        >
          <span>${cat.name}</span>
          <span class="text-[10px] px-1.5 py-0.5 rounded-md ${isActive ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-500'}">
            ${count}
          </span>
        </button>
      `;
    }).join("");
  }
}

// Product Filtering Predicate
function matchesFilters(product) {
  const q = searchQuery.toLowerCase().trim();
  if (q) {
    const inName = product.name.toLowerCase().includes(q);
    const inTagline = product.tagline.toLowerCase().includes(q);
    const inCategory = product.category.toLowerCase().includes(q);
    if (!inName && !inTagline && !inCategory) return false;
  }

  if (currentCategory !== "all" && product.category !== currentCategory) {
    return false;
  }

  return true;
}

function setCategory(catId) {
  currentCategory = catId;
  renderFilterControls();
  renderProducts();
}

function handleSearch(query) {
  searchQuery = query;
  renderProducts();
}

function resetFilters() {
  currentCategory = "all";
  searchQuery = "";
  const input = document.getElementById("search-input");
  if (input) input.value = "";
  renderFilterControls();
  renderProducts();
}

// Render Products Grid
function renderProducts() {
  const grid = document.getElementById("products-grid");
  const emptyState = document.getElementById("empty-state");
  const resultCount = document.getElementById("result-count");
  if (!grid) return;

  const filtered = PRODUCTS.filter(matchesFilters);

  if (resultCount) {
    resultCount.textContent = `${filtered.length} aplikasi`;
  }

  if (filtered.length === 0) {
    grid.innerHTML = "";
    if (emptyState) emptyState.classList.remove("hidden");
    return;
  }

  if (emptyState) emptyState.classList.add("hidden");

  grid.innerHTML = filtered.map(product => {
    const iconSvg = APP_ICONS[product.iconType] || APP_ICONS.netflix;
    const lowestPriceFormatted = (product.lowestPrice / 1000).toLocaleString() + 'K';

    return `
      <div 
        class="clean-card p-5 flex flex-col justify-between cursor-pointer group"
        onclick="openOrderModal('${product.id}')"
      >
        <div>
          <!-- Top Row: Icon + Subtle Status Badge -->
          <div class="flex items-center justify-between gap-3 mb-3.5">
            <div class="w-12 h-12 rounded-2xl flex items-center justify-center p-2.5 shadow-2xs ${product.iconBg}">
              ${iconSvg}
            </div>
            <div class="flex items-center gap-1.5">
              ${product.isBestseller ? `
                <span class="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-amber-50 text-amber-800 border border-amber-100">
                  🔥 Best
                </span>
              ` : ''}
              <span class="text-[10px] font-medium px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-100 flex items-center gap-1">
                <span class="w-1.5 h-1.5 rounded-full bg-emerald-500"></span> Ready
              </span>
            </div>
          </div>

          <!-- Product Name & Tagline -->
          <h3 class="font-heading font-bold text-base text-slate-900 group-hover:text-purple-900 transition-colors leading-snug mb-1">
            ${product.name}
          </h3>
          <p class="text-xs text-slate-500 line-clamp-1 mb-4 leading-normal">
            ${product.tagline}
          </p>
        </div>

        <!-- Bottom Row: Price + Minimal CTA -->
        <div class="pt-3.5 border-t border-slate-100 flex items-center justify-between mt-auto">
          <div>
            <span class="text-[10px] text-slate-400 block uppercase tracking-wider font-medium">Mulai dari</span>
            <span class="font-heading font-extrabold text-sm sm:text-base text-slate-800">
              Rp ${lowestPriceFormatted}
            </span>
          </div>
          <button 
            type="button"
            onclick="event.stopPropagation(); openOrderModal('${product.id}')"
            class="px-3.5 py-2 rounded-xl bg-slate-50 hover:bg-[#F3EEFF] text-slate-700 hover:text-purple-900 font-semibold text-xs transition-all flex items-center gap-1 group-hover:bg-[#E0D4FD] group-hover:text-purple-950"
          >
            <span>Pilih Paket</span>
            <span class="text-xs">→</span>
          </button>
        </div>
      </div>
    `;
  }).join("");
}

// -------------------------------------------------------------
// TESTIMONIAL COLLAGE & PHOTO GALLERY LOGIC
// -------------------------------------------------------------

function renderTestiFilterButtons() {
  const container = document.getElementById("testi-category-pills");
  if (!container) return;

  container.innerHTML = TESTIMONIAL_CATEGORIES.map(cat => {
    const isActive = cat.id === currentTestiFilter;
    return `
      <button 
        type="button"
        onclick="setTestiFilter('${cat.id}')"
        class="filter-chip px-3.5 py-2 rounded-xl text-xs font-medium whitespace-nowrap min-touch-target cursor-pointer ${isActive ? 'active' : ''}"
      >
        <span>${cat.name}</span>
      </button>
    `;
  }).join("");
}

function getFilteredTestimonials() {
  if (currentTestiFilter === "all") {
    return TESTIMONIAL_PHOTOS;
  }
  return TESTIMONIAL_PHOTOS.filter(p => p.category === currentTestiFilter);
}

function renderTestimonialCollage() {
  const container = document.getElementById("testi-collage-grid");
  const countBadge = document.getElementById("testi-total-count");
  const loadMoreBtn = document.getElementById("testi-load-more-btn");
  if (!container) return;

  currentLightboxList = getFilteredTestimonials();

  if (countBadge) {
    countBadge.textContent = `${currentLightboxList.length} Foto Bukti`;
  }

  const itemsToRender = currentLightboxList.slice(0, testiVisibleCount);

  container.innerHTML = itemsToRender.map((photo, index) => {
    return `
      <div 
        class="testi-card group relative overflow-hidden rounded-2xl bg-white border border-slate-100 shadow-subtle cursor-pointer"
        onclick="openLightbox(${index})"
      >
        <div class="relative overflow-hidden bg-slate-100">
          <img 
            src="${encodeURI(photo.src)}" 
            alt="${photo.title || 'Bukti Transaksi'}"
            loading="lazy"
            class="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-end p-3">
            <div class="text-white text-xs">
              <span class="font-bold block text-[11px]">${photo.app}</span>
              <span class="text-[10px] text-white/80 line-clamp-1">${photo.title}</span>
            </div>
          </div>
        </div>
        <div class="p-2.5 flex items-center justify-between text-[11px] bg-white">
          <span class="font-semibold text-slate-700 truncate">${photo.app}</span>
          <span class="text-[10px] px-2 py-0.5 rounded-full bg-purple-50 text-purple-700 font-medium border border-purple-100/60">
            Bukti
          </span>
        </div>
      </div>
    `;
  }).join("");

  if (loadMoreBtn) {
    if (testiVisibleCount >= currentLightboxList.length) {
      loadMoreBtn.classList.add("hidden");
    } else {
      loadMoreBtn.classList.remove("hidden");
      loadMoreBtn.innerHTML = `<span>Tampilkan Lebih Banyak (${currentLightboxList.length - testiVisibleCount} tersisa)</span> <span>↓</span>`;
    }
  }
}

function setTestiFilter(filterId) {
  currentTestiFilter = filterId;
  testiVisibleCount = 18;
  renderTestiFilterButtons();
  renderTestimonialCollage();
}

function loadMoreTestimonials() {
  testiVisibleCount += 24;
  renderTestimonialCollage();
}

// -------------------------------------------------------------
// FULL-SCREEN LIGHTBOX MODAL
// -------------------------------------------------------------

function openLightbox(index) {
  currentLightboxIndex = index;
  updateLightboxContent();
  const modal = document.getElementById("lightbox-modal");
  if (modal) {
    modal.classList.remove("hidden");
    modal.classList.add("active");
    document.body.style.overflow = "hidden";
  }
}

function updateLightboxContent() {
  if (!currentLightboxList || currentLightboxList.length === 0) return;
  const photo = currentLightboxList[currentLightboxIndex];
  if (!photo) return;

  const imgEl = document.getElementById("lightbox-img");
  const captionEl = document.getElementById("lightbox-caption");
  const counterEl = document.getElementById("lightbox-counter");

  if (imgEl) {
    imgEl.src = encodeURI(photo.src);
    imgEl.alt = photo.title || photo.app;
  }
  if (captionEl) {
    captionEl.textContent = `${photo.app} • ${photo.title}`;
  }
  if (counterEl) {
    counterEl.textContent = `${currentLightboxIndex + 1} dari ${currentLightboxList.length}`;
  }
}

function nextLightbox() {
  if (currentLightboxList.length === 0) return;
  currentLightboxIndex = (currentLightboxIndex + 1) % currentLightboxList.length;
  updateLightboxContent();
}

function prevLightbox() {
  if (currentLightboxList.length === 0) return;
  currentLightboxIndex = (currentLightboxIndex - 1 + currentLightboxList.length) % currentLightboxList.length;
  updateLightboxContent();
}

function closeLightbox() {
  const modal = document.getElementById("lightbox-modal");
  if (modal) {
    modal.classList.remove("active");
    modal.classList.add("hidden");
    document.body.style.overflow = "auto";
  }
}

// -------------------------------------------------------------
// ORDER MODAL LOGIC
// -------------------------------------------------------------

function openOrderModal(productId) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  selectedProduct = product;
  selectedPackage = product.packages[0];
  selectedOption = selectedPackage.options[0];
  currentModalStep = 1;
  
  renderOrderModal();
  
  const modal = document.getElementById("order-modal");
  if (modal) {
    modal.classList.remove("hidden");
    modal.classList.add("active");
    document.body.style.overflow = "hidden";
  }
}

function renderOrderModal() {
  if (!selectedProduct) return;

  const titleEl = document.getElementById("modal-product-title");
  const iconEl = document.getElementById("modal-product-icon");
  const stepIndicatorEl = document.getElementById("modal-step-indicator");
  const step1Container = document.getElementById("modal-step-1");
  const step2Container = document.getElementById("modal-step-2");

  titleEl.textContent = selectedProduct.name;
  iconEl.className = `w-10 h-10 rounded-xl flex items-center justify-center p-2 shadow-2xs ${selectedProduct.iconBg}`;
  iconEl.innerHTML = APP_ICONS[selectedProduct.iconType] || APP_ICONS.netflix;

  if (currentModalStep === 1) {
    stepIndicatorEl.textContent = "Langkah 1 dari 2: Pilih Paket & Durasi";
    step1Container.classList.remove("hidden");
    step2Container.classList.add("hidden");
    renderStep1Details();
  } else {
    stepIndicatorEl.textContent = "Langkah 2 dari 2: Data Pemesan & Pembayaran";
    step1Container.classList.add("hidden");
    step2Container.classList.remove("hidden");
    renderStep2Details();
  }
}

function renderStep1Details() {
  const packageContainer = document.getElementById("modal-packages-container");
  const durationContainer = document.getElementById("modal-durations-container");
  const rulesEl = document.getElementById("modal-product-rules");
  const priceDisplay = document.getElementById("modal-price-display-step1");

  if (selectedProduct.rules && selectedProduct.rules.length > 0) {
    rulesEl.innerHTML = `
      <div class="p-3.5 rounded-2xl bg-[#FFF0EB] border border-[#FFE5D9] text-xs text-slate-700 leading-relaxed">
        <div class="font-bold flex items-center gap-1.5 mb-1 text-rose-900">
          <span>📌 Wajib Baca Ketentuan:</span>
        </div>
        <ul class="list-disc list-inside space-y-0.5 text-[11px] text-slate-600 pl-0.5">
          ${selectedProduct.rules.map(r => `<li>${r}</li>`).join("")}
        </ul>
      </div>
    `;
    rulesEl.classList.remove("hidden");
  } else {
    rulesEl.classList.add("hidden");
  }

  packageContainer.innerHTML = selectedProduct.packages.map(pkg => {
    const isSelected = selectedPackage && selectedPackage.id === pkg.id;
    return `
      <div 
        onclick="selectPackage('${pkg.id}')"
        class="option-pill p-3 rounded-2xl cursor-pointer ${isSelected ? 'active' : ''}"
      >
        <div class="flex items-center justify-between">
          <span class="font-semibold text-xs sm:text-sm text-slate-800">${pkg.name}</span>
          <span class="text-[11px] text-slate-400">Mulai ${formatRupiah(pkg.options[0].price)}</span>
        </div>
        ${pkg.desc ? `<p class="text-[11px] text-slate-500 mt-1 leading-normal">${pkg.desc}</p>` : ''}
      </div>
    `;
  }).join("");

  if (selectedPackage) {
    durationContainer.innerHTML = selectedPackage.options.map(opt => {
      const isSelected = selectedOption && selectedOption.duration === opt.duration;
      return `
        <button 
          type="button"
          onclick="selectOption('${opt.duration}')"
          class="option-pill px-3.5 py-2.5 rounded-xl text-xs sm:text-sm font-medium flex items-center justify-between gap-2 cursor-pointer min-touch-target ${isSelected ? 'active' : ''}"
        >
          <span>${opt.duration}</span>
          <span class="font-bold text-slate-700">${formatRupiah(opt.price)}</span>
        </button>
      `;
    }).join("");
  }

  if (selectedOption && priceDisplay) {
    priceDisplay.textContent = formatRupiah(selectedOption.price);
  }
}

function renderStep2Details() {
  const summaryProduct = document.getElementById("summary-product");
  const summaryPackage = document.getElementById("summary-package");
  const summaryDuration = document.getElementById("summary-duration");
  const summaryPrice = document.getElementById("summary-price");
  const priceDisplayStep2 = document.getElementById("modal-price-display-step2");

  if (summaryProduct) summaryProduct.textContent = selectedProduct.name;
  if (summaryPackage) summaryPackage.textContent = selectedPackage.name;
  if (summaryDuration) summaryDuration.textContent = selectedOption.duration;
  if (summaryPrice) summaryPrice.textContent = formatRupiah(selectedOption.price);
  if (priceDisplayStep2) priceDisplayStep2.textContent = formatRupiah(selectedOption.price);
}

function selectPackage(pkgId) {
  selectedPackage = selectedProduct.packages.find(p => p.id === pkgId);
  if (selectedPackage) {
    selectedOption = selectedPackage.options[0];
  }
  renderStep1Details();
}

function selectOption(duration) {
  selectedOption = selectedPackage.options.find(o => o.duration === duration);
  renderStep1Details();
}

function goToModalStep(step) {
  if (step === 2) {
    if (!selectedPackage || !selectedOption) {
      showToast("Silakan pilih paket dan durasi terlebih dahulu!");
      return;
    }
  }
  currentModalStep = step;
  renderOrderModal();
}

function setPaymentMethod(method) {
  selectedPayment = method;
  ['QRIS', 'BCA'].forEach(m => {
    const el = document.getElementById(`pay-${m.toLowerCase()}`);
    if (el) {
      if (m === method) {
        el.className = "option-pill active flex items-center justify-center gap-1.5 p-2.5 rounded-xl font-semibold text-xs cursor-pointer min-touch-target";
      } else {
        el.className = "option-pill flex items-center justify-center gap-1.5 p-2.5 rounded-xl font-medium text-xs text-slate-600 cursor-pointer min-touch-target";
      }
    }
  });
}

function closeOrderModal() {
  const modal = document.getElementById("order-modal");
  if (modal) {
    modal.classList.remove("active");
    modal.classList.add("hidden");
    document.body.style.overflow = "auto";
  }
}

function openTermsModal() {
  const modal = document.getElementById("terms-modal");
  const container = document.getElementById("terms-list");
  if (container) {
    container.innerHTML = STORE_TERMS.map((t, idx) => `
      <div class="flex items-start gap-3.5 p-3.5 rounded-2xl bg-[#FAF9F6] border border-slate-100">
        <div class="w-8 h-8 rounded-xl bg-purple-100 text-purple-800 flex items-center justify-center flex-shrink-0 font-bold text-xs mt-0.5">
          ${idx + 1}
        </div>
        <div>
          <h4 class="font-bold text-xs sm:text-sm text-slate-800 mb-1">${t.title}</h4>
          <p class="text-xs text-slate-600 leading-relaxed">${t.desc}</p>
        </div>
      </div>
    `).join("");
  }
  if (modal) {
    modal.classList.remove("hidden");
    modal.classList.add("active");
    document.body.style.overflow = "hidden";
  }
}

function closeTermsModal() {
  const modal = document.getElementById("terms-modal");
  if (modal) {
    modal.classList.remove("active");
    modal.classList.add("hidden");
    document.body.style.overflow = "auto";
  }
}

function renderFaqs() {
  const container = document.getElementById("faq-accordion");
  if (!container) return;

  container.innerHTML = FAQS.map((faq, index) => `
    <div class="faq-item border border-slate-100 rounded-2xl bg-white overflow-hidden transition-colors" id="faq-item-${index}">
      <button 
        type="button"
        onclick="toggleFaq(${index})"
        class="w-full px-5 py-4 text-left flex items-center justify-between gap-3 text-xs sm:text-sm font-bold text-slate-800 hover:text-purple-900 cursor-pointer min-touch-target"
      >
        <span>${faq.q}</span>
        <svg class="faq-icon w-4 h-4 text-slate-400 transition-transform duration-200 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
        </svg>
      </button>
      <div class="faq-content px-5 pb-4 text-xs text-slate-600 leading-relaxed">
        <p>${faq.a}</p>
      </div>
    </div>
  `).join("");
}

function toggleFaq(index) {
  const item = document.getElementById(`faq-item-${index}`);
  if (item) {
    item.classList.toggle("open");
  }
}

function setQuickFilter(qfId) {
  activeQuickFilter = qfId;
  renderFilterControls();
  renderProducts();
}

function setCategory(catId) {
  currentCategory = catId;
  renderFilterControls();
  renderProducts();
}

function handleSearch(query) {
  searchQuery = query;
  renderProducts();
}

function resetFilters() {
  activeQuickFilter = "all";
  currentCategory = "all";
  searchQuery = "";
  const input = document.getElementById("search-input");
  if (input) input.value = "";
  renderFilterControls();
  renderProducts();
}

function submitWhatsAppOrder(event) {
  if (event) event.preventDefault();

  if (!selectedProduct || !selectedPackage || !selectedOption) {
    showToast("Silakan pilih produk dan paket terlebih dahulu!");
    return;
  }

  const nameInput = document.getElementById("customer-name");
  const phoneInput = document.getElementById("customer-phone");
  const notesInput = document.getElementById("customer-notes");

  const customerName = nameInput ? nameInput.value.trim() : "";
  const customerPhone = phoneInput ? phoneInput.value.trim() : "";
  const customerNotes = notesInput ? notesInput.value.trim() : "-";

  if (!customerName) {
    showToast("Harap masukkan Nama Lengkap Anda!");
    if (nameInput) nameInput.focus();
    return;
  }

  try {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: 'InitiateCheckout',
      product_name: selectedProduct.name,
      package_name: selectedPackage.name,
      duration: selectedOption.duration,
      price: selectedOption.price,
      payment_method: selectedPayment,
      customer_name: customerName
    });
    if (typeof window.fbq === 'function') {
      window.fbq('track', 'InitiateCheckout', {
        content_name: selectedProduct.name,
        value: selectedOption.price,
        currency: 'IDR'
      });
    }
  } catch (err) {}

  const message = `Halo Kak ${STORE_NAME}, saya mau order ya:
• Produk: ${selectedProduct.name}
• Paket: ${selectedPackage.name}
• Durasi: ${selectedOption.duration}
• Harga: ${formatRupiah(selectedOption.price)}
• Pembayaran: ${selectedPayment}
• Nama: ${customerName}
${customerPhone ? `• Kontak: ${customerPhone}\n` : ''}• Catatan: ${customerNotes || '-'}

Saya sudah membaca dan menyetujui syarat & ketentuan toko (termasuk wajib kirim bukti login maks 6 jam). Terima kasih!`;

  const encodedMessage = encodeURIComponent(message);
  const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;

  window.open(waUrl, "_blank");
  closeOrderModal();
}

function copyOrderMessage() {
  const nameInput = document.getElementById("customer-name");
  const notesInput = document.getElementById("customer-notes");
  const customerName = nameInput ? nameInput.value.trim() : "Pelanggan";
  const customerNotes = notesInput ? notesInput.value.trim() : "-";

  const message = `Halo Kak ${STORE_NAME}, saya mau order ya:
• Produk: ${selectedProduct ? selectedProduct.name : ''}
• Paket: ${selectedPackage ? selectedPackage.name : ''}
• Durasi: ${selectedOption ? selectedOption.duration : ''}
• Harga: ${selectedOption ? formatRupiah(selectedOption.price) : ''}
• Pembayaran: ${selectedPayment}
• Nama: ${customerName}
• Catatan: ${customerNotes || '-'}

Saya sudah membaca dan menyetujui syarat & ketentuan toko. Terima kasih!`;

  navigator.clipboard.writeText(message).then(() => {
    showToast("Format pesan berhasil disalin! 📋");
  }).catch(() => {
    showToast("Gagal menyalin pesan.");
  });
}

function showToast(message) {
  const toast = document.getElementById("toast");
  const toastText = document.getElementById("toast-text");
  if (!toast || !toastText) return;

  toastText.textContent = message;
  toast.classList.remove("opacity-0", "translate-y-4", "pointer-events-none");
  toast.classList.add("opacity-100", "translate-y-0");

  setTimeout(() => {
    toast.classList.add("opacity-0", "translate-y-4", "pointer-events-none");
    toast.classList.remove("opacity-100", "translate-y-0");
  }, 2800);
}

// Global Functions on window for onclick events
window.openLightbox = openLightbox;
window.closeLightbox = closeLightbox;
window.nextLightbox = nextLightbox;
window.prevLightbox = prevLightbox;
window.setTestiFilter = setTestiFilter;
window.loadMoreTestimonials = loadMoreTestimonials;
window.openOrderModal = openOrderModal;
window.closeOrderModal = closeOrderModal;
window.openTermsModal = openTermsModal;
window.closeTermsModal = closeTermsModal;
window.goToModalStep = goToModalStep;
window.selectPackage = selectPackage;
window.selectOption = selectOption;
window.setPaymentMethod = setPaymentMethod;
window.submitWhatsAppOrder = submitWhatsAppOrder;
window.copyOrderMessage = copyOrderMessage;
window.toggleFaq = toggleFaq;
window.setCategory = setCategory;
window.handleSearch = handleSearch;
window.resetFilters = resetFilters;

// Initialize on DOM load
document.addEventListener("DOMContentLoaded", () => {
  renderFilterControls();
  renderProducts();
  renderTestiFilterButtons();
  renderTestimonialCollage();
  renderFaqs();
  checkOperatingStatus();
  setInterval(checkOperatingStatus, 60000);
});
