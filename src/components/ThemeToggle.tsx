// src/components/ThemeToggle.tsx
import React, { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react';

const ThemeToggle: React.FC = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const root = window.document.documentElement;
    if (isDark) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  useEffect(() => {
    const stored = localStorage.getItem('theme');
    if (stored === 'dark') setIsDark(true);
  }, []);

  return (
    <button
      onClick={() => setIsDark(!isDark)}
      className="fixed top-6 right-6 z-50 p-2 rounded-full bg-white/70 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 shadow-md hover:scale-105 transition"
    >
      {isDark ? <Sun size={20} className="text-yellow-400" /> : <Moon size={20} className="text-slate-800" />}
    </button>
  );
};

export default ThemeToggle;
