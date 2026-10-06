import React from 'react';
import { ArrowUpRight, Instagram, Linkedin } from 'lucide-react';
import { gymTrainers } from '../config/gymConfig';
import { useGym } from '../context/GymContext';

export const Trainers: React.FC = () => {
  const { openLeadModal } = useGym();

  return (
    <section id="trainers" className="py-24 lg:py-32 bg-zinc-50/50 dark:bg-[#09090b] text-zinc-900 dark:text-zinc-100 border-t border-black/5 dark:border-white/5 transition-colors relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-emerald-600 dark:text-[#ccff00]">
              <span>COACHING PEDIGREE</span>
              <span aria-hidden="true">·</span>
              <span>NO BRO-SCIENCE</span>
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black font-display uppercase tracking-tight text-zinc-900 dark:text-white leading-tight">
              WORLD-CLASS COACHES.
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400 text-sm sm:text-base leading-relaxed">
              Every mentor on our floor holds certified credentials in strength biomechanics, exercise physiology, and clinical nutrition. They train with you, calibrate your technique, and protect your joints.
            </p>
          </div>

          <div className="text-right hidden md:block">
            <span className="text-xs font-mono text-zinc-500 uppercase block">
              COACHING STANDARD
            </span>
            <span className="text-sm font-bold text-zinc-900 dark:text-white uppercase font-display">
              100% CSCS / K11 CERTIFIED
            </span>
          </div>
        </div>

        {/* Trainers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {gymTrainers.map((trainer) => (
            <div
              key={trainer.id}
              className="group relative bg-white dark:bg-[#121215] border border-black/5 dark:border-white/10 hover:border-emerald-500/50 dark:hover:border-[#ccff00]/60 rounded-2xl overflow-hidden transition-all duration-300 flex flex-col justify-between shadow-sm hover:shadow-xl"
            >
              {/* Image Container with Hover Scale */}
              <div className="relative h-96 sm:h-[420px] w-full overflow-hidden bg-zinc-200 dark:bg-[#18181f]">
                <img
                  src={trainer.image}
                  alt={trainer.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-top filter brightness-[0.9] dark:brightness-[0.78] contrast-[1.1] group-hover:scale-105 group-hover:brightness-[0.8] dark:group-hover:brightness-[0.7] transition-all duration-500 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-[#121215] via-white/20 dark:via-[#121215]/30 to-transparent" />

                {/* Experience Chip */}
                <div className="absolute top-4 right-4 bg-black/80 backdrop-blur-md border border-white/10 px-3 py-1 rounded text-[11px] font-mono text-[#ccff00] font-semibold">
                  {trainer.experience}
                </div>
              </div>

              {/* Content Box */}
              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between bg-white dark:bg-[#121215] -mt-6 relative z-10">
                <div className="space-y-3">
                  <div>
                    <span className="text-xs font-mono uppercase text-emerald-600 dark:text-[#ccff00] font-bold block mb-1">
                      {trainer.role}
                    </span>
                    <h3 className="text-2xl font-bold font-display uppercase tracking-tight text-zinc-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-[#ccff00] transition-colors">
                      {trainer.name}
                    </h3>
                  </div>

                  <p className="text-xs text-zinc-700 dark:text-zinc-300 font-medium">
                    {trainer.specialty}
                  </p>

                  {/* Certifications metadata */}
                  <div className="pt-2 flex flex-wrap gap-1.5">
                    {trainer.certifications.map((cert) => (
                      <span
                        key={cert}
                        className="text-[10px] font-mono text-zinc-600 dark:text-zinc-400 bg-zinc-100 dark:bg-white/5 border border-black/5 dark:border-white/5 px-2 py-0.5 rounded"
                      >
                        {cert}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action CTA */}
                <div className="pt-6 mt-6 border-t border-black/5 dark:border-white/5 flex items-center justify-between">
                  <button
                    onClick={() => openLeadModal(`Coaching Request: ${trainer.name}`)}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-zinc-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-[#ccff00] uppercase tracking-wider transition-colors cursor-pointer"
                  >
                    <span>CONSULT WITH {trainer.name.split(' ')[0]}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </button>

                  <div className="flex items-center gap-2 text-zinc-500 dark:text-zinc-400">
                    <span className="p-1.5 rounded hover:text-black dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/5 transition-colors cursor-pointer">
                      <Instagram className="w-4 h-4" />
                    </span>
                    <span className="p-1.5 rounded hover:text-black dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/5 transition-colors cursor-pointer">
                      <Linkedin className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
