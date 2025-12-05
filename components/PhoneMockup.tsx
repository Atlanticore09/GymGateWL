import React from 'react';
import { useTheme } from './ThemeContext';

const PhoneMockup = ({ description, variant = 'primary' }) => {
  const { theme } = useTheme();

  return (
    <div className={`relative mx-auto w-[280px] h-[580px] rounded-[3rem] border-8 ${theme.id === 'focus' ? 'border-[#222]' : 'border-white'} bg-black shadow-2xl overflow-hidden z-10`}>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-7 bg-black rounded-b-2xl z-20"></div>
      
      <div className={`w-full h-full bg-gradient-to-br ${theme.id === 'focus' ? 'from-gray-900 to-black' : 'from-gray-50 to-white'} flex flex-col relative overflow-hidden`}>
        
        <div className="h-10 w-full flex justify-between items-center px-6 pt-2">
            <span className={`text-[10px] font-bold ${theme.id === 'focus' ? 'text-white' : 'text-black'}`}>9:41</span>
            <div className="flex gap-1">
                <div className={`w-4 h-2.5 border rounded-sm ${theme.id === 'focus' ? 'border-white' : 'border-black'}`}></div>
            </div>
        </div>

        <div className="p-6 flex-1 flex flex-col gap-6">
            <div className="flex justify-between items-center">
                <div className="flex flex-col">
                    <span className={`text-xs ${theme.colors.textMuted} uppercase tracking-wider`}>MONDAY</span>
                    <span className={`text-xl font-bold ${theme.id === 'focus' ? 'text-white' : 'text-black'}`}>Chest Day</span>
                </div>
                <div className={`w-10 h-10 rounded-full ${theme.colors.surfaceHighlight}`}></div>
            </div>

            <div className={`w-full aspect-square rounded-2xl ${theme.colors.primaryBg} p-6 flex flex-col justify-between shadow-lg`}>
                <div className="flex justify-between items-start">
                   <div className="w-8 h-8 bg-white/20 rounded-full backdrop-blur-sm"></div>
                   <span className="text-white/60 text-xs font-bold">LIVE</span>
                </div>
                <div>
                   <span className="text-white/80 text-sm">Session Duration</span>
                   <div className="text-white text-4xl font-bold">42:10</div>
                </div>
            </div>

            <div className="space-y-3">
                {[1,2,3].map(i => (
                    <div key={i} className={`h-16 w-full rounded-xl ${theme.colors.surfaceHighlight} flex items-center px-4 gap-4`}>
                        <div className={`w-8 h-8 rounded-lg ${theme.colors.primaryBg} opacity-20`}></div>
                        <div className={`h-2 w-24 ${theme.colors.primaryBg} opacity-10 rounded-full`}></div>
                    </div>
                ))}
            </div>
        </div>
        
        <div className="absolute inset-0 bg-black/5 backdrop-blur-[2px] flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
             <span className="bg-black text-white px-3 py-1 rounded-full text-xs font-bold">{description}</span>
        </div>

      </div>
    </div>
  );
};

export default PhoneMockup;