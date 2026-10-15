"use client";
import React from 'react';
import { projectsData } from '../lib/data';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { useTranslations } from 'next-intl';
import RetroCard from './RetroCard';

export default function Projects() {
  const t = useTranslations('Projects');
  const tData = useTranslations('ProjectData');

  return (
    <section className="py-10 md:py-16 relative overflow-hidden">
      
      {/* Decorative Crosshairs & Badges */}
      <div className="absolute top-12 left-1/4 crosshair-mark hidden md:block">+</div>
      <div className="absolute top-20 right-8 text-right font-mono text-[10px] text-slate-500 tracking-widest leading-relaxed select-none hidden lg:block">
        BUILD<br />LEARN<br />EXPLORE<br />REPEAT
      </div>
      <div className="absolute top-96 left-6 font-mono text-[10px] text-slate-500 tracking-widest leading-relaxed select-none hidden lg:block">
        IDEAS<br />INTO<br />REAL<br />THINGS
      </div>
      <div className="absolute bottom-20 right-8 text-right font-mono text-[10px] text-slate-500 tracking-widest leading-relaxed select-none hidden lg:block">
        CODE<br />PLAY<br />READ<br />GROW
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header with Title and Right Coder Graphic */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12">
          <div>
            <span className="text-terminal-green font-mono text-sm tracking-wider mb-2 block">
              // PROJECTS
            </span>
            <h1 className="font-pixel text-3xl sm:text-5xl text-white tracking-wider leading-tight mb-3">
              MY RECENT WORK
            </h1>
            <p className="font-mono text-slate-400 text-sm sm:text-base">
              {t('description')}
            </p>
          </div>

          {/* Right Coder Graphic with Seamless Blend & Twinkle */}
          <div className="hidden md:block shrink-0 relative">
            <div className="absolute -top-2 left-2 text-terminal-green text-xs star-twinkle-1 select-none pointer-events-none">✦</div>
            <div className="absolute top-4 right-0 text-white text-[10px] star-twinkle-3 select-none pointer-events-none">★</div>
            
            <div className="animate-float-gentle">
              <img
                src="/projects-pixel-coder.png"
                alt="Pixel Coder"
                className="h-28 lg:h-32 w-auto object-contain drop-shadow-[0_0_20px_rgba(34,197,94,0.15)]"
                style={{ imageRendering: 'pixelated' }}
              />
            </div>
          </div>
        </div>

        {/* Project Cards List */}
        <div className="space-y-8">
          {projectsData.map((project) => {
            const features = [
              tData(`${project.key}.features.0`),
              tData(`${project.key}.features.1`),
              tData(`${project.key}.features.2`)
            ];

            return (
              <RetroCard
                key={project.id}
                className="p-5 sm:p-7 overflow-hidden"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                  
                  {/* Left: Project Pixel Banner */}
                  <div className="lg:col-span-6 relative aspect-[16/10] sm:aspect-[16/9] lg:aspect-[16/10] overflow-hidden border border-[#1f2937] bg-black">
                    <img
                      src={project.image}
                      alt={tData(`${project.key}.title`)}
                      className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-105"
                      style={{ imageRendering: 'pixelated' }}
                    />
                  </div>

                  {/* Right: Project Details */}
                  <div className="lg:col-span-6 flex flex-col justify-between h-full">
                    
                    {/* Number + Title */}
                    <div className="flex items-start gap-3.5 mb-3">
                      <span className="font-pixel text-xl sm:text-2xl text-terminal-green shrink-0 mt-0.5">
                        {project.num}
                      </span>
                      <h3 className="font-mono font-bold text-base sm:text-lg text-white leading-snug">
                        {tData(`${project.key}.title`)}
                      </h3>
                    </div>

                    {/* Description */}
                    <p className="font-mono text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                      {tData(`${project.key}.description`)}
                    </p>

                    {/* Bullet Points with Square Bullet */}
                    <ul className="space-y-1.5 mb-5 font-mono text-xs sm:text-sm text-slate-300">
                      {features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-terminal-green text-xs select-none shrink-0 mt-0.5">■</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Tech Stack Chips & Links */}
                    <div className="flex flex-wrap items-center justify-between gap-2 pt-2 border-t border-[#1f2937]/70">
                      <div className="flex flex-wrap gap-1.5 sm:gap-2">
                        {project.techStack.map((tech, i) => (
                          <span
                            key={i}
                            className="px-2.5 py-1 text-[11px] font-mono text-slate-300 bg-[#08090c] border border-[#1f2937] hover:border-terminal-green/50 transition-colors"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      <div className="flex items-center gap-3 ml-auto shrink-0">
                        {project.githubLink && (
                          <a
                            href={project.githubLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-slate-400 hover:text-terminal-green transition-colors text-xs flex items-center gap-1 font-mono"
                            title="GitHub"
                          >
                            <FaGithub className="w-4 h-4" />
                            <span className="hidden sm:inline">Code</span>
                          </a>
                        )}
                        {project.liveLink && project.liveLink !== "#" && (
                          <a
                            href={project.liveLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-slate-400 hover:text-terminal-green transition-colors text-xs flex items-center gap-1 font-mono"
                            title="Live Demo"
                          >
                            <FaExternalLinkAlt className="w-3.5 h-3.5" />
                            <span className="hidden sm:inline">Demo</span>
                          </a>
                        )}
                      </div>
                    </div>

                  </div>

                </div>
              </RetroCard>
            );
          })}
        </div>

      </div>
    </section>
  );
}
