
self.addEventListener("install", event => {
  event.waitUntil(
    caches.open("ibemg-cache").then(cache => {
      return cache.addAll([
        "/",
        "/index.html",
        "/logo.png"
      ]);
    })
  );
});
