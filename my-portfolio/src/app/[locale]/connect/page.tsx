"use client";
import React, { useState } from 'react';
import { useTranslations } from 'next-intl';

export default function ConnectPage() {
  const t = useTranslations('Connect');
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Dùng chung API contact
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
        setTimeout(() => setSubmitStatus('idle'), 5000);
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error(error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {t('title')} <span className="text-purple-400">{t('titleHighlight')}</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            {t('description')}
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* Contact Info */}
          <div className="flex-1 space-y-6">
            <div className="bg-[#11111c] p-8 rounded-2xl border border-slate-800 flex items-start gap-6 group hover:border-purple-500/50 transition-all duration-300">
              <div className="w-14 h-14 rounded-full bg-purple-900/30 flex items-center justify-center text-purple-400 shrink-0 group-hover:scale-110 transition-transform shadow-[0_0_15px_rgba(147,51,234,0.3)]">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
              </div>
              <div>
                <h4 className="text-xl font-bold text-slate-200 mb-1">Email</h4>
                <p className="text-slate-400">hieuvo1227@gmail.com</p>
              </div>
            </div>
            
            <div className="bg-[#11111c] p-8 rounded-2xl border border-slate-800 flex items-start gap-6 group hover:border-purple-500/50 transition-all duration-300">
              <div className="w-14 h-14 rounded-full bg-purple-900/30 flex items-center justify-center text-purple-400 shrink-0 group-hover:scale-110 transition-transform shadow-[0_0_15px_rgba(147,51,234,0.3)]">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.242-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
              </div>
              <div>
                <h4 className="text-xl font-bold text-slate-200 mb-1">Location</h4>
                <p className="text-slate-400">Ho Chi Minh City, Vietnam</p>
              </div>
            </div>
            
            <div className="bg-[#11111c] p-8 rounded-2xl border border-slate-800 flex items-start gap-6 group hover:border-purple-500/50 transition-all duration-300">
              <div className="w-14 h-14 rounded-full bg-purple-900/30 flex items-center justify-center text-purple-400 shrink-0 group-hover:scale-110 transition-transform shadow-[0_0_15px_rgba(147,51,234,0.3)]">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" /></svg>
              </div>
              <div>
                <h4 className="text-xl font-bold text-slate-200 mb-1">{t('findMe')}</h4>
                <div className="flex flex-wrap gap-4 mt-2">
                  <a href="https://github.com/Hieuvo1227" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-purple-400 transition-colors">GitHub</a>
                  <a href="https://www.linkedin.com/in/hiếu-võ-4362a72b8" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-purple-400 transition-colors">LinkedIn</a>
                  <a href="https://www.facebook.com/hieu.vo.havi.2712/?locale=vi_VN" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-purple-400 transition-colors">Facebook</a>
                  <a href="https://www.instagram.com/havi.2712/" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-purple-400 transition-colors">Instagram</a>
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="flex-[1.5] bg-[#11111c] p-8 md:p-10 rounded-2xl border border-slate-800 relative overflow-hidden group">
            <div className="absolute -top-32 -right-32 w-64 h-64 bg-purple-600 rounded-full blur-[100px] opacity-10 group-hover:opacity-20 transition-opacity duration-500"></div>
            
            {submitStatus === 'success' && (
              <div className="absolute inset-0 bg-[#11111c]/90 backdrop-blur-sm z-20 flex flex-col items-center justify-center text-center p-6 animate-in fade-in duration-500">
                <div className="w-16 h-16 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center mb-4 border border-green-500/50">
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
                <p className="text-slate-300">Thank you for reaching out. I'll get back to you soon.</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <input 
                    type="text" 
                    id="name" 
                    required
                    disabled={isSubmitting}
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full bg-[#0b0b14] border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-colors disabled:opacity-50"
                    placeholder={t('namePlaceholder')}
                  />
                </div>
                <div className="space-y-2">
                  <input 
                    type="email" 
                    id="email" 
                    required
                    disabled={isSubmitting}
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full bg-[#0b0b14] border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-colors disabled:opacity-50"
                    placeholder={t('emailPlaceholder')}
                  />
                </div>
              </div>
              <div className="space-y-2">
                <textarea 
                  id="message" 
                  rows={5} 
                  required
                  disabled={isSubmitting}
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="w-full bg-[#0b0b14] border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-colors resize-none disabled:opacity-50"
                  placeholder={t('messagePlaceholder')}
                ></textarea>
              </div>

              {submitStatus === 'error' && (
                <p className="text-rose-500 text-sm font-medium">Failed to send message. Please try again.</p>
              )}

              <button 
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-purple-600 hover:bg-purple-500 text-white font-bold py-4 rounded-lg shadow-[0_0_20px_rgba(147,51,234,0.3)] hover:shadow-[0_0_25px_rgba(192,132,252,0.5)] transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    {t('send')}
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                  </>
                )}
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
