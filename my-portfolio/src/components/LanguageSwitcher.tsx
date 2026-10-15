"use client";
import React, { useTransition } from 'react';
import { usePathname, useRouter } from '../i18n/routing';
import { useLocale } from 'next-intl';

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  const switchLocale = (targetLocale: string) => {
    if (locale === targetLocale || isPending) return;
    startTransition(() => {
      router.replace(pathname, { locale: targetLocale });
    });
  };

  return (
    <div className="flex items-center gap-1.5 font-mono text-sm tracking-wider">
      <button 
        onClick={() => switchLocale('en')}
        disabled={isPending}
        className={`transition-colors duration-200 ${locale === 'en' ? 'text-terminal-green font-bold' : 'text-slate-400 hover:text-white'}`}
      >
        EN
      </button>
      <span className="text-slate-600">|</span>
      <button 
        onClick={() => switchLocale('vi')}
        disabled={isPending}
        className={`transition-colors duration-200 ${locale === 'vi' ? 'text-terminal-green font-bold' : 'text-slate-400 hover:text-white'}`}
      >
        VI
      </button>
    </div>
  );
}
