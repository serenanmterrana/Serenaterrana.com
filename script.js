const nations = [
  { slug: "usa", name: "USA", flag: "🇺🇸", lat: 39.8, lon: -98.6, region: "North America" },
  { slug: "mexico", name: "Mexico", flag: "🇲🇽", lat: 23.6, lon: -102.5, region: "North America" },
  { slug: "chile", name: "Chile", flag: "🇨🇱", lat: -35.7, lon: -71.5, region: "South America" },
  { slug: "argentina", name: "Argentina", flag: "🇦🇷", lat: -38.4, lon: -63.6, region: "South America" },
  { slug: "peru", name: "Peru", flag: "🇵🇪", lat: -9.2, lon: -75, region: "South America" },
  { slug: "el-salvador", name: "El Salvador", flag: "🇸🇻", lat: 13.8, lon: -88.9, region: "Central America" },
  { slug: "guatemala", name: "Guatemala", flag: "🇬🇹", lat: 15.8, lon: -90.2, region: "Central America" },
  { slug: "sweden", name: "Sweden", flag: "🇸🇪", lat: 60.1, lon: 18.6, region: "Europe" },
  { slug: "poland", name: "Poland", flag: "🇵🇱", lat: 52, lon: 19.1, region: "Europe" },
  { slug: "nepal", name: "Nepal", flag: "🇳🇵", lat: 28.4, lon: 84.1, region: "Asia" },
  { slug: "pakistan", name: "Pakistan", flag: "🇵🇰", lat: 30.4, lon: 69.3, region: "Asia" },
  { slug: "south-korea", name: "South Korea", flag: "🇰🇷", lat: 36, lon: 127.8, region: "Asia" },
  { slug: "cyprus", name: "Cyprus", flag: "🇨🇾", lat: 35.1, lon: 33.4, region: "Mediterranean" },
  { slug: "united-arab-emirates", name: "United Arab Emirates", flag: "🇦🇪", lat: 24.4, lon: 54.3, region: "Middle East" },
  { slug: "new-zealand", name: "New Zealand", flag: "🇳🇿", lat: -41.3, lon: 174.8, region: "Oceania" },
  { slug: "uganda", name: "Uganda", flag: "🇺🇬", lat: 1.4, lon: 32.3, region: "Africa" },
  { slug: "india", name: "India", flag: "", lat: 22.9, lon: 78.9, region: "Asia", privateLabel: true },
];

function nationUrl(slug) {
  return `nations/${slug}.html`;
}

function mapPosition(lat, lon) {
  return {
    left: `${((lon + 180) / 360) * 100}%`,
    top: `${((90 - lat) / 180) * 100}%`,
  };
}

function renderMap() {
  const map = document.querySelector("#worldMap");
  const tabs = document.querySelector("#nationTabs");
  const select = document.querySelector("#nationSelect");
  if (!map || !tabs) return;

  nations.forEach((nation) => {
    const pin = document.createElement("a");
    const pos = mapPosition(nation.lat, nation.lon);
    pin.className = "map-pin";
    if (nation.slug !== "india") {
  pin.href = nationUrl(nation.slug);
}
    pin.style.left = pos.left;
    pin.style.top = pos.top;
    pin.dataset.nation = nation.slug;
    pin.setAttribute("aria-label", nation.privateLabel ? "Open mission testimonies and gallery" : `Open ${nation.name} testimonies and gallery`);
    pin.innerHTML = `<span class="pin-dot"></span>${nation.privateLabel ? "" : `<span class="pin-label">${nation.flag} ${nation.name}</span>`}`;
    map.appendChild(pin);

if (select && nation.slug !== "india") {
  const option = document.createElement("option");
  option.value = nationUrl(nation.slug);
  option.textContent = nation.privateLabel ? "Mission Testimonies + Gallery" : `${nation.flag} ${nation.name}`;
  select.appendChild(option);
}
  });

  select?.addEventListener("change", (event) => {
    if (event.target.value) {
      window.location.href = event.target.value;
    }
  });

  map.addEventListener("click", (event) => {
    const pin = event.target.closest(".map-pin");
    if (!pin) return;

    const isCoarsePointer = window.matchMedia("(hover: none), (pointer: coarse)").matches;
    if (!isCoarsePointer) return;

    if (!pin.classList.contains("is-active")) {
      event.preventDefault();
      map.querySelectorAll(".map-pin.is-active").forEach((activePin) => activePin.classList.remove("is-active"));
      pin.classList.add("is-active");
    }
  });

  document.addEventListener("click", (event) => {
    if (!event.target.closest(".world-map")) {
      map.querySelectorAll(".map-pin.is-active").forEach((activePin) => activePin.classList.remove("is-active"));
    }
  });
}

function setupGalleryCarousel() {
  const gallery = document.querySelector(".gallery-track");
  const galleryPrev = document.querySelector("[data-gallery-prev]");
  const galleryNext = document.querySelector("[data-gallery-next]");
  if (!gallery) return;

  const scrollGallery = (direction) => {
    const distance = Math.max(gallery.clientWidth * 0.86, 280);
    gallery.scrollBy({ left: direction * distance, behavior: "smooth" });
  };

  galleryPrev?.addEventListener("click", () => scrollGallery(-1));
  galleryNext?.addEventListener("click", () => scrollGallery(1));
}

renderMap();
setupGalleryCarousel();
