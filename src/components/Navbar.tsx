import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Phone, MessageSquare, Sun, Moon } from 'lucide-react';
import { useGym } from '../context/GymContext';

export const Navbar: React.FC = () => {
  const { config, openLeadModal, getWhatsAppLink, theme, toggleTheme } = useGym();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'HOME', href: '#top' },
    { label: 'PROGRAMS', href: '#programs' },
    { label: 'TRAINERS', href: '#trainers' },
    { label: 'TRANSFORMATIONS', href: '#transformations' },
    { label: 'MEMBERSHIPS', href: '#memberships' },
    { label: 'FACILITY', href: '#gallery' },
    { label: 'CONTACT', href: '#location' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-300 ${
        isScrolled
          ? 'bg-[#09090b]/92 dark:bg-[#09090b]/95 light:bg-white/95 backdrop-blur-md border-b border-black/5 dark:border-white/10 py-3 shadow-xl dark:shadow-black/40'
          : 'bg-transparent border-b border-black/5 dark:border-white/5 py-4 sm:py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Zone 1: Brand Wordmark (Single text element) */}
        <a
          href="#top"
          className="text-lg sm:text-xl font-bold tracking-tight text-zinc-900 dark:text-white font-display uppercase hover:opacity-80 transition-opacity whitespace-nowrap"
        >
          {config.gymName}
        </a>

        {/* Zone 2: Navigation Links */}
        <nav className="hidden lg:flex items-center gap-7 text-xs font-semibold tracking-wider text-zinc-600 dark:text-zinc-300">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="hover:text-emerald-600 dark:hover:text-[#ccff00] transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-emerald-600 dark:after:bg-[#ccff00] hover:after:w-full after:transition-all after:duration-200"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: Primary Action, Theme Toggle & Mobile Toggle */}
        <div className="flex items-center gap-2.5 sm:gap-3">
          {/* Light / Dark Mode Toggle Button */}
          <button
            type="button"
            onClick={toggleTheme}
            className="p-2 sm:p-2.5 rounded-lg border border-black/10 dark:border-white/10 hover:border-black/20 dark:hover:border-white/25 text-zinc-700 dark:text-zinc-300 hover:text-black dark:hover:text-white bg-black/5 dark:bg-white/5 transition-colors cursor-pointer"
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            title={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {theme === 'dark' ? (
              <Sun className="w-4 h-4 text-[#ccff00] hover:rotate-45 transition-transform" />
            ) : (
              <Moon className="w-4 h-4 text-zinc-800 hover:-rotate-12 transition-transform" />
            )}
          </button>

          <button
            onClick={() => openLeadModal('Navbar CTA')}
            className="hidden sm:inline-flex items-center gap-1.5 px-4 sm:px-5 py-2.5 text-xs font-bold tracking-wide text-black bg-[#ccff00] hover:bg-[#b8e600] active:scale-[0.98] transition-all rounded shadow-sm shadow-[#ccff00]/10 whitespace-nowrap cursor-pointer uppercase font-display"
          >
            <span>BOOK FREE TRIAL</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-zinc-700 dark:text-zinc-300 hover:text-black dark:hover:text-white rounded-md border border-black/10 dark:border-white/10 transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-full bg-white/98 dark:bg-[#09090b]/98 backdrop-blur-xl border-b border-black/10 dark:border-white/10 shadow-2xl p-6 transition-all animate-in fade-in slide-in-from-top-4 duration-200">
          <nav className="flex flex-col space-y-4">
            <div className="flex items-center justify-between pb-2 border-b border-black/5 dark:border-white/5">
              <span className="text-xs font-mono uppercase text-zinc-500">Theme Preference</span>
              <button
                type="button"
                onClick={toggleTheme}
                className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-black/10 dark:border-white/10 text-xs font-semibold text-zinc-800 dark:text-zinc-200"
              >
                {theme === 'dark' ? (
                  <>
                    <Sun className="w-4 h-4 text-[#ccff00]" />
                    <span>Light Mode</span>
                  </>
                ) : (
                  <>
                    <Moon className="w-4 h-4 text-zinc-800" />
                    <span>Dark Mode</span>
                  </>
                )}
              </button>
            </div>

            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-base font-semibold tracking-wider text-zinc-800 dark:text-zinc-200 hover:text-emerald-600 dark:hover:text-[#ccff00] transition-colors py-2 border-b border-black/5 dark:border-white/5"
              >
                {link.label}
              </a>
            ))}

            <div className="pt-4 flex flex-col gap-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  openLeadModal('Mobile Menu CTA');
                }}
                className="w-full py-3.5 text-xs font-bold tracking-wider text-black bg-[#ccff00] hover:bg-[#b8e600] rounded text-center uppercase font-display flex items-center justify-center gap-2 cursor-pointer shadow-md"
              >
                BOOK FREE TRIAL NOW
                <ArrowUpRight className="w-4 h-4" />
              </button>

              <div className="grid grid-cols-2 gap-2 pt-2">
                <a
                  href={`tel:${config.phone}`}
                  className="flex items-center justify-center gap-2 py-2.5 px-3 rounded border border-black/10 dark:border-white/10 text-xs font-medium text-zinc-800 dark:text-zinc-300 hover:bg-black/5 dark:hover:bg-white/5"
                >
                  <Phone className="w-3.5 h-3.5 text-emerald-600 dark:text-[#ccff00]" />
                  Call Gym
                </a>
                <a
                  href={getWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-2.5 px-3 rounded border border-emerald-500/30 text-xs font-medium text-emerald-600 dark:text-emerald-400 hover:bg-emerald-500/10"
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
