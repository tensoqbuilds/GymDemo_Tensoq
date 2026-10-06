import React, { useState } from 'react';
import { Sliders, X, RotateCcw, Check, Sparkles } from 'lucide-react';
import { useGym } from '../context/GymContext';

export const DemoCustomizerDrawer: React.FC = () => {
  const { config, updateConfig, resetConfig, isPitchDrawerOpen, setIsPitchDrawerOpen } = useGym();

  const [localName, setLocalName] = useState(config.gymName);
  const [localTagline, setLocalTagline] = useState(config.tagline);
  const [localCity, setLocalCity] = useState(config.city);
  const [localNeighborhood, setLocalNeighborhood] = useState(config.neighborhood);
  const [localPhone, setLocalPhone] = useState(config.displayPhone);
  const [localProPrice, setLocalProPrice] = useState(config.pricing.monthly.pro.toString());

  const handleApply = (e: React.FormEvent) => {
    e.preventDefault();
    updateConfig({
      gymName: localName,
      tagline: localTagline,
      city: localCity,
      neighborhood: localNeighborhood,
      displayPhone: localPhone,
      pricing: {
        ...config.pricing,
        monthly: {
          ...config.pricing.monthly,
          pro: parseInt(localProPrice) || 3499,
        },
      },
    });
    setIsPitchDrawerOpen(false);
  };

  const applyPreset = (preset: {
    gymName: string;
    tagline: string;
    city: string;
    neighborhood: string;
    phone: string;
    proPrice: number;
  }) => {
    setLocalName(preset.gymName);
    setLocalTagline(preset.tagline);
    setLocalCity(preset.city);
    setLocalNeighborhood(preset.neighborhood);
    setLocalPhone(preset.phone);
    setLocalProPrice(preset.proPrice.toString());

    updateConfig({
      gymName: preset.gymName,
      tagline: preset.tagline,
      city: preset.city,
      neighborhood: preset.neighborhood,
      displayPhone: preset.phone,
      fullAddress: `${preset.neighborhood}, ${preset.city}`,
      pricing: {
        ...config.pricing,
        monthly: {
          ...config.pricing.monthly,
          pro: preset.proPrice,
        },
      },
    });
  };

  return (
    <>
      {/* Subtle trigger button in bottom-left */}
      <div className="fixed bottom-6 left-6 z-40">
        <button
          onClick={() => setIsPitchDrawerOpen(true)}
          className="flex items-center gap-2 px-3 py-2 rounded-full bg-zinc-900/95 dark:bg-[#16161b]/95 border border-white/20 dark:border-white/10 hover:border-[#ccff00]/50 text-zinc-100 dark:text-zinc-300 hover:text-white text-xs font-semibold shadow-xl backdrop-blur-md transition-all group cursor-pointer"
          title="Sales Pitch Customizer"
        >
          <Sliders className="w-3.5 h-3.5 text-[#ccff00] group-hover:rotate-45 transition-transform" />
          <span className="hidden sm:inline">Pitch Demo Mode</span>
          <span className="sm:hidden">Demo</span>
        </button>
      </div>

      {/* Drawer Overlay */}
      {isPitchDrawerOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="demo-drawer-title"
          className="fixed inset-0 z-50 overflow-hidden bg-black/60 backdrop-blur-sm flex justify-start animate-in fade-in duration-200"
        >
          <div 
            className="w-full max-w-md bg-white dark:bg-[#121215] border-r border-black/10 dark:border-white/10 h-full overflow-y-auto p-6 flex flex-col justify-between shadow-2xl text-zinc-900 dark:text-zinc-200"
          >
            <div className="space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-black/5 dark:border-white/5">
                <div className="flex items-center gap-2">
                  <Sliders className="w-4 h-4 text-emerald-600 dark:text-[#ccff00]" />
                  <h2 id="demo-drawer-title" className="text-base font-bold text-zinc-900 dark:text-white font-display uppercase tracking-wide">
                    Sales Pitch Live Customizer
                  </h2>
                </div>
                <button
                  onClick={() => setIsPitchDrawerOpen(false)}
                  className="p-1 text-zinc-500 hover:text-black dark:text-zinc-400 dark:hover:text-white"
                  aria-label="Close customizer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="bg-emerald-500/10 dark:bg-[#18181f] border border-emerald-500/30 dark:border-[#ccff00]/20 rounded-xl p-3.5 text-xs space-y-1">
                <span className="font-bold text-emerald-700 dark:text-[#ccff00] flex items-center gap-1.5 uppercase text-[10px] tracking-wider">
                  <Sparkles className="w-3 h-3" />
                  Sales Presentation Tool
                </span>
                <p className="text-zinc-600 dark:text-zinc-400 text-[11px] leading-relaxed">
                  Showing this live to a gym owner? Type their gym name and city here. The entire website instantly adapts, showing them their exact future digital presence!
                </p>
              </div>

              {/* Instant City Presets */}
              <div className="space-y-2">
                <label className="text-[11px] font-mono uppercase text-zinc-500 dark:text-zinc-400 tracking-wider">
                  1-Click Client Presets
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() =>
                      applyPreset({
                        gymName: 'IRON DISTRICT FITNESS',
                        tagline: 'Train Hard. Look Different.',
                        city: 'Hyderabad',
                        neighborhood: 'Banjara Hills',
                        phone: '+91 99999 99999',
                        proPrice: 3499,
                      })
                    }
                    className="p-2.5 rounded-xl bg-zinc-50 dark:bg-[#18181f] border border-black/5 dark:border-white/5 hover:border-emerald-500 dark:hover:border-[#ccff00]/50 text-left text-xs transition-colors cursor-pointer"
                  >
                    <div className="font-bold text-zinc-900 dark:text-white truncate">Iron District</div>
                    <div className="text-[10px] text-zinc-500 dark:text-zinc-400">Hyderabad (Banjara)</div>
                  </button>

                  <button
                    type="button"
                    onClick={() =>
                      applyPreset({
                        gymName: 'TITAN STRENGTH STUDIO',
                        tagline: 'Defy Limits. Forge Power.',
                        city: 'Bengaluru',
                        neighborhood: 'Indiranagar',
                        phone: '+91 98450 12345',
                        proPrice: 4200,
                      })
                    }
                    className="p-2.5 rounded-xl bg-zinc-50 dark:bg-[#18181f] border border-black/5 dark:border-white/5 hover:border-emerald-500 dark:hover:border-[#ccff00]/50 text-left text-xs transition-colors cursor-pointer"
                  >
                    <div className="font-bold text-zinc-900 dark:text-white truncate">Titan Strength</div>
                    <div className="text-[10px] text-zinc-500 dark:text-zinc-400">Bengaluru (Indiranagar)</div>
                  </button>

                  <button
                    type="button"
                    onClick={() =>
                      applyPreset({
                        gymName: 'RAW REPUBLIC GYM',
                        tagline: 'Old School Grit. Modern Science.',
                        city: 'Mumbai',
                        neighborhood: 'Bandra West',
                        phone: '+91 98200 54321',
                        proPrice: 4999,
                      })
                    }
                    className="p-2.5 rounded-xl bg-zinc-50 dark:bg-[#18181f] border border-black/5 dark:border-white/5 hover:border-emerald-500 dark:hover:border-[#ccff00]/50 text-left text-xs transition-colors cursor-pointer"
                  >
                    <div className="font-bold text-zinc-900 dark:text-white truncate">Raw Republic</div>
                    <div className="text-[10px] text-zinc-500 dark:text-zinc-400">Mumbai (Bandra)</div>
                  </button>

                  <button
                    type="button"
                    onClick={() =>
                      applyPreset({
                        gymName: 'APEX PERFORMANCE LAB',
                        tagline: 'Engineering Human Peak State.',
                        city: 'Delhi NCR',
                        neighborhood: 'Cyber Hub, Gurugram',
                        phone: '+91 98110 88990',
                        proPrice: 3999,
                      })
                    }
                    className="p-2.5 rounded-xl bg-zinc-50 dark:bg-[#18181f] border border-black/5 dark:border-white/5 hover:border-emerald-500 dark:hover:border-[#ccff00]/50 text-left text-xs transition-colors cursor-pointer"
                  >
                    <div className="font-bold text-zinc-900 dark:text-white truncate">Apex Performance</div>
                    <div className="text-[10px] text-zinc-500 dark:text-zinc-400">Gurugram / Delhi</div>
                  </button>
                </div>
              </div>

              {/* Custom Input Form */}
              <form onSubmit={handleApply} className="space-y-4 pt-2">
                <div>
                  <label className="block text-[11px] font-mono uppercase text-zinc-600 dark:text-zinc-400 tracking-wider mb-1">
                    Gym Brand Name
                  </label>
                  <input
                    type="text"
                    value={localName}
                    onChange={(e) => setLocalName(e.target.value)}
                    className="w-full bg-zinc-50 dark:bg-[#18181f] border border-black/10 dark:border-white/10 rounded-lg px-3 py-2 text-xs text-zinc-900 dark:text-white focus:outline-none focus:border-emerald-500 dark:focus:border-[#ccff00]"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-mono uppercase text-zinc-600 dark:text-zinc-400 tracking-wider mb-1">
                    Brand Tagline
                  </label>
                  <input
                    type="text"
                    value={localTagline}
                    onChange={(e) => setLocalTagline(e.target.value)}
                    className="w-full bg-zinc-50 dark:bg-[#18181f] border border-black/10 dark:border-white/10 rounded-lg px-3 py-2 text-xs text-zinc-900 dark:text-white focus:outline-none focus:border-emerald-500 dark:focus:border-[#ccff00]"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] font-mono uppercase text-zinc-600 dark:text-zinc-400 tracking-wider mb-1">
                      City
                    </label>
                    <input
                      type="text"
                      value={localCity}
                      onChange={(e) => setLocalCity(e.target.value)}
                      className="w-full bg-zinc-50 dark:bg-[#18181f] border border-black/10 dark:border-white/10 rounded-lg px-3 py-2 text-xs text-zinc-900 dark:text-white focus:outline-none focus:border-emerald-500 dark:focus:border-[#ccff00]"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-mono uppercase text-zinc-600 dark:text-zinc-400 tracking-wider mb-1">
                      Neighborhood
                    </label>
                    <input
                      type="text"
                      value={localNeighborhood}
                      onChange={(e) => setLocalNeighborhood(e.target.value)}
                      className="w-full bg-zinc-50 dark:bg-[#18181f] border border-black/10 dark:border-white/10 rounded-lg px-3 py-2 text-xs text-zinc-900 dark:text-white focus:outline-none focus:border-emerald-500 dark:focus:border-[#ccff00]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] font-mono uppercase text-zinc-600 dark:text-zinc-400 tracking-wider mb-1">
                      Phone Number
                    </label>
                    <input
                      type="text"
                      value={localPhone}
                      onChange={(e) => setLocalPhone(e.target.value)}
                      className="w-full bg-zinc-50 dark:bg-[#18181f] border border-black/10 dark:border-white/10 rounded-lg px-3 py-2 text-xs text-zinc-900 dark:text-white focus:outline-none focus:border-emerald-500 dark:focus:border-[#ccff00] font-mono"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-mono uppercase text-zinc-600 dark:text-zinc-400 tracking-wider mb-1">
                      Pro Plan (₹/mo)
                    </label>
                    <input
                      type="number"
                      value={localProPrice}
                      onChange={(e) => setLocalProPrice(e.target.value)}
                      className="w-full bg-zinc-50 dark:bg-[#18181f] border border-black/10 dark:border-white/10 rounded-lg px-3 py-2 text-xs text-zinc-900 dark:text-white focus:outline-none focus:border-emerald-500 dark:focus:border-[#ccff00] font-mono"
                    />
                  </div>
                </div>

                <div className="pt-2 flex items-center gap-3">
                  <button
                    type="submit"
                    className="flex-1 py-2.5 px-4 bg-[#ccff00] hover:bg-[#b8e600] text-black text-xs font-bold uppercase rounded-lg tracking-wider cursor-pointer font-display"
                  >
                    APPLY LIVE BRANDING
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      resetConfig();
                      setLocalName('IRON DISTRICT FITNESS');
                      setLocalTagline('Train Hard. Look Different.');
                      setLocalCity('Hyderabad');
                      setLocalNeighborhood('Banjara Hills');
                      setLocalPhone('+91 99999 99999');
                      setLocalProPrice('3499');
                      setIsPitchDrawerOpen(false);
                    }}
                    className="p-2.5 border border-black/10 dark:border-white/10 hover:border-black/20 dark:hover:border-white/20 rounded-lg text-zinc-500 dark:text-zinc-400 hover:text-black dark:hover:text-white"
                    title="Reset to Defaults"
                  >
                    <RotateCcw className="w-4 h-4" />
                  </button>
                </div>
              </form>
            </div>

            <div className="border-t border-black/5 dark:border-white/5 pt-4 text-[10px] text-zinc-500 font-mono">
              Demo client customization stored locally in browser session.
            </div>
          </div>
        </div>
      )}
    </>
  );
};
