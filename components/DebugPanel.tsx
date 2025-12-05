import React, { useState } from 'react';
import { Settings, X } from 'lucide-react';
import { useTheme } from './ThemeContext';
import { ThemeId } from '../types';

const DebugPanel: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setThemeId, availableThemes } = useTheme();

  return (
    <div className="fixed bottom-6 right-6 z-[100]">
      {!isOpen && (
        <button 
          onClick={() => setIsOpen(true)}
          className="bg-black text-white p-3 rounded-full shadow-2xl hover:scale-110 transition-transform"
        >
          <Settings size={20} />
        </button>
      )}

      {isOpen && (
        <div className="bg-white text-slate-900 p-6 rounded-2xl shadow-2xl border border-slate-200 w-72 animate-fade-up">
          <div className="flex justify-between items-center mb-6">
            <h3 className="font-bold text-sm uppercase tracking-wider">Design System</h3>
            <button onClick={() => setIsOpen(false)}><X size={18} /></button>
          </div>

          <div className="space-y-2">
            {availableThemes.map((t) => (
              <button
                key={t.id}
                onClick={() => setThemeId(t.id as ThemeId)}
                className={`w-full flex items-center justify-between px-4 py-3 rounded-lg border transition-all ${
                  theme.id === t.id 
                    ? 'bg-slate-100 border-slate-300' 
                    : 'bg-white border-transparent hover:bg-slate-50'
                }`}
              >
                <span className="text-sm font-bold">{t.name}</span>
                {theme.id === t.id && <div className={`w-2 h-2 rounded-full ${theme.colors.primaryBg}`}></div>}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default DebugPanel;