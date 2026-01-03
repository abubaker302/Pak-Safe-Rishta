
import React, { useState } from 'react';
import { Search, Filter, ShieldCheck, MapPin, Briefcase, SearchX } from 'lucide-react';
import { Profile, Language } from '../types';

interface HomeFeedProps {
  profiles: Profile[];
  onSelectProfile: (profile: Profile) => void;
  lang: Language;
}

const HomeFeed: React.FC<HomeFeedProps> = ({ profiles, onSelectProfile, lang }) => {
  const [searchTerm, setSearchTerm] = useState('');
  
  const t = {
    en: {
      title: "Pak-Safe Rishta",
      verifiedBadge: "Verified Profiles Only",
      placeholder: "Search city, profession, caste...",
      verifiedLabel: "NADRA VERIFIED",
      caste: "Caste",
      income: "Income",
      noResults: "No matches found",
      noResultsSub: "Try adjusting your filters for better results.",
      searching: "Searching for the best matches..."
    },
    ur: {
      title: "پاک سیف رشتہ",
      verifiedBadge: "صرف تصدیق شدہ پروفائلز",
      placeholder: "شہر، پیشہ، یا ذات تلاش کریں...",
      verifiedLabel: "نادرا سے تصدیق شدہ",
      caste: "ذات",
      income: "آمدنی",
      noResults: "کوئی مماثلت نہیں ملی",
      noResultsSub: "بہتر نتائج کے لیے اپنے فلٹرز تبدیل کرنے کی کوشش کریں۔",
      searching: "بہترین رشتے کی تلاش جاری ہے..."
    }
  }[lang];

  const filteredProfiles = profiles.filter(p => 
    p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    p.profession.toLowerCase().includes(searchTerm.toLowerCase()) ||
    p.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
    p.caste.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-gray-50 min-h-screen">
      <header className="sarkari-green p-4 pt-8 sticky top-0 z-30 flex flex-col gap-4 shadow-md">
        <div className="flex justify-between items-center text-white">
          <div>
            <h1 className="text-xl font-bold tracking-tight">{t.title}</h1>
            <p className="text-[10px] text-[#C5A059] uppercase tracking-widest font-bold">{t.verifiedBadge}</p>
          </div>
          <div className="p-2 bg-white/10 rounded-full border border-white/10">
            <Filter size={18} className="text-[#C5A059]" />
          </div>
        </div>
        
        <div className="relative">
          <Search className={`absolute ${lang === 'ur' ? 'right-3' : 'left-3'} top-1/2 -translate-y-1/2 text-gray-400`} size={18} />
          <input 
            type="text" 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder={t.placeholder} 
            className={`w-full bg-white rounded-xl py-3 ${lang === 'ur' ? 'pr-10 pl-4' : 'pl-10 pr-4'} text-sm focus:outline-none focus:ring-2 focus:ring-[#C5A059] transition-all`}
          />
        </div>
      </header>

      <div className="p-4 grid grid-cols-1 gap-4 mt-2">
        {filteredProfiles.length > 0 ? (
          filteredProfiles.map((profile) => (
            <div 
              key={profile.id}
              onClick={() => onSelectProfile(profile)}
              className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden cursor-pointer group hover:shadow-lg transition-all duration-300"
            >
              <div className="relative h-72 overflow-hidden">
                <img 
                  src={profile.image} 
                  alt={profile.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className={`absolute top-3 ${lang === 'ur' ? 'right-3' : 'left-3'} flex gap-2`}>
                  <div className="bg-[#01411C]/90 backdrop-blur px-3 py-1.5 rounded-full flex items-center gap-1.5 border border-white/20 shadow-lg">
                    <ShieldCheck size={14} className="text-[#C5A059]" />
                    <span className="text-[10px] font-bold text-white tracking-wide uppercase">{t.verifiedLabel}</span>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent p-5">
                  <h3 className="text-white text-2xl font-bold flex items-center gap-2">
                    {profile.name}, {profile.age}
                  </h3>
                  <div className="flex items-center gap-3 text-white/90 text-xs mt-1.5 font-medium">
                    <span className="flex items-center gap-1"><MapPin size={12} className="text-[#C5A059]" /> {profile.location}</span>
                  </div>
                </div>
              </div>
              
              <div className="p-5 bg-white">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex flex-col gap-1">
                    <div className="flex items-center gap-2 text-gray-800 text-sm font-bold">
                      <Briefcase size={14} className="text-[#01411C]" />
                      <span>{profile.profession}</span>
                    </div>
                    <div className="text-[11px] text-gray-500 font-medium opacity-80">
                      {profile.education}
                    </div>
                  </div>
                  <div className={`${lang === 'ur' ? 'text-left' : 'text-right'}`}>
                    <div className="text-[#01411C] font-black text-sm">{t.caste}: {profile.caste}</div>
                    <div className="text-[10px] text-gray-400 font-bold uppercase">{profile.incomeRange}</div>
                  </div>
                </div>
                
                <p className="text-xs text-gray-600 leading-relaxed line-clamp-2 italic border-t pt-4 border-gray-50 bg-gray-50/50 p-3 rounded-xl">
                  "{profile.bio}"
                </p>
              </div>
            </div>
          ))
        ) : (
          <div className="flex flex-col items-center justify-center py-20 px-10 text-center animate-fade-in">
            <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mb-6 text-gray-300">
              <SearchX size={40} />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">{t.noResults}</h3>
            <p className="text-sm text-gray-500 leading-relaxed font-medium">
              {searchTerm ? t.noResultsSub : t.searching}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default HomeFeed;
