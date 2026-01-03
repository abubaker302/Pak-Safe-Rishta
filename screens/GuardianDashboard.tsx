
import React from 'react';
import { Shield, Eye, ThumbsUp, Bell, Clock, ArrowUpRight } from 'lucide-react';

const GuardianDashboard: React.FC = () => {
  const activities = [
    { type: 'view', user: 'Bilal Khan', time: '2 hours ago', status: 'Viewed Profile' },
    { type: 'interest', user: 'Sana Ahmed', time: '5 hours ago', status: 'Sent Interest' },
    { type: 'match', user: 'Ahmed Ali', time: 'Yesterday', status: 'Mutual Match' },
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      <header className="sarkari-green p-6 pt-10 text-white">
        <div className="flex justify-between items-start mb-6">
          <div>
            <h1 className="text-2xl font-bold">Guardian Dashboard</h1>
            <p className="text-sm text-[#C5A059]">Monitoring for: Amina Khan</p>
          </div>
          <div className="w-10 h-10 bg-[#C5A059] rounded-full flex items-center justify-center text-[#01411C] font-bold">
            PK
          </div>
        </div>
        
        <div className="grid grid-cols-3 gap-4">
          <div className="bg-white/10 rounded-xl p-3 text-center border border-white/20">
            <Eye size={18} className="mx-auto mb-1 text-[#C5A059]" />
            <div className="text-lg font-bold">42</div>
            <div className="text-[10px] opacity-70">Views</div>
          </div>
          <div className="bg-white/10 rounded-xl p-3 text-center border border-white/20">
            <ThumbsUp size={18} className="mx-auto mb-1 text-[#C5A059]" />
            <div className="text-lg font-bold">12</div>
            <div className="text-[10px] opacity-70">Interests</div>
          </div>
          <div className="bg-white/10 rounded-xl p-3 text-center border border-white/20">
            <Shield size={18} className="mx-auto mb-1 text-[#C5A059]" />
            <div className="text-lg font-bold">3</div>
            <div className="text-[10px] opacity-70">Matches</div>
          </div>
        </div>
      </header>

      <div className="p-6">
        <div className="bg-white rounded-2xl p-4 shadow-sm mb-6 flex items-center justify-between border border-green-100">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-green-50 rounded-lg">
              <Shield className="text-[#01411C]" size={20} />
            </div>
            <div>
              <h3 className="text-sm font-bold">Safe Mode Active</h3>
              <p className="text-[10px] text-gray-500">Contact sharing is restricted</p>
            </div>
          </div>
          <div className="w-12 h-6 bg-[#01411C] rounded-full relative p-1 cursor-pointer">
            <div className="w-4 h-4 bg-white rounded-full ml-auto"></div>
          </div>
        </div>

        <section className="mb-8">
          <div className="flex justify-between items-center mb-4">
            <h2 className="font-bold text-[#01411C] flex items-center gap-2">
              <Clock size={18} /> Recent Activity
            </h2>
            <button className="text-[11px] font-bold text-[#C5A059] uppercase">View History</button>
          </div>
          
          <div className="space-y-3">
            {activities.map((item, idx) => (
              <div key={idx} className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className={`w-2 h-2 rounded-full ${item.type === 'match' ? 'bg-green-500' : 'bg-blue-500'}`}></div>
                  <div>
                    <h4 className="text-sm font-bold text-gray-800">{item.user}</h4>
                    <p className="text-[10px] text-gray-500">{item.status} • {item.time}</p>
                  </div>
                </div>
                <ArrowUpRight size={16} className="text-gray-300" />
              </div>
            ))}
          </div>
        </section>

        <section>
          <div className="bg-[#01411C] rounded-2xl p-6 text-white relative overflow-hidden">
            <div className="relative z-10">
              <Bell size={32} className="text-[#C5A059] mb-4" />
              <h3 className="text-lg font-bold mb-2">Request Approval</h3>
              <p className="text-sm text-white/70 mb-4">A new user has requested to view Amina's contact information. Your approval is required.</p>
              <div className="flex gap-3">
                <button className="flex-1 bg-white text-[#01411C] text-xs font-bold py-3 rounded-lg">Approve</button>
                <button className="flex-1 bg-red-500/20 text-red-100 text-xs font-bold py-3 rounded-lg border border-red-500/30">Reject</button>
              </div>
            </div>
            <div className="absolute top-0 right-0 p-4 opacity-10">
               <Shield size={120} />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default GuardianDashboard;
