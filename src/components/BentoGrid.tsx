import React from 'react';
import { useTheme } from './ThemeContext';
import { FEATURES } from '../constants';

const BentoGrid = () => {
  const { theme } = useTheme();

  const getAssetPath = (path: string) => {
    const cleanPath = path.startsWith('/') ? path.slice(1) : path;
    return `${import.meta.env.BASE_URL}${cleanPath}`;
  };

  return (
    <section id="features" className="py-24 px-6 relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className={`text-4xl md:text-5xl font-bold ${theme.colors.text}`}>Built for Focus.</h2>
          <p className={`text-lg ${theme.colors.textMuted}`}>Everything you need to track progress, nothing to distract you.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[340px]">
          {FEATURES.map((feature, i) => {
            const isWide = feature.colSpan === 2;
            
            // 0: Geofence (Video), 1: AI (Image), 3: RPG (Image)
            let mediaContent = null;
            let mediaContainerClass = "";

            if (i === 0) {
               // Geofence - Video
               // FIX: Reduced rounding from [2.5rem] to 2xl so content isn't cut off
               mediaContent = (
                  <video 
                    className="w-full h-full object-cover rounded-2xl transform-gpu" 
                    autoPlay loop muted playsInline
                  >
                     <source src={getAssetPath("geofence.mp4")} type="video/mp4" />
                  </video>
               );
               // Container: slightly narrower to look like a phone, centered
               mediaContainerClass = "w-[85%] h-[90%]"; 
            
            } else if (i === 1) {
               // AI - Image
               mediaContent = (
                  <img src={getAssetPath("consistency.png")} alt={feature.title} className="w-full h-full object-contain object-bottom select-none pointer-events-none" />
               );
               mediaContainerClass = "w-full h-full scale-[1.1] origin-bottom"; // Slight zoom, anchored bottom

            } else if (i === 3) {
               // RPG - Image
               mediaContent = (
                  <img src={getAssetPath("level.png")} alt={feature.title} className="w-full h-full object-contain object-bottom select-none pointer-events-none" />
               );
               mediaContainerClass = "w-full h-full scale-[1.1] origin-bottom";
            }

            return (
              <div 
                key={feature.id || i} 
                className={`
                  relative group overflow-hidden transition-transform duration-300 will-change-transform
                  ${isWide ? 'md:col-span-2' : 'md:col-span-1'}
                  ${theme.colors.surface} ${theme.ui.roundness} ${theme.ui.cardShadow}
                  flex flex-col justify-between 
                `}
              >
                {/* 1. Text Content - Pinned to Top */}
                <div className={`relative z-20 p-8 pb-0 flex flex-col items-start ${isWide ? 'max-w-[60%]' : 'w-full'}`}>
                   {isWide ? (
                     // Wide Layout (if used)
                     <>
                        <div className={`w-12 h-12 ${theme.ui.roundness} ${theme.colors.surfaceHighlight} flex items-center justify-center mb-4 text-3xl`}>
                          <feature.icon className={theme.colors.primary} size={24} />
                        </div>
                        <h3 className={`text-2xl font-bold mb-2 ${theme.colors.text}`}>{feature.title}</h3>
                        <p className={`${theme.colors.textMuted} text-sm leading-relaxed`}>{feature.description}</p>
                     </>
                   ) : (
                     // Tall Layout (Standard)
                     <>
                        <div className="flex items-center gap-3 mb-3">
                           <div className={`w-10 h-10 ${theme.ui.roundness} ${theme.colors.surfaceHighlight} flex items-center justify-center shrink-0`}>
                              <feature.icon className={theme.colors.primary} size={20} />
                           </div>
                           <h3 className={`text-xl font-bold ${theme.colors.text} leading-tight`}>{feature.title}</h3>
                        </div>
                        <p className={`${theme.colors.textMuted} text-sm leading-relaxed`}>{feature.description}</p>
                     </>
                   )}
                </div>
                
                {/* Hover Effect - Optimized */}
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-500 bg-gradient-to-br ${theme.id === 'vitamin' ? 'from-orange-400 to-yellow-300' : 'from-blue-400 to-purple-500'}`}></div>

                {/* 2. Media Content - Pinned to Bottom (Flexbox) */}
                {/* This flex container ensures images are physically pushed to the bottom and don't float under text */}
                <div className={`
                    relative z-10 w-full flex items-end justify-center
                    ${isWide ? 'absolute right-0 top-0 bottom-0 w-[40%] h-full' : 'h-[60%] mt-4'}
                `}>
                    {mediaContent && (
                        <div className={`
                            relative transition-transform duration-500 ease-out group-hover:scale-[1.02]
                            ${mediaContainerClass}
                        `}>
                            {mediaContent}
                        </div>
                    )}
                </div>

              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BentoGrid;