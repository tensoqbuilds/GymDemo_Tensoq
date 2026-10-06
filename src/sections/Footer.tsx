import React from 'react';
import { Instagram, Facebook, Youtube, Phone, MessageSquare, Mail, MapPin, ArrowUp, Sparkles } from 'lucide-react';
import { useGym } from '../context/GymContext';

export const Footer: React.FC = () => {
  const { config, getWhatsAppLink, setIsPitchDrawerOpen } = useGym();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-zinc-950 dark:bg-[#070709] border-t border-black/10 dark:border-white/5 text-zinc-400 text-xs py-16 lg:py-20 relative transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-14 border-b border-white/5">
          {/* Brand & Positioning (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <h3 className="text-xl sm:text-2xl font-black font-display uppercase tracking-tight text-white">
              {config.gymName}
            </h3>

            <p className="text-zinc-300 font-medium italic">
              "{config.tagline}"
            </p>

            <p className="text-zinc-400 text-xs leading-relaxed max-w-sm">
              Hyderabad's premier strength training and physique transformation studio. Equipped with Rogue power systems, CSCS coaches, and continuous clinical progress tracking.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href={config.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-white/5 dark:bg-[#121215] border border-white/10 hover:border-[#ccff00]/40 text-zinc-300 hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={config.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-white/5 dark:bg-[#121215] border border-white/10 hover:border-[#ccff00]/40 text-zinc-300 hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href={config.socials.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-white/5 dark:bg-[#121215] border border-white/10 hover:border-[#ccff00]/40 text-zinc-300 hover:text-white transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase text-white tracking-wider">
              QUICK NAVIGATION
            </h4>
            <ul className="space-y-2 text-zinc-400">
              <li>
                <a href="#top" className="hover:text-[#ccff00] transition-colors">Home</a>
              </li>
              <li>
                <a href="#programs" className="hover:text-[#ccff00] transition-colors">Programs</a>
              </li>
              <li>
                <a href="#trainers" className="hover:text-[#ccff00] transition-colors">Trainers & Coaches</a>
              </li>
              <li>
                <a href="#transformations" className="hover:text-[#ccff00] transition-colors">Transformations</a>
              </li>
              <li>
                <a href="#memberships" className="hover:text-[#ccff00] transition-colors">Memberships & Plans</a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-[#ccff00] transition-colors">Facility Tour</a>
              </li>
            </ul>
          </div>

          {/* Facility Hours (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase text-white tracking-wider">
              OPERATING TIMINGS
            </h4>
            <div className="space-y-2 text-zinc-400 font-mono text-[11px]">
              <div>
                <span className="text-zinc-200 block font-semibold">MONDAY – SATURDAY</span>
                <span>{config.openingHoursWeekday}</span>
              </div>
              <div className="pt-1">
                <span className="text-zinc-200 block font-semibold">SUNDAY SPECIAL HOURS</span>
                <span>{config.openingHoursWeekend}</span>
              </div>
              <div className="pt-2 text-zinc-500 font-sans">
                Complimentary basement valet available across all operating shifts.
              </div>
            </div>
          </div>

          {/* Direct Concierge Contact (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase text-white tracking-wider">
              STUDIO CONTACT
            </h4>
            <div className="space-y-2.5">
              <a
                href={`tel:${config.phone}`}
                className="flex items-center gap-2.5 text-zinc-300 hover:text-white transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[#ccff00]" />
                <span className="font-mono">{config.displayPhone}</span>
              </a>

              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-emerald-400 hover:text-emerald-300 transition-colors"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>WhatsApp Desk (+91)</span>
              </a>

              <a
                href={`mailto:${config.email}`}
                className="flex items-center gap-2.5 text-zinc-300 hover:text-white transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-[#ccff00]" />
                <span>{config.email}</span>
              </a>

              <div className="flex items-start gap-2.5 text-zinc-400 pt-1">
                <MapPin className="w-3.5 h-3.5 text-[#ccff00] shrink-0 mt-0.5" />
                <span className="text-[11px] leading-relaxed">{config.neighborhood}, {config.city}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-zinc-400">
          <div>
            © {new Date().getFullYear()} {config.gymName}. All rights reserved.
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsPitchDrawerOpen(true)}
              className="hover:text-[#ccff00] transition-colors cursor-pointer flex items-center gap-1 font-mono"
            >
              <Sparkles className="w-3 h-3 text-[#ccff00]" />
              <span>Pitch Customizer Tool</span>
            </button>
            <span aria-hidden="true">·</span>
            <button
              onClick={scrollToTop}
              className="hover:text-white flex items-center gap-1 cursor-pointer transition-colors"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3 h-3" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
