"use client";

import { useState } from "react";

export default function AgendaSection() {
  const [activeTab, setActiveTab] = useState<"day1" | "day2">("day1");

  const agendaDay1 = [
    {
      time: "08:00",
      title: "Đón tiếp đại biểu & doanh nghiệp",
      desc: "Check-in, tham quan gian hàng, kết nối sơ bộ.",
    },
    {
      time: "09:00",
      title: "Lễ Khai mạc Made By Vietnam Expo 2026",
      desc: "Phát biểu khai mạc, cắt băng, TVC doanh nghiệp chiếu trên màn hình LED & OOH ngoài trời.",
      badge: "Trực tiếp",
      badgeType: "red",
    },
    {
      time: "10:00",
      title: "Tham quan triển lãm — Kết nối giao thương",
      desc: "Các doanh nghiệp trưng bày sản phẩm & giải pháp, kết nối B2B trực tiếp.",
    },
    {
      time: "14:00",
      title: "Hội thảo chuyên đề buổi chiều",
      desc: "Marketing, Chuyển đổi số, Ứng dụng AI, Phát triển xanh & Kết nối đầu tư.",
    },
    {
      time: "17:00",
      title: "Tiệc kết nối VIP",
      desc: "Dành riêng cho Gói Tài trợ 1 — gặp gỡ, giao lưu, mở rộng quan hệ kinh doanh.",
      badge: "VIP only",
      badgeType: "gold",
    },
  ];

  const agendaDay2 = [
    {
      time: "08:00",
      title: "Triển lãm ngày 2 & Hội thảo sáng",
      desc: "Tiếp tục kết nối giao thương, các phiên hội thảo chuyên sâu.",
    },
    {
      time: "14:00",
      title: "Doanh nghiệp chia sẻ trên sân khấu",
      desc: "Đại diện doanh nghiệp chia sẻ câu chuyện thương hiệu trước khán giả trực tiếp (Gói 1).",
    },
    {
      time: "18:00",
      title: "Đón tiếp tại Đài HTV TP.HCM",
      desc: "TVC doanh nghiệp chiếu trên màn hình LED & OOH ngoài trời HTV.",
    },
    {
      time: "19:30",
      title: "Lễ Vinh Danh Made By Vietnam Awards 2026",
      desc: "Xướng tên, trao cúp/chứng nhận trên sân khấu HTV. Logo hiển thị màn hình LED. Ghi hình & phỏng vấn trực tiếp.",
      badge: "Trực tiếp trên HTV1 và Truyền tiếp trên HTV9",
      badgeType: "red",
    },
  ];

  const currentAgenda = activeTab === "day1" ? agendaDay1 : agendaDay2;

  return (
    // Đã thêm class `italic` vào thẻ cha ngoài cùng để đồng bộ font chữ in nghiêng toàn khối
    <section className="py-12 sm:py-16 max-w-5xl mx-auto px-4 font-sans italic" id="agenda-section">
      
      {/* TIÊU ĐỀ KHỐI CĂN GIỮA ĐỒNG BỘ */}
      <div className="mb-10 text-center">
        <p className="text-xs font-bold tracking-widest uppercase text-[#C9A84C] mb-3">
          Lịch trình
        </p>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1a1a1a] max-w-xl mx-auto">
          Agenda sự kiện
        </h2>
      </div>

      {/* THANH CHUYỂN TAB (BUTTON SWITCH) */}
      <div className="flex justify-center gap-4 mb-10">
        <button
          onClick={() => setActiveTab("day1")}
          className={`px-6 py-3 rounded-full text-base font-bold transition-all duration-300 cursor-pointer ${
            activeTab === "day1"
              ? "bg-[#0a1230] text-white shadow-md shadow-[#0a1230]/20"
              : "bg-white border border-neutral-200 text-neutral-600 hover:bg-neutral-50"
          }`}
        >
          07/08 — Khai mạc Triển lãm
        </button>
        <button
          onClick={() => setActiveTab("day2")}
          className={`px-6 py-3 rounded-full text-base font-bold transition-all duration-300 cursor-pointer ${
            activeTab === "day2"
              ? "bg-[#0a1230] text-white shadow-md shadow-[#0a1230]/20"
              : "bg-white border border-neutral-200 text-neutral-600 hover:bg-neutral-50"
          }`}
        >
          08/08 — Hội thảo & Lễ Vinh Danh
        </button>
      </div>

      {/* DANH SÁCH LỊCH TRÌNH CHI TIẾT */}
      <div className="bg-white border border-[rgba(0,0,0,0.06)] rounded-2xl p-6 sm:p-10 shadow-[0_10px_30px_rgba(0,0,0,0.02)] space-y-8">
        {currentAgenda.map((item, idx) => (
          <div
            key={idx}
            className={`flex flex-col sm:flex-row gap-4 sm:gap-8 items-start ${
              idx !== currentAgenda.length - 1 ? "border-b border-neutral-100 pb-8" : ""
            }`}
          >
            {/* Cột thời gian */}
            <div className="text-lg sm:text-xl font-extrabold text-[#C9A84C] sm:w-24 flex-shrink-0 pt-0.5">
              {item.time}
            </div>

            {/* Cột thông tin */}
            <div className="flex-1">
              {/* Tiêu đề mục lịch trình */}
              <h3 className="font-extrabold text-base sm:text-lg text-[#1a1a1a] mb-1.5 leading-snug">
                {item.title}
              </h3>
              
              {/* Mô tả chi tiết */}
              <p className="text-base text-neutral-600 leading-relaxed mb-3">
                {item.desc}
              </p>

              {/* Nhãn gắn kèm nếu có */}
              {item.badge && (
                <span
                  className={`inline-block px-3 py-1 rounded-md text-xs font-bold ${
                    item.badgeType === "red"
                      ? "bg-red-50 text-[#C0392B]"
                      : "bg-[#C9A84C]/10 text-[#7a5f1a]"
                  }`}
                >
                  {item.badge}
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}