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

        {/* Grid Layout:
            - auto-rows-[340px] enforces a consistent height for every box.
        */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[340px]">
          {FEATURES.map((feature, i) => {
            const isWide = feature.colSpan === 2;
            
            // Determine Media Content
            let mediaContent = null;

            if (i === 0) {
               // 0: Geofence (Video)
               mediaContent = (
                  <video 
                    className="w-full h-full object-contain" // object-contain = full visibility, no crop
                    autoPlay loop muted playsInline
                  >
                     <source src={getAssetPath("geofence.mp4")} type="video/mp4" />
                  </video>
               );
            } else if (i === 1) {
               // 1: AI (Image)
               mediaContent = (
                  <img 
                    src={getAssetPath("consistency.png")} 
                    alt={feature.title} 
                    className="w-full h-full object-contain select-none pointer-events-none" 
                  />
               );
            } else if (i === 3) {
               // 3: RPG (Image)
               mediaContent = (
                  <img 
                    src={getAssetPath("level.png")} 
                    alt={feature.title} 
                    className="w-full h-full object-contain select-none pointer-events-none" 
                  />
               );
            }

            const hasMedia = !!mediaContent;

            return (
              <div 
                key={feature.id || i} 
                className={`
                  relative group overflow-hidden transition-transform duration-300 will-change-transform transform-gpu
                  ${isWide ? 'md:col-span-2' : 'md:col-span-1'}
                  ${theme.colors.surface} ${theme.ui.roundness} ${theme.ui.cardShadow}
                  flex flex-row items-center /* FLEX ROW = Left/Right Layout */
                `}
              >
                {/* LEFT HALF: Text Content 
                   - Takes 50% width if media exists, otherwise 100%.
                   - Centered vertically.
                */}
                <div className={`
                    relative z-20 p-6 flex flex-col justify-center h-full
                    ${hasMedia ? 'w-1/2' : 'w-full'}
                `}>
                   <div className="flex flex-col items-start space-y-3">
                      <div className={`w-12 h-12 ${theme.ui.roundness} ${theme.colors.surfaceHighlight} flex items-center justify-center shrink-0`}>
                         <feature.icon className={theme.colors.primary} size={24} />
                      </div>
                      <h3 className={`text-xl md:text-2xl font-bold ${theme.colors.text} leading-tight`}>
                        {feature.title}
                      </h3>
                      <p className={`${theme.colors.textMuted} text-sm leading-relaxed`}>
                        {feature.description}
                      </p>
                   </div>
                </div>
                
                {/* Hover Gradient Effect */}
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-500 bg-gradient-to-br ${theme.id === 'vitamin' ? 'from-orange-400 to-yellow-300' : 'from-blue-400 to-purple-500'} pointer-events-none`}></div>

                {/* RIGHT HALF: Media Content
                   - Takes 50% width.
                   - h-full + p-4 + object-contain ensures the image fits perfectly inside without touching edges 
                     and without getting cut off.
                */}
                {hasMedia && (
                    <div className="w-1/2 h-full flex items-center justify-center p-4 relative z-10">
                        {/* This container restricts the media size.
                            'h-full' ensures it uses the full 340px height.
                            The image inside will scale to fit within this box automatically.
                        */}
                        <div className="w-full h-full transition-transform duration-500 ease-out group-hover:scale-105">
                            {mediaContent}
                        </div>
                    </div>
                )}

              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BentoGrid;