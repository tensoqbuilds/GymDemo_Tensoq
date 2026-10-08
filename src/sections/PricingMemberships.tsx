import React, { useState } from 'react';
import { Check, ArrowRight, Sparkles } from 'lucide-react';
import { useGym } from '../context/GymContext';

export const PricingMemberships: React.FC = () => {
  const { config, openLeadModal } = useGym();
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'quarterly'>('monthly');

  const { monthly, quarterly } = config.pricing;

  const plans = [
    {
      id: 'starter',
      name: 'STARTER',
      subtitle: 'Foundation fitness & gym floor access',
      price: billingCycle === 'monthly' ? monthly.starter : Math.round(quarterly.starter / 3),
      totalPrice: billingCycle === 'quarterly' ? quarterly.starter : null,
      savings: billingCycle === 'quarterly' ? Math.round(((monthly.starter * 3 - quarterly.starter) / (monthly.starter * 3)) * 100) : 0,
      highlighted: false,
      badge: null,
      features: [
        'Full gym floor & barbell zone access',
        'Standard foundation workout plan',
        'Locker room & steam suite access',
        'Access to community fitness classes',
        'Standard equipment orientation',
      ],
      notIncluded: ['Personal Coach Roster', 'Custom Macro Nutrition Plan'],
    },
    {
      id: 'pro',
      name: 'PRO',
      subtitle: 'Our signature protocol for serious transformations',
      price: billingCycle === 'monthly' ? monthly.pro : Math.round(quarterly.pro / 3),
      totalPrice: billingCycle === 'quarterly' ? quarterly.pro : null,
      savings: billingCycle === 'quarterly' ? Math.round(((monthly.pro * 3 - quarterly.pro) / (monthly.pro * 3)) * 100) : 0,
      highlighted: true,
      badge: 'BEST VALUE · MOST POPULAR',
      features: [
        'Unlimited 24/6 gym floor & turf access',
        'Personalized periodized workout plan',
        'InBody 570 monthly body composition scans',
        'Custom Indian macro nutrition blueprint',
        'Progressive overload app tracking',
        'All group functional & strength classes',
        'Complimentary membership freeze (up to 20 days)',
      ],
      notIncluded: ['Dedicated 1-on-1 private trainer'],
    },
    {
      id: 'elite',
      name: 'ELITE',
      subtitle: 'Comprehensive 1-on-1 coaching & peak performance',
      price: billingCycle === 'monthly' ? monthly.elite : Math.round(quarterly.elite / 3),
      totalPrice: billingCycle === 'quarterly' ? quarterly.elite : null,
      savings: billingCycle === 'quarterly' ? Math.round(((monthly.elite * 3 - quarterly.elite) / (monthly.elite * 3)) * 100) : 0,
      highlighted: false,
      badge: 'MAXIMUM RESULTS',
      features: [
        'Everything included in PRO tier',
        'Dedicated CSCS certified personal trainer',
        'Weekly 1-on-1 form calibration & reviews',
        'Advanced continuous macronutrient guidance',
        'Priority floor booking & private PT suite',
        'WhatsApp direct line with head coach',
        'Complimentary membership freeze (up to 30 days)',
      ],
      notIncluded: [],
    },
  ];

  return (
    <section id="memberships" className="py-16 sm:py-20 lg:py-24 bg-white dark:bg-[#09090b] text-zinc-900 dark:text-zinc-100 border-t border-black/5 dark:border-white/5 transition-colors relative">
      <div className="max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="flex items-center justify-center gap-2 text-xs font-mono uppercase tracking-widest text-emerald-600 dark:text-[#ccff00]">
            <span>TRANSPARENT PRICING</span>
            <span aria-hidden="true">·</span>
            <span>NO HIDDEN MAINTENANCE FEES</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black font-display uppercase tracking-tight text-zinc-900 dark:text-white">
            CHOOSE YOUR LEVEL.
          </h2>

          <p className="text-zinc-600 dark:text-zinc-400 text-sm sm:text-base leading-relaxed">
            Invest in your health with transparent pricing. Every tier gives you full access to clean facilities, verified coaching, and measurable standards.
          </p>

          {/* Monthly / Quarterly Toggle */}
          <div className="pt-4 flex items-center justify-center">
            <div className="bg-zinc-100 dark:bg-[#121215] border border-black/5 dark:border-white/10 p-1.5 rounded-xl flex items-center gap-1">
              <button
                type="button"
                onClick={() => setBillingCycle('monthly')}
                className={`px-5 py-2 text-xs font-bold uppercase rounded-lg transition-all cursor-pointer font-display ${
                  billingCycle === 'monthly'
                    ? 'bg-white dark:bg-white/10 text-zinc-900 dark:text-white shadow-sm'
                    : 'text-zinc-500 dark:text-zinc-400 hover:text-black dark:hover:text-white'
                }`}
              >
                MONTHLY
              </button>
              <button
                type="button"
                onClick={() => setBillingCycle('quarterly')}
                className={`px-5 py-2 text-xs font-bold uppercase rounded-lg transition-all flex items-center gap-2 cursor-pointer font-display ${
                  billingCycle === 'quarterly'
                    ? 'bg-[#ccff00] text-black shadow-sm'
                    : 'text-zinc-500 dark:text-zinc-400 hover:text-black dark:hover:text-white'
                }`}
              >
                <span>QUARTERLY</span>
                <span className="text-[10px] font-mono font-bold bg-black/80 text-[#ccff00] px-1.5 py-0.5 rounded">
                  SAVE UP TO 17%
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`relative rounded-2xl flex flex-col justify-between transition-all duration-300 ${
                plan.highlighted
                  ? 'bg-zinc-50 dark:bg-[#15151b] border-2 border-emerald-500 dark:border-[#ccff00] shadow-2xl lg:-translate-y-2'
                  : 'bg-zinc-50/60 dark:bg-[#121215] border border-black/5 dark:border-white/10 hover:border-black/15 dark:hover:border-white/20'
              }`}
            >
              {/* Badge for Pro */}
              {plan.badge && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#ccff00] text-black text-[10px] font-black font-display tracking-widest uppercase py-1 px-3.5 rounded shadow">
                  {plan.badge}
                </div>
              )}

              <div className="p-8 sm:p-10">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl sm:text-2xl font-black font-display tracking-tight text-zinc-900 dark:text-white uppercase">
                    {plan.name}
                  </h3>
                  {plan.highlighted && (
                    <Sparkles className="w-5 h-5 text-emerald-600 dark:text-[#ccff00]" />
                  )}
                </div>

                <p className="text-xs text-zinc-500 dark:text-zinc-400 min-h-[32px]">
                  {plan.subtitle}
                </p>

                {/* Price Display */}
                <div className="my-6 pb-6 border-b border-black/5 dark:border-white/10">
                  <div className="flex items-baseline gap-1">
                    <span className="text-xs font-bold text-zinc-500 font-mono">₹</span>
                    <span className="text-4xl sm:text-5xl font-black font-display text-zinc-900 dark:text-white tracking-tight tabular-nums">
                      {plan.price.toLocaleString('en-IN')}
                    </span>
                    <span className="text-xs text-zinc-500 font-mono">
                      / month
                    </span>
                  </div>

                  {plan.totalPrice && (
                    <div className="text-[11px] font-mono text-emerald-600 dark:text-[#ccff00] font-semibold mt-1.5">
                      Billed quarterly at ₹{plan.totalPrice.toLocaleString('en-IN')} (Save {plan.savings}%)
                    </div>
                  )}
                </div>

                {/* Features list */}
                <div className="space-y-3 pt-2">
                  <div className="text-[11px] font-mono uppercase text-zinc-500 dark:text-zinc-400 tracking-wider">
                    Included Benefits:
                  </div>
                  {plan.features.map((feat) => (
                    <div key={feat} className="flex items-start gap-2.5 text-xs text-zinc-700 dark:text-zinc-300">
                      <Check className="w-4 h-4 text-emerald-600 dark:text-[#ccff00] shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}

                  {plan.notIncluded.length > 0 && (
                    <div className="pt-2 space-y-2 opacity-50">
                      {plan.notIncluded.map((feat) => (
                        <div key={feat} className="flex items-start gap-2.5 text-xs text-zinc-400 dark:text-zinc-500 line-through">
                          <span className="w-4 h-4 text-center shrink-0">·</span>
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Action */}
              <div className="p-8 sm:p-10 pt-0">
                <button
                  onClick={() => openLeadModal(`Membership Plan: ${plan.name} (${billingCycle})`)}
                  className={`w-full py-4 text-xs font-bold tracking-wider rounded uppercase transition-all flex items-center justify-center gap-2 cursor-pointer font-display ${
                    plan.highlighted
                      ? 'bg-[#ccff00] hover:bg-[#b8e600] text-black shadow-lg shadow-[#ccff00]/15'
                      : 'bg-zinc-200 hover:bg-zinc-300 dark:bg-[#18181f] dark:hover:bg-[#22222a] text-zinc-900 dark:text-white border border-black/5 dark:border-white/10'
                  }`}
                >
                  <span>GET STARTED</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
                <div className="text-center text-[10px] text-zinc-500 font-mono mt-3">
                  1-Day Free Trial Available Before Payment
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
