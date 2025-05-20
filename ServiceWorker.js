self.addEventListener("install", (e) => {
    e.waitUntil(
        caches.open("cache").then(cache => {
            return cache.addAll(["/", "/index.html", "/icons/nowatt_512.png"]);
        })
    )
});

// force new version comment
// another one
self.addEventListener("fetch", (e) => {
    e.respondWith(
        caches.match(e.request).then(resp => {
            return resp || fetch(e.request);
        })
    )
});
