import { Mail, MapPin, Send } from 'lucide-react';

const ContactSection = () => {
  const socialLinks = [
    {
      name: 'ResearchGate',
      label: 'RG',
      href: 'https://www.researchgate.net/profile/Georgiy-Shakhgildyan',
      isText: true
    },
    {
      name: 'LinkedIn',
      label: 'in',
      href: 'https://www.linkedin.com/in/shakhgildyan/',
      isText: true
    },
    {
      name: 'Telegram',
      label: <Send size={24} />,
      href: 'https://t.me/geo_shkh',
      isText: false
    }
  ];

  return (
    <section id="contact" className="py-20 lg:py-40">
      <div className="section-container">
        <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-4 text-center">
          Get in Touch
        </h2>
        <p className="text-foreground/60 text-center mb-16 max-w-2xl mx-auto">
          Open to collaborations and research inquiries in glass science and photonics
        </p>

        <div className="max-w-2xl mx-auto">
          <div className="glass-card p-10 lg:p-16 text-center shadow-2xl">
            {/* Email */}
            <a
              href="mailto:shakhgildian.g.i@muctr.ru"
              className="inline-flex items-center gap-4 text-xl lg:text-2xl font-medium text-foreground hover:text-primary transition-all duration-300 mb-8 hover:tracking-wide"
            >
              <Mail size={28} className="text-primary" />
              shakhgildian.g.i@muctr.ru
            </a>

            {/* Location */}
            <div className="flex flex-col items-center gap-3 text-foreground/70 mb-12">
              <div className="flex items-center gap-2 font-semibold text-foreground">
                <MapPin size={20} className="text-primary" />
                Mendeleev University of Chemical Technology
              </div>
              <span className="text-sm lg:text-base">Department of Glass and Glass-ceramics</span>
            </div>

            {/* Divider */}
            <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent my-10 opacity-30" />

            {/* Social Links circles */}
            <div className="flex justify-center gap-8">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-16 h-16 rounded-full glass-card flex items-center justify-center hover:bg-foreground/10 transition-all duration-500 hover:scale-110 group border-2 border-transparent hover:border-primary/30"
                  title={social.name}
                >
                  {social.isText ? (
                    <span className="text-xl font-bold text-foreground/60 group-hover:text-primary transition-colors">
                      {social.label}
                    </span>
                  ) : (
                    <div className="text-foreground/60 group-hover:text-primary transition-colors">
                      {social.label}
                    </div>
                  )}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
