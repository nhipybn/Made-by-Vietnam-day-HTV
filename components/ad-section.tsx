export default function AdSection() {
  const highlights = [
    { icon: '🎬', text: 'Sóng truyền hình quốc gia' },
    { icon: '👥', text: 'Hàng triệu người xem' },
    { icon: '🤝', text: 'Cộng đồng DN lớn nhất Việt Nam' },
    { icon: '🏙️', text: 'Màn hình LED trung tâm Q.1' },
    { icon: '🌐', text: 'Báo điện tử ' },
    { icon: '🚧', text: 'Băng rôn các tuyến phố lớn' },
    { icon: '🌟', text: 'WTC Bình Dương' },
    { icon: '📱', text: 'Trên các nền tảng mạng xã hội' },
  ];

  return (
    // Thêm class `italic` ở đây để toàn bộ chữ bên trong section đều in nghiêng
    <section className="py-12 sm:py-16 max-w-5xl mx-auto px-4 font-sans italic">

      {/* PHẦN 1: TIÊU ĐỀ CHÍNH - CĂN GIỮA */}
      <div className="mb-10 text-center">
        <p className="text-xs font-bold tracking-[0.2em] uppercase text-[#C9A84C] mb-3">
          Dành cho bạn
        </p>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1a1a1a] leading-tight max-w-3xl mx-auto">
          Chỉ diễn ra 1 lần trong năm — dành cho các thương hiệu Việt xuất sắc.
        </h2>
      </div>

      {/* PHẦN 2: KHUNG CHỨA NỘI DUNG */}
      <div className="bg-white border border-[rgba(0,0,0,0.06)] border-l-4 border-l-[#C9A84C] rounded-r-2xl p-6 sm:p-10 shadow-[0_10px_30px_rgba(0,0,0,0.02)]">

        {/* DANH SÁCH 8 HIGHLIGHTS - ĐÃ ĐƯA VỀ SIZE BÌNH THƯỜNG (16px) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-8">
          {highlights.map((item, idx) => (
            <div
              key={idx}
              className="flex items-center gap-3 bg-gradient-to-br from-[rgba(201,168,76,0.03)] to-[rgba(201,168,76,0.1)] border border-[rgba(201,168,76,0.2)] px-4 py-3.5 rounded-xl hover:border-[#C9A84C] transition-all duration-300 group"
            >
              {/* Thêm not-italic nếu muốn icon không bị méo theo chữ, ở đây mình giữ nguyên theo yêu cầu */}
              <span className="text-xl flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </span>
              <span className="text-base font-semibold text-[#7a5f1a] leading-snug">
                {item.text}
              </span>
            </div>
          ))}
        </div>

        {/* PHẦN 3: ĐOẠN CẢNH BÁO VÀ NÚT CTA */}
        <div className="border-t border-neutral-100 pt-8 flex flex-col items-center justify-center text-center gap-5">

          <div className="flex items-center justify-center gap-2 text-[#C0392B]">
            <span className="animate-pulse inline-block w-2 h-2 rounded-full bg-[#C0392B] flex-shrink-0"></span>
            <p className="text-base font-bold">
              Hàng trăm Doanh Nghiệp hàng đầu đã có mặt trong danh sách.
            </p>
          </div>

          {/* Nút bấm cũng tự động nhận in nghiêng, nếu sau này bạn muốn nút chữ thẳng lại thì chỉ cần thêm class `not-italic` vào thẻ <a> này nhé */}
          <a
            href="#reg-form"
            className="w-full sm:w-auto inline-flex items-center justify-center bg-[#C0392B] text-white px-12 py-4 rounded-xl font-bold hover:bg-[#a93226] hover:shadow-lg hover:shadow-[#C0392B]/20 active:scale-98 transition-all duration-300 text-lg tracking-wide shadow-md"
          >
            Nhận hướng dẫn & tiêu chí xét duyệt
          </a>

        </div>

      </div>
    </section>
  );
}