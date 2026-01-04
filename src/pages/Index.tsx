import { useEffect } from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import ResearchSection from '@/components/ResearchSection';
import PublicationsSection from '@/components/PublicationsSection';
import MetricsSection from '@/components/MetricsSection';
import EditorialSection from '@/components/EditorialSection';
import AwardsSection from '@/components/AwardsSection';
import ContactSection from '@/components/ContactSection';
import LatestBlogSection from '@/components/LatestBlogSection';

import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';

const Index = () => {
  useEffect(() => {
    document.title = "Dr. Georgiy Shakhgildyan | Glass Science & Research";
  }, []);

  return (
    <div className="min-h-screen gradient-bg relative overflow-x-hidden">
      {/* Content */}
      <div className="relative z-10">
        <Header />
        <main>
          <HeroSection />
          <ResearchSection />
          <PublicationsSection />
          <MetricsSection />
          <EditorialSection />
          <AwardsSection />
          <LatestBlogSection />
          <ContactSection />
        </main>
        <Footer />
        <ScrollToTop />
      </div>
    </div>
  );
};

export default Index;
