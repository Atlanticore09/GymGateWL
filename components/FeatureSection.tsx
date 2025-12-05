import React from 'react';
import { useTheme } from './ThemeContext';
import { MapPin, Dumbbell, Trophy } from 'lucide-react';

const FeatureSection: React.FC = () => {
  const { theme } = useTheme();

  const steps = [
    {
      title: "1. Select Gym",
      desc: "Choose your gym location on the map. We support over 40,000 locations worldwide.",
      icon: MapPin
    },
    {
      title: "2. Train",
      desc: "Just walk in. The app detects your arrival and starts the session timer automatically.",
      icon: Dumbbell
    },
    {
      title: "3. Level Up",
      desc: "Complete the session to earn XP. Maintain your streak and unlock rewards.",
      icon: Trophy
    }
  ];

  return (
    <section id="how-it-works" className={`py-24 px-6 border-y ${theme.colors.primaryBorder} ${theme.colors.surfaceHighlight}`}>
      <div className="max-w-7xl mx-auto">
         <div className="text-center mb-16">
            <h2 className={`text-3xl font-bold ${theme.colors.text}`}>How it works</h2>
         </div>

         <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {/* Connecting Line (Desktop) */}
            <div className={`hidden md:block absolute top-8 left-[16%] right-[16%] h-0.5 ${theme.colors.primaryBorder} border-t-2 border-dashed z-0`}></div>

            {steps.map((step, i) => (
                <div key={i} className="relative z-10 flex flex-col items-center text-center space-y-6">
                    <div className={`w-16 h-16 rounded-2xl ${theme.colors.surface} ${theme.ui.cardShadow} flex items-center justify-center border ${theme.colors.primaryBorder}`}>
                        <step.icon className={theme.colors.primary} size={24} />
                    </div>
                    <div>
                        <h3 className={`text-xl font-bold mb-2 ${theme.colors.text}`}>{step.title}</h3>
                        <p className={`${theme.colors.textMuted} text-sm px-8`}>{step.desc}</p>
                    </div>
                </div>
            ))}
         </div>
      </div>
    </section>
  );
};

export default FeatureSection;