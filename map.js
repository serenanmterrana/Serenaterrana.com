const map = L.map('map').setView([20, 0], 2);

// Base map
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

//
// 🌍 COUNTRIES
//

// 🇺🇸 USA
L.marker([39.8283, -98.5795]).addTo(map)
  .bindPopup('<a href="usa.html">USA Mission</a>');

// 🇳🇵 Nepal
L.marker([28.3949, 84.1240]).addTo(map)
  .bindPopup('<a href="nepal.html">Nepal Mission</a>');

// 🇲🇽 Mexico
L.marker([23.6345, -102.5528]).addTo(map)
  .bindPopup('<a href="mexico.html">Mexico Mission</a>');

// 🇸🇪 Sweden
L.marker([60.1282, 18.6435]).addTo(map)
  .bindPopup('<a href="sweden.html">Sweden Mission</a>');

// 🇵🇱 Poland
L.marker([51.9194, 19.1451]).addTo(map)
  .bindPopup('<a href="poland.html">Poland Mission</a>');

// 🇵🇰 Pakistan
L.marker([30.3753, 69.3451]).addTo(map)
  .bindPopup('<a href="pakistan.html">Pakistan Mission</a>');

// 🇨🇾 Cyprus
L.marker([35.1264, 33.4299]).addTo(map)
  .bindPopup('<a href="cyprus.html">Cyprus Mission</a>');

// 🇺🇬 Uganda
L.marker([1.3733, 32.2903]).addTo(map)
  .bindPopup('<a href="uganda.html">Uganda Mission</a>');

// 🇮🇳 India (NO LABEL TEXT)
L.marker([20.5937, 78.9629]).addTo(map)
  .bindPopup('<a href="india.html">View Mission</a>');

// 🇬🇹 Guatemala
L.marker([15.7835, -90.2308]).addTo(map)
  .bindPopup('<a href="guatemala.html">Guatemala Mission</a>');

// 🇸🇻 El Salvador
L.marker([13.7942, -88.8965]).addTo(map)
  .bindPopup('<a href="elsalvador.html">El Salvador Mission</a>');

// 🇵🇪 Peru
L.marker([-9.1900, -75.0152]).addTo(map)
  .bindPopup('<a href="peru.html">Peru Mission</a>');

// 🇨🇱 Chile
L.marker([-35.6751, -71.5430]).addTo(map)
  .bindPopup('<a href="chile.html">Chile Mission</a>');

// 🇦🇷 Argentina
L.marker([-38.4161, -63.6167]).addTo(map)
  .bindPopup('<a href="argentina.html">Argentina Mission</a>');

// 🇰🇷 South Korea
L.marker([35.9078, 127.7669]).addTo(map)
  .bindPopup('<a href="southkorea.html">South Korea Mission</a>');

// 🇳🇿 New Zealand
L.marker([-40.9006, 174.8860]).addTo(map)
  .bindPopup('<a href="newzealand.html">New Zealand Mission</a>');
