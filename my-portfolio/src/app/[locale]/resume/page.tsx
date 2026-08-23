import React from 'react';
import { useTranslations } from 'next-intl';

export default function ResumePage() {
  const t = useTranslations('Resume');

  return (
    <section className="py-24 relative overflow-hidden">
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

        <div className="w-full h-[85vh] min-h-[600px] relative rounded-xl overflow-hidden border border-purple-900/50 shadow-[0_0_30px_rgba(192,132,252,0.1)] group hover:border-purple-500/50 transition-colors duration-300">
          <div className="absolute inset-0 bg-[#08080f] flex items-center justify-center -z-10">
            <div className="w-10 h-10 border-4 border-purple-600 border-t-transparent rounded-full animate-spin"></div>
          </div>
          <iframe 
            src="/HieuVo_CV.pdf#toolbar=0&view=FitH" 
            className="w-full h-full relative z-10"
            title="Hieu Vo CV"
          ></iframe>
        </div>

      </div>
    </section>
  );
}
