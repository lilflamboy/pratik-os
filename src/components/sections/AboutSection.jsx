import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Laptop, Rocket, Brain } from 'lucide-react';

const AboutSection = () => {
  const traits = [
    { icon: Brain, title: "Problem Solver", desc: "Passionate about finding optimal solutions to complex challenges." },
    { icon: Code2, title: "Clean Code", desc: "Writing maintainable, scalable, and efficient code architectures." },
    { icon: Laptop, title: "Modern Stack", desc: "Continuously learning and applying the latest web technologies." },
    { icon: Rocket, title: "Fast Learner", desc: "Quickly adapting to new frameworks, languages, and environments." }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">About <span className="text-primary">Me</span></h2>
        <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-5"
        >
          <div className="glass-card p-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-2xl transform translate-x-1/2 -translate-y-1/2" />
            <h3 className="text-2xl font-bold text-white mb-6">Professional <span className="text-secondary">Introduction</span></h3>
            <div className="space-y-4 text-slate-300 leading-relaxed">
              <p>
                I am a BCA Graduate with a strong foundation in Computer Science and a deep passion for Software Engineering. 
                My journey began with Python, and I have since expanded my horizons into Full Stack Web Development.
              </p>
              <p>
                I focus on building practical, high-performance software solutions that not only look visually stunning but also 
                solve real-world problems effectively. I thrive in environments where I can continuously learn modern technologies.
              </p>
            </div>
            
            <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-400 mb-1">Education</p>
                <p className="font-semibold text-white">BCA Graduate</p>
              </div>
              <div>
                <p className="text-sm text-slate-400 mb-1">Location</p>
                <p className="font-semibold text-white">Mumbai, India</p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6"
        >
          {traits.map((trait, index) => (
            <motion.div 
              key={index}
              whileHover={{ y: -5 }}
              className="glass p-6 rounded-2xl group hover:border-primary/30 transition-all"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
                <trait.icon className="w-6 h-6" />
              </div>
              <h4 className="text-lg font-bold text-white mb-2">{trait.title}</h4>
              <p className="text-sm text-slate-400">{trait.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default AboutSection;
