const CACHE_NAME = 'refract-ai-v1';
const ASSETS = [
    '/',
    '/index.html',
    '/css/style.css',
    '/js/main.js',
    '/assets/logo.svg',
    '/assets/favicon.svg',
    '/assets/pixel-head-1.svg',
    '/assets/pixel-head-2.svg',
    '/assets/pixel-head-3.svg',
    '/assets/pixel-head-4.svg',
    '/manifest.json',
    '/404.html'
];

self.addEventListener('install', (e) => {
    e.waitUntil(
        caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
    );
    self.skipWaiting();
});

self.addEventListener('activate', (e) => {
    e.waitUntil(
        caches.keys().then((keys) =>
            Promise.all(keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k)))
        )
    );
    self.clients.claim();
});

self.addEventListener('fetch', (e) => {
    if (e.request.method !== 'GET') return;
    // Skip analytics and external
    if (e.request.url.includes('mc.yandex.ru') ||
        e.request.url.includes('api.telegram.org')) return;

    e.respondWith(
        caches.match(e.request).then((cached) =>
            cached || fetch(e.request).then((response) => {
                if (response.ok && new URL(e.request.url).origin === location.origin) {
                    const clone = response.clone();
                    caches.open(CACHE_NAME).then((cache) => cache.put(e.request, clone));
                }
                return response;
            }).catch(() => caches.match('/404.html'))
        )
    );
});
