import { useState } from 'react';
import { Mail, MapPin, Send, CheckCircle2, Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ContactSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formData as any).toString(),
      });

      setIsSubmitted(true);
      form.reset();

      // Reset success message after 5 seconds
      setTimeout(() => setIsSubmitted(false), 5000);
    } catch (error) {
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 lg:py-40 relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="section-container">
        <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-4 text-center font-serif">
          Get in Touch
        </h2>
        <p className="text-foreground/60 text-center mb-16 max-w-2xl mx-auto text-lg">
          Open to collaborations and research inquiries in glass science and photonics
        </p>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Left Column - Contact Info */}
          <div className="glass-card p-8 lg:p-12 flex flex-col">
            <h3 className="text-2xl font-bold text-foreground mb-8 font-serif">Contact Information</h3>

            {/* Contact Methods - Prominent */}
            <div className="space-y-4 mb-8">
              <a
                href="mailto:shakhgildian.g.i@muctr.ru"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 text-foreground/80 hover:text-primary transition-colors group"
              >
                <div className="w-12 h-12 rounded-full glass-card flex items-center justify-center group-hover:bg-foreground/10 transition-all shrink-0">
                  <Mail size={20} />
                </div>
                <span className="text-base font-medium">shakhgildian.g.i@muctr.ru</span>
              </a>

              <a
                href="https://www.researchgate.net/profile/Georgiy-Shakhgildyan"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 text-foreground/80 hover:text-primary transition-colors group"
              >
                <div className="w-12 h-12 rounded-full glass-card flex items-center justify-center group-hover:bg-foreground/10 transition-all shrink-0">
                  <span className="font-bold text-sm">RG</span>
                </div>
                <span className="text-base font-medium">ResearchGate</span>
              </a>

              <a
                href="https://www.linkedin.com/in/shakhgildyan/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 text-foreground/80 hover:text-primary transition-colors group"
              >
                <div className="w-12 h-12 rounded-full glass-card flex items-center justify-center group-hover:bg-foreground/10 transition-all shrink-0">
                  <span className="font-bold text-sm">in</span>
                </div>
                <span className="text-base font-medium">LinkedIn</span>
              </a>

              <a
                href="https://t.me/geo_shkh"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 text-foreground/80 hover:text-primary transition-colors group"
              >
                <div className="w-12 h-12 rounded-full glass-card flex items-center justify-center group-hover:bg-foreground/10 transition-all shrink-0">
                  <Send size={20} />
                </div>
                <span className="text-base font-medium">Telegram</span>
              </a>

              <a
                href="https://www.instagram.com/georgiy.shakhgildyan?igsh=eDEzcDU1c25qYmxv&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 text-foreground/80 hover:text-primary transition-colors group"
              >
                <div className="w-12 h-12 rounded-full glass-card flex items-center justify-center group-hover:bg-foreground/10 transition-all shrink-0">
                  <Instagram size={20} />
                </div>
                <span className="text-base font-medium">Instagram</span>
              </a>
            </div>

            {/* Divider */}
            <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent mb-8 opacity-30" />

            {/* Address */}
            <div className="flex gap-3 text-foreground/70 mb-6">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                <MapPin size={20} className="text-primary" />
              </div>
              <div className="flex flex-col gap-1">
                <span className="font-semibold text-foreground">Mendeleev University of Chemical Technology</span>
                <span className="text-sm">Department of Glass and Glass-ceramics</span>
                <span className="text-sm">20 Geroyev Panfilovcev st., Moscow, Russia</span>
              </div>
            </div>

            {/* Response Time Note */}
            <div className="text-sm text-foreground/60 italic mt-auto">
              Feel free to reach out for collaborations or research inquiries.<br />I typically respond within 1-2 business days.
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="glass-card p-8 lg:p-12">
            <h3 className="text-2xl font-bold text-foreground mb-6 font-serif">Send a Message</h3>

            {isSubmitted && (
              <div className="mb-6 p-4 rounded-xl bg-green-500/10 border border-green-500/20 flex items-center gap-3">
                <CheckCircle2 className="text-green-500 shrink-0" size={20} />
                <p className="text-green-500 text-sm font-medium">Message sent successfully! I'll get back to you soon.</p>
              </div>
            )}

            <form
              name="contact"
              method="POST"
              data-netlify="true"
              netlify-honeypot="bot-field"
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              {/* Netlify form detection */}
              <input type="hidden" name="form-name" value="contact" />

              {/* Honeypot field for spam protection */}
              <div className="hidden">
                <label>
                  Don't fill this out if you're human: <input name="bot-field" />
                </label>
              </div>

              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground/80 mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 rounded-xl bg-background/50 border border-white/10 text-foreground placeholder:text-foreground/30 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                  placeholder="Your name"
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground/80 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 rounded-xl bg-background/50 border border-white/10 text-foreground placeholder:text-foreground/30 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                  placeholder="your.email@example.com"
                />
              </div>

              {/* Subject */}
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-foreground/80 mb-2">
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  className="w-full px-4 py-3 rounded-xl bg-background/50 border border-white/10 text-foreground placeholder:text-foreground/30 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                  placeholder="Research collaboration, etc."
                />
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground/80 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-xl bg-background/50 border border-white/10 text-foreground placeholder:text-foreground/30 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none"
                  placeholder="Tell me about your inquiry..."
                />
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full btn-primary text-primary-foreground rounded-xl py-6 text-base font-semibold"
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2 justify-center">
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Sending...
                  </span>
                ) : (
                  <span className="flex items-center gap-2 justify-center">
                    <Send size={18} />
                    Send Message
                  </span>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
