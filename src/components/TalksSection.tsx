import { ExternalLink, Video, Mic } from 'lucide-react';

const talks = [
  {
    title: '[Keynote: Topic Title at Major Conference]',
    type: 'keynote',
    link: '#',
  },
  {
    title: '[Podcast Interview: Research Discussion]',
    type: 'media',
    link: '#',
  },
  {
    title: '[Invited Talk: University Seminar Series]',
    type: 'talk',
    link: '#',
  },
  {
    title: '[Panel Discussion: Future of the Field]',
    type: 'media',
    link: '#',
  },
  {
    title: '[Workshop: Hands-on Tutorial Session]',
    type: 'talk',
    link: '#',
  },
  {
    title: '[Webinar: Online Research Presentation]',
    type: 'media',
    link: '#',
  },
];

const TalksSection = () => {
  return (
    <section id="talks" className="py-20 lg:py-32">
      <div className="section-container">
        <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4 text-center">
          Talks & Media
        </h2>
        <p className="text-foreground/60 text-center mb-12 max-w-2xl mx-auto">
          Selected presentations and media appearances
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {talks.map((talk, index) => (
            <a
              key={index}
              href={talk.link}
              className="glass-card p-6 hover:scale-[1.02] transition-transform duration-300 group"
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  {talk.type === 'keynote' ? (
                    <Mic size={18} className="text-primary" />
                  ) : talk.type === 'media' ? (
                    <Video size={18} className="text-primary" />
                  ) : (
                    <ExternalLink size={18} className="text-primary" />
                  )}
                </div>
                <div className="flex-1">
                  <h3 className="text-foreground/90 font-medium leading-snug group-hover:text-primary transition-colors">
                    {talk.title}
                  </h3>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TalksSection;
