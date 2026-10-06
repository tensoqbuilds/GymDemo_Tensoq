import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Phone, MessageSquare, Sun, Moon } from 'lucide-react';
import { useGym } from '../context/GymContext';
import { BrandLogoEmblem } from './BrandLogoIcon';

export const Navbar: React.FC = () => {
  const { config, openLeadModal, getWhatsAppLink, theme, toggleTheme } = useGym();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('top');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY || document.documentElement.scrollTop || 0;
      setIsScrolled(scrollPos > 25);

      // Simple active section detection
      const sections = ['location', 'gallery', 'memberships', 'transformations', 'trainers', 'programs', 'top'];
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 160) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'HOME', href: '#top', id: 'top' },
    { label: 'PROGRAMS', href: '#programs', id: 'programs' },
    { label: 'TRAINERS', href: '#trainers', id: 'trainers' },
    { label: 'TRANSFORMATIONS', href: '#transformations', id: 'transformations' },
    { label: 'MEMBERSHIPS', href: '#memberships', id: 'memberships' },
    { label: 'FACILITY', href: '#gallery', id: 'gallery' },
    { label: 'CONTACT', href: '#location', id: 'location' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  /**
   * Theme-Aware Navbar State Model:
   * 1. LIGHT + TOP: Light surface, near-black logo/text, dark icons.
   * 2. LIGHT + SCROLLED: Near-black surface, pure-white logo/text, light icons.
   * 3. DARK + TOP: Near-black surface, pure-white logo/text, light icons.
   * 4. DARK + SCROLLED: Elevated near-black surface, pure-white logo/text, light icons.
   */
  const isDarkSurface = theme === 'dark' || isScrolled;

  const headerBgStyle = {
    backgroundColor: isScrolled
      ? 'rgba(9, 9, 11, 0.96)'
      : theme === 'dark'
        ? 'rgba(9, 9, 11, 0.88)'
        : 'rgba(255, 255, 255, 0.95)',
    borderColor: isScrolled
      ? 'rgba(255, 255, 255, 0.12)'
      : theme === 'dark'
        ? 'rgba(255, 255, 255, 0.08)'
        : 'rgba(0, 0, 0, 0.08)',
  };

  // Explicit foreground colors for foolproof WCAG contrast
  const logoTextColor = isDarkSurface ? '#ffffff' : '#09090b';
  const logoSubtextColor = isDarkSurface ? '#a1a1aa' : '#52525b';
  const iconColor = isDarkSurface ? '#ffffff' : '#09090b';

  return (
    <header
      style={headerBgStyle}
      className={`sticky top-0 z-40 w-full backdrop-blur-md transition-all duration-300 border-b ${
        isScrolled
          ? 'py-2.5 sm:py-3 shadow-xl shadow-black/30'
          : 'py-3.5 sm:py-4.5 shadow-xs'
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-14 xl:px-16 flex items-center justify-between gap-4">
        
        {/* Zone 1: Brand Wordmark & Geometric SVG Emblem */}
        <a
          href="#top"
          onClick={(e) => handleNavClick(e, '#top')}
          style={{ color: logoTextColor }}
          className={`group flex items-center gap-2.5 sm:gap-3 transition-colors duration-300 select-none cursor-pointer hover:opacity-90 shrink-0 ${
            isDarkSurface ? 'text-white' : 'text-zinc-950'
          }`}
          aria-label={`${config.gymName} - Back to top`}
        >
          {/* Theme-aware SVG logo icon with currentColor */}
          <BrandLogoEmblem isDarkSurface={isDarkSurface} />

          <div className="flex flex-col">
            <span
              style={{ color: logoTextColor }}
              className={`text-base sm:text-lg xl:text-xl font-black tracking-tight font-display uppercase whitespace-nowrap leading-none transition-colors duration-300 ${
                isDarkSurface ? 'text-white' : 'text-zinc-950'
              }`}
            >
              {config.gymName}
            </span>
            <span
              style={{ color: logoSubtextColor }}
              className={`text-[9px] sm:text-[10px] font-mono tracking-widest uppercase transition-colors duration-300 mt-1 hidden md:block ${
                isDarkSurface ? 'text-zinc-400' : 'text-zinc-600'
              }`}
            >
              {config.neighborhood} · {config.city}
            </span>
          </div>
        </a>

        {/* Zone 2: Navigation Links with Balanced Gaps and Dynamic Contrast */}
        <nav className="hidden lg:flex items-center gap-3.5 xl:gap-5 2xl:gap-6 text-[11px] xl:text-xs font-semibold tracking-wider font-display">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                style={{
                  color: isDarkSurface
                    ? isActive
                      ? '#ccff00'
                      : '#e4e4e7'
                    : isActive
                      ? '#047857'
                      : '#27272a',
                }}
                className={`py-1 relative uppercase transition-colors duration-300 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:transition-all after:duration-200 ${
                  isDarkSurface
                    ? isActive
                      ? 'text-[#ccff00] font-bold after:w-full after:bg-[#ccff00]'
                      : 'text-zinc-200 hover:text-[#ccff00] after:w-0 hover:after:w-full after:bg-[#ccff00]'
                    : isActive
                      ? 'text-emerald-700 font-bold after:w-full after:bg-emerald-600'
                      : 'text-zinc-800 hover:text-emerald-700 after:w-0 hover:after:w-full after:bg-emerald-600'
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* Zone 3: CTA Button, Theme Switcher & Mobile Toggle */}
        <div className="flex items-center gap-2 sm:gap-2.5 xl:gap-3 shrink-0">
          
          {/* Light / Dark Mode Toggle Button with Guaranteed Contrast */}
          <button
            type="button"
            onClick={toggleTheme}
            style={{
              color: iconColor,
              borderColor: isDarkSurface ? 'rgba(255, 255, 255, 0.2)' : 'rgba(0, 0, 0, 0.15)',
              backgroundColor: isDarkSurface ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.04)',
            }}
            className={`p-2 sm:p-2.5 rounded-lg border transition-all duration-300 cursor-pointer ${
              isDarkSurface
                ? 'border-white/20 bg-white/10 text-white hover:border-white/40 hover:bg-white/15'
                : 'border-black/15 bg-black/5 text-zinc-900 hover:border-black/30 hover:bg-black/10'
            }`}
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            title={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {theme === 'dark' ? (
              <Sun className="w-4 h-4 text-[#ccff00] hover:rotate-45 transition-transform" />
            ) : (
              <Moon
                style={{ color: iconColor }}
                className={`w-4 h-4 hover:-rotate-12 transition-transform ${
                  isDarkSurface ? 'text-white' : 'text-zinc-950'
                }`}
              />
            )}
          </button>

          {/* High-Converting CTA Button: Fully visible without clipping */}
          <button
            onClick={() => openLeadModal('Navbar CTA')}
            className="hidden sm:inline-flex items-center gap-1.5 px-3.5 xl:px-4.5 py-2 xl:py-2.5 text-[11px] xl:text-xs font-black tracking-wide text-black bg-[#ccff00] hover:bg-[#b8e600] active:scale-[0.98] transition-all rounded shadow-md shadow-[#ccff00]/20 whitespace-nowrap cursor-pointer uppercase font-display shrink-0"
          >
            <span>BOOK FREE TRIAL</span>
            <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
          </button>

          {/* Mobile Menu Toggle Button with Dynamic Contrast */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{
              color: iconColor,
              borderColor: isDarkSurface ? 'rgba(255, 255, 255, 0.2)' : 'rgba(0, 0, 0, 0.15)',
              backgroundColor: isDarkSurface ? 'rgba(255, 255, 255, 0.06)' : 'rgba(0, 0, 0, 0.03)',
            }}
            className={`lg:hidden p-2 rounded-lg border transition-all duration-300 cursor-pointer ${
              isDarkSurface
                ? 'text-white border-white/20 hover:border-white/40 hover:bg-white/10'
                : 'text-zinc-950 border-black/15 hover:border-black/30 hover:bg-black/5'
            }`}
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer with Synchronized Theme Styling */}
      {mobileMenuOpen && (
        <div
          style={{
            backgroundColor: isDarkSurface ? 'rgba(9, 9, 11, 0.98)' : 'rgba(255, 255, 255, 0.98)',
            borderColor: isDarkSurface ? 'rgba(255, 255, 255, 0.12)' : 'rgba(0, 0, 0, 0.1)',
            color: isDarkSurface ? '#ffffff' : '#09090b',
          }}
          className={`lg:hidden fixed inset-x-0 top-full backdrop-blur-xl border-b shadow-2xl p-6 transition-all duration-200 ${
            isDarkSurface ? 'text-white border-white/15' : 'text-zinc-950 border-black/10'
          }`}
        >
          <nav className="flex flex-col space-y-3.5">
            {/* Theme Toggle row in Mobile Drawer */}
            <div
              style={{
                borderColor: isDarkSurface ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.08)',
              }}
              className="flex items-center justify-between pb-3 border-b"
            >
              <span
                style={{ color: isDarkSurface ? '#a1a1aa' : '#52525b' }}
                className="text-xs font-mono uppercase font-semibold"
              >
                Color Theme
              </span>
              <button
                type="button"
                onClick={toggleTheme}
                style={{
                  color: isDarkSurface ? '#ffffff' : '#09090b',
                  borderColor: isDarkSurface ? 'rgba(255, 255, 255, 0.2)' : 'rgba(0, 0, 0, 0.15)',
                  backgroundColor: isDarkSurface ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.05)',
                }}
                className="flex items-center gap-2 px-3 py-1.5 rounded-lg border text-xs font-semibold cursor-pointer"
              >
                {theme === 'dark' ? (
                  <>
                    <Sun className="w-4 h-4 text-[#ccff00]" />
                    <span>Light Mode</span>
                  </>
                ) : (
                  <>
                    <Moon className="w-4 h-4 text-zinc-900" />
                    <span>Dark Mode</span>
                  </>
                )}
              </button>
            </div>

            {/* Mobile Navigation Links */}
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  style={{
                    color: isDarkSurface
                      ? isActive
                        ? '#ccff00'
                        : '#f4f4f5'
                      : isActive
                        ? '#047857'
                        : '#18181b',
                    borderColor: isDarkSurface ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.06)',
                  }}
                  className={`text-base font-bold font-display tracking-wider transition-colors py-2.5 border-b uppercase ${
                    isDarkSurface
                      ? isActive
                        ? 'text-[#ccff00]'
                        : 'text-zinc-100 hover:text-[#ccff00]'
                      : isActive
                        ? 'text-emerald-700'
                        : 'text-zinc-900 hover:text-emerald-700'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}

            {/* Mobile Conversion Actions */}
            <div className="pt-3 flex flex-col gap-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  openLeadModal('Mobile Menu CTA');
                }}
                className="w-full py-3.5 text-xs font-black tracking-wider text-black bg-[#ccff00] hover:bg-[#b8e600] rounded text-center uppercase font-display flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-[#ccff00]/25"
              >
                <span>BOOK FREE TRIAL NOW</span>
                <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
              </button>

              <div className="grid grid-cols-2 gap-2.5 pt-1">
                <a
                  href={`tel:${config.phone}`}
                  style={{
                    color: isDarkSurface ? '#ffffff' : '#09090b',
                    borderColor: isDarkSurface ? 'rgba(255, 255, 255, 0.15)' : 'rgba(0, 0, 0, 0.12)',
                  }}
                  className={`flex items-center justify-center gap-2 py-2.5 px-3 rounded-lg border text-xs font-bold transition-colors ${
                    isDarkSurface
                      ? 'border-white/15 text-white hover:bg-white/10'
                      : 'border-black/15 text-zinc-900 hover:bg-black/5'
                  }`}
                >
                  <Phone className={`w-3.5 h-3.5 ${isDarkSurface ? 'text-[#ccff00]' : 'text-emerald-700'}`} />
                  Call Gym
                </a>
                <a
                  href={getWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-lg border border-emerald-500/40 text-xs font-bold text-emerald-500 bg-emerald-500/10 hover:bg-emerald-500/20"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-emerald-500" />
                  WhatsApp
                </a>
              </div>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
