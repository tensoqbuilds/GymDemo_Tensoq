import React, { useState } from 'react';
import { ArrowUpRight, ChevronDown, Star, ShieldCheck, Dumbbell } from 'lucide-react';
import { useGym } from '../context/GymContext';
import { IMAGES } from '../assets/images';

export const Hero: React.FC = () => {
  const { config, openLeadModal, openLightbox } = useGym();

  const heroShowcaseImages = [
    {
      id: 'athlete-deadlift',
      title: 'Olympic Strength Zone',
      tag: 'CALIBRATED PLATES',
      image: IMAGES.barbellDeadlift,
      caption: 'Deadlift platforms with competition Rogue barbells and Eleiko bumpers',
    },
    {
      id: 'rogue-equipment',
      title: 'Precision Rogue Floor',
      tag: 'COMMERCIAL RACKS',
      image: IMAGES.equipmentRogue,
      caption: 'Full rack arrays, matte black dumbbells from 2.5kg to 50kg pairs',
    },
    {
      id: 'coaching-suite',
      title: '1-on-1 Coaching Suite',
      tag: 'CSCS MENTORS',
      image: IMAGES.ptCoaching,
      caption: 'Private movement analysis, InBody tracking, and biomechanics coaching',
    },
    {
      id: 'community-turf',
      title: 'Turf Conditioning Track',
      tag: 'ATHLETIC POWER',
      image: IMAGES.communityWorkout,
      caption: 'Sled pushes, kettlebells, and functional endurance circuits',
    },
  ];

  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const activeImage = heroShowcaseImages[activeImageIndex];

  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="top"
      className="relative min-h-[92vh] lg:min-h-[96vh] flex items-center justify-center overflow-hidden bg-zinc-100 dark:bg-[#09090b] text-zinc-900 dark:text-white transition-colors duration-200"
    >
      {/* Background Ambient Imagery with Dual Scrim */}
      <div className="absolute inset-0 z-0 select-none">
        <img
          src={activeImage.image}
          alt="Gym background"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center filter brightness-[0.7] dark:brightness-[0.22] contrast-[1.1] scale-105 transition-all duration-700 ease-out"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-100 via-zinc-100/90 to-zinc-100/70 dark:from-[#09090b] dark:via-[#09090b]/80 dark:to-[#09090b]/85" />
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-100/95 via-zinc-100/80 to-transparent dark:from-[#09090b] dark:via-[#09090b]/60 dark:to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 w-full flex flex-col justify-between">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center pt-4">
          
          {/* Left Column: Headlines & High-Converting CTAs */}
          <div className="lg:col-span-6 space-y-6">
            {/* Eyebrow */}
            <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold tracking-widest text-emerald-700 dark:text-[#ccff00] uppercase font-mono">
              <span className="flex items-center gap-1">
                <Dumbbell className="w-3.5 h-3.5" />
                PREMIUM FITNESS
              </span>
              <span aria-hidden="true">·</span>
              <span>{config.neighborhood.toUpperCase()}, {config.city.toUpperCase()}</span>
            </div>

            {/* Large Athletic Headline */}
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-black font-display tracking-tight text-zinc-900 dark:text-white uppercase leading-[0.92] text-balance">
              BUILD THE <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-900 via-zinc-700 to-zinc-500 dark:from-white dark:via-zinc-200 dark:to-zinc-400">
                BODY YOU
              </span> <br />
              <span className="text-emerald-600 dark:text-[#ccff00]">WANT.</span>
            </h1>

            {/* Supporting Copy */}
            <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-300 font-normal leading-relaxed max-w-xl text-balance">
              Personalized strength training, certified CSCS coaches, and a culture built around measurable progress in {config.city}. No fads, no wasted hours.
            </p>

            {/* Dual CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                onClick={() => openLeadModal('Hero Primary CTA')}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#ccff00] hover:bg-[#b8e600] text-black font-bold text-xs sm:text-sm tracking-wider uppercase rounded shadow-lg shadow-[#ccff00]/20 active:scale-[0.98] transition-all cursor-pointer font-display"
              >
                <span>BOOK A FREE TRIAL</span>
                <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
              </button>

              <button
                onClick={() => handleScrollTo('memberships')}
                className="inline-flex items-center justify-center gap-2 px-7 py-4 bg-zinc-900 hover:bg-black text-white dark:bg-[#18181c]/90 dark:hover:bg-[#24242c] dark:text-white dark:hover:text-[#ccff00] border border-black/10 dark:border-white/10 hover:border-black/20 dark:hover:border-white/20 font-bold text-xs sm:text-sm tracking-wider uppercase rounded backdrop-blur-md transition-all cursor-pointer font-display"
              >
                <span>VIEW MEMBERSHIPS</span>
              </button>
            </div>

            {/* Social Proof */}
            <div className="pt-3 flex flex-wrap items-center gap-4 text-xs text-zinc-600 dark:text-zinc-400">
              <div className="flex items-center gap-1 text-emerald-600 dark:text-[#ccff00]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-current" />
                ))}
                <span className="font-bold text-zinc-900 dark:text-white ml-1.5 font-mono">4.9 / 5.0</span>
              </div>
              <span className="text-zinc-400 dark:text-zinc-600 hidden sm:inline" aria-hidden="true">·</span>
              <span className="text-zinc-700 dark:text-zinc-300 font-medium">
                Based on 500+ verified transformations in {config.city}
              </span>
            </div>
          </div>

          {/* Right Column: Prominent Gym Fitness Visual Showcase */}
          <div className="lg:col-span-6 space-y-4">
            <div className="relative rounded-2xl overflow-hidden border border-black/10 dark:border-white/15 bg-white dark:bg-[#121215] shadow-2xl group">
              {/* Main Feature Image */}
              <div className="relative aspect-[16/10] sm:aspect-[16/10] w-full overflow-hidden bg-zinc-200 dark:bg-[#18181f]">
                <img
                  src={activeImage.image}
                  alt={activeImage.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center filter brightness-[0.95] dark:brightness-[0.85] contrast-[1.1] group-hover:scale-105 transition-all duration-500 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />

                {/* Live Training Status Overlay */}
                <div className="absolute top-4 left-4 flex items-center gap-2 bg-black/80 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10 text-xs">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-[11px] font-mono uppercase text-zinc-200 font-bold">
                    ACTIVE GYM FLOOR · BANJARA HILLS
                  </span>
                </div>

                {/* Focus Tag */}
                <div className="absolute top-4 right-4 bg-[#ccff00] text-black text-[10px] font-black font-display tracking-widest uppercase px-2.5 py-1 rounded shadow">
                  {activeImage.tag}
                </div>

                {/* Bottom Title & Caption */}
                <div className="absolute bottom-4 inset-x-4 flex items-end justify-between gap-4">
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold font-display uppercase tracking-tight text-white">
                      {activeImage.title}
                    </h3>
                    <p className="text-xs text-zinc-300 mt-0.5 line-clamp-1">
                      {activeImage.caption}
                    </p>
                  </div>
                  <button
                    onClick={() => openLightbox({
                      id: activeImage.id,
                      title: activeImage.title,
                      category: activeImage.tag,
                      image: activeImage.image,
                    })}
                    className="shrink-0 px-3 py-1.5 rounded bg-white/20 hover:bg-[#ccff00] hover:text-black text-white text-[11px] font-bold uppercase transition-colors"
                  >
                    VIEW FULL
                  </button>
                </div>
              </div>
            </div>

            {/* Quick 4-Thumb Fitness Snapshot Selector */}
            <div className="grid grid-cols-4 gap-2.5">
              {heroShowcaseImages.map((shot, idx) => (
                <button
                  key={shot.id}
                  type="button"
                  onClick={() => setActiveImageIndex(idx)}
                  className={`group relative rounded-xl overflow-hidden aspect-[4/3] border transition-all cursor-pointer text-left ${
                    activeImageIndex === idx
                      ? 'border-emerald-600 dark:border-[#ccff00] ring-2 ring-emerald-500/40 dark:ring-[#ccff00]/40 scale-102'
                      : 'border-black/10 dark:border-white/10 hover:border-black/30 dark:hover:border-white/30 opacity-80 hover:opacity-100'
                  }`}
                >
                  <img
                    src={shot.image}
                    alt={shot.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center filter brightness-[0.8] dark:brightness-[0.7]"
                  />
                  <div className="absolute inset-0 bg-black/25 group-hover:bg-transparent transition-colors" />
                  <div className="absolute bottom-1.5 inset-x-1.5">
                    <span className="text-[9px] font-mono uppercase text-white font-bold block truncate drop-shadow">
                      {shot.title.split(' ')[0]}
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll Bar & Guarantee Marker */}
        <div className="pt-8 flex items-center justify-between border-t border-black/10 dark:border-white/10 mt-10">
          <div className="flex items-center gap-3 text-xs text-zinc-600 dark:text-zinc-400 font-mono uppercase tracking-wider">
            <ShieldCheck className="w-4 h-4 text-emerald-600 dark:text-[#ccff00]" />
            <span>100% Certified CSCS Coaching & Progressive Overload Tracking</span>
          </div>

          <button
            onClick={() => handleScrollTo('proof-strip')}
            className="hidden md:flex items-center gap-2 text-xs text-zinc-600 dark:text-zinc-400 hover:text-emerald-600 dark:hover:text-[#ccff00] transition-colors cursor-pointer"
            aria-label="Scroll down to explore facility"
          >
            <span className="uppercase tracking-widest text-[11px] font-mono">EXPLORE FACILITY & STATS</span>
            <ChevronDown className="w-4 h-4 animate-bounce" />
          </button>
        </div>
      </div>
    </section>
  );
};
