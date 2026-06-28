import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Award, Star, Medal } from 'lucide-react';
import { achievements } from '../../data/portfolioData';

const AchievementsSection = () => {
  const icons = [Trophy, Award, Star, Medal];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Milestones & <span className="text-yellow-400">Achievements</span></h2>
        <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-amber-500 mx-auto rounded-full" />
      </motion.div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {achievements.map((item, idx) => {
          const Icon = icons[idx % icons.length];
          return (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass p-6 rounded-2xl flex flex-col items-center justify-center text-center group hover:-translate-y-2 transition-transform"
            >
              <div className="w-16 h-16 rounded-full bg-yellow-400/10 flex items-center justify-center text-yellow-400 mb-4 group-hover:scale-110 transition-transform">
                <Icon className="w-8 h-8" />
              </div>
              <h3 className="text-3xl font-extrabold text-white mb-2">{item.metric}</h3>
              <p className="text-sm font-medium text-slate-400">{item.label}</p>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default AchievementsSection;
