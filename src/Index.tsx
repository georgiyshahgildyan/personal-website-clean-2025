import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import ResearchSection from '@/components/ResearchSection';
import PublicationsSection from '@/components/PublicationsSection';
import MetricsSection from '@/components/MetricsSection';
import EditorialSection from '@/components/EditorialSection';
import TalksSection from '@/components/TalksSection';
import TeachingSection from '@/components/TeachingSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen gradient-bg relative">
      {/* Gradient overlay for better text readability */}
      <div className="fixed inset-0 bg-background/60 pointer-events-none" />
      
      {/* Content */}
      <div className="relative z-10">
        <Header />
        <main>
          <HeroSection />
          <ResearchSection />
          <PublicationsSection />
          <MetricsSection />
          <EditorialSection />
          <TalksSection />
          <TeachingSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Index;
