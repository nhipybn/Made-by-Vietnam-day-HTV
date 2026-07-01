import Header from '@/components/header';
import HeroSection from '@/components/hero-section';
import BannerSection from '@/components/banner-section';
import AdSection from '@/components/ad-section';
import ProofSection from '@/components/proof-section';
import OrganizersSection from '@/components/OrganizersSection'; // Viết hoa chuẩn để máy nhận file
import WhoSection from '@/components/who-section';
import WhySection from '@/components/why-section';
import AgendaSection from '@/components/agenda-section'; 
import FormSection from '@/components/form-section';

export default function Page() {
  return (
    <main className="min-h-screen bg-[#f4f4f2]">
      <Header />
      
      {/* Banner tràn màn hình */}
      <BannerSection />

      {/* Khung giới hạn độ rộng nội dung */}
      <div className="max-w-6xl mx-auto px-4 py-8 space-y-12 sm:space-y-16">
        <HeroSection />
        <AdSection />
        <ProofSection />
        <OrganizersSection />
        <WhoSection />
        <WhySection />
        
        {/* Khối lịch trình */}
        <AgendaSection />
        
        <FormSection />
      </div>
    </main>
  );
}