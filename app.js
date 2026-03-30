/* ============================================================
   TOPGAMA – app.js
   Distribuidor Xiaomi Virtual Store RD
   ============================================================ */

'use strict';

/* ── Catálogo de productos ── */
const products = {
  xiaomi: [
    { id: 'x1',  name: 'Xiaomi 15 Ultra',    specs: '6.81" 2K LTPO · Snapdragon 8 Elite · Leica 50MP 1" · 5000mAh · 120W · 5G', price: 149500, badge: '🔥 2025',      img: 'https://fdn2.gsmarena.com/vv/bigpic/xiaomi-15-ultra.jpg' },
    { id: 'x2',  name: 'Xiaomi 15 Pro',      specs: '6.73" LTPO · Snapdragon 8 Elite · 50MP · 6100mAh · 90W · 5G',              price: 122000, badge: '✨ Nuevo',    img: 'https://fdn2.gsmarena.com/vv/bigpic/xiaomi-15-pro.jpg' },
    { id: 'x3',  name: 'Xiaomi 15',          specs: '6.36" AMOLED · Snapdragon 8 Elite · 50MP · 5240mAh · 90W · 5G',            price: 98000,  badge: '',             img: 'https://fdn2.gsmarena.com/vv/bigpic/xiaomi-15.jpg' },
    { id: 'x4',  name: 'Xiaomi 14 Ultra',    specs: '6.73" LTPO · Snapdragon 8 Gen 3 · Leica 50MP 1" · 5000mAh · 90W',          price: 115000, badge: '💎 Premium',  img: 'https://fdn2.gsmarena.com/vv/bigpic/xiaomi-14-ultra.jpg' },
    { id: 'x5',  name: 'Xiaomi 14 Pro',      specs: '6.73" LTPO · Snapdragon 8 Gen 3 · 50MP · 4880mAh · 120W · 5G',             price: 92000,  badge: '',             img: 'https://fdn2.gsmarena.com/vv/bigpic/xiaomi-14-pro.jpg' },
    { id: 'x6',  name: 'Xiaomi 14',          specs: '6.36" AMOLED · Snapdragon 8 Gen 3 · Leica 50MP · 4610mAh · 90W',           price: 78000,  badge: '',             img: 'https://fdn2.gsmarena.com/vv/bigpic/xiaomi-14.jpg' },
    { id: 'x7',  name: 'Xiaomi 14T Pro',     specs: '6.67" AMOLED · Dimensity 9300+ · Leica 50MP · 5000mAh · 120W',             price: 88000,  badge: '🆕 2024',    img: 'https://fdn2.gsmarena.com/vv/bigpic/xiaomi-14t-pro.jpg' },
    { id: 'x8',  name: 'Xiaomi 14T',         specs: '6.67" AMOLED · Dimensity 8300-Ultra · Leica 50MP · 5000mAh · 67W',          price: 64000,  badge: '',             img: 'https://fdn2.gsmarena.com/vv/bigpic/xiaomi-14t.jpg' },
    { id: 'x9',  name: 'Xiaomi 13 Ultra',    specs: '6.73" LTPO · Snapdragon 8 Gen 2 · Leica 50MP · 5000mAh · 90W',             price: 72000,  badge: '',             img: 'https://fdn2.gsmarena.com/vv/bigpic/xiaomi-13-ultra.jpg' },
    { id: 'x10', name: 'Xiaomi 13 Pro',      specs: '6.73" LTPO · Snapdragon 8 Gen 2 · 50MP · 4820mAh · 120W',                  price: 65000,  badge: '',             img: 'https://fdn2.gsmarena.com/vv/bigpic/xiaomi-13-pro.jpg' },
    { id: 'x11', name: 'Xiaomi 13T Pro',     specs: '6.67" AMOLED · Dimensity 9200+ · 50MP · 5000mAh · 144W',                   price: 56000,  badge: '',             img: 'https://fdn2.gsmarena.com/vv/bigpic/xiaomi-13t-pro.jpg' },
    { id: 'x12', name: 'Xiaomi 13T',         specs: '6.67" AMOLED · Dimensity 8200-Ultra · 50MP · 5000mAh · 67W',                price: 46000,  badge: '',             img: 'https://fdn2.gsmarena.com/vv/bigpic/xiaomi-13t.jpg' },
    { id: 'x13', name: 'Xiaomi MIX Fold 4',  specs: '7.98" Fold · Snapdragon 8 Gen 3 · 50MP · 5100mAh · 120W',                  price: 185000, badge: '📱 Plegable', img: 'https://fdn2.gsmarena.com/vv/bigpic/xiaomi-mix-fold-4.jpg' },
    { id: 'x14', name: 'Xiaomi MIX Fold 3',  specs: '7.82" Fold · Snapdragon 8 Gen 2 · 50MP · 4800mAh · 67W',                   price: 140000, badge: '📱 Plegable', img: 'https://fdn2.gsmarena.com/vv/bigpic/xiaomi-mix-fold-3.jpg' },
    { id: 'x15', name: 'Xiaomi 12T Pro',     specs: '6.67" AMOLED · Snapdragon 8+ Gen 1 · 200MP · 5000mAh · 120W',              price: 40000,  badge: '',             img: 'https://fdn2.gsmarena.com/vv/bigpic/xiaomi-12t-pro.jpg' },
    { id: 'x16', name: 'Xiaomi 12 Pro',      specs: '6.73" LTPO · Snapdragon 8 Gen 1 · 50MP · 4600mAh · 120W',                  price: 44000,  badge: '',             img: 'https://fdn2.gsmarena.com/vv/bigpic/xiaomi-12-pro.jpg' },
    { id: 'x17', name: 'Xiaomi Civi 4 Pro',  specs: '6.55" AMOLED · Dimensity 8300-Ultra · 50MP · 4700mAh · 67W',                price: 47000,  badge: '✨ Slim',     img: 'https://fdn2.gsmarena.com/vv/bigpic/xiaomi-civi-4-pro.jpg' },
    { id: 'x18', name: 'Xiaomi 12S Ultra',   specs: '6.73" LTPO · Snapdragon 8+ Gen 1 · Leica 50MP · 4860mAh · 67W',            price: 50000,  badge: '',             img: 'https://fdn2.gsmarena.com/vv/bigpic/xiaomi-12s-ultra.jpg' },
    { id: 'x19', name: 'Xiaomi 13',          specs: '6.36" AMOLED · Snapdragon 8 Gen 2 · 54MP · 4500mAh · 67W',                 price: 56000,  badge: '',             img: 'https://fdn2.gsmarena.com/vv/bigpic/xiaomi-13.jpg' },
    { id: 'x20', name: 'Xiaomi 12',          specs: '6.28" AMOLED · Snapdragon 8 Gen 1 · 50MP · 4500mAh · 67W',                 price: 38000,  badge: '',             img: 'https://fdn2.gsmarena.com/vv/bigpic/xiaomi-12.jpg' },
  ],
  redmi: [
    { id: 'r1',  name: 'Redmi Note 14 Pro+', specs: '6.67" AMOLED · Snapdragon 7s Gen 3 · 200MP · 5110mAh · 90W · 5G',  price: 42000, badge: '🔥 Top Ventas',  img: 'https://fdn2.gsmarena.com/vv/bigpic/xiaomi-redmi-note-14-pro-plus.jpg' },
    { id: 'r2',  name: 'Redmi Note 14 Pro',  specs: '6.67" AMOLED · Dimensity 7300-Ultra · 200MP · 5500mAh · 45W · 5G', price: 34000, badge: '🔥 Popular',     img: 'https://fdn2.gsmarena.com/vv/bigpic/xiaomi-redmi-note-14-pro.jpg' },
    { id: 'r3',  name: 'Redmi Note 14',      specs: '6.67" AMOLED · Snapdragon 7s Gen 3 · 108MP · 5500mAh · 45W',       price: 25000, badge: '',               img: 'https://fdn2.gsmarena.com/vv/bigpic/xiaomi-redmi-note-14.jpg' },
    { id: 'r4',  name: 'Redmi Note 14 4G',   specs: '6.67" AMOLED · Helio G99 Ultra · 108MP · 5500mAh · 33W',           price: 21000, badge: '',               img: 'https://fdn2.gsmarena.com/vv/bigpic/xiaomi-redmi-note-14-4g.jpg' },
    { id: 'r5',  name: 'Redmi Note 13 Pro+', specs: '6.67" AMOLED · Dimensity 7200-Ultra · 200MP · 5000mAh · 120W · 5G',price: 35000, badge: '',               img: 'https://fdn2.gsmarena.com/vv/bigpic/xiaomi-redmi-note-13-pro-plus.jpg' },
    { id: 'r6',  name: 'Redmi Note 13 Pro',  specs: '6.67" AMOLED · Dimensity 7200 · 200MP · 5100mAh · 67W · 5G',       price: 27000, badge: '',               img: 'https://fdn2.gsmarena.com/vv/bigpic/xiaomi-redmi-note-13-pro.jpg' },
    { id: 'r7',  name: 'Redmi Note 13',      specs: '6.67" AMOLED · Snapdragon 685 · 108MP · 5000mAh · 33W',            price: 19000, badge: '',               img: 'https://fdn2.gsmarena.com/vv/bigpic/xiaomi-redmi-note-13.jpg' },
    { id: 'r8',  name: 'Redmi Note 12 Pro+', specs: '6.67" AMOLED · Dimensity 1080 · 200MP · 5000mAh · 120W',           price: 24000, badge: '',               img: 'https://fdn2.gsmarena.com/vv/bigpic/xiaomi-redmi-note-12-pro-plus.jpg' },
    { id: 'r9',  name: 'Redmi Note 12 Turbo',specs: '6.67" AMOLED · Snapdragon 7+ Gen 2 · 64MP · 5000mAh · 67W',        price: 28000, badge: '',               img: 'https://fdn2.gsmarena.com/vv/bigpic/xiaomi-redmi-note-12-turbo.jpg' },
    { id: 'r10', name: 'Redmi K70 Pro',      specs: '6.67" LTPO · Snapdragon 8 Gen 3 · 50MP · 5000mAh · 120W · 5G',     price: 51000, badge: '🏆 Pro',         img: 'https://fdn2.gsmarena.com/vv/bigpic/xiaomi-redmi-k70-pro.jpg' },
    { id: 'r11', name: 'Redmi K70',          specs: '6.67" AMOLED · Snapdragon 8 Gen 2 · 50MP · 5000mAh · 90W · 5G',    price: 43000, badge: '',               img: 'https://fdn2.gsmarena.com/vv/bigpic/xiaomi-redmi-k70.jpg' },
    { id: 'r12', name: 'Redmi 14C',          specs: '6.88" IPS · Helio G81-Ultra · 50MP · 5160mAh · 18W',                price: 13500, badge: '💰 Económico',  img: 'https://fdn2.gsmarena.com/vv/bigpic/xiaomi-redmi-14c.jpg' },
    { id: 'r13', name: 'Redmi 13C',          specs: '6.74" IPS · Helio G85 · 50MP · 5000mAh · 18W',                     price: 11500, badge: '💰 Económico',  img: 'https://fdn2.gsmarena.com/vv/bigpic/xiaomi-redmi-13c.jpg' },
    { id: 'r14', name: 'Redmi 13',           specs: '6.79" IPS · Helio G91-Ultra · 108MP · 5030mAh · 18W',               price: 15000, badge: '',               img: 'https://fdn2.gsmarena.com/vv/bigpic/xiaomi-redmi-13.jpg' },
    { id: 'r15', name: 'Redmi A3',           specs: '6.71" IPS · Helio G36 · 8MP · 5000mAh · 10W',                      price: 9000,  badge: '💰 Básico',     img: 'https://fdn2.gsmarena.com/vv/bigpic/xiaomi-redmi-a3.jpg' },
    { id: 'r16', name: 'Redmi A3x',          specs: '6.71" IPS · Helio G36 · 8MP · 5000mAh · 10W',                      price: 8500,  badge: '💰 Básico',     img: 'https://fdn2.gsmarena.com/vv/bigpic/xiaomi-redmi-a3x.jpg' },
    { id: 'r17', name: 'Redmi 12',           specs: '6.79" IPS · Helio G88 · 50MP · 5000mAh · 18W',                     price: 13000, badge: '',               img: 'https://fdn2.gsmarena.com/vv/bigpic/xiaomi-redmi-12.jpg' },
    { id: 'r18', name: 'Redmi K60 Ultra',    specs: '6.67" AMOLED · Dimensity 9200+ · 50MP · 5000mAh · 120W',           price: 45000, badge: '',               img: 'https://fdn2.gsmarena.com/vv/bigpic/xiaomi-redmi-k60-ultra.jpg' },
    { id: 'r19', name: 'Redmi Pad Pro',      specs: '12.1" LCD · Snapdragon 7s Gen 2 · 8MP · 10000mAh · 33W',           price: 27000, badge: '📱 Tablet',     img: 'https://fdn2.gsmarena.com/vv/bigpic/xiaomi-redmi-pad-pro.jpg' },
    { id: 'r20', name: 'Redmi Watch 4',      specs: '1.97" AMOLED · GPS · SpO2 · FC · 20 días batería',                 price: 7500,  badge: '⌚ Watch',      img: 'https://fdn2.gsmarena.com/vv/bigpic/xiaomi-redmi-watch-4.jpg' },
  ],
  poco: [
    { id: 'p1',  name: 'POCO F6 Pro',   specs: '6.67" LTPO · Snapdragon 8 Gen 2 · 50MP · 5000mAh · 120W · 5G',         price: 55000, badge: '🎮 Gaming',      img: 'https://fdn2.gsmarena.com/vv/bigpic/poco-f6-pro.jpg' },
    { id: 'p2',  name: 'POCO F6',       specs: '6.67" AMOLED · Snapdragon 8s Gen 3 · 50MP · 5000mAh · 90W · 5G',       price: 43000, badge: '🎮 Gaming',      img: 'https://fdn2.gsmarena.com/vv/bigpic/poco-f6.jpg' },
    { id: 'p3',  name: 'POCO F5 Pro',   specs: '6.67" LTPO · Snapdragon 8+ Gen 1 · 64MP · 5160mAh · 67W · 5G',         price: 37000, badge: '',               img: 'https://fdn2.gsmarena.com/vv/bigpic/poco-f5-pro.jpg' },
    { id: 'p4',  name: 'POCO F5',       specs: '6.67" AMOLED · Snapdragon 7+ Gen 2 · 64MP · 5000mAh · 67W · 5G',       price: 31000, badge: '',               img: 'https://fdn2.gsmarena.com/vv/bigpic/poco-f5.jpg' },
    { id: 'p5',  name: 'POCO F4 GT',    specs: '6.67" AMOLED · Snapdragon 8 Gen 1 · 64MP · 4700mAh · 120W',            price: 34000, badge: '🎮 Gaming',      img: 'https://fdn2.gsmarena.com/vv/bigpic/poco-f4-gt.jpg' },
    { id: 'p6',  name: 'POCO X6 Pro',   specs: '6.67" AMOLED · Dimensity 8300-Ultra · 64MP · 5000mAh · 67W · 5G',      price: 35000, badge: '🔥 Best Seller', img: 'https://fdn2.gsmarena.com/vv/bigpic/poco-x6-pro.jpg' },
    { id: 'p7',  name: 'POCO X6',       specs: '6.67" AMOLED · Snapdragon 7s Gen 2 · 64MP · 5100mAh · 67W · 5G',       price: 27000, badge: '',               img: 'https://fdn2.gsmarena.com/vv/bigpic/poco-x6.jpg' },
    { id: 'p8',  name: 'POCO X5 Pro',   specs: '6.67" AMOLED · Snapdragon 778G · 108MP · 5000mAh · 67W · 5G',          price: 23000, badge: '',               img: 'https://fdn2.gsmarena.com/vv/bigpic/poco-x5-pro.jpg' },
    { id: 'p9',  name: 'POCO X5',       specs: '6.67" AMOLED · Snapdragon 695 · 48MP · 5000mAh · 33W · 5G',            price: 19000, badge: '',               img: 'https://fdn2.gsmarena.com/vv/bigpic/poco-x5.jpg' },
    { id: 'p10', name: 'POCO X4 Pro',   specs: '6.67" AMOLED · Snapdragon 695 · 108MP · 5000mAh · 67W · 5G',           price: 19000, badge: '',               img: 'https://fdn2.gsmarena.com/vv/bigpic/poco-x4-pro-5g.jpg' },
    { id: 'p11', name: 'POCO M6 Pro',   specs: '6.67" AMOLED · Dimensity 7025-Ultra · 64MP · 5000mAh · 67W',            price: 21000, badge: '',               img: 'https://fdn2.gsmarena.com/vv/bigpic/poco-m6-pro.jpg' },
    { id: 'p12', name: 'POCO M6',       specs: '6.79" IPS · Dimensity 6080 · 50MP · 5000mAh · 18W',                    price: 14500, badge: '💰 Valor',       img: 'https://fdn2.gsmarena.com/vv/bigpic/poco-m6.jpg' },
    { id: 'p13', name: 'POCO M5s',      specs: '6.43" AMOLED · Helio G96 · 64MP · 5000mAh · 33W',                      price: 15500, badge: '',               img: 'https://fdn2.gsmarena.com/vv/bigpic/poco-m5s.jpg' },
    { id: 'p14', name: 'POCO M5',       specs: '6.58" IPS · Helio G99 · 50MP · 5000mAh · 33W',                         price: 13500, badge: '',               img: 'https://fdn2.gsmarena.com/vv/bigpic/poco-m5.jpg' },
    { id: 'p15', name: 'POCO C65',      specs: '6.74" IPS · Helio G85 · 50MP · 5000mAh · 18W',                         price: 10500, badge: '💰 Básico',     img: 'https://fdn2.gsmarena.com/vv/bigpic/poco-c65.jpg' },
    { id: 'p16', name: 'POCO C55',      specs: '6.71" IPS · Helio G85 · 50MP · 5000mAh · 10W',                         price: 9800,  badge: '💰 Básico',     img: 'https://fdn2.gsmarena.com/vv/bigpic/poco-c55.jpg' },
    { id: 'p17', name: 'POCO F4',       specs: '6.67" AMOLED · Snapdragon 870 · 64MP · 4500mAh · 67W',                 price: 27000, badge: '',               img: 'https://fdn2.gsmarena.com/vv/bigpic/poco-f4.jpg' },
    { id: 'p18', name: 'POCO X4 GT',    specs: '6.6" IPS · Dimensity 8100 · 64MP · 5080mAh · 67W · 5G',                price: 21000, badge: '',               img: 'https://fdn2.gsmarena.com/vv/bigpic/poco-x4-gt.jpg' },
    { id: 'p19', name: 'POCO M4 Pro 5G',specs: '6.43" AMOLED · Dimensity 810 · 50MP · 5000mAh · 33W · 5G',             price: 15500, badge: '',               img: 'https://fdn2.gsmarena.com/vv/bigpic/poco-m4-pro-5g.jpg' },
    { id: 'p20', name: 'POCO C40',      specs: '6.71" IPS · JR510 · 13MP · 6000mAh · 18W',                             price: 8500,  badge: '💰 Básico',     img: 'https://fdn2.gsmarena.com/vv/bigpic/poco-c40.jpg' },
  ],
  honor: [
    { id: 'h1',  name: 'Honor Magic7 Pro',    specs: '6.8" LTPO · Snapdragon 8 Elite · 50MP Periscope · 5850mAh · 100W',       price: 88000,  badge: '🔥 Flagship',  img: 'https://fdn2.gsmarena.com/vv/bigpic/honor-magic7-pro.jpg' },
    { id: 'h2',  name: 'Honor Magic7',        specs: '6.78" LTPO · Snapdragon 8 Elite · 50MP · 5300mAh · 100W · 5G',          price: 70000,  badge: '',              img: 'https://fdn2.gsmarena.com/vv/bigpic/honor-magic7.jpg' },
    { id: 'h3',  name: 'Honor Magic6 Pro',    specs: '6.8" LTPO · Snapdragon 8 Gen 3 · 50MP · 5600mAh · 80W',                 price: 66000,  badge: '',              img: 'https://fdn2.gsmarena.com/vv/bigpic/honor-magic6-pro.jpg' },
    { id: 'h4',  name: 'Honor 200 Pro',       specs: '6.78" LTPO · Snapdragon 8s Gen 3 · 50MP Portrait · 5200mAh · 100W',     price: 57000,  badge: '📸 Retrato',   img: 'https://fdn2.gsmarena.com/vv/bigpic/honor-200-pro.jpg' },
    { id: 'h5',  name: 'Honor 200',           specs: '6.78" AMOLED · Snapdragon 7s Gen 2 · 50MP · 5200mAh · 100W',            price: 41000,  badge: '',              img: 'https://fdn2.gsmarena.com/vv/bigpic/honor-200.jpg' },
    { id: 'h6',  name: 'Honor 200 Lite',      specs: '6.7" AMOLED · Snapdragon 4 Gen 2 · 100MP · 4500mAh · 35W',              price: 25000,  badge: '',              img: 'https://fdn2.gsmarena.com/vv/bigpic/honor-200-lite.jpg' },
    { id: 'h7',  name: 'Honor X9b',           specs: '6.78" AMOLED · Snapdragon 6 Gen 1 · 108MP · 5800mAh · 35W',             price: 27000,  badge: '🔥 Popular',   img: 'https://fdn2.gsmarena.com/vv/bigpic/honor-x9b.jpg' },
    { id: 'h8',  name: 'Honor X8b',           specs: '6.8" AMOLED · Snapdragon 6 Gen 1 · 108MP · 4500mAh · 35W',              price: 21000,  badge: '',              img: 'https://fdn2.gsmarena.com/vv/bigpic/honor-x8b.jpg' },
    { id: 'h9',  name: 'Honor X7b',           specs: '6.8" IPS · Snapdragon 680 · 108MP · 6000mAh · 35W',                     price: 17000,  badge: '💰 Valor',     img: 'https://fdn2.gsmarena.com/vv/bigpic/honor-x7b.jpg' },
    { id: 'h10', name: 'Honor X6b',           specs: '6.74" IPS · Dimensity 6020 · 50MP · 5000mAh · 22W',                     price: 13000,  badge: '💰 Económico', img: 'https://fdn2.gsmarena.com/vv/bigpic/honor-x6b.jpg' },
    { id: 'h11', name: 'Honor 90',            specs: '6.78" AMOLED · Snapdragon 7 Diamond · 200MP · 5000mAh · 66W',            price: 35000,  badge: '📸 200MP',     img: 'https://fdn2.gsmarena.com/vv/bigpic/honor-90.jpg' },
    { id: 'h12', name: 'Honor 90 Lite',       specs: '6.7" IPS · Dimensity 6020 · 100MP · 4500mAh · 22W',                     price: 17500,  badge: '',              img: 'https://fdn2.gsmarena.com/vv/bigpic/honor-90-lite.jpg' },
    { id: 'h13', name: 'Honor Magic V3',      specs: '7.92" Fold · Kirin 9000S · 50MP · 5150mAh · 66W',                       price: 148000, badge: '📱 Plegable',  img: 'https://fdn2.gsmarena.com/vv/bigpic/honor-magic-v3.jpg' },
    { id: 'h14', name: 'Honor Magic V2',      specs: '7.92" Fold · Snapdragon 8 Gen 2 · 50MP · 5000mAh · 66W',                price: 113000, badge: '📱 Plegable',  img: 'https://fdn2.gsmarena.com/vv/bigpic/honor-magic-v2.jpg' },
    { id: 'h15', name: 'Honor Magic5 Pro',    specs: '6.81" LTPO · Snapdragon 8 Gen 2 · 50MP · 5100mAh · 100W',               price: 55000,  badge: '',              img: 'https://fdn2.gsmarena.com/vv/bigpic/honor-magic5-pro.jpg' },
    { id: 'h16', name: 'Honor Magic6 Lite',   specs: '6.78" AMOLED · Snapdragon 695 · 108MP · 5300mAh · 35W',                 price: 31000,  badge: '',              img: 'https://fdn2.gsmarena.com/vv/bigpic/honor-magic6-lite.jpg' },
    { id: 'h17', name: 'Honor 70',            specs: '6.67" AMOLED · Snapdragon 778G+ · 54MP · 4800mAh · 66W',                price: 25000,  badge: '',              img: 'https://fdn2.gsmarena.com/vv/bigpic/honor-70.jpg' },
    { id: 'h18', name: 'Honor X50',           specs: '6.78" AMOLED · Snapdragon 6 Gen 1 · 108MP · 5800mAh · 40W',             price: 19500,  badge: '',              img: 'https://fdn2.gsmarena.com/vv/bigpic/honor-x50.jpg' },
    { id: 'h19', name: 'Honor Play 8T',       specs: '6.8" IPS · Dimensity 6020 · 50MP · 6000mAh · 22W',                     price: 10500,  badge: '💰 Básico',    img: 'https://fdn2.gsmarena.com/vv/bigpic/honor-play-8t.jpg' },
    { id: 'h20', name: 'Honor Choice Watch',  specs: '1.95" AMOLED · GPS · SpO2 · FC · 14 días batería',                     price: 6200,   badge: '⌚ Watch',     img: 'https://fdn2.gsmarena.com/vv/bigpic/honor-choice-watch.jpg' },
  ]
};

