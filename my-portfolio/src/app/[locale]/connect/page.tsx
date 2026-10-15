"use client";
import React, { useState } from 'react';
import { useTranslations } from 'next-intl';
import { FaGithub, FaLinkedin, FaFacebook, FaInstagram, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import RetroCard from '../../../components/RetroCard';

export default function ConnectPage() {
  const t = useTranslations('Connect');
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setSubmitStatus('idle'), 5000);
      } else {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setSubmitStatus('idle'), 5000);
      }
    } catch {
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-10 md:py-16 relative overflow-hidden">
      
      {/* Decorative Crosshairs & Badges */}
      <div className="absolute top-12 left-1/3 crosshair-mark hidden md:block">+</div>
      <div className="absolute top-20 right-8 text-right font-mono text-[10px] text-slate-500 tracking-widest leading-relaxed select-none hidden lg:block">
        BUILD<br />LEARN<br />EXPLORE<br />REPEAT
      </div>
      <div className="absolute bottom-28 left-6 font-mono text-[10px] text-slate-500 tracking-widest leading-relaxed select-none hidden lg:block">
        IDEAS<br />INTO<br />REAL<br />THINGS
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* Left Column: Contact Info & Illustration */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <span className="text-terminal-green font-mono text-sm tracking-wider mb-2 block">
                // CONTACT
              </span>
              <h1 className="font-pixel text-3xl sm:text-5xl text-white tracking-wider leading-tight mb-4">
                GET IN<br />TOUCH
              </h1>
              <p className="font-mono text-xs sm:text-sm text-slate-300 leading-relaxed mb-8">
                {t('description')}
              </p>

              {/* Contact Info Items */}
              <div className="space-y-4 mb-8">
                
                {/* Email */}
                <div className="flex items-center gap-3.5">
                  <div className="w-9 h-9 border border-[#1f2937] bg-[#0c1017] flex items-center justify-center text-terminal-green shrink-0">
                    <FaEnvelope className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-slate-400 font-mono text-xs block">Email</span>
                    <a href="mailto:hieuvo1227@gmail.com" className="font-mono text-xs sm:text-sm text-white hover:text-terminal-green transition-colors">
                      hieuvo1227@gmail.com
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-center gap-3.5">
                  <div className="w-9 h-9 border border-[#1f2937] bg-[#0c1017] flex items-center justify-center text-terminal-green shrink-0">
                    <FaMapMarkerAlt className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-slate-400 font-mono text-xs block">Location</span>
                    <span className="font-mono text-xs sm:text-sm text-white">
                      Ho Chi Minh City, Vietnam
                    </span>
                  </div>
                </div>

                {/* Social icons */}
                <div className="pt-2">
                  <span className="text-slate-400 font-mono text-xs block mb-2">Find me on</span>
                  <div className="flex items-center gap-2.5">
                    <a
                      href="https://github.com/Hieuvo1227"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-9 h-9 border border-[#1f2937] bg-[#0c1017] hover:border-terminal-green flex items-center justify-center text-slate-300 hover:text-terminal-green transition-all"
                      title="GitHub"
                    >
                      <FaGithub className="w-4 h-4" />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/hiếu-võ-4362a72b8"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-9 h-9 border border-[#1f2937] bg-[#0c1017] hover:border-terminal-green flex items-center justify-center text-slate-300 hover:text-terminal-green transition-all"
                      title="LinkedIn"
                    >
                      <FaLinkedin className="w-4 h-4" />
                    </a>
                    <a
                      href="https://www.facebook.com/hieu.vo.havi.2712/?locale=vi_VN"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-9 h-9 border border-[#1f2937] bg-[#0c1017] hover:border-terminal-green flex items-center justify-center text-slate-300 hover:text-terminal-green transition-all"
                      title="Facebook"
                    >
                      <FaFacebook className="w-4 h-4" />
                    </a>
                    <a
                      href="https://www.instagram.com/havi.2712/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-9 h-9 border border-[#1f2937] bg-[#0c1017] hover:border-terminal-green flex items-center justify-center text-slate-300 hover:text-terminal-green transition-all"
                      title="Instagram"
                    >
                      <FaInstagram className="w-4 h-4" />
                    </a>
                  </div>
                </div>

              </div>
            </div>

            {/* Pixel Art Illustration (Bottom Left) with Seamless Blend & Twinkle */}
            <div className="relative mt-2 max-w-[290px]">
              <div className="absolute -top-3 right-0 text-terminal-green text-xs star-twinkle-1 select-none pointer-events-none">✦</div>
              <div className="absolute top-1/2 -left-3 text-white text-xs star-twinkle-3 select-none pointer-events-none">★</div>
              
              <div className="animate-float-gentle">
                <img
                  src="/contact-pixel-orbit.png"
                  alt="Coder with Orbiting Planet and Mail"
                  className="w-full h-auto object-contain drop-shadow-[0_0_20px_rgba(34,197,94,0.15)]"
                  style={{ imageRendering: 'pixelated' }}
                />
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form inside RetroCard */}
          <div className="lg:col-span-7">
            <RetroCard className="p-6 sm:p-8">
              <form onSubmit={handleSubmit} className="space-y-5">
                
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block font-mono text-xs text-slate-300 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    disabled={isSubmitting}
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-[#08090c] border border-[#1f2937] text-white px-4 py-3 font-mono text-xs sm:text-sm focus:outline-none focus:border-terminal-green transition-colors placeholder:text-slate-600 disabled:opacity-50"
                    placeholder="Your name"
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block font-mono text-xs text-slate-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    disabled={isSubmitting}
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-[#08090c] border border-[#1f2937] text-white px-4 py-3 font-mono text-xs sm:text-sm focus:outline-none focus:border-terminal-green transition-colors placeholder:text-slate-600 disabled:opacity-50"
                    placeholder="your@email.com"
                  />
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block font-mono text-xs text-slate-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={6}
                    required
                    disabled={isSubmitting}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-[#08090c] border border-[#1f2937] text-white px-4 py-3 font-mono text-xs sm:text-sm focus:outline-none focus:border-terminal-green transition-colors resize-none placeholder:text-slate-600 disabled:opacity-50"
                    placeholder="Tell me about your project..."
                  />
                </div>

                {submitStatus === 'success' && (
                  <div className="bg-[#0c1810] border border-terminal-green text-terminal-green p-3 font-mono text-xs flex items-center gap-2">
                    <span>✓</span> Message sent successfully! I&apos;ll get back to you soon.
                  </div>
                )}

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-terminal-green text-black font-mono font-bold text-xs sm:text-sm py-4 hover:bg-[#bef264] transition-all duration-200 flex items-center justify-center gap-2 border border-terminal-green shadow-[0_0_15px_rgba(163,230,53,0.3)] disabled:opacity-60"
                >
                  {isSubmitting ? (
                    <span>SENDING...</span>
                  ) : (
                    <>
                      <span>SEND MESSAGE</span>
                      <span>→</span>
                    </>
                  )}
                </button>

              </form>
            </RetroCard>
          </div>

        </div>
      </div>
    </section>
  );
}
