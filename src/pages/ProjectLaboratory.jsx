import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Search, Filter, GitBranch, ExternalLink, Activity } from 'lucide-react';
import { projects } from '../data/portfolioData';

const ProjectLaboratory = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeFilter, setActiveFilter] = useState('All');
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const filters = ['All', 'Completed', 'In Progress', 'Planned'];

  const filteredProjects = projects.filter(project => {
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          project.tech.some(t => t.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesFilter = activeFilter === 'All' || project.status === activeFilter;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="min-h-screen pt-12 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <div className="inline-flex items-center gap-2 py-1 px-3 rounded-full bg-secondary/10 border border-secondary/20 text-secondary font-medium text-sm mb-6">
          <Activity className="w-4 h-4" /> Project Archive
        </div>
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Project <span className="text-secondary">Laboratory</span></h1>
        <p className="text-slate-400 max-w-2xl mx-auto text-lg">
          A central place where all my current, completed, and future projects are displayed. 
          Explore my experiments, applications, and open-source contributions.
        </p>
      </motion.div>

      {/* Controls */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-12">
        <div className="relative w-full md:w-96">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
          <input 
            type="text" 
            placeholder="Search projects or technologies..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-slate-900/80 border border-white/10 rounded-full pl-12 pr-4 py-3 text-white focus:outline-none focus:border-secondary/50 focus:ring-1 focus:ring-secondary/50 transition-all"
          />
        </div>
        
        <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 hide-scrollbar">
          <Filter className="text-slate-400 w-5 h-5 mr-2" />
          {filters.map(filter => (
            <button 
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
                activeFilter === filter 
                ? 'bg-secondary text-white shadow-[0_0_15px_rgba(124,58,237,0.4)]' 
                : 'bg-white/5 text-slate-300 hover:bg-white/10'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project, idx) => (
          <motion.div 
            key={project.id}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: idx * 0.05 }}
            layout
            className="glass-card rounded-2xl overflow-hidden group flex flex-col h-full border border-white/10 hover:border-secondary/30 transition-colors"
          >
            <div className="relative h-48 overflow-hidden bg-slate-800">
              {project.image ? (
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-slate-600">
                  No Image Available
                </div>
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent z-10" />
              
              <div className="absolute top-4 right-4 z-20 flex gap-2">
                <div className={`px-3 py-1 rounded-full backdrop-blur-md border text-xs font-semibold
                  ${project.status === 'Completed' ? 'bg-green-500/20 border-green-500/30 text-green-400' : 
                    project.status === 'In Progress' ? 'bg-blue-500/20 border-blue-500/30 text-blue-400' : 
                    'bg-amber-500/20 border-amber-500/30 text-amber-400'}`}
                >
                  {project.status}
                </div>
              </div>
            </div>
            
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
              <p className="text-sm text-slate-400 mb-6 flex-grow">{project.description}</p>
              
              <div className="mb-6">
                <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3">Key Features</h4>
                <ul className="space-y-1">
                  {project.features.map((feature, i) => (
                    <li key={i} className="text-sm text-slate-300 flex items-center gap-2">
                      <div className="w-1 h-1 rounded-full bg-secondary" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap gap-2 mb-6 pt-4 border-t border-white/5">
                {project.tech.map((tech, i) => (
                  <span key={i} className="px-2 py-1 bg-white/5 rounded text-xs font-medium text-slate-300">
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="flex items-center gap-3 mt-auto">
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-white text-sm font-medium transition-colors">
                  <GitBranch className="w-4 h-4" /> Repo
                </a>
                <a href={project.live} target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg bg-secondary hover:bg-secondary/90 text-white text-sm font-medium transition-colors shadow-[0_0_15px_rgba(124,58,237,0.3)]">
                  <ExternalLink className="w-4 h-4" /> Demo
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      
      {filteredProjects.length === 0 && (
        <div className="text-center py-20">
          <p className="text-slate-400 text-lg">No projects found matching your criteria.</p>
          <button 
            onClick={() => { setSearchTerm(''); setActiveFilter('All'); }}
            className="mt-4 text-primary hover:underline"
          >
            Clear filters
          </button>
        </div>
      )}
    </div>
  );
};

export default ProjectLaboratory;
