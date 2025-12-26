import { useEffect, useCallback } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import ProductVideo from './components/ProductVideo';
import Problem from './components/Problem';
import Platform from './components/Platform';
import Features from './components/Features';
import CaseStudies from './components/CaseStudies';
import Testimonials from './components/Testimonials';
import HowItWorks from './components/HowItWorks';
import Contact from './components/Contact';
import Footer from './components/Footer';
import SEOSchema from './components/SEOSchema';

function App() {
  const handleScroll = useCallback(() => {
    const parallaxBg = document.querySelector('.parallax-bg');
    if (parallaxBg) {
      const scrolled = window.pageYOffset;
      (parallaxBg as HTMLElement).style.transform = `translateY(${scrolled * 0.5}px)`;
    }
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 transition-colors duration-300">
      <SEOSchema />
      <Navigation />
      <main>
        <Hero />
        <ProductVideo />
        <Problem />
        <Platform />
        <Features />
        <CaseStudies />
        <Testimonials />
        <HowItWorks />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
