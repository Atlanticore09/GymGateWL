import React, { useState } from 'react';
import { useTheme } from './ThemeContext';
import { FAQS } from '../constants';
import { ChevronDown } from 'lucide-react';

const FAQ: React.FC = () => {
  const { theme } = useTheme();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 px-6 relative z-10">
      <div className={`max-w-3xl mx-auto ${theme.colors.surface} ${theme.ui.roundness} p-8 md:p-12 ${theme.ui.cardShadow}`}>
        <h2 className={`text-3xl font-bold mb-8 ${theme.colors.text}`}>Common Questions</h2>
        
        <div className="space-y-4">
          {FAQS.map((faq, index) => (
            <div key={index} className={`border-b ${theme.colors.primaryBorder} pb-4 last:border-0`}>
              <button 
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex justify-between items-center text-left py-4 focus:outline-none"
              >
                <span className={`font-semibold text-lg ${theme.colors.text}`}>{faq.question}</span>
                <ChevronDown 
                  className={`transition-transform duration-300 ${theme.colors.textMuted} ${openIndex === index ? 'rotate-180' : ''}`} 
                />
              </button>
              <div className={`overflow-hidden transition-all duration-300 ${openIndex === index ? 'max-h-40 opacity-100 mt-2' : 'max-h-0 opacity-0'}`}>
                <p className={`${theme.colors.textMuted} leading-relaxed`}>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;