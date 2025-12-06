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
            
            // 0: Geofence (Video), 1: AI (Image), 2: Battery (None), 3: RPG (Image)
            let mediaContent = null;

            if (i === 0) {
               mediaContent = (
                  <video className="w-full h-full object-cover" autoPlay loop muted playsInline>
                     <source src={getAssetPath("geofence.mp4")} type="video/mp4" />
                  </video>
               );
            } else if (i === 1) {
               mediaContent = (
                  <img src={getAssetPath("consistency.png")} alt={feature.title} className="w-full h-full object-cover" />
               );
            } else if (i === 3) {
               mediaContent = (
                  <img src={getAssetPath("level.png")} alt={feature.title} className="w-full h-full object-cover" />
               );
            }

            return (
              <div 
                key={feature.id || i} 
                className={`
                  relative p-8 group overflow-hidden transition-all duration-300
                  ${isWide ? 'md:col-span-2' : 'md:col-span-1'}
                  ${theme.colors.surface} ${theme.ui.roundness} ${theme.ui.cardShadow}
                  flex flex-col
                `}
              >
                {/* Text Content */}
                <div className={`relative z-10 mb-4 pointer-events-none ${isWide ? 'max-w-[50%]' : 'max-w-full'}`}>
                  {isWide ? (
                    <>
                      <div className={`w-12 h-12 ${theme.ui.roundness} ${theme.colors.surfaceHighlight} flex items-center justify-center mb-4 text-3xl`}>
                        <feature.icon className={theme.colors.primary} size={24} />
                      </div>
                      <h3 className={`text-2xl font-bold mb-2 ${theme.colors.text}`}>{feature.title}</h3>
                      <p className={`${theme.colors.textMuted} text-sm leading-relaxed`}>{feature.description}</p>
                    </>
                  ) : (
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
                
                {/* Hover Gradient */}
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-500 bg-gradient-to-br ${theme.id === 'vitamin' ? 'from-orange-400 to-yellow-300' : 'from-blue-400 to-purple-500'}`}></div>

                {/* Media Content - "Tiny Phone" Logic */}
                {mediaContent && (
                  <div className={`
                    absolute shadow-xl border-2 ${theme.colors.primaryBorder} rounded-[2rem] overflow-hidden bg-black
                    transition-all duration-500 ease-out transform group-hover:scale-[1.02] aspect-[9/19]
                    ${isWide 
                      ? 'right-8 top-1/2 -translate-y-1/2 h-[85%]' // Wide card: High vertical percentage, locked aspect ratio
                      : 'left-1/2 -translate-x-1/2 -bottom-4 w-[65%]' // Tall card: Width percentage, locked aspect ratio
                    }
                  `}>
                    {mediaContent}
                    {/* Gloss Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent pointer-events-none"></div>
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