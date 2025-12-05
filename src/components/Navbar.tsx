import React from 'react';
import { useTheme } from './ThemeContext';
import { useNavigation } from './NavigationContext';

const Navbar = () => {
  const { theme } = useTheme();
  const { navigateTo } = useNavigation();

  // This is the magic line that fixes the broken image link
  const logoPath = `${import.meta.env.BASE_URL}logo.png`;

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 border-b ${theme.colors.primaryBorder} bg-opacity-80 backdrop-blur-md`}>
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        
        {/* Logo Section */}
        <div 
          className="flex items-center gap-3 cursor-pointer" 
          onClick={() => navigateTo('home')}
        >
          <img 
            src={logoPath} 
            alt="GymGate Logo" 
            className="w-8 h-8 object-contain" 
          />
          <span className="font-bold text-xl tracking-tight">GymGate</span>
        </div>

        {/* Navigation Links */}
        <div className="flex items-center gap-6">
          <button 
            onClick={() => navigateTo('waitlist')}
            className={`px-4 py-2 rounded-full text-sm font-medium ${theme.colors.primary} text-white hover:opacity-90 transition-opacity`}
          >
            Join Waitlist
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
