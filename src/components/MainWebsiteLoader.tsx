import React, { useState, useEffect } from 'react';
import { BrandDumbbellLoader } from './BrandLogoIcon';
import { useGym } from '../context/GymContext';

/**
 * Premium Main Website Initial Loader
 * Features the signature Iron District Fitness brand dumbbell performing a controlled
 * repetition, followed by an elegant cinematic reveal of the website.
 * Always launches in LIGHT MODE per project requirements.
 */
export const MainWebsiteLoader: React.FC = () => {
  const { config, theme } = useGym();
  const [mounted, setMounted] = useState(true);
  const [isFadingOut, setIsFadingOut] = useState(false);

  useEffect(() => {
    // Complete 1 full controlled repetition (~1.1s) then gracefully fade out
    const fadeTimer = setTimeout(() => {
      setIsFadingOut(true);
    }, 1150);

    const unmountTimer = setTimeout(() => {
      setMounted(false);
    }, 1550);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(unmountTimer);
    };
  }, []);

  if (!mounted) return null;

  // Initial load is strictly in light mode
  const isDark = theme === 'dark';

  return (
    <div
      aria-label="Loading Iron District Fitness"
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center transition-all duration-400 ease-out select-none ${
        isFadingOut ? 'opacity-0 pointer-events-none scale-[1.01]' : 'opacity-100'
      } ${isDark ? 'bg-[#09090b] text-white' : 'bg-[#fafafa] text-zinc-950'}`}
    >
      {/* Background ambient lighting subtle glow */}
      <div
        className={`absolute w-72 h-72 rounded-full filter blur-3xl pointer-events-none opacity-20 ${
          isDark ? 'bg-[#ccff00]' : 'bg-emerald-400'
        }`}
      />

      <div className="relative z-10 flex flex-col items-center text-center px-4 max-w-sm mx-auto">
        
        {/* Animated Brand Dumbbell Loader (Exact Header Logo Icon performing controlled rep) */}
        <div className="mb-6 relative">
          <BrandDumbbellLoader
            size="xl"
            themeMode={isDark ? 'dark' : 'light'}
            speed="normal"
            showShadow={true}
          />
        </div>

        {/* Brand Typography */}
        <h1
          className={`text-2xl sm:text-3xl font-black font-display tracking-tight uppercase leading-none transition-colors duration-300 ${
            isDark ? 'text-white' : 'text-zinc-950'
          }`}
        >
          {config.gymName}
        </h1>

        {/* Brand Tagline */}
        <p
          className={`text-xs font-mono tracking-widest uppercase mt-2.5 transition-colors duration-300 ${
            isDark ? 'text-[#ccff00]' : 'text-emerald-700 font-bold'
          }`}
        >
          {config.tagline}
        </p>

        {/* Micro rep indicator */}
        <div className="mt-8 flex items-center gap-2 text-[10px] font-mono tracking-wider text-zinc-500 uppercase">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
          <span>INITIALIZING FACILITY</span>
        </div>
      </div>
    </div>
  );
};
