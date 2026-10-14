"use client";
import React, { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';

const CV_URL = "/HieuVo_CV.pdf";

export default function ResumePage() {
  const t = useTranslations('Resume');
  const [isModalOpen, setIsModalOpen] = useState(false);

  /* Lock body scroll when modal is open */
  useEffect(() => {
    document.body.style.overflow = isModalOpen ? 'hidden' : 'unset';
    return () => { document.body.style.overflow = 'unset'; };
  }, [isModalOpen]);

  return (
    <section className="py-24 relative overflow-hidden min-h-screen">
      {/* Background glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-900/10 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-fuchsia-900/10 rounded-full blur-3xl -z-10" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* ── Header ── */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-2">
              {t('title')} <span className="text-purple-400">{t('titleHighlight')}</span>
            </h2>
            <p className="text-slate-400 text-lg">{t('description')}</p>
          </div>

          <a
            href={CV_URL}
            download
            className="shrink-0 inline-flex items-center gap-2 bg-purple-600/20 text-purple-400 border border-purple-500/50
                       hover:bg-purple-600 hover:text-white font-semibold py-3 px-6 rounded-xl
                       transition-all duration-300 group shadow-[0_0_15px_rgba(147,51,234,0.2)]
                       hover:shadow-[0_0_25px_rgba(147,51,234,0.5)]"
          >
            <svg className="w-5 h-5 group-hover:-translate-y-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            {t('download')}
          </a>
        </div>

        {/* ── CV Preview Card ── */}
        <div
          onClick={() => setIsModalOpen(true)}
          className="relative w-full max-w-2xl mx-auto cursor-pointer group"
          role="button"
          aria-label="Click to view full CV"
        >
          {/* Glow border on hover */}
          <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-br from-purple-600/40 via-transparent to-fuchsia-600/40
                          opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

          <div className="relative rounded-2xl overflow-hidden border border-purple-900/50 group-hover:border-purple-500/60
                          shadow-[0_0_30px_rgba(192,132,252,0.08)] group-hover:shadow-[0_0_50px_rgba(192,132,252,0.2)]
                          transition-all duration-300 bg-[#0b0b14]">

            {/* Instant high-res rendered preview */}
            <div className="relative w-full bg-white">
              <img
                src="/cv-preview.png"
                alt="Hieu Vo CV Preview"
                className="w-full h-auto object-cover block"
                loading="eager"
              />
            </div>

            {/* Hover overlay */}
            <div className="absolute inset-0 bg-[#08080f]/50 z-20 flex items-center justify-center
                            opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-[2px]">
              <div className="flex items-center gap-3 bg-purple-600 text-white rounded-full py-3 px-6
                              transform translate-y-3 group-hover:translate-y-0 transition-all duration-300
                              shadow-[0_0_25px_rgba(147,51,234,0.6)] font-semibold">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                View Full CV
              </div>
            </div>
          </div>

          {/* "Click to expand" hint */}
          <p className="text-center text-slate-500 text-sm mt-4 flex items-center justify-center gap-2 group-hover:text-purple-400 transition-colors">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
            </svg>
            Click to expand full view
          </p>
        </div>

      </div>

      {/* ── Fullscreen Modal ── */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-md p-4 sm:p-6 lg:p-8"
          onClick={(e) => { if (e.target === e.currentTarget) setIsModalOpen(false); }}
        >
          <div className="relative w-full max-w-6xl h-full flex flex-col bg-[#11111c] border border-purple-500/30
                          rounded-2xl overflow-hidden shadow-[0_0_60px_rgba(192,132,252,0.25)]">

            {/* Modal header */}
            <div className="flex justify-between items-center p-4 border-b border-purple-900/30 bg-[#0b0b14] shrink-0">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <svg className="w-5 h-5 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414A1 1 0 0119 8.414V19a2 2 0 01-2 2z" />
                </svg>
                {t('title')} {t('titleHighlight')}
              </h3>
              <div className="flex items-center gap-3">
                <a
                  href={CV_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-400 hover:text-white transition-colors flex items-center gap-1.5 text-sm font-medium"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                  <span className="hidden sm:inline">Open in new tab</span>
                </a>
                <a
                  href={CV_URL}
                  download
                  className="text-slate-400 hover:text-purple-400 transition-colors flex items-center gap-1.5 text-sm font-medium"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                  <span className="hidden sm:inline">Download</span>
                </a>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="text-slate-400 hover:text-rose-400 transition-colors bg-[#1a1a24] p-1.5 rounded-lg hover:bg-[#2a1a24]"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Modal PDF viewer */}
            <div className="flex-1 relative bg-[#1e1e2d] overflow-hidden">
              <iframe
                src={`${CV_URL}#view=FitH`}
                className="w-full h-full border-none"
                title="Hieu Vo CV Full"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
