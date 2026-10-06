import React from 'react';
import { Users, Star, Award, Calendar, ArrowRight } from 'lucide-react';
import { useGym } from '../context/GymContext';
import { IMAGES } from '../assets/images';

export const SocialProofStrip: React.FC = () => {
  const { openLightbox, openLeadModal } = useGym();

  const stats = [
    {
      value: "500+",
      label: "ACTIVE MEMBERS",
      subtext: "Consistent daily lifters in Hyderabad",
      icon: Users,
    },
    {
      value: "4.9/5",
      label: "AVERAGE RATING",
      subtext: "Google & Justdial verified reviews",
      icon: Star,
    },
    {
      value: "12+",
      label: "EXPERT COACHES",
      subtext: "CSCS & K11 certified mentors",
      icon: Award,
    },
    {
      value: "8 YEARS",
      label: "OF EXCELLENCE",
      subtext: "Hyderabad's benchmark strength studio",
      icon: Calendar,
    },
  ];

  const gymSnapshots = [
    {
      id: "snap-barbell",
      title: "Championship Barbell Platforms",
      category: "Heavy Strength",
      image: IMAGES.barbellDeadlift,
    },
    {
      id: "snap-coaching",
      title: "1-on-1 Form Calibration",
      category: "Personal Training",
      image: IMAGES.ptCoaching,
    },
    {
      id: "snap-equipment",
      title: "Rogue Racks & Calibrated Dumbbells",
      category: "Equipment",
      image: IMAGES.equipmentRogue,
    },
    {
      id: "snap-community",
      title: "Turf Conditioning Track",
      category: "Athletics",
      image: IMAGES.communityWorkout,
    },
  ];

  return (
    <section id="proof-strip" className="relative z-20 bg-zinc-50 dark:bg-[#121215] text-zinc-900 dark:text-zinc-100 border-y border-black/5 dark:border-white/5 py-12 lg:py-16 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Real Gym Fitness Visual Snapshot Reel */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-emerald-600 dark:text-[#ccff00]">
              <span>REAL TRAINING ENVIRONMENT</span>
              <span aria-hidden="true">·</span>
              <span>BANJARA HILLS FACILITY</span>
            </div>
            <button
              onClick={() => openLeadModal('Tour Facility Passes')}
              className="text-xs font-bold font-display uppercase tracking-wider text-zinc-700 dark:text-zinc-300 hover:text-emerald-600 dark:hover:text-[#ccff00] inline-flex items-center gap-1 transition-colors cursor-pointer"
            >
              <span>CLAIM 1-DAY PASS</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
            {gymSnapshots.map((snap) => (
              <div
                key={snap.id}
                onClick={() => openLightbox(snap)}
                className="group relative rounded-xl overflow-hidden aspect-[4/3] bg-zinc-200 dark:bg-[#18181f] border border-black/5 dark:border-white/10 cursor-pointer shadow-sm hover:shadow-xl transition-all duration-300"
              >
                <img
                  src={snap.image}
                  alt={snap.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center filter brightness-[0.88] dark:brightness-[0.78] group-hover:scale-108 transition-all duration-500 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
                <div className="absolute bottom-2.5 left-2.5 right-2.5">
                  <span className="text-[10px] font-mono text-[#ccff00] uppercase font-bold block">
                    {snap.category}
                  </span>
                  <span className="text-xs font-bold text-white uppercase font-display block truncate">
                    {snap.title}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 4 Quantitative Credibility Metrics */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 divide-y sm:divide-y-0 sm:divide-x divide-black/5 dark:divide-white/5 pt-4 border-t border-black/5 dark:border-white/5">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.label}
                className={`flex flex-col items-start ${idx > 0 ? 'pt-6 sm:pt-0 sm:pl-8 lg:pl-10' : ''}`}
              >
                <div className="flex items-center gap-2 mb-2">
                  <Icon className="w-4 h-4 text-emerald-600 dark:text-[#ccff00]" />
                  <span className="text-[11px] font-mono tracking-widest text-zinc-500 dark:text-zinc-400 uppercase">
                    METRIC {String(idx + 1).padStart(2, '0')}
                  </span>
                </div>
                <div className="text-3xl sm:text-4xl lg:text-5xl font-black font-display tracking-tight text-zinc-900 dark:text-white tabular-nums">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm font-bold tracking-wider text-zinc-800 dark:text-zinc-200 uppercase mt-1">
                  {stat.label}
                </div>
                <div className="text-xs text-zinc-500 dark:text-zinc-400 mt-0.5">
                  {stat.subtext}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