/* ── Estado ── */
let cart = [];
let cd = { name: '', phone: '', service: '', address: '', tip: 0, payment: '' };

/* ── Utilidades ── */
const fmt = n => 'RD$ ' + n.toLocaleString('es-DO');

/* Busca un producto en cualquier categoría por id */
function findProduct(id) {
  for (const cat of Object.keys(products)) {
    const p = products[cat].find(x => x.id === id);
    if (p) return { product: p, cat };
  }
  return null;
}

/* ── Renderizado del catálogo (lazy por tab) ── */
const renderedTabs = new Set();

function renderTab(cat) {
  if (renderedTabs.has(cat)) return;
  renderedTabs.add(cat);

  const grid = document.getElementById('grid-' + cat);
  if (!grid) return;

  const frag = document.createDocumentFragment();
  products[cat].forEach(p => {
    const card = document.createElement('div');
    card.className = 'pc';
    card.innerHTML = `
      <div class="pc-img">
        ${p.badge ? `<span class="pc-badge">${p.badge}</span>` : ''}
        <img src="${p.img}" alt="${p.name}" loading="lazy"
             onerror="this.parentNode.innerHTML='<div style=\\"font-size:56px;text-align:center;width:100%;padding:20px\\">📱</div>'">
      </div>
      <div class="pc-body">
        <div class="pc-brand">${cat.toUpperCase()}</div>
        <div class="pc-name">${p.name}</div>
        <div class="pc-specs">${p.specs}</div>
        <div class="pc-footer">
          <div class="pc-price">${fmt(p.price)}<small>Precio RD$</small></div>
          <button class="pc-btn" data-id="${p.id}">Agregar +</button>
        </div>
      </div>`;
    card.querySelector('.pc-btn').addEventListener('click', () => addToCart(p.id, cat));
    frag.appendChild(card);
  });
  grid.appendChild(frag);
}

