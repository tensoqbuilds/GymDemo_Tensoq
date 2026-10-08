import React from 'react';
import { Sparkles, ArrowRight, Flame } from 'lucide-react';
import { useGym } from '../context/GymContext';

export const TopAnnouncement: React.FC = () => {
  const { openLeadModal } = useGym();

  return (
    <aside 
      aria-label="Limited Trial Offer"
      className="relative z-50 bg-zinc-950 dark:bg-[#121215] border-b border-black/10 dark:border-white/5 text-zinc-300 text-xs py-2 transition-colors hover:bg-zinc-900 dark:hover:bg-[#16161a]"
    >
      <div className="max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 flex items-center justify-between gap-4">
        <button
          onClick={() => openLeadModal('Free Trial Pass')}
          className="w-full flex items-center justify-center gap-2 group cursor-pointer text-left sm:text-center"
        >
          <span className="flex items-center gap-1.5 font-semibold text-[#ccff00] tracking-wide uppercase text-[11px] sm:text-xs">
            <Flame className="w-3.5 h-3.5 animate-pulse text-[#ccff00]" />
            LIMITED OFFER:
          </span>
          <span className="text-zinc-200 font-medium truncate">
            Only 20 Free Trial Passes Available This Month in Banjara Hills
          </span>
          <span className="hidden sm:inline-flex items-center gap-1 text-[#ccff00] text-[11px] font-semibold underline underline-offset-4 group-hover:translate-x-0.5 transition-transform">
            Claim Yours Today <ArrowRight className="w-3 h-3" />
          </span>
        </button>
      </div>
    </aside>
  );
};
