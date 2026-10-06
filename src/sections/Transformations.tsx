import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { gymTransformations } from '../config/gymConfig';
import { useGym } from '../context/GymContext';

export const Transformations: React.FC = () => {
  const { openLeadModal } = useGym();
  const [activeStory, setActiveStory] = useState(0);

  const current = gymTransformations[activeStory];

  return (
    <section id="transformations" className="py-24 lg:py-32 bg-white dark:bg-[#09090b] text-zinc-900 dark:text-zinc-100 border-t border-black/5 dark:border-white/5 transition-colors relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-emerald-600 dark:text-[#ccff00]">
              <span>VERIFIED RESULTS</span>
              <span aria-hidden="true">·</span>
              <span>NO SHORTCUTS</span>
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black font-display uppercase tracking-tight text-zinc-900 dark:text-white leading-tight">
              REAL PEOPLE. <br />
              <span className="text-zinc-500 dark:text-zinc-400">REAL PROGRESS.</span>
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400 text-sm sm:text-base leading-relaxed">
              Every body shown here trained inside our facility using our progressive overload systems, personalized macronutrient guidance, and habit accountability.
            </p>
          </div>

          <div className="bg-zinc-100 dark:bg-[#121215] border border-black/5 dark:border-white/10 rounded-xl p-1.5 flex items-center gap-1.5 self-start md:self-end">
            {gymTransformations.map((t, idx) => (
              <button
                key={t.id}
                onClick={() => setActiveStory(idx)}
                className={`px-3 py-2 text-xs font-bold uppercase rounded-lg transition-all cursor-pointer ${
                  activeStory === idx
                    ? 'bg-zinc-900 dark:bg-[#ccff00] text-white dark:text-black shadow-sm'
                    : 'text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/5'
                }`}
              >
                {t.name.split(' ')[0]} ({t.result.split(' ')[0]} {t.result.split(' ')[1]})
              </button>
            ))}
          </div>
        </div>

        {/* Featured Transformation Showcase Card */}
        <div className="bg-zinc-50 dark:bg-[#121215] border border-black/5 dark:border-white/10 rounded-2xl overflow-hidden shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            {/* Visual Asset side */}
            <div className="lg:col-span-5 relative min-h-[360px] lg:min-h-[500px] bg-zinc-200 dark:bg-[#18181f] overflow-hidden">
              <img
                src={current.image}
                alt={`${current.name} transformation`}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center filter brightness-[0.95] dark:brightness-[0.75] contrast-[1.08] transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />

              {/* Result Badge */}
              <div className="absolute top-6 left-6 z-10 bg-black/85 backdrop-blur-md border border-[#ccff00]/40 rounded-xl p-3.5 text-white shadow-xl">
                <span className="text-[10px] font-mono text-[#ccff00] uppercase block tracking-wider">
                  ACHIEVED OUTCOME
                </span>
                <span className="text-xl sm:text-2xl font-black font-display text-white uppercase tracking-tight">
                  {current.result}
                </span>
                <span className="text-xs text-zinc-300 font-mono block mt-0.5">
                  Timeline: {current.duration}
                </span>
              </div>
            </div>

            {/* Editorial Content side */}
            <div className="lg:col-span-7 p-8 sm:p-12 flex flex-col justify-between">
              <div className="space-y-6">
                <div>
                  <div className="flex items-center gap-3 text-xs font-mono text-zinc-500 dark:text-zinc-400 uppercase tracking-wider mb-2">
                    <span className="text-emerald-600 dark:text-[#ccff00] font-bold">{current.category}</span>
                    <span>·</span>
                    <span>{current.age} Years Old</span>
                    <span>·</span>
                    <span>{current.duration} Protocol</span>
                  </div>
                  <h3 className="text-2xl sm:text-4xl font-black font-display uppercase tracking-tight text-zinc-900 dark:text-white">
                    {current.name}
                  </h3>
                </div>

                {/* Quote */}
                <div className="relative pl-5 border-l-2 border-emerald-500 dark:border-[#ccff00]">
                  <p className="text-sm sm:text-base text-zinc-700 dark:text-zinc-300 italic leading-relaxed">
                    "{current.testimonial}"
                  </p>
                </div>

                {/* Metrics Grid */}
                <div className="grid grid-cols-3 gap-3 pt-4 border-t border-black/5 dark:border-white/5">
                  <div className="bg-white dark:bg-[#18181f] p-3.5 rounded-xl border border-black/5 dark:border-white/5">
                    <div className="text-[10px] font-mono uppercase text-zinc-500 dark:text-zinc-400 mb-1">
                      Body Composition
                    </div>
                    <div className="text-xs sm:text-sm font-bold text-zinc-900 dark:text-white font-mono">
                      {current.stats.fatLoss}
                    </div>
                  </div>

                  <div className="bg-white dark:bg-[#18181f] p-3.5 rounded-xl border border-black/5 dark:border-white/5">
                    <div className="text-[10px] font-mono uppercase text-zinc-500 dark:text-zinc-400 mb-1">
                      Muscle Mass
                    </div>
                    <div className="text-xs sm:text-sm font-bold text-zinc-900 dark:text-white font-mono">
                      {current.stats.muscleGain}
                    </div>
                  </div>

                  <div className="bg-white dark:bg-[#18181f] p-3.5 rounded-xl border border-black/5 dark:border-white/5">
                    <div className="text-[10px] font-mono uppercase text-zinc-500 dark:text-zinc-400 mb-1">
                      Power Metric
                    </div>
                    <div className="text-xs sm:text-sm font-bold text-emerald-600 dark:text-[#ccff00] font-mono">
                      {current.stats.strengthIncrease}
                    </div>
                  </div>
                </div>
              </div>

              {/* Call to Action Banner */}
              <div className="pt-8 mt-8 border-t border-black/5 dark:border-white/5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <div className="text-xs font-bold text-zinc-900 dark:text-zinc-200 uppercase tracking-wide">
                    YOUR TRANSFORMATION COULD BE NEXT.
                  </div>
                  <div className="text-[11px] text-zinc-500 font-mono">
                    Personalized consultation included with free pass
                  </div>
                </div>

                <button
                  onClick={() => openLeadModal(`Transformation Path: ${current.name}`)}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#ccff00] hover:bg-[#b8e600] text-black font-bold text-xs tracking-wider rounded uppercase transition-all shadow-md cursor-pointer font-display"
                >
                  <span>START MY JOURNEY</span>
                  <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* 3 Quick Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-6">
          {gymTransformations.map((item, idx) => (
            <div
              key={item.id}
              onClick={() => setActiveStory(idx)}
              className={`p-5 rounded-xl border transition-all cursor-pointer ${
                activeStory === idx
                  ? 'bg-zinc-100 dark:bg-[#18181f] border-emerald-500/50 dark:border-[#ccff00]/60 ring-1 ring-emerald-500/30 dark:ring-[#ccff00]/30 shadow-md'
                  : 'bg-zinc-50 dark:bg-[#121215] border-black/5 dark:border-white/5 hover:border-black/15 dark:hover:border-white/15'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold uppercase text-zinc-900 dark:text-white font-display">
                  {item.name}
                </span>
                <span className="text-[11px] font-mono text-emerald-600 dark:text-[#ccff00] font-bold">
                  {item.result}
                </span>
              </div>
              <div className="text-xs text-zinc-500 dark:text-zinc-400 truncate">
                {item.category} · {item.duration}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
