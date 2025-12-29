import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import { cn } from '@/lib/utils';

const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 400) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);

        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <button
            onClick={scrollToTop}
            className={cn(
                'fixed bottom-8 right-8 z-50 p-4 rounded-full glass-card hover:bg-foreground/10 transition-all duration-500 hover:scale-110 group border-2 border-transparent hover:border-primary/30 shadow-2xl',
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
            )}
            aria-label="Scroll to top"
        >
            <ArrowUp className="text-primary group-hover:text-foreground transition-colors" size={24} />
        </button>
    );
};

export default ScrollToTop;
