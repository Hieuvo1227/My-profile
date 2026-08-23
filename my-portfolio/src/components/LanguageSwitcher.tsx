"use client";
import React, { useTransition } from 'react';
import {usePathname, useRouter} from '../i18n/routing';
import {useLocale} from 'next-intl';

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  const toggleLanguage = () => {
    const nextLocale = locale === 'en' ? 'vi' : 'en';
    startTransition(() => {
      router.replace(pathname, {locale: nextLocale});
    });
  };

  return (
    <button 
      onClick={toggleLanguage}
      disabled={isPending}
      className="ml-4 px-3 py-1.5 rounded-md border border-purple-500/30 hover:border-purple-500/80 hover:bg-purple-600/10 text-slate-300 transition-all duration-300 font-medium text-sm flex items-center gap-1.5"
    >
      <span className={locale === 'en' ? 'text-purple-400 font-bold' : 'opacity-70'}>EN</span>
      <span className="text-slate-600 font-light">|</span>
      <span className={locale === 'vi' ? 'text-purple-400 font-bold' : 'opacity-70'}>VI</span>
    </button>
  );
}
