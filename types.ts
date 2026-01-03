
export type Screen = 'WELCOME' | 'VERIFICATION' | 'HOME' | 'PROFILE' | 'GUARDIAN' | 'CHAT' | 'PRICING';

export interface Profile {
  id: string;
  name: string;
  age: number;
  profession: string;
  location: string;
  education: string;
  incomeRange: string;
  caste: string;
  verified: boolean;
  image: string;
  bio: string;
  familyType: string;
}

export interface Message {
  id: string;
  senderId: string;
  text: string;
  timestamp: string;
}
