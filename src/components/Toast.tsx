import React from 'react';
import { useGym } from '../context/GymContext';
import { CheckCircle2 } from 'lucide-react';

export const Toast: React.FC = () => {
  const { toastMessage } = useGym();

  if (!toastMessage) return null;

  return (
    <div className="fixed top-20 right-6 z-50 flex items-center gap-2.5 bg-[#18181f] border border-[#ccff00]/40 text-white text-xs py-3 px-4 rounded-lg shadow-2xl animate-in fade-in slide-in-from-top-2 duration-200">
      <CheckCircle2 className="w-4 h-4 text-[#ccff00] shrink-0" />
      <span className="font-medium">{toastMessage}</span>
    </div>
  );
};
