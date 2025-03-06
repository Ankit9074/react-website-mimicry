
import React, { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.1,
      rootMargin: '-50px 0px'
    });

    const elements = heroRef.current?.querySelectorAll('.reveal-on-scroll');
    elements?.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      id="home" 
      ref={heroRef}
      className="relative min-h-screen flex items-center pt-16 overflow-hidden"
      style={{
        backgroundImage: "linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)), url('/images/hero-bg.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70"></div>
      
      <div className="container-custom relative z-10 py-20">
        <div className="max-w-3xl">
          <span className="inline-block px-3 py-1 text-xs font-medium tracking-wider uppercase rounded-full bg-white/10 text-white backdrop-blur-sm mb-6 reveal-on-scroll">
            Premium Construction & Development
          </span>
          
          <h1 className="text-white mb-6 reveal-on-scroll" style={{ animationDelay: '100ms' }}>
            Building Dreams,<br />Crafting Excellence
          </h1>
          
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl reveal-on-scroll" style={{ animationDelay: '200ms' }}>
            Transforming visions into reality with precision engineering and timeless design for over 15 years.
          </p>
          
          <div className="flex flex-wrap gap-4 reveal-on-scroll" style={{ animationDelay: '300ms' }}>
            <a 
              href="#services" 
              className="button-animated group inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-white bg-primary hover:bg-primary/90 transition-all duration-300 rounded-md"
            >
              Explore Our Services
              <ArrowRight size={16} className="ml-1 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            
            <a 
              href="#contact" 
              className="button-animated group inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-white bg-transparent border border-white/30 hover:bg-white/10 transition-all duration-300 rounded-md"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a 
          href="#about" 
          className="flex flex-col items-center text-white/80 hover:text-white transition-colors"
        >
          <span className="text-xs uppercase tracking-wider mb-2">Scroll</span>
          <svg 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            className="animate-bounce"
          >
            <path d="M12 5V19M12 19L5 12M12 19L19 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Hero;
