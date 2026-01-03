
import React, { useState } from 'react';
import { ArrowLeft, Send, ShieldAlert, Phone, MoreVertical, CameraOff } from 'lucide-react';
import { Message } from '../types';

interface ChatProps {
  onBack: () => void;
}

const Chat: React.FC<ChatProps> = ({ onBack }) => {
  const [messages, setMessages] = useState<Message[]>([
    { id: '1', senderId: 'other', text: 'Assalam o Alaikum, I saw your profile and liked it.', timestamp: '10:30 AM' },
    { id: '2', senderId: 'me', text: 'Walaikum Assalam. Thank you. How are you?', timestamp: '10:32 AM' },
    { id: '3', senderId: 'other', text: 'I am good. Are your parents available for a call this weekend?', timestamp: '10:35 AM' },
  ]);
  const [input, setInput] = useState('');

  const sendMessage = () => {
    if (!input.trim()) return;
    const newMessage: Message = {
      id: Date.now().toString(),
      senderId: 'me',
      text: input,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };
    setMessages([...messages, newMessage]);
    setInput('');
  };

  return (
    <div className="flex flex-col h-screen bg-gray-100">
      <header className="sarkari-green p-4 pt-10 text-white flex items-center justify-between shadow-md">
        <div className="flex items-center gap-3">
          <button onClick={onBack}><ArrowLeft size={20} /></button>
          <div className="w-10 h-10 rounded-full bg-white/20 border-2 border-[#C5A059] overflow-hidden">
            <img src="https://picsum.photos/seed/doc/100/100" alt="Avatar" />
          </div>
          <div>
            <h3 className="font-bold text-sm">Bilal Khan</h3>
            <p className="text-[10px] text-green-400 font-bold flex items-center gap-1">
              <span className="w-1.5 h-1.5 bg-green-400 rounded-full"></span> Active Now
            </p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <Phone size={20} className="text-[#C5A059]" />
          <MoreVertical size={20} />
        </div>
      </header>

      <div className="bg-yellow-50 border-b border-yellow-200 p-2 flex items-center justify-center gap-2">
        <ShieldAlert size={14} className="text-yellow-600" />
        <span className="text-[10px] text-yellow-800 font-bold uppercase tracking-wider">
          Secure Chat: Screenshots & Copies Restricted
        </span>
      </div>

      <div className="flex-grow p-4 overflow-y-auto space-y-4">
        <div className="text-center">
          <span className="text-[10px] bg-gray-200 px-2 py-1 rounded text-gray-500 font-bold">TODAY</span>
        </div>
        
        {messages.map((msg) => (
          <div 
            key={msg.id} 
            className={`flex ${msg.senderId === 'me' ? 'justify-end' : 'justify-start'}`}
          >
            <div 
              className={`max-w-[80%] p-3 rounded-2xl shadow-sm text-sm ${
                msg.senderId === 'me' 
                ? 'bg-[#01411C] text-white rounded-tr-none' 
                : 'bg-white text-gray-800 rounded-tl-none border border-gray-200'
              }`}
            >
              <p>{msg.text}</p>
              <span className={`text-[9px] block mt-1 ${msg.senderId === 'me' ? 'text-white/50' : 'text-gray-400'}`}>
                {msg.timestamp}
              </span>
            </div>
          </div>
        ))}
        
        <div className="flex justify-center mt-6">
          <div className="flex items-center gap-2 bg-gray-200/50 px-3 py-1.5 rounded-full border border-gray-300">
            <CameraOff size={12} className="text-gray-400" />
            <span className="text-[9px] text-gray-500 font-medium">Auto-delete messages enabled by Guardian</span>
          </div>
        </div>
      </div>

      <div className="p-4 bg-white border-t border-gray-200 flex gap-2">
        <input 
          type="text" 
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
          placeholder="Type securely..." 
          className="flex-grow bg-gray-100 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#01411C]"
        />
        <button 
          onClick={sendMessage}
          className="w-12 h-12 bg-[#01411C] text-white rounded-xl flex items-center justify-center shadow-lg active:scale-95 transition-transform"
        >
          <Send size={20} />
        </button>
      </div>
    </div>
  );
};

export default Chat;
