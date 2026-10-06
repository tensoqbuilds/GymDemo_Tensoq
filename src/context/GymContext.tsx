import React, { createContext, useContext, useState, useEffect } from 'react';
import { GymConfig, GalleryItem } from '../types/gym';
import { initialGymConfig } from '../config/gymConfig';

interface LeadFormState {
  fullName: string;
  phone: string;
  goal: string;
  preferredTime: string;
  experienceLevel: string;
  message: string;
}

interface GymContextType {
  config: GymConfig;
  updateConfig: (updates: Partial<GymConfig>) => void;
  resetConfig: () => void;
  // Theme state
  theme: 'dark' | 'light';
  toggleTheme: () => void;
  // Lead Modal Controls
  isLeadModalOpen: boolean;
  openLeadModal: (initialGoal?: string) => void;
  closeLeadModal: () => void;
  activeGoalPreset: string;
  // Lightbox
  activeLightboxItem: GalleryItem | null;
  openLightbox: (item: GalleryItem) => void;
  closeLightbox: () => void;
  // Demo Pitch Switcher
  isPitchDrawerOpen: boolean;
  setIsPitchDrawerOpen: (open: boolean) => void;
  // Notification Toast
  toastMessage: string | null;
  showToast: (msg: string) => void;
  // Direct WhatsApp Generator
  getWhatsAppLink: (customMessage?: string) => string;
}

const GymContext = createContext<GymContextType | undefined>(undefined);

export const GymProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Requirement: Default initial state is strictly LIGHT MODE across all fresh loads and refreshes
  const [theme, setTheme] = useState<'dark' | 'light'>('light');

  const [config, setConfig] = useState<GymConfig>(() => {
    try {
      const saved = localStorage.getItem('iron_district_gym_config');
      return saved ? JSON.parse(saved) : initialGymConfig;
    } catch {
      return initialGymConfig;
    }
  });

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
    } else {
      document.documentElement.classList.add('light');
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  const [isLeadModalOpen, setIsLeadModalOpen] = useState(false);
  const [activeGoalPreset, setActiveGoalPreset] = useState('Weight Loss & Toning');
  const [activeLightboxItem, setActiveLightboxItem] = useState<GalleryItem | null>(null);
  const [isPitchDrawerOpen, setIsPitchDrawerOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const updateConfig = (updates: Partial<GymConfig>) => {
    setConfig((prev) => {
      const next = { ...prev, ...updates };
      try {
        localStorage.setItem('iron_district_gym_config', JSON.stringify(next));
      } catch (e) {
        console.error('Storage error', e);
      }
      return next;
    });
    showToast('Client branding settings updated in real-time!');
  };

  const resetConfig = () => {
    setConfig(initialGymConfig);
    try {
      localStorage.removeItem('iron_district_gym_config');
    } catch (e) {
      console.error(e);
    }
    showToast('Reset back to Iron District Fitness defaults.');
  };

  const openLeadModal = (initialGoal?: string) => {
    if (initialGoal) setActiveGoalPreset(initialGoal);
    setIsLeadModalOpen(true);
  };

  const closeLeadModal = () => {
    setIsLeadModalOpen(false);
  };

  const openLightbox = (item: GalleryItem) => {
    setActiveLightboxItem(item);
  };

  const closeLightbox = () => {
    setActiveLightboxItem(null);
  };

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage((current) => (current === msg ? null : current));
    }, 4000);
  };

  const getWhatsAppLink = (customMessage?: string) => {
    const rawNumber = config.whatsappNumber.replace(/[^0-9]/g, '');
    const cleanNumber = rawNumber.startsWith('91') ? rawNumber : `91${rawNumber}`;
    const text = encodeURIComponent(customMessage || config.whatsappDefaultMessage);
    return `https://wa.me/${cleanNumber}?text=${text}`;
  };

  return (
    <GymContext.Provider
      value={{
        config,
        updateConfig,
        resetConfig,
        theme,
        toggleTheme,
        isLeadModalOpen,
        openLeadModal,
        closeLeadModal,
        activeGoalPreset,
        activeLightboxItem,
        openLightbox,
        closeLightbox,
        isPitchDrawerOpen,
        setIsPitchDrawerOpen,
        toastMessage,
        showToast,
        getWhatsAppLink,
      }}
    >
      {children}
    </GymContext.Provider>
  );
};

export const useGym = () => {
  const context = useContext(GymContext);
  if (!context) {
    throw new Error('useGym must be used within a GymProvider');
  }
  return context;
};
