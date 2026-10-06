import React, { useEffect } from 'react';
import { X, ZoomIn, ArrowRight } from 'lucide-react';
import { useGym } from '../context/GymContext';

export const GalleryLightbox: React.FC = () => {
  const { activeLightboxItem, closeLightbox, openLeadModal } = useGym();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeLightbox();
    };
    if (activeLightboxItem) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [activeLightboxItem, closeLightbox]);

  if (!activeLightboxItem) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Image Lightbox Preview"
      className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 sm:p-8 animate-in fade-in duration-200"
      onClick={closeLightbox}
    >
      <button
        onClick={closeLightbox}
        className="absolute top-6 right-6 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer z-10"
        aria-label="Close image lightbox"
      >
        <X className="w-6 h-6" />
      </button>

      <div
        className="relative max-w-5xl w-full max-h-[85vh] flex flex-col items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative overflow-hidden rounded-xl border border-white/10 shadow-2xl bg-[#121215] max-h-[75vh]">
          <img
            src={activeLightboxItem.image}
            alt={activeLightboxItem.title}
            referrerPolicy="no-referrer"
            className="w-full h-full object-contain max-h-[70vh]"
          />
        </div>

        <div className="w-full mt-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 px-2">
          <div>
            <span className="text-[11px] font-mono uppercase text-[#ccff00] tracking-widest block mb-0.5">
              {activeLightboxItem.category}
            </span>
            <h4 className="text-base sm:text-lg font-bold text-white font-display">
              {activeLightboxItem.title}
            </h4>
          </div>

          <button
            onClick={() => {
              closeLightbox();
              openLeadModal('Experience This Facility');
            }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-[#ccff00] hover:bg-[#b8e600] text-black text-xs font-bold uppercase rounded tracking-wider cursor-pointer font-display"
          >
            EXPERIENCE IN PERSON
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};
