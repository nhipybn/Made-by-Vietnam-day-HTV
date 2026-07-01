'use client';

import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react'; // Đã import thêm useEffect

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  // TÍCH HỢP TRACKING BOWNOW MỚI TẠI ĐÂY
  useEffect(() => {
    // 1. Tạo thẻ script mới
    const bownowScript = document.createElement('script');
    bownowScript.id = '_bownow_ts';
    bownowScript.charset = 'utf-8';
    bownowScript.src = 'https://contents.bownow.jp/js/UTC_1d9e0c1d1dcfe0dd1cba/trace.js';
    bownowScript.async = true; // Chạy bất đồng bộ để không ảnh hưởng tốc độ tải trang

    // 2. Nhúng thẻ script vào phần <head> của trang web
    const head = document.getElementsByTagName('head')[0];
    if (head) {
      head.appendChild(bownowScript);
    }

    // 3. Hàm Cleanup: Tự động gỡ bỏ script khi component unmount để tránh rác DOM
    return () => {
      const existingScript = document.getElementById('_bownow_ts');
      if (existingScript && head) {
        head.removeChild(existingScript);
      }
    };
  }, []); // Mảng rỗng [] đảm bảo tracking này chỉ chạy duy nhất 1 lần khi tải trang

  const scrollTo = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-[#0d1221] italic">
      <div className="max-w-6xl mx-auto px-4 py-2.5 flex items-center justify-between">

{/* LOGO ĐÃ ĐƯỢC GIỮ LẠI VÀ HIỂN THỊ CHUẨN XÁC */}
        <div className="flex-shrink-0">
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-zZRuJae60sNIIobA4Vmk66lzO30soc.png"
            alt="Made by Vietnam"
            className="w-40 md:w-48 h-auto object-contain block brightness-110"
          />
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6 ml-auto">
          <button
            onClick={() => scrollTo('organizers')}
            className="text-sm font-medium text-white hover:text-[#C9A84C] transition cursor-pointer"
          >
            Đơn vị tổ chức
          </button>
          <button
            onClick={() => scrollTo('who-section')}
            className="text-sm font-medium text-white hover:text-[#C9A84C] transition cursor-pointer"
          >
            Đối tượng tham gia
          </button>
          <button
            onClick={() => scrollTo('why-section')}
            className="text-sm font-medium text-white hover:text-[#C9A84C] transition cursor-pointer"
          >
            Lý do tham gia
          </button>
          <button
            onClick={() => scrollTo('reg-form')}
            className="bg-[#C0392B] text-white px-5 py-1.5 rounded-lg hover:bg-[#a93226] transition font-semibold text-sm cursor-pointer"
          >
            Nhận hướng dẫn & tiêu chí xét duyệt
          </button>
        </nav>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-white cursor-pointer"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileOpen && (
        <div className="md:hidden bg-[#0d1221]">
          <nav className="flex flex-col gap-3 p-4">
            <button
              onClick={() => scrollTo('organizers')}
              className="text-sm text-white hover:text-[#C9A84C] text-left cursor-pointer"
            >
              Đơn vị tổ chức
            </button>
            <button
              onClick={() => scrollTo('who-section')}
              className="text-sm text-white hover:text-[#C9A84C] text-left cursor-pointer"
            >
              Đối tượng tham gia
            </button>
            <button
              onClick={() => scrollTo('why-section')}
              className="text-sm text-white hover:text-[#C9A84C] text-left cursor-pointer"
            >
              Lý do tham gia
            </button>
            <button
              onClick={() => scrollTo('reg-form')}
              className="bg-[#C0392B] text-white px-6 py-2 rounded-lg w-full font-semibold text-sm text-center cursor-pointer"
            >
              Đăng ký
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}