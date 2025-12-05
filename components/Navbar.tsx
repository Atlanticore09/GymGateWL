import React from 'react';
import { useTheme } from './ThemeContext';
import { useNavigation } from './NavigationContext';
import Logo from './Logo';

const Navbar = () => {
  const { theme } = useTheme();
  const { navigateTo } = useNavigation();

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-500 ${theme.ui.glass}`}>
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <button 
          onClick={() => navigateTo('home')}
          className="flex items-center gap-3 hover:opacity-80 transition-opacity group"
        >
          <div className="w-10 h-10 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
            <Logo className="w-8 h-8" />
          </div>
          
          <span className={`font-bold text-lg tracking-tight ${theme.colors.text}`}>
            GymGate
          </span>
        </button>
        
        <div className="hidden md:flex items-center gap-8">
          <button 
            onClick={() => navigateTo('home', 'features')} 
            className={`text-sm font-medium ${theme.colors.textMuted} hover:${theme.colors.text} transition-colors`}
          >
            Features
          </button>
          <button 
            onClick={() => navigateTo('home', 'how-it-works')} 
            className={`text-sm font-medium ${theme.colors.textMuted} hover:${theme.colors.text} transition-colors`}
          >
            How it works
          </button>
          
          <button 
            onClick={() => navigateTo('waitlist')}
            className={`px-4 py-2 ${theme.colors.action} ${theme.colors.actionText} rounded-lg text-sm font-bold hover:opacity-90 transition-opacity shadow-lg`}
          >
            Get Early Access
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;