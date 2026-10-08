// Giúp trang mở được khi mất mạng: có mạng thì lấy bản mới nhất, mất mạng thì dùng bản đã lưu lần trước.
var CACHE = 'lich-tuan-kha-thi';
var FILES = ['./', './index.html', './manifest.webmanifest', './icon-192.png', './icon-512.png', './icon-180.png', './hinh/logo.webp', './hinh/m-byakko-chao.webp', './hinh/m-byakko-nghi.webp', './hinh/m-byakko-ngu.webp', './hinh/m-byakko-quyet.webp', './hinh/m-byakko-vui.webp', './hinh/m-genbu-chao.webp', './hinh/m-genbu-nghi.webp', './hinh/m-genbu-ngu.webp', './hinh/m-genbu-quyet.webp', './hinh/m-genbu-vui.webp', './hinh/m-kirin-chao.webp', './hinh/m-kirin-nghi.webp', './hinh/m-kirin-ngu.webp', './hinh/m-kirin-quyet.webp', './hinh/m-kirin-vui.webp', './hinh/m-kois-chao.webp', './hinh/m-kois-nghi.webp', './hinh/m-kois-ngu.webp', './hinh/m-kois-quyet.webp', './hinh/m-kois-vui.webp', './hinh/m-seiryu-chao.webp', './hinh/m-seiryu-nghi.webp', './hinh/m-seiryu-ngu.webp', './hinh/m-seiryu-quyet.webp', './hinh/m-seiryu-vui.webp', './hinh/m-suzaku-chao.webp', './hinh/m-suzaku-nghi.webp', './hinh/m-suzaku-ngu.webp', './hinh/m-suzaku-quyet.webp', './hinh/m-suzaku-vui.webp'];
self.addEventListener('install', function (e) { e.waitUntil(caches.open(CACHE).then(function (c) { return c.addAll(FILES); })); self.skipWaiting(); });
self.addEventListener('activate', function (e) { e.waitUntil(self.clients.claim()); });
self.addEventListener('fetch', function (e) {
  if (e.request.method !== 'GET' || new URL(e.request.url).origin !== location.origin) return;
  e.respondWith(fetch(e.request).then(function (r) {
    if (r && r.ok) { var copy = r.clone(); caches.open(CACHE).then(function (c) { c.put(e.request, copy); }); }
    return r;
  }).catch(function () { return caches.match(e.request, { ignoreSearch: true }).then(function (m) { return m || caches.match('./index.html'); }); }));
});
