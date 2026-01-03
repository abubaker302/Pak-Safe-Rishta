
import React from 'react';
import { Shield, Eye, ThumbsUp, Bell, Clock, ArrowUpRight, ArrowUpLeft } from 'lucide-react';
import { Language } from '../types';

interface GuardianProps {
  lang: Language;
}

const GuardianDashboard: React.FC<GuardianProps> = ({ lang }) => {
  const t = {
    en: {
      title: "Guardian Dashboard",
      monitoring: "Monitoring for",
      views: "Views",
      interests: "Interests",
      matches: "Matches",
      safeMode: "Safe Mode Active",
      safeModeDesc: "Contact sharing is restricted",
      recent: "Recent Activity",
      viewHistory: "View History",
      approval: "Request Approval",
      approvalDesc: "A new user has requested to view Amina's contact information. Your approval is required.",
      approve: "Approve",
      reject: "Reject"
    },
    ur: {
      title: "سرپرست ڈیش بورڈ",
      monitoring: "نگرانی برائے",
      views: "پروفائل کے مناظر",
      interests: "دلچسپیاں",
      matches: "مماثلتیں",
      safeMode: "محفوظ موڈ فعال ہے",
      safeModeDesc: "رابطہ شیئرنگ پر پابندی ہے",
      recent: "حالیہ سرگرمی",
      viewHistory: "تاریخ دیکھیں",
      approval: "درخواست کی منظوری",
      approvalDesc: "ایک نئے صارف نے آمنہ کے رابطے کی معلومات دیکھنے کی درخواست کی ہے۔ آپ کی منظوری درکار ہے۔",
      approve: "منظور کریں",
      reject: "مسترد کریں"
    }
  }[lang];

  const activities = [
    { type: 'view', user: 'Bilal Khan', time: '2 hours ago', status: lang === 'ur' ? 'پروفائل دیکھا' : 'Viewed Profile' },
    { type: 'interest', user: 'Sana Ahmed', time: '5 hours ago', status: lang === 'ur' ? 'دلچسپی بھیجی' : 'Sent Interest' },
    { type: 'match', user: 'Ahmed Ali', time: 'Yesterday', status: lang === 'ur' ? 'آپسی مماثلت' : 'Mutual Match' },
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      <header className="sarkari-green p-6 pt-10 text-white rounded-b-[40px] shadow-2xl">
        <div className="flex justify-between items-start mb-8">
          <div>
            <h1 className="text-2xl font-bold tracking-tight">{t.title}</h1>
            <p className="text-sm text-[#C5A059] font-medium">{t.monitoring}: Amina Khan</p>
          </div>
          <div className="w-12 h-12 bg-[#C5A059] rounded-2xl flex items-center justify-center text-[#01411C] font-black shadow-lg border-2 border-white/20">
            AK
          </div>
        </div>
        
        <div className="grid grid-cols-3 gap-3">
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 text-center border border-white/10 shadow-inner">
            <Eye size={20} className="mx-auto mb-2 text-[#C5A059]" />
            <div className="text-xl font-black">42</div>
            <div className="text-[9px] font-bold uppercase opacity-80 tracking-widest">{t.views}</div>
          </div>
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 text-center border border-white/10 shadow-inner">
            <ThumbsUp size={20} className="mx-auto mb-2 text-[#C5A059]" />
            <div className="text-xl font-black">12</div>
            <div className="text-[9px] font-bold uppercase opacity-80 tracking-widest">{t.interests}</div>
          </div>
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 text-center border border-white/10 shadow-inner">
            <Shield size={20} className="mx-auto mb-2 text-[#C5A059]" />
            <div className="text-xl font-black">3</div>
            <div className="text-[9px] font-bold uppercase opacity-80 tracking-widest">{t.matches}</div>
          </div>
        </div>
      </header>

      <div className="p-6">
        <div className="bg-white rounded-3xl p-5 shadow-sm mb-8 flex items-center justify-between border border-green-100/50">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-green-50 rounded-2xl text-[#01411C] shadow-inner">
              <Shield size={24} />
            </div>
            <div>
              <h3 className="text-sm font-black text-gray-800">{t.safeMode}</h3>
              <p className="text-[10px] text-gray-500 font-bold uppercase">{t.safeModeDesc}</p>
            </div>
          </div>
          <div className={`w-14 h-7 bg-[#01411C] rounded-full relative p-1 cursor-pointer shadow-inner`}>
            <div className={`w-5 h-5 bg-[#C5A059] rounded-full transition-all duration-300 ${lang === 'ur' ? 'mr-auto' : 'ml-auto'} shadow-md`}></div>
          </div>
        </div>

        <section className="mb-10">
          <div className="flex justify-between items-center mb-5">
            <h2 className="font-black text-[#01411C] flex items-center gap-2 uppercase tracking-tight">
              <Clock size={18} className="text-[#C5A059]" /> {t.recent}
            </h2>
            <button className="text-[10px] font-black text-[#C5A059] uppercase tracking-widest border-b border-[#C5A059] pb-0.5">{t.viewHistory}</button>
          </div>
          
          <div className="space-y-4">
            {activities.map((item, idx) => (
              <div key={idx} className="bg-white p-5 rounded-3xl shadow-sm border border-gray-100 flex items-center justify-between transition-transform active:scale-[0.98]">
                <div className="flex items-center gap-5">
                  <div className={`w-3 h-3 rounded-full ${item.type === 'match' ? 'bg-green-500' : 'bg-[#C5A059]'} shadow-sm`}></div>
                  <div>
                    <h4 className="text-sm font-black text-gray-800">{item.user}</h4>
                    <p className="text-[11px] text-gray-400 font-medium">{item.status} • {item.time}</p>
                  </div>
                </div>
                {lang === 'ur' ? <ArrowUpLeft size={16} className="text-gray-300" /> : <ArrowUpRight size={16} className="text-gray-300" />}
              </div>
            ))}
          </div>
        </section>

        <section>
          <div className="bg-[#01411C] rounded-3xl p-7 text-white relative overflow-hidden shadow-2xl border border-white/5">
            <div className="relative z-10">
              <Bell size={40} className="text-[#C5A059] mb-4 drop-shadow-lg" />
              <h3 className="text-xl font-black mb-2 tracking-tight">{t.approval}</h3>
              <p className="text-sm text-white/70 mb-6 font-medium leading-relaxed">{t.approvalDesc}</p>
              <div className="flex gap-4">
                <button className="flex-1 bg-[#C5A059] text-[#01411C] text-xs font-black py-4 rounded-2xl shadow-xl active:scale-95 transition-all">
                   {t.approve}
                </button>
                <button className="flex-1 bg-red-500/10 text-red-100 text-xs font-black py-4 rounded-2xl border border-red-500/30 hover:bg-red-500/20 transition-all">
                   {t.reject}
                </button>
              </div>
            </div>
            <div className={`absolute top-0 ${lang === 'ur' ? 'left-0' : 'right-0'} p-4 opacity-5 pointer-events-none`}>
               <Shield size={160} />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default GuardianDashboard;
