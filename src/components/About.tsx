import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Code, TrendingUp, Zap, Coffee, Database, Globe, Server, BarChart3, GitBranch, Cloud, Cpu, PieChart, Activity } from 'lucide-react';
import { fadeInLeft, fadeInRight, staggerContainer, bounceIn } from '../utils/animations';
<<<<<<< HEAD
import ProfileImage from '../assets/AdobeExpress-file.png';


const dataToolsSkills = [
   { name: "Java", icon: Code, level: 93, color: "from-red-600 to-orange-600" },
   { name: "React", icon: BarChart3, level: 90, color: "from-sky-500 to-indigo-500" },
  { name: "TypeScript", icon: Code, level: 95, color: "from-yellow-500 to-orange-500" },
  { name: "Node.js", icon: Activity, level: 88, color: "from-green-500 to-emerald-500" },
  { name: "SQL", icon: Database, level: 92, color: "from-blue-600 to-cyan-600" },
  { name: "Object-Oriented Design", icon: Brain, level: 91, color: "from-purple-500 to-pink-600" },
=======

const dataToolsSkills = [
  { name: "SQL", icon: Database, level: 92, color: "from-blue-600 to-cyan-600" },
  { name: "Power BI", icon: BarChart3, level: 88, color: "from-emerald-500 to-teal-600" },
  { name: "Python", icon: Code, level: 95, color: "from-yellow-500 to-orange-600" },
  { name: "Tableau", icon: PieChart, level: 85, color: "from-blue-500 to-indigo-600" },
  { name: "Machine Learning", icon: Brain, level: 90, color: "from-purple-500 to-pink-600" },
  { name: "Data Analysis", icon: Activity, level: 93, color: "from-green-500 to-emerald-600" },
>>>>>>> 0255919 (Initial commit with Vite + GitHub Pages config)
];

const cloudDevOpsSkills = [
  { name: "AWS", icon: Cloud, level: 85, color: "from-orange-500 to-red-600" },
  { name: "Git", icon: GitBranch, level: 90, color: "from-gray-600 to-gray-800" },
  { name: "ETL Pipelines", icon: TrendingUp, level: 87, color: "from-purple-500 to-pink-600" },
  { name: "Process Optimization", icon: Zap, level: 88, color: "from-amber-500 to-orange-600" },
];


export const About: React.FC = () => {
  return (
    <section className="py-32 px-8 max-w-7xl mx-auto relative">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-blue-100/40 to-purple-100/40 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-br from-emerald-100/40 to-teal-100/40 rounded-full blur-3xl"></div>
      </div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}
        className="grid lg:grid-cols-2 gap-20 items-center"
      >
        {/* Profile Section with Real Photo */}
        <motion.div 
          variants={fadeInLeft}
          className="relative group"
        >
          <div className="relative w-96 h-96 mx-auto lg:mx-0 rounded-3xl overflow-hidden bg-gradient-to-br from-white/60 to-slate-100/60 backdrop-blur-sm border border-white/20 shadow-2xl">
<<<<<<< HEAD
            <img
            src={ProfileImage}
            alt="Sunil Kumar Mutluri"
            className="w-full h-full object-cover object-center"
            />

=======
            <img 
              src="/src/assets/Adobe Express - file.png"
              alt="Sunil Kumar Mutluri"
              className="w-full h-full object-cover object-center"
            />
>>>>>>> 0255919 (Initial commit with Vite + GitHub Pages config)
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
          </div>
          
          {/* Floating Elements */}
          <motion.div 
            animate={{ 
              y: [0, -10, 0],
              rotate: [0, 5, 0]
            }}
            transition={{ 
              duration: 4, 
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute -top-6 -right-6 w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg"
          >
            <Coffee className="text-white" size={24} />
          </motion.div>
          
          <motion.div 
            animate={{ 
              y: [0, 10, 0],
              rotate: [0, -5, 0]
            }}
            transition={{ 
              duration: 3, 
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
            className="absolute -bottom-6 -left-6 w-14 h-14 bg-gradient-to-br from-purple-400 to-purple-600 rounded-2xl shadow-lg"
          ></motion.div>
        </motion.div>

        {/* Bio Content */}
        <motion.div variants={fadeInRight} className="space-y-10">
          <div>
            <motion.p 
              variants={fadeInRight}
              className="text-sm uppercase tracking-[0.3em] text-slate-500 mb-4 font-light"
            >
              ABOUT ME
            </motion.p>
            <h2 className="text-5xl md:text-6xl font-light mb-8 text-slate-800 leading-tight">
              Engineer turned
              <br />
<<<<<<< HEAD
              <span className="italic">Semi-Colon Slayer</span>
            </h2>
            <p className="text-xl text-slate-600 leading-relaxed mb-8 font-light">
              Obsessed with systems, syntax, and spaghetti.
            </p>
            <p className="text-slate-500 leading-relaxed font-light mb-6">
              I turn ideas into deploys and TODOs into shipped features.
              From late-night merges to light-speed APIs,
              I build stuff that works — and looks good doing it.
=======
              <span className="italic">data whisperer</span>
            </h2>
            <p className="text-xl text-slate-600 leading-relaxed mb-8 font-light">
              Obsessed with prediction, process, and pasta.
            </p>
            <p className="text-slate-500 leading-relaxed font-light mb-6">
              I transform chaos into clarity through data-driven insights and predictive models. 
              From building ML pipelines to crafting interactive dashboards and full-stack applications,
              I bridge the gap between data science and modern web development.
>>>>>>> 0255919 (Initial commit with Vite + GitHub Pages config)
            </p>
            
            {/* Links */}
            <div className="flex gap-4 flex-wrap">
              <motion.a
                href="https://github.com/sunil-mutluri/resume/blob/main/Sunil_Kumar_Mutluri_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                className="inline-flex items-center gap-2 px-6 py-3 bg-slate-800 text-white rounded-full hover:bg-slate-700 transition-colors font-medium text-sm shadow-lg"
              >
                📄 Resume
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/sunil-kumar-mutluri"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors font-medium text-sm shadow-lg"
              >
                💼 LinkedIn
              </motion.a>
              <motion.a
                href="https://github.com/sunil-mutluri"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                className="inline-flex items-center gap-2 px-6 py-3 bg-gray-800 text-white rounded-full hover:bg-gray-700 transition-colors font-medium text-sm shadow-lg"
              >
                🐙 GitHub
              </motion.a>
            </div>
          </div>

          {/* Technical Expertise - Reorganized */}
          <div className="space-y-8">
            <h3 className="text-2xl font-light text-slate-700">Technical Expertise</h3>
            
            {/* Data Tools & Analytics - Now includes Tableau and Data Analysis */}
            <motion.div variants={bounceIn} className="space-y-4">
              <h4 className="text-lg font-medium text-slate-600 border-b border-slate-200 pb-2">
<<<<<<< HEAD
                Languages & Frameworks
=======
                Data Tools & Analytics
>>>>>>> 0255919 (Initial commit with Vite + GitHub Pages config)
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {dataToolsSkills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    variants={bounceIn}
                    whileHover={{ x: 5 }}
                    className="group"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-3">
                        <div className={`p-2 bg-gradient-to-r ${skill.color} rounded-lg shadow-md`}>
                          <skill.icon size={16} className="text-white" />
                        </div>
                        <span className="font-medium text-slate-700 text-sm">{skill.name}</span>
                      </div>
                      <span className="text-slate-500 font-light text-xs">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-slate-200 rounded-full h-1.5 overflow-hidden">
                      <motion.div
                        className={`h-full bg-gradient-to-r ${skill.color} rounded-full`}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1.5, delay: index * 0.1, ease: "easeOut" }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Cloud & DevOps */}
            <motion.div variants={bounceIn} className="space-y-4">
              <h4 className="text-lg font-medium text-slate-600 border-b border-slate-200 pb-2">
                Cloud & DevOps
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {cloudDevOpsSkills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    variants={bounceIn}
                    whileHover={{ x: 5 }}
                    className="group"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-3">
                        <div className={`p-2 bg-gradient-to-r ${skill.color} rounded-lg shadow-md`}>
                          <skill.icon size={16} className="text-white" />
                        </div>
                        <span className="font-medium text-slate-700 text-sm">{skill.name}</span>
                      </div>
                      <span className="text-slate-500 font-light text-xs">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-slate-200 rounded-full h-1.5 overflow-hidden">
                      <motion.div
                        className={`h-full bg-gradient-to-r ${skill.color} rounded-full`}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1.5, delay: index * 0.1, ease: "easeOut" }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

<<<<<<< HEAD
           
=======
            {/* Web Development Icons */}
            <motion.div variants={bounceIn} className="space-y-4">
              <h4 className="text-lg font-medium text-slate-600 border-b border-slate-200 pb-2">
                Web Development
              </h4>
              <div className="flex flex-wrap gap-4">
                {webDevSkills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    variants={bounceIn}
                    whileHover={{ scale: 1.1, y: -5 }}
                    className={`flex items-center gap-2 px-4 py-2 bg-gradient-to-r ${skill.color} rounded-full text-white font-medium shadow-lg text-sm`}
                  >
                    <skill.icon size={16} />
                    <span>{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
>>>>>>> 0255919 (Initial commit with Vite + GitHub Pages config)
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
<<<<<<< HEAD
};
=======
};
>>>>>>> 0255919 (Initial commit with Vite + GitHub Pages config)
