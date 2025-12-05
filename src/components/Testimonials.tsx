import React from 'react';
import { useTheme } from './ThemeContext';
import { TESTIMONIALS } from '../constants';
import { Star } from 'lucide-react';

const Testimonials: React.FC = () => {
  const { theme } = useTheme();

  return (
    <section className="py-24 px-6 relative z-10">
       <div className="max-w-7xl mx-auto">
         <h2 className={`text-center text-3xl font-bold mb-16 ${theme.colors.text}`}>Loved by Gym Rats</h2>
         
         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
           {TESTIMONIALS.map((t) => (
             <div key={t.id} className={`p-8 ${theme.colors.surface} ${theme.ui.roundness} ${theme.ui.cardShadow} flex flex-col justify-between h-full`}>
               <div className="flex gap-1 mb-6">
                 {[1,2,3,4,5].map(i => (
                   <Star key={i} size={16} className={`${theme.colors.primary} fill-current`} />
                 ))}
               </div>
               <p className={`text-lg font-medium mb-8 ${theme.colors.text}`}>"{t.quote}"</p>
               <div className="flex items-center gap-4">
                 <div className={`w-10 h-10 rounded-full ${theme.colors.primaryBg} flex items-center justify-center text-white font-bold`}>
                   {t.author.charAt(0)}
                 </div>
                 <div>
                   <p className={`font-bold text-sm ${theme.colors.text}`}>{t.author}</p>
                   <p className={`text-xs ${theme.colors.textMuted}`}>{t.role}</p>
                 </div>
               </div>
             </div>
           ))}
         </div>
       </div>
    </section>
  );
};

export default Testimonials;