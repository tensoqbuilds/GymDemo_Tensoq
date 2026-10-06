import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, MessageSquare } from 'lucide-react';
import { useGym } from '../context/GymContext';
import { BrandDumbbellLoader } from '../components/BrandLogoIcon';

export const FreeTrialForm: React.FC = () => {
  const { config, getWhatsAppLink, showToast } = useGym();

  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [goal, setGoal] = useState('Weight Loss & Fat Reduction');
  const [preferredTime, setPreferredTime] = useState('Morning Slot (06:00 AM – 09:00 AM)');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<{ fullName?: string; phone?: string }>({});

  const goals = [
    'Weight Loss & Fat Reduction',
    'Muscle Gain & Hypertrophy',
    'Max Strength & Powerlifting',
    'General Fitness & Consistency',
    '1-on-1 Personal Training',
    'Athlete Performance & Speed',
  ];

  const times = [
    'Morning Slot (06:00 AM – 09:00 AM)',
    'Midday Slot (10:00 AM – 04:00 PM)',
    'Evening Peak (05:00 PM – 08:30 PM)',
    'Night Slot (08:30 PM – 11:00 PM)',
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: { fullName?: string; phone?: string } = {};

    if (!fullName.trim() || fullName.trim().length < 2) {
      newErrors.fullName = 'Please enter your full name';
    }

    const cleanPhone = phone.replace(/[^0-9]/g, '');
    if (!cleanPhone || cleanPhone.length < 10) {
      newErrors.phone = 'Please provide a valid 10-digit mobile number';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      showToast(`VIP Day Pass requested for ${fullName}!`);
    }, 850);
  };

  const whatsappMessage = `Hi ${config.gymName}, I just submitted a Free Trial Pass request on your website!\n\nName: ${fullName}\nPhone: ${phone}\nGoal: ${goal}\nPreferred Slot: ${preferredTime}\nMessage: ${message || 'None'}`;

  return (
    <section id="free-trial" className="py-20 lg:py-28 bg-white dark:bg-[#09090b] text-zinc-900 dark:text-zinc-100 border-t border-black/5 dark:border-white/5 transition-colors relative overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-14 xl:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Pitch & Value Proposition */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-emerald-600 dark:text-[#ccff00]">
              <span>ZERO RISK PASS</span>
              <span aria-hidden="true">·</span>
              <span>100% COMPLIMENTARY</span>
            </div>

            <h2 className="text-4xl sm:text-6xl font-black font-display uppercase tracking-tight text-zinc-900 dark:text-white leading-tight">
              COME TRAIN <br />
              <span className="text-emerald-600 dark:text-[#ccff00]">WITH US.</span>
            </h2>

            <p className="text-xl font-bold font-display uppercase tracking-tight text-zinc-700 dark:text-zinc-300">
              Your first session is on us.
            </p>

            <p className="text-zinc-600 dark:text-zinc-400 text-sm sm:text-base leading-relaxed">
              Experience the equipment, talk with our head coach, test our private facilities, and get an InBody 570 clinical composition scan—without any hard-sell pressure.
            </p>

            <div className="space-y-3 pt-2 text-xs text-zinc-700 dark:text-zinc-300">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-emerald-600 dark:bg-[#ccff00]" />
                <span>Complimentary 45-min coach-guided workout</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-emerald-600 dark:bg-[#ccff00]" />
                <span>Full body fat & lean muscle mass scan report</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-emerald-600 dark:bg-[#ccff00]" />
                <span>Personalized roadmap for your target timeline</span>
              </div>
            </div>

            <div className="pt-4 border-t border-black/5 dark:border-white/5">
              <span className="text-xs font-mono text-zinc-500 block">
                FACILITY LOCATION
              </span>
              <span className="text-sm font-semibold text-zinc-900 dark:text-white">
                {config.neighborhood}, {config.city} · Valet Parking Included
              </span>
            </div>
          </div>

          {/* Form Box */}
          <div className="lg:col-span-7">
            <div className="bg-zinc-50 dark:bg-[#121215] border border-black/5 dark:border-white/10 rounded-2xl p-8 sm:p-12 shadow-2xl relative">
              {submitted ? (
                /* Success Confirmation State */
                <div className="text-center py-8 space-y-6 animate-in fade-in duration-300">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/10 dark:bg-[#ccff00]/10 border border-emerald-500/40 dark:border-[#ccff00]/40 mx-auto flex items-center justify-center text-emerald-600 dark:text-[#ccff00]">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-2xl sm:text-3xl font-black font-display uppercase text-zinc-900 dark:text-white tracking-tight">
                      YOU'RE IN.
                    </h3>
                    <p className="text-sm text-zinc-600 dark:text-zinc-300 max-w-md mx-auto">
                      Thanks, <span className="font-bold text-zinc-900 dark:text-white">{fullName}</span>. Our team in {config.city} will contact you shortly on <span className="font-mono text-emerald-600 dark:text-[#ccff00] font-bold">{phone}</span> to schedule your VIP session.
                    </p>
                  </div>

                  <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
                    <a
                      href={getWhatsAppLink(whatsappMessage)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-emerald-500 hover:bg-emerald-400 text-black font-bold text-xs uppercase tracking-wider rounded transition-all shadow-lg shadow-emerald-500/20 font-display"
                    >
                      <MessageSquare className="w-4 h-4 fill-current" />
                      CHAT ON WHATSAPP NOW
                    </a>

                    <button
                      type="button"
                      onClick={() => {
                        setSubmitted(false);
                        setFullName('');
                        setPhone('');
                        setMessage('');
                      }}
                      className="text-xs text-zinc-500 hover:text-black dark:hover:text-white uppercase tracking-wider font-semibold underline underline-offset-4 cursor-pointer"
                    >
                      Book Another Pass
                    </button>
                  </div>
                </div>
              ) : (
                /* Main Lead Form */
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="border-b border-black/5 dark:border-white/5 pb-4 mb-2">
                    <h3 className="text-xl font-bold font-display uppercase tracking-tight text-zinc-900 dark:text-white">
                      RESERVE YOUR DAY PASS
                    </h3>
                    <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1">
                      No payment info needed. Limited to 20 slots this month.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold uppercase text-zinc-700 dark:text-zinc-300 mb-1.5 tracking-wider">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        placeholder="e.g. Ananya Rao"
                        className="w-full bg-white dark:bg-[#18181f] border border-black/10 dark:border-white/10 rounded-lg px-3.5 py-3 text-sm text-zinc-900 dark:text-white placeholder-zinc-400 focus:outline-none focus:border-emerald-500 dark:focus:border-[#ccff00] transition-colors"
                      />
                      {errors.fullName && (
                        <p className="text-xs text-rose-500 mt-1">{errors.fullName}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase text-zinc-700 dark:text-zinc-300 mb-1.5 tracking-wider">
                        Phone / WhatsApp *
                      </label>
                      <div className="relative">
                        <span className="absolute left-3.5 top-3.5 text-xs text-zinc-500 dark:text-zinc-400 font-mono">
                          +91
                        </span>
                        <input
                          type="tel"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          placeholder="99999 88888"
                          className="w-full bg-white dark:bg-[#18181f] border border-black/10 dark:border-white/10 rounded-lg pl-12 pr-3.5 py-3 text-sm text-zinc-900 dark:text-white placeholder-zinc-400 focus:outline-none focus:border-emerald-500 dark:focus:border-[#ccff00] transition-colors font-mono"
                        />
                      </div>
                      {errors.phone && (
                        <p className="text-xs text-rose-500 mt-1">{errors.phone}</p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold uppercase text-zinc-700 dark:text-zinc-300 mb-1.5 tracking-wider">
                        Primary Goal
                      </label>
                      <select
                        value={goal}
                        onChange={(e) => setGoal(e.target.value)}
                        className="w-full bg-white dark:bg-[#18181f] border border-black/10 dark:border-white/10 rounded-lg px-3.5 py-3 text-xs text-zinc-900 dark:text-white focus:outline-none focus:border-emerald-500 dark:focus:border-[#ccff00] transition-colors"
                      >
                        {goals.map((g) => (
                          <option key={g} value={g} className="bg-white dark:bg-[#121215] text-zinc-900 dark:text-white">
                            {g}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase text-zinc-700 dark:text-zinc-300 mb-1.5 tracking-wider">
                        Preferred Time Slot
                      </label>
                      <select
                        value={preferredTime}
                        onChange={(e) => setPreferredTime(e.target.value)}
                        className="w-full bg-white dark:bg-[#18181f] border border-black/10 dark:border-white/10 rounded-lg px-3.5 py-3 text-xs text-zinc-900 dark:text-white focus:outline-none focus:border-emerald-500 dark:focus:border-[#ccff00] transition-colors"
                      >
                        {times.map((t) => (
                          <option key={t} value={t} className="bg-white dark:bg-[#121215] text-zinc-900 dark:text-white">
                            {t}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase text-zinc-700 dark:text-zinc-300 mb-1.5 tracking-wider">
                      Specific requirements or injuries (Optional)
                    </label>
                    <textarea
                      rows={2}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="e.g. Interested in morning 7 AM strength sessions with personal coaching..."
                      className="w-full bg-white dark:bg-[#18181f] border border-black/10 dark:border-white/10 rounded-lg px-3.5 py-2.5 text-xs text-zinc-900 dark:text-white placeholder-zinc-400 focus:outline-none focus:border-emerald-500 dark:focus:border-[#ccff00] transition-colors"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 bg-[#ccff00] hover:bg-[#b8e600] disabled:opacity-90 text-black font-bold text-xs uppercase tracking-wider rounded-lg transition-all shadow-lg shadow-[#ccff00]/15 flex items-center justify-center gap-2 cursor-pointer font-display"
                  >
                    {isSubmitting ? (
                      <>
                        <BrandDumbbellLoader size="xs" themeMode="light" speed="fast" showShadow={false} />
                        <span>GETTING YOU STARTED...</span>
                      </>
                    ) : (
                      <>
                        <span>BOOK MY FREE TRIAL</span>
                        <ArrowRight className="w-4 h-4 stroke-[2.5]" />
                      </>
                    )}
                  </button>

                  <div className="flex items-center justify-between text-[11px] text-zinc-500 pt-2 font-mono">
                    <span>100% Privacy Protected</span>
                    <span>Direct Call or WhatsApp Confirmation</span>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
