
import React from 'react';
import { Home, ShieldCheck, MessageCircle, User, CreditCard } from 'lucide-react';
import { Screen } from '../types';

interface BottomNavProps {
  currentScreen: Screen;
  onNavigate: (screen: Screen) => void;
}

const BottomNav: React.FC<BottomNavProps> = ({ currentScreen, onNavigate }) => {
  const tabs = [
    { id: 'HOME', icon: Home, label: 'Home' },
    { id: 'GUARDIAN', icon: ShieldCheck, label: 'Guardian' },
    { id: 'CHAT', icon: MessageCircle, label: 'Chat' },
    { id: 'PRICING', icon: CreditCard, label: 'Plans' },
  ];

  return (
    <nav className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-md bg-white border-t border-gray-200 flex justify-around py-3 px-2 z-50">
      {tabs.map((tab) => {
        const Icon = tab.icon;
        const isActive = currentScreen === tab.id;
        return (
          <button
            key={tab.id}
            onClick={() => onNavigate(tab.id as Screen)}
            className={`flex flex-col items-center gap-1 transition-colors ${
              isActive ? 'text-[#01411C]' : 'text-gray-400'
            }`}
          >
            <Icon size={22} strokeWidth={isActive ? 2.5 : 2} />
            <span className="text-[10px] font-medium">{tab.label}</span>
          </button>
        );
      })}
    </nav>
  );
};

export default BottomNav;
