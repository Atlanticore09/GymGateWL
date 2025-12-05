import React from 'react';
import { useTheme } from './ThemeContext';
import { SOCIAL_PROOF_LOGOS } from '../constants';

const SocialProof: React.FC = () => {
  const { theme } = useTheme();
  
  // Duplicate array for seamless infinite scroll
  const logos = [...SOCIAL_PROOF_LOGOS, ...SOCIAL_PROOF_LOGOS, ...SOCIAL_PROOF_LOGOS];

  return (
    <div className={`w-full py-12 border-b ${theme.colors.primaryBorder} ${theme.colors.surfaceHighlight} overflow-hidden relative`}>
      <div className="max-w-7xl mx-auto px-6 mb-6 text-center">
        <p className={`text-xs font-bold tracking-widest uppercase ${theme.colors.textMuted}`}>Works with all major chains</p>
      </div>
      
      <div className="relative flex overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap gap-16 items-center">
          {logos.map((logo, index) => (
            <span 
              key={index} 
              className={`text-2xl font-bold ${theme.colors.textMuted} opacity-40 hover:opacity-100 transition-opacity cursor-default`}
            >
              {logo}
            </span>
          ))}
        </div>
        
        {/* Gradient Masks */}
        <div className={`absolute top-0 left-0 h-full w-24 bg-gradient-to-r ${theme.id === 'focus' ? 'from-black' : theme.id === 'vitamin' ? 'from-[#FFFDF7]' : 'from-white'} to-transparent z-10`}></div>
        <div className={`absolute top-0 right-0 h-full w-24 bg-gradient-to-l ${theme.id === 'focus' ? 'from-black' : theme.id === 'vitamin' ? 'from-[#FFFDF7]' : 'from-white'} to-transparent z-10`}></div>
      </div>
    </div>
  );
};

export default SocialProof;