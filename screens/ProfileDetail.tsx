
import React, { useState } from 'react';
import { ArrowLeft, ShieldCheck, Heart, MessageCircle, Info, Lock, CheckCircle } from 'lucide-react';
import { Profile } from '../types';

interface ProfileDetailProps {
  profile: Profile;
  onBack: () => void;
  onChat: () => void;
}

const ProfileDetail: React.FC<ProfileDetailProps> = ({ profile, onBack, onChat }) => {
  const [photoLocked, setPhotoLocked] = useState(false);
  const [interestSent, setInterestSent] = useState(false);

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
          className="absolute top-10 left-4 p-2 bg-black/30 backdrop-blur rounded-full text-white"
        >
          <ArrowLeft size={20} />
        </button>
        
        <div className="absolute top-10 right-4 flex gap-2">
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
              <div className="bg-[#C5A059] text-[#01411C] text-[10px] font-bold px-2 py-0.5 rounded-full inline-block mb-2">
                GOVERNMENT VERIFIED
              </div>
              <h1 className="text-3xl font-bold text-white leading-none">{profile.name}, {profile.age}</h1>
              <p className="text-white/80 mt-1 flex items-center gap-1"><CheckCircle size={14} className="text-[#C5A059]" /> Identity Confirmed by NADRA</p>
            </div>
          </div>
        </div>
      </div>

      <div className="px-6 py-8 space-y-8">
        <section>
          <h2 className="text-lg font-bold text-[#01411C] mb-3 flex items-center gap-2">
            <Info size={18} className="text-[#C5A059]" /> Personal Background
          </h2>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-gray-50 p-3 rounded-xl border border-gray-100">
              <p className="text-[10px] text-gray-400 uppercase font-bold mb-1">Profession</p>
              <p className="text-sm font-semibold text-gray-800">{profile.profession}</p>
            </div>
            <div className="bg-gray-50 p-3 rounded-xl border border-gray-100">
              <p className="text-[10px] text-gray-400 uppercase font-bold mb-1">Education</p>
              <p className="text-sm font-semibold text-gray-800">{profile.education}</p>
            </div>
            <div className="bg-gray-50 p-3 rounded-xl border border-gray-100">
              <p className="text-[10px] text-gray-400 uppercase font-bold mb-1">Caste / Sect</p>
              <p className="text-sm font-semibold text-gray-800">{profile.caste}</p>
            </div>
            <div className="bg-gray-50 p-3 rounded-xl border border-gray-100">
              <p className="text-[10px] text-gray-400 uppercase font-bold mb-1">Location</p>
              <p className="text-sm font-semibold text-gray-800">{profile.location}</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-lg font-bold text-[#01411C] mb-3">About Me</h2>
          <p className="text-gray-600 leading-relaxed italic border-l-4 border-[#C5A059] pl-4 py-1">
            "{profile.bio}"
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-[#01411C] mb-3">Family Information</h2>
          <div className="bg-green-50/50 p-4 rounded-xl border border-green-100">
            <div className="flex justify-between items-center mb-2">
              <span className="text-xs text-gray-500">Family Type</span>
              <span className="text-sm font-bold text-[#01411C]">{profile.familyType} Family</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-xs text-gray-500">Income Status</span>
              <span className="text-sm font-bold text-[#01411C]">{profile.incomeRange}</span>
            </div>
          </div>
        </section>

        <div className="flex gap-3 pt-4">
          <button 
            onClick={() => setInterestSent(!interestSent)}
            className={`flex-1 py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all ${
              interestSent 
              ? 'bg-gray-100 text-gray-400' 
              : 'bg-[#C5A059] text-[#01411C] shadow-lg hover:shadow-xl'
            }`}
          >
            <Heart size={20} fill={interestSent ? 'currentColor' : 'none'} />
            {interestSent ? 'Interest Sent' : 'Express Interest'}
          </button>
          
          <button 
            onClick={onChat}
            className="w-14 h-14 bg-[#01411C] text-white rounded-xl flex items-center justify-center shadow-lg"
          >
            <MessageCircle size={24} />
          </button>
        </div>
        
        <p className="text-[10px] text-center text-gray-400 uppercase tracking-widest mt-4">
          Activity is monitored by Guardian
        </p>
      </div>
    </div>
  );
};

export default ProfileDetail;
