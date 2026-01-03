
import React from 'react';
import { ShieldCheck, Languages } from 'lucide-react';
import { Language } from '../types';

interface WelcomeProps {
  onStart: () => void;
  lang: Language;
  onToggleLang: () => void;
}

const Welcome: React.FC<WelcomeProps> = ({ onStart, lang, onToggleLang }) => {
  const content = {
    en: {
      title: "Pak-Safe Rishta",
      subtitle: "Government Verified",
      tagline: "Secure matchmaking with emotional safety and state verification.",
      cta: "Get Started",
      verified: "Verified by NADRA"
    },
    ur: {
      title: "پاک سیف رشتہ",
      subtitle: "حکومت سے تصدیق شدہ",
      tagline: "رشتے اب ہوں احساسِ تحفظ اور سرکاری تصدیق کے ساتھ",
      cta: "شروع کریں",
      verified: "نادرا سے تصدیق شدہ"
    }
  };

  const t = content[lang];

  return (
    <div className="h-screen sarkari-green flex flex-col items-center justify-center px-8 text-center relative">
      <button 
        onClick={onToggleLang}
        className="absolute top-10 right-6 flex items-center gap-2 bg-white/10 text-white px-3 py-1.5 rounded-full border border-white/20 text-xs font-bold"
      >
        <Languages size={14} />
        {lang === 'en' ? 'اردو' : 'English'}
      </button>

      <div className="w-24 h-24 bg-white/10 rounded-full flex items-center justify-center mb-6 border-2 border-[#C5A059] shadow-inner">
        <img 
          src="https://upload.wikimedia.org/wikipedia/commons/e/ef/State_emblem_of_Pakistan.svg" 
          alt="Gov Emblem" 
          className="w-16 h-16 brightness-0 invert"
        />
      </div>
      
      <h1 className={`font-bold text-white mb-2 ${lang === 'ur' ? 'text-4xl' : 'text-3xl'}`}>{t.title}</h1>
      <p className="text-[#C5A059] font-medium tracking-wide text-sm mb-4 uppercase">{t.subtitle}</p>
      
      <p className={`text-white text-xl mb-8 leading-relaxed px-4 ${lang === 'ur' ? 'font-medium' : 'font-light'}`}>
        {t.tagline}
      </p>

      <button 
        onClick={onStart}
        className="w-full bg-[#C5A059] text-[#01411C] font-bold py-4 rounded-xl shadow-lg hover:bg-yellow-500 transition-all text-lg mb-6 active:scale-95"
      >
        {t.cta}
      </button>

      <div className="flex items-center gap-2 text-white/70 text-sm">
        <ShieldCheck size={18} className="text-[#C5A059]" />
        <span>{t.verified}</span>
      </div>
    </div>
  );
};

export default Welcome;
