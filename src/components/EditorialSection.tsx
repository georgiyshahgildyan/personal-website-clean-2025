import { ExternalLink, Tag } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const editorialItems = [
  {
    role: 'Guest Editor',
    journal: 'Materials MDPI',
    title: 'Special Issue "Synergy in Polyphase Materials: Harnessing the Power of Glass and Ceramics (2nd Edition)"',
    status: 'Open Call',
    link: 'https://www.mdpi.com/journal/materials/special_issues/VP0E8B02Z7',
  },
  {
    role: 'Guest Editor',
    journal: 'Journal of the American Ceramic Society',
    title: 'Special Issue "Advances in Transparent Glass-Ceramics"',
    status: 'Open Call',
    link: 'https://ceramics.onlinelibrary.wiley.com/hub/journal/15512916/call-for-papers/si-2025-000658',
  },
  {
    role: 'Guest Editor',
    journal: 'Materials MDPI',
    title: 'Special Issue "Synergy in Polyphase Materials: Harnessing the Power of Glass and Ceramics"',
    link: 'https://www.mdpi.com/journal/materials/special_issues/07TMCV7U9S',
  },
  {
    role: 'Guest Editor',
    journal: 'Ceramics MDPI',
    title: 'Special Issue "Advanced Glasses and Glass-Ceramics"',
    link: 'https://www.mdpi.com/journal/ceramics/special_issues/Y15S3F09W2',
  },
];

const EditorialSection = () => {
  return (
    <section id="editorial" className="py-20 lg:py-32">
      <div className="section-container">
        <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4 text-center">
          Editorial
        </h2>
        <p className="text-foreground/60 text-center mb-12 max-w-2xl mx-auto">
          Guest editor roles in international peer-reviewed journals
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {editorialItems.map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card p-6 lg:p-8 flex flex-col h-full hover:bg-white/5 transition-all duration-300 group relative overflow-hidden"
            >
              <div className="flex justify-between items-start mb-4">
                <span className="text-primary text-xs font-bold uppercase tracking-widest">
                  {item.role}
                </span>
                {item.status && (
                  <Badge variant="outline" className="border-accent text-accent animate-pulse-soft">
                    {item.status}
                  </Badge>
                )}
              </div>

              <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                {item.journal}
              </h3>

              <p className="text-foreground/70 text-sm italic mb-6 flex-grow leading-relaxed">
                {item.title}
              </p>

              <div className="flex items-center text-xs font-medium text-foreground/40 group-hover:text-primary transition-colors">
                <span className="mr-2">View details</span>
                <ExternalLink size={12} />
              </div>

              {/* Decorative gradient corner */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-primary/10 to-transparent -mr-12 -mt-12 group-hover:from-primary/20 transition-all duration-300" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EditorialSection;
