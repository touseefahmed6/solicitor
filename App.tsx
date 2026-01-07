
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Expertise from './components/Expertise';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    const handleMouseMove = (e: MouseEvent) => {
      document.documentElement.style.setProperty('--mouse-x', `${e.clientX}px`);
      document.documentElement.style.setProperty('--mouse-y', `${e.clientY}px`);
    };

    // Intersection Observer for scroll reveal animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach(el => observer.observe(el));

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
      revealElements.forEach(el => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#0d0d0d] text-white selection:bg-[#c5a059] selection:text-black relative">
      {/* Interactive Background - Spotlight Discovery Grid */}
      <div className="interactive-grid-container">
        <div className="ambient-mouse-glow"></div>
        <div className="grid-revealer"></div>
      </div>

      <div className="relative z-10">
        <Header isScrolled={isScrolled} />
        
        <main>
          <section id="home">
            <Hero />
          </section>
          
          <section id="about" className="reveal">
            <Stats />
            <Expertise />
          </section>
          
          <section id="services" className="reveal">
            <Services />
          </section>
          
          <section id="contact" className="reveal">
            <Contact />
          </section>
        </main>

        <Footer />
      </div>
    </div>
  );
};

export default App;
