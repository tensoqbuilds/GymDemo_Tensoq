import React from 'react';
import { ArrowUpRight, MessageSquare, Flame } from 'lucide-react';
import { useGym } from '../context/GymContext';

export const FinalCta: React.FC = () => {
  const { openLeadModal, getWhatsAppLink } = useGym();

  return (
    <section className="relative py-28 lg:py-36 bg-[#09090b] overflow-hidden border-t border-white/5">
      {/* Background Photography with Dramatic Scrim */}
      <div className="absolute inset-0 z-0">
        <img
          src="/src/assets/images/gym_interior_facility_1791308151063.jpg"
          alt="Iron District Fitness Arena"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center filter brightness-[0.32] contrast-[1.15]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#09090b] via-[#09090b]/75 to-[#09090b]/80" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
        <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#ccff00] bg-black/60 px-4 py-1.5 rounded-full border border-[#ccff00]/30 backdrop-blur-md">
          <Flame className="w-3.5 h-3.5" />
          <span>YOUR STRONGER SELF STARTS TODAY</span>
        </div>

        <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black font-display uppercase tracking-tight text-white leading-[0.95]">
          STOP WAITING. <br />
          <span className="text-[#ccff00]">START TRAINING.</span>
        </h2>

        <p className="text-lg sm:text-2xl text-zinc-300 font-light max-w-2xl mx-auto tracking-wide">
          Your future self will thank you.
        </p>

        {/* Buttons */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
          <button
            onClick={() => openLeadModal('Final CTA Button')}
            className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#ccff00] hover:bg-[#b8e600] text-black font-bold text-xs uppercase tracking-wider rounded transition-all shadow-xl shadow-[#ccff00]/20 cursor-pointer font-display"
          >
            <span>BOOK FREE TRIAL</span>
            <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
          </button>

          <a
            href={getWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#18181f]/90 hover:bg-[#222228] text-white hover:text-emerald-400 border border-white/10 hover:border-emerald-500/40 font-bold text-xs uppercase tracking-wider rounded backdrop-blur-md transition-all font-display"
          >
            <MessageSquare className="w-4 h-4 text-emerald-400 fill-current" />
            <span>WHATSAPP US</span>
          </a>
        </div>

        <div className="pt-8 text-xs text-zinc-400 font-mono">
          No credit card required · Free 1-Day VIP Pass · InBody 570 Analysis included
        </div>
      </div>
    </section>
  );
};
