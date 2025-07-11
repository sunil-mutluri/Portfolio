import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { fadeInUp, staggerContainer } from '../utils/animations';

const projects = [
  {
    title: "Decentralized Heart Rate Monitoring - Blockchain",
    description: "Secure heart rate tracking using smart contracts and IPFS for healthcare data privacy.",
    tech: ["Solidity", "IPFS", "React", "MetaMask"],
    image: "https://images.pexels.com/photos/8376193/pexels-photo-8376193.jpeg?auto=compress&cs=tinysrgb&w=800",
    github: "https://github.com/sunil-mutluri/Blockchain_Project",
    color: "from-red-500/20 to-pink-500/20"
  },
  {
    title: "Real-Time Threat Data Intelligence",
    description: "AI-driven platform for cybersecurity threat detection and analysis.",
    tech: ["Python", "Open AI", "SIEM", "ML"],
    image: "https://images.pexels.com/photos/5380664/pexels-photo-5380664.jpeg?auto=compress&cs=tinysrgb&w=800",
    github: "https://github.com",
    color: "from-indigo-500/20 to-blue-500/20"
  },
  {
    title: "Big Data Visualization of Wind Energy Consumption",
    description: "Interactive dashboards and geospatial analytics for wind energy utilization insights.",
    tech: ["Apache Spark", "Tableau", "GeoPandas", "PostgreSQL"],
    image: "https://images.pexels.com/photos/532192/pexels-photo-532192.jpeg?auto=compress&cs=tinysrgb&w=800",
    github: "https://github.com/sunil-mutluri/BIgData-Visualization",
    color: "from-emerald-500/20 to-green-500/20"
  },
  {
    title: "Ride-Sharing Platform",
    description: "Blockchain-based DApp for peer-to-peer ride sharing with real-time tracking.",
    tech: ["Tailwind", "Web3.js", "React Native", "Node.js"],
    image: "https://images.pexels.com/photos/4606330/pexels-photo-4606330.jpeg?auto=compress&cs=tinysrgb&w=800",
    github: "https://github.com/sunil-mutluri/ride-sharing-platform",
    color: "from-amber-500/20 to-yellow-500/20"
  },
  {
    title: "Interactive LED Canvas Using ESP32 and AI",
    description: "An AI-powered interactive art board controlled via hand gestures and ESP32.",
    tech: ["ESP32", "React.js", "LED Matrix", "HuggingFace"],
    image: "https://images.pexels.com/photos/11035636/pexels-photo-11035636.jpeg?auto=compress&cs=tinysrgb&w=800",
    github: "https://github.com/sunil-mutluri/IOT_Project",
    color: "from-purple-500/20 to-violet-500/20"
  }
];

export const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-32 px-8 max-w-7xl mx-auto relative">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-40 left-10 w-72 h-72 bg-gradient-to-br from-purple-100/40 to-pink-100/40 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 right-10 w-96 h-96 bg-gradient-to-br from-blue-100/40 to-indigo-100/40 rounded-full blur-3xl"></div>
      </div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerContainer}
      >
        <motion.div variants={fadeInUp} className="text-center mb-20">
          <p className="text-sm uppercase tracking-[0.3em] text-slate-500 mb-4 font-light">
            SELECTED WORK
          </p>
          <h2 className="text-5xl md:text-6xl font-light mb-6 text-slate-800 leading-tight">
            Featured<br />
            <span className="italic">projects</span>
          </h2>
          <p className="text-xl text-slate-500 max-w-2xl mx-auto font-light">
            A showcase of full-stack and data-driven solutions that transform real-world challenges into elegant, scalable software.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              variants={fadeInUp}
              whileHover={{
                y: -20,
                scale: 1.02,
                transition: { duration: 0.4, ease: "easeOut" }
              }}
              className="group relative bg-white/60 backdrop-blur-sm rounded-3xl overflow-hidden border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-500"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${project.color} to-transparent opacity-60`}></div>
                <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-4 bg-white/90 backdrop-blur-sm text-slate-800 rounded-full shadow-lg"
                  >
                    <Github size={24} />
                  </motion.a>
                </div>
              </div>

              {/* Text Content */}
              <div className="p-8">
                <h3 className="text-2xl font-light text-slate-800 mb-3 group-hover:text-slate-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-500 text-sm mb-6 leading-relaxed font-light">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-slate-100/80 text-slate-600 text-xs font-medium rounded-full border border-slate-200/50"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <motion.a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ x: 5 }}
                  className="inline-flex items-center gap-2 text-slate-600 hover:text-slate-800 transition-colors text-sm font-medium"
                >
                  View Project
                  <ExternalLink size={16} />
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};
