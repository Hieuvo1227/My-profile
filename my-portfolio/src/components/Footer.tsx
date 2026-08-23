import React from 'react';
import { FaGithub, FaLinkedin, FaFacebook, FaInstagram, FaEnvelope } from 'react-icons/fa';
import { useTranslations } from 'next-intl';

export default function Footer() {
  const t = useTranslations('Footer');

  return (
    <footer className="bg-[#05050a] border-t border-purple-900/30 py-10 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900/5 via-fuchsia-900/5 to-purple-900/5"></div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col md:flex-row justify-between items-center">
        
        <div className="mb-6 md:mb-0 text-center md:text-left">
          <p className="text-slate-400 font-light">
            {t('designed')} <span className="text-purple-400 font-medium">Võ Hiếu</span>
          </p>
          <p className="text-slate-500 text-sm mt-1">{t('copyright')}</p>
        </div>

        <div className="flex space-x-6">
          <a href="https://github.com/Hieuvo1227" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors duration-300 hover:scale-110 transform">
            <span className="sr-only">GitHub</span>
            <FaGithub className="w-6 h-6" />
          </a>
          <a href="https://www.linkedin.com/in/hiếu-võ-4362a72b8" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors duration-300 hover:scale-110 transform">
            <span className="sr-only">LinkedIn</span>
            <FaLinkedin className="w-6 h-6" />
          </a>
          <a href="https://www.facebook.com/hieu.vo.havi.2712/?locale=vi_VN" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors duration-300 hover:scale-110 transform">
            <span className="sr-only">Facebook</span>
            <FaFacebook className="w-6 h-6" />
          </a>
          <a href="https://www.instagram.com/havi.2712/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors duration-300 hover:scale-110 transform">
            <span className="sr-only">Instagram</span>
            <FaInstagram className="w-6 h-6" />
          </a>
          <a href="mailto:hieuvo1227@gmail.com" className="text-slate-400 hover:text-white transition-colors duration-300 hover:scale-110 transform">
            <span className="sr-only">Email</span>
            <FaEnvelope className="w-6 h-6" />
          </a>
        </div>
      </div>
    </footer>
  );
}
