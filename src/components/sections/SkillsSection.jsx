import React from 'react';
import { motion } from 'framer-motion';

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Frontend",
      color: "from-blue-500 to-cyan-400",
      skills: [
        { name: "React", level: 85 },
        { name: "Tailwind CSS", level: 90 },
        { name: "JavaScript", level: 80 },
        { name: "HTML/CSS", level: 95 }
      ]
    },
    {
      title: "Backend",
      color: "from-green-500 to-emerald-400",
      skills: [
        { name: "Node.js", level: 75 },
        { name: "Express.js", level: 70 },
        { name: "Python", level: 85 }
      ]
    },
    {
      title: "Database & Tools",
      color: "from-purple-500 to-pink-400",
      skills: [
        { name: "MongoDB", level: 75 },
        { name: "MySQL", level: 80 },
        { name: "Git/GitHub", level: 85 }
      ]
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Technical <span className="text-primary">Skills</span></h2>
        <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
        <p className="text-slate-400 mt-6 max-w-2xl mx-auto">
          A comprehensive overview of my technical expertise, continuously evolving as I explore new technologies and frameworks.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {skillCategories.map((category, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="glass-card p-8 rounded-2xl relative overflow-hidden group"
          >
            <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${category.color}`} />
            <h3 className="text-xl font-bold text-white mb-8">{category.title}</h3>
            
            <div className="space-y-6">
              {category.skills.map((skill, i) => (
                <div key={i}>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium text-slate-300">{skill.name}</span>
                    <span className="text-xs text-slate-500">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-slate-800/50 rounded-full h-2 overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.2 + (i * 0.1) }}
                      className={`h-full rounded-full bg-gradient-to-r ${category.color}`}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default SkillsSection;
