/* Кабинет перевозчика — демо · REFRACT.AI
   Кэш оболочки: демо открывается даже без сети (важно на встрече в подвале у клиента). */
var CACHE = 'refract-cabinet-v1';
var SHELL = [
  './',
  'index.html',
  'manifest.webmanifest',
  'icon-192.png',
  'icon-512.png',
  'apple-touch-icon.png',
  'fonts/inter-cyrillic-400-normal.woff2',
  'fonts/inter-latin-400-normal.woff2',
  'fonts/inter-cyrillic-500-normal.woff2',
  'fonts/inter-latin-500-normal.woff2',
  'fonts/inter-cyrillic-600-normal.woff2',
  'fonts/inter-latin-600-normal.woff2',
  'fonts/inter-tight-cyrillic-700-normal.woff2',
  'fonts/inter-tight-latin-700-normal.woff2',
  'fonts/inter-tight-cyrillic-800-normal.woff2',
  'fonts/inter-tight-latin-800-normal.woff2',
  'fonts/jetbrains-mono-cyrillic-600-normal.woff2',
  'fonts/jetbrains-mono-latin-600-normal.woff2'
];

self.addEventListener('install', function (e) {
  e.waitUntil(
    caches.open(CACHE).then(function (c) { return c.addAll(SHELL); }).then(function () { return self.skipWaiting(); })
  );
});

self.addEventListener('activate', function (e) {
  e.waitUntil(
    caches.keys().then(function (keys) {
      return Promise.all(keys.map(function (k) { return k === CACHE ? null : caches.delete(k); }));
    }).then(function () { return self.clients.claim(); })
  );
});

self.addEventListener('fetch', function (e) {
  if (e.request.method !== 'GET') return;
  e.respondWith(
    caches.match(e.request).then(function (hit) {
      return hit || fetch(e.request).catch(function () { return caches.match('index.html'); });
    })
  );
});
