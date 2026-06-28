import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Download, ArrowRight, Code, Database, Layout } from 'lucide-react';
import { achievements } from '../../data/portfolioData';

const HomeSection = () => {
  const [text, setText] = useState('');
  const fullText = "Python Developer | Full Stack Learner | Problem Solver";
  
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      setText(fullText.slice(0, index));
      index++;
      if (index > fullText.length) clearInterval(timer);
    }, 50);
    return () => clearInterval(timer);
  }, []);

  const floatingIcons = [
    { Icon: Code, delay: 0, x: -50, y: -20 },
    { Icon: Database, delay: 1, x: 50, y: 30 },
    { Icon: Layout, delay: 2, x: 0, y: 60 }
  ];

  return (
    <div className="relative min-h-[90vh] flex items-center justify-center pt-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Floating Elements Background */}
      {floatingIcons.map((item, i) => (
        <motion.div
          key={i}
          animate={{
            y: [item.y, item.y - 20, item.y],
            x: [item.x, item.x + 10, item.x],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            delay: item.delay,
            ease: "easeInOut"
          }}
          className="absolute hidden md:flex opacity-10 items-center justify-center"
          style={{ left: `${50 + (i * 20)}%`, top: `${30 + (i * 15)}%` }}
        >
          <item.Icon className="w-24 h-24 text-primary" />
        </motion.div>
      ))}

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center z-10">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-start text-left"
        >
          <div className="inline-block py-1 px-3 rounded-full bg-primary/10 border border-primary/20 text-primary font-medium text-sm mb-6">
            Welcome to Pratik OS
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-4 tracking-tight">
            Hi, I'm <span className="text-gradient">Pratik Patil</span>
          </h1>
          <div className="h-8 mb-6">
            <p className="text-xl md:text-2xl font-medium text-slate-300">
              {text}<span className="animate-pulse">|</span>
            </p>
          </div>
          
          <p className="text-slate-400 text-lg mb-10 max-w-lg leading-relaxed">
            Building premium, scalable, and ultra-modern software solutions. Turning complex problems into elegant code.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <a href="#projects" className="px-8 py-3 rounded-full bg-primary text-white font-medium hover:bg-primary/90 transition-all shadow-[0_0_20px_rgba(37,99,235,0.4)] flex items-center gap-2 group">
              View Projects
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="/resume.pdf" download className="px-8 py-3 rounded-full glass font-medium hover:bg-white/5 transition-all flex items-center gap-2">
              <Download className="w-4 h-4" />
              Download Resume
            </a>
            <a href="#contact" className="px-8 py-3 rounded-full border border-slate-700 font-medium hover:border-slate-500 transition-all text-slate-300">
              Contact Me
            </a>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-secondary/20 rounded-3xl blur-2xl transform rotate-3" />
          <div className="glass-card p-8 relative grid grid-cols-2 gap-4">
            {achievements.map((stat, i) => (
              <div key={i} className="bg-slate-800/50 p-6 rounded-xl border border-white/5 flex flex-col items-center justify-center text-center group hover:bg-slate-800/80 transition-all">
                <span className="text-4xl font-bold text-white mb-2 group-hover:text-primary transition-colors">{stat.metric}</span>
                <span className="text-sm text-slate-400 font-medium">{stat.label}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default HomeSection;
