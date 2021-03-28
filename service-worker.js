const CACHE_NAME = 'dowolny-string';
let filesToCache = [
    '/',
    'style.css',
    '/images/image.png',
    '/images/image2.png'
];
self.addEventListener('install', function(evt) {
    evt.waitUntil(
        caches.open(CACHE_NAME).then(function(cache) {
            return cache.addAll(filesToCache);
        }).catch(function(err) {

        })
    );
});
self.addEventListener('fetch', function(evt) {

    evt.respondWith(

        fetch(evt.request).catch(function() {

            return caches.match(evt.request);
        })
    );
});