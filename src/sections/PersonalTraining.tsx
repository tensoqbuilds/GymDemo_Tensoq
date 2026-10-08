import React from 'react';
import { Check, ArrowUpRight, ShieldCheck } from 'lucide-react';
import { useGym } from '../context/GymContext';
import { IMAGES } from '../assets/images';
import { BrandedImage } from '../components/BrandedImage';

export const PersonalTraining: React.FC = () => {
  const { openLeadModal } = useGym();

  const benefits = [
    { title: "Personalized workout plans", desc: "Engineered around your current strength, schedule, and biomechanics." },
    { title: "Progress tracking & InBody scans", desc: "Clinical data and metric logging at every session." },
    { title: "Nutrition & macro guidance", desc: "Indian meal plans tailored for sustainable body fat reduction." },
    { title: "Weekly accountability check-ins", desc: "Direct mentor WhatsApp access so you never lose momentum." },
    { title: "Real-time form correction", desc: "Zero joint pain. Perfect movement pathways under heavy load." },
  ];

  return (
    <section id="personal-training" className="py-16 sm:py-20 lg:py-24 bg-zinc-50/50 dark:bg-[#09090b] text-zinc-900 dark:text-zinc-100 border-t border-black/5 dark:border-white/5 transition-colors relative">
      <div className="max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: High-Impact Visual Asset */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl overflow-hidden border border-black/10 dark:border-white/10 shadow-2xl bg-zinc-200 dark:bg-[#121215] aspect-[4/3]">
              <BrandedImage
                src={IMAGES.ptCoaching}
                alt="Personal training session at Iron District Fitness"
                referrerPolicy="no-referrer"
                loaderSize="md"
                className="w-full h-full object-cover object-center filter brightness-[0.9] dark:brightness-[0.8] contrast-[1.1] hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Floating Credibility Badge */}
            <div className="absolute -bottom-5 right-2 sm:-bottom-6 sm:right-6 bg-white/95 dark:bg-[#18181f]/95 border border-emerald-500/40 dark:border-[#ccff00]/40 rounded-xl p-3.5 sm:p-5 shadow-2xl backdrop-blur-md max-w-[260px] sm:max-w-xs">
              <div className="flex items-center gap-2 mb-1">
                <ShieldCheck className="w-4 h-4 text-emerald-600 dark:text-[#ccff00]" />
                <span className="text-[11px] font-mono uppercase text-emerald-600 dark:text-[#ccff00] font-bold">
                  1-ON-1 GUARANTEE
                </span>
              </div>
              <p className="text-xs text-zinc-700 dark:text-zinc-200 font-medium">
                100% focused attention. Only 15 private coaching roster spots open per coach.
              </p>
            </div>
          </div>

          {/* Right Column: Editorial Copy & Conversion Checklist */}
          <div className="lg:col-span-6 space-y-8">
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-emerald-600 dark:text-[#ccff00]">
                <span>PRIVATE COACHING ROSTER</span>
                <span aria-hidden="true">·</span>
                <span>LIMITED CAPACITY</span>
              </div>

              <h2 className="text-3xl sm:text-5xl font-black font-display uppercase tracking-tight text-zinc-900 dark:text-white leading-[1.05]">
                YOUR GOALS. <br />
                YOUR PROGRAM. <br />
                <span className="text-emerald-600 dark:text-[#ccff00]">YOUR COACH.</span>
              </h2>

              <p className="text-zinc-600 dark:text-zinc-300 text-sm sm:text-base leading-relaxed pt-2">
                Stop guessing what to do in the gym. Work with a coach who understands your goals, tracks your progress, and keeps you accountable every single week.
              </p>
            </div>

            {/* Checklist */}
            <div className="space-y-4 pt-2">
              {benefits.map((item) => (
                <div key={item.title} className="flex items-start gap-3.5 group">
                  <div className="w-5 h-5 rounded bg-emerald-500/10 dark:bg-[#ccff00]/10 border border-emerald-500/40 dark:border-[#ccff00]/40 flex items-center justify-center shrink-0 mt-0.5 text-emerald-600 dark:text-[#ccff00]">
                    <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-zinc-900 dark:text-white uppercase tracking-tight">
                      {item.title}
                    </h4>
                    <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-0.5">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Conversion CTA */}
            <div className="pt-4 border-t border-black/5 dark:border-white/5 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                onClick={() => openLeadModal('Personal Training Application')}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#ccff00] hover:bg-[#b8e600] text-black font-bold text-xs tracking-wider rounded uppercase transition-all shadow-lg shadow-[#ccff00]/15 cursor-pointer font-display"
              >
                <span>APPLY FOR PERSONAL TRAINING</span>
                <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
              </button>

              <span className="text-[11px] text-zinc-500 font-mono text-center sm:text-left">
                Includes complimentary InBody 570 scan & fitness baseline
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
