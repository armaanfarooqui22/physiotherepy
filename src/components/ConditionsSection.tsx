import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, ArrowUpRight, Check, X } from 'lucide-react';
import { CONDITIONS, type ConditionItem } from '../data/clinicData';

interface ConditionsSectionProps {
  onSelectConditionForBooking: (conditionName: string) => void;
}

export function ConditionsSection({ onSelectConditionForBooking }: ConditionsSectionProps) {
  const [activeCondition, setActiveCondition] = useState<ConditionItem | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!activeCondition) return;
    closeButtonRef.current?.focus();

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setActiveCondition(null);
      }
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKeyDown);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [activeCondition]);

  const handleBookFromModal = (conditionName: string) => {
    setActiveCondition(null);
    onSelectConditionForBooking(conditionName);
    const bookingEl = document.getElementById('booking');
    if (bookingEl) {
      bookingEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="conditions" className="py-16 sm:py-24 border-t border-[#1C2422]/8">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-medium text-[#1F6F5C] mb-3">Conditions We Treat</p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-[42px] leading-[1.12] text-[#1C2422]">
            Focused care for pain, stiffness, and recovery.
          </h2>
          <p className="mt-4 text-base text-[#4C5854] leading-relaxed">
            Select any condition below to see common symptoms, how our physiotherapists approach
            treatment, and what realistic recovery typically looks like.
          </p>
        </div>

        <div className="mt-10 sm:mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {CONDITIONS.map((condition, idx) => (
            <motion.button
              key={condition.id}
              type="button"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 'some' }}
              transition={{ duration: 0.35, delay: Math.min(idx * 0.04, 0.24) }}
              onClick={() => setActiveCondition(condition)}
              className="group text-left rounded-2xl bg-white border border-[#1C2422]/10 p-6 sm:p-7 hover:border-[#1F6F5C]/50 hover:-translate-y-0.5 transition-all duration-200 flex flex-col justify-between focus-visible:ring-2 focus-visible:ring-[#1F6F5C]"
              aria-haspopup="dialog"
            >
              <div>
                <div className="flex items-center justify-between gap-4 text-xs text-[#4C5854] mb-3">
                  <span>{condition.category}</span>
                  <ArrowUpRight
                    className="w-4 h-4 text-[#4C5854] group-hover:text-[#F26B5B] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200 shrink-0"
                    aria-hidden="true"
                  />
                </div>
                <h3 className="font-serif text-2xl text-[#1C2422] group-hover:text-[#1F6F5C] transition-colors">
                  {condition.name}
                </h3>
                <p className="mt-2.5 text-sm text-[#4C5854] leading-relaxed">
                  {condition.shortDescription}
                </p>
              </div>

              <div className="mt-5 pt-4 border-t border-[#1C2422]/6 flex items-center gap-1.5 text-sm font-medium text-[#1F6F5C]">
                <span>View symptoms &amp; care plan</span>
                <ArrowRight
                  className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-200"
                  aria-hidden="true"
                />
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Accessible Condition Detail Modal */}
      <AnimatePresence>
        {activeCondition && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
            role="dialog"
            aria-modal="true"
            aria-labelledby="condition-modal-title"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.18 }}
              onClick={() => setActiveCondition(null)}
              className="fixed inset-0 bg-[#1C2422]/55 backdrop-blur-[2px]"
              aria-hidden="true"
            />

            <motion.div
              initial={{ opacity: 0, y: 16, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 12, scale: 0.98 }}
              transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
              className="relative z-10 w-full max-w-2xl max-h-[88vh] overflow-y-auto rounded-3xl bg-[#FAFAF7] border border-[#1C2422]/12 p-6 sm:p-9 shadow-xl"
            >
              <div className="flex items-start justify-between gap-4 pb-5 border-b border-[#1C2422]/10">
                <div>
                  <p className="text-xs font-medium text-[#1F6F5C]">
                    {activeCondition.category} · Greater Kailash 1 Clinic
                  </p>
                  <h3
                    id="condition-modal-title"
                    className="font-serif text-3xl sm:text-4xl text-[#1C2422] mt-1"
                  >
                    {activeCondition.name}
                  </h3>
                </div>

                <button
                  ref={closeButtonRef}
                  type="button"
                  onClick={() => setActiveCondition(null)}
                  aria-label="Close condition details"
                  className="inline-flex items-center justify-center w-10 h-10 rounded-xl border border-[#1C2422]/12 bg-white text-[#1C2422] hover:border-[#1F6F5C] hover:text-[#1F6F5C] transition-colors shrink-0"
                >
                  <X className="w-5 h-5" aria-hidden="true" />
                </button>
              </div>

              <div className="mt-6 space-y-6">
                <div>
                  <h4 className="font-sans text-sm font-semibold text-[#1C2422] mb-2.5">
                    Common Symptoms
                  </h4>
                  <ul className="space-y-2">
                    {activeCondition.symptoms.map((symptom) => (
                      <li
                        key={symptom}
                        className="flex items-start gap-2.5 text-sm sm:text-[15px] text-[#4C5854] leading-relaxed"
                      >
                        <span
                          className="mt-2 w-1.5 h-1.5 rounded-full bg-[#F26B5B] shrink-0"
                          aria-hidden="true"
                        />
                        <span>{symptom}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-5 border-t border-[#1C2422]/8">
                  <h4 className="font-sans text-sm font-semibold text-[#1C2422] mb-2.5">
                    How We Treat It
                  </h4>
                  <ul className="space-y-2.5">
                    {activeCondition.howWeTreat.map((step) => (
                      <li
                        key={step}
                        className="flex items-start gap-2.5 text-sm sm:text-[15px] text-[#4C5854] leading-relaxed"
                      >
                        <Check
                          className="w-4 h-4 text-[#1F6F5C] mt-1 shrink-0"
                          aria-hidden="true"
                        />
                        <span>{step}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-5 border-t border-[#1C2422]/8">
                  <h4 className="font-sans text-sm font-semibold text-[#1C2422] mb-2">
                    What to Expect in Recovery
                  </h4>
                  <p className="text-sm sm:text-[15px] text-[#4C5854] leading-relaxed">
                    {activeCondition.recoveryExpectation}
                  </p>
                  <p className="mt-2 text-xs text-[#4C5854]/85">
                    Note: Every body heals at its own pace. Your physiotherapist will refine your
                    plan after an in-person clinical evaluation.
                  </p>
                </div>
              </div>

              <div className="mt-8 pt-5 border-t border-[#1C2422]/10 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
                <button
                  type="button"
                  onClick={() => handleBookFromModal(activeCondition.name)}
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#1F6F5C] px-6 py-3 text-sm font-semibold text-white hover:bg-[#175748] transition-colors min-h-[46px]"
                >
                  <span>Book Consultation for {activeCondition.name}</span>
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </button>

                <button
                  type="button"
                  onClick={() => setActiveCondition(null)}
                  className="inline-flex items-center justify-center rounded-xl border border-[#1C2422]/15 bg-white px-5 py-3 text-sm font-medium text-[#1C2422] hover:bg-[#F2F5F2] transition-colors min-h-[46px]"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
