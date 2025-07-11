import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowUp } from 'lucide-react';

const humorMessages = [
  "Still scrolling? I like your dedication! 🔍",
  "Wow, you're really thorough! 📊", 
  "Almost there! The best part is coming... 🚀",
  "You survived my portfolio! Here's a virtual cookie 🍪",
  "Thanks for sticking around! You're awesome! ✨"
];

export const ScrollIndicator: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showScrollToTop, setShowScrollToTop] = useState(false);
  const [currentMessage, setCurrentMessage] = useState(0);
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
      setShowScrollToTop(window.scrollY > 500);

      // Show humor messages at different scroll points
      const messageIndex = Math.floor(progress / 20);
      if (messageIndex !== currentMessage && messageIndex < humorMessages.length) {
        setCurrentMessage(messageIndex);
        setShowMessage(true);
        setTimeout(() => setShowMessage(false), 3000);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [currentMessage]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-slate-200/50 z-50">
        <motion.div
          className="h-full bg-gradient-to-r from-blue-500 to-purple-500"
          style={{ width: `${scrollProgress}%` }}
          transition={{ duration: 0.1 }}
        />
      </div>

      {/* Humor Messages */}
      <motion.div
        initial={{ opacity: 0, x: 300 }}
        animate={{ 
          opacity: showMessage ? 1 : 0,
          x: showMessage ? 0 : 300
        }}
        className="fixed bottom-24 right-8 z-40 max-w-xs"
      >
        <div className="bg-slate-800 text-white px-6 py-4 rounded-2xl shadow-xl font-medium text-sm">
          {humorMessages[currentMessage]}
          <div className="absolute -left-2 top-1/2 transform -translate-y-1/2 w-0 h-0 border-t-8 border-b-8 border-r-8 border-transparent border-r-slate-800"></div>
        </div>
      </motion.div>

      {/* Scroll to Top Button */}
      <motion.button
        initial={{ opacity: 0, scale: 0 }}
        animate={{ 
          opacity: showScrollToTop ? 1 : 0,
          scale: showScrollToTop ? 1 : 0
        }}
        whileHover={{ scale: 1.1, y: -2 }}
        whileTap={{ scale: 0.9 }}
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 z-40 p-4 bg-white/80 backdrop-blur-sm text-slate-700 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 border border-white/20"
      >
        <ArrowUp size={24} />
      </motion.button>
    </>
  );
};