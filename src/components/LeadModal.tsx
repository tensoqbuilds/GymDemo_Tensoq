import React, { useState } from 'react';
import { X, Check, ArrowRight, ArrowLeft, MessageSquare, Phone, Calendar, Clock, Target, User } from 'lucide-react';
import { useGym } from '../context/GymContext';
import { BrandDumbbellLoader } from './BrandLogoIcon';

export const LeadModal: React.FC = () => {
  const { isLeadModalOpen, closeLeadModal, activeGoalPreset, config, getWhatsAppLink, showToast } = useGym();

  const [step, setStep] = useState(1);
  const [goal, setGoal] = useState(activeGoalPreset || 'Fat Loss & Conditioning');
  const [frequency, setFrequency] = useState('Beginner / Rarely');
  const [preferredTime, setPreferredTime] = useState('Morning (06:00 AM – 09:00 AM)');
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [notes, setNotes] = useState('');
  const [errors, setErrors] = useState<{ fullName?: string; phone?: string }>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isLeadModalOpen) return null;

  const goalsList = [
    { id: 'Fat Loss & Conditioning', title: 'Fat Loss & Toning', desc: 'Shed body fat and lean out' },
    { id: 'Muscle Gain & Strength', title: 'Muscle Gain & Hypertrophy', desc: 'Build dense muscle and raw strength' },
    { id: '1-on-1 Personal Training', title: '1-on-1 Personal Training', desc: 'Private coach, customized program & diet' },
    { id: 'Functional Fitness & Core', title: 'Functional Fitness & Mobility', desc: 'Fix posture, joint pain & flexibility' },
    { id: 'Athlete Performance', title: 'Athlete Performance', desc: 'Speed, explosive power & stamina' },
    { id: 'General Health & Energy', title: 'General Health & Stamina', desc: 'Build consistency and daily energy' },
  ];

  const frequencyList = [
    { id: 'Beginner / Rarely', title: 'Complete Beginner / Inactive', desc: 'Looking for guidance from scratch' },
    { id: '1-2 days/week', title: '1 – 2 Days a Week', desc: 'Inconsistent routine, want structure' },
    { id: '3-4 days/week', title: '3 – 4 Days a Week', desc: 'Regular exerciser seeking next level' },
    { id: '5+ days/week', title: '5+ Days a Week', desc: 'High frequency, performance-focused' },
  ];

  const timesList = [
    { id: 'Morning (06:00 AM – 09:00 AM)', label: 'Morning Slot', hours: '06:00 AM – 09:00 AM' },
    { id: 'Midday (10:00 AM – 04:00 PM)', label: 'Midday Slot', hours: '10:00 AM – 04:00 PM' },
    { id: 'Evening (05:00 PM – 08:30 PM)', label: 'Evening Peak Slot', hours: '05:00 PM – 08:30 PM' },
    { id: 'Night (08:30 PM – 11:00 PM)', label: 'Night Owl Slot', hours: '08:30 PM – 11:00 PM' },
  ];

  const handleNext = () => {
    if (step === 3) {
      setStep(4);
    } else {
      setStep((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    setStep((prev) => Math.max(1, prev - 1));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: { fullName?: string; phone?: string } = {};

    if (!fullName.trim() || fullName.trim().length < 2) {
      newErrors.fullName = 'Please enter your full name';
    }

    const cleanPhone = phone.replace(/[^0-9]/g, '');
    if (!cleanPhone || cleanPhone.length < 10) {
      newErrors.phone = 'Please enter a valid 10-digit mobile number';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      showToast(`Trial Pass confirmed for ${fullName.trim()}!`);
    }, 850);
  };

  const handleResetAndClose = () => {
    setIsSubmitted(false);
    setStep(1);
    setFullName('');
    setPhone('');
    setNotes('');
    closeLeadModal();
  };

  const leadWhatsAppSummary = `Hi ${config.gymName}, I just booked a Free Trial Pass on your website!\n\nName: ${fullName}\nPhone: ${phone}\nGoal: ${goal}\nExperience: ${frequency}\nSlot: ${preferredTime}\nLocation: ${config.city}`;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="lead-modal-title"
      className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
    >
      <div 
        className="relative w-full max-w-xl bg-white dark:bg-[#121215] border border-black/10 dark:border-white/10 rounded-2xl shadow-2xl overflow-hidden text-zinc-900 dark:text-zinc-100 animate-in fade-in zoom-in-95 duration-200"
      >
        {/* Top Progress & Close Button */}
        <div className="flex items-center justify-between p-5 border-b border-black/5 dark:border-white/5 bg-zinc-50 dark:bg-[#16161b]">
          <div>
            <span className="text-[10px] font-mono tracking-widest text-zinc-500 dark:text-zinc-400 uppercase">
              {isSubmitted ? 'PASS CONFIRMED' : `STEP ${step} OF 4 · VIP TRIAL ACCESS`}
            </span>
            <h2 id="lead-modal-title" className="text-base sm:text-lg font-bold font-display uppercase tracking-tight text-zinc-900 dark:text-white">
              {isSubmitted ? "YOU'RE ONE STEP CLOSER" : 'CLAIM YOUR 1-DAY PASS'}
            </h2>
          </div>
          <button
            onClick={handleResetAndClose}
            className="p-1.5 text-zinc-500 hover:text-black dark:text-zinc-400 dark:hover:text-white rounded-lg hover:bg-black/5 dark:hover:bg-white/5 transition-colors"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Multi-step progress bar */}
        {!isSubmitted && (
          <div className="w-full bg-black/5 dark:bg-white/5 h-1">
            <div
              className="bg-emerald-600 dark:bg-[#ccff00] h-1 transition-all duration-300"
              style={{ width: `${(step / 4) * 100}%` }}
            />
          </div>
        )}

        <div className="p-6">
          {isSubmitted ? (
            /* Success confirmation screen */
            <div className="text-center py-6 space-y-6">
              <div className="w-14 h-14 rounded-full bg-emerald-500/10 dark:bg-[#ccff00]/10 border border-emerald-500/40 dark:border-[#ccff00]/30 mx-auto flex items-center justify-center text-emerald-600 dark:text-[#ccff00]">
                <Check className="w-8 h-8 stroke-[2.5]" />
              </div>

              <div className="space-y-2">
                <h3 className="text-2xl font-bold font-display uppercase text-zinc-900 dark:text-white">
                  YOU'RE IN, {fullName.split(' ')[0]}!
                </h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 max-w-md mx-auto">
                  Your VIP Day Pass has been reserved at <span className="text-zinc-900 dark:text-zinc-200 font-semibold">{config.gymName}</span> ({config.neighborhood}, {config.city}). Our lead coach will call you on <span className="text-emerald-600 dark:text-[#ccff00] font-mono font-bold">{phone}</span> to schedule your consultation.
                </p>
              </div>

              {/* Booking Summary Box */}
              <div className="bg-zinc-50 dark:bg-[#18181e] border border-black/5 dark:border-white/10 rounded-xl p-4 text-left text-xs space-y-2 max-w-md mx-auto">
                <div className="flex justify-between border-b border-black/5 dark:border-white/5 pb-2 text-zinc-500 dark:text-zinc-400">
                  <span>Selected Focus:</span>
                  <span className="text-zinc-900 dark:text-white font-medium">{goal}</span>
                </div>
                <div className="flex justify-between border-b border-black/5 dark:border-white/5 pb-2 text-zinc-500 dark:text-zinc-400">
                  <span>Preferred Timing:</span>
                  <span className="text-zinc-900 dark:text-white font-medium">{preferredTime}</span>
                </div>
                <div className="flex justify-between text-zinc-500 dark:text-zinc-400">
                  <span>Facility Location:</span>
                  <span className="text-zinc-900 dark:text-white font-medium">{config.neighborhood}, {config.city}</span>
                </div>
              </div>

              {/* Conversion Actions */}
              <div className="pt-2 flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href={getWhatsAppLink(leadWhatsAppSummary)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-emerald-500 hover:bg-emerald-400 text-black font-bold text-xs tracking-wide rounded uppercase transition-all shadow-lg shadow-emerald-500/20"
                >
                  <MessageSquare className="w-4 h-4 fill-current" />
                  CONFIRM INSTANTLY ON WHATSAPP
                </a>
                <button
                  onClick={handleResetAndClose}
                  className="px-5 py-3 border border-black/10 dark:border-white/10 hover:border-black/20 dark:hover:border-white/20 text-xs font-semibold text-zinc-700 dark:text-zinc-300 rounded uppercase hover:bg-black/5 dark:hover:bg-white/5 transition-colors"
                >
                  DONE
                </button>
              </div>
            </div>
          ) : (
            <div>
              {/* STEP 1: Main Goal */}
              {step === 1 && (
                <div className="space-y-4">
                  <div>
                    <h3 className="text-sm font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                      Step 1 of 4
                    </h3>
                    <p className="text-lg font-bold text-zinc-900 dark:text-white font-display">
                      What is your primary fitness goal?
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                    {goalsList.map((item) => {
                      const selected = goal === item.id;
                      return (
                        <button
                          key={item.id}
                          type="button"
                          onClick={() => setGoal(item.id)}
                          className={`text-left p-3.5 rounded-xl border transition-all cursor-pointer flex flex-col justify-between ${
                            selected
                              ? 'bg-emerald-500/10 dark:bg-[#ccff00]/10 border-emerald-600 dark:border-[#ccff00] text-zinc-900 dark:text-white shadow-sm'
                              : 'bg-zinc-50 dark:bg-[#18181e] border-black/5 dark:border-white/5 text-zinc-700 dark:text-zinc-300 hover:border-black/20 dark:hover:border-white/20 hover:bg-zinc-100 dark:hover:bg-[#1e1e24]'
                          }`}
                        >
                          <div className="flex items-center justify-between mb-1">
                            <span className={`text-xs font-bold tracking-tight uppercase ${selected ? 'text-emerald-700 dark:text-[#ccff00]' : 'text-zinc-900 dark:text-zinc-200'}`}>
                              {item.title}
                            </span>
                            {selected && <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-[#ccff00]" />}
                          </div>
                          <span className="text-[11px] text-zinc-500 dark:text-zinc-400 leading-relaxed">
                            {item.desc}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* STEP 2: Current Training Frequency */}
              {step === 2 && (
                <div className="space-y-4">
                  <div>
                    <h3 className="text-sm font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                      Step 2 of 4
                    </h3>
                    <p className="text-lg font-bold text-zinc-900 dark:text-white font-display">
                      How often do you currently workout?
                    </p>
                  </div>

                  <div className="space-y-2.5 pt-2">
                    {frequencyList.map((item) => {
                      const selected = frequency === item.id;
                      return (
                        <button
                          key={item.id}
                          type="button"
                          onClick={() => setFrequency(item.id)}
                          className={`w-full text-left p-3.5 rounded-xl border transition-all cursor-pointer flex items-center justify-between ${
                            selected
                              ? 'bg-emerald-500/10 dark:bg-[#ccff00]/10 border-emerald-600 dark:border-[#ccff00] text-zinc-900 dark:text-white'
                              : 'bg-zinc-50 dark:bg-[#18181e] border-black/5 dark:border-white/5 text-zinc-700 dark:text-zinc-300 hover:border-black/20 dark:hover:border-white/20 hover:bg-zinc-100 dark:hover:bg-[#1e1e24]'
                          }`}
                        >
                          <div>
                            <div className={`text-xs font-bold uppercase ${selected ? 'text-emerald-700 dark:text-[#ccff00]' : 'text-zinc-900 dark:text-zinc-200'}`}>
                              {item.title}
                            </div>
                            <div className="text-[11px] text-zinc-500 dark:text-zinc-400">{item.desc}</div>
                          </div>
                          {selected && <Check className="w-4 h-4 text-emerald-600 dark:text-[#ccff00]" />}
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* STEP 3: Preferred Time */}
              {step === 3 && (
                <div className="space-y-4">
                  <div>
                    <h3 className="text-sm font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                      Step 3 of 4
                    </h3>
                    <p className="text-lg font-bold text-zinc-900 dark:text-white font-display">
                      Which time slot suits your schedule best?
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                    {timesList.map((item) => {
                      const selected = preferredTime === item.id;
                      return (
                        <button
                          key={item.id}
                          type="button"
                          onClick={() => setPreferredTime(item.id)}
                          className={`text-left p-3.5 rounded-xl border transition-all cursor-pointer ${
                            selected
                              ? 'bg-emerald-500/10 dark:bg-[#ccff00]/10 border-emerald-600 dark:border-[#ccff00] text-zinc-900 dark:text-white'
                              : 'bg-zinc-50 dark:bg-[#18181e] border-black/5 dark:border-white/5 text-zinc-700 dark:text-zinc-300 hover:border-black/20 dark:hover:border-white/20 hover:bg-zinc-100 dark:hover:bg-[#1e1e24]'
                          }`}
                        >
                          <div className={`text-xs font-bold uppercase mb-1 ${selected ? 'text-emerald-700 dark:text-[#ccff00]' : 'text-zinc-900 dark:text-zinc-200'}`}>
                            {item.label}
                          </div>
                          <div className="text-[11px] text-zinc-500 dark:text-zinc-400 font-mono">{item.hours}</div>
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* STEP 4: Contact Details */}
              {step === 4 && (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <h3 className="text-sm font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                      Final Step
                    </h3>
                    <p className="text-lg font-bold text-zinc-900 dark:text-white font-display">
                      Where should we send your Pass details?
                    </p>
                  </div>

                  <div className="space-y-3 pt-1">
                    <div>
                      <label className="block text-xs font-medium text-zinc-700 dark:text-zinc-300 uppercase tracking-wider mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        placeholder="e.g. Rahul Sharma"
                        className="w-full bg-zinc-50 dark:bg-[#18181e] border border-black/10 dark:border-white/10 rounded-lg px-3.5 py-2.5 text-sm text-zinc-900 dark:text-white placeholder-zinc-400 focus:outline-none focus:border-emerald-500 dark:focus:border-[#ccff00] transition-colors"
                      />
                      {errors.fullName && (
                        <p className="text-xs text-rose-500 mt-1">{errors.fullName}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-zinc-700 dark:text-zinc-300 uppercase tracking-wider mb-1">
                        Phone / WhatsApp Number (India) *
                      </label>
                      <div className="relative">
                        <span className="absolute left-3.5 top-2.5 text-xs text-zinc-500 dark:text-zinc-400 font-mono">
                          +91
                        </span>
                        <input
                          type="tel"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          placeholder="98765 43210"
                          className="w-full bg-zinc-50 dark:bg-[#18181e] border border-black/10 dark:border-white/10 rounded-lg pl-12 pr-3.5 py-2.5 text-sm text-zinc-900 dark:text-white placeholder-zinc-400 focus:outline-none focus:border-emerald-500 dark:focus:border-[#ccff00] transition-colors font-mono"
                        />
                      </div>
                      {errors.phone && (
                        <p className="text-xs text-rose-500 mt-1">{errors.phone}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-zinc-700 dark:text-zinc-300 uppercase tracking-wider mb-1">
                        Any injury or specific goal notes? (Optional)
                      </label>
                      <input
                        type="text"
                        value={notes}
                        onChange={(e) => setNotes(e.target.value)}
                        placeholder="e.g. lower back stiffness, want to prepare for wedding in 4 months"
                        className="w-full bg-zinc-50 dark:bg-[#18181e] border border-black/10 dark:border-white/10 rounded-lg px-3.5 py-2 text-xs text-zinc-900 dark:text-white placeholder-zinc-400 focus:outline-none focus:border-emerald-500 dark:focus:border-[#ccff00] transition-colors"
                      />
                    </div>
                  </div>

                  <div className="text-[11px] text-zinc-500 dark:text-zinc-400 border-t border-black/5 dark:border-white/5 pt-3">
                    🔒 Zero spam guarantee. We will only contact you to schedule your 1-day free pass.
                  </div>

                  <div className="flex items-center justify-between pt-2">
                    <button
                      type="button"
                      onClick={handlePrev}
                      className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-zinc-500 hover:text-black dark:text-zinc-400 dark:hover:text-white rounded hover:bg-black/5 dark:hover:bg-white/5 transition-colors cursor-pointer"
                    >
                      <ArrowLeft className="w-3.5 h-3.5" /> Back
                    </button>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="inline-flex items-center gap-2 px-6 py-2.5 bg-[#ccff00] hover:bg-[#b8e600] disabled:opacity-90 text-black font-bold text-xs tracking-wider rounded uppercase transition-all shadow-md cursor-pointer font-display"
                    >
                      {isSubmitting ? (
                        <>
                          <BrandDumbbellLoader size="xs" themeMode="light" speed="fast" showShadow={false} />
                          <span>GETTING YOU STARTED...</span>
                        </>
                      ) : (
                        <>
                          <span>CONFIRM VIP TRIAL PASS</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}

              {/* Navigation controls for Steps 1-3 */}
              {step < 4 && (
                <div className="flex items-center justify-between pt-6 border-t border-black/5 dark:border-white/5 mt-6">
                  {step > 1 ? (
                    <button
                      type="button"
                      onClick={handlePrev}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-zinc-500 hover:text-black dark:text-zinc-400 dark:hover:text-white transition-colors cursor-pointer"
                    >
                      <ArrowLeft className="w-3.5 h-3.5" /> Back
                    </button>
                  ) : (
                    <span className="text-[11px] text-zinc-500">100% Free · No Card Required</span>
                  )}

                  <button
                    type="button"
                    onClick={handleNext}
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#ccff00] hover:bg-[#b8e600] text-black font-bold text-xs tracking-wider rounded uppercase transition-all cursor-pointer font-display"
                  >
                    <span>NEXT STEP</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
