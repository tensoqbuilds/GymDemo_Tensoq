import React from 'react';
import { useGym } from '../context/GymContext';

export interface BrandLogoEmblemProps {
  isDarkSurface?: boolean;
  className?: string;
  size?: number | string;
}

/**
 * SOURCE OF TRUTH: Iron District Fitness Brand Emblem
 * Contains the hexagonal shield, calibrated barbell plates, steel bar, and electric neon core.
 * Uses currentColor for stroke paths so it adapts dynamically to backgrounds.
 */
export const BrandLogoEmblem: React.FC<BrandLogoEmblemProps> = ({
  isDarkSurface = false,
  className = 'w-7 h-7 sm:w-8 sm:h-8',
}) => {
  return (
    <svg
      className={`${className} shrink-0 transition-all duration-300`}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Outer Hexagonal Shield Plate */}
      <path
        d="M16 2.5L28.5 9.5V22.5L16 29.5L3.5 22.5V9.5L16 2.5Z"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinejoin="round"
        className="transition-colors duration-300"
      />
      {/* Heavy Barbell Calibrated Discs */}
      <path
        d="M9.5 12.5V19.5M12.5 11V21M19.5 11V21M22.5 12.5V19.5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        className="transition-colors duration-300 opacity-90"
      />
      {/* Steel Bar */}
      <path
        d="M7 16H25"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        className="transition-colors duration-300"
      />
      {/* Electric Neon District Core */}
      <rect
        x="14"
        y="14"
        width="4"
        height="4"
        rx="0.5"
        className={`transition-colors duration-300 ${
          isDarkSurface ? 'fill-[#ccff00]' : 'fill-emerald-600'
        }`}
      />
    </svg>
  );
};

export interface BrandDumbbellLoaderProps {
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  themeMode?: 'light' | 'dark' | 'auto';
  speed?: 'normal' | 'fast';
  showShadow?: boolean;
}

/**
 * Reusable Brand Dumbbell Loader
 * Uses the EXACT same dumbbell symbol from the header logo and animates it
 * through a controlled, athletic gym repetition (concentric rise -> peak pause -> eccentric descent).
 */
export const BrandDumbbellLoader: React.FC<BrandDumbbellLoaderProps> = ({
  size = 'md',
  className = '',
  themeMode = 'auto',
  speed = 'normal',
  showShadow = true,
}) => {
  const { theme } = useGym();
  
  const isDark = themeMode === 'auto' ? theme === 'dark' : themeMode === 'dark';

  const sizeClasses = {
    xs: 'w-4 h-4',
    sm: 'w-5 h-5',
    md: 'w-8 h-8',
    lg: 'w-12 h-12',
    xl: 'w-16 h-16 sm:w-20 sm:h-20',
  }[size];

  const shadowSizes = {
    xs: 'w-3 h-0.5',
    sm: 'w-4 h-1',
    md: 'w-6 h-1.5',
    lg: 'w-10 h-2',
    xl: 'w-16 h-2.5',
  }[size];

  const textColorClass = isDark ? 'text-white' : 'text-zinc-950';
  const animClass = speed === 'fast' ? 'animate-dumbbell-rep-fast' : 'animate-dumbbell-rep';

  return (
    <div className={`inline-flex flex-col items-center justify-center select-none ${className}`}>
      {/* Moving Dumbbell performing controlled rep */}
      <div className={animClass}>
        <BrandLogoEmblem
          isDarkSurface={isDark}
          className={`${sizeClasses} ${textColorClass}`}
        />
      </div>

      {/* Dynamic floor contact shadow reacting to lift */}
      {showShadow && size !== 'xs' && (
        <div
          className={`${shadowSizes} rounded-full transition-opacity duration-300 mt-1 ${
            isDark ? 'bg-white/10' : 'bg-black/15'
          }`}
          style={{ filter: 'blur(1px)' }}
        />
      )}
    </div>
  );
};
