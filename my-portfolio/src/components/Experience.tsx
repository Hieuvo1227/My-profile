import React from 'react';
import { experienceData } from '../lib/data';

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-16">
          My <span className="text-purple-400">Experience</span>
        </h2>
        
        <div className="relative border-l-2 border-purple-500/30 ml-3 md:ml-0">
          {experienceData.map((exp, index) => (
            <div key={exp.id} className="mb-12 md:mb-16 ml-8 relative group">
              {/* Timeline Dot */}
              <div className="absolute -left-[41px] top-1.5 w-5 h-5 bg-[#0b0b14] border-4 border-purple-500 rounded-full shadow-[0_0_10px_rgba(192,132,252,0.8)] group-hover:scale-125 transition-transform duration-300"></div>
              
              <div className="bg-[#11111c] p-6 md:p-8 rounded-xl border border-slate-800 group-hover:border-purple-500/50 hover:shadow-[0_0_30px_rgba(192,132,252,0.15)] transition-all duration-500 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-purple-600 rounded-full blur-[80px] opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
                
                <h3 className="text-2xl font-bold text-slate-100 mb-1">{exp.role}</h3>
                <h4 className="text-lg text-purple-400 font-semibold mb-2">{exp.company}</h4>
                <p className="text-sm text-slate-500 mb-6 flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                  {exp.duration}
                </p>
                
                <ul className="list-disc list-inside space-y-2 text-slate-300">
                  {exp.description.map((item, i) => (
                    <li key={i} className="leading-relaxed">
                      <span className="relative -left-2">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
