import React from 'react';
import { motion } from 'framer-motion';
import { timeline } from '../../data/portfolioData';

const JourneyTimeline = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">My <span className="text-secondary">Journey</span></h2>
        <div className="w-24 h-1 bg-gradient-to-r from-secondary to-purple-500 mx-auto rounded-full" />
      </motion.div>

      <div className="relative">
        {/* Vertical Line */}
        <div className="absolute left-[50%] transform -translate-x-1/2 w-1 h-full bg-white/5 rounded-full" />

        <div className="space-y-12">
          {timeline.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className={`flex items-center justify-between w-full ${index % 2 === 0 ? 'flex-row-reverse' : ''}`}
            >
              <div className="w-5/12" />
              
              <div className="z-20 flex items-center justify-center w-10 h-10 bg-surface rounded-full border-4 border-secondary shadow-[0_0_15px_rgba(124,58,237,0.5)]">
                <div className="w-3 h-3 bg-white rounded-full" />
              </div>
              
              <div className={`w-5/12 glass p-6 rounded-2xl border ${index % 2 === 0 ? 'border-r-secondary/50' : 'border-l-secondary/50'} relative group hover:-translate-y-1 transition-transform`}>
                <div className="absolute top-4 bg-secondary/10 text-secondary text-xs font-bold px-3 py-1 rounded-full border border-secondary/20">
                  {item.year}
                </div>
                <h3 className="text-xl font-bold text-white mt-8 mb-2">{item.title}</h3>
                <p className="text-sm text-slate-400">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default JourneyTimeline;
