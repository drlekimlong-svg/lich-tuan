# -*- coding: utf-8 -*-
"""Đóng gói lich-tuan-kha-thi.src.html (phần nội dung) thành index.html chạy độc lập: mở bằng trình duyệt hoặc đặt lên web.
Bản đặt trên web cần đủ sáu tệp: index.html, sw.js, manifest.webmanifest, icon-192.png, icon-512.png, icon-180.png."""
import io, os

HERE = os.path.dirname(os.path.abspath(__file__))
src = io.open(os.path.join(HERE, "lich-tuan-kha-thi.src.html"), encoding="utf-8").read()
cut = src.index("</style>") + len("</style>")

HEAD = """<!doctype html>
<html lang="vi">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<meta name="theme-color" content="#16324F">
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-title" content="Lịch tuần">
<link rel="manifest" href="manifest.webmanifest">
<link rel="icon" href="icon-192.png">
<link rel="apple-touch-icon" href="icon-180.png">
"""

# Chỉ đăng ký khi trang nằm trên web (https) hoặc máy thử; mở tệp trực tiếp thì bỏ qua.
SW = """<script>
if ('serviceWorker' in navigator && (location.protocol === 'https:' || location.hostname === 'localhost')) {
  window.addEventListener('load', function () { navigator.serviceWorker.register('sw.js').catch(function () {}); });
}
</script>
"""

html = HEAD + src[:cut] + "\n</head>\n<body>\n" + src[cut:].strip() + "\n" + SW + "</body>\n</html>\n"
io.open(os.path.join(HERE, "index.html"), "w", encoding="utf-8", newline="\n").write(html)
print("index.html", len(html), "ký tự")
