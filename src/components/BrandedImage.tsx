import React, { useState } from 'react';
import { BrandDumbbellLoader } from './BrandLogoIcon';
import { useGym } from '../context/GymContext';

export interface BrandedImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  loaderSize?: 'sm' | 'md';
  containerClassName?: string;
}

/**
 * Reusable Branded Image with Iron District Dumbbell Loader
 * Displays a subtle placeholder with the exact animated brand dumbbell
 * while the image loads, then smoothly reveals the image via opacity & micro-scale.
 */
export const BrandedImage: React.FC<BrandedImageProps> = ({
  src,
  alt = '',
  className = '',
  containerClassName = '',
  loaderSize = 'md',
  ...rest
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const { theme } = useGym();
  const isDark = theme === 'dark';

  return (
    <div className={`relative overflow-hidden w-full h-full ${containerClassName}`}>
      {/* Loading Placeholder with Brand Dumbbell */}
      {!isLoaded && (
        <div
          className={`absolute inset-0 z-10 flex flex-col items-center justify-center transition-opacity duration-300 ${
            isDark ? 'bg-zinc-900/90' : 'bg-zinc-100/90'
          }`}
        >
          <BrandDumbbellLoader
            size={loaderSize}
            themeMode={isDark ? 'dark' : 'light'}
            speed="normal"
            showShadow={false}
          />
        </div>
      )}

      {/* Actual Image with smooth fade & micro-scale transition */}
      <img
        src={src}
        alt={alt}
        onLoad={() => setIsLoaded(true)}
        className={`transition-all duration-500 ease-out ${
          isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-[0.98]'
        } ${className}`}
        {...rest}
      />
    </div>
  );
};
