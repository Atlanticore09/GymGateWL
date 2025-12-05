import React from 'react';
import { X, Check, ArrowDown, Dumbbell, ClipboardList, Zap, BrainCircuit, Plus, Equal } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTheme } from './ThemeContext';

const ProblemSolution = () => {
  const { theme } = useTheme();

  return (
    <section className="pt-32 pb-12 px-6 relative z-10 flex flex-col items-center justify-center min-h-[70vh]">
      <div className="max-w-5xl mx-auto w-full">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className={`text-sm font-bold tracking-widest uppercase mb-4 ${theme.colors.textMuted}`}>The Paradox</h2>
          <h1 className={`text-4xl md:text-6xl font-bold ${theme.colors.text} leading-tight`}>
            Why you quit your last <br /> workout tracker.
          </h1>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 relative">
          
          <div className={`hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 bg-gradient-to-r from-transparent via-${theme.colors.primaryBg} to-transparent w-full h-px opacity-20`}></div>

          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className={`p-8 rounded-3xl border border-red-500/20 bg-red-500/5 backdrop-blur-sm relative overflow-hidden flex flex-col h-full`}
          >
            <div className="flex items-center gap-3 mb-8">
               <div className="w-8 h-8 rounded-full bg-red-500/10 text-red-500 flex items-center justify-center shrink-0 border border-red-500/20">
                 <X size={16} />
               </div>
               <h3 className={`text-xl font-bold ${theme.colors.text}`}>Traditional Apps</h3>
            </div>

            <div className="flex-1 flex flex-col justify-center space-y-6">
              <div className={`flex items-center gap-4 ${theme.colors.text} opacity-80`}>
                <div className="w-12 h-12 rounded-xl bg-red-500/10 flex items-center justify-center shrink-0">
                  <Dumbbell className="text-red-400" size={24} />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider font-bold text-red-400 mb-1">Habit 1</div>
                  <div className="font-bold text-lg">Go to Gym</div>
                </div>
              </div>

              <div className="flex items-center gap-4 pl-4">
                <Plus size={20} className="text-red-500/50" />
                <span className="text-sm text-red-500/50 font-medium">AND</span>
              </div>

              <div className={`flex items-center gap-4 ${theme.colors.text} opacity-80`}>
                <div className="w-12 h-12 rounded-xl bg-red-500/10 flex items-center justify-center shrink-0">
                  <ClipboardList className="text-red-400" size={24} />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider font-bold text-red-400 mb-1">Habit 2</div>
                  <div className="font-bold text-lg">Manually Log</div>
                </div>
              </div>

              <div className="pt-6 border-t border-red-500/20 mt-2">
                 <div className="flex items-center gap-3 text-red-500 font-bold text-xl">
                   <Equal size={24} />
                   <span>Burnout & Quit</span>
                 </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className={`p-8 rounded-3xl border ${theme.colors.primaryBorder} ${theme.colors.surfaceHighlight} backdrop-blur-md relative overflow-hidden shadow-2xl flex flex-col h-full`}
          >
             <div className={`absolute top-0 right-0 w-64 h-64 ${theme.colors.primaryBg} blur-[120px] opacity-20 pointer-events-none`}></div>
            
            <div className="flex items-center gap-3 mb-8 relative z-10">
               <div className={`w-8 h-8 rounded-full ${theme.colors.primaryBg} text-white flex items-center justify-center shrink-0 shadow-lg`}>
                 <Check size={16} />
               </div>
               <h3 className={`text-xl font-bold ${theme.colors.text}`}>The GymGate Way</h3>
            </div>
            
            <div className="flex-1 flex flex-col justify-center space-y-6 relative z-10">
              <div className={`flex items-center gap-4 ${theme.colors.text}`}>
                <div className={`w-12 h-12 rounded-xl ${theme.colors.primaryBg} flex items-center justify-center shrink-0 shadow-lg`}>
                  <BrainCircuit className="text-white" size={24} />
                </div>
                <div>
                  <div className={`text-xs uppercase tracking-wider font-bold ${theme.colors.primary} mb-1`}>Focus Only On</div>
                  <div className="font-bold text-lg">Showing Up</div>
                </div>
              </div>

              <div className="flex items-center gap-4 pl-4">
                <Plus size={20} className={`${theme.colors.textMuted}`} />
                <span className={`text-sm ${theme.colors.textMuted} font-medium`}>AND</span>
              </div>

              <div className={`flex items-center gap-4 ${theme.colors.text}`}>
                <div className={`w-12 h-12 rounded-xl ${theme.colors.surface} border ${theme.colors.primaryBorder} flex items-center justify-center shrink-0`}>
                  <Zap className="text-yellow-400 fill-yellow-400" size={24} />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <div className="text-xs uppercase tracking-wider font-bold text-emerald-500 mb-1">Automated</div>
                  </div>
                  <div className="font-bold text-lg opacity-60">Everything Else</div>
                  <div className="text-xs opacity-40 mt-1">Optional: Add notes/muscles if you want</div>
                </div>
              </div>

               <div className={`pt-6 border-t ${theme.colors.primaryBorder} mt-2`}>
                 <div className={`flex items-center gap-3 ${theme.colors.primary} font-bold text-xl`}>
                   <Equal size={24} />
                   <span>Consistency & Health</span>
                 </div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="flex flex-col items-center gap-4"
        >
          <div className="animate-bounce p-2 rounded-full border border-white/10">
            <ArrowDown className={theme.colors.text} size={20} />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProblemSolution;