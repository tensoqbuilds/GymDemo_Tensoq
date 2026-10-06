import React, { useState } from 'react';
import { Plus, Minus, MessageSquare } from 'lucide-react';
import { gymFaqs } from '../config/gymConfig';
import { useGym } from '../context/GymContext';

export const Faq: React.FC = () => {
  const { getWhatsAppLink } = useGym();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-24 lg:py-32 bg-zinc-50/50 dark:bg-[#09090b] text-zinc-900 dark:text-zinc-100 border-t border-black/5 dark:border-white/5 transition-colors relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 space-y-3">
          <div className="flex items-center justify-center gap-2 text-xs font-mono uppercase tracking-widest text-emerald-600 dark:text-[#ccff00]">
            <span>COMMON QUESTIONS</span>
            <span aria-hidden="true">·</span>
            <span>CLARITY FIRST</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black font-display uppercase tracking-tight text-zinc-900 dark:text-white leading-tight">
            FREQUENTLY ASKED QUESTIONS.
          </h2>

          <p className="text-zinc-600 dark:text-zinc-400 text-sm sm:text-base leading-relaxed max-w-xl mx-auto">
            Everything you need to know about getting started, personal training mechanics, membership freezes, and facility standards.
          </p>
        </div>

        {/* Accordion list */}
        <div className="space-y-3.5">
          {gymFaqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={faq.question}
                className={`rounded-xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'bg-white dark:bg-[#15151b] border-emerald-500/40 dark:border-[#ccff00]/40 shadow-lg'
                    : 'bg-white/80 dark:bg-[#121215] border-black/5 dark:border-white/5 hover:border-black/15 dark:hover:border-white/15'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(idx)}
                  className="w-full py-5 px-6 sm:px-7 text-left flex items-center justify-between gap-4 cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm sm:text-base font-bold font-display uppercase tracking-tight text-zinc-900 dark:text-white">
                    {faq.question}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 border transition-all ${
                      isOpen
                        ? 'bg-zinc-900 dark:bg-[#ccff00] text-white dark:text-black border-zinc-900 dark:border-[#ccff00]'
                        : 'border-black/10 dark:border-white/10 text-zinc-500 dark:text-zinc-400'
                    }`}
                  >
                    {isOpen ? <Minus className="w-4 h-4 stroke-[2.5]" /> : <Plus className="w-4 h-4 stroke-[2.5]" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 sm:px-7 pb-6 pt-1 text-xs sm:text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed border-t border-black/5 dark:border-white/5 animate-in fade-in duration-200">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Objections unresolved banner */}
        <div className="mt-12 p-6 rounded-2xl bg-white dark:bg-[#121215] border border-black/5 dark:border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left shadow-sm">
          <div className="space-y-1">
            <h4 className="text-sm font-bold text-zinc-900 dark:text-white uppercase font-display">
              Have another question?
            </h4>
            <p className="text-xs text-zinc-500 dark:text-zinc-400">
              Our front desk and coaching team are on WhatsApp all day.
            </p>
          </div>

          <a
            href={getWhatsAppLink('Hi! I have a question about Iron District Fitness that was not in the FAQ.')}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-emerald-600 hover:bg-emerald-500 dark:bg-white/10 dark:hover:bg-white/20 text-white rounded-lg text-xs font-bold uppercase tracking-wider transition-colors"
          >
            <MessageSquare className="w-3.5 h-3.5 text-white dark:text-emerald-400" />
            <span>ASK ON WHATSAPP</span>
          </a>
        </div>
      </div>
    </section>
  );
};
