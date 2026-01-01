import { Button } from '@/components/ui/button';
import { FileText, ExternalLink, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section id="about" className="min-h-screen flex items-center pt-24 lg:pt-0 overflow-hidden">
      <div className="section-container py-12 lg:py-20 relative">
        {/* Decorative background light */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] pointer-events-none -z-10" />

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-x-16 items-center">
          {/* 1. Header & Info - Top on mobile, Left Top on desktop */}
          <div className="text-center lg:text-left space-y-6 lg:col-start-1">
            <div className="space-y-4">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold font-serif text-foreground tracking-tight">
                Georgiy Shakhgildyan
              </h1>
              <h2 className="text-xl lg:text-3xl font-medium text-primary/90 leading-tight max-w-xl mx-auto lg:mx-0">
                Optical glass materials for photonics and laser technologies
              </h2>
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-center lg:justify-start text-foreground/80 font-medium tracking-wide">
                <span>Associate Professor · PhD in Chemical Engineering</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start text-foreground/60 text-sm">
                <a
                  href="https://www.muctr.ru/university/faculty-and-staff/shakhgildyan-georgiy-yurevich/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors underline underline-offset-4 decoration-current/20 hover:decoration-primary"
                >
                  Mendeleev University of Chemical Technology, Moscow
                </a>
              </div>
            </div>
          </div>

          {/* 2. Portrait Photo - Middle on mobile, Right Span on desktop */}
          <div className="flex justify-center lg:justify-end lg:col-start-2 lg:row-start-1 lg:row-span-2 mt-8 lg:mt-12">
            <div className="relative">
              {/* Decorative rings */}
              <div className="absolute -inset-4 border border-primary/20 rounded-2xl -z-10 animate-pulse" />
              <div className="absolute -inset-8 border border-primary/10 rounded-2xl -z-10" />

              <div className="glass-card p-3 lg:p-4 rotate-2 hover:rotate-0 transition-all duration-500">
                <div className="w-64 h-96 sm:w-72 sm:h-[432px] lg:w-80 lg:h-[480px] rounded-xl overflow-hidden shadow-2xl relative">
                  <img
                    src="/photo-shkh-vertical.jpg"
                    alt="Georgiy Shakhgildyan"
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent pointer-events-none" />
                </div>
              </div>
            </div>
          </div>

          {/* 3. Description & Action - Bottom on mobile, Left Bottom on desktop */}
          <div className="text-center lg:text-left space-y-8 lg:col-start-1 lg:row-start-2">
            <p className="text-base lg:text-lg text-foreground/75 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              I work at the intersection of materials science and photonics, developing optical glasses and transparent
              glass-ceramics for laser and micro-optical applications. My research spans from glass-ceramics
              design and synthesis to functional photonic structures created in glass.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button asChild size="lg" className="gap-2 btn-primary text-primary-foreground rounded-2xl cursor-pointer px-8">
                <Link to="/publications">
                  <FileText size={20} />
                  Publications
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="gap-2 btn-glass text-foreground rounded-2xl px-8">
                <a
                  href="https://scholar.google.ru/citations?user=lKMw96wAAAAJ&hl=en"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink size={20} />
                  Google Scholar
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
