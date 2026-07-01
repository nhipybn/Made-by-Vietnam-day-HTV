export default function ProofSection() {
  const proofCards = [
    { number: '1.200', suffix: '+', text: 'Người tham dự xuyên suốt các hoạt động' },
    { number: '5', suffix: 'Tr', text: 'Lượt xem trên các nền tảng trực tuyến' },
    { number: '100K', suffix: '+', text: 'Lượt tương tác trên mạng xã hội' },
    { number: '212', suffix: '+', text: 'Doanh nghiệp, tổ chức & hiệp hội tham gia' },
    { number: '100', suffix: '+', text: 'Chuyên gia kinh tế & tài chính tham dự' },
    { number: '2', suffix: 'năm', text: 'Hành trình — 100+ số phát sóng — 200+ câu chuyện thương hiệu' },
  ];

  return (
    // Đã bổ sung class `italic` để đồng bộ font chữ in nghiêng toàn khối số liệu
    <section className="bg-[#0a1230] rounded-2xl p-8 sm:p-10 my-8 sm:my-12 italic">
      <p className="text-xs font-bold tracking-widest uppercase text-[#C9A84C] text-center mb-8">
        Made By Vietnam Day 2025 — Mùa 1 đã chứng minh
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
        {proofCards.map((card, idx) => (
          <div key={idx} className="border border-[rgba(201,168,76,0.2)] bg-[rgba(255,255,255,0.04)] rounded-xl p-4 text-center">
            <div className="text-3xl sm:text-4xl font-bold text-[#C9A84C] mb-2">
              {card.number}<span className="text-xl font-semibold">{card.suffix}</span>
            </div>
            <p className="text-xs sm:text-sm text-[rgba(255,255,255,0.6)] leading-relaxed">
              {card.text}
            </p>
          </div>
        ))}
      </div>

      <p className="text-xs text-center text-[rgba(255,255,255,0.3)]">
        * Số liệu thực tế từ Made By Vietnam Day 2025 — Mùa đầu tiên do HTV tổ chức
      </p>
    </section>
  );
}