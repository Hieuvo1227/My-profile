import React from 'react';
import { 
  SpringBootIcon, NextjsIcon, ExpressIcon, DjangoIcon, NuxtIcon,
  TypeScriptIcon, NestJSIcon, ReactIcon, NodeJSIcon, JavaIcon,
  CSharpIcon, PythonIcon, MongoDBIcon, RedisIcon, MySQLIcon,
  VSCodeIcon, DockerIcon, VercelIcon, GradleIcon, IntelliJIcon,
  DataGripIcon, GitIcon, PostmanIcon, ViteIcon, AWSIcon, LinuxIcon
} from './Icons';

export default function About() {
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
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Know Who <span className="text-purple-400">I'M</span>
          </h2>
        </div>

        <div className="flex flex-col md:flex-row gap-12 items-center mb-20">
          <div className="flex-1 text-slate-300 text-lg leading-relaxed space-y-6">
            <div className="mb-6">
              <h3 className="text-3xl font-semibold text-white mb-2">Hello there! <span className="animate-pulse inline-block">👋</span></h3>
              <p className="text-xl">I'm <span className="text-purple-400 font-bold text-2xl">Võ Hiếu</span></p>
            </div>
            <div className="space-y-4">
              <p className="text-slate-300 text-lg leading-relaxed">
              I am a Software Developer with a strong passion for building high-quality, scalable web applications and innovative software solutions. I enjoy continuous learning and applying technical knowledge to solve real-world problems.
              </p>
              <p className="text-slate-300 text-lg leading-relaxed"> I have actively participated in and led several development projects, including smart access management systems and modern education platforms.
              </p>
            </div>
          </div>
          
          <div className="flex-1 flex justify-center">
             <div className="relative w-72 h-72 rounded-full p-2 border-2 border-purple-500/30 shadow-[0_0_50px_rgba(192,132,252,0.15)] group hover:border-purple-500 transition-all duration-500">
                <div className="absolute inset-0 bg-purple-600 blur-[60px] opacity-20 group-hover:opacity-40 transition-opacity rounded-full"></div>
                <img src="/about-illustration.jpg" alt="Developer Avatar" className="w-full h-full object-cover rounded-full relative z-10" />
             </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="mb-24">
          <h3 className="text-4xl font-bold text-center text-white mb-16">
            Professional <span className="text-purple-400">Skillset</span>
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
            <span className="text-purple-400">Tools</span> I use
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
