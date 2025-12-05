import React from 'react';
import { useTheme } from './ThemeContext';
import { FEATURES } from '../constants';

const MiniPhone: React.FC<{ 
  children?: React.ReactNode; 
  className?: string;
  delay?: string;
}> = ({ children, className = "", delay = "0s" }) => (
  <div 
    className={`absolute shadow-2xl border-[6px] border-[#1a1a1a] bg-[#000] rounded-[2.5rem] overflow-hidden ${className}`}
    style={{ transitionDelay: delay }}
  >
    {/* Dynamic Island / Notch */}
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-4 bg-[#1a1a1a] rounded-b-xl z-20"></div>
    
    {/* Screen Content */}
    <div className="w-full h-full bg-slate-950 relative overflow-hidden flex items-center justify-center">
        {children}
    </div>

    {/* Reflection/Gloss */}
    <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent pointer-events-none z-30"></div>
  </div>
);

const BentoGrid: React.FC = () => {
  const { theme } = useTheme();

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
            
            return (
              <div 
                key={feature.id} 
                className={`
                  relative p-8 group overflow-hidden transition-all duration-300
                  ${isWide ? 'md:col-span-2' : 'md:col-span-1'}
                  ${theme.colors.surface} ${theme.ui.roundness} ${theme.ui.cardShadow}
                  flex flex-col
                `}
              >
                {/* Content Header */}
                <div className={`relative z-10 mb-4 pointer-events-none ${isWide ? 'max-w-[50%]' : 'max-w-full'}`}>
                  {isWide ? (
                    // Standard Vertical Layout for Wide Cards
                    <>
                      <div className={`w-12 h-12 ${theme.ui.roundness} ${theme.colors.surfaceHighlight} flex items-center justify-center mb-4 text-3xl`}>
                        <feature.icon className={theme.colors.primary} size={24} />
                      </div>
                      <h3 className={`text-2xl font-bold mb-2 ${theme.colors.text}`}>{feature.title}</h3>
                      <p className={`${theme.colors.textMuted} text-sm leading-relaxed`}>{feature.description}</p>
                    </>
                  ) : (
                    // Compact Horizontal Layout for Narrow Cards (AI, Battery) to avoid phone overlap
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
                
                {/* Hover Gradient Effect */}
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-500 bg-gradient-to-br ${theme.id === 'vitamin' ? 'from-orange-400 to-yellow-300' : 'from-blue-400 to-purple-500'}`}></div>

                {/* Universal Phone Placeholder */}
                <MiniPhone 
                  className={`
                    transition-all duration-500 ease-out transform
                    group-hover:scale-[1.02]
                    ${isWide 
                      ? 'w-44 h-[290px] right-8 top-1/2 -translate-y-1/2 rotate-0' // Wide card: vertically centered on right
                      : 'w-40 h-[260px] -bottom-4 left-1/2 -translate-x-1/2 rotate-0' // Narrow card: centered at bottom
                    }
                  `}
                >
                  {/* Empty Screen as requested */}
                </MiniPhone>

              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BentoGrid;