"use client";
import { createContext, useContext, useState, ReactNode, useEffect } from 'react';

// Create a context
export const LayoutContext = createContext(null);

// Create a custom hook for easy access
export const useLayout = () => {
  const context = useContext(LayoutContext);
  if (!context) {
    throw new Error('useLayout must be used within a LayoutProvider');
  }
  return context;
};


export const LayoutProvider = ({ children }: { children: ReactNode }) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <LayoutContext.Provider value={{ isVisible, setIsVisible }}>
      {children}
    </LayoutContext.Provider>
  );
};
