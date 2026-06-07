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

const photos = [
  "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1473177104440-ffee2f376098?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1509099836639-18ba1795216d?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=900&q=80",
];

function nationUrl(slug) {
  return `nation.html?nation=${encodeURIComponent(slug)}`;
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
    pin.href = nationUrl(nation.slug);
    pin.style.left = pos.left;
    pin.style.top = pos.top;
    pin.dataset.nation = nation.slug;
    pin.setAttribute("aria-label", nation.privateLabel ? "Open mission testimonies and gallery" : `Open ${nation.name} testimonies and gallery`);
    pin.innerHTML = `<span class="pin-dot"></span>${nation.privateLabel ? "" : `<span class="pin-label">${nation.flag} ${nation.name}</span>`}`;
    map.appendChild(pin);

    if (select) {
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

function renderNationPage() {
  const title = document.querySelector("#nationTitle");
  if (!title) return;

  const params = new URLSearchParams(window.location.search);
  const slug = params.get("nation") || "usa";
  const nation = nations.find((item) => item.slug === slug) || nations[0];
  const publicName = nation.privateLabel ? "Mission Field" : `${nation.flag} ${nation.name}`;

  document.title = `${nation.privateLabel ? "Mission Field" : nation.name} Testimonies | Kingdom Journey`;
  title.textContent = `${publicName} Testimonies`;
  document.querySelector("#nationRegion").textContent = nation.region;
  document.querySelector("#nationIntro").textContent =
    nation.privateLabel
      ? "A protected place for photos, prayer updates, and testimonies from this mission field."
      : `A place to collect photos, testimonies, prayer reports, and stories from ${nation.name}.`;

  const testimonies = document.querySelector("#testimonies");
  const gallery = document.querySelector("#gallery");
  const galleryPrev = document.querySelector("[data-gallery-prev]");
  const galleryNext = document.querySelector("[data-gallery-next]");

  const testimonyItems = [
    {
      title: "Healing and Hope",
      image: photos[0],
      text: "A placeholder testimony can go here: a healing, a salvation story, a family restored, or a divine appointment.",
      videos: [
        { label: "TikTok", icon: "fa-brands fa-tiktok", url: "#" },
        { label: "Instagram", icon: "fa-brands fa-instagram", url: "#" },
        { label: "YouTube", icon: "fa-brands fa-youtube", url: "#" },
      ],
    },
    {
      title: "Local Voices",
      image: photos[1],
      text: "Add another short story from a local leader, partner, translator, or person impacted by the trip.",
      videos: [
        { label: "TikTok", icon: "fa-brands fa-tiktok", url: "#" },
        { label: "Instagram", icon: "fa-brands fa-instagram", url: "#" },
        { label: "Facebook", icon: "fa-brands fa-facebook-f", url: "#" },
      ],
    },
    {
      title: "Prayer and Next Steps",
      image: photos[2],
      text: "Include prayer requests, next steps, and what support makes possible in this nation.",
      videos: [
        { label: "Instagram", icon: "fa-brands fa-instagram", url: "#" },
        { label: "YouTube", icon: "fa-brands fa-youtube", url: "#" },
        { label: "Facebook", icon: "fa-brands fa-facebook-f", url: "#" },
      ],
    },
  ];

  if (nation.slug === "usa") {
    testimonyItems[0] = {
      title: "USA Testimony Playlist",
      image: photos[0],
      text: "Showcase a YouTube playlist here with USA ministry testimonies, messages, worship moments, and field updates.",
      playlist: {
        label: "Open YouTube Playlist",
        icon: "fa-brands fa-youtube",
        url: "#",
      },
      videos: [],
    };
  }

  testimonies.innerHTML = testimonyItems
    .map(
      (item) => `
        <article class="testimony-card${item.playlist ? " playlist-card" : ""}">
          <img src="${item.image}" alt="${item.title} testimony photo" />
          <div>
            <h3>${item.title}</h3>
            <p>${item.text}</p>
            ${
              item.playlist
                ? `
                  <a class="playlist-link" href="${item.playlist.url}" target="_blank" rel="noopener" aria-label="${item.playlist.label}">
                    <i class="${item.playlist.icon}"></i>
                    <span>${item.playlist.label}</span>
                  </a>
                `
                : `
                  <div class="testimony-video-links" aria-label="${item.title} social media testimony videos">
                    <span>Watch the testimony</span>
                    <div>
                      ${item.videos
                        .map(
                          (video) => `
                            <a href="${video.url}" aria-label="${video.label} testimony video">
                              <i class="${video.icon}"></i>
                            </a>
                          `
                        )
                        .join("")}
                    </div>
                  </div>
                `
            }
          </div>
        </article>
      `
    )
    .join("");

  const galleryPhotos = [
    ...photos,
    "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=900&q=80",
  ];

  gallery.innerHTML = galleryPhotos
    .map((src, index) => `<img src="${src}" alt="Mission gallery placeholder ${index + 1}" />`)
    .join("");

  const scrollGallery = (direction) => {
    const distance = Math.max(gallery.clientWidth * 0.86, 280);
    gallery.scrollBy({ left: direction * distance, behavior: "smooth" });
  };

  galleryPrev?.addEventListener("click", () => scrollGallery(-1));
  galleryNext?.addEventListener("click", () => scrollGallery(1));
}

renderMap();
renderNationPage();
