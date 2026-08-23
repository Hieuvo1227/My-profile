"use client";
import React, { useEffect, useState } from 'react';

export default function Hero() {
  const fullText = "Full-Stack Web Developer";
  const [text, setText] = useState("");
  
  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setText(fullText.substring(0, index));
      index++;
      if (index > fullText.length) clearInterval(interval);
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full min-h-[90vh] flex items-center justify-center overflow-hidden">
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col-reverse md:flex-row items-center justify-between gap-12 z-10">
        
        {/* Left Content */}
        <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Hi There! <span className="animate-pulse inline-block origin-bottom-right">👋</span>
          </h2>
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tight">
            I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-fuchsia-500 drop-shadow-[0_0_20px_rgba(192,132,252,0.4)]">Võ Hiếu</span>
          </h1>
          
          {/* Typewriter Effect */}
          <div className="h-12 mb-10">
            <p className="text-xl md:text-3xl text-purple-300 font-semibold typewriter-text inline-block pr-1">
              {text}
            </p>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-5">
            <a href="#projects" className="px-8 py-3.5 bg-purple-600 text-white text-lg rounded-md font-bold shadow-[0_0_20px_rgba(147,51,234,0.4)] hover:bg-purple-500 hover:-translate-y-1 hover:shadow-[0_0_25px_rgba(192,132,252,0.6)] transition-all duration-300">
              View My Work
            </a>
            <a href="/cv.pdf" className="px-8 py-3.5 bg-transparent border-2 border-purple-500 text-purple-400 text-lg rounded-md font-bold hover:bg-purple-500/10 hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
              Download CV
            </a>
          </div>
        </div>

        {/* Right Illustration */}
        <div className="flex-1 flex justify-center items-center relative">
          <div className="relative w-full max-w-lg">
            {/* Glowing halos */}
            <div className="absolute inset-0 bg-purple-600 rounded-full blur-[80px] opacity-30 animate-pulse"></div>
            <div className="absolute inset-10 bg-fuchsia-500 rounded-full blur-[60px] opacity-20"></div>
            
            <img 
              src="/hero-illustration.jpg" 
              alt="Developer Workspace" 
              className="w-full h-auto rounded-3xl border border-purple-500/20 shadow-[0_0_50px_rgba(192,132,252,0.25)] relative z-10 hover:-translate-y-2 transition-transform duration-500" 
            />
          </div>
        </div>

      </div>
    </section>
  );
}
