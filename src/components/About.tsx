
import React, { useEffect, useRef } from 'react';

const About = () => {
  const sectionRef = useRef<HTMLElement>(null);
  
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

    const elements = sectionRef.current?.querySelectorAll('.reveal-on-scroll');
    elements?.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const stats = [
    { value: '15+', label: 'Years of Experience' },
    { value: '200+', label: 'Projects Completed' },
    { value: '100%', label: 'Client Satisfaction' },
    { value: '50+', label: 'Expert Team Members' },
  ];

  return (
    <section id="about" ref={sectionRef} className="section-padding bg-secondary/30">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-32 h-32 bg-primary/5 rounded-lg -z-10"></div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary/5 rounded-lg -z-10"></div>
            
            <div className="relative overflow-hidden rounded-lg shadow-lg reveal-on-scroll">
              <img 
                src="/images/about.jpg" 
                alt="Building construction site" 
                className="w-full h-auto object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
          </div>
          
          <div>
            <span className="inline-block px-3 py-1 text-xs font-medium tracking-wider uppercase rounded-full bg-primary/10 text-primary/80 mb-4 reveal-on-scroll">
              About Us
            </span>
            
            <h2 className="mb-6 reveal-on-scroll" style={{ animationDelay: '100ms' }}>
              Building Excellence Since 2008
            </h2>
            
            <p className="text-muted-foreground mb-6 reveal-on-scroll" style={{ animationDelay: '200ms' }}>
              RK Builder has established itself as a premier construction and real estate development company, known for delivering exceptional quality and innovative solutions. Our unwavering commitment to excellence and sustainable practices has earned us the trust of our clients and industry recognition.
            </p>
            
            <p className="text-muted-foreground mb-8 reveal-on-scroll" style={{ animationDelay: '300ms' }}>
              Our team of highly skilled professionals brings a wealth of expertise to every project, ensuring that we exceed expectations while adhering to strict timelines and budgets. We take pride in our attention to detail and our ability to transform complex challenges into elegant solutions.
            </p>
            
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-8 reveal-on-scroll" style={{ animationDelay: '400ms' }}>
              {stats.map((stat, index) => (
                <div key={index} className="text-center p-4 bg-white rounded-lg shadow-sm">
                  <div className="text-3xl font-bold text-primary mb-1">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
            
            <a 
              href="#services" 
              className="inline-flex items-center text-primary hover:text-primary/80 font-medium reveal-on-scroll"
              style={{ animationDelay: '500ms' }}
            >
              Discover Our Services
              <svg 
                className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
