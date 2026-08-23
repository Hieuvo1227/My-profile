import React from 'react';
import { projectsData } from '../lib/data';

export default function Projects() {
  return (
    <section id="projects" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-16">
          My Recent <span className="text-purple-400">Works</span>
        </h2>
        
        {/* CSS Grid cho Projects: 1 cột mobile, 2 cột md, 3 cột lg (nếu nhiều) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
          {projectsData.map((project) => (
            <div 
              key={project.id} 
              className="group bg-[#11111c] rounded-xl p-8 flex flex-col h-full border border-slate-800 hover:border-purple-500/50 hover:shadow-[0_0_30px_rgba(192,132,252,0.15)] transition-all duration-500 relative overflow-hidden"
            >
              {/* Ánh sáng hắt nhẹ trên góc card khi hover */}
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-purple-600 rounded-full blur-[80px] opacity-0 group-hover:opacity-40 transition-opacity duration-500"></div>
              
              {/* Image Frame */}
              {project.image && (
                <div className="w-full aspect-[16/9] rounded-lg overflow-hidden mb-6 relative border border-purple-900/30 group-hover:border-purple-500/50 transition-colors z-10 bg-[#08080f] shrink-0">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-purple-900/10 group-hover:bg-transparent transition-colors duration-500 pointer-events-none"></div>
                </div>
              )}

              <h3 className="text-2xl font-bold text-slate-100 mb-3 z-10">{project.title}</h3>
              <p className="text-slate-400 text-base mb-6 z-10">{project.description}</p>
              
              {/* Features */}
              <ul className="mb-6 z-10 space-y-2 flex-grow">
                {project.features?.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-gray-300 text-sm">
                    <svg className="w-5 h-5 text-green-500 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              
              {/* Tech Stack Badges */}
              <div className="flex flex-wrap gap-2 mb-8 z-10 mt-auto">
                {project.techStack.map((tech, index) => (
                  <span 
                    key={index} 
                    className="bg-purple-900/30 border border-purple-700/50 text-purple-300 text-xs font-semibold px-3 py-1.5 rounded-md"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex gap-6 z-10">
                {project.githubLink && (
                  <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-slate-300 hover:text-purple-400 font-medium transition-colors group">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" /></svg>
                    <span className="relative">
                      View GitHub
                      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-500 shadow-[0_0_8px_#c084fc] transition-all duration-300 group-hover:w-full"></span>
                    </span>
                  </a>
                )}
                {project.liveLink && project.liveLink !== "#" && (
                  <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-slate-300 hover:text-purple-400 font-medium transition-colors group">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                    <span className="relative">
                      Live Demo
                      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-500 shadow-[0_0_8px_#c084fc] transition-all duration-300 group-hover:w-full"></span>
                    </span>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
