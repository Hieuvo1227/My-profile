"use client";
import React, { useEffect, useState } from 'react';
import { Link } from '../i18n/routing';
import { useTranslations } from 'next-intl';

export default function Hero() {
  const t = useTranslations('Hero');
  const tCommon = useTranslations('Common');
  const fullText = t('role');
  const [text, setText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  
  useEffect(() => {
    let timeout: NodeJS.Timeout;
    
    if (isTyping) {
      if (text.length < fullText.length) {
        timeout = setTimeout(() => {
          setText(fullText.slice(0, text.length + 1));
        }, 100);
      } else {
        timeout = setTimeout(() => setIsTyping(false), 2000);
      }
    } else {
      if (text.length > 0) {
        timeout = setTimeout(() => {
          setText(text.slice(0, -1));
        }, 50);
      } else {
        setIsTyping(true);
      }
    }
    
    return () => clearTimeout(timeout);
  }, [text, isTyping, fullText]);

  return (
    <section className="min-h-[90vh] flex items-center relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-600 rounded-full mix-blend-multiply filter blur-[128px] opacity-30 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-fuchsia-600 rounded-full mix-blend-multiply filter blur-[128px] opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-40 w-72 h-72 bg-blue-600 rounded-full mix-blend-multiply filter blur-[128px] opacity-30 animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-8">
          
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left">
            <h2 className="text-xl md:text-2xl text-purple-400 font-medium tracking-wide mb-3">{t('greeting')}</h2>
            <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-4 tracking-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-fuchsia-500 drop-shadow-[0_0_15px_rgba(192,132,252,0.4)]">
                {tCommon('name')}
              </span>
            </h1>
            
            <div className="h-12 md:h-16 mb-6">
              <h3 className="text-2xl md:text-4xl text-slate-300 font-bold">
                {text}<span className="animate-pulse text-purple-500">|</span>
              </h3>
            </div>
            
            <p className="text-lg md:text-xl text-slate-400 mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              {t('tagline')}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link href="/projects" className="bg-gradient-to-r from-purple-600 to-fuchsia-600 hover:from-purple-500 hover:to-fuchsia-500 text-white font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(192,132,252,0.5)]">
                {t('viewWork')}
              </Link>
              <Link href="/connect" className="bg-transparent border-2 border-purple-500 text-purple-400 hover:bg-purple-500/10 font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(192,132,252,0.3)]">
                {t('contactMe')}
              </Link>
            </div>
          </div>

          {/* Hero Image / Illustration */}
          <div className="flex-1 w-full max-w-lg lg:max-w-none relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-fuchsia-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
            <div className="relative aspect-square rounded-2xl border-2 border-purple-500/30 overflow-hidden shadow-[0_0_30px_rgba(192,132,252,0.2)]">
              <img 
                src="/hero-illustration.jpg" 
                alt="Developer Workspace" 
                className="w-full h-full object-cover transform transition duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0b0b14] via-transparent to-transparent opacity-60"></div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
