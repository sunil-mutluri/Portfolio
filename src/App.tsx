import React, { useEffect } from 'react';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { TrophyShelf } from './components/TrophyShelf';
import { Learning } from './components/Learning';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ScrollIndicator } from './components/ScrollIndicator';

function App() {
  useEffect(() => {
    // Smooth scrolling for the entire page
    document.documentElement.style.scrollBehavior = 'smooth';
    
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <div className="bg-gradient-to-br from-slate-50 via-blue-50/20 to-purple-50/10 text-slate-800 overflow-x-hidden">
      <ScrollIndicator />
      <Hero />
      <About />
      <Projects />
      <TrophyShelf />
      <Learning />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;