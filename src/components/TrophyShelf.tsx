import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Trophy, Medal, Award } from 'lucide-react';
import { fadeInUp, staggerContainer } from '../utils/animations';

const achievements = [
  {
    title: "Create agentic AI solutions with Azure AI Foundry",
    image: "https://drive.google.com/file/d/1XvOOTChUADOonf6ODGJ2ZZLjc3myLm7i/view?usp=sharing",
    emoji: "🏆",
    reaction: "Challenge!",
    color: "from-orange-400 to-red-500"
  },
  {
    title: "Oracle Fusion AI Agent Foundations",
    image: "https://drive.google.com/file/d/1eyq0x20WJGjIAmekrcHOwKarIwDk3Q-J/view?usp=sharing",
    emoji: "⚡",
    reaction: "Certified!",
    color: "from-blue-400 to-indigo-500"
  },
  {
    title: "Google Machine Learning & AI Skill Badge",
    image: "https://partner.cloudskillsboost.google/public_profiles/f9729671-fef6-4638-8064-593344ad558a/badges/16037466",
    emoji: "📊",
    reaction: "AI!",
    color: "from-green-400 to-emerald-500"
  },
  {
    title: "Oracle Redwood Applications Viusal Builder",
    image: "https://drive.google.com/file/d/13gb26JEuv2plOIIuRuB9p4pcZoWOIwhN/view?usp=sharing",
    emoji: "👨‍💻",
    reaction: "Design Master!",
    color: "from-yellow-400 to-orange-500"
  },
  {
    title: "Introduction to Data Engineering on Google Cloud",
    image: "https://partner.cloudskillsboost.google/public_profiles/f9729671-fef6-4638-8064-593344ad558a/badges/14487009",
    emoji: "🥇",
    reaction: "Data Engineer!",
    color: "from-purple-400 to-pink-500"
  },
  {
    title: "Oracle HCMEssentials" ,
    image: "https://drive.google.com/file/d/1qezTyI5vZiisj-SCXY-FQ6eOdWJFaVDn/view?usp=sharing",
    emoji: "📈",
    reaction: "Viz Wizard!",
    color: "from-teal-400 to-cyan-500"
  }
];

export const TrophyShelf: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="py-32 px-8 max-w-7xl mx-auto relative">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 right-20 w-80 h-80 bg-gradient-to-br from-yellow-100/40 to-orange-100/40 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-br from-purple-100/40 to-pink-100/40 rounded-full blur-3xl"></div>
      </div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerContainer}
      >
        <motion.div variants={fadeInUp} className="text-center mb-20">
          <p className="text-sm uppercase tracking-[0.3em] text-slate-500 mb-4 font-light">
            ACHIEVEMENTS
          </p>
          <h2 className="text-5xl md:text-6xl font-light mb-6 text-slate-800 leading-tight">
            Badge flex
            <br />
            <span className="italic">zone</span>
          </h2>
          <p className="text-xl text-slate-500 font-light">
            Collecting digital trophies one certification at a time
          </p>
        </motion.div>

        {/* Achievement Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.title}
              variants={fadeInUp}
              whileHover={{ 
                scale: 1.05,
                y: -10,
                transition: { duration: 0.3 }
              }}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
              className="relative group cursor-pointer"
            >
              <div className="aspect-square relative overflow-hidden rounded-2xl bg-white/60 backdrop-blur-sm border border-white/20 shadow-lg hover:shadow-xl transition-all duration-500">
                <img 
                  src={achievement.image}
                  alt={achievement.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${achievement.color} opacity-20 group-hover:opacity-40 transition-opacity duration-500`}></div>
                
                {/* Emoji Badge */}
                <div className="absolute top-3 right-3 w-10 h-10 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center text-lg shadow-lg">
                  {achievement.emoji}
                </div>

                {/* Title */}
                <div className="absolute bottom-3 left-3 right-3">
                  <p className="text-xs font-medium text-white leading-tight drop-shadow-lg">
                    {achievement.title}
                  </p>
                </div>
              </div>

              {/* Hover Reaction */}
              <AnimatePresence>
                {hoveredIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.8 }}
                    animate={{ opacity: 1, y: -15, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.8 }}
                    className="absolute -top-16 left-1/2 transform -translate-x-1/2 z-10"
                  >
                    <div className="bg-slate-800 text-white px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap shadow-xl">
                      🔥 {achievement.reaction}
                    </div>
                    <div className="w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-slate-800 mx-auto"></div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Horizontal Scroll Carousel for Mobile */}
        <div className="md:hidden mt-16">
          <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
            {achievements.map((achievement, index) => (
              <div key={index} className="flex-shrink-0 w-32">
                <div className="aspect-square relative overflow-hidden rounded-xl bg-white/60 backdrop-blur-sm border border-white/20 shadow-lg">
                  <img 
                    src={achievement.image}
                    alt={achievement.title}
                    className="w-full h-full object-cover"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${achievement.color} opacity-20`}></div>
                  <div className="absolute top-2 right-2 text-lg">
                    {achievement.emoji}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};