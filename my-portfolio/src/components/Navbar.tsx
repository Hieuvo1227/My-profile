"use client";
import React, { useState } from 'react';
import { Link, usePathname } from '../i18n/routing';
import { useTranslations } from 'next-intl';
import LanguageSwitcher from './LanguageSwitcher';

export default function Navbar() {
  const t = useTranslations('Common');
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isActive = (path: string) => {
    if (path === '/' && pathname === '/') return true;
    if (path !== '/' && pathname.startsWith(path)) return true;
    return false;
  };

  const navLinks = [
    { name: 'HOME', path: '/' },
    { name: 'ABOUT', path: '/about' },
    { name: 'PROJECTS', path: '/projects' },
    { name: 'RESUME', path: '/resume' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#08090c]/90 backdrop-blur-md border-t-2 border-terminal-green border-b border-[#1f2937]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <span className="font-pixel text-white text-base md:text-xl tracking-wider group-hover:text-terminal-green transition-colors">
              HIEU VO
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-7 lg:space-x-8">
            {navLinks.map((link) => {
              const active = isActive(link.path);
              return (
                <Link
                  key={link.path}
                  href={link.path as any}
                  className={`font-mono text-sm tracking-wider uppercase transition-colors duration-200 ${
                    active ? 'text-terminal-green font-bold' : 'text-slate-300 hover:text-terminal-green'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}

            <span className="text-slate-600 select-none">|</span>

            {/* Language Switcher */}
            <LanguageSwitcher />
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">
            <LanguageSwitcher />
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-slate-300 hover:text-terminal-green p-1.5 border border-[#1f2937] bg-[#0c1017]"
              aria-label="Toggle menu"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0a0d14] border-b border-[#1f2937] px-6 py-4 space-y-3">
          {navLinks.map((link) => {
            const active = isActive(link.path);
            return (
              <Link
                key={link.path}
                href={link.path as any}
                onClick={() => setMobileMenuOpen(false)}
                className={`block font-mono text-sm tracking-wider py-1.5 transition-colors ${
                  active ? 'text-terminal-green font-bold' : 'text-slate-300 hover:text-terminal-green'
                }`}
              >
                &gt; {link.name}
              </Link>
            );
          })}
        </div>
      )}
    </header>
  );
}
