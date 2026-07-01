'use client';

import Image from 'next/image';

export default function OrganizersSection() {
  return (
    <section
      id="organizers"
      className="bg-[#f4f4f2] pt-10 pb-8 w-full scroll-mt-20 overflow-hidden"
    >
      {/* Khung tiêu đề */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-2 text-center">
          <span className="text-xs font-bold uppercase tracking-wider text-[#C9A84C] block mb-1">
            Đơn vị tổ chức
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-900 tracking-tight">
            Ai đứng sau sự kiện này?
          </h2>
        </div>
      </div>

      {/* Hàng 1: Đơn vị tổ chức + Đơn vị đồng tổ chức */}
      <div className="w-full flex justify-center mt-6 px-4">
        <Image
          src="/logo-row1.png"
          alt="Đơn vị tổ chức và đơn vị đồng tổ chức"
          width={896}
          height={152}
          className="w-auto h-16 sm:h-20 md:h-24 object-contain"
          priority
        />
      </div>

      {/* Đường kẻ phân cách nhẹ */}
      <div className="w-full max-w-5xl mx-auto my-6 border-t border-neutral-200" />

      {/* Hàng 2: Phối hợp chuyên môn + Đối tác truyền thông + Đơn vị thực hiện */}
      <div className="w-full flex justify-center px-4">
        <Image
          src="/logo-row2.png"
          alt="Phối hợp chuyên môn, đối tác truyền thông và đơn vị thực hiện"
          width={1456}
          height={160}
          className="w-auto h-16 sm:h-20 md:h-24 object-contain"
        />
      </div>
    </section>
  );
}