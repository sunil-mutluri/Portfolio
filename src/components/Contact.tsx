import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, MapPin, Coffee } from 'lucide-react';
import { fadeInUp, staggerContainer } from '../utils/animations';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    console.log('Form submitted:', formData);
    setIsSubmitting(false);
    setFormData({ name: '', email: '', message: '' });
    
    // Show success message
    alert('Message launched successfully! 🚀');
  };

  return (
    <section className="py-32 px-8 max-w-6xl mx-auto relative">
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
      >
        <motion.div variants={fadeInUp} className="text-center mb-20">
          <p className="text-sm uppercase tracking-[0.3em] text-slate-500 mb-4 font-light">
            GET IN TOUCH
          </p>
          <h2 className="text-5xl md:text-6xl font-light mb-6 text-slate-800 leading-tight">
            Let's<br />
            <span className="italic">connect</span>
          </h2>
          <p className="text-xl text-slate-500 max-w-2xl mx-auto font-light">
            Ready to transform data into insights? Let's chat about your next project over virtual coffee.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Contact Info */}
          <motion.div variants={fadeInUp} className="space-y-8">
            <div className="space-y-6">
              <motion.div 
                whileHover={{ x: 10 }}
                className="flex items-center gap-6 p-6 bg-white/60 backdrop-blur-sm rounded-2xl border border-white/20 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="p-4 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl shadow-lg">
                  <Mail className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="font-medium text-slate-700 text-lg">Email</h3>
                  <p className="text-slate-500 font-light">sunilkumarmutluri24@gmail.com</p>
                </div>
              </motion.div>

              <motion.div 
                whileHover={{ x: 10 }}
                className="flex items-center gap-6 p-6 bg-white/60 backdrop-blur-sm rounded-2xl border border-white/20 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="p-4 bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl shadow-lg">
                  <MapPin className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="font-medium text-slate-700 text-lg">Location</h3>
                  <p className="text-slate-500 font-light">Available for Remote or Onsite</p>
                </div>
              </motion.div>

              <motion.div 
                whileHover={{ x: 10 }}
                className="flex items-center gap-6 p-6 bg-white/60 backdrop-blur-sm rounded-2xl border border-white/20 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="p-4 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-xl shadow-lg">
                  <Coffee className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="font-medium text-slate-700 text-lg">Coffee Chat</h3>
                  <p className="text-slate-500 font-light">Always up for a good discussion</p>
                </div>
              </motion.div>
            </div>

            {/* Quote */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="p-8 bg-gradient-to-br from-slate-50/80 to-blue-50/80 backdrop-blur-sm rounded-3xl border border-white/20 shadow-lg"
            >
              <p className="text-center text-slate-600 italic font-light text-lg leading-relaxed">
                "The best insights come from the most unexpected conversations. 
                Let's create something amazing together!" ✨
              </p>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.form 
            variants={fadeInUp}
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-slate-600 mb-3">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-6 py-4 bg-white/60 backdrop-blur-sm border border-white/20 rounded-2xl text-slate-700 placeholder-slate-400 focus:border-blue-300 focus:outline-none focus:ring-4 focus:ring-blue-100 transition-all duration-300 shadow-lg"
                placeholder="Your name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-slate-600 mb-3">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-6 py-4 bg-white/60 backdrop-blur-sm border border-white/20 rounded-2xl text-slate-700 placeholder-slate-400 focus:border-blue-300 focus:outline-none focus:ring-4 focus:ring-blue-100 transition-all duration-300 shadow-lg"
                placeholder="your.email@example.com"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-slate-600 mb-3">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-6 py-4 bg-white/60 backdrop-blur-sm border border-white/20 rounded-2xl text-slate-700 placeholder-slate-400 focus:border-blue-300 focus:outline-none focus:ring-4 focus:ring-blue-100 transition-all duration-300 resize-none shadow-lg"
                placeholder="Tell me about your project..."
              />
            </div>

            <motion.button
              type="submit"
              disabled={isSubmitting}
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="w-full group relative px-8 py-4 bg-gradient-to-r from-slate-800 to-slate-700 text-white font-medium rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-slate-800/25 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <span className="relative z-10 flex items-center justify-center gap-3">
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Launching...
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    Launch Message 🚀
                  </>
                )}
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-slate-700 to-slate-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </motion.button>
          </motion.form>
        </div>
      </motion.div>
    </section>
  );
};
