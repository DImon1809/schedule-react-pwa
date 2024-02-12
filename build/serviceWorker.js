const cacheName = "cache-v1";

const assetUrls = [
  "/",
  "/serviceWorker.js",
  "/asset-manifest.json",
  "/favicon.ico",
  "/manifest.json",
  "/images/menu.png",
  "/icon192.png",
  "/icon512.png",
  "/index.html",
  "/static/css/main.df663366.css",
  "/static/css/main.df663366.css.map",
  "/static/js/main.be107bb4.js",
  "/static/js/main.be107bb4.js.map",
];

self.addEventListener("install", async (event) => {
  try {
    const cache = await caches.open(cacheName);
    await cache.addAll(assetUrls);
  } catch (err) {
    console.error(err);
  }
});

self.addEventListener("activate", (event) => {
  console.log("Service worker activate event!");
});

self.addEventListener("fetch", (event) => {
  console.log("fetch");

  event.respondWith(cacheFirst(event.request));
});

const cacheFirst = async (request) => {
  try {
    const cached = await caches.match(request);

    return cached ?? (await fetch(request));
  } catch (err) {
    console.error(err);
  }
};
