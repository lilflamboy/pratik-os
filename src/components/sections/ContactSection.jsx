import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Send, MapPin, Phone } from 'lucide-react';

const ContactSection = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Get In <span className="text-primary">Touch</span></h2>
        <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
        <p className="text-slate-400 mt-6 max-w-2xl mx-auto">
          Currently open for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <a href="mailto:pratikpatil7612@gmail.com" className="glass p-6 rounded-2xl flex items-center gap-6 group hover:border-primary/30 transition-colors cursor-pointer">
            <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
              <Mail className="w-6 h-6" />
            </div>
            <div>
              <p className="text-sm text-slate-400 mb-1">Email</p>
              <p className="text-lg font-medium text-white group-hover:text-primary transition-colors">pratikpatil7612@gmail.com</p>
            </div>
          </a>
          
          <div className="glass p-6 rounded-2xl flex items-center gap-6 group hover:border-primary/30 transition-colors">
            <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
              <MapPin className="w-6 h-6" />
            </div>
            <div>
              <p className="text-sm text-slate-400 mb-1">Location</p>
              <p className="text-lg font-medium text-white">Mumbai, Maharashtra</p>
            </div>
          </div>
          
          <a href="tel:+917021266239" className="glass p-6 rounded-2xl flex items-center gap-6 group hover:border-primary/30 transition-colors cursor-pointer">
            <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
              <Phone className="w-6 h-6" />
            </div>
            <div>
              <p className="text-sm text-slate-400 mb-1">Phone</p>
              <p className="text-lg font-medium text-white group-hover:text-primary transition-colors">+91 70212 66239</p>
            </div>
          </a>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="glass-card p-8 rounded-2xl"
        >
          <form 
            className="space-y-6" 
            onSubmit={(e) => {
              e.preventDefault();
              const name = e.target.elements.name.value;
              const subject = e.target.elements.subject.value;
              const message = e.target.elements.message.value;
              window.location.href = `mailto:pratikpatil7612@gmail.com?subject=${encodeURIComponent(subject || 'Portfolio Contact')}&body=${encodeURIComponent(`Name: ${name}\n\nMessage:\n${message}`)}`;
            }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-300">Your Name</label>
                <input 
                  type="text" 
                  name="name"
                  className="w-full bg-slate-900/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all"
                  placeholder="John Doe"
                  required
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-300">Your Email</label>
                <input 
                  type="email" 
                  name="email"
                  className="w-full bg-slate-900/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all"
                  placeholder="john@example.com"
                  required
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-300">Subject</label>
              <input 
                type="text" 
                name="subject"
                className="w-full bg-slate-900/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all"
                placeholder="Job Opportunity"
                required
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-300">Message</label>
              <textarea 
                rows="4" 
                name="message"
                className="w-full bg-slate-900/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all resize-none"
                placeholder="Hello Pratik, I would like to talk about..."
                required
              ></textarea>
            </div>
            <button className="w-full py-4 rounded-xl bg-gradient-to-r from-primary to-secondary text-white font-bold flex items-center justify-center gap-2 hover:opacity-90 transition-opacity shadow-lg">
              <Send className="w-5 h-5" /> Send Message
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactSection;
