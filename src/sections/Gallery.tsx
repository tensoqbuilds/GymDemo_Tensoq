import React from 'react';
import { Maximize2 } from 'lucide-react';
import { gymGallery } from '../config/gymConfig';
import { useGym } from '../context/GymContext';
import { BrandedImage } from '../components/BrandedImage';

export const Gallery: React.FC = () => {
  const { openLightbox } = useGym();

  return (
    <section id="gallery" className="py-16 sm:py-20 lg:py-24 bg-zinc-50/50 dark:bg-[#09090b] text-zinc-900 dark:text-zinc-100 border-t border-black/5 dark:border-white/5 transition-colors relative">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-emerald-600 dark:text-[#ccff00]">
              <span>INSIDE THE DISTRICT</span>
              <span aria-hidden="true">·</span>
              <span>BANJARA HILLS FACILITY</span>
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black font-display uppercase tracking-tight text-zinc-900 dark:text-white leading-tight">
              ENGINEERED FOR WORK.
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400 text-sm sm:text-base leading-relaxed">
              Every square foot of our 10,000 sq.ft facility was architectural planned for optimal airflow, acoustic isolation, high-contrast visual focus, and seamless training flow.
            </p>
          </div>

          <div className="text-xs font-mono text-zinc-500 dark:text-zinc-400 uppercase tracking-widest self-start md:self-end">
            CLICK ANY SHOT TO ENLARGE
          </div>
        </div>

        {/* Editorial Masonry-style Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {gymGallery.map((item, idx) => (
            <div
              key={item.id}
              onClick={() => openLightbox(item)}
              className={`group relative overflow-hidden rounded-2xl bg-zinc-200 dark:bg-[#121215] border border-black/5 dark:border-white/10 hover:border-emerald-500/50 dark:hover:border-[#ccff00]/60 cursor-pointer transition-all duration-300 shadow-sm hover:shadow-xl ${
                idx === 0 || idx === 4 ? 'sm:col-span-2 lg:col-span-2 aspect-[16/9]' : 'aspect-[4/3]'
              }`}
            >
              <BrandedImage
                src={item.image}
                alt={item.title}
                referrerPolicy="no-referrer"
                loaderSize="md"
                className="w-full h-full object-cover object-center filter brightness-[0.92] dark:brightness-[0.75] contrast-[1.08] group-hover:scale-105 group-hover:brightness-[0.8] dark:group-hover:brightness-[0.6] transition-all duration-500 ease-out"
              />

              {/* Hover Dark Scrim */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity pointer-events-none" />

              {/* Hover Action Badge */}
              <div className="absolute top-4 right-4 p-2 rounded-lg bg-black/60 backdrop-blur-md text-white/80 group-hover:text-[#ccff00] group-hover:scale-110 transition-all">
                <Maximize2 className="w-4 h-4" />
              </div>

              {/* Caption */}
              <div className="absolute bottom-0 inset-x-0 p-6 flex flex-col justify-end">
                <span className="text-[10px] font-mono uppercase text-[#ccff00] tracking-widest mb-1">
                  {item.category}
                </span>
                <h3 className="text-base sm:text-lg font-bold font-display uppercase tracking-tight text-white group-hover:text-zinc-100 transition-colors">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
