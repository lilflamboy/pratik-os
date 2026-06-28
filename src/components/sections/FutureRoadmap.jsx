import React from 'react';
import { motion } from 'framer-motion';
import { roadmap } from '../../data/portfolioData';
import { Activity } from 'lucide-react';

const FutureRoadmap = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <div className="inline-flex items-center gap-2 py-1 px-3 rounded-full bg-accent/10 border border-accent/20 text-accent font-medium text-sm mb-6">
          <Activity className="w-4 h-4" /> Currently Building
        </div>
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Future <span className="text-accent">Roadmap</span></h2>
        <div className="w-24 h-1 bg-gradient-to-r from-accent to-emerald-400 mx-auto rounded-full" />
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {roadmap.map((item, idx) => {
          let statusColor = "";
          let bgColor = "";
          
          if (item.status === "In Progress") {
            statusColor = "text-blue-400";
            bgColor = "bg-blue-400/10 border-blue-400/20";
          } else if (item.status === "Planned") {
            statusColor = "text-amber-400";
            bgColor = "bg-amber-400/10 border-amber-400/20";
          } else {
            statusColor = "text-slate-400";
            bgColor = "bg-slate-400/10 border-slate-400/20";
          }

          return (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass p-6 rounded-2xl relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-accent/5 rounded-full blur-xl transform translate-x-1/2 -translate-y-1/2" />
              
              <div className={`inline-block px-3 py-1 rounded-full text-xs font-semibold mb-4 border ${bgColor} ${statusColor}`}>
                {item.status}
              </div>
              
              <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
              <p className="text-sm text-slate-400">{item.description}</p>
              
              {item.status === "In Progress" && (
                <div className="mt-4 flex space-x-1">
                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                </div>
              )}
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default FutureRoadmap;
