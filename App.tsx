import React, { useEffect } from 'react';
import { Twitter, Instagram } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import { ThemeProvider, useTheme } from './components/ThemeContext';
import { NavigationProvider, useNavigation } from './components/NavigationContext';

import AnimatedBackground from './components/AnimatedBackground';
import Navbar from './components/Navbar';
import ProblemSolution from './components/ProblemSolution';
import Hero from './components/Hero';
import GlobalReach from './components/GlobalReach';
import BentoGrid from './components/BentoGrid';
import FeatureSection from './components/FeatureSection';
import SocialProof from './components/SocialProof';
import FAQ from './components/FAQ';
import StickyCTA from './components/StickyCTA';
import WaitlistForm from './components/WaitlistForm';

const Footer = () => {
  const { theme } = useTheme();
  return (
    <footer className={`border-t ${theme.colors.primaryBorder} ${theme.colors.surfaceHighlight} py-12 px-6 relative z-10`}>
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className={`text-sm ${theme.colors.textMuted}`}>
          © 2024 GymGate Inc.
        </div>
        <div className="flex items-center gap-6">
          <a href="#" className={`${theme.colors.textMuted} hover:${theme.colors.text} transition-colors`}>
            <Twitter size={20} />
          </a>
          <a href="#" className={`${theme.colors.textMuted} hover:${theme.colors.text} transition-colors`}>
            <Instagram size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};

const ScrollHandler = () => {
  const { targetId, clearTargetId } = useNavigation();

  useEffect(() => {
    if (targetId) {
      const timer = setTimeout(() => {
        const element = document.getElementById(targetId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
          clearTargetId();
        }
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [targetId, clearTargetId]);

  return null;
};

const AppContent = () => {
  const { theme } = useTheme();
  const { currentPage } = useNavigation();

  return (
    <div className={`relative min-h-screen ${theme.colors.bg} ${theme.colors.text} selection:bg-black selection:text-white overflow-x-hidden font-sans`}>
      <AnimatedBackground />
      <Navbar />
      
      <main className="flex flex-col min-h-screen">
        <AnimatePresence mode="wait">
          {currentPage === 'home' && (
            <motion.div
              key="home"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            >
              <ScrollHandler />
              <ProblemSolution />
              <Hero />
              <GlobalReach />
              <BentoGrid />
              <FeatureSection />
              <SocialProof />
              <FAQ />
              <StickyCTA />
            </motion.div>
          )}

          {currentPage === 'waitlist' && (
            <motion.div
              key="waitlist"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="flex-grow flex flex-col pt-20"
            >
              <WaitlistForm />
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      <Footer />
    </div>
  );
};

const App = () => {
  return (
    <ThemeProvider>
      <NavigationProvider>
        <AppContent />
      </NavigationProvider>
    </ThemeProvider>
  );
};

export default App;