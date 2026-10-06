import React from 'react';
import { Target, UserCheck, Dumbbell, Flame, CheckCircle, ArrowRight } from 'lucide-react';
import { useGym } from '../context/GymContext';
import { IMAGES } from '../assets/images';

export const WhyChooseUs: React.FC = () => {
  const { openLeadModal } = useGym();

  return (
    <section id="why-us" className="py-24 lg:py-32 bg-white dark:bg-[#09090b] text-zinc-900 dark:text-zinc-100 transition-colors relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Editorial Section Header */}
        <div className="max-w-3xl mb-16 space-y-3">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-emerald-600 dark:text-[#ccff00]">
            <span>THE IRON DISTRICT METHOD</span>
            <span aria-hidden="true">·</span>
            <span>PROVEN STANDARD</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black font-display uppercase tracking-tight text-zinc-900 dark:text-white leading-tight">
            NOT JUST A GYM. <br />
            <span className="text-zinc-500 dark:text-zinc-400">IT'S A SYSTEM FOR GETTING RESULTS.</span>
          </h2>

          <p className="text-zinc-600 dark:text-zinc-400 text-sm sm:text-base leading-relaxed pt-2">
            Most fitness centers sell you a subscription and hope you stop showing up by February. We engineered our floor, coaching protocols, and check-in schedules to make consistency unavoidable.
          </p>
        </div>

        {/* Editorial Asymmetric Grid with Integrated Gym Photography */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
          
          {/* Block 01 - Large Lead Feature with Image (Spans 7 cols) */}
          <div className="lg:col-span-7 bg-zinc-50 dark:bg-[#121215] border border-black/5 dark:border-white/5 hover:border-black/15 dark:hover:border-white/15 rounded-2xl p-6 sm:p-9 flex flex-col justify-between transition-all duration-300 group hover:shadow-xl">
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="text-3xl sm:text-4xl font-black font-mono text-emerald-600 dark:text-[#ccff00] tabular-nums">
                  01
                </span>
                <div className="p-3 rounded-lg bg-black/5 dark:bg-white/5 group-hover:bg-emerald-500/10 dark:group-hover:bg-[#ccff00]/10 text-zinc-700 dark:text-zinc-300 group-hover:text-emerald-600 dark:group-hover:text-[#ccff00] transition-colors">
                  <Target className="w-6 h-6" />
                </div>
              </div>

              {/* Integrated Gym Fitness Photo */}
              <div className="relative rounded-xl overflow-hidden aspect-[16/9] mb-6 bg-zinc-200 dark:bg-[#18181f] border border-black/5 dark:border-white/5">
                <img
                  src={IMAGES.barbellDeadlift}
                  alt="Deadlift progressive overload at Iron District"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover filter brightness-[0.92] dark:brightness-[0.75] group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 text-white text-xs font-mono font-bold uppercase">
                  PROGRESSIVE OVERLOAD BARBELL STATIONS
                </div>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold font-display uppercase text-zinc-900 dark:text-white mb-3">
                RESULT-DRIVEN TRAINING
              </h3>

              <p className="text-zinc-600 dark:text-zinc-300 text-sm sm:text-base leading-relaxed mb-6">
                No random workouts pulled off social media. Every phase of your program applies progressive overload science, documented rep maximums, and structured recovery so your body has no choice but to adapt.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4 border-t border-black/5 dark:border-white/5 text-xs text-zinc-600 dark:text-zinc-400">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-600 dark:text-[#ccff00]" />
                  <span>Periodized 6 to 12-week cycles</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-600 dark:text-[#ccff00]" />
                  <span>InBody 570 clinical composition scans</span>
                </div>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-black/5 dark:border-white/5 flex items-center justify-between">
              <span className="text-xs text-zinc-500 font-mono">TRACKED METRICS ONLY</span>
              <button
                onClick={() => openLeadModal('Result-Driven Training')}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-600 dark:text-[#ccff00] uppercase hover:underline cursor-pointer"
              >
                Explore Training Cycles <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Block 02 - Structural Feature with Coach Photo (Spans 5 cols) */}
          <div className="lg:col-span-5 bg-zinc-50 dark:bg-[#121215] border border-black/5 dark:border-white/5 hover:border-black/15 dark:hover:border-white/15 rounded-2xl p-6 sm:p-9 flex flex-col justify-between transition-all duration-300 group hover:shadow-xl">
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="text-3xl sm:text-4xl font-black font-mono text-emerald-600 dark:text-[#ccff00] tabular-nums">
                  02
                </span>
                <div className="p-3 rounded-lg bg-black/5 dark:bg-white/5 group-hover:bg-emerald-500/10 dark:group-hover:bg-[#ccff00]/10 text-zinc-700 dark:text-zinc-300 group-hover:text-emerald-600 dark:group-hover:text-[#ccff00] transition-colors">
                  <UserCheck className="w-6 h-6" />
                </div>
              </div>

              {/* Integrated Coach Photo */}
              <div className="relative rounded-xl overflow-hidden aspect-[16/9] mb-6 bg-zinc-200 dark:bg-[#18181f] border border-black/5 dark:border-white/5">
                <img
                  src={IMAGES.trainerRahul}
                  alt="Coach Rahul Mehta checking form"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-top filter brightness-[0.92] dark:brightness-[0.75] group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 text-white text-xs font-mono font-bold uppercase">
                  HEAD COACH RAHUL MEHTA (CSCS)
                </div>
              </div>

              <h3 className="text-2xl font-bold font-display uppercase text-zinc-900 dark:text-white mb-3">
                EXPERT COACHING
              </h3>

              <p className="text-zinc-600 dark:text-zinc-300 text-sm leading-relaxed mb-6">
                Our trainers aren't floor monitors scrolling their phones. They are certified biomechanics coaches holding internationally recognized CSCS and K11 certifications who calibrate your joint angles and load tolerance in real time.
              </p>

              <div className="bg-zinc-100 dark:bg-[#18181e] p-4 rounded-lg border border-black/5 dark:border-white/5 text-xs space-y-1.5 text-zinc-600 dark:text-zinc-400">
                <div className="text-zinc-900 dark:text-white font-semibold uppercase text-[11px] tracking-wide">
                  Active Coaching Standard:
                </div>
                <div>• Zero bro-science or unsafe shortcuts</div>
                <div>• Tailored modifications for spine, knee & shoulder health</div>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-black/5 dark:border-white/5">
              <span className="text-xs text-zinc-500 font-mono">CSCS & K11 MENTORS</span>
            </div>
          </div>

          {/* Block 03 - Structural Feature with Equipment Photo (Spans 5 cols) */}
          <div className="lg:col-span-5 bg-zinc-50 dark:bg-[#121215] border border-black/5 dark:border-white/5 hover:border-black/15 dark:hover:border-white/15 rounded-2xl p-6 sm:p-9 flex flex-col justify-between transition-all duration-300 group hover:shadow-xl">
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="text-3xl sm:text-4xl font-black font-mono text-emerald-600 dark:text-[#ccff00] tabular-nums">
                  03
                </span>
                <div className="p-3 rounded-lg bg-black/5 dark:bg-white/5 group-hover:bg-emerald-500/10 dark:group-hover:bg-[#ccff00]/10 text-zinc-700 dark:text-zinc-300 group-hover:text-emerald-600 dark:group-hover:text-[#ccff00] transition-colors">
                  <Dumbbell className="w-6 h-6" />
                </div>
              </div>

              {/* Integrated Equipment Photo */}
              <div className="relative rounded-xl overflow-hidden aspect-[16/9] mb-6 bg-zinc-200 dark:bg-[#18181f] border border-black/5 dark:border-white/5">
                <img
                  src={IMAGES.equipmentRogue}
                  alt="Precision Rogue Racks and Dumbbells"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover filter brightness-[0.92] dark:brightness-[0.75] group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 text-white text-xs font-mono font-bold uppercase">
                  ROGUE POWER PLATFORMS & CALIBRATED DUMBBELLS
                </div>
              </div>

              <h3 className="text-2xl font-bold font-display uppercase text-zinc-900 dark:text-white mb-3">
                MODERN EQUIPMENT
              </h3>

              <p className="text-zinc-600 dark:text-zinc-300 text-sm leading-relaxed mb-6">
                Championship-grade Rogue power racks, calibrated Eleiko barbells, competition bumper plates, custom turf track, and biomechanically curved plate-loaded machines designed to hit the muscle without joint torque.
              </p>

              <div className="text-xs text-zinc-600 dark:text-zinc-400 space-y-1.5 border-t border-black/5 dark:border-white/5 pt-4">
                <div>• 6 Dedicated Barbell Stations (zero waiting in lines)</div>
                <div>• Dumbbells starting from 2.5 kg up to 50 kg heavy pairs</div>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-black/5 dark:border-white/5">
              <span className="text-xs text-zinc-500 font-mono">CALIBRATED ROGUE GEAR</span>
            </div>
          </div>

          {/* Block 04 - Community Feature with Group Training Photo (Spans 7 cols) */}
          <div className="lg:col-span-7 bg-zinc-50 dark:bg-[#121215] border border-black/5 dark:border-white/5 hover:border-black/15 dark:hover:border-white/15 rounded-2xl p-6 sm:p-9 flex flex-col justify-between transition-all duration-300 group hover:shadow-xl">
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="text-3xl sm:text-4xl font-black font-mono text-emerald-600 dark:text-[#ccff00] tabular-nums">
                  04
                </span>
                <div className="p-3 rounded-lg bg-black/5 dark:bg-white/5 group-hover:bg-emerald-500/10 dark:group-hover:bg-[#ccff00]/10 text-zinc-700 dark:text-zinc-300 group-hover:text-emerald-600 dark:group-hover:text-[#ccff00] transition-colors">
                  <Flame className="w-6 h-6" />
                </div>
              </div>

              {/* Integrated Group Training Photo */}
              <div className="relative rounded-xl overflow-hidden aspect-[16/9] mb-6 bg-zinc-200 dark:bg-[#18181f] border border-black/5 dark:border-white/5">
                <img
                  src={IMAGES.communityWorkout}
                  alt="High energy group functional conditioning"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover filter brightness-[0.92] dark:brightness-[0.75] group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 text-white text-xs font-mono font-bold uppercase">
                  HYDERABAD LIFTERS & ACCOUNTABILITY SQUAD
                </div>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold font-display uppercase text-zinc-900 dark:text-white mb-3">
                COMMUNITY & ACCOUNTABILITY
              </h3>

              <p className="text-zinc-600 dark:text-zinc-300 text-sm sm:text-base leading-relaxed mb-6">
                Surround yourself with working professionals, tech founders, doctors, and students who show up before dawn and push past comfort zones. When you skip 3 consecutive sessions, your dedicated mentor checks in.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4 border-t border-black/5 dark:border-white/5 text-xs text-zinc-600 dark:text-zinc-400">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-600 dark:text-[#ccff00]" />
                  <span>Dedicated WhatsApp accountability group</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-600 dark:text-[#ccff00]" />
                  <span>Respectful, focused environment (zero egos)</span>
                </div>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-black/5 dark:border-white/5 flex items-center justify-between">
              <span className="text-xs text-zinc-500 font-mono">HYDERABAD LIFTERS</span>
              <button
                onClick={() => openLeadModal('Community & Accountability')}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-600 dark:text-[#ccff00] uppercase hover:underline cursor-pointer"
              >
                Experience the Culture <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

