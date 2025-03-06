
import React, { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

const serviceItems = [
  {
    icon: "building.svg",
    title: "Residential Construction",
    description: "Building high-quality homes with attention to detail, from luxury villas to modern apartments."
  },
  {
    icon: "office.svg",
    title: "Commercial Projects",
    description: "Developing state-of-the-art commercial spaces that combine functionality with striking design."
  },
  {
    icon: "blueprint.svg",
    title: "Architecture & Design",
    description: "Creating innovative architectural solutions tailored to meet your unique vision and requirements."
  },
  {
    icon: "renovation.svg",
    title: "Renovation Services",
    description: "Transforming existing structures with modern upgrades while preserving their original character."
  },
  {
    icon: "interior.svg",
    title: "Interior Finishing",
    description: "Crafting exquisite interiors with premium materials and expert craftsmanship for elegant living spaces."
  },
  {
    icon: "planning.svg",
    title: "Project Management",
    description: "Overseeing all aspects of construction with meticulous planning and efficient execution."
  }
];

const Services = () => {
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

  return (
    <section id="services" ref={sectionRef} className="section-padding">
      <div className="container-custom">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-3 py-1 text-xs font-medium tracking-wider uppercase rounded-full bg-primary/10 text-primary/80 mb-4 reveal-on-scroll">
            Our Services
          </span>
          
          <h2 className="mb-6 reveal-on-scroll" style={{ animationDelay: '100ms' }}>
            Comprehensive Construction Solutions
          </h2>
          
          <p className="text-muted-foreground reveal-on-scroll" style={{ animationDelay: '200ms' }}>
            We offer a wide range of construction and development services to meet your needs, backed by our commitment to quality, innovation, and client satisfaction.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceItems.map((service, index) => (
            <div 
              key={index}
              className={cn(
                "p-6 bg-white rounded-lg shadow-sm border border-border/30 transition-all duration-300 hover:shadow-md group reveal-on-scroll",
              )}
              style={{ animationDelay: `${300 + index * 100}ms` }}
            >
              <div className="w-14 h-14 rounded-full bg-primary/5 flex items-center justify-center mb-6 transition-colors duration-300 group-hover:bg-primary/10">
                <img 
                  src={`/images/icons/${service.icon}`} 
                  alt={service.title} 
                  className="w-6 h-6 text-primary"
                />
              </div>
              
              <h3 className="text-xl font-medium mb-3">{service.title}</h3>
              
              <p className="text-muted-foreground">{service.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center reveal-on-scroll" style={{ animationDelay: '800ms' }}>
          <a 
            href="#contact" 
            className="button-animated inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-white bg-primary hover:bg-primary/90 transition-all duration-300 rounded-md"
          >
            Discuss Your Project
            <svg 
              className="ml-1 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
