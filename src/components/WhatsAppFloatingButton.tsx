import React, { useState } from 'react';
import { MessageSquare, X } from 'lucide-react';
import { useGym } from '../context/GymContext';

export const WhatsAppFloatingButton: React.FC = () => {
  const { config, getWhatsAppLink } = useGym();
  const [isHovered, setIsHovered] = useState(false);
  const [isBannerDismissed, setIsBannerDismissed] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-2.5">
      {/* Quick message teaser bubble (dismissible) */}
      {!isBannerDismissed && (
        <div className="hidden sm:flex items-center gap-2 bg-[#18181c] border border-white/10 text-zinc-200 text-xs py-2 px-3.5 rounded-lg shadow-xl animate-in fade-in slide-in-from-bottom-2 duration-300 max-w-xs">
          <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="font-medium">
            Have questions about memberships or trial passes?
          </span>
          <button
            onClick={() => setIsBannerDismissed(true)}
            className="text-zinc-500 hover:text-white p-0.5"
            aria-label="Dismiss message bubble"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Floating Action Button */}
      <div className="relative group">
        {/* Hover Tooltip */}
        <div
          className={`absolute right-full mr-3 top-1/2 -translate-y-1/2 whitespace-nowrap bg-black/90 border border-white/10 text-zinc-100 text-xs font-semibold py-1.5 px-3 rounded shadow-lg pointer-events-none transition-all duration-200 ${
            isHovered ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-2'
          }`}
        >
          Chat with our fitness team
        </div>

        <a
          href={getWhatsAppLink()}
          target="_blank"
          rel="noopener noreferrer"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white shadow-xl shadow-[#25D366]/25 hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer"
          aria-label="Chat with Iron District Fitness on WhatsApp"
        >
          {/* Custom crisp SVG WhatsApp icon */}
          <svg
            className="w-7 h-7 fill-white"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path d="M17.507 14.307l-.009.075c-.338-.169-2.003-.988-2.313-1.101-.311-.113-.538-.169-.765.169-.226.339-.879 1.101-1.077 1.327-.197.226-.395.254-.733.085-.338-.169-1.428-.526-2.721-1.68-1.006-.897-1.685-2.005-1.882-2.344-.198-.339-.021-.522.148-.691.152-.152.339-.395.508-.593.169-.198.226-.339.339-.565.113-.226.056-.423-.028-.593-.085-.169-.765-1.843-1.047-2.525-.276-.665-.558-.574-.766-.585-.198-.01-.424-.01-.65-.01-.226 0-.593.085-.903.423-.31.339-1.185 1.159-1.185 2.825 0 1.666 1.213 3.275 1.382 3.501.169.226 2.386 3.645 5.78 5.111 2.819 1.218 3.393.975 4.004.918.611-.057 1.97-.805 2.251-1.582.282-.777.282-1.442.198-1.582-.085-.141-.311-.226-.649-.395zM12.04 2C6.524 2 2.05 6.474 2.05 11.99c0 1.97.575 3.805 1.572 5.353L2 22l4.809-1.571c1.488.89 3.224 1.401 5.08 1.401 5.516 0 9.99-4.474 9.99-9.99 0-5.516-4.474-11.84-9.839-9.84zm0 18.232c-1.637 0-3.15-.494-4.42-1.341l-.317-.212-2.852.931.95-2.779-.232-.34a8.17 8.17 0 0 1-1.31-4.498c0-4.526 3.682-8.209 8.209-8.209 4.527 0 8.209 3.683 8.209 8.209 0 4.526-3.682 8.239-8.239 8.239z" />
          </svg>
        </a>
      </div>
    </div>
  );
};
