"use client";
import React from 'react';
import { 
  SpringBootIcon, NextjsIcon, ExpressIcon, DjangoIcon, NuxtIcon,
  TypeScriptIcon, NestJSIcon, ReactIcon, NodeJSIcon, JavaIcon,
  CSharpIcon, PythonIcon, MongoDBIcon, RedisIcon, MySQLIcon,
  VSCodeIcon, DockerIcon, VercelIcon, GradleIcon, IntelliJIcon,
  DataGripIcon, GitIcon, PostmanIcon, ViteIcon, AWSIcon, LinuxIcon
} from './Icons';
import { useTranslations } from 'next-intl';
import RetroCard from './RetroCard';

export default function About() {
  const t = useTranslations('About');

  const skills = [
    { name: "Spring Boot", icon: <SpringBootIcon /> },
    { name: "Next.js", icon: <NextjsIcon /> },
    { name: "Express", icon: <ExpressIcon /> },
    { name: "Django", icon: <DjangoIcon /> },
    { name: "Nuxt.js", icon: <NuxtIcon /> },
    { name: "TypeScript", icon: <TypeScriptIcon /> },
    { name: "NestJS", icon: <NestJSIcon /> },
    { name: "React", icon: <ReactIcon /> },
    { name: "Node.js", icon: <NodeJSIcon /> },
    { name: "Java", icon: <JavaIcon /> },
    { name: "C#", icon: <CSharpIcon /> },
    { name: "Python", icon: <PythonIcon /> },
    { name: "MongoDB", icon: <MongoDBIcon /> },
    { name: "Redis", icon: <RedisIcon /> },
    { name: "MySQL", icon: <MySQLIcon /> },
  ];

  const tools = [
    { name: "VS Code", icon: <VSCodeIcon /> },
    { name: "Docker", icon: <DockerIcon /> },
    { name: "Vercel", icon: <VercelIcon /> },
    { name: "Gradle", icon: <GradleIcon /> },
    { name: "IntelliJ IDEA", icon: <IntelliJIcon /> },
    { name: "DataGrip", icon: <DataGripIcon /> },
    { name: "Git", icon: <GitIcon /> },
    { name: "Postman", icon: <PostmanIcon /> },
    { name: "Vite", icon: <ViteIcon /> },
    { name: "AWS", icon: <AWSIcon /> },
    { name: "Linux", icon: <LinuxIcon /> },
  ];

  return (
    <section className="py-10 md:py-16 relative overflow-hidden">
      
      {/* Decorative Crosshairs & Badges */}
      <div className="absolute top-12 left-1/2 crosshair-mark hidden md:block">+</div>
      <div className="absolute top-20 right-8 text-right font-mono text-[10px] text-slate-500 tracking-widest leading-relaxed select-none hidden lg:block">
        BUILD<br />LEARN<br />EXPLORE<br />REPEAT
      </div>
      <div className="absolute top-80 left-6 font-mono text-[10px] text-slate-500 tracking-widest leading-relaxed select-none hidden lg:block">
        IDEAS<br />INTO<br />REAL<br />THINGS
      </div>
      <div className="absolute bottom-20 right-8 text-right font-mono text-[10px] text-slate-500 tracking-widest leading-relaxed select-none hidden lg:block">
        CODE<br />PLAY<br />READ<br />GROW
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header & Bio Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-16 md:mb-20">
          
          {/* Left Column: Text */}
          <div className="lg:col-span-7 flex flex-col items-start">
            <span className="text-terminal-green font-mono text-sm tracking-wider mb-2">
              // ABOUT ME
            </span>

            <h1 className="font-pixel text-3xl sm:text-5xl text-white tracking-wider leading-tight mb-6">
              WHO I AM
            </h1>

            <div className="flex items-center gap-2 mb-4">
              <span className="text-slate-500 font-mono tracking-widest text-xs select-none">:::</span>
              <span className="font-mono text-base sm:text-lg text-terminal-green font-bold">
                Hello! I&apos;m Hieu Vo.
              </span>
            </div>

            <div className="space-y-4 font-mono text-slate-300 text-sm sm:text-base leading-relaxed">
              <p>{t('bio1')}</p>
              <p>{t('bio2')}</p>
            </div>
          </div>

          {/* Right Column: Terminal & Avatar Pixel Illustration with Seamless Blend & Twinkle */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[430px] flex items-center justify-center">
              
              {/* Twinkling Stars */}
              <div className="absolute top-2 left-4 text-terminal-green text-sm select-none pointer-events-none star-twinkle-1">✦</div>
              <div className="absolute top-1/3 right-2 text-white text-xs select-none pointer-events-none star-twinkle-2">★</div>
              <div className="absolute bottom-10 left-8 text-terminal-green text-xs select-none pointer-events-none star-twinkle-3">+</div>
              <div className="absolute top-10 right-1/4 text-cyan-300 text-xs select-none pointer-events-none star-twinkle-4">✦</div>

              {/* Animated Floating Terminal & Avatar */}
              <div className="relative z-10 w-full animate-float-gentle">
                <img
                  src="/about-pixel-terminal.png"
                  alt="Hieu Vo About Terminal Illustration"
                  className="w-full h-auto object-contain drop-shadow-[0_0_25px_rgba(34,197,94,0.15)]"
                  style={{ imageRendering: 'pixelated' }}
                />
              </div>

            </div>
          </div>

        </div>

        {/* Section Divider Line with Crosshair */}
        <div className="relative my-12 border-t border-[#1f2937]">
          <span className="absolute -top-3 left-1/4 crosshair-mark">+</span>
          <span className="absolute -top-3 right-1/4 crosshair-mark">+</span>
        </div>

        {/* Professional Skillset */}
        <div className="mb-16 md:mb-20">
          <div className="mb-8">
            <h3 className="text-terminal-green font-mono text-sm tracking-wider mb-1">
              // PROFESSIONAL SKILLSET
            </h3>
            <p className="font-mono text-xs sm:text-sm text-slate-400">
              Technologies and frameworks I work with.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-3 sm:gap-4">
            {skills.map((skill, index) => (
              <RetroCard
                key={index}
                hasSquareTopRight={false}
                className="p-3 sm:p-4 flex flex-col items-center justify-center min-h-[95px] sm:min-h-[105px] group cursor-default"
              >
                <div className="mb-2">
                  {skill.icon}
                </div>
                <span className="font-mono text-[11px] sm:text-xs text-slate-300 group-hover:text-terminal-green transition-colors text-center line-clamp-1">
                  {skill.name}
                </span>
              </RetroCard>
            ))}
          </div>
        </div>

        {/* Section Divider Line with Crosshair */}
        <div className="relative my-12 border-t border-[#1f2937]">
          <span className="absolute -top-3 left-1/3 crosshair-mark">+</span>
          <span className="absolute -top-3 right-1/3 crosshair-mark">+</span>
        </div>

        {/* Tools I Use */}
        <div className="mb-8">
          <div className="mb-8">
            <h3 className="text-terminal-green font-mono text-sm tracking-wider mb-1">
              // TOOLS I USE
            </h3>
            <p className="font-mono text-xs sm:text-sm text-slate-400">
              Tools that help me build, ship, and stay productive.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4">
            {tools.map((tool, index) => (
              <RetroCard
                key={index}
                hasSquareTopRight={false}
                className="p-3 sm:p-4 flex flex-col items-center justify-center min-h-[95px] sm:min-h-[105px] group cursor-default"
              >
                <div className="mb-2">
                  {tool.icon}
                </div>
                <span className="font-mono text-[11px] sm:text-xs text-slate-300 group-hover:text-terminal-green transition-colors text-center line-clamp-1">
                  {tool.name}
                </span>
              </RetroCard>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
