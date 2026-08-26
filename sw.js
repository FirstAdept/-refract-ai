const CACHE_NAME = 'refract-ai-v15';
const ASSETS = [
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
        caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS)).catch(() => {})
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

// Свежий код важнее офлайна: html/css/js — только из сети,
// кэш служит запасным вариантом, если сети нет.
function isFresh(url, request) {
    if (request.mode === 'navigate') return true;
    return /\.(?:html|css|js|json)$/.test(url.pathname);
}

self.addEventListener('fetch', (e) => {
    if (e.request.method !== 'GET') return;

    let url;
    try { url = new URL(e.request.url); } catch (err) { return; }
    if (url.origin !== location.origin) return;
    if (url.pathname.startsWith('/api/')) return;

    if (isFresh(url, e.request)) {
        e.respondWith(
            fetch(e.request).then((response) => {
                if (response && response.ok) {
                    const clone = response.clone();
                    caches.open(CACHE_NAME).then((cache) => cache.put(e.request, clone));
                }
                return response;
            }).catch(() =>
                caches.match(e.request).then((cached) => cached || caches.match('/404.html'))
            )
        );
        return;
    }

    e.respondWith(
        caches.match(e.request).then((cached) =>
            cached || fetch(e.request).then((response) => {
                if (response && response.ok) {
                    const clone = response.clone();
                    caches.open(CACHE_NAME).then((cache) => cache.put(e.request, clone));
                }
                return response;
            }).catch(() => caches.match('/404.html'))
        )
    );
});
