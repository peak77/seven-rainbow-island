const CACHE_PREFIX = "seven-rainbow-island-";
const CACHE_NAME = `${CACHE_PREFIX}v12`;
const NETWORK_TIMEOUT_MS = 3000;
const OFFLINE_URL = new URL("./index.html", self.location.href).href;
const CORE_FILES = [
  "./",
  "./index.html",
  "./styles.css",
  "./app.js",
  "./content-data.js",
  "./video-language-data.js",
  "./manifest.webmanifest",
  "./island-icon.svg",
  "./assets/icons/island-192.png",
  "./assets/icons/island-512.png",
  "./assets/icons/island-maskable-192.png",
  "./assets/icons/island-maskable-512.png",
];

const STATIC_ASSET_PATTERN = /\.(?:css|js|mjs|svg|png|jpe?g|gif|webp|avif|ico|woff2?|ttf|otf|webmanifest)$/i;
const VIDEO_PATTERN = /\.(?:mp4|m4v|webm|mov|m3u8|ts)$/i;

function canCache(request, response) {
  return request.method === "GET" && response && response.ok;
}

async function storeResponse(cache, request, response) {
  if (canCache(request, response)) {
    await cache.put(request, response.clone());
  }
  return response;
}

async function precacheShell() {
  const cache = await caches.open(CACHE_NAME);
  await Promise.all(CORE_FILES.map(async (relativeUrl) => {
    const request = new Request(new URL(relativeUrl, self.location.href), {
      cache: "reload",
    });
    const response = await fetch(request);
    if (!canCache(request, response)) {
      throw new Error(`Unable to precache ${request.url}: ${response.status}`);
    }
    await cache.put(request, response);
  }));
}

async function fetchWithTimeout(request, timeoutMs) {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), timeoutMs);
  try {
    return await fetch(request, { signal: controller.signal });
  } finally {
    clearTimeout(timeoutId);
  }
}

function offlineDocument() {
  return new Response(
    "<!doctype html><html lang=\"zh-CN\"><meta charset=\"utf-8\"><meta name=\"viewport\" content=\"width=device-width,initial-scale=1\"><title>Seven 的彩虹成长岛</title><style>body{margin:0;min-height:100vh;display:grid;place-items:center;background:#fffaf0;color:#26364a;font-family:system-ui,sans-serif;text-align:center}main{max-width:28rem;padding:2rem}h1{font-size:1.6rem}p{line-height:1.7}button{min-height:52px;padding:.75rem 1.25rem;border:0;border-radius:999px;background:#c5412f;color:#fff;font:inherit;font-weight:700}</style><main><h1>彩虹岛暂时离线啦</h1><p>网络恢复后，点一下按钮就能继续学习。已经打开过的内容仍可离线使用。</p><button onclick=\"location.reload()\">重新连接</button></main></html>",
    {
      status: 503,
      headers: {
        "Content-Type": "text/html; charset=utf-8",
        "Cache-Control": "no-store",
      },
    },
  );
}

async function networkFirstNavigation(request) {
  const cache = await caches.open(CACHE_NAME);
  try {
    const response = await fetchWithTimeout(request, NETWORK_TIMEOUT_MS);
    return await storeResponse(cache, request, response);
  } catch (error) {
    const cachedPage = await cache.match(request, { ignoreSearch: true });
    if (cachedPage) return cachedPage;

    const appShell = await cache.match(OFFLINE_URL, { ignoreSearch: true });
    return appShell || offlineDocument();
  }
}

async function staleWhileRevalidate(event) {
  const { request } = event;
  const cache = await caches.open(CACHE_NAME);
  const cachedResponse = await cache.match(request);
  const networkResponse = fetch(request)
    .then((response) => storeResponse(cache, request, response));

  if (cachedResponse) {
    event.waitUntil(networkResponse.catch(() => undefined));
    return cachedResponse;
  }

  return networkResponse;
}

async function networkFirstResource(request) {
  const cache = await caches.open(CACHE_NAME);
  try {
    const response = await fetch(request);
    return await storeResponse(cache, request, response);
  } catch (error) {
    const cachedResponse = await cache.match(request);
    if (cachedResponse) return cachedResponse;
    throw error;
  }
}

self.addEventListener("install", (event) => {
  event.waitUntil(precacheShell().then(() => self.skipWaiting()));
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    Promise.all([
      caches.keys().then((keys) => Promise.all(
        keys
          .filter((key) => key.startsWith(CACHE_PREFIX) && key !== CACHE_NAME)
          .map((key) => caches.delete(key)),
      )),
      self.clients.claim(),
    ]),
  );
});

self.addEventListener("fetch", (event) => {
  const { request } = event;
  if (request.method !== "GET") return;

  const requestUrl = new URL(request.url);
  if (requestUrl.origin !== self.location.origin) return;
  if (requestUrl.pathname.endsWith("/lan-config.js")) return;

  const isVideo = request.destination === "video"
    || requestUrl.pathname.includes("/assets/videos/")
    || VIDEO_PATTERN.test(requestUrl.pathname);
  if (isVideo || request.headers.has("range")) return;

  if (request.mode === "navigate") {
    event.respondWith(networkFirstNavigation(request));
    return;
  }

  if (STATIC_ASSET_PATTERN.test(requestUrl.pathname)) {
    event.respondWith(staleWhileRevalidate(event));
    return;
  }

  event.respondWith(networkFirstResource(request));
});
