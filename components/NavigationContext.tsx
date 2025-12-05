import React, { createContext, useContext, useState } from 'react';

export type Page = 'home' | 'waitlist';

interface NavigationContextType {
  currentPage: Page;
  navigateTo: (page: Page, elementId?: string) => void;
  targetId: string | null;
  clearTargetId: () => void;
}

const NavigationContext = createContext<NavigationContextType | undefined>(undefined);

export const NavigationProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [targetId, setTargetId] = useState<string | null>(null);

  const navigateTo = (page: Page, elementId?: string) => {
    setCurrentPage(page);
    if (elementId) {
      setTargetId(elementId);
    } else {
      setTargetId(null);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const clearTargetId = () => setTargetId(null);

  return (
    <NavigationContext.Provider value={{ currentPage, navigateTo, targetId, clearTargetId }}>
      {children}
    </NavigationContext.Provider>
  );
};

export const useNavigation = () => {
  const context = useContext(NavigationContext);
  if (!context) {
    throw new Error('useNavigation must be used within a NavigationProvider');
  }
  return context;
};