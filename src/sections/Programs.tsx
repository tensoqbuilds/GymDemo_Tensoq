import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { gymPrograms } from '../config/gymConfig';
import { useGym } from '../context/GymContext';

export const Programs: React.FC = () => {
  const { openLeadModal } = useGym();
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Programs' },
    { id: 'Muscle Building', label: 'Hypertrophy & Strength' },
    { id: 'Body Recomposition', label: 'Fat Loss' },
    { id: 'Personal Training', label: '1-on-1 Coaching' },
    { id: 'Mobility & Posture', label: 'Functional & Mobility' },
  ];

  const filtered = activeCategory === 'all'
    ? gymPrograms
    : gymPrograms.filter((p) => p.category === activeCategory);

  return (
    <section id="programs" className="py-16 sm:py-20 lg:py-24 bg-zinc-50/50 dark:bg-[#09090b] text-zinc-900 dark:text-zinc-100 border-t border-black/5 dark:border-white/5 transition-colors">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-emerald-600 dark:text-[#ccff00]">
              <span>TRAINING DISCIPLINES</span>
              <span aria-hidden="true">·</span>
              <span>SCIENTIFIC PROTOCOLS</span>
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black font-display uppercase tracking-tight text-zinc-900 dark:text-white leading-tight">
              TRAIN WITH PURPOSE.
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400 text-sm sm:text-base leading-relaxed">
              Every body requires a distinct pathway. Whether your objective is dropping 15 kg of body fat, adding slabs of lean muscle, or prepping for competitive sport, our curriculum is engineered for measurable outcomes.
            </p>
          </div>

          {/* Interactive filter tabs */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-zinc-100 dark:bg-[#121215] border border-black/5 dark:border-white/10 rounded-lg self-start md:self-end">
            {categories.map((c) => (
              <button
                key={c.id}
                onClick={() => setActiveCategory(c.id)}
                className={`px-3 py-1.5 text-xs font-semibold rounded transition-all cursor-pointer ${
                  activeCategory === c.id
                    ? 'bg-zinc-900 dark:bg-[#ccff00] text-white dark:text-black shadow-sm'
                    : 'text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/5'
                }`}
              >
                {c.label}
              </button>
            ))}
          </div>
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((prog, index) => {
            const isFeatured = index === 0;
            return (
              <div
                key={prog.id}
                className={`group relative overflow-hidden rounded-2xl bg-white dark:bg-[#121215] border border-black/5 dark:border-white/10 hover:border-emerald-500/50 dark:hover:border-[#ccff00]/60 transition-all duration-300 flex flex-col justify-between shadow-sm hover:shadow-xl ${
                  isFeatured ? 'md:col-span-2 lg:col-span-2' : ''
                }`}
              >
                {/* Background Image with Zoom on Hover */}
                <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-zinc-200 dark:bg-[#18181f]">
                  <img
                    src={prog.image}
                    alt={prog.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center filter brightness-[0.92] dark:brightness-[0.55] group-hover:scale-105 group-hover:brightness-[0.8] dark:group-hover:brightness-[0.45] transition-all duration-500 ease-out"
                  />
                  {/* Scrim Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-[#121215] via-white/20 dark:via-[#121215]/50 to-transparent" />

                  {/* Program Focus Chip */}
                  <div className="absolute top-4 left-4 z-10">
                    <span className="text-[11px] font-mono tracking-wider uppercase font-semibold text-white bg-black/80 backdrop-blur-md px-2.5 py-1 rounded border border-white/10">
                      {prog.focus}
                    </span>
                  </div>
                </div>

                {/* Content Area */}
                <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between bg-white dark:bg-[#121215] -mt-8 relative z-10">
                  <div className="space-y-3">
                    <h3 className="text-xl sm:text-2xl font-bold font-display uppercase tracking-tight text-zinc-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-[#ccff00] transition-colors">
                      {prog.title}
                    </h3>
                    <p className="text-xs sm:text-sm font-semibold text-emerald-600 dark:text-[#ccff00]/90">
                      {prog.subtitle}
                    </p>
                    <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                      {prog.description}
                    </p>

                    {/* Metadata tags */}
                    <div className="pt-2 flex flex-wrap items-center gap-2 text-xs text-zinc-500 dark:text-zinc-400">
                      {prog.tags.map((tag, tIdx) => (
                        <span key={tag} className="flex items-center gap-1.5">
                          {tIdx > 0 && <span className="text-zinc-400 dark:text-zinc-600">·</span>}
                          <span>{tag}</span>
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* CTA Action */}
                  <div className="pt-6 mt-6 border-t border-black/5 dark:border-white/5 flex items-center justify-between">
                    <button
                      onClick={() => openLeadModal(`Program: ${prog.title}`)}
                      className="inline-flex items-center gap-2 text-xs font-bold text-zinc-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-[#ccff00] uppercase tracking-wider transition-colors cursor-pointer"
                    >
                      <span>EXPLORE THIS PROGRAM</span>
                      <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </button>
                    <span className="text-[11px] font-mono text-zinc-400 dark:text-zinc-500 uppercase">
                      INCLUDED IN MEMBERSHIP
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
