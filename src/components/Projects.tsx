
import React, { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

const projectCategories = ["All", "Residential", "Commercial", "Industrial", "Interior"];

const projectItems = [
  {
    image: "/images/projects/project1.jpg",
    title: "Luxury Villa Complex",
    category: "Residential",
    description: "Modern luxury villas with premium amenities and sustainable design."
  },
  {
    image: "/images/projects/project2.jpg",
    title: "Corporate Office Tower",
    category: "Commercial",
    description: "Contemporary office space with state-of-the-art facilities and striking architecture."
  },
  {
    image: "/images/projects/project3.jpg",
    title: "Manufacturing Plant",
    category: "Industrial",
    description: "Efficient industrial facility designed for optimal production workflow."
  },
  {
    image: "/images/projects/project4.jpg",
    title: "Penthouse Redesign",
    category: "Interior",
    description: "Complete interior transformation of a high-end urban penthouse."
  },
  {
    image: "/images/projects/project5.jpg",
    title: "Sustainable Apartments",
    category: "Residential",
    description: "Eco-friendly residential complex with energy-efficient features."
  },
  {
    image: "/images/projects/project6.jpg",
    title: "Shopping Mall",
    category: "Commercial",
    description: "Expansive retail space with modern design and excellent accessibility."
  }
];

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [filteredProjects, setFilteredProjects] = useState(projectItems);
  const sectionRef = useRef<HTMLElement>(null);
  
  useEffect(() => {
    if (activeCategory === "All") {
      setFilteredProjects(projectItems);
    } else {
      setFilteredProjects(projectItems.filter(item => item.category === activeCategory));
    }
  }, [activeCategory]);
  
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
    <section id="projects" ref={sectionRef} className="section-padding bg-secondary/50">
      <div className="container-custom">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-3 py-1 text-xs font-medium tracking-wider uppercase rounded-full bg-primary/10 text-primary/80 mb-4 reveal-on-scroll">
            Featured Projects
          </span>
          
          <h2 className="mb-6 reveal-on-scroll" style={{ animationDelay: '100ms' }}>
            Our Portfolio of Excellence
          </h2>
          
          <p className="text-muted-foreground reveal-on-scroll" style={{ animationDelay: '200ms' }}>
            Explore our diverse range of projects that showcase our expertise, innovation, and commitment to quality in construction and development.
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-2 mb-12 reveal-on-scroll" style={{ animationDelay: '300ms' }}>
          {projectCategories.map((category, index) => (
            <button
              key={index}
              className={cn(
                "px-4 py-2 text-sm font-medium rounded-full transition-all duration-300",
                activeCategory === category 
                  ? "bg-primary text-white" 
                  : "bg-white text-foreground/70 hover:bg-primary/5"
              )}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div 
              key={index}
              className="group relative overflow-hidden rounded-lg shadow-md reveal-on-scroll"
              style={{ animationDelay: `${400 + index * 100}ms` }}
            >
              <div className="aspect-w-4 aspect-h-3 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <span className="text-xs font-medium text-white/80 mb-2">
                  {project.category}
                </span>
                <h3 className="text-xl font-medium text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-sm text-white/80">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center reveal-on-scroll" style={{ animationDelay: '900ms' }}>
          <a 
            href="#contact" 
            className="button-animated inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-primary bg-transparent border border-primary/30 hover:bg-primary/5 transition-all duration-300 rounded-md"
          >
            View All Projects
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

export default Projects;
