import React, { useState } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { useTheme } from './ThemeContext';
import { useNavigation } from './NavigationContext';
import PhoneFrame from './PhoneFrame'; 
import { HERO_COPY } from '../constants';

const Hero = () => {
  const { theme } = useTheme();
  const { navigateTo } = useNavigation();
  const [mobileIndex, setMobileIndex] = useState(0);

  // HELPER: Automatically adds the base URL (e.g., /GymGateWL/) to the path
  const getAssetPath = (path: string) => {
    // Remove leading slash if present to avoid double slashes
    const cleanPath = path.startsWith('/') ? path.slice(1) : path;
    return `${import.meta.env.BASE_URL}${cleanPath}`;
  };

  // Mobile Order: Video First
  const phones = [
    { 
      desc: "History Recording", 
      src: getAssetPath("calendar_record.mp4"), 
      type: "video" as const 
    },
    { 
      desc: "Back Workout", 
      src: getAssetPath("home_back.png"), 
      type: "image" as const 
    },
    { 
      desc: "Chest Workout", 
      src: getAssetPath("home_chest.png"), 
      type: "image" as const 
    }
  ];

  const handlePrev = () => {
    setMobileIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setMobileIndex((prev) => Math.min(phones.length - 1, prev + 1));
  };

  return (
    <section className="relative pt-12 pb-20 md:pt-24 md:pb-32 px-6 overflow-hidden transition-all duration-500">
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
        
        {/* Text Content */}
        <div className="relative z-20 flex flex-col items-center w-full">
          <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border ${theme.colors.primaryBorder} ${theme.colors.surfaceHighlight} mb-8 animate-fade-up`}>
            <span className={`w-2 h-2 rounded-full ${theme.colors.primaryBg} animate-pulse`}></span>
            <span className={`text-xs font-bold tracking-widest uppercase ${theme.colors.textMuted}`}>Public Beta Dec 2025</span>
          </div>

          <h1 className={`text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 ${theme.colors.text} max-w-4xl mx-auto animate-fade-up`} style={{ animationDelay: '0.1s' }}>
            {HERO_COPY.headline}
          </h1>

          <p className={`text-xl md:text-2xl ${theme.colors.textMuted} max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-up`} style={{ animationDelay: '0.2s' }}>
            {HERO_COPY.subhead}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-20 animate-fade-up" style={{ animationDelay: '0.3s' }}>
            <button 
              onClick={() => navigateTo('waitlist')}
              className={`px-12 py-5 ${theme.colors.action} ${theme.colors.actionText} font-bold text-xl rounded-full flex items-center justify-center gap-2 ${theme.ui.buttonShadow} transform hover:scale-105 transition-transform`}
            >
              {HERO_COPY.cta} <ArrowRight size={24} />
            </button>
          </div>
        </div>

        {/* Phone Display Section */}
        <div className="relative z-10 w-full max-w-5xl mx-auto animate-fade-up" style={{ animationDelay: '0.4s' }}>
          {/* Background Glow */}
          <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] ${theme.id === 'vitamin' ? 'bg-orange-500/20' : theme.id === 'pure' ? 'bg-blue-500/10' : 'bg-purple-500/20'} blur-[100px] rounded-full -z-10`}></div>
          
          {/* Desktop Layout (3 Phones) */}
          <div className="hidden md:flex justify-center items-end gap-12">
             {/* Left Phone: Back Image */}
             <div className="transform -rotate-6 translate-y-12 scale-90 opacity-80 hover:opacity-100 hover:scale-95 transition-all duration-300">
                <PhoneFrame 
                  src={getAssetPath("home_back.png")} 
                  type="image" 
                  alt="Back Workout"
                />
             </div>
             
             {/* Center Phone: Calendar Video (Main Focus) */}
             <div className="transform z-20 hover:scale-105 transition-transform duration-500">
                <PhoneFrame 
                  src={getAssetPath("calendar_record.mp4")} 
                  type="video" 
                  alt="Calendar History"
                />
             </div>

             {/* Right Phone: Chest Image */}
             <div className="transform rotate-6 translate-y-12 scale-90 opacity-80 hover:opacity-100 hover:scale-95 transition-all duration-300">
                <PhoneFrame 
                  src={getAssetPath("home_chest.png")} 
                  type="image" 
                  alt="Chest Workout"
                />
             </div>
          </div>

          {/* Mobile Layout (Carousel) */}
          <div className="md:hidden relative flex items-center justify-center py-4">
            
            <button 
              onClick={handlePrev}
              disabled={mobileIndex === 0}
              className={`absolute left-0 z-30 p-3 rounded-full ${theme.colors.surface} border ${theme.colors.primaryBorder} shadow-lg ${theme.colors.text} disabled:opacity-30 disabled:cursor-not-allowed hover:scale-110 transition-all`}
              aria-label="Previous view"
            >
              <ChevronLeft size={24} />
            </button>

            <div className="transform transition-all duration-300 ease-in-out">
              <PhoneFrame 
                src={phones[mobileIndex].src}
                type={phones[mobileIndex].type}
                alt={phones[mobileIndex].desc}
              />
            </div>

            <button 
              onClick={handleNext}
              disabled={mobileIndex === phones.length - 1}
              className={`absolute right-0 z-30 p-3 rounded-full ${theme.colors.surface} border ${theme.colors.primaryBorder} shadow-lg ${theme.colors.text} disabled:opacity-30 disabled:cursor-not-allowed hover:scale-110 transition-all`}
              aria-label="Next view"
            >
              <ChevronRight size={24} />
            </button>

            <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
              {phones.map((_, i) => (
                <div 
                  key={i} 
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${i === mobileIndex ? theme.colors.primaryBg + ' w-6' : theme.colors.textMuted + ' opacity-30'}`}
                />
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Hero;