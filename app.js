// app.js – categorías por pestañas, búsqueda global, responsive
const categories = [
  { id:'celulares', name:'Celulares', icon:'📱', products:[
    {id:1,  name:'iPhone 15 Pro Max',     price:95000, emoji:'📱', desc:'256GB · Titanio Natural · Chip A17 Pro'},
    {id:2,  name:'Samsung Galaxy S24',    price:68000, emoji:'📱', desc:'128GB · IA integrada · Pantalla Dynamic AMOLED'},
    {id:3,  name:'Xiaomi Redmi Note 13',  price:18000, emoji:'📱', desc:'8GB RAM · 256GB · Pantalla AMOLED 120Hz'},
    {id:4,  name:'iPhone 14',             price:72000, emoji:'📱', desc:'128GB · Azul medianoche'},
  ]},
  { id:'tablets', name:'Tablets / iPad', icon:'📟', products:[
    {id:10, name:'iPad 10ma Generación',  price:38000, emoji:'📟', desc:'64GB · WiFi · Pantalla 10.9" Liquid Retina'},
    {id:11, name:'iPad Air M1',           price:55000, emoji:'📟', desc:'64GB · Chip M1 · 5G opcional'},
    {id:12, name:'Samsung Tab A9+',       price:22000, emoji:'📟', desc:'8GB RAM · 128GB · Pantalla 11"'},
  ]},
  { id:'smartwatch', name:'Smart Watch', icon:'⌚', products:[
    {id:20, name:'Apple Watch Series 9',    price:42000, emoji:'⌚', desc:'GPS · 45mm · Aluminio · Pantalla siempre activa'},
    {id:21, name:'Samsung Galaxy Watch 6',  price:28000, emoji:'⌚', desc:'44mm · Monitoreo de salud avanzado'},
    {id:22, name:'Xiaomi Band 8 Pro',       price:5500,  emoji:'⌚', desc:'AMOLED · GPS · Monitoreo de sueño'},
  ]},
  { id:'airpods', name:'AirPods', icon:'🎧', products:[
    {id:30, name:'AirPods Pro 2da Gen', price:21000, emoji:'🎧', desc:'Cancelación activa de ruido · Chip H2'},
    {id:31, name:'AirPods 3ra Gen',     price:14500, emoji:'🎧', desc:'Audio espacial adaptativo · Resistente al agua'},
    {id:32, name:'AirPods Max',         price:42000, emoji:'🎧', desc:'Over-ear · Aluminio · Audio premium'},
  ]},
  { id:'auriculares', name:'Auriculares', icon:'🎵', products:[
    {id:40, name:'Sony WH-1000XM5',      price:28000, emoji:'🎵', desc:'Cancelación de ruido líder · 30h batería'},
    {id:41, name:'JBL Tune 770NC',       price:9500,  emoji:'🎵', desc:'Bluetooth · ANC · 70h batería'},
    {id:42, name:'Audífonos Gamer RGB',  price:3800,  emoji:'🎮', desc:'Con micrófono · RGB · PC y consolas'},
  ]},
  { id:'bocinas', name:'Bocinas', icon:'🔊', products:[
    {id:50, name:'JBL Charge 5',       price:14000, emoji:'🔊', desc:'20h batería · IP67 · Bass boost'},
    {id:51, name:'Anker Soundcore 3',  price:5500,  emoji:'🔊', desc:'IPX7 · 24h batería · BassUp'},
    {id:52, name:'JBL Flip 6',         price:9000,  emoji:'🔊', desc:'IP67 · 30W · 12h batería'},
  ]},
  { id:'cargadores', name:'Cargadores', icon:'🔌', products:[
    {id:60, name:'Cargador Apple 20W',        price:2500, emoji:'🔌', desc:'USB-C · Carga rápida original Apple'},
    {id:61, name:'Cargador GaN 65W',          price:3200, emoji:'⚡', desc:'3 puertos · USB-A + 2x USB-C · Compacto'},
    {id:62, name:'Cargador Samsung 25W',      price:2000, emoji:'🔌', desc:'Super Fast Charging · USB-C'},
    {id:63, name:'Cargador Inalámbrico 15W',  price:2800, emoji:'🔋', desc:'Compatible Qi · MagSafe compatible'},
  ]},
  { id:'cables', name:'Cables', icon:'🔗', products:[
    {id:70, name:'Cable USB-C a Lightning', price:1200, emoji:'🔗', desc:'1m · Carga rápida · Trenzado nylon'},
    {id:71, name:'Cable USB-C a USB-C',     price:900,  emoji:'🔗', desc:'1m · 100W · Transferencia 10Gbps'},
    {id:72, name:'Cable Micro USB',         price:600,  emoji:'🔗', desc:'1m · Carga rápida · Trenzado resistente'},
    {id:73, name:'Cable MagSafe 2m',        price:3500, emoji:'🧲', desc:'Original Apple · Carga magnética'},
  ]},
  { id:'protectores', name:'Protectores', icon:'🛡️', products:[
    {id:80, name:'Cristal iPhone 15',    price:600, emoji:'🛡️', desc:'9H · Anti-reflejo · Bordes redondeados'},
    {id:81, name:'Cristal Samsung S24',  price:600, emoji:'🛡️', desc:'9H · Cobertura completa'},
    {id:82, name:'Cristal Universal 6.7"', price:400, emoji:'🛡️', desc:'Múltiples modelos · 9H'},
  ]},
  { id:'covers', name:'Covers', icon:'📦', products:[
    {id:90, name:'Funda iPhone 15 MagSafe',   price:1800, emoji:'📦', desc:'Silicona · MagSafe · Varios colores'},
    {id:91, name:'Funda Samsung S24 Ultra',   price:1500, emoji:'📦', desc:'Cuero PU · Ranura tarjetas · Antigolpes'},
    {id:92, name:'Funda Transparente',        price:500,  emoji:'📦', desc:'Acrílico · Anti-amarilleo · Multimodelo'},
  ]},
  { id:'covers-airpods', name:'Covers AirPods', icon:'🎀', products:[
    {id:100, name:'Funda AirPods Pro 2',    price:800, emoji:'🎀', desc:'Silicona suave · Llavero · Varios colores'},
    {id:101, name:'Funda AirPods 3ra Gen',  price:700, emoji:'🎀', desc:'Cuero PU · Resistente a caídas'},
  ]},
  { id:'powerbank', name:'Power Bank', icon:'🔋', products:[
    {id:110, name:'Anker 20000mAh',        price:5500, emoji:'🔋', desc:'20W PD · USB-A + USB-C · Pantalla LED'},
    {id:111, name:'Power Bank 10000mAh',   price:2800, emoji:'🔋', desc:'22.5W · Delgado · Carga rápida'},
    {id:112, name:'MagSafe Power Bank',    price:4500, emoji:'🔋', desc:'5000mAh · Magnético · iPhone 12+'},
  ]},
  { id:'reparaciones', name:'Reparaciones', icon:'🔧', products:[
    {id:120, name:'Cambio de Pantalla iPhone', price:8000, emoji:'🔧', desc:'Original / OEM · Garantía incluida'},
    {id:121, name:'Cambio de Batería',         price:2500, emoji:'🔋', desc:'iPhone / Samsung / Huawei · Alta calidad'},
    {id:122, name:'Desbloqueo de Celular',     price:2000, emoji:'🔓', desc:'Liberación permanente · Todos los operadores'},
    {id:123, name:'Diagnóstico General',       price:500,  emoji:'🔍', desc:'Revisión completa · Sin costo oculto'},
  ]},
];

let cart = [];
let selectedProduct = null;
let selectedProductCatId = null;
let detailQty = 1;
let selectedService = '';
let tipPct = 0;

// Control de categoría activa y búsqueda
let currentCategoryId = null;
let lastActiveCategory = null;

function findProduct(id) {
  for (const c of categories) {
    const p = c.products.find(x => x.id === id);
    if (p) return { product: p, catId: c.id };
  }
  return null;
}

function renderTabs() {
  const container = document.getElementById('catTabs');
  container.innerHTML = categories.map(c =>
    `<button class="cat-tab ${c.id === currentCategoryId ? 'active' : ''}" data-cat="${c.id}">${c.icon} ${c.name}</button>`
  ).join('');
  document.querySelectorAll('.cat-tab').forEach(btn => {
    btn.addEventListener('click', () => setCategory(btn.getAttribute('data-cat')));
  });
}

function setCategory(catId) {
  document.getElementById('searchInput').value = '';
  currentCategoryId = catId;
  lastActiveCategory = catId;
  renderProducts();
  document.querySelectorAll('.cat-tab').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-cat') === catId);
  });
}

function renderProducts() {
  const container = document.getElementById('productsContent');
  if (!container) return;

  if (currentCategoryId === null) {
    // Mostrar todas las categorías
    container.innerHTML = categories.map(cat => `
      <div class="cat-section" id="section-${cat.id}">
        <div class="cat-title">${cat.icon} ${cat.name.toUpperCase()}</div>
        <div class="products-grid">
          ${cat.products.map(p => `
            <div class="product-card" onclick="openProduct(${p.id})">
              <div class="product-img cat-${cat.id}">${p.emoji}</div>
              <div class="product-body">
                <div class="product-name">${p.name}</div>
                <div class="product-desc">${p.desc}</div>
                <div class="product-footer">
                  <div class="product-price">RD$ ${p.price.toLocaleString()}</div>
                  <button class="add-btn" onclick="event.stopPropagation(); quickAdd(${p.id})">+</button>
                </div>
              </div>
            </div>`).join('')}
        </div>
      </div>`).join('');
  } else {
    const cat = categories.find(c => c.id === currentCategoryId);
    if (!cat) return;
    container.innerHTML = `
      <div class="cat-section" id="section-${cat.id}">
        <div class="cat-title">${cat.icon} ${cat.name.toUpperCase()}</div>
        <div class="products-grid">
          ${cat.products.map(p => `
            <div class="product-card" onclick="openProduct(${p.id})">
              <div class="product-img cat-${cat.id}">${p.emoji}</div>
              <div class="product-body">
                <div class="product-name">${p.name}</div>
                <div class="product-desc">${p.desc}</div>
                <div class="product-footer">
                  <div class="product-price">RD$ ${p.price.toLocaleString()}</div>
                  <button class="add-btn" onclick="event.stopPropagation(); quickAdd(${p.id})">+</button>
                </div>
              </div>
            </div>`).join('')}
        </div>
      </div>`;
  }

  const searchVal = document.getElementById('searchInput').value.trim();
  if (searchVal) applySearchFilter(searchVal);
}

function applySearchFilter(query) {
  const lower = query.toLowerCase();
  document.querySelectorAll('.cat-section').forEach(section => {
    let visible = 0;
    section.querySelectorAll('.product-card').forEach(card => {
      const name = card.querySelector('.product-name')?.textContent.toLowerCase() || '';
      const match = name.includes(lower);
      card.style.display = match ? '' : 'none';
      if (match) visible++;
    });
    section.style.display = visible ? '' : 'none';
  });
}

function setupSearch() {
  const input = document.getElementById('searchInput');
  if (!input) return;
  input.addEventListener('input', (e) => {
    const query = e.target.value.trim();
    if (query === '') {
      if (lastActiveCategory) {
        currentCategoryId = lastActiveCategory;
        renderProducts();
        document.querySelectorAll('.cat-tab').forEach(btn => {
          btn.classList.toggle('active', btn.getAttribute('data-cat') === currentCategoryId);
        });
      }
    } else {
      if (currentCategoryId !== null) {
        lastActiveCategory = currentCategoryId;
        currentCategoryId = null;
        renderProducts();
        document.querySelectorAll('.cat-tab').forEach(btn => btn.classList.remove('active'));
      }
      applySearchFilter(query);
    }
  });
}

// --- Resto de funciones (carrito, modales, checkout) sin cambios ---
function openProduct(id) {
  const found = findProduct(id);
  if (!found) return;
  selectedProduct = found.product;
  selectedProductCatId = found.catId;
  detailQty = 1;

  const mi = document.getElementById('modalImg');
  mi.className = `modal-img cat-${found.catId}`;
  mi.innerHTML = `<button class="modal-back" onclick="closeProduct()">←</button>${selectedProduct.emoji}`;

  document.getElementById('modalTitle').textContent = selectedProduct.name;
  document.getElementById('modalDesc').textContent = selectedProduct.desc;
  document.getElementById('modalPrice').textContent = `RD$ ${selectedProduct.price.toLocaleString()}`;
  document.getElementById('detailQty').textContent = '1';
  document.getElementById('productOverlay').classList.add('open');
}

function closeProduct() { document.getElementById('productOverlay').classList.remove('open'); }
function changeQty(d) { detailQty = Math.max(1, detailQty + d); document.getElementById('detailQty').textContent = detailQty; }
function addToCart() {
  if (!selectedProduct) return;
  const existing = cart.find(x => x.id === selectedProduct.id);
  if (existing) existing.qty += detailQty;
  else cart.push({ ...selectedProduct, qty: detailQty });
  updateCartUI();
  closeProduct();
}
function quickAdd(id) {
  const found = findProduct(id);
  if (!found) return;
  const existing = cart.find(x => x.id === id);
  if (existing) existing.qty++;
  else cart.push({ ...found.product, qty: 1 });
  updateCartUI();
}
function cartTotal() { return cart.reduce((s, i) => s + i.price * i.qty, 0); }
function updateCartUI() {
  const t = cartTotal();
  const n = cart.reduce((s, i) => s + i.qty, 0);
  document.getElementById('cartCount').textContent = `Ver carrito (${n})`;
  document.getElementById('cartTotal').textContent = `RD$ ${t.toLocaleString()}`;
  document.getElementById('cartHeaderTotal').textContent = `RD$ ${t.toLocaleString()}`;
  document.getElementById('checkoutTotal').textContent = `RD$ ${t.toLocaleString()}`;
  document.getElementById('orderBtnTotal').textContent = t.toLocaleString();
  document.getElementById('cartBar').style.display = cart.length ? 'block' : 'none';
}
function openCart() { renderCartItems(); document.getElementById('cartOverlay').classList.add('open'); }
function closeCart() { document.getElementById('cartOverlay').classList.remove('open'); }
function renderCartItems() {
  document.getElementById('cartItemsList').innerHTML = cart.map(i => `
    <div class="cart-item">
      <div class="cart-item-img">${i.emoji}</div>
      <div class="cart-item-info">
        <div class="cart-item-name">${i.name}</div>
        <div class="cart-item-price">RD$ ${(i.price * i.qty).toLocaleString()}</div>
      </div>
      <div class="cart-item-ctrl">
        <button class="item-ctrl-btn" style="color:var(--red);border-color:transparent" onclick="removeItem(${i.id})">🗑</button>
        <button class="item-ctrl-btn" onclick="chgItemQty(${i.id}, -1)">−</button>
        <span style="font-weight:600;min-width:16px;text-align:center;">${i.qty}</span>
        <button class="item-ctrl-btn" onclick="chgItemQty(${i.id}, 1)">+</button>
      </div>
    </div>`).join('');
}
function removeItem(id) { cart = cart.filter(x => x.id !== id); renderCartItems(); updateCartUI(); if (!cart.length) closeCart(); }
function chgItemQty(id, d) {
  const item = cart.find(x => x.id === id);
  if (!item) return;
  item.qty = Math.max(0, item.qty + d);
  if (!item.qty) cart = cart.filter(x => x.id !== id);
  renderCartItems(); updateCartUI(); if (!cart.length) closeCart();
}
function selectService(svc, btn) {
  selectedService = svc;
  document.querySelectorAll('.service-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  setTimeout(() => { closeCart(); document.getElementById('customerOverlay').classList.add('open'); }, 300);
}
function backToCart() { document.getElementById('customerOverlay').classList.remove('open'); openCart(); }
function goFromCustomer() {
  const name = document.getElementById('custName').value.trim();
  const phone = document.getElementById('custPhone').value.trim();
  if (!name || !phone) { alert('Por favor completa tu nombre y teléfono.'); return; }
  document.getElementById('customerOverlay').classList.remove('open');
  if (selectedService === 'domicilio') document.getElementById('addressOverlay').classList.add('open');
  else goToCheckout();
}
function backToCustomer() { document.getElementById('addressOverlay').classList.remove('open'); document.getElementById('customerOverlay').classList.add('open'); }
function goToCheckout() {
  document.getElementById('addressOverlay').classList.remove('open');
  const name = document.getElementById('custName').value;
  const phone = document.getElementById('custPhone').value;
  document.getElementById('checkoutName').textContent = name;
  document.getElementById('checkoutPhone').textContent = phone;
  const svcs = { local: '🏪 En el local', llevar: '🛍️ Para llevar', domicilio: '🛵 A domicilio' };
  document.getElementById('checkoutServiceTitle').textContent = svcs[selectedService];
  const addrRow = document.getElementById('checkoutAddrRow');
  if (selectedService === 'domicilio') {
    const s = document.getElementById('addrStreet').value;
    const n = document.getElementById('addrNum').value;
    const sec = document.getElementById('addrSector').value;
    document.getElementById('checkoutAddr').textContent = `${s} ${n}, ${sec}`;
    addrRow.style.display = 'flex';
  } else addrRow.style.display = 'none';
  document.getElementById('checkoutItems').innerHTML = cart.map(i => `<div class="summary-row"><span>${i.name} x${i.qty}</span><span>RD$ ${(i.price * i.qty).toLocaleString()}</span></div>`).join('');
  updateCartUI();
  document.getElementById('checkoutOverlay').classList.add('open');
}
function backFromCheckout() {
  document.getElementById('checkoutOverlay').classList.remove('open');
  if (selectedService === 'domicilio') document.getElementById('addressOverlay').classList.add('open');
  else document.getElementById('customerOverlay').classList.add('open');
}
function selectTip(p, btn) { tipPct = p; document.querySelectorAll('.tip-btn').forEach(b => b.classList.remove('active')); btn.classList.add('active'); }
function placeOrder() {
  if (!document.getElementById('payMethod').value) { alert('Por favor selecciona un método de pago.'); return; }
  const num = Math.floor(Math.random() * 9000) + 1000;
  document.getElementById('orderNumber').textContent = '#' + num;
  const svcs = { local: 'En el local', llevar: 'Para llevar', domicilio: 'A domicilio' };
  const t = cartTotal();
  document.getElementById('orderSummaryText').textContent = `${cart.length} producto(s) · RD$ ${(t + Math.round(t * tipPct / 100)).toLocaleString()} · ${svcs[selectedService]}`;
  document.getElementById('checkoutOverlay').classList.remove('open');
  document.getElementById('confirmOverlay').classList.add('open');
}
function sendWhatsApp() {
  const name = document.getElementById('custName').value;
  const phone = document.getElementById('custPhone').value;
  const pay = document.getElementById('payMethod').value;
  const comment = document.getElementById('orderComment').value;
  const t = cartTotal();
  const tip = Math.round(t * tipPct / 100);
  const svcs = { local: 'En el local 🏪', llevar: 'Para llevar 🛍️', domicilio: 'A domicilio 🛵' };
  let addrLine = '';
  if (selectedService === 'domicilio') {
    const s = document.getElementById('addrStreet').value;
    const n = document.getElementById('addrNum').value;
    const sec = document.getElementById('addrSector').value;
    const ref = document.getElementById('addrRef').value;
    addrLine = `\n📍 *Dirección:* ${s} ${n}, ${sec}${ref ? ', ref: ' + ref : ''}`;
  }
  const items = cart.map(i => `• ${i.name} x${i.qty} — RD$ ${(i.price * i.qty).toLocaleString()}`).join('\n');
  const msg = `🛒 *PEDIDO SMARTCOM*\n\n👤 *Cliente:* ${name}\n📞 *Tel:* ${phone}${addrLine}\n\n*Productos:*\n${items}\n\n💰 *Subtotal:* RD$ ${t.toLocaleString()}\n${tipPct > 0 ? `💝 *Propina (${tipPct}%):* RD$ ${tip.toLocaleString()}\n` : ''}✅ *Total:* RD$ ${(t + tip).toLocaleString()}\n🚀 *Servicio:* ${svcs[selectedService]}\n💳 *Pago:* ${pay}\n${comment ? `💬 *Comentario:* ${comment}` : ''}`;
  window.open(`https://wa.me/18294888799?text=${encodeURIComponent(msg)}`, '_blank');
}
function closeAll() { document.querySelectorAll('.overlay').forEach(o => o.classList.remove('open')); }

// Inicialización
if (categories.length) { currentCategoryId = categories[0].id; lastActiveCategory = currentCategoryId; }
renderTabs();
renderProducts();
setupSearch();
updateCartUI();
