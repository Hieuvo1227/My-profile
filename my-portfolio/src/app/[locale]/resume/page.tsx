"use client";
import React, { useState } from 'react';
import { useTranslations } from 'next-intl';
import { FaEnvelope, FaMapMarkerAlt, FaDownload, FaTimes } from 'react-icons/fa';
import RetroCard from '../../../components/RetroCard';

const CV_URL = "/HieuVo_CV.pdf";

export default function ResumePage() {
  const t = useTranslations('Resume');
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="py-10 md:py-16 relative overflow-hidden">
      
      {/* Decorative Crosshairs & Badges */}
      <div className="absolute top-12 left-1/4 crosshair-mark hidden md:block">+</div>
      <div className="absolute top-20 right-8 text-right font-mono text-[10px] text-slate-500 tracking-widest leading-relaxed select-none hidden lg:block">
        BUILD<br />LEARN<br />EXPLORE<br />REPEAT
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header with Title, Actions & Right Illustration */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-10">
          <div>
            <span className="text-terminal-green font-mono text-sm tracking-wider mb-2 block">
              // RESUME
            </span>
            <h1 className="font-pixel text-3xl sm:text-5xl text-white tracking-wider leading-tight mb-3">
              MY RESUME
            </h1>
            <p className="font-mono text-slate-400 text-xs sm:text-sm mb-6 max-w-xl">
              {t('description')}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4">
              <a
                href={CV_URL}
                download
                className="bg-terminal-green text-black font-mono font-bold text-xs sm:text-sm px-5 py-3 hover:bg-[#bef264] transition-all duration-200 flex items-center gap-2 border border-terminal-green shadow-[0_0_15px_rgba(163,230,53,0.3)]"
              >
                <FaDownload className="w-3.5 h-3.5" />
                <span>{t('download')}</span>
              </a>

              <button
                onClick={() => setIsModalOpen(true)}
                className="bg-transparent border border-white/80 text-white font-mono font-medium text-xs sm:text-sm px-5 py-3 hover:border-terminal-green hover:text-terminal-green transition-all duration-200 flex items-center gap-2"
              >
                <span>VIEW FULL CV</span>
                <span>→</span>
              </button>
            </div>
          </div>

          {/* Right Coder Graphic with Seamless Blend & Twinkle */}
          <div className="hidden md:block shrink-0 relative">
            <div className="absolute -top-2 left-2 text-terminal-green text-xs star-twinkle-1 select-none pointer-events-none">✦</div>
            <div className="absolute top-4 right-0 text-white text-[10px] star-twinkle-3 select-none pointer-events-none">★</div>

            <div className="animate-float-gentle">
              <img
                src="/resume-pixel-coder.png"
                alt="Pixel Coder"
                className="h-28 lg:h-32 w-auto object-contain drop-shadow-[0_0_20px_rgba(34,197,94,0.15)]"
                style={{ imageRendering: 'pixelated' }}
              />
            </div>
          </div>
        </div>

        {/* ── Retro Terminal Resume Sheet ── */}
        <RetroCard className="p-6 sm:p-10 border-terminal-green/50 bg-[#0a0d13]/95">
          
          {/* Header */}
          <div className="text-center pb-8 border-b border-[#1f2937]">
            <h2 className="font-mono font-bold text-2xl sm:text-3xl text-white tracking-wider mb-1">
              VO HIEU
            </h2>
            <p className="font-mono text-xs sm:text-sm text-slate-300 mb-3">
              Software Engineer Fresher
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-mono text-slate-400">
              <span className="flex items-center gap-1.5">
                <FaEnvelope className="text-terminal-green w-3 h-3" />
                hieuvo1227@gmail.com
              </span>
              <span className="text-slate-600 select-none">|</span>
              <span className="flex items-center gap-1.5">
                <FaMapMarkerAlt className="text-terminal-green w-3 h-3" />
                Ho Chi Minh City, Vietnam
              </span>
            </div>
          </div>

          {/* Education */}
          <div className="py-6 border-b border-[#1f2937]">
            <h3 className="font-mono text-terminal-green text-xs tracking-wider mb-4 font-bold">
              // EDUCATION
            </h3>
            <div className="flex flex-col sm:flex-row justify-between text-xs sm:text-sm font-mono text-white mb-1">
              <span className="font-semibold">Open University Malaysia (OUM) - HUTECH Campus</span>
              <span className="text-slate-400">2022 - 2026 (Expected)</span>
            </div>
            <div className="flex flex-col sm:flex-row justify-between text-xs font-mono text-slate-400">
              <span>Bachelor of Information Technology (International Joint Program)</span>
              <span className="text-terminal-green">GPA: 3.2/4.0</span>
            </div>
          </div>

          {/* Skills */}
          <div className="py-6 border-b border-[#1f2937] text-xs sm:text-sm font-mono space-y-2">
            <h3 className="text-terminal-green text-xs tracking-wider mb-4 font-bold">
              // SKILLS
            </h3>
            <div>
              <span className="text-slate-300 font-semibold">Programming Languages: </span>
              <span className="text-slate-400">TypeScript, JavaScript, Python, C/C++.</span>
            </div>
            <div>
              <span className="text-slate-300 font-semibold">API Design & Infra: </span>
              <span className="text-slate-400">RESTful APIs, Node.js (NestJS, Express).</span>
            </div>
            <div>
              <span className="text-slate-300 font-semibold">Databases (NoSQL/SQL): </span>
              <span className="text-slate-400">NoSQL (MongoDB, Redis), PostgreSQL.</span>
            </div>
            <div>
              <span className="text-slate-300 font-semibold">IoT & Message Queues: </span>
              <span className="text-slate-400">Internet of Things (IoT), Message Queues (MQTT/EMQX), ESP32.</span>
            </div>
            <div>
              <span className="text-slate-300 font-semibold">Tools & Workflow: </span>
              <span className="text-slate-400">Version Control (Git/GitHub), Gemini API, Cursor.</span>
            </div>
            <div>
              <span className="text-slate-300 font-semibold">Soft Skills: </span>
              <span className="text-slate-400">English (Fluent).</span>
            </div>
          </div>

          {/* Work Experience */}
          <div className="py-6 border-b border-[#1f2937]">
            <h3 className="font-mono text-terminal-green text-xs tracking-wider mb-4 font-bold">
              // WORK EXPERIENCE
            </h3>
            
            <div className="mb-4">
              <div className="flex flex-col sm:flex-row justify-between text-xs sm:text-sm font-mono text-white mb-1">
                <span className="font-semibold">C&amp;T Electrical Electronics Co., Ltd.</span>
                <span className="text-slate-400">Sep 2025 - Dec 2025</span>
              </div>
              <div className="flex flex-col sm:flex-row justify-between text-xs font-mono text-slate-400 mb-3 italic">
                <span>IT Fresher (Full-Stack &amp; System Integration)</span>
                <span>HCMC, Vietnam</span>
              </div>

              <ul className="space-y-2 text-xs sm:text-sm font-mono text-slate-300">
                <li className="flex items-start gap-2">
                  <span className="text-terminal-green select-none shrink-0 mt-0.5">■</span>
                  <span>
                    <strong className="text-white">System Integration &amp; API Design:</strong> Engineered and deployed highly available RESTful APIs on Windows Server (IIS, PM2), guaranteeing seamless data synchronization for Kiosk operations.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-terminal-green select-none shrink-0 mt-0.5">■</span>
                  <span>
                    <strong className="text-white">Web Development Optimization:</strong> Built and shipped a high-performance branch portal using React and Next.js, leveraging Server-Side Rendering (SSR) to improve load times and SEO.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-terminal-green select-none shrink-0 mt-0.5">■</span>
                  <span>
                    <strong className="text-white">IoT &amp; Hardware Communication:</strong> Validated and stabilized real-time Message Queues (MQTT) between ESP32 hardware sensors and central servers, resolving critical data transmission edge cases.
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Highlighted Projects */}
          <div className="py-6 border-b border-[#1f2937] space-y-6">
            <h3 className="font-mono text-terminal-green text-xs tracking-wider font-bold">
              // HIGHLIGHTED PROJECTS
            </h3>

            {/* Project 1 */}
            <div>
              <div className="flex flex-col sm:flex-row justify-between text-xs sm:text-sm font-mono text-white mb-0.5">
                <span className="font-semibold">THỦY TÙNG – Education Promotion Website</span>
                <div className="flex items-center gap-2">
                  <span className="text-slate-400">2025 - 2026</span>
                  <a href="https://thuytung.edu.vn" target="_blank" rel="noopener noreferrer" className="text-terminal-green hover:underline">
                    thuytung.edu.vn
                  </a>
                </div>
              </div>
              <p className="text-xs font-mono text-slate-400 italic mb-2">
                Full-Stack Web Platform (React/Next.js, Node.js, Redis)
              </p>
              <ul className="space-y-1.5 text-xs sm:text-sm font-mono text-slate-300">
                <li className="flex items-start gap-2">
                  <span className="text-terminal-green select-none shrink-0 mt-0.5">■</span>
                  <span>
                    <strong className="text-white">Frontend Development:</strong> Developed responsive and interactive user interfaces using React and Next.js to provide a seamless browsing experience for students.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-terminal-green select-none shrink-0 mt-0.5">■</span>
                  <span>
                    <strong className="text-white">Backend &amp; Performance:</strong> Integrated Node.js and Redis for robust session management and data caching, ensuring the application handles concurrent traffic spikes smoothly without downtime.
                  </span>
                </li>
              </ul>
            </div>

            {/* Project 2 */}
            <div>
              <div className="flex flex-col sm:flex-row justify-between text-xs sm:text-sm font-mono text-white mb-0.5">
                <span className="font-semibold">AI Video Editor</span>
                <div className="flex items-center gap-2">
                  <span className="text-slate-400">2026</span>
                  <a href="https://github.com/Hieuvo1227/Edit-video-by-AI.git" target="_blank" rel="noopener noreferrer" className="text-terminal-green hover:underline">
                    GitHub Link
                  </a>
                </div>
              </div>
              <p className="text-xs font-mono text-slate-400 italic mb-2">
                AI-Powered Processing Workflow (TypeScript, NestJS, Gemini AI)
              </p>
              <ul className="space-y-1.5 text-xs sm:text-sm font-mono text-slate-300">
                <li className="flex items-start gap-2">
                  <span className="text-terminal-green select-none shrink-0 mt-0.5">■</span>
                  <span>
                    <strong className="text-white">AI Integration:</strong> Leveraged Gemini API and advanced prompt engineering to analyze multimodal video data, automating timestamp generation and highlight extractions.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-terminal-green select-none shrink-0 mt-0.5">■</span>
                  <span>
                    <strong className="text-white">Backend Architecture:</strong> Architected a NestJS backend to manage heavy FFmpeg media processing, handling asynchronous tasks and optimizing data pipelines for efficiency.
                  </span>
                </li>
              </ul>
            </div>

            {/* Project 3 */}
            <div>
              <div className="flex flex-col sm:flex-row justify-between text-xs sm:text-sm font-mono text-white mb-0.5">
                <span className="font-semibold">SAMS – Smart Access Management System</span>
                <div className="flex items-center gap-2">
                  <span className="text-slate-400">Jan 2026 - Mar 2026</span>
                  <a href="https://github.com/Hieuvo1227/-n-IoT.git" target="_blank" rel="noopener noreferrer" className="text-terminal-green hover:underline">
                    GitHub Link
                  </a>
                </div>
              </div>
              <p className="text-xs font-mono text-slate-400 italic mb-2">
                Distributed IoT Access Control (Node.js, Docker, C/C++)
              </p>
              <ul className="space-y-1.5 text-xs sm:text-sm font-mono text-slate-300">
                <li className="flex items-start gap-2">
                  <span className="text-terminal-green select-none shrink-0 mt-0.5">■</span>
                  <span>
                    <strong className="text-white">System Design &amp; Optimization:</strong> Engineered a Dynamic Risk Engine utilizing PostgreSQL and NoSQL (MongoDB). Optimized in-memory logic to achieve sub-50ms decision latency.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-terminal-green select-none shrink-0 mt-0.5">■</span>
                  <span>
                    <strong className="text-white">Containerization &amp; DevOps:</strong> Deployed the ecosystem using Docker, building resilient communication pipelines (Socket.io, MQTT) between edge devices and the central server.
                  </span>
                </li>
              </ul>
            </div>

          </div>

          {/* Certifications & Activities */}
          <div className="pt-6">
            <h3 className="font-mono text-terminal-green text-xs tracking-wider mb-4 font-bold">
              // CERTIFICATIONS &amp; ACTIVITIES
            </h3>
            <div className="flex items-start gap-2 text-xs sm:text-sm font-mono text-slate-300">
              <span className="text-terminal-green select-none shrink-0 mt-0.5">■</span>
              <span>
                <strong className="text-white">AI Business Venture Event (HCMC):</strong> Registered Participant, exploring AI tech applications (Jun 2025).
              </span>
            </div>
          </div>

        </RetroCard>

      </div>

      {/* Fullscreen CV PDF Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-md p-4 sm:p-6"
          onClick={(e) => { if (e.target === e.currentTarget) setIsModalOpen(false); }}
        >
          <div className="relative w-full max-w-5xl h-[90vh] flex flex-col bg-[#0d1117] border border-terminal-green">
            
            {/* Modal Header */}
            <div className="flex justify-between items-center px-4 py-3 border-b border-[#1f2937] bg-[#08090c]">
              <span className="font-mono text-xs text-terminal-green flex items-center gap-2">
                <span>&gt;</span> FULL_CV_VIEW.PDF
              </span>
              <div className="flex items-center gap-3">
                <a
                  href={CV_URL}
                  download
                  className="text-slate-400 hover:text-terminal-green font-mono text-xs flex items-center gap-1.5"
                >
                  <FaDownload className="w-3 h-3" />
                  <span>Download</span>
                </a>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="text-slate-400 hover:text-rose-400 p-1"
                >
                  <FaTimes className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Modal Body */}
            <div className="flex-1 bg-[#151921] overflow-hidden">
              <iframe
                src={`${CV_URL}#view=FitH`}
                className="w-full h-full border-none"
                title="Hieu Vo Full CV"
              />
            </div>
          </div>
        </div>
      )}

    </section>
  );
}
