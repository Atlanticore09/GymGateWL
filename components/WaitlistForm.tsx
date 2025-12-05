import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { useTheme } from './ThemeContext';
import { useNavigation } from './NavigationContext';

const FORMSPREE_ENDPOINT = "https://formspree.io/f/xanrbpjz";

const WaitlistForm = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const { theme } = useTheme();
  const { currentPage, navigateTo } = useNavigation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(!email) return;

    setLoading(true);

    if (FORMSPREE_ENDPOINT.includes("YOUR_FORM_ID")) {
      setTimeout(() => {
        setLoading(false);
        setSubmitted(true);
      }, 1500);
      return;
    }

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({ email })
      });

      if (response.ok) {
        setSubmitted(true);
        setEmail('');
      } else {
        alert("Oops! There was a problem submitting your form. Please try again.");
      }
    } catch (error) {
      alert("Network error. Please check your connection and try again.");
    } finally {
      setLoading(false);
    }
  };

  const isPage = currentPage === 'waitlist';

  return (
    <section id="waitlist" className={`py-12 px-6 flex flex-col justify-center ${isPage ? 'flex-grow min-h-[60vh]' : ''}`}>
      <div className={`max-w-4xl w-full mx-auto ${theme.colors.surface} ${theme.ui.roundness} p-8 md:p-20 ${theme.ui.cardShadow} text-center space-y-8 relative overflow-hidden border ${theme.colors.primaryBorder}`}>
        
        {isPage && !submitted && (
           <button 
             onClick={() => navigateTo('home')}
             className={`absolute top-6 left-6 ${theme.colors.textMuted} hover:${theme.colors.text} transition-colors flex items-center gap-2 text-sm font-bold z-20`}
           >
             <ArrowLeft size={16} /> Back to Home
           </button>
        )}

        <div className={`absolute top-0 right-0 w-96 h-96 ${theme.colors.primaryBg} opacity-[0.03] rounded-bl-full pointer-events-none`}></div>
        <div className={`absolute bottom-0 left-0 w-64 h-64 ${theme.colors.primaryBg} opacity-[0.03] rounded-tr-full pointer-events-none`}></div>

        <AnimatePresence mode="wait">
          {!submitted ? (
            <motion.div
              key="form"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="relative z-10"
            >
              <h2 className={`text-4xl md:text-6xl font-bold ${theme.colors.text} mb-6 tracking-tight`}>
                Don't miss the drop.
              </h2>
              <p className={`text-xl ${theme.colors.textMuted} max-w-xl mx-auto mb-10`}>
                GymGate is currently invite-only. Enter your email to secure your spot in line for the December 2025 launch.
              </p>

              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto relative z-10">
                <input 
                  type="email" 
                  name="email"
                  placeholder="name@example.com" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={loading}
                  className={`flex-1 ${theme.colors.surfaceHighlight} border ${theme.colors.primaryBorder} rounded-xl px-6 py-4 ${theme.colors.text} text-lg focus:outline-none focus:ring-2 focus:ring-${theme.colors.primaryBg} transition-all disabled:opacity-50`}
                  required
                />
                <button 
                  type="submit"
                  disabled={loading}
                  className={`${theme.colors.action} ${theme.colors.actionText} px-10 py-4 rounded-xl font-bold text-lg hover:scale-105 active:scale-95 transition-all disabled:opacity-70 disabled:scale-100 flex items-center justify-center min-w-[140px] shadow-lg`}
                >
                  {loading ? (
                    <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : (
                    "Join List"
                  )}
                </button>
              </form>
              <p className={`mt-6 text-xs ${theme.colors.textMuted} opacity-60`}>
                Join 14,000+ others waiting for access. No spam, ever.
              </p>
            </motion.div>
          ) : (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
              className="flex flex-col items-center justify-center py-10"
            >
              <div className={`w-24 h-24 rounded-full ${theme.colors.primaryBg} flex items-center justify-center mb-6 shadow-2xl`}>
                <motion.svg 
                  viewBox="0 0 24 24" 
                  className="w-12 h-12 text-white stroke-current"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 0.5, delay: 0.2, ease: "easeInOut" }}
                >
                  <motion.path 
                    fill="none" 
                    strokeWidth="3" 
                    d="M5 13l4 4L19 7" 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                  />
                </motion.svg>
              </div>
              <h3 className={`text-3xl font-bold ${theme.colors.text} mb-4`}>You're on the list!</h3>
              <p className={`text-lg ${theme.colors.textMuted} max-w-md mx-auto`}>
                We'll notify you via email as soon as the beta is ready for download.
              </p>
              
              {isPage && (
                 <button 
                    onClick={() => navigateTo('home')}
                    className={`mt-12 px-6 py-2 rounded-full ${theme.colors.surfaceHighlight} hover:${theme.colors.primaryBg} hover:text-white border ${theme.colors.primaryBorder} transition-all text-sm font-bold`}
                 >
                    Return to Home
                 </button>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default WaitlistForm;