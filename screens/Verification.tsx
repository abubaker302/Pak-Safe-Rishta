
import React, { useState } from 'react';
import { Camera, CreditCard, UserCheck, ChevronRight, CheckCircle2 } from 'lucide-react';

interface VerificationProps {
  onComplete: () => void;
}

const Verification: React.FC<VerificationProps> = ({ onComplete }) => {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);

  const nextStep = () => {
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

  return (
    <div className="p-6 bg-white min-h-screen">
      <header className="mb-10 text-center">
        <div className="inline-block p-3 rounded-full bg-green-50 mb-4">
          <ShieldCheckIcon />
        </div>
        <h2 className="text-2xl font-bold text-[#01411C]">Identity Verification</h2>
        <p className="text-gray-500 text-sm mt-1">Sarkari database se tasdeeq lazmi hai</p>
      </header>

      {/* Progress Bar */}
      <div className="flex justify-between items-center mb-12 relative">
        <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gray-100 -translate-y-1/2 -z-10"></div>
        <div className={`absolute top-1/2 left-0 h-0.5 bg-[#01411C] -translate-y-1/2 -z-10 transition-all duration-500`} style={{ width: `${(step - 1) * 50}%` }}></div>
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
            <h3 className="text-lg font-bold mb-2">Step 1: CNIC Scan</h3>
            <p className="text-gray-600 text-sm mb-6 urdu-font leading-relaxed">اپنا شناختی کارڈ (فرنٹ اور بیک) اسکین کریں</p>
            
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="aspect-[1.6/1] border-2 border-dashed border-gray-200 rounded-xl flex flex-col items-center justify-center bg-gray-50 hover:bg-green-50 hover:border-[#01411C] cursor-pointer transition-colors">
                <CreditCard className="text-gray-400 mb-2" />
                <span className="text-[10px] font-medium text-gray-500">Front of CNIC</span>
              </div>
              <div className="aspect-[1.6/1] border-2 border-dashed border-gray-200 rounded-xl flex flex-col items-center justify-center bg-gray-50 hover:bg-green-50 hover:border-[#01411C] cursor-pointer transition-colors">
                <CreditCard className="text-gray-400 mb-2" />
                <span className="text-[10px] font-medium text-gray-500">Back of CNIC</span>
              </div>
            </div>
            
            <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200 mb-6">
              <p className="text-xs text-yellow-800 flex items-start gap-2">
                <span className="font-bold">Privacy Note:</span> Your CNIC data is encrypted and only used for NADRA verification.
              </p>
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="animate-fade-in text-center">
            <h3 className="text-lg font-bold mb-2">Step 2: Face Verification</h3>
            <p className="text-gray-600 text-sm mb-6 urdu-font leading-relaxed">چہرے کی تصدیق کے لیے ایک سیلفی لیں</p>
            
            <div className="w-48 h-48 rounded-full border-4 border-[#01411C] mx-auto mb-8 flex items-center justify-center relative bg-gray-100 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#01411C]/10 to-transparent animate-scan"></div>
              <Camera size={48} className="text-gray-300" />
            </div>
            
            <p className="text-xs text-gray-400">Keep a neutral expression and ensure good lighting.</p>
          </div>
        )}

        {step === 3 && (
          <div className="animate-fade-in">
            <h3 className="text-lg font-bold mb-2">Step 3: Review & Terms</h3>
            <p className="text-gray-600 text-sm mb-6 urdu-font leading-relaxed">شرائط و ضوابط پر اتفاق کریں</p>
            
            <div className="space-y-4">
              <div className="flex gap-3 items-start p-3 bg-gray-50 rounded-lg">
                <input type="checkbox" className="mt-1 accent-[#01411C]" defaultChecked />
                <p className="text-xs text-gray-600">I confirm that all provided information is accurate and matches my NADRA records.</p>
              </div>
              <div className="flex gap-3 items-start p-3 bg-gray-50 rounded-lg">
                <input type="checkbox" className="mt-1 accent-[#01411C]" defaultChecked />
                <p className="text-xs text-gray-600">I agree to allow my guardian to monitor my activity for safety reasons.</p>
              </div>
            </div>
          </div>
        )}
      </div>

      <button 
        onClick={nextStep}
        disabled={loading}
        className="w-full bg-[#01411C] text-white font-bold py-4 rounded-xl shadow-lg mt-8 flex items-center justify-center gap-2"
      >
        {loading ? (
          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
        ) : (
          <>
            {step === 3 ? 'Complete Verification' : 'Next Step'} 
            <ChevronRight size={18} />
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
