import { Mail, Linkedin } from 'lucide-react';
import { useLocation } from 'react-router-dom';

const Footer = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <footer className="py-8 border-t border-border/20">
      <div className="section-container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-foreground/50 w-full">
          <p className="order-2 md:order-1">© {new Date().getFullYear()} Georgiy Shakhgildyan. All rights reserved.</p>

          {!isHomePage && (
            <div className="flex items-center gap-6 order-1 md:order-2">
              <a
                href="mailto:shakhgildian.g.i@muctr.ru"
                className="flex items-center gap-2 hover:text-primary transition-colors group"
                title="Email me"
              >
                <Mail size={16} className="text-primary/60 group-hover:text-primary transition-colors" />
                <span>shakhgildian.g.i@muctr.ru</span>
              </a>
              <a
                href="https://www.linkedin.com/in/shakhgildyan/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-primary transition-colors group"
                title="LinkedIn Profile"
              >
                <Linkedin size={16} className="text-primary/60 group-hover:text-primary transition-colors" />
                <span>LinkedIn</span>
              </a>
            </div>
          )}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
