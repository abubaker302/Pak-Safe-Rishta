import React, { useState, useRef } from 'react';
import { Camera, CreditCard, ChevronRight, ChevronLeft, CheckCircle2, Upload, X, ShieldCheck } from 'lucide-react';
import { Language } from '../types';

interface VerificationProps {
  onComplete: () => void;
  lang: Language;
}

const Verification: React.FC<VerificationProps> = ({ onComplete, lang }) => {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [frontImage, setFrontImage] = useState<string | null>(null);
  const [backImage, setBackImage] = useState<string | null>(null);
  const [faceImage, setFaceImage] = useState<string | null>(null);
  
  const frontInputRef = useRef<HTMLInputElement>(null);
  const backInputRef = useRef<HTMLInputElement>(null);
  const faceInputRef = useRef<HTMLInputElement>(null);

  const t = {
    en: {
      title: "Identity Verification",
      subtitle: "Government database verification is mandatory",
      step1: "Step 1: CNIC Scan",
      step1Desc: "Scan both sides of your Identity Card",
      step2: "Step 2: Face Verification",
      step2Desc: "Take a selfie for live verification",
      step3: "Step 3: Review & Terms",
      step3Desc: "Agree to safe community standards",
      front: "Front of CNIC",
      back: "Back of CNIC",
      privacy: "Your CNIC data is encrypted and only used for NADRA verification.",
      privacyTitle: "Privacy Note",
      next: "Next Step",
      complete: "Complete Verification",
      tap: "TAP TO CAPTURE",
      accurate: "I confirm that all provided information is accurate.",
      guardian: "I agree to allow my guardian to monitor my activity."
    },
    ur: {
      title: "شناختی تصدیق",
      subtitle: "سرکاری ڈیٹا بیس سے تصدیق لازمی ہے",
      step1: "پہلا مرحلہ: شناختی کارڈ اسکین",
      step1Desc: "اپنے شناختی کارڈ کے دونوں اطراف اسکین کریں",
      step2: "دوسرا مرحلہ: چہرے کی تصدیق",
      step2Desc: "لائیو تصدیق کے لیے اپنی سیلفی لیں",
      step3: "تیسرا مرحلہ: شرائط و ضوابط",
      step3Desc: "کمیونٹی کے محفوظ معیارات پر اتفاق کریں",
      front: "شناختی کارڈ کا سامنے والا حصہ",
      back: "شناختی کارڈ کا پچھلا حصہ",
      privacy: "آپ کا شناختی کارڈ ڈیٹا انکرپٹڈ ہے اور صرف نادرا کی تصدیق کے لیے استعمال ہوتا ہے۔",
      privacyTitle: "پرائیویسی نوٹ",
      next: "اگلا قدم",
      complete: "تصدیق مکمل کریں",
      tap: "تصویر لینے کے لیے تھپتھپائیں",
      accurate: "میں تصدیق کرتا ہوں کہ فراہم کردہ تمام معلومات درست ہیں۔",
      guardian: "میں اپنے سرپرست کو اپنی سرگرمی مانیٹر کرنے کی اجازت دیتا ہوں۔"
    }
  }[lang];

  const nextStep = () => {
    if (step === 1 && (!frontImage || !backImage)) {
      alert(lang === 'ur' ? "براہ کرم جاری رکھنے کے لیے شناختی کارڈ کے دونوں اطراف اپ لوڈ کریں۔" : "Please upload both sides of CNIC.");
      return;
    }
    if (step === 2 && !faceImage) {
      alert(lang === 'ur' ? "براہ کرم تصدیق کے لیے سیلفی لیں۔" : "Please take a selfie.");
      return;
    }
    if (step === 3) {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        onComplete();
      }, 2000);
    } else {
      setStep(prev => prev + 1);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>, side: 'front' | 'back' | 'face') => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        if (side === 'front') setFrontImage(reader.result as string);
        else if (side === 'back') setBackImage(reader.result as string);
        else setFaceImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const removeImage = (e: React.MouseEvent, side: 'front' | 'back' | 'face') => {
    e.stopPropagation();
    if (side === 'front') setFrontImage(null);
    else if (side === 'back') setBackImage(null);
    else setFaceImage(null);
  };

  return (
    <div className="p-6 bg-white min-h-screen">
      <header className="mb-10 text-center">
        <div className="inline-block p-3 rounded-full bg-green-50 mb-4">
          {/* Use ShieldCheck instead of undefined ShieldIcon */}
          <ShieldCheck className="text-[#01411C]" size={32} />
        </div>
        <h2 className="text-2xl font-bold text-[#01411C]">{t.title}</h2>
        <p className="text-gray-500 text-sm mt-1">{t.subtitle}</p>
      </header>

      {/* Progress Bar */}
      <div className="flex justify-between items-center mb-12 relative px-2">
        <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gray-100 -translate-y-1/2 -z-10"></div>
        <div className={`absolute top-1/2 ${lang === 'ur' ? 'right-0' : 'left-0'} h-0.5 bg-[#01411C] -translate-y-1/2 -z-10 transition-all duration-500`} style={{ width: `${(step - 1) * 50}%` }}></div>
        {[1, 2, 3].map((s) => (
          <div 
            key={s} 
            className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-colors ${
              step >= s ? 'bg-[#01411C] text-white' : 'bg-gray-100 text-gray-400'
            }`}
          >
            {step > s ? <CheckCircle2 size={16} /> : s}
          </div>
        ))}
      </div>

      <div className="min-h-[300px]">
        {step === 1 && (
          <div className="animate-fade-in">
            <h3 className="text-lg font-bold mb-1">{t.step1}</h3>
            <p className="text-gray-600 text-sm mb-6">{t.step1Desc}</p>
            
            <input type="file" accept="image/*" className="hidden" ref={frontInputRef} onChange={(e) => handleFileChange(e, 'front')} />
            <input type="file" accept="image/*" className="hidden" ref={backInputRef} onChange={(e) => handleFileChange(e, 'back')} />

            <div className="grid grid-cols-2 gap-4 mb-8">
              <div 
                onClick={() => frontInputRef.current?.click()}
                className={`aspect-[1.6/1] border-2 border-dashed rounded-xl flex flex-col items-center justify-center relative overflow-hidden transition-all ${
                  frontImage ? 'border-[#01411C] bg-white' : 'border-gray-200 bg-gray-50 hover:bg-green-50'
                }`}
              >
                {frontImage ? (
                  <>
                    <img src={frontImage} className="w-full h-full object-cover" alt="Front" />
                    <button onClick={(e) => removeImage(e, 'front')} className="absolute top-1 right-1 p-1 bg-red-500 text-white rounded-full"><X size={12} /></button>
                  </>
                ) : (
                  <>
                    <CreditCard className="text-gray-400 mb-2" />
                    <span className="text-[10px] font-medium text-gray-500">{t.front}</span>
                    <Upload size={12} className="text-gray-300 mt-1" />
                  </>
                )}
              </div>

              <div 
                onClick={() => backInputRef.current?.click()}
                className={`aspect-[1.6/1] border-2 border-dashed rounded-xl flex flex-col items-center justify-center relative overflow-hidden transition-all ${
                  backImage ? 'border-[#01411C] bg-white' : 'border-gray-200 bg-gray-50 hover:bg-green-50'
                }`}
              >
                {backImage ? (
                  <>
                    <img src={backImage} className="w-full h-full object-cover" alt="Back" />
                    <button onClick={(e) => removeImage(e, 'back')} className="absolute top-1 right-1 p-1 bg-red-500 text-white rounded-full"><X size={12} /></button>
                  </>
                ) : (
                  <>
                    <CreditCard className="text-gray-400 mb-2" />
                    <span className="text-[10px] font-medium text-gray-500">{t.back}</span>
                    <Upload size={12} className="text-gray-300 mt-1" />
                  </>
                )}
              </div>
            </div>
            
            <div className="bg-amber-50 p-4 rounded-lg border border-amber-200 mb-6 shadow-sm">
              <p className="text-xs text-amber-950 flex items-start gap-2">
                <span className="font-bold underline">{t.privacyTitle}:</span> {t.privacy}
              </p>
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="animate-fade-in text-center">
            <h3 className="text-lg font-bold mb-1">{t.step2}</h3>
            <p className="text-gray-600 text-sm mb-6">{t.step2Desc}</p>
            
            <input type="file" accept="image/*" capture="user" className="hidden" ref={faceInputRef} onChange={(e) => handleFileChange(e, 'face')} />

            <div 
              onClick={() => faceInputRef.current?.click()}
              className={`w-48 h-48 rounded-full border-4 mx-auto mb-8 flex items-center justify-center relative bg-gray-50 overflow-hidden group cursor-pointer shadow-inner transition-all ${
                faceImage ? 'border-green-600' : 'border-[#01411C]'
              }`}
            >
              {faceImage ? (
                <img src={faceImage} className="w-full h-full object-cover" alt="Face" />
              ) : (
                <>
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#01411C]/5 to-transparent animate-scan"></div>
                  <Camera size={48} className="text-gray-300 group-hover:text-[#01411C] transition-colors" />
                  <div className="absolute bottom-4 text-[10px] font-bold text-[#01411C] opacity-0 group-hover:opacity-100 transition-opacity">{t.tap}</div>
                </>
              )}
            </div>
            
            <p className="text-xs text-gray-400">Keep a neutral expression and ensure good lighting.</p>
          </div>
        )}

        {step === 3 && (
          <div className="animate-fade-in">
            <h3 className="text-lg font-bold mb-1">{t.step3}</h3>
            <p className="text-gray-600 text-sm mb-6">{t.step3Desc}</p>
            
            <div className="space-y-4">
              <label className="flex gap-3 items-start p-4 bg-gray-50 rounded-xl border border-gray-100 cursor-pointer hover:bg-white transition-colors">
                <input type="checkbox" className="mt-1 accent-[#01411C] h-4 w-4" defaultChecked />
                <p className="text-xs text-gray-800 font-medium leading-relaxed">{t.accurate}</p>
              </label>
              <label className="flex gap-3 items-start p-4 bg-gray-50 rounded-xl border border-gray-100 cursor-pointer hover:bg-white transition-colors">
                <input type="checkbox" className="mt-1 accent-[#01411C] h-4 w-4" defaultChecked />
                <p className="text-xs text-gray-800 font-medium leading-relaxed">{t.guardian}</p>
              </label>
            </div>
          </div>
        )}
      </div>

      <button 
        onClick={nextStep}
        disabled={loading}
        className="w-full bg-[#01411C] text-white font-bold py-4 rounded-xl shadow-lg mt-8 flex items-center justify-center gap-2 active:scale-[0.98] transition-all"
      >
        {loading ? (
          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
        ) : (
          <>
            {step === 3 ? t.complete : t.next} 
            {lang === 'ur' ? <ChevronLeft size={18} /> : <ChevronRight size={18} />}
          </>
        )}
      </button>
    </div>
  );
};

const ShieldCheckIcon = () => (
  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2L4 5V11C4 16.19 7.41 21.05 12 22C16.59 21.05 20 16.19 20 11V5L12 2Z" fill="#01411C" />
    <path d="M9 12L11 14L15 10" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default Verification;