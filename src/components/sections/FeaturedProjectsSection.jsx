import React from 'react';
import { motion } from 'framer-motion';
import { GitBranch, ExternalLink, ArrowRight } from 'lucide-react';
import { projects } from '../../data/portfolioData';
import { Link } from 'react-router-dom';

const FeaturedProjectsSection = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex flex-col md:flex-row justify-between items-end mb-12 border-b border-white/10 pb-6 gap-6"
      >
        <div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Featured <span className="text-primary">Projects</span></h2>
          <p className="text-slate-400 max-w-xl">
            A selection of my recent work, showcasing my skills in building real-world applications and digital experiences.
          </p>
        </div>
        <Link to="/laboratory" className="flex items-center gap-2 text-primary hover:text-secondary transition-colors font-medium group whitespace-nowrap">
          View All Projects In Laboratory
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </Link>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {projects.slice(0, 3).map((project, idx) => (
          <motion.div 
            key={project.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="glass-card rounded-2xl overflow-hidden group flex flex-col h-full"
          >
            <div className="relative h-48 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent z-10" />
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute top-4 right-4 z-20 px-3 py-1 rounded-full bg-primary/20 backdrop-blur-md border border-primary/30 text-xs font-semibold text-primary">
                {project.status}
              </div>
            </div>
            
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
              <p className="text-sm text-slate-400 mb-6 flex-grow">{project.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech, i) => (
                  <span key={i} className="px-2 py-1 bg-white/5 border border-white/10 rounded-md text-xs text-slate-300">
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="flex items-center gap-4 mt-auto">
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center gap-2 py-2 rounded-lg bg-white/5 hover:bg-white/10 text-white text-sm font-medium transition-colors">
                  <GitBranch className="w-4 h-4" /> Code
                </a>
                <a href={project.live} target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center gap-2 py-2 rounded-lg bg-primary hover:bg-primary/90 text-white text-sm font-medium transition-colors shadow-[0_0_15px_rgba(37,99,235,0.3)]">
                  <ExternalLink className="w-4 h-4" /> Live Demo
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedProjectsSection;
