import React from 'react';
import { 
  SpringBootIcon, NextjsIcon, ExpressIcon, DjangoIcon, NuxtIcon,
  TypeScriptIcon, NestJSIcon, ReactIcon, NodeJSIcon, JavaIcon,
  CSharpIcon, PythonIcon, MongoDBIcon, RedisIcon, MySQLIcon,
  VSCodeIcon, DockerIcon, VercelIcon, GradleIcon, IntelliJIcon,
  DataGripIcon, GitIcon, PostmanIcon, ViteIcon, AWSIcon, LinuxIcon
} from './Icons';
import { useTranslations } from 'next-intl';

export default function About() {
  const t = useTranslations('About');
  const tCommon = useTranslations('Common');

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
    { name: "MySQL", icon: <MySQLIcon /> }
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
    { name: "Linux", icon: <LinuxIcon /> }
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-900/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-fuchsia-900/10 rounded-full blur-3xl -z-10"></div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {t('title')} <span className="text-purple-400">{t('titleHighlight')}</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-fuchsia-500 mx-auto rounded-full"></div>
        </div>

        {/* Bio Section */}
        <div className="flex flex-col md:flex-row items-center gap-12 mb-24">
          <div className="flex-1">
            <div className="mb-6">
              <h3 className="text-3xl font-semibold text-white mb-2">{t('greeting')}</h3>
              <p className="text-xl">{t('im')} <span className="text-purple-400 font-bold text-2xl">{tCommon('name')}</span></p>
            </div>
            <div className="space-y-4">
              <p className="text-slate-300 text-lg leading-relaxed">
                {t('bio1')}
              </p>
              <p className="text-slate-300 text-lg leading-relaxed">
                {t('bio2')}
              </p>
            </div>
          </div>
          
          <div className="flex-1 flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80 group">
              <div className="absolute inset-0 bg-gradient-to-tr from-purple-600 to-fuchsia-600 rounded-full blur-[40px] opacity-40 group-hover:opacity-60 transition-opacity duration-500"></div>
              <div className="absolute inset-2 border-2 border-purple-500/50 rounded-full animate-[spin_10s_linear_infinite]"></div>
              <div className="absolute inset-4 border border-fuchsia-500/30 rounded-full animate-[spin_15s_linear_infinite_reverse]"></div>
              <div className="w-full h-full rounded-full overflow-hidden border-4 border-[#151521] shadow-[0_0_30px_rgba(192,132,252,0.3)] relative z-10 p-2 bg-[#0b0b14]">
                <img src="/about-illustration.jpg" alt="Developer Avatar" className="w-full h-full object-cover rounded-full relative z-10" />
              </div>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="mb-24">
          <h3 className="text-4xl font-bold text-center text-white mb-16">
            {t('skillset')} <span className="text-purple-400">{t('skillsetHighlight')}</span>
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 lg:gap-6 justify-items-center max-w-5xl mx-auto">
            {skills.map((skill, index) => (
              <div key={index} className="w-full h-24 sm:w-40 sm:h-28 bg-[#11111c]/60 border border-purple-900/30 hover:border-purple-500/80 rounded-xl flex items-center justify-center relative group transition-all duration-300 hover:shadow-[0_0_20px_rgba(168,85,247,0.2)] cursor-crosshair">
                <div className="group-hover:scale-110 transition-transform duration-300">
                  {skill.icon}
                </div>
                <div className="absolute -bottom-12 opacity-0 group-hover:opacity-100 transition-opacity duration-300 px-3 py-1.5 bg-black text-sm font-medium text-white border border-purple-500/30 rounded pointer-events-none whitespace-nowrap z-20">
                  {skill.name}
                  <div className="absolute -top-[5px] left-1/2 -translate-x-1/2 w-2 h-2 bg-black border-t border-l border-purple-500/30 rotate-45"></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tools Section */}
        <div>
          <h3 className="text-4xl font-bold text-center text-white mb-16">
            <span className="text-purple-400">{t('tools')}</span> {t('toolsHighlight')}
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 lg:gap-6 justify-items-center max-w-5xl mx-auto">
            {tools.map((tool, index) => (
              <div key={index} className="w-full h-24 sm:w-40 sm:h-28 bg-[#11111c]/60 border border-purple-900/30 hover:border-purple-500/80 rounded-xl flex items-center justify-center relative group transition-all duration-300 hover:shadow-[0_0_20px_rgba(168,85,247,0.2)] cursor-crosshair">
                <div className="group-hover:scale-110 transition-transform duration-300">
                  {tool.icon}
                </div>
                <div className="absolute -bottom-12 opacity-0 group-hover:opacity-100 transition-opacity duration-300 px-3 py-1.5 bg-black text-sm font-medium text-white border border-purple-500/30 rounded pointer-events-none whitespace-nowrap z-20">
                  {tool.name}
                  <div className="absolute -top-[5px] left-1/2 -translate-x-1/2 w-2 h-2 bg-black border-t border-l border-purple-500/30 rotate-45"></div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
