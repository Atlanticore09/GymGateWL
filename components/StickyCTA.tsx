import React, { useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { useTheme } from './ThemeContext';
import { useNavigation } from './NavigationContext';

const StickyCTA = () => {
  const { theme } = useTheme();
  const { navigateTo } = useNavigation();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 800);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 p-4 animate-fade-up">
      <div className={`max-w-xl mx-auto ${theme.colors.surface} ${theme.ui.roundness} p-4 shadow-2xl flex items-center justify-between gap-4 border ${theme.colors.primaryBorder} md:mb-4`}>
        <div className="hidden sm:block pl-2">
          <p className={`${theme.colors.text} font-bold text-sm`}>Don't miss the launch</p>
        </div>
        <button 
          onClick={() => navigateTo('waitlist')}
          className={`flex-1 sm:flex-none ${theme.colors.action} ${theme.colors.actionText} px-6 py-3 rounded-lg font-bold text-sm flex items-center justify-center gap-2 transition-transform active:scale-95`}
        >
          Join Waitlist <ArrowRight size={16} />
        </button>
      </div>
    </div>
  );
};

export default StickyCTA;