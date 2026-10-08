import React, { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { gymTestimonials } from '../config/gymConfig';
import { useGym } from '../context/GymContext';

export const Testimonials: React.FC = () => {
  const { config } = useGym();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % gymTestimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [isPaused]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + gymTestimonials.length) % gymTestimonials.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % gymTestimonials.length);
  };

  const item = gymTestimonials[currentIndex];

  return (
    <section id="testimonials" className="py-16 sm:py-20 lg:py-24 bg-white dark:bg-[#09090b] text-zinc-900 dark:text-zinc-100 border-t border-black/5 dark:border-white/5 transition-colors relative">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-emerald-600 dark:text-[#ccff00]">
              <span>MEMBER TESTIMONIALS</span>
              <span aria-hidden="true">·</span>
              <span>GOOGLE 4.9★ RATING</span>
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black font-display uppercase tracking-tight text-zinc-900 dark:text-white leading-tight">
              PROVEN RESULTS. <br />
              <span className="text-zinc-500 dark:text-zinc-400">UNFILTERED WORDS.</span>
            </h2>
          </div>

          {/* Carousel Controls */}
          <div className="flex items-center gap-3 self-start md:self-end">
            <button
              onClick={handlePrev}
              className="p-3 rounded-lg border border-black/10 dark:border-white/10 hover:border-black/30 dark:hover:border-white/30 text-zinc-700 dark:text-zinc-300 hover:text-black dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/5 transition-all cursor-pointer"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="text-xs font-mono text-zinc-500 dark:text-zinc-400 px-2 tabular-nums">
              0{currentIndex + 1} / 0{gymTestimonials.length}
            </div>
            <button
              onClick={handleNext}
              className="p-3 rounded-lg border border-black/10 dark:border-white/10 hover:border-black/30 dark:hover:border-white/30 text-zinc-700 dark:text-zinc-300 hover:text-black dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/5 transition-all cursor-pointer"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Testimonial Feature Card */}
        <div
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          className="bg-zinc-50 dark:bg-[#121215] border border-black/5 dark:border-white/10 rounded-2xl p-8 sm:p-14 relative overflow-hidden shadow-xl transition-all duration-300"
        >
          {/* Subtle Quote Background Mark */}
          <Quote className="absolute top-6 right-6 w-24 h-24 text-black/[0.04] dark:text-white/[0.03] pointer-events-none" />

          <div className="max-w-4xl space-y-8 relative z-10">
            {/* Star Rating */}
            <div className="flex items-center gap-1.5 text-amber-500 dark:text-[#ccff00]">
              {[...Array(item.rating)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-current" />
              ))}
              <span className="text-xs text-zinc-500 dark:text-zinc-400 font-mono ml-2">
                Verified Member Review
              </span>
            </div>

            {/* Testimonial Quote */}
            <p className="text-xl sm:text-3xl lg:text-4xl font-normal font-sans text-zinc-900 dark:text-white leading-snug tracking-tight">
              "{item.quote}"
            </p>

            {/* Member Details */}
            <div className="pt-6 border-t border-black/5 dark:border-white/5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h4 className="text-lg font-bold font-display uppercase tracking-tight text-zinc-900 dark:text-white">
                  {item.author}
                </h4>
                <div className="flex items-center gap-2 text-xs text-zinc-500 dark:text-zinc-400 mt-0.5">
                  <span>{item.role}</span>
                  <span>·</span>
                  <span className="text-emerald-600 dark:text-[#ccff00]">{item.duration}</span>
                </div>
              </div>

              <div className="text-xs font-mono text-zinc-700 dark:text-zinc-300 bg-zinc-200/70 dark:bg-[#18181f] border border-black/5 dark:border-white/5 px-3 py-1.5 rounded self-start sm:self-auto">
                {item.metric}
              </div>
            </div>
          </div>
        </div>

        {/* Carousel Indicator Dots */}
        <div className="flex items-center justify-center gap-2 mt-8">
          {gymTestimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`h-1.5 transition-all rounded-full cursor-pointer ${
                currentIndex === idx
                  ? 'w-8 bg-emerald-600 dark:bg-[#ccff00]'
                  : 'w-2 bg-black/20 dark:bg-white/20 hover:bg-black/40 dark:hover:bg-white/40'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
