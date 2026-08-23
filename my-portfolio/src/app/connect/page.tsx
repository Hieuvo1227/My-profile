"use client";
import React, { useState } from 'react';

export default function ConnectPage() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Cảm ơn bạn đã liên hệ! Tính năng gửi email đang được phát triển.");
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Let's <span className="text-purple-400">Connect</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            I'm currently open for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* Contact Info */}
          <div className="flex-1 space-y-6">
            <div className="bg-[#11111c] p-8 rounded-2xl border border-slate-800 flex items-start gap-6 group hover:border-purple-500/50 transition-all duration-300">
              <div className="w-14 h-14 rounded-full bg-purple-900/30 flex items-center justify-center text-purple-400 shrink-0 group-hover:scale-110 transition-transform shadow-[0_0_15px_rgba(147,51,234,0.3)]">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
              </div>
              <div>
                <h4 className="text-xl font-bold text-slate-200 mb-1">Email Me</h4>
                <p className="text-slate-400">hieuvo1227@gmail.com</p>
              </div>
            </div>
            
            <div className="bg-[#11111c] p-8 rounded-2xl border border-slate-800 flex items-start gap-6 group hover:border-purple-500/50 transition-all duration-300">
              <div className="w-14 h-14 rounded-full bg-purple-900/30 flex items-center justify-center text-purple-400 shrink-0 group-hover:scale-110 transition-transform shadow-[0_0_15px_rgba(147,51,234,0.3)]">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.242-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
              </div>
              <div>
                <h4 className="text-xl font-bold text-slate-200 mb-1">Location</h4>
                <p className="text-slate-400">Ho Chi Minh City, Vietnam</p>
              </div>
            </div>
            
            <div className="bg-[#11111c] p-8 rounded-2xl border border-slate-800 flex items-start gap-6 group hover:border-purple-500/50 transition-all duration-300">
              <div className="w-14 h-14 rounded-full bg-purple-900/30 flex items-center justify-center text-purple-400 shrink-0 group-hover:scale-110 transition-transform shadow-[0_0_15px_rgba(147,51,234,0.3)]">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" /></svg>
              </div>
              <div>
                <h4 className="text-xl font-bold text-slate-200 mb-1">Social Profiles</h4>
                <div className="flex flex-wrap gap-4 mt-2">
                  <a href="https://github.com/Hieuvo1227" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-purple-400 transition-colors">GitHub</a>
                  <a href="https://www.linkedin.com/in/hiếu-võ-4362a72b8" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-purple-400 transition-colors">LinkedIn</a>
                  <a href="https://www.facebook.com/hieu.vo.havi.2712/?locale=vi_VN" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-purple-400 transition-colors">Facebook</a>
                  <a href="https://www.instagram.com/havi.2712/" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-purple-400 transition-colors">Instagram</a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="flex-[1.5] bg-[#11111c] p-8 md:p-10 rounded-2xl border border-slate-800 relative overflow-hidden group">
            <div className="absolute -top-32 -right-32 w-64 h-64 bg-purple-600 rounded-full blur-[100px] opacity-10 group-hover:opacity-20 transition-opacity duration-500"></div>
            
            <h3 className="text-2xl font-bold text-white mb-6 relative z-10">Send Me A Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-slate-300 text-sm font-medium">Your Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full bg-[#0b0b14] border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-colors"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-slate-300 text-sm font-medium">Your Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full bg-[#0b0b14] border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-colors"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="subject" className="text-slate-300 text-sm font-medium">Subject</label>
                <input 
                  type="text" 
                  id="subject" 
                  required
                  value={formData.subject}
                  onChange={(e) => setFormData({...formData, subject: e.target.value})}
                  className="w-full bg-[#0b0b14] border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-colors"
                  placeholder="Job Opportunity"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-slate-300 text-sm font-medium">Message</label>
                <textarea 
                  id="message" 
                  rows={5} 
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="w-full bg-[#0b0b14] border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-colors resize-none"
                  placeholder="How can I help you?"
                ></textarea>
              </div>
              <button 
                type="submit"
                className="w-full bg-purple-600 hover:bg-purple-500 text-white font-bold py-4 rounded-lg shadow-[0_0_20px_rgba(147,51,234,0.3)] hover:shadow-[0_0_25px_rgba(192,132,252,0.5)] transition-all duration-300 flex items-center justify-center gap-2"
              >
                Send Message
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
