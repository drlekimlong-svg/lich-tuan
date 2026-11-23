# Lịch sử phiên bản

Quy ước đánh số, dạng `A.B.C`:

- **A** là 0 trong giai đoạn thử nghiệm; lên 1 khi app được dùng chính thức sau đợt thử với sinh viên.
- **B** tăng khi thêm chức năng hoặc đổi giao diện.
- **C** tăng khi chỉ sửa lỗi hoặc sửa câu chữ.

Số phiên bản hiện ở chân trang và ở trang mở đầu của app, và được ghi vào tệp sao lưu. Mỗi phiên bản đưa lên web có một nhãn `vA.B.C` trong kho mã.

## 0.5.0 · 23/11/2026

- Giao diện dễ đọc hơn trên điện thoại: tiêu đề viết thường thay cho chữ in hoa giãn cách, bớt chữ đậm; nút tải tệp .ics và in nằm ngay sau sáu tiêu chí; danh sách khối thu gọn được; bước 3 làm nhạt ô giờ trống để ba việc ưu tiên nổi lên; khối việc đã hứa có chữ “Hứa”; lưới tuần trên máy tính cao hơn, chữ dài kết thúc bằng “…”.
- Bước 3 có tiến độ của ba việc ưu tiên (đã xếp so với cần xếp); hộp nhập khối báo việc đang chọn còn thiếu bao nhiêu phút.
- Tệp lời hẹn lập lịch 15 phút lặp lại mỗi tuần, nhắc trước 10 phút; hướng dẫn nhập tệp vào lịch cho máy tính, iPhone, Android.
- “Của tôi” giữ được nhiều tuần mẫu (mỗi đợt lâm sàng một tuần mẫu, tối đa 6); chọn tuần mẫu khi lập tuần mới. Bản lưu và tệp sao lưu cũ vẫn đọc được.
- Chế độ nhúng `?nhung=1` để mở trong app thành viên NKTV: bỏ trang mở đầu, logo, tên và chân trang; vẫn chọn được bạn đồng hành; bản in vẫn đủ đầu trang.

## 0.4.0 · 08/10/2026

- Trang mở đầu: logo CLB ở giữa, sáu mascot xếp vòng quanh, nút “Bắt đầu”.
- Bạn đồng hành: chọn một mascot đi cùng, hoặc để sáu bạn thay phiên; mỗi bước có một lời nhắc kèm hình.
- Logo CLB ở đầu trang và chân trang; phông Be Vietnam Pro; chân trang ghi tên CLB.
- Bắt đầu đánh số phiên bản.

## 0.3.0 · 08/10/2026

Bản đầu tiên đưa lên web.

- Bước 4, rà soát cuối tuần: đánh dấu khung làm đúng như lịch, kết quả ba việc, nguyên nhân lệch chính, điều giữ và điều đổi.
- Ba dòng gửi người đồng hành, soạn sẵn từ phần rà soát.
- Lập tuần mới và danh sách các tuần đã rà soát.
- Sao lưu và khôi phục dữ liệu.
- Mở được khi mất mạng; thêm được vào màn hình chính.

## 0.2.0 · 08/10/2026

Chưa đưa lên web.

- Bước 2, ba việc ưu tiên: hành động tiếp theo, số phút cần xếp.
- Bước 3, lịch tuần này: việc ưu tiên, việc nhỏ, vận động, khoảng dự phòng, phương án cho ngày nặng.
- Chấm sáu tiêu chí của một lịch khả thi.
- Xuất tệp cho Lịch Google và bản in A4.

## 0.1.0 · 08/10/2026

Chưa đưa lên web.

- Bước 1, tuần mẫu: nhập giờ theo khối, lưới tuần, bảng 168 giờ.
- Dữ liệu mẫu của An và Minh.