function renderProducts() {
  renderTab('xiaomi'); /* Solo el tab inicial */
}

/* ── Tabs del catálogo ── */
function switchTab(cat, el) {
  document.querySelectorAll('.tab').forEach(t => {
    t.classList.remove('active');
    t.setAttribute('aria-selected', 'false');
  });
  document.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));
  el.classList.add('active');
  el.setAttribute('aria-selected', 'true');
  const panel = document.getElementById('panel-' + cat);
  if (panel) panel.classList.add('active');
  renderTab(cat); /* Lazy render */
}

const TAB_ORDER = ['xiaomi', 'redmi', 'poco', 'honor'];

function goTab(cat) {
  const tabs = document.querySelectorAll('.tab');
  const i = TAB_ORDER.indexOf(cat);
  if (i >= 0 && tabs[i]) switchTab(cat, tabs[i]);
  const catalogEl = document.getElementById('catalogo');
  if (catalogEl) catalogEl.scrollIntoView({ behavior: 'smooth' });
}

/* ── Carrito ── */
function addToCart(id, cat) {
  const p = products[cat] ? products[cat].find(x => x.id === id) : null;
  if (!p) return;

  const existing = cart.find(c => c.id === id);
  if (existing) {
    existing.qty++;
  } else {
    cart.push({ ...p, qty: 1 });
  }
  updateCartUI();

  /* Feedback visual en el botón */
  const btn = document.querySelector(`.pc-btn[data-id="${id}"]`);
  if (btn) {
    const orig = btn.textContent;
    btn.textContent = '✓ Listo';
    btn.style.background = '#10b981';
    btn.style.color = '#fff';
    btn.style.borderColor = '#10b981';
    btn.disabled = true;
    setTimeout(() => {
      btn.textContent = orig;
      btn.style.background = '';
      btn.style.color = '';
      btn.style.borderColor = '';
      btn.disabled = false;
    }, 1400);
  }
}

