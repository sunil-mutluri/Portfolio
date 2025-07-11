import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Monitor } from 'lucide-react';
import { fadeInUp, staggerContainer } from '../utils/animations';

const learningPlatforms = [
  {
    platform: "Oracle",
    image: "https://i.postimg.cc/HxX6cGLC/oracle-learninig.png",
    title: "Oracle HCM & ERP",
    color: "from-blue-500/20 to-indigo-500/20"
  },
  {
    platform: "Microsoft",
    image: "https://i.postimg.cc/tgSs37Y3/microsoft-learning.png",
    title: "AI Agent Build",
    color: "from-purple-500/20 to-pink-500/20"
  },
  {
    platform: "Google", 
    image: "https://i.postimg.cc/DZvSsLvy/google-learning.png",
    title: "Data Engineering Track",
    color: "from-emerald-500/20 to-teal-500/20"
  },
  {
    platform: "Udemy",
    image: "https://i.postimg.cc/WbCqKdnX/udemy-learning.png",
    title: "Data Analysis and Business Analyst",
    color: "from-orange-500/20 to-red-500/20"
  },
 
  {
    platform: "Leetcode",
    image: "https://i.postimg.cc/NF1Gz0fP/leetcode.png",
    title: "Advanced SQL and Python Path",
    color: "from-cyan-500/20 to-blue-500/20"
  }
];

export const Learning: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<typeof learningPlatforms[0] | null>(null);

  return (
    <section className="py-32 px-8 max-w-7xl mx-auto relative">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-20 w-80 h-80 bg-gradient-to-br from-green-100/40 to-emerald-100/40 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-br from-blue-100/40 to-cyan-100/40 rounded-full blur-3xl" />
      </div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerContainer}
      >
        <motion.div variants={fadeInUp} className="text-center mb-20">
          <p className="text-sm uppercase tracking-[0.3em] text-slate-500 mb-4 font-light">
            CONTINUOUS LEARNING
          </p>
          <h2 className="text-5xl md:text-6xl font-light mb-6 text-slate-800 leading-tight">
            Learning
            <br />
            <span className="italic">journey</span>
          </h2>
          <p className="text-xl text-slate-500 max-w-2xl mx-auto font-light">
            Continuous learning through the best platforms and programs
          </p>
        </motion.div>

        {/* Learning Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
          {learningPlatforms.map((item, index) => (
            <motion.div
              key={item.platform}
              variants={fadeInUp}
              whileHover={{ scale: 1.05, y: -10, transition: { duration: 0.3 } }}
              onClick={() => setSelectedImage(item)}
              className="group relative aspect-square cursor-pointer overflow-hidden rounded-3xl bg-white/60 backdrop-blur-sm border border-white/20 shadow-lg hover:shadow-xl transition-all duration-500"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className={`absolute inset-0 bg-gradient-to-t ${item.color} to-transparent opacity-60`} />

              <div className="absolute top-4 left-4 px-3 py-1 bg-white/80 backdrop-blur-sm rounded-full text-xs font-medium text-slate-700 shadow-lg">
                {item.platform}
              </div>

              <div className="absolute bottom-4 left-4 right-4">
                <h3 className="text-sm font-medium text-white leading-tight drop-shadow-lg">
                  {item.title}
                </h3>
              </div>

              <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                <Monitor className="text-white" size={32} />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Lightbox Modal */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/80 backdrop-blur-sm"
              onClick={() => setSelectedImage(null)}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                className="relative max-w-4xl max-h-full"
                onClick={(e) => e.stopPropagation()}
              >
                <img
                  src={selectedImage.image}
                  alt={selectedImage.title}
                  className="w-full h-auto rounded-3xl shadow-2xl"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-slate-900/90 to-transparent p-8 rounded-b-3xl">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-2xl font-light text-white mb-2">{selectedImage.title}</h3>
                      <p className="text-slate-300 font-light">{selectedImage.platform}</p>
                    </div>
                  </div>
                </div>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setSelectedImage(null)}
                  className="absolute top-6 right-6 p-3 bg-white/80 backdrop-blur-sm rounded-full text-slate-800 hover:text-slate-600 transition-colors shadow-lg"
                >
                  <X size={24} />
                </motion.button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </section>
  );
};
