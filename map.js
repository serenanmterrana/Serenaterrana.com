window.addEventListener("load", function () {

  // 🌍 MAP INIT
  const map = L.map('map', {
    worldCopyJump: true,
    zoomControl: true,
    scrollWheelZoom: true
  }).setView([20, 0], 2);

  // 🌙 CINEMATIC DARK MAP STYLE
  L.tileLayer('https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png', {
    attribution: '&copy; Stadia Maps & OpenStreetMap',
    maxZoom: 20
  }).addTo(map);

  // 📍 CUSTOM GLOWING RED PIN
  const redIcon = L.divIcon({
    className: 'custom-pin',
    html: `<div class="pin"></div>`,
    iconSize: [20, 20],
    iconAnchor: [10, 10]
  });

  // 🌍 FUNCTION: ADD COUNTRY
  function addCountry(lat, lng, name, flag) {
    L.marker([lat, lng], { icon: redIcon })
      .addTo(map)
      .bindPopup(`
        <div style="text-align:center; min-width:120px;">
          <div style="font-size:22px;">${flag}</div>
          <div style="margin-top:6px; font-weight:600; color:#fff;">
            ${name}
          </div>
        </div>
      `);
  }

  // 🇺🇸 NORTH & SOUTH AMERICA / EUROPE / ASIA / OCEANIA

  addCountry(39.8, -98.5, "United States", "🇺🇸");
  addCountry(28.3, 84.1, "Nepal", "🇳🇵");
  addCountry(23.6, -102.5, "Mexico", "🇲🇽");
  addCountry(60.1, 18.6, "Sweden", "🇸🇪");
  addCountry(51.9, 19.1, "Poland", "🇵🇱");
  addCountry(30.3, 69.3, "Pakistan", "🇵🇰");
  addCountry(35.1, 33.4, "Cyprus", "🇨🇾");
  addCountry(1.3, 32.2, "Uganda", "🇺🇬");

  // 🇮🇳 INDIA (FLAG ONLY — NO NAME)
  L.marker([20.6, 78.9], { icon: redIcon })
    .addTo(map)
    .bindPopup(`<div style="font-size:22px;">🇮🇳</div>`);

  addCountry(15.7, -90.2, "Guatemala", "🇬🇹");
  addCountry(13.7, -88.8, "El Salvador", "🇸🇻");
  addCountry(-9.1, -75.0, "Peru", "🇵🇪");
  addCountry(-35