function changeQty(id, delta) {
  const i = cart.findIndex(c => c.id === id);
  if (i < 0) return;
  cart[i].qty += delta;
  if (cart[i].qty <= 0) cart.splice(i, 1);
  updateCartUI();
}

function removeItem(id) {
  cart = cart.filter(c => c.id !== id);
  updateCartUI();
}

function updateCartUI() {
  const total = cart.reduce((s, c) => s + c.price * c.qty, 0);
  const count = cart.reduce((s, c) => s + c.qty, 0);

  const countEl  = document.getElementById('cartCount');
  const itemsEl  = document.getElementById('cartItems');
  const footerEl = document.getElementById('cartFooter');
  const totalEl  = document.getElementById('cartTotal');

  if (countEl) countEl.textContent = count;
  if (!itemsEl) return;

  if (cart.length === 0) {
    itemsEl.innerHTML = '<div class="cart-empty"><span>🛒</span>Tu carrito está vacío.<br>Agrega equipos del catálogo.</div>';
    if (footerEl) footerEl.style.display = 'none';
    return;
  }

  if (footerEl) footerEl.style.display = 'block';
  if (totalEl) totalEl.textContent = fmt(total);

  /* Construir items con DocumentFragment */
  const frag = document.createDocumentFragment();
  cart.forEach(c => {
    const el = document.createElement('div');
    el.className = 'ci';
    el.dataset.id = c.id;
    el.innerHTML = `
      <div class="ci-img">
        <img src="${c.img}" alt="${c.name}" onerror="this.style.display='none'">
      </div>
      <div class="ci-info">
        <div class="ci-name">${c.name}</div>
        <div class="ci-price">${fmt(c.price)}</div>
        <div class="ci-ctrl">
          <button class="ci-btn ci-minus" aria-label="Reducir cantidad">−</button>
          <span class="ci-qty">${c.qty}</span>
          <button class="ci-btn ci-plus"  aria-label="Aumentar cantidad">+</button>
          <button class="ci-del"          aria-label="Eliminar producto">🗑</button>
        </div>
      </div>`;
    el.querySelector('.ci-minus').addEventListener('click', () => changeQty(c.id, -1));
    el.querySelector('.ci-plus').addEventListener('click',  () => changeQty(c.id,  1));
    el.querySelector('.ci-del').addEventListener('click',   () => removeItem(c.id));
    frag.appendChild(el);
  });

  itemsEl.innerHTML = '';
  itemsEl.appendChild(frag);
}

