
import React from 'react';
import { ShieldCheck } from 'lucide-react';

interface WelcomeProps {
  onStart: () => void;
}

const Welcome: React.FC<WelcomeProps> = ({ onStart }) => {
  return (
    <div className="h-screen sarkari-green flex flex-col items-center justify-center px-8 text-center">
      <div className="w-24 h-24 bg-white/10 rounded-full flex items-center justify-center mb-6 border-2 border-[#C5A059]">
        <img 
          src="https://upload.wikimedia.org/wikipedia/commons/e/ef/State_emblem_of_Pakistan.svg" 
          alt="Gov Emblem" 
          className="w-16 h-16 brightness-0 invert"
        />
      </div>
      
      <h1 className="text-3xl font-bold text-white mb-2">Pak-Safe Rishta</h1>
      <p className="text-[#C5A059] font-medium tracking-wide text-sm mb-4">Hukumat-ee Tasdeeq Shuda</p>
      
      <p className="urdu-font text-white text-xl mb-8 leading-relaxed">
        رشتے اب ہوں احساسِ تحفظ اور سرکاری تصدیق کے ساتھ
      </p>

      <button 
        onClick={onStart}
        className="w-full bg-[#C5A059] text-[#01411C] font-bold py-4 rounded-xl shadow-lg hover:bg-yellow-500 transition-all text-lg mb-6"
      >
        Shuru Karein / شروع کریں
      </button>

      <div className="flex items-center gap-2 text-white/70 text-sm">
        <ShieldCheck size={18} className="text-[#C5A059]" />
        <span>Verified by NADRA</span>
      </div>
    </div>
  );
};

export default Welcome;
