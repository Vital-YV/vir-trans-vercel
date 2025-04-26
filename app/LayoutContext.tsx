"use client";
import { createContext, useContext, useState, ReactNode, Dispatch, SetStateAction } from 'react';

// Тип для контекста
interface LayoutContextType {
  isVisible: boolean;
  setIsVisible: Dispatch<SetStateAction<boolean>>;
}

// Инициализируем контекст с типом LayoutContextType | null
export const LayoutContext = createContext<LayoutContextType | null>(null);

// Кастомный хук
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