function openCart() {
  document.getElementById('cartOverlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeCart() {
  document.getElementById('cartOverlay').classList.remove('open');
  document.body.style.overflow = '';
}

/* ── Checkout / Modal ── */
function startCheckout() {
  if (cart.length === 0) { alert('Agrega productos antes de continuar.'); return; }
  closeCart();
  showS1();
  document.getElementById('checkoutModal').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  document.getElementById('checkoutModal').classList.remove('open');
  document.body.style.overflow = '';
}

/* ── Paso 1: Nombre y Teléfono ── */
function showS1() {
  document.getElementById('checkoutContent').innerHTML = `
    <div class="mhead">
      <button class="mback" onclick="closeModal()" aria-label="Cerrar">✕</button>
      <h3>Nombre y Teléfono</h3>
    </div>
    <div class="mbody">
      <div class="si-wrap">
        <div class="si done"></div>
        <div class="si"></div>
        <div class="si"></div>
      </div>
      <label class="flabel" for="iname">Nombre completo</label>
      <input class="finput" id="iname" type="text" placeholder="Tu nombre completo" value="${escHtml(cd.name)}" autocomplete="name">
      <label class="flabel" for="iphone">Teléfono</label>
      <div class="phone-row">
        <div class="pflag">🇩🇴 +1</div>
        <input class="finput" id="iphone" type="tel" placeholder="849 207-8681" value="${escHtml(cd.phone)}" style="margin-bottom:0;flex:1;" autocomplete="tel">
      </div>
      <div style="margin-top:22px">
        <button class="btn-p" style="width:100%;justify-content:center" onclick="subS1()">Continuar →</button>
      </div>
    </div>`;
}

function subS1() {
  const n = document.getElementById('iname').value.trim();
  const p = document.getElementById('iphone').value.trim();
  if (!n || !p) { alert('Completa tu nombre y teléfono.'); return; }
  /* Validación básica de teléfono (solo dígitos, al menos 7) */
  if (!/^\d{7,15}$/.test(p.replace(/[\s\-().]/g, ''))) {
    alert('Ingresa un número de teléfono válido (solo dígitos).'); return;
  }
  cd.name = n;
  cd.phone = p;
  showS2();
}

/* ── Paso 2: Tipo de servicio ── */
function showS2() {
  const tot = cart.reduce((s, c) => s + c.price * c.qty, 0);
  document.getElementById('checkoutContent').innerHTML = `
    <div class="mhead">
      <button class="mback" onclick="showS1()" aria-label="Volver">←</button>
      <h3>Tipo de Servicio</h3>
    </div>
    <div class="mbody">
      <div class="si-wrap">
        <div class="si done"></div>
        <div class="si done"></div>
        <div class="si"></div>
      </div>
      <div class="os">
        <div class="os-row"><span>Productos (${cart.reduce((s, c) => s + c.qty, 0)})</span><span>${fmt(tot)}</span></div>
        <div class="os-row"><span>Envío</span><span>Según ubicación</span></div>
        <div class="os-row"><strong>Total</strong><strong>${fmt(tot)}</strong></div>
      </div>
      <label class="flabel">¿Cómo quieres recibir tu pedido?</label>
      <div class="svc-btns">
        <div class="svc-btn ${cd.service === 'local' ? 'sel' : ''}" onclick="selService('local', this)"><span>🏠</span>En el Local</div>
        <div class="svc-btn ${cd.service === 'llevar' ? 'sel' : ''}" onclick="selService('llevar', this)"><span>🛍️</span>Para Llevar</div>
        <div class="svc-btn ${cd.service === 'domicilio' ? 'sel' : ''}" onclick="selService('domicilio', this)"><span>🚚</span>A Domicilio</div>
      </div>
      <div id="addr-sec" style="display:${cd.service === 'domicilio' ? 'block' : 'none'}">
        <label class="flabel" for="icalle">Calle / Avenida</label>
        <input class="finput" id="icalle" type="text" placeholder="Tu calle o avenida" value="${escHtml(cd.address)}" autocomplete="street-address">
        <div class="frow">
          <div>
            <label class="flabel" for="inum">Número</label>
            <input class="finput" id="inum" type="text" placeholder="#33">
          </div>
          <div>
            <label class="flabel" for="iref">Referencia (opcional)</label>
            <input class="finput" id="iref" type="text" placeholder="Cerca del parque">
          </div>
        </div>
      </div>
      <button class="btn-p" style="width:100%;justify-content:center;margin-top:6px" onclick="subS2()">Continuar →</button>
    </div>`;
}

function selService(v, el) {
  cd.service = v;
  document.querySelectorAll('.svc-btn').forEach(b => b.classList.remove('sel'));
  el.classList.add('sel');
  const addrSec = document.getElementById('addr-sec');
  if (addrSec) addrSec.style.display = v === 'domicilio' ? 'block' : 'none';
}

function subS2() {
  if (!cd.service) { alert('Selecciona el tipo de servicio.'); return; }
  if (cd.service === 'domicilio') {
    const calle = document.getElementById('icalle')?.value.trim();
    if (!calle) { alert('Ingresa tu dirección.'); return; }
    const num = document.getElementById('inum')?.value.trim();
    const ref = document.getElementById('iref')?.value.trim();
    cd.address = calle + (num ? ' #' + num : '') + (ref ? ' (' + ref + ')' : '');
  } else {
    cd.address = '';
  }
  showS3();
}

/* ── Paso 3: Pago ── */
function showS3() {
  const tot = cart.reduce((s, c) => s + c.price * c.qty, 0);
  const tip = cd.tip || 0;
  const grand = tot + Math.round(tot * tip / 100);
  const svcLabel = cd.service === 'domicilio' ? '🚚 A Domicilio' : cd.service === 'llevar' ? '🛍️ Para Llevar' : '🏠 En el Local';

  document.getElementById('checkoutContent').innerHTML = `
    <div class="mhead">
      <button class="mback" onclick="showS2()" aria-label="Volver">←</button>
      <h3>${svcLabel}</h3>
    </div>
    <div class="mbody">
      <div class="si-wrap">
        <div class="si done"></div>
        <div class="si done"></div>
        <div class="si done"></div>
      </div>
      <div class="os">
        ${cart.map(c => `<div class="os-row"><span>${c.name} x${c.qty}</span><span>${fmt(c.price * c.qty)}</span></div>`).join('')}
        <div class="os-row"><strong>Total</strong><strong id="gtot">${fmt(grand)}</strong></div>
      </div>
      <label class="flabel">Propina (opcional)</label>
      <div class="tip-btns">
        <div class="tip-btn ${tip === 0 ? 'sel' : ''}" onclick="setTip(0, this)">No, gracias</div>
        <div class="tip-btn ${tip === 5 ? 'sel' : ''}" onclick="setTip(5, this)">5%</div>
        <div class="tip-btn ${tip === 10 ? 'sel' : ''}" onclick="setTip(10, this)">10%</div>
      </div>
      <label class="flabel" for="paymet">Método de pago</label>
      <select class="pay-sel" id="paymet" onchange="cd.payment = this.value">
        <option value="">Seleccione…</option>
        <option value="Efectivo" ${cd.payment === 'Efectivo' ? 'selected' : ''}>Efectivo</option>
        <option value="Transferencia" ${cd.payment === 'Transferencia' ? 'selected' : ''}>Transferencia Bancaria</option>
        <option value="Tarjeta al recibir" ${cd.payment === 'Tarjeta al recibir' ? 'selected' : ''}>Tarjeta (al recibir)</option>
      </select>
      <p style="font-size:11px;color:var(--muted);margin-bottom:18px;">El pago se coordina al momento de la entrega.</p>
      <button class="btn-p" style="width:100%;justify-content:center" onclick="subS3()">Confirmar Pedido →</button>
    </div>`;
}

function setTip(v, el) {
  cd.tip = v;
  document.querySelectorAll('.tip-btn').forEach(b => b.classList.remove('sel'));
  el.classList.add('sel');
  const tot = cart.reduce((s, c) => s + c.price * c.qty, 0);
  const gtot = document.getElementById('gtot');
  if (gtot) gtot.textContent = fmt(tot + Math.round(tot * v / 100));
}

function subS3() {
  /* Sincronizar el select en caso de que no haya disparado onchange */
  const payEl = document.getElementById('paymet');
  if (payEl && payEl.value) cd.payment = payEl.value;
  if (!cd.payment) { alert('Selecciona un método de pago.'); return; }
  showTracking();
}

/* ── Confirmación ── */
function showTracking() {
  const tot = cart.reduce((s, c) => s + c.price * c.qty, 0);
  const tip = cd.tip || 0;
  const grand = tot + Math.round(tot * tip / 100);
  const num = Math.floor(Math.random() * 900 + 100);

  /* ── Mensaje WhatsApp sin emojis para evitar caracteres ? ──
     Solo texto plano + formato negrita de WhatsApp (*texto*)    */
  const linea = '-'.repeat(30);
  const items = cart.map(c =>
    `  - ${c.name} x${c.qty}  =>  ${fmt(c.price * c.qty)}`
  ).join('\n');

  const svcMap = { local: 'Retiro en local', llevar: 'Para llevar', domicilio: 'A domicilio' };
  const svcText = svcMap[cd.service] || cd.service;
  const dirLine = cd.service === 'domicilio' && cd.address
    ? `\nDireccion: ${cd.address}`
    : '';

  const msgTexto =
`*PEDIDO TOPGAMA #${num}*
${linea}
*Productos:*
${items}
${linea}
Total:    ${fmt(grand)}
Pago:     ${cd.payment}
Servicio: ${svcText}${dirLine}
${linea}
Cliente:  ${cd.name}
Telefono: +1 ${cd.phone}`;

  const waURL = `https://wa.me/18492078681?text=${encodeURIComponent(msgTexto)}`;

  document.getElementById('checkoutContent').innerHTML = `
    <div class="mhead">
      <button class="mback" onclick="closeModal()" aria-label="Cerrar">✕</button>
      <h3>¡Casi terminado!</h3>
    </div>
    <div class="mbody">
      <div class="sbox">
        <span>✅</span>
        <h4>Pedido #${num} Recibido</h4>
        <p>Confirma por WhatsApp para proceder con tu pedido.</p>
      </div>
      <div class="tmap"><div class="tmap-txt">🗺️</div></div>
      <div class="tsteps">
        <div class="tstep"><div class="ts-dot actv">✓</div><div class="ts-lbl">Recibido</div></div>
        <div class="tstep"><div class="ts-dot">🔧</div><div class="ts-lbl">Preparando</div></div>
        <div class="tstep"><div class="ts-dot">📦</div><div class="ts-lbl">Empacando</div></div>
        <div class="tstep"><div class="ts-dot">🚚</div><div class="ts-lbl">En camino</div></div>
        <div class="tstep"><div class="ts-dot">🏠</div><div class="ts-lbl">Entregado</div></div>
      </div>
      <div class="os" style="margin-bottom:14px">
        <div class="os-row"><span>👤 ${escHtml(cd.name)}</span><span>📞 +1 ${escHtml(cd.phone)}</span></div>
        ${cd.address ? `<div class="os-row"><span>📍 ${escHtml(cd.address)}</span></div>` : ''}
        <div class="os-row"><strong>Total a Pagar</strong><strong>${fmt(grand)}</strong></div>
      </div>
      <div style="background:rgba(255,107,0,0.08);border:1px solid rgba(255,107,0,0.22);border-radius:9px;padding:12px;margin-bottom:14px;text-align:center;">
        <strong style="color:var(--orange);font-size:12px;letter-spacing:1px;">ACCIÓN NECESARIA 👇</strong><br>
        <span style="font-size:12px;color:var(--muted);">Enviar confirmación vía WhatsApp para finalizar</span>
      </div>
      <button class="wa-btn" id="waSendBtn">
        <svg width="20" height="20" fill="white" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zm-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741 1.022 1.024-3.666-.236-.374A9.86 9.86 0 012.1 12.001c0-5.47 4.4-9.92 9.875-9.92 2.64 0 5.122 1.045 6.988 2.943a9.825 9.825 0 012.89 6.994c-.003 5.45-4.437 9.884-9.882 9.884zm8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
        Enviar por WhatsApp
      </button>
    </div>`;

  /* Asignar el evento de forma segura, sin onclick inline que incluya URLs */
  document.getElementById('waSendBtn').addEventListener('click', function () {
    window.open(waURL, '_blank');
    clearCart();
  });
}

function clearCart() {
  cart = [];
  cd = { name: '', phone: '', service: '', address: '', tip: 0, payment: '' };
  updateCartUI();
}

/* ── Escape HTML para prevenir XSS ── */
function escHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

/* ── Menú hamburguesa (mobile) ── */
function initHamburger() {
  const btn = document.getElementById('hamburgerBtn');
  const drawer = document.getElementById('navDrawer');
  if (!btn || !drawer) return;

  btn.addEventListener('click', () => {
    const isOpen = drawer.classList.contains('open');
    btn.classList.toggle('open', !isOpen);
    drawer.classList.toggle('open', !isOpen);
    document.body.style.overflow = isOpen ? '' : 'hidden';
  });

  /* Cerrar al hacer clic en un enlace del drawer */
  drawer.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      btn.classList.remove('open');
      drawer.classList.remove('open');
      document.body.style.overflow = '';
    });
  });
}

/* ── Init ── */
document.addEventListener('DOMContentLoaded', () => {
  renderProducts();
  updateCartUI();
  initHamburger();

  /* Cerrar el modal al hacer clic en el overlay */
  document.getElementById('checkoutModal')?.addEventListener('click', function (e) {
    if (e.target === this) closeModal();
  });
});
