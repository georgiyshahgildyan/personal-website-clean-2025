import { Button } from '@/components/ui/button';
import { FileText, ExternalLink } from 'lucide-react';

const highlights = [
  'Designing & synthesizing new optical glasses',
  'Plasmonic nanoparticles + rare-earth ions in glass',
  'Femtosecond laser writing for micro-optics in glass',
  'Lectures & seminars on glass science and photonics',
  'Editor in special issues and topics',
];

const HeroSection = () => {
  return (
    <section id="about" className="min-h-screen flex items-center pt-20 lg:pt-0">
      <div className="section-container py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Text Content */}
          <div className="order-2 lg:order-1 text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground mb-4 leading-tight">
              Georgiy Shakhgildyan
            </h1>

            <p className="text-lg lg:text-xl text-foreground/70 mb-6">
              <span className="font-medium">PhD in Chemical Engineering · Associate Professor</span>
              <span className="mx-2">·</span>
              <span>Mendeleev University, Moscow, Russia</span>
            </p>

            {/* Highlights */}
            <ul className="space-y-2 mb-8 text-foreground/80">
              {highlights.map((highlight, index) => (
                <li key={index} className="flex items-center gap-3 justify-center lg:justify-start">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                  <span className="text-sm lg:text-base">{highlight}</span>
                </li>
              ))}
            </ul>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <Button asChild size="lg" className="gap-2 btn-primary text-primary-foreground rounded-xl cursor-pointer">
                <a
                  href="https://scholar.google.ru/citations?user=lKMw96wAAAAJ&hl=en"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink size={18} />
                  Publications
                </a>
              </Button>
              <Button size="lg" variant="outline" className="gap-2 btn-glass text-foreground rounded-xl">
                <FileText size={18} />
                Download CV
              </Button>
            </div>
          </div>

          {/* Right Column - Photo */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="glass-card p-4 lg:p-6">
              <div className="w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 xl:w-96 xl:h-96 rounded-xl overflow-hidden shadow-2xl relative">
                <img
                  src="/photo-shkh.jpg"
                  alt="Georgiy Shakhgildyan"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent pointer-events-none" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
