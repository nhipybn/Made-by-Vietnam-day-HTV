export default function BannerSection() {
  return (
    /* - w-screen và -translate-x-1/2 giúp xé rào container cha để tràn lề 2 bên sát mép.
      - Thay đổi aspect sang 16/9 trên mobile và auto trên desktop để ảnh giãn nở tự nhiên theo chiều cao thực tế.
    */
    <div className="w-screen relative left-1/2 right-1/2 -translate-x-1/2 overflow-hidden block m-0 p-0">
      <div className="w-full aspect-[16/9] md:aspect-auto relative block">
        <img
          src="/banner.png"
          alt="Made by Vietnam Day 2026 Banner"
          /* - object-contain: Giữ nguyên tỷ lệ gốc của ảnh 100%, tuyệt đối không cắt góc, không méo hình.
            - h-auto: Tự động kéo cao theo tỷ lệ ảnh thực tế trên các màn hình lớn.
          */
          className="w-full h-auto md:h-full object-contain md:object-cover object-center block p-0 m-0 border-none" 
        />
      </div>
    </div>
  );
}