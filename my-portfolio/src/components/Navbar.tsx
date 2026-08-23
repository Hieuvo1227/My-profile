"use client";
import React from 'react';
import { Link } from '../i18n/routing';
import { useTranslations } from 'next-intl';
import LanguageSwitcher from './LanguageSwitcher';

export default function Navbar() {
  const t = useTranslations('Common');

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md bg-[#0b0b14]/80 border-b border-purple-900/30 shadow-[0_4px_30px_rgba(192,132,252,0.1)]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0 cursor-pointer">
            <span className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-fuchsia-500 tracking-tight drop-shadow-[0_0_10px_rgba(192,132,252,0.5)]">
              {t('name')}.
            </span>
          </Link>
          
          {/* Links & Switcher */}
          <div className="hidden md:flex items-center space-x-8 lg:space-x-10">
            <Link href="/" className="group relative text-slate-300 hover:text-purple-400 transition-colors duration-300 font-medium text-lg flex items-center gap-2">
              <svg className="w-5 h-5 opacity-70 group-hover:opacity-100" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
              {t('home')}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-500 shadow-[0_0_8px_#c084fc] transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link href="/about" className="group relative text-slate-300 hover:text-purple-400 transition-colors duration-300 font-medium text-lg flex items-center gap-2">
              <svg className="w-5 h-5 opacity-70 group-hover:opacity-100" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
              {t('about')}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-500 shadow-[0_0_8px_#c084fc] transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link href="/projects" className="group relative text-slate-300 hover:text-purple-400 transition-colors duration-300 font-medium text-lg flex items-center gap-2">
              <svg className="w-5 h-5 opacity-70 group-hover:opacity-100" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
              {t('projects')}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-500 shadow-[0_0_8px_#c084fc] transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link href="/resume" className="group relative text-slate-300 hover:text-purple-400 transition-colors duration-300 font-medium text-lg flex items-center gap-2">
              <svg className="w-5 h-5 opacity-70 group-hover:opacity-100" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
              {t('resume')}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-500 shadow-[0_0_8px_#c084fc] transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link href="/connect" className="group relative text-slate-300 hover:text-purple-400 transition-colors duration-300 font-medium text-lg flex items-center gap-2">
              <svg className="w-5 h-5 opacity-70 group-hover:opacity-100" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
              {t('connect')}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-500 shadow-[0_0_8px_#c084fc] transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <LanguageSwitcher />
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center gap-4">
            <LanguageSwitcher />
            <button className="text-slate-300 hover:text-purple-400 focus:outline-none">
              <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
