// Grainhouse offline cache.
// Photos and fonts: served from the cache once seen, so a second visit costs no data for them.
// The page itself: network first, cache when offline, so updates still arrive.
// Bump V whenever photos are rebuilt under the same file names.
const V = 'gh-v1';
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil(
  caches.keys().then(ks => Promise.all(ks.filter(k => k !== V).map(k => caches.delete(k)))).then(() => self.clients.claim())
));
self.addEventListener('fetch', e => {
  const r = e.request;
  if (r.method !== 'GET') return;
  const u = new URL(r.url);
  if (u.origin !== location.origin) return;
  if (/\/(media|fonts)\//.test(u.pathname)) {
    e.respondWith(caches.open(V).then(c => c.match(r).then(hit => hit || fetch(r).then(res => {
      if (res.ok) c.put(r, res.clone());
      return res;
    }))));
    return;
  }
  e.respondWith(fetch(r).then(res => {
    if (res.ok) { const cl = res.clone(); caches.open(V).then(c => c.put(r, cl)); }
    return res;
  }).catch(() => caches.match(r)));
});
