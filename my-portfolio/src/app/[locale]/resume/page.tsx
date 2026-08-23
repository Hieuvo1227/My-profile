"use client";
import React, { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';

export default function ResumePage() {
  const t = useTranslations('Resume');
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Khóa cuộn trang khi mở modal
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isModalOpen]);

  return (
    <section className="py-24 relative overflow-hidden min-h-screen">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-6">
          <div className="w-full md:flex-1">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-2">
              {t('title')} <span className="text-purple-400">{t('titleHighlight')}</span>
            </h2>
            <p className="text-slate-400 text-lg">
              {t('description')}
            </p>
          </div>
          <a 
            href="/HieuVo_CV.pdf" 
            target="_blank" 
            rel="noopener noreferrer"
            className="shrink-0 bg-purple-600/20 text-purple-400 border border-purple-500/50 hover:bg-purple-600 hover:text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 flex items-center gap-2 group shadow-[0_0_15px_rgba(147,51,234,0.2)] hover:shadow-[0_0_20px_rgba(147,51,234,0.4)]"
          >
            <svg className="w-5 h-5 group-hover:-translate-y-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
            {t('download')}
          </a>
        </div>

        {/* Thumbnail Preview */}
        <div 
          onClick={() => setIsModalOpen(true)}
          className="w-full max-w-2xl mx-auto h-[400px] sm:h-[500px] relative rounded-xl overflow-hidden border border-purple-900/50 shadow-[0_0_30px_rgba(192,132,252,0.1)] group hover:border-purple-500/80 hover:shadow-[0_0_40px_rgba(192,132,252,0.2)] transition-all duration-300 cursor-pointer bg-white"
        >
          {/* Magnifying Glass Overlay */}
          <div className="absolute inset-0 bg-[#08080f]/40 z-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-[2px]">
            <div className="bg-purple-600 text-white rounded-full p-4 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 shadow-[0_0_20px_rgba(147,51,234,0.5)] flex items-center gap-2">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
              </svg>
              <span className="font-semibold pr-2">Click to View CV</span>
            </div>
          </div>
          
          {/* PDF Preview (scaled down and non-interactive) */}
          <div className="absolute inset-0 bg-[#08080f] flex items-center justify-center -z-10">
            <div className="w-10 h-10 border-4 border-purple-600 border-t-transparent rounded-full animate-spin"></div>
          </div>
          <iframe 
            src="/HieuVo_CV.pdf#toolbar=0&navpanes=0&scrollbar=0&view=FitH" 
            className="w-full h-full lg:h-[150%] relative z-10 pointer-events-none origin-top scale-100"
            title="Hieu Vo CV Preview"
          ></iframe>
        </div>

      </div>

      {/* Fullscreen Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-md p-4 sm:p-6 lg:p-8 transition-all">
          <div className="relative w-full max-w-6xl h-full flex flex-col bg-[#11111c] border border-purple-500/30 rounded-2xl overflow-hidden shadow-[0_0_50px_rgba(192,132,252,0.2)] animate-in fade-in zoom-in-95 duration-300">
            
            {/* Modal Header */}
            <div className="flex justify-between items-center p-4 border-b border-purple-900/30 bg-[#0b0b14] shrink-0">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <svg className="w-6 h-6 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                {t('title')}
              </h3>
              <div className="flex gap-4 items-center">
                <a 
                  href="/HieuVo_CV.pdf" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-purple-400 hover:text-white transition-colors flex items-center gap-2 text-sm font-medium mr-4"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                  <span className="hidden sm:inline">Open in new tab</span>
                </a>
                <button 
                  onClick={() => setIsModalOpen(false)}
                  className="text-slate-400 hover:text-rose-400 transition-colors bg-[#1a1a24] p-1.5 rounded-lg hover:bg-[#2a1a24]"
                >
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Modal Content */}
            <div className="flex-1 w-full bg-[#1e1e2d] relative overflow-hidden">
              <iframe 
                src="/HieuVo_CV.pdf#view=FitH" 
                className="w-full h-full absolute inset-0 rounded-b-2xl border-none"
                title="Hieu Vo CV Full"
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
