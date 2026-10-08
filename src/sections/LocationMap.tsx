import React from 'react';
import { MapPin, Clock, Phone, Navigation, ExternalLink, Car } from 'lucide-react';
import { useGym } from '../context/GymContext';

export const LocationMap: React.FC = () => {
  const { config, openLeadModal } = useGym();

  return (
    <section id="location" className="py-16 sm:py-20 lg:py-24 bg-white dark:bg-[#09090b] text-zinc-900 dark:text-zinc-100 border-t border-black/5 dark:border-white/5 transition-colors relative">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-emerald-600 dark:text-[#ccff00]">
              <span>FLAGSHIP SANCTUARY</span>
              <span aria-hidden="true">·</span>
              <span>{config.city.toUpperCase()}</span>
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black font-display uppercase tracking-tight text-zinc-900 dark:text-white leading-tight">
              TRAIN CLOSE TO HOME.
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400 text-sm sm:text-base leading-relaxed">
              Centrally situated in the heart of {config.neighborhood}, with direct arterial road connectivity and complimentary on-site valet parking.
            </p>
          </div>

          <div className="text-xs font-mono text-zinc-500 dark:text-zinc-400 uppercase tracking-widest self-start md:self-end flex items-center gap-2">
            <Car className="w-4 h-4 text-emerald-600 dark:text-[#ccff00]" />
            <span>VALET PARKING PROVIDED</span>
          </div>
        </div>

        {/* Location Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Information Card (5 cols) */}
          <div className="lg:col-span-5 bg-zinc-50 dark:bg-[#121215] border border-black/5 dark:border-white/10 rounded-2xl p-8 sm:p-10 flex flex-col justify-between shadow-xl">
            <div className="space-y-6">
              <div>
                <span className="text-[11px] font-mono text-emerald-600 dark:text-[#ccff00] uppercase font-bold tracking-wider">
                  HQ STUDIO
                </span>
                <h3 className="text-2xl sm:text-3xl font-black font-display uppercase tracking-tight text-zinc-900 dark:text-white mt-1">
                  {config.gymName}
                </h3>
                <p className="text-xs text-zinc-500 dark:text-zinc-400 font-mono mt-1">
                  {config.neighborhood}, {config.city}, {config.state}
                </p>
              </div>

              {/* Address details */}
              <div className="space-y-4 pt-4 border-t border-black/5 dark:border-white/5 text-xs text-zinc-700 dark:text-zinc-300">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-emerald-600 dark:text-[#ccff00] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-zinc-900 dark:text-white block mb-0.5">Physical Address</span>
                    <span className="text-zinc-600 dark:text-zinc-400 leading-relaxed">{config.fullAddress}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-emerald-600 dark:text-[#ccff00] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-zinc-900 dark:text-white block mb-0.5">Operating Hours</span>
                    <div className="text-zinc-600 dark:text-zinc-400 space-y-0.5">
                      <div>Mon – Sat: <span className="text-zinc-900 dark:text-white font-mono">{config.openingHoursWeekday}</span></div>
                      <div>Sunday: <span className="text-zinc-900 dark:text-white font-mono">{config.openingHoursWeekend}</span></div>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-4 h-4 text-emerald-600 dark:text-[#ccff00] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-zinc-900 dark:text-white block mb-0.5">Direct Desk & Concierge</span>
                    <a
                      href={`tel:${config.phone}`}
                      className="text-zinc-900 dark:text-white font-mono hover:text-emerald-600 dark:hover:text-[#ccff00] transition-colors"
                    >
                      {config.displayPhone}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="pt-8 mt-6 border-t border-black/5 dark:border-white/5 flex flex-col sm:flex-row gap-3">
              <a
                href={config.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3.5 bg-[#ccff00] hover:bg-[#b8e600] text-black font-bold text-xs uppercase tracking-wider rounded transition-all cursor-pointer font-display"
              >
                <Navigation className="w-4 h-4 fill-current" />
                <span>GET DIRECTIONS</span>
              </a>

              <button
                onClick={() => openLeadModal('Visit Facility Consultation')}
                className="inline-flex items-center justify-center gap-2 px-4 py-3.5 border border-black/10 dark:border-white/10 hover:border-black/30 dark:hover:border-white/30 text-zinc-800 dark:text-white rounded text-xs font-semibold uppercase tracking-wider hover:bg-black/5 dark:hover:bg-white/5 transition-colors cursor-pointer"
              >
                <span>BOOK VISIT</span>
              </button>
            </div>
          </div>

          {/* Interactive Visual Map Card (7 cols) */}
          <div className="lg:col-span-7 relative min-h-[380px] lg:min-h-full rounded-2xl overflow-hidden border border-black/5 dark:border-white/10 bg-zinc-900 dark:bg-[#121215] shadow-xl flex flex-col justify-between p-6 sm:p-8 text-white">
            {/* Dark Styled Map Graphic */}
            <div className="absolute inset-0 opacity-40 pointer-events-none">
              <svg className="w-full h-full object-cover" viewBox="0 0 800 600" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="800" height="600" fill="#0c0c0e" />
                <path d="M-50 150 Q 200 180 450 120 T 850 180" stroke="#25252d" strokeWidth="22" strokeLinecap="round" />
                <path d="M-50 420 Q 300 380 500 440 T 850 400" stroke="#25252d" strokeWidth="26" strokeLinecap="round" />
                <path d="M220 -50 Q 240 250 200 450 T 250 650" stroke="#25252d" strokeWidth="18" strokeLinecap="round" />
                <path d="M580 -50 Q 550 200 600 450 T 570 650" stroke="#25252d" strokeWidth="20" strokeLinecap="round" />
                <path d="M100 0 L 100 600" stroke="#18181f" strokeWidth="6" strokeDasharray="10 10" />
                <path d="M360 0 L 360 600" stroke="#18181f" strokeWidth="6" strokeDasharray="10 10" />
                <path d="M720 0 L 720 600" stroke="#18181f" strokeWidth="6" strokeDasharray="10 10" />
                <path d="M0 280 L 800 280" stroke="#18181f" strokeWidth="6" strokeDasharray="10 10" />
                <path d="M120 280 Q 380 260 650 300" stroke="#ccff00" strokeWidth="4" strokeOpacity="0.4" />
                <rect x="360" y="220" width="120" height="90" rx="12" fill="#ccff00" fillOpacity="0.06" stroke="#ccff00" strokeWidth="1" strokeDasharray="4 4" />
              </svg>
            </div>

            {/* Top Status */}
            <div className="relative z-10 flex items-center justify-between">
              <span className="text-[11px] font-mono uppercase bg-black/80 backdrop-blur-md px-3 py-1.5 rounded border border-white/10 text-white font-semibold">
                ROAD NO. 12 CORRIDOR · PRIME ACCESS
              </span>
              <a
                href={config.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-mono text-[#ccff00] hover:underline flex items-center gap-1 bg-black/80 backdrop-blur-md px-2.5 py-1 rounded border border-white/10"
              >
                <span>OPEN IN GOOGLE MAPS</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            {/* Centered Pin Indicator */}
            <div className="relative z-10 my-auto flex flex-col items-center justify-center text-center p-6">
              <div className="relative mb-3">
                <div className="w-12 h-12 rounded-full bg-[#ccff00] text-black flex items-center justify-center shadow-2xl shadow-[#ccff00]/40 animate-bounce">
                  <MapPin className="w-6 h-6 stroke-[2.5]" />
                </div>
                <div className="absolute inset-0 rounded-full bg-[#ccff00]/30 animate-ping -z-10" />
              </div>

              <div className="bg-black/90 backdrop-blur-md border border-white/10 rounded-xl p-4 max-w-xs shadow-2xl">
                <h4 className="text-sm font-bold text-white uppercase font-display">
                  {config.gymName}
                </h4>
                <p className="text-[11px] text-[#ccff00] font-mono mt-0.5">
                  Opposite MLA Colony, Banjara Hills
                </p>
                <div className="text-[10px] text-zinc-400 mt-2 border-t border-white/10 pt-2">
                  5 Mins from Jubilee Hills Checkpost · 12 Mins from Hitec City
                </div>
              </div>
            </div>

            {/* Bottom Connectivity Bar */}
            <div className="relative z-10 bg-[#16161b]/95 backdrop-blur-md border border-white/10 rounded-xl p-3.5 flex flex-wrap items-center justify-between text-xs text-zinc-300 gap-2">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                <span className="font-semibold text-white">Facility Open Now</span>
                <span className="text-zinc-500">·</span>
                <span className="text-zinc-400">Closes at 11:00 PM</span>
              </div>
              <span className="text-xs font-mono text-[#ccff00]">
                Clean Showers & Towels Available
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
