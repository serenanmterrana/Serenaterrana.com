const map = L.map('map', {
  worldCopyJump: true,
  zoomControl: true
}).setView([20, 0], 2);

// 🌙 Dark cinematic map layer (better than default)
L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
  attribution: '&copy; OpenStreetMap & CARTO',
  subdomains: 'abcd',
  maxZoom: 19
}).addTo(map);

//
// 📍 CUSTOM RED ICON (cinematic pins)
//
const redIcon = L.icon({
  iconUrl: 'https://cdn.jsdelivr.net/gh/pointhi/leaflet-color-markers/img/marker-icon-red.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',

  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

//
// 🌍 COUNTRIES (clean popup = ONLY country name)
//

// 🇺🇸 USA
L.marker([39.8283, -98.5795], { icon: redIcon }).addTo(map)
  .bindPopup("United States");

// 🇳🇵 Nepal
L.marker([28.3949, 84.1240], { icon: redIcon }).addTo(map)
  .bindPopup("Nepal");

// 🇲🇽 Mexico
L.marker([23.6345, -102.5528], { icon: redIcon }).addTo(map)
  .bindPopup("Mexico");

// 🇸🇪 Sweden
L.marker([60.1282, 18.6435], { icon: redIcon }).addTo(map)
  .bindPopup("Sweden");

// 🇵🇱 Poland
L.marker([51.9194, 19.1451], { icon: redIcon }).addTo(map)
  .bindPopup("Poland");

// 🇵🇰 Pakistan
L.marker([30.3753, 69.3451], { icon: redIcon }).addTo(map)
  .bindPopup("Pakistan");

// 🇨🇾 Cyprus
L.marker([35.1264, 33.4299], { icon: redIcon }).addTo(map)
  .bindPopup("Cyprus");

// 🇺🇬 Uganda
L.marker([1.3733, 32.2903], { icon: redIcon }).addTo(map)
  .bindPopup("Uganda");

// 🇮🇳 India (NO NAME ON PIN TEXT)
L.marker([20.5937, 78.9629], { icon: redIcon }).addTo(map)
  .bindPopup("India");

// 🇬🇹 Guatemala
L.marker([15.7835, -90.2308], { icon: redIcon }).addTo(map)
  .bindPopup("Guatemala");

// 🇸🇻 El Salvador
L.marker([13.7942, -88.8965], { icon: redIcon }).addTo(map)
  .bindPopup("El Salvador");

// 🇵🇪 Peru
L.marker([-9.1900, -75.0152], { icon: redIcon }).addTo(map)
  .bindPopup("Peru");

// 🇨🇱 Chile
L.marker([-35.6751, -71.5430], { icon: redIcon }).addTo(map)
  .bindPopup("Chile");

// 🇦🇷 Argentina
L.marker([-38.4161, -63.6167], { icon: redIcon }).addTo(map)
  .bindPopup("Argentina");

// 🇰🇷 South Korea
L.marker([35.9078, 127.7669], { icon: redIcon }).addTo(map)
  .bindPopup("South Korea");

// 🇳🇿 New Zealand
L.marker([-40.9006, 174.8860], { icon: redIcon }).addTo(map)
  .bindPopup("New Zealand");
