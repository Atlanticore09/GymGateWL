import React from 'react';
import { useTheme } from './ThemeContext';

const AnimatedBackground = () => {
  const { theme } = useTheme();

  return (
    <div className={`fixed inset-0 z-0 pointer-events-none overflow-hidden ${theme.colors.bg} transition-colors duration-700`}>
      
      {theme.id === 'pure' && (
        <>
          <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-blue-100/40 rounded-full blur-3xl animate-float opacity-70"></div>
          <div className="absolute bottom-[-20%] left-[-10%] w-[600px] h-[600px] bg-slate-100/60 rounded-full blur-3xl animate-float opacity-70" style={{ animationDelay: '2s' }}></div>
        </>
      )}

      {theme.id === 'vitamin' && (
        <>
           <div className="absolute top-[-10%] left-[20%] w-[600px] h-[600px] bg-orange-200/20 rounded-full blur-[100px] animate-float"></div>
           <div className="absolute top-[40%] right-[-10%] w-[500px] h-[500px] bg-yellow-200/30 rounded-full blur-[100px] animate-float" style={{ animationDelay: '3s' }}></div>
        </>
      )}

      {theme.id === 'focus' && (
        <>
          <div className="absolute inset-0 opacity-[0.03]" style={{
            backgroundImage: 'linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)',
            backgroundSize: '50px 50px'
          }}></div>
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-purple-900/10 blur-[120px] rounded-full"></div>
        </>
      )}
    </div>
  );
};

export default AnimatedBackground;