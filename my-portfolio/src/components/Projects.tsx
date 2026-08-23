import React from 'react';
import { projectsData } from '../lib/data';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { useTranslations } from 'next-intl';

export default function Projects() {
  const t = useTranslations('Projects');
  const tData = useTranslations('ProjectData');

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      <div className="absolute top-1/4 -left-48 w-96 h-96 bg-purple-900/10 rounded-full blur-3xl -z-10"></div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {t('title')} <span className="text-purple-400">{t('titleHighlight')}</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-fuchsia-500 mx-auto rounded-full mb-6"></div>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            {t('description')}
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {projectsData.map((project) => {
            const features = [
              tData(`${project.key}.features.0`),
              tData(`${project.key}.features.1`),
              tData(`${project.key}.features.2`)
            ];
            
            return (
              <div key={project.id} className="bg-[#11111c]/60 border border-purple-900/30 rounded-2xl overflow-hidden flex flex-col group hover:border-purple-500/50 hover:shadow-[0_0_30px_rgba(192,132,252,0.15)] transition-all duration-500">
                
                {/* Project Image Box */}
                <div className="w-full aspect-video relative bg-[#08080c] p-4 sm:p-6 lg:p-8 flex items-center justify-center border-b border-purple-900/30">
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#11111c] z-10 opacity-80 pointer-events-none"></div>
                  
                  {project.image ? (
                    <div className="relative w-full h-full rounded-xl overflow-hidden border border-purple-500/20 shadow-[0_10px_30px_rgba(0,0,0,0.5)] z-0 transform transition-all duration-700 group-hover:scale-105 group-hover:border-purple-500/50">
                      <div className="absolute inset-0 bg-purple-900/10 mix-blend-overlay z-10"></div>
                      <img 
                        src={project.image} 
                        alt={tData(`${project.key}.title`)}
                        className="w-full h-full object-cover object-top"
                      />
                    </div>
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center text-purple-900/30 z-0">
                      <svg className="w-20 h-20 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <span className="font-mono text-sm tracking-widest">NO IMAGE AVALIABLE</span>
                    </div>
                  )}
                  
                  {/* Overlay Action Buttons */}
                  <div className="absolute inset-0 bg-purple-900/20 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 flex items-center justify-center gap-4">
                    {project.githubLink && (
                      <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="bg-[#0b0b14] p-3 rounded-full hover:text-purple-400 hover:scale-110 transition-all shadow-lg" title={t('github')}>
                        <FaGithub className="w-6 h-6" />
                      </a>
                    )}
                    {project.liveLink !== "#" && (
                      <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="bg-[#0b0b14] p-3 rounded-full hover:text-purple-400 hover:scale-110 transition-all shadow-lg" title={t('demo')}>
                        <FaExternalLinkAlt className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                </div>

                {/* Project Details */}
                <div className="p-8 flex flex-col flex-grow">
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-purple-400 transition-colors">
                    {tData(`${project.key}.title`)}
                  </h3>
                  
                  <p className="text-slate-300 mb-6 leading-relaxed flex-grow">
                    {tData(`${project.key}.description`)}
                  </p>
                  
                  <div className="mb-6">
                    <ul className="space-y-2">
                      {features.map((feature, i) => (
                        <li key={i} className="flex items-start text-slate-400 text-sm">
                          <svg className="w-5 h-5 text-purple-500 mr-2 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech Stack Tags */}
                  <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-purple-900/30">
                    {project.techStack.map((tech, i) => (
                      <span key={i} className="px-3 py-1 text-xs font-medium text-purple-300 bg-purple-900/20 border border-purple-800/30 rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
