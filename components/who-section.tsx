export default function WhoSection() {
  const audiences = [
    {
      icon: '🏭',
      title: 'Doanh nghiệp sản xuất',
      description: 'Có sản phẩm hoàn thiện, muốn mở rộng nhận diện thương hiệu ra thị trường rộng lớn hơn.',
    },
    {
      icon: '🏆',
      title: 'Doanh nghiệp Thương Mại',
      description: 'Có các sản phẩm được người tiêu dùng đón nhận',
    },
    {
      icon: '👔',
      title: 'Doanh nghiệp dịch vụ & giải pháp',
      description: 'Giải pháp xuất sắc, muốn tiếp cận doanh nghiệp và nhà đầu tư lớn ngay trong cùng 1 sự kiện.',
    },
  ];

  return (
    <section className="py-12 sm:py-16 max-w-6xl mx-auto px-4 font-sans italic" id="who-section">
      {/* PHẦN TIÊU ĐỀ: ĐÃ ĐƯỢC CĂN GIỮA TUYỆT ĐỐI */}
      <div className="mb-12 text-center">
        <p className="text-xs font-bold tracking-widest uppercase text-[#C9A84C] mb-3">
          Đối tượng tham gia
        </p>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1a1a1a] max-w-xl mx-auto mb-3">
          Sự kiện này dành cho ai?
        </h2>
        <p className="text-base sm:text-lg text-neutral-600 font-medium max-w-2xl mx-auto">
          Các doanh nghiệp có Giám đốc/Founder là người Việt Nam
        </p>
      </div>

      {/* DANH SÁCH ĐỐI TƯỢNG - GRID 3 CỘT */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {audiences.map((item, idx) => (
          <div
            key={idx}
            className="bg-white border border-[rgba(0,0,0,0.06)] border-l-4 border-l-[#C9A84C] rounded-r-2xl p-6 shadow-[0_4px_20px_rgba(0,0,0,0.01)] hover:shadow-md hover:border-r hover:border-r-[rgba(201,168,76,0.2)] transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="text-4xl mb-4">{item.icon}</div>
              
              <h3 className="font-extrabold text-base sm:text-lg text-[#1a1a1a] mb-2">
                {item.title}
              </h3>
              
              <p className="text-base text-neutral-600 leading-relaxed">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}