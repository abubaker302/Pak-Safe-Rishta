
import React from 'react';
import { ArrowLeft, Check, Sparkles, ShieldCheck } from 'lucide-react';

interface PricingProps {
  onBack: () => void;
}

const Pricing: React.FC<PricingProps> = ({ onBack }) => {
  const plans = [
    {
      name: 'Basic Verified',
      price: 'Free',
      color: 'bg-gray-100',
      textColor: 'text-gray-800',
      features: ['NADRA Identity Check', 'Standard Profile Feed', 'Guardian Access'],
    },
    {
      name: 'Silver Trust',
      price: 'Rs. 1,500/mo',
      color: 'bg-sarkari-gold',
      textColor: 'text-[#01411C]',
      popular: true,
      features: ['Priority Profile Boost', 'Premium Search Filters', 'View Contact Details', 'Professional Check'],
    },
    {
      name: 'Gold Institutional',
      price: 'Rs. 4,000/3mo',
      color: 'sarkari-green',
      textColor: 'text-white',
      features: ['Full Background Verification', 'Elite Matchmaking Assistant', 'Extended Family Details', 'Incognito Mode'],
    },
  ];

  return (
    <div className="bg-white min-h-screen">
       <header className="p-6 pt-10 flex items-center gap-4">
        <button onClick={onBack} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
          <ArrowLeft size={24} className="text-[#01411C]" />
        </button>
        <h1 className="text-2xl font-bold text-[#01411C]">Membership Plans</h1>
      </header>

      <div className="px-6 pb-24 space-y-6">
        <div className="bg-green-50 p-4 rounded-2xl border border-green-100 flex items-center gap-4 mb-8">
           <div className="p-3 bg-[#01411C] rounded-full text-[#C5A059]">
              <Sparkles size={24} />
           </div>
           <div>
              <h3 className="font-bold text-[#01411C]">Upgrade to Premium</h3>
              <p className="text-xs text-gray-500">Get 5x more compatible matches with Institutional Verification.</p>
           </div>
        </div>

        {plans.map((plan, idx) => (
          <div 
            key={idx} 
            className={`relative p-6 rounded-3xl border ${
              plan.popular ? 'border-[#C5A059] shadow-xl' : 'border-gray-200'
            } transition-all active:scale-[0.98] cursor-pointer`}
          >
            {plan.popular && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#01411C] text-[#C5A059] text-[10px] font-bold px-4 py-1 rounded-full uppercase tracking-widest border border-[#C5A059]">
                Most Trusted
              </div>
            )}
            
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-lg font-bold text-[#01411C]">{plan.name}</h3>
                <p className="text-2xl font-black mt-1 sarkari-gold">{plan.price}</p>
              </div>
              <ShieldCheck size={28} className={plan.popular ? 'text-[#C5A059]' : 'text-gray-300'} />
            </div>

            <ul className="space-y-3 mb-8">
              {plan.features.map((feature, fIdx) => (
                <li key={fIdx} className="flex items-center gap-2 text-sm text-gray-600">
                  <div className="w-5 h-5 bg-green-50 rounded-full flex items-center justify-center">
                    <Check size={12} className="text-[#01411C]" />
                  </div>
                  {feature}
                </li>
              ))}
            </ul>

            <button className={`w-full py-4 rounded-xl font-bold text-sm shadow-sm transition-all ${
              plan.popular ? 'bg-sarkari-gold text-[#01411C]' : 'bg-[#01411C] text-white'
            }`}>
              Select Plan
            </button>
          </div>
        ))}
        
        <div className="text-center pt-6">
          <p className="text-[10px] text-gray-400 uppercase font-bold tracking-widest mb-2">Secure Payments Powered By</p>
          <div className="flex justify-center gap-4 grayscale opacity-50">
            <span className="font-bold italic">JazzCash</span>
            <span className="font-bold italic">Easypaisa</span>
            <span className="font-bold italic">HBL</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
