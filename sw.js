// Frühere Version: räumt nur ihren eigenen Speicher auf und meldet sich ab.
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', event => {
  event.waitUntil(caches.keys()
    .then(keys => Promise.all(keys.filter(k => k.startsWith('runensturm-')).map(k => caches.delete(k))))
    .then(() => self.registration.unregister()));
});
