const CACHE_NAME = 'refract-ai-v11';
const ASSETS = [
    '/',
    '/index.html',
    '/404.html',
    '/manifest.json',
    '/css/style.css',
    '/js/main.js',
    '/assets/logo.svg',
    '/assets/favicon.svg',
    '/assets/og-image.svg',
    '/assets/solutions/docflow.svg',
    '/assets/solutions/assistants.svg',
    '/assets/solutions/analytics.svg',
    '/assets/pixel-head-1.svg',
    '/assets/pixel-head-2.svg',
    '/assets/pixel-head-3.svg',
    '/assets/pixel-head-4.svg',
    '/assets/pixel-head-5.svg'
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
