import React, { useEffect, useState, useRef } from 'react';
import { Globe, MapPin, Plus } from 'lucide-react';
import { useTheme } from './ThemeContext';

const ParticleGlobe = () => {
  const { theme } = useTheme();
  const [rotation, setRotation] = useState(0);
  const requestRef = useRef(0);
  
  const numPoints = 150;
  const points = Array.from({ length: numPoints }, (_, i) => {
    const phi = Math.acos(1 - 2 * (i + 0.5) / numPoints);
    const theta = Math.PI * (1 + 5 ** 0.5) * (i + 0.5);
    
    const x = Math.cos(theta) * Math.sin(phi);
    const y = Math.sin(theta) * Math.sin(phi);
    const z = Math.cos(phi);

    return { x, y, z };
  });

  const animate = () => {
    setRotation(prev => (prev + 0.01) % (Math.PI * 2));
    requestRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    requestRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(requestRef.current);
  }, []);

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <div className={`absolute inset-0 rounded-full blur-xl opacity-40 ${theme.colors.primaryBg}`}></div>

      <div className="relative w-full h-full perspective-1000">
        {points.map((point, i) => {
          const rotatedX = point.x * Math.cos(rotation) - point.z * Math.sin(rotation);
          const rotatedZ = point.x * Math.sin(rotation) + point.z * Math.cos(rotation);
          
          const scale = (rotatedZ + 2) / 3;
          const opacity = Math.max(0.1, (rotatedZ + 1) / 2);
          
          const size = Math.max(1.5, 3 * scale);

          const left = `${50 + rotatedX * 35}%`;
          const top = `${50 + point.y * 35}%`;

          const isHighlight = i % 20 === 0;
          const colorClass = isHighlight ? theme.colors.primaryBg : (theme.id === 'focus' ? 'bg-white' : 'bg-slate-800');

          return (
            <div
              key={i}
              className={`absolute rounded-full transition-colors duration-500 ${colorClass}`}
              style={{
                left,
                top,
                width: `${size}px`,
                height: `${size}px`,
                opacity: opacity,
                zIndex: Math.floor(rotatedZ * 100),
                transform: `translate(-50%, -50%)`,
              }}
            />
          );
        })}
        
        <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] border border-dashed ${theme.colors.primaryBorder} rounded-full opacity-30 animate-[spin_10s_linear_infinite]`}></div>
      </div>
    </div>
  );
};

const GlobalReach = () => {
  const { theme } = useTheme();

  return (
    <section className="py-24 px-6 relative z-10 overflow-hidden">
      <div className="max-w-4xl mx-auto text-center">
        
        <div className="flex items-center justify-center gap-6 mb-8">
            <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border ${theme.colors.primaryBorder} ${theme.colors.surfaceHighlight}`}>
                <Globe size={14} className={theme.colors.primary} />
                <span className={`text-xs font-bold tracking-widest uppercase ${theme.colors.textMuted}`}>Global Access</span>
            </div>
            
            <div className="w-20 h-20 -my-6">
                <ParticleGlobe />
            </div>
        </div>

        <h2 className={`text-4xl md:text-6xl font-bold ${theme.colors.text} leading-tight mb-6`}>
           Works where you work out.
        </h2>
        
        <p className={`text-xl ${theme.colors.textMuted} leading-relaxed max-w-xl mx-auto mb-12`}>
           Whether you're at a massive franchise in New York or a basement gym in Tokyo, GymGate has you covered.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
             <div className={`p-6 rounded-2xl ${theme.colors.surface} border ${theme.colors.primaryBorder} flex items-center gap-4 text-left shadow-sm`}>
                <div className={`w-12 h-12 rounded-full ${theme.colors.surfaceHighlight} flex items-center justify-center shrink-0`}>
                   <MapPin className={theme.colors.primary} size={24} />
                </div>
                <div>
                   <h3 className={`font-bold text-lg ${theme.colors.text}`}>40,000+ Locations</h3>
                   <p className={`text-sm ${theme.colors.textMuted}`}>Pre-mapped gyms worldwide.</p>
                </div>
             </div>
             
             <div className={`p-6 rounded-2xl ${theme.colors.surface} border ${theme.colors.primaryBorder} flex items-center gap-4 text-left shadow-sm`}>
                <div className={`w-12 h-12 rounded-full ${theme.colors.surfaceHighlight} flex items-center justify-center shrink-0`}>
                   <Plus className={theme.colors.primary} size={24} />
                </div>
                <div>
                   <h3 className={`font-bold text-lg ${theme.colors.text}`}>Add Your Own</h3>
                   <p className={`text-sm ${theme.colors.textMuted}`}>Create custom geofences instantly.</p>
                </div>
             </div>
        </div>

      </div>
    </section>
  );
};

export default GlobalReach;