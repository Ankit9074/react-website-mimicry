
import React, { useEffect } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  useEffect(() => {
    const handleScroll = () => {
      const revealElements = document.querySelectorAll('.reveal-on-scroll:not(.revealed)');
      revealElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementHeight = element.getBoundingClientRect().height;
        const windowHeight = window.innerHeight;
        
        if (elementTop < windowHeight - elementHeight / 4) {
          element.classList.add('revealed');
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    // Initial check for elements in view on page load
    setTimeout(handleScroll, 100);
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="overflow-hidden">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
