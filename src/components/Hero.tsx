import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Download, Code, Database, BarChart3, Brain, ArrowDown, Cloud, Code2Icon, CpuIcon, TrendingUpIcon, GitBranchIcon } from 'lucide-react';
import { fadeInUp, staggerContainer, bounceIn } from '../utils/animations';

const roles = [
  "Software Engineer",
  "Full-Stack Developer", 
  "Application Developer"
];

const techStack = [
  { name: "JavaScript", icon: Code, color: "from-yellow-400/80 to-orange-500/80" },
  { name: "React", icon: Brain, color: "from-cyan-400/80 to-blue-500/80" },
  { name: "Node.js", icon: Code2Icon, color: "from-green-400/80 to-emerald-500/80" },
   { name: "TypeScript", icon: Code, color: "from-blue-400/80 to-purple-500/80" },
  { name: "MongoDB", icon: Database, color: "from-green-500/80 to-teal-600/80" },
  { name: "PostgreSQL", icon: Database, color: "from-indigo-400/80 to-indigo-600/80" },
  { name: "Git & GitHub", icon: GitBranchIcon, color: "from-gray-500/80 to-black/80" },
  { name: "Docker", icon: Cloud, color: "from-blue-500/80 to-sky-600/80" },
  { name: "CI/CD", icon: TrendingUpIcon, color: "from-violet-400/80 to-fuchsia-500/80" },
  { name: "Agile & Scrum", icon: CpuIcon, color: "from-pink-400/80 to-rose-500/80" }
];


export const Hero: React.FC = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    const role = roles[currentRole];
    let timeout: NodeJS.Timeout;

    if (isTyping) {
      if (displayText.length < role.length) {
        timeout = setTimeout(() => {
          setDisplayText(role.slice(0, displayText.length + 1));
        }, 100);
      } else {
        timeout = setTimeout(() => {
          setIsTyping(false);
        }, 2000);
      }
    } else {
      if (displayText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayText(displayText.slice(0, -1));
        }, 50);
      } else {
        setCurrentRole((prev) => (prev + 1) % roles.length);
        setIsTyping(true);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayText, isTyping, currentRole]);

  const scrollToProjects = () => {
    const projectsSection = document.querySelector('#projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/20">
      {/* Background shapes */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-br from-blue-200/40 to-purple-200/40 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-32 right-20 w-80 h-80 bg-gradient-to-br from-pink-200/30 to-orange-200/30 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/4 w-48 h-48 bg-gradient-to-br from-emerald-200/40 to-teal-200/40 rounded-full blur-2xl animate-float" style={{ animationDelay: '4s' }}></div>
        <div className="absolute top-1/4 right-1/4 w-32 h-96 bg-gradient-to-b from-white/20 to-transparent backdrop-blur-sm rounded-lg transform rotate-12 animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-1/4 left-1/3 w-24 h-64 bg-gradient-to-b from-white/15 to-transparent backdrop-blur-sm rounded-lg transform -rotate-6 animate-float" style={{ animationDelay: '3s' }}></div>
      </div>

      <div className="absolute inset-0 opacity-[0.02] bg-[radial-gradient(circle_at_1px_1px,_rgba(0,0,0,0.15)_1px,_transparent_0)] bg-[length:40px_40px]"></div>

      <motion.div
       className="text-center z-10 max-w-5xl mx-auto px-8"
       variants={staggerContainer}
       initial="hidden"
       animate="visible"
       >
      <motion.p
      variants={fadeInUp}
       className="text-sm tracking-wide text-slate-500 mb-8 font-light"
      >
       <code className="text-xs font-mono italic font-light text-slate-600">
       const engineer = new ProblemSolver("full-stack", &#123; coffee: true &#125;);
      </code>
      </motion.p>

  


        <motion.h1 variants={fadeInUp} className="text-6xl md:text-8xl lg:text-9xl font-extralight mb-6 text-slate-800 leading-[0.85] tracking-tight" style={{ fontFamily: "'Inter', sans-serif" }}>
          <span className="block">Sunil Kumar</span>
          <span className="block italic font-light bg-gradient-to-r from-slate-700 via-slate-900 to-slate-700 bg-clip-text text-transparent">Mutluri</span>
        </motion.h1>

        <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-light mb-8 text-slate-600 leading-tight">
          Creating the <span className="italic text-slate-800">unexpected</span>
        </motion.h2>

        <motion.div variants={fadeInUp} className="text-2xl md:text-3xl text-slate-600 mb-6 h-16 flex items-center justify-center font-light">
          <span className="font-mono">{displayText}<span className="animate-pulse text-blue-500">|</span></span>
        </motion.div>

        <motion.p variants={fadeInUp} className="text-lg md:text-xl text-slate-500 mb-16 max-w-2xl mx-auto leading-relaxed font-light">
          Shipping features, squashing bugs, and occasionally googling how to center a div.
        </motion.p>

        <motion.div variants={staggerContainer} className="flex flex-wrap justify-center gap-4 mb-16 max-w-4xl mx-auto">
          {techStack.map((tech, index) => (
            <motion.div
              key={tech.name}
              variants={bounceIn}
              whileHover={{ scale: 1.1, y: -5, transition: { duration: 0.2 } }}
              className={`flex items-center gap-3 px-4 py-2 rounded-full bg-gradient-to-r ${tech.color} backdrop-blur-sm text-white font-medium shadow-lg border border-white/20 animate-float cursor-pointer text-sm`}
              style={{ animationDelay: `${index * 0.3}s` }}
            >
              <tech.icon size={16} />
              <span>{tech.name}</span>
            </motion.div>
          ))}
        </motion.div>

        <motion.div variants={fadeInUp} className="flex justify-center mb-16">
          <motion.button
            onClick={scrollToProjects}
            whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
            whileTap={{ scale: 0.95 }}
            className="group relative px-8 py-4 bg-white/80 backdrop-blur-sm text-slate-800 font-medium rounded-full border border-slate-200/50 hover:border-slate-300/50 transition-all duration-300 shadow-lg"
          >
            <span className="relative z-10 flex items-center gap-2">
              View my work
              <ArrowDown size={16} className="group-hover:translate-y-1 transition-transform duration-300" />
            </span>
          </motion.button>
        </motion.div>

        <motion.div variants={fadeInUp} className="flex gap-6 justify-center">
          <motion.a href="https://github.com/sunil-mutluri" target="_blank" rel="noopener noreferrer"
            whileHover={{ scale: 1.1, y: -2 }} whileTap={{ scale: 0.9 }}
            className="p-3 bg-white/60 backdrop-blur-sm border border-slate-200/50 rounded-full hover:border-slate-300/50 transition-all duration-300 shadow-lg group"
          >
            <Github size={20} className="text-slate-600 group-hover:text-slate-800 transition-colors duration-300" />
          </motion.a>

          <motion.a href="https://www.linkedin.com/in/sunil-kumar-mutluri" target="_blank" rel="noopener noreferrer"
            whileHover={{ scale: 1.1, y: -2 }} whileTap={{ scale: 0.9 }}
            className="p-3 bg-white/60 backdrop-blur-sm border border-slate-200/50 rounded-full hover:border-slate-300/50 transition-all duration-300 shadow-lg group"
          >
            <Linkedin size={20} className="text-slate-600 group-hover:text-slate-800 transition-colors duration-300" />
          </motion.a>

          <motion.a href="https://github.com/sunil-mutluri/resume/blob/main/Sunil_Kumar_Mutluri_Resume.pdf" target="_blank" rel="noopener noreferrer"
            whileHover={{ scale: 1.1, y: -2 }} whileTap={{ scale: 0.9 }}
            className="p-3 bg-white/60 backdrop-blur-sm border border-slate-200/50 rounded-full hover:border-slate-300/50 transition-all duration-300 shadow-lg group"
          >
            <Download size={20} className="text-slate-600 group-hover:text-slate-800 transition-colors duration-300" />
          </motion.a>
        </motion.div>
      </motion.div>

      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border border-slate-300 rounded-full flex justify-center bg-white/30 backdrop-blur-sm">
          <div className="w-1 h-3 bg-slate-400 rounded-full mt-2 animate-bounce"></div>
        </div>
      </motion.div>
    </section>
  );
};
