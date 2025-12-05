import React, { createContext, useContext, useState } from 'react';
import { Theme, ThemeId } from '../types';

const THEMES: Record<string, Theme> = {
  'pure': {
    id: 'pure',
    name: 'PURE STATE',
    colors: {
      bg: 'bg-white',
      text: 'text-slate-900',
      textMuted: 'text-slate-500',
      primary: 'text-blue-600',
      primaryBg: 'bg-blue-600',
      primaryBorder: 'border-slate-200',
      secondaryBg: 'bg-slate-50',
      surface: 'bg-white',
      surfaceHighlight: 'bg-slate-50',
      action: 'bg-slate-900',
      actionText: 'text-white'
    },
    ui: {
      roundness: 'rounded-2xl',
      buttonShadow: 'shadow-xl hover:shadow-2xl hover:scale-[1.02] active:scale-95 transition-all duration-300',
      cardShadow: 'shadow-[0_8px_30px_rgb(0,0,0,0.04)]',
      glass: 'bg-white/80 backdrop-blur-md border-b border-slate-100',
    }
  },
  'vitamin': {
    id: 'vitamin',
    name: 'VITAMIN D',
    colors: {
      bg: 'bg-[#FFFDF7]', 
      text: 'text-stone-900',
      textMuted: 'text-stone-500',
      primary: 'text-orange-500',
      primaryBg: 'bg-orange-500',
      primaryBorder: 'border-orange-100',
      secondaryBg: 'bg-[#FFF4E6]', 
      surface: 'bg-white',
      surfaceHighlight: 'bg-orange-50',
      action: 'bg-orange-500',
      actionText: 'text-white'
    },
    ui: {
      roundness: 'rounded-3xl',
      buttonShadow: 'shadow-orange-500/20 shadow-lg hover:shadow-orange-500/40 hover:-translate-y-1 transition-all',
      cardShadow: 'shadow-[0_8px_30px_rgb(249,115,22,0.08)] border border-orange-100',
      glass: 'bg-[#FFFDF7]/90 backdrop-blur-md border-b border-orange-100',
    }
  },
  'focus': {
    id: 'focus',
    name: 'DEEP FOCUS',
    colors: {
      bg: 'bg-[#0A0A0A]',
      text: 'text-white',
      textMuted: 'text-neutral-400',
      primary: 'text-purple-400',
      primaryBg: 'bg-purple-600',
      primaryBorder: 'border-white/10',
      secondaryBg: 'bg-white/5',
      surface: 'bg-[#111111]',
      surfaceHighlight: 'bg-white/5',
      action: 'bg-white',
      actionText: 'text-black'
    },
    ui: {
      roundness: 'rounded-xl',
      buttonShadow: 'shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(255,255,255,0.2)] transition-all',
      cardShadow: 'shadow-2xl border border-white/5',
      glass: 'bg-black/60 backdrop-blur-xl border-b border-white/5',
    }
  }
};

interface ThemeContextType {
  theme: Theme;
  setThemeId: (id: ThemeId) => void;
  availableThemes: Theme[];
}

export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [currentThemeId, setCurrentThemeId] = useState<ThemeId>('focus');

  const value = {
    theme: THEMES[currentThemeId],
    setThemeId: setCurrentThemeId,
    availableThemes: Object.values(THEMES),
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};