export default function WhySection() {
  const reasons = [
    {
      title: 'Xuất hiện trên sóng quốc gia — HTV9 & HTV1',
      description: 'Logo, hình ảnh vinh danh và TVC doanh nghiệp được phát sóng trực tiếp và đưa tin trên giờ vàng HTV9 (18h10 Thứ Sáu) sau sự kiện.',
    },
    {
      title: 'Tiếp cận hàng triệu người qua TikTok & 500+ tòa nhà',
      description: 'Hashtag thương hiệu trên kênh TikTok Made By Vietnam + màn hình thang máy 500+ tòa nhà văn phòng & trung tâm thương lại trong 2 tuần sau sự kiện.',
    },
    {
      title: 'Cúp & Chứng nhận Made By Vietnam Awards 2026',
      description: 'Nhận cúp và chứng nhận chính thức trên sân khấu HTV — tài sản thương hiệu dùng lâu dài trong truyền thông, bán hàng và quan hệ đối tác.',
    },
    {
      title: 'Gặp gỡ cộng đồng doanh nghiệp & nhà đầu tư',
      description: 'Tiệc kết nối VIP + triển lãm + hội thảo chuyên đề trong cùng chuỗi sự kiện — tiết kiệm thời gian, tối đa cơ hội.',
    },
  ];

  return (
    // Đã bổ sung class `italic` vào đây để đưa toàn bộ font chữ về kiểu in nghiêng đồng bộ
    <section className="py-12 sm:py-16 max-w-5xl mx-auto px-4 font-sans italic" id="why-section">
      
      {/* PHẦN TIÊU ĐỀ: ĐÃ ĐƯỢC CĂN GIỮA TUYỆT ĐỐI */}
      <div className="mb-12 text-center">
        <p className="text-xs font-bold tracking-widest uppercase text-[#C9A84C] mb-3">
          Lý do tham gia
        </p>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1a1a1a] max-w-xl mx-auto">
          Tại sao tham gia?
        </h2>
      </div>

      {/* DANH SÁCH LÝ DO DẠNG DÒNG (LIST) */}
      <div className="space-y-5">
        {reasons.map((reason, idx) => (
          <div
            key={idx}
            className="flex gap-5 bg-white border border-[rgba(0,0,0,0.06)] rounded-2xl p-5 sm:p-6 shadow-[0_4px_20px_rgba(0,0,0,0.01)] hover:shadow-md hover:border-[#C9A84C]/30 transition-all duration-300 items-start"
          >
            {/* Vòng tròn số thứ tự */}
            <div className="flex-shrink-0 w-10 h-10 bg-[#C0392B] text-white rounded-full flex items-center justify-center font-extrabold text-base shadow-sm shadow-[#C0392B]/20">
              {idx + 1}
            </div>
            
            <div className="pt-1.5">
              {/* TIÊU ĐỀ LÝ DO */}
              <h3 className="font-extrabold text-base sm:text-lg text-[#1a1a1a] mb-1.5 leading-snug">
                {reason.title}
              </h3>
              
              {/* MÔ TẢ LÝ DO */}
              <p className="text-base text-neutral-600 leading-relaxed">
                {reason.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}