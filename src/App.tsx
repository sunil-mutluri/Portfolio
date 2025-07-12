import React, { useEffect } from 'react';
import ThemeToggle from './components/ThemeToggle'; // ✅ Already imported
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
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <div className="relative bg-gradient-to-br from-slate-50 via-blue-50/20 to-purple-50/10 text-slate-800 dark:from-gray-900 dark:to-black dark:text-slate-100 overflow-x-hidden">
      
      {/* ✅ Dark mode toggle button at top right corner */}
      <div className="fixed top-4 right-4 z-50">
        <ThemeToggle />
      </div>

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
