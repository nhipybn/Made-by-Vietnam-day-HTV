"use client";

export default function HeroSection() {
  return (
    // Giữ nguyên layout panel rộng 100% độc bản của bạn
    <section className="w-full bg-[#f8f8f6] px-0 pt-0 pb-12 font-sans italic" id="hero-section">
      
      {/* KHUNG PANEL MỞ RỘNG TOÀN MÀN HÌNH */}
      <div className="w-full bg-white border-b border-t border-[rgba(0,0,0,0.06)] border-l-0 sm:border-l-[6px] sm:border-l-[#C9A84C] py-14 px-4 shadow-[0_4px_25px_rgba(0,0,0,0.01)] text-center flex flex-col items-center">
        
        {/* Giới hạn nội dung chữ vừa mắt (max-w-5xl) */}
        <div className="w-full max-w-5xl mx-auto flex flex-col items-center">
          
          {/* TIÊU ĐỀ CHÍNH: Đổi sang font không chân (Sans-serif) cực dày và màu vàng cát ánh kim chuẩn ảnh */}
          <h1 
            className="text-4xl sm:text-7xl font-black tracking-wide mb-10 text-[#F4D381] uppercase leading-none select-none filter drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)]"
            style={{ fontFamily: "var(--font-bricolage), 'Arial Black', sans-serif" }}
          >
            MADE BY VIETNAM DAY 2026
          </h1>

          {/* CÂU HỎI NHẤN MẠNH TÂM LÝ */}
          <div className="w-full max-w-3xl border-t border-b border-neutral-100 py-6 mb-10">
            <p className="text-lg sm:text-2xl font-extrabold leading-relaxed text-[#7a5f1a]">
              “Những thương hiệu Việt xuất sắc hàng đầu đều đã ghi danh, còn bạn thì sao?”
            </p>
          </div>

          {/* NÚT CTA ĐỎ TO RÕ RÀNG */}
          <div className="w-full max-w-md">
            <button 
              onClick={() => {
                const formElement = document.getElementById('form-section') || document.getElementById('reg-form');
                formElement?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="w-full py-4 px-10 rounded-xl font-black text-xl tracking-wider text-white uppercase bg-gradient-to-r from-[#C0392B] to-[#E74C3C] hover:from-[#E74C3C] hover:to-[#C0392B] border-b-4 border-[#962d22] active:border-b-0 active:mt-1 shadow-[0_5px_15px_rgba(192,57,43,0.3)] transition-all duration-200 cursor-pointer"
            >
              Đăng Ký Tham Gia Ngay
            </button>
            <p className="text-xs text-neutral-400 mt-3.5">
              * Thời gian mở cổng đăng ký có hạn cho ban tổ chức xếp chỗ vị trí VIP
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}