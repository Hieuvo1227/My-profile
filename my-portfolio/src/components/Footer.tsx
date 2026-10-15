import React from 'react';
import { FaGithub, FaLinkedin, FaFacebook, FaInstagram, FaEnvelope } from 'react-icons/fa';
import { useTranslations } from 'next-intl';

export default function Footer() {
  const t = useTranslations('Footer');

  return (
    <footer className="bg-[#08090c] border-t border-[#1f2937] py-6 relative z-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-mono">
        
        {/* Copyright info */}
        <div className="text-slate-400 text-center md:text-left">
          <span>{t('designed')} Hieu Vo</span>
          <span className="mx-2 text-slate-600">/</span>
          <span>{t('copyright')}</span>
        </div>

        {/* Social Links */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 text-slate-400">
          <a
            href="https://github.com/Hieuvo1227"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 hover:text-terminal-green transition-colors"
          >
            <FaGithub className="w-3.5 h-3.5" />
            <span>GitHub</span>
          </a>
          <span className="text-slate-700 select-none">|</span>

          <a
            href="https://www.linkedin.com/in/hiếu-võ-4362a72b8"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 hover:text-terminal-green transition-colors"
          >
            <FaLinkedin className="w-3.5 h-3.5" />
            <span>LinkedIn</span>
          </a>
          <span className="text-slate-700 select-none">|</span>

          <a
            href="https://www.facebook.com/hieu.vo.havi.2712/?locale=vi_VN"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 hover:text-terminal-green transition-colors"
          >
            <FaFacebook className="w-3.5 h-3.5" />
            <span>Facebook</span>
          </a>
          <span className="text-slate-700 select-none">|</span>

          <a
            href="https://www.instagram.com/havi.2712/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 hover:text-terminal-green transition-colors"
          >
            <FaInstagram className="w-3.5 h-3.5" />
            <span>Instagram</span>
          </a>
          <span className="text-slate-700 select-none">|</span>

          <a
            href="mailto:hieuvo1227@gmail.com"
            className="flex items-center gap-1.5 hover:text-terminal-green transition-colors"
          >
            <FaEnvelope className="w-3.5 h-3.5" />
            <span>Email</span>
          </a>
        </div>

      </div>
    </footer>
  );
}
