const CACHE_NAME = 'version-1';
const urlsToCache = ['index.html', 'offline.html'];

// Install SW
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => {
                console.log('Opened cache');
                return cache.addAll(urlsToCache)
            })
    )
});
// Listen for requests
self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request)
            .then(() => {
                console.log('fetch');
                return fetch(event.request)
                    .catch(() => caches.match('offline.html'))
            })
    )
});
// Activate SW
self.addEventListener('activate', (event) => {
    const cacheWhitelist = [];
    cacheWhitelist.push(CACHE_NAME);

    event.waitUntil(
        caches.keys().then((cachNames) => Promise.all(
            cachNames.map((cachName) => {
                if (!cacheWhitelist.includes(cachName)) {
                    return caches.delete(cachName);
                }
            })

        ))
    )
});