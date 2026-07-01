
export default function FormSection() {
  return (
    <section id="reg-form" className="bg-[#0a1230] rounded-2xl p-6 sm:p-12 mt-8 sm:mt-12"> 
      <div className="max-w-5xl mx-auto">
        
        {/* Phần Tiêu Đề */}
        <div className="text-center mb-8">
          <h2 className="text-2xl sm:text-4xl font-bold text-white mb-2">
            Đăng ký tham gia
          </h2>
          <p className="text-sm text-[rgba(255,255,255,0.5)]">
            Điền form dưới đây — ban tổ chức sẽ liên hệ và xác nhận trong 24 giờ
          </p>
        </div>
 
        <div className="bg-transparent"> 
          <iframe
            src="https://contents.bownow.jp/forms/view?form_id=sid_f504ec839d92df81ff28"
            width="100%"
            height="800"
            frameBorder="0"
            scrolling="yes"
            style={{ display: 'block', border: 'none' }}
            title="Made By Vietnam Contact Form"
          >
            Loading form...
          </iframe>
        </div>

        <p className="text-xs text-center text-[rgba(255,255,255,0.3)] mt-6">
          * Thông tin của bạn được bảo mật và chỉ dùng để BTC liên hệ tư vấn
        </p>
      </div>
    </section>
  );
}