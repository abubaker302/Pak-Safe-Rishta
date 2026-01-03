
import React, { useState } from 'react';
import { Screen, Profile, Language } from './types';
import Welcome from './screens/Welcome';
import Verification from './screens/Verification';
import HomeFeed from './screens/HomeFeed';
import ProfileDetail from './screens/ProfileDetail';
import GuardianDashboard from './screens/GuardianDashboard';
import Chat from './screens/Chat';
import Pricing from './screens/Pricing';
import BottomNav from './components/BottomNav';

const MOCK_PROFILES: Profile[] = [
  {
    id: '1',
    name: 'Sana Ahmed',
    age: 26,
    profession: 'Software Engineer',
    location: 'Lahore, Punjab',
    education: 'BS Computer Science (FAST)',
    incomeRange: '150k - 200k PKR',
    caste: 'Sheikh',
    verified: true,
    image: 'https://picsum.photos/seed/sana/400/500',
    bio: 'Looking for a pious and professionally settled individual from a respectable family.',
    familyType: 'Nuclear'
  },
  {
    id: '2',
    name: 'Bilal Khan',
    age: 29,
    profession: 'Medical Doctor',
    location: 'Islamabad, ICT',
    education: 'MBBS (AKU)',
    incomeRange: '250k+ PKR',
    caste: 'Pathan',
    verified: true,
    image: 'https://picsum.photos/seed/bilal/400/500',
    bio: 'Specialist cardiologist. Values family traditions and Islamic principles.',
    familyType: 'Joint'
  },
  {
    id: '3',
    name: 'Amna Siddiqui',
    age: 24,
    profession: 'Graphic Designer',
    location: 'Karachi, Sindh',
    education: 'BFA (Indus Valley)',
    incomeRange: '80k - 120k PKR',
    caste: 'Siddiqui',
    verified: true,
    image: 'https://picsum.photos/seed/amna/400/500',
    bio: 'Creative soul, looking for a progressive family environment.',
    familyType: 'Nuclear'
  }
];

const App: React.FC = () => {
  const [currentScreen, setCurrentScreen] = useState<Screen>('WELCOME');
  const [selectedProfile, setSelectedProfile] = useState<Profile | null>(null);
  const [lang, setLang] = useState<Language>('ur'); // Default to Urdu for initial brief focus

  const navigateTo = (screen: Screen, profile?: Profile) => {
    if (profile) setSelectedProfile(profile);
    setCurrentScreen(screen);
    window.scrollTo(0, 0);
  };

  const toggleLanguage = () => {
    setLang(prev => prev === 'en' ? 'ur' : 'en');
  };

  const renderScreen = () => {
    switch (currentScreen) {
      case 'WELCOME':
        return <Welcome onStart={() => navigateTo('VERIFICATION')} lang={lang} onToggleLang={toggleLanguage} />;
      case 'VERIFICATION':
        return <Verification onComplete={() => navigateTo('HOME')} lang={lang} />;
      case 'HOME':
        return <HomeFeed profiles={MOCK_PROFILES} onSelectProfile={(p) => navigateTo('PROFILE', p)} lang={lang} />;
      case 'PROFILE':
        return selectedProfile ? <ProfileDetail profile={selectedProfile} onBack={() => navigateTo('HOME')} onChat={() => navigateTo('CHAT')} lang={lang} /> : null;
      case 'GUARDIAN':
        return <GuardianDashboard lang={lang} />;
      case 'CHAT':
        return <Chat onBack={() => navigateTo('HOME')} lang={lang} />;
      case 'PRICING':
        return <Pricing onBack={() => navigateTo('HOME')} lang={lang} />;
      default:
        return <Welcome onStart={() => navigateTo('VERIFICATION')} lang={lang} onToggleLang={toggleLanguage} />;
    }
  };

  const showNav = !['WELCOME', 'VERIFICATION'].includes(currentScreen);

  return (
    <div 
      dir={lang === 'ur' ? 'rtl' : 'ltr'} 
      className="max-w-md mx-auto min-h-screen bg-white shadow-xl relative overflow-x-hidden flex flex-col transition-all duration-300"
    >
      <main className="flex-grow pb-20">
        {renderScreen()}
      </main>
      
      {showNav && (
        <BottomNav 
          currentScreen={currentScreen} 
          onNavigate={navigateTo} 
          lang={lang}
        />
      )}
    </div>
  );
};

export default App;
