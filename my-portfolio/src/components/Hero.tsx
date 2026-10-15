"use client";
import React from 'react';
import { Link } from '../i18n/routing';
import { useTranslations } from 'next-intl';
import RetroCard from './RetroCard';

export default function Hero() {
  const t = useTranslations('Hero');

  return (
    <section className="relative min-h-[calc(100vh-80px)] flex flex-col justify-between overflow-hidden">
      
      {/* Decorative Crosshairs & Badges */}
      <div className="absolute top-10 left-1/3 crosshair-mark hidden md:block">+</div>
      <div className="absolute top-1/4 right-8 text-right font-mono text-[10px] text-slate-500 tracking-widest leading-relaxed select-none hidden lg:block">
        BUILD<br />LEARN<br />EXPLORE<br />REPEAT
      </div>
      <div className="absolute bottom-32 right-8 text-right font-mono text-[10px] text-slate-500 tracking-widest leading-relaxed select-none hidden lg:block">
        CODE<br />PLAY<br />READ<br />GROW
      </div>
      <div className="absolute bottom-32 left-6 font-mono text-[10px] text-slate-500 tracking-widest leading-relaxed select-none hidden lg:block">
        IDEAS<br />INTO<br />REAL<br />THINGS
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-12 w-full flex-grow flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-4 items-center w-full">
          
          {/* Left Column: Intro Text */}
          <div className="lg:col-span-6 flex flex-col items-start z-10">
            
            {/* Status indicator with pulsing light */}
            <div className="inline-flex items-center gap-2 px-2.5 py-1 mb-4 border border-[#1f2937] bg-[#0c1017] text-[11px] font-mono text-slate-300">
              <span className="w-2 h-2 rounded-full bg-terminal-green animate-beacon inline-block"></span>
              <span className="text-terminal-green font-bold">STATUS:</span>
              <span>AVAILABLE FOR WORK</span>
            </div>

            <span className="text-terminal-green font-mono text-sm tracking-wider mb-2">
              // HEY THERE, I&apos;M
            </span>

            <h1 className="font-pixel text-4xl sm:text-6xl lg:text-7xl text-white tracking-wider leading-[1.15] mb-4">
              HIEU<br />VO
            </h1>

            <div className="flex items-center gap-2 mb-4">
              <span className="text-slate-500 font-mono tracking-widest text-xs select-none">:::</span>
              <span className="font-pixel text-sm sm:text-base text-terminal-green tracking-wide">
                SOFTWARE DEVELOPER
              </span>
            </div>

            <p className="font-mono text-slate-300 text-sm sm:text-base max-w-lg mb-8 leading-relaxed">
              {t('tagline')}
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="/projects"
                className="bg-terminal-green text-black font-mono font-bold text-xs sm:text-sm px-6 py-3.5 hover:bg-[#bef264] transition-all duration-200 flex items-center gap-2 border border-terminal-green shadow-[0_0_15px_rgba(163,230,53,0.3)]"
              >
                <span>{t('viewWork')}</span>
                <span>→</span>
              </Link>

              <Link
                href="/connect"
                className="bg-transparent border border-white/80 text-white font-mono font-medium text-xs sm:text-sm px-6 py-3.5 hover:border-terminal-green hover:text-terminal-green transition-all duration-200"
              >
                {t('contactMe')}
              </Link>
            </div>
          </div>

          {/* Right Column: Floating Earth & Pixel Coder with Twinkling Stars & Glow */}
          <div className="lg:col-span-6 flex justify-center lg:justify-end relative">
            <div className="relative w-full max-w-[490px] aspect-[5/4] flex items-center justify-center">
              
              {/* Twinkling Pixel Stars */}
              <div className="absolute top-4 left-8 text-terminal-green text-sm select-none pointer-events-none star-twinkle-1">✦</div>
              <div className="absolute top-16 right-12 text-white text-xs select-none pointer-events-none star-twinkle-2">★</div>
              <div className="absolute bottom-24 left-4 text-terminal-green text-xs select-none pointer-events-none star-twinkle-3">+</div>
              <div className="absolute top-2 left-1/2 text-cyan-300 text-sm select-none pointer-events-none star-twinkle-4">✦</div>
              <div className="absolute bottom-12 right-6 text-white text-sm select-none pointer-events-none star-twinkle-5">✦</div>
              <div className="absolute top-36 left-0 text-terminal-green text-[10px] select-none pointer-events-none star-twinkle-2">■</div>
              
              {/* Floating Earth & Coder Container */}
              <div className="relative z-10 w-full animate-float-earth">
                <img
                  src="/hero-pixel-earth.png"
                  alt="Hieu Vo Pixel Earth & Developer"
                  className="w-full h-auto object-contain drop-shadow-[0_0_25px_rgba(34,197,94,0.15)]"
                  style={{ imageRendering: 'pixelated' }}
                />
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* Bottom Feature Strip: 3 Cards on Green Bar */}
      <div className="w-full bg-terminal-green p-2 sm:p-3 relative z-20">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-2 sm:gap-3">
          
          {/* Card 1: CODE */}
          <RetroCard className="p-4 sm:p-5 flex items-center justify-between group cursor-default">
            <div className="flex items-center gap-4">
              <div className="text-terminal-green font-pixel text-xl sm:text-2xl font-bold">
                &lt;/&gt;
              </div>
              <div>
                <h4 className="font-pixel text-xs sm:text-sm text-white mb-1 group-hover:text-terminal-green transition-colors">
                  CODE
                </h4>
                <p className="font-mono text-[10px] sm:text-xs text-slate-400">
                  TURN IDEAS INTO REAL APPLICATIONS.
                </p>
              </div>
            </div>
            <span className="text-slate-500 group-hover:text-terminal-green font-mono text-sm ml-2 transition-colors">→</span>
          </RetroCard>

          {/* Card 2: GAME */}
          <RetroCard className="p-4 sm:p-5 flex items-center justify-between group cursor-default">
            <div className="flex items-center gap-4">
              <div className="text-terminal-green">
                <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M7 6H17V8H19V10H21V16H19V18H17V16H15V14H9V16H7V18H5V16H3V10H5V8H7V6M6 10V14H8V12H9V10H6M15 10V12H16V14H18V10H15M11 9H13V11H11V9Z" />
                </svg>
              </div>
              <div>
                <h4 className="font-pixel text-xs sm:text-sm text-white mb-1 group-hover:text-terminal-green transition-colors">
                  GAME
                </h4>
                <p className="font-mono text-[10px] sm:text-xs text-slate-400">
                  PLAY GAMES TO STAY CURIOUS.
                </p>
              </div>
            </div>
            <span className="text-slate-500 group-hover:text-terminal-green font-mono text-sm ml-2 transition-colors">→</span>
          </RetroCard>

          {/* Card 3: READ */}
          <RetroCard className="p-4 sm:p-5 flex items-center justify-between group cursor-default">
            <div className="flex items-center gap-4">
              <div className="text-terminal-green">
                <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 2H5C3.89 2 3 2.89 3 4V20C3 21.11 3.89 22 5 22H19C20.11 22 21 21.11 21 20V4C21 2.89 20.11 2 19 2M19 20H5V18H19V20M19 16H5V4H19V16M7 6H17V8H7V6M7 10H17V12H7V10Z" />
                </svg>
              </div>
              <div>
                <h4 className="font-pixel text-xs sm:text-sm text-white mb-1 group-hover:text-terminal-green transition-colors">
                  READ
                </h4>
                <p className="font-mono text-[10px] sm:text-xs text-slate-400">
                  READ TO THINK DEEPER.
                </p>
              </div>
            </div>
            <span className="text-slate-500 group-hover:text-terminal-green font-mono text-sm ml-2 transition-colors">→</span>
          </RetroCard>

        </div>
      </div>

    </section>
  );
}
