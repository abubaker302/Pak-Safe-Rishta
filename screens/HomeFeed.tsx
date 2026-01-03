
import React from 'react';
import { Search, Filter, ShieldCheck, MapPin, Briefcase } from 'lucide-react';
import { Profile } from '../types';

interface HomeFeedProps {
  profiles: Profile[];
  onSelectProfile: (profile: Profile) => void;
}

const HomeFeed: React.FC<HomeFeedProps> = ({ profiles, onSelectProfile }) => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <header className="sarkari-green p-4 pt-8 sticky top-0 z-30 flex flex-col gap-4 shadow-md">
        <div className="flex justify-between items-center text-white">
          <div>
            <h1 className="text-lg font-bold">Pak-Safe Rishta</h1>
            <p className="text-[10px] text-[#C5A059] uppercase tracking-widest font-semibold">Verified Profiles Only</p>
          </div>
          <div className="p-2 bg-white/10 rounded-full">
            <Filter size={18} className="text-[#C5A059]" />
          </div>
        </div>
        
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
          <input 
            type="text" 
            placeholder="Search city, profession, caste..." 
            className="w-full bg-white rounded-lg py-3 pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-[#C5A059]"
          />
        </div>
      </header>

      <div className="p-4 grid grid-cols-1 gap-4 mt-2">
        {profiles.map((profile) => (
          <div 
            key={profile.id}
            onClick={() => onSelectProfile(profile)}
            className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden cursor-pointer group hover:shadow-md transition-shadow"
          >
            <div className="relative h-64 overflow-hidden">
              <img 
                src={profile.image} 
                alt={profile.name} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-3 left-3 flex gap-2">
                <div className="bg-white/90 backdrop-blur px-2 py-1 rounded-full flex items-center gap-1">
                  <ShieldCheck size={14} className="text-green-600" />
                  <span className="text-[10px] font-bold text-gray-800">NADRA VERIFIED</span>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-4">
                <h3 className="text-white text-xl font-bold flex items-center gap-2">
                  {profile.name}, {profile.age}
                </h3>
                <div className="flex items-center gap-3 text-white/90 text-xs mt-1">
                  <span className="flex items-center gap-1"><MapPin size={12} /> {profile.location}</span>
                </div>
              </div>
            </div>
            
            <div className="p-4 bg-white">
              <div className="flex items-center justify-between mb-3">
                <div className="flex flex-col gap-1">
                  <div className="flex items-center gap-2 text-gray-700 text-sm">
                    <Briefcase size={14} className="text-[#01411C]" />
                    <span className="font-medium">{profile.profession}</span>
                  </div>
                  <div className="text-[11px] text-gray-500 font-medium">
                    {profile.education}
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-[#01411C] font-bold text-sm">Caste: {profile.caste}</div>
                  <div className="text-[10px] text-gray-400">Income: {profile.incomeRange}</div>
                </div>
              </div>
              
              <p className="text-xs text-gray-600 line-clamp-2 italic border-t pt-3 border-gray-50">
                "{profile.bio}"
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeFeed;
