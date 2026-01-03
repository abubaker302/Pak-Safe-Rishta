
import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, ShieldCheck, Heart, MessageCircle, Info, Lock, CheckCircle, PhoneCall, ShieldQuestion, Clock } from 'lucide-react';
import { Profile, Language } from '../types';

interface ProfileDetailProps {
  profile: Profile;
  onBack: () => void;
  onChat: () => void;
  lang: Language;
}

const ProfileDetail: React.FC<ProfileDetailProps> = ({ profile, onBack, onChat, lang }) => {
  const [photoLocked, setPhotoLocked] = useState(false);
  const [interestSent, setInterestSent] = useState(false);
  const [contactStatus, setContactStatus] = useState<'IDLE' | 'PENDING' | 'APPROVED'>('IDLE');

  const t = {
    en: {
      verifiedBadge: "GOVERNMENT VERIFIED",
      identityConfirmed: "Identity Confirmed by NADRA",
      personalBackground: "Personal Background",
      profession: "Profession",
      education: "Education",
      caste: "Caste / Sect",
      location: "Location",
      contactTitle: "Contact Information",
      contactDesc: "Phone numbers are hidden for safety. Request access to see family details.",
      requestBtn: "Request Contact Info",
      pendingBtn: "Pending Guardian Approval...",
      approvedBtn: "Verified Number",
      pendingNote: "Your guardian has been notified to approve this request.",
      about: "About Me",
      family: "Family Information",
      familyType: "Family Type",
      incomeStatus: "Income Status",
      interestBtn: "Express Interest",
      interestSent: "Interest Sent",
      monitor: "Activity is monitored by Guardian"
    },
    ur: {
      verifiedBadge: "حکومت سے تصدیق شدہ",
      identityConfirmed: "شناخت کی تصدیق نادرا سے ہو چکی ہے",
      personalBackground: "ذاتی پس منظر",
      profession: "پیشہ",
      education: "تعلیم",
      caste: "ذات / مسلک",
      location: "مقام",
      contactTitle: "رابطہ کی معلومات",
      contactDesc: "تحفظ کے لیے فون نمبرز پوشیدہ ہیں۔ فیملی کی تفصیلات دیکھنے کے لیے رسائی طلب کریں۔",
      requestBtn: "رابطہ کی معلومات طلب کریں",
      pendingBtn: "سرپرست کی منظوری کا انتظار...",
      approvedBtn: "تصدیق شدہ نمبر",
      pendingNote: "آپ کے سرپرست کو اس درخواست کی منظوری کے لیے مطلع کر دیا گیا ہے۔",
      about: "میرے بارے میں",
      family: "خاندانی معلومات",
      familyType: "خاندان کی قسم",
      incomeStatus: "آمدنی کی صورتحال",
      interestBtn: "دلچسپی کا اظہار کریں",
      interestSent: "درخواست بھیج دی گئی",
      monitor: "تمام سرگرمیاں سرپرست کی نگرانی میں ہیں"
    }
  }[lang];

  const handleRequestContact = () => {
    setContactStatus('PENDING');
  };

  return (
    <div className="bg-white min-h-screen">
      <div className="relative h-[450px]">
        <img 
          src={profile.image} 
          alt={profile.name} 
          className={`w-full h-full object-cover transition-all duration-700 ${photoLocked ? 'blur-2xl' : ''}`}
        />
        <button 
          onClick={onBack}
          className={`absolute top-10 ${lang === 'ur' ? 'right-4' : 'left-4'} p-2 bg-black/30 backdrop-blur rounded-full text-white hover:bg-black/50 transition-colors`}
        >
          {lang === 'ur' ? <ArrowRight size={20} /> : <ArrowLeft size={20} />}
        </button>
        
        <div className={`absolute top-10 ${lang === 'ur' ? 'left-4' : 'right-4'} flex gap-2`}>
           <button 
            onClick={() => setPhotoLocked(!photoLocked)}
            className="p-2 bg-black/30 backdrop-blur rounded-full text-white"
            title={photoLocked ? "Show Photo" : "Hide Photo"}
          >
            {photoLocked ? <Lock size={20} /> : <ShieldCheck size={20} />}
          </button>
        </div>

        <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-[#01411C] via-[#01411C]/60 to-transparent">
          <div className="flex items-end justify-between">
            <div>
              <div className="bg-[#C5A059] text-[#01411C] text-[10px] font-bold px-3 py-1 rounded-full inline-block mb-3 shadow-sm border border-[#C5A059]/30">
                {t.verifiedBadge}
              </div>
              <h1 className="text-4xl font-bold text-white leading-none mb-2">{profile.name}, {profile.age}</h1>
              <p className="text-white/90 font-medium mt-1 flex items-center gap-1.5"><CheckCircle size={16} className="text-[#C5A059]" /> {t.identityConfirmed}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="px-6 py-8 space-y-8">
        <section>
          <h2 className="text-xl font-bold text-[#01411C] mb-4 flex items-center gap-2">
            <Info size={18} className="text-[#C5A059]" /> {t.personalBackground}
          </h2>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-gray-50 p-4 rounded-2xl border border-gray-100 shadow-sm">
              <p className="text-[10px] text-gray-400 uppercase font-bold mb-1 tracking-wider">{t.profession}</p>
              <p className="text-sm font-bold text-gray-800">{profile.profession}</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-2xl border border-gray-100 shadow-sm">
              <p className="text-[10px] text-gray-400 uppercase font-bold mb-1 tracking-wider">{t.education}</p>
              <p className="text-sm font-bold text-gray-800">{profile.education}</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-2xl border border-gray-100 shadow-sm">
              <p className="text-[10px] text-gray-400 uppercase font-bold mb-1 tracking-wider">{t.caste}</p>
              <p className="text-sm font-bold text-gray-800">{profile.caste}</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-2xl border border-gray-100 shadow-sm">
              <p className="text-[10px] text-gray-400 uppercase font-bold mb-1 tracking-wider">{t.location}</p>
              <p className="text-sm font-bold text-gray-800">{profile.location}</p>
            </div>
          </div>
        </section>

        <section className="bg-[#01411C]/5 border border-[#01411C]/10 rounded-3xl p-6 shadow-inner">
          <div className="flex items-start gap-4 mb-5">
            <div className="p-3 bg-white rounded-2xl shadow-md border border-[#01411C]/10">
              <ShieldQuestion className="text-[#01411C]" size={28} />
            </div>
            <div>
              <h3 className="text-sm font-bold text-[#01411C] mb-1">{t.contactTitle}</h3>
              <p className="text-[11px] text-gray-600 leading-normal font-medium">{t.contactDesc}</p>
            </div>
          </div>
          
          {contactStatus === 'IDLE' ? (
            <button 
              onClick={handleRequestContact}
              className="w-full bg-[#01411C] text-white py-4 rounded-2xl font-bold text-sm flex items-center justify-center gap-2 hover:bg-green-900 shadow-lg active:scale-95 transition-all"
            >
              <PhoneCall size={18} />
              {t.requestBtn}
            </button>
          ) : contactStatus === 'PENDING' ? (
            <div className="w-full bg-white border-2 border-dashed border-gray-200 py-4 rounded-2xl text-gray-400 font-bold text-sm flex items-center justify-center gap-2">
              <Clock size={18} className="animate-pulse" />
              {t.pendingBtn}
            </div>
          ) : (
            <div className="w-full bg-green-700 text-white py-4 rounded-2xl font-bold text-sm flex items-center justify-center gap-2 shadow-inner">
              <CheckCircle size={18} />
              +92 3XX XXXXXXX ({t.approvedBtn})
            </div>
          )}
          
          {contactStatus === 'PENDING' && (
            <p className="text-[10px] text-center text-orange-700 font-bold mt-3 bg-orange-50 py-2 rounded-lg border border-orange-100 uppercase tracking-tighter">
              {t.pendingNote}
            </p>
          )}
        </section>

        <section>
          <h2 className="text-xl font-bold text-[#01411C] mb-4">{t.about}</h2>
          <div className={`p-4 bg-gray-50 rounded-2xl border-s-4 border-[#C5A059] ${lang === 'ur' ? 'font-medium leading-loose' : 'italic'}`}>
             "{profile.bio}"
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold text-[#01411C] mb-4">{t.family}</h2>
          <div className="bg-green-50/60 p-5 rounded-2xl border border-green-100 shadow-sm space-y-4">
            <div className="flex justify-between items-center pb-3 border-b border-green-200/50">
              <span className="text-xs text-gray-500 font-bold uppercase tracking-wider">{t.familyType}</span>
              <span className="text-sm font-black text-[#01411C]">{profile.familyType}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-xs text-gray-500 font-bold uppercase tracking-wider">{t.incomeStatus}</span>
              <span className="text-sm font-black text-[#01411C]">{profile.incomeRange}</span>
            </div>
          </div>
        </section>

        <div className="flex gap-4 pt-4 sticky bottom-6 z-20">
          <button 
            onClick={() => setInterestSent(!interestSent)}
            className={`flex-1 py-4 rounded-2xl font-bold flex items-center justify-center gap-2 transition-all shadow-xl active:scale-95 ${
              interestSent 
              ? 'bg-gray-200 text-gray-500' 
              : 'bg-[#C5A059] text-[#01411C] hover:bg-[#b8914d]'
            }`}
          >
            <Heart size={20} fill={interestSent ? 'currentColor' : 'none'} />
            {interestSent ? t.interestSent : t.interestBtn}
          </button>
          
          <button 
            onClick={onChat}
            className="w-16 h-16 bg-[#01411C] text-[#C5A059] rounded-2xl flex items-center justify-center shadow-xl hover:bg-green-900 active:scale-95 transition-all border-2 border-[#C5A059]/20"
          >
            <MessageCircle size={28} />
          </button>
        </div>
        
        <p className="text-[10px] text-center text-gray-400 font-black uppercase tracking-[0.2em] pb-10">
          {t.monitor}
        </p>
      </div>
    </div>
  );
};

export default ProfileDetail;
