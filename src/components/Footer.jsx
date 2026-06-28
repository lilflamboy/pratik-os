import React from 'react';
import { Mail, Terminal, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="border-t border-white/10 bg-surface/50 backdrop-blur-lg pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4 group">
              <Terminal className="w-6 h-6 text-primary group-hover:text-secondary transition-colors" />
              <span className="font-bold text-lg tracking-tight text-white">Pratik<span className="text-primary">OS</span></span>
            </div>
            <p className="text-slate-400 text-sm max-w-sm">
              Building ultra-modern, scalable, and premium software solutions. 
              Always learning, always coding.
            </p>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><a href="/#about" className="hover:text-primary transition-colors">About</a></li>
              <li><a href="/laboratory" className="hover:text-primary transition-colors">Project Laboratory</a></li>
              <li><a href="/#journey" className="hover:text-primary transition-colors">Journey</a></li>
              <li><a href="/#contact" className="hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Connect</h3>
            <div className="flex space-x-4">
              <a href="https://instagram.com/lilflamboy" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full glass flex items-center justify-center text-slate-400 hover:text-white hover:bg-primary/20 transition-all">
                <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a href="https://github.com/lilflamboy" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full glass flex items-center justify-center text-slate-400 hover:text-white hover:bg-primary/20 transition-all">
                <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
              </a>
              <a href="tel:+917021266239" className="w-10 h-10 rounded-full glass flex items-center justify-center text-slate-400 hover:text-white hover:bg-primary/20 transition-all">
                <Phone className="w-5 h-5" />
              </a>
              <a href="mailto:pratikpatil7612@gmail.com" className="w-10 h-10 rounded-full glass flex items-center justify-center text-slate-400 hover:text-white hover:bg-primary/20 transition-all">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex-1 text-slate-500 text-sm text-center md:text-left">
            &copy; {new Date().getFullYear()} Pratik OS. All rights reserved.
          </div>
          
          <div className="flex-1 flex justify-center items-center text-sm font-medium tracking-wide text-slate-400">
            Designed & Developed by 
            <a href="https://instagram.com/lilflamboy" target="_blank" rel="noopener noreferrer" className="font-bold text-pink-500 hover:text-pink-400 drop-shadow-[0_0_12px_rgba(236,72,153,1)] animate-pulse inline-block mx-1 transition-colors">
              Pratik Patil
            </a>
            <span className="text-red-500 animate-pulse drop-shadow-[0_0_8px_rgba(239,68,68,1)]">❤️</span>
          </div>

          <div className="flex-1 flex justify-center md:justify-end items-center gap-1.5 text-sm text-slate-500">
            <span>Built with</span>
            <span className="text-red-500 text-base">❤️</span>
            <span>using React & Tailwind</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
