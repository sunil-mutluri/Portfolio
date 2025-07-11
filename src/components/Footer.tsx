import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Code, Coffee } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="py-16 px-8 border-t border-slate-200/50 bg-gradient-to-t from-slate-50/50 to-transparent">
      <div className="max-w-7xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <div className="flex items-center justify-center gap-3 text-slate-500">
            <span className="font-light">Made with</span>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Code className="text-blue-500" size={20} />
            </motion.div>
            <span className="font-light">&</span>
            <motion.div
              animate={{ rotate: [0, 15, -15, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <Coffee className="text-amber-500" size={20} />
            </motion.div>
            <span className="font-light">by Sunil Kumar Mutluri</span>
          </div>
          
          <p className="text-sm text-slate-400 font-light">
            © 2024 Sunil Kumar Mutluri. All rights reserved.
          </p>
          
          <div className="flex items-center justify-center gap-2 text-xs text-slate-400">
            <span className="font-light">Powered by curiosity and caffeine</span>
            <motion.span
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              ☕
            </motion.span>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};