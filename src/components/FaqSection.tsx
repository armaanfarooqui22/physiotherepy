import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { FAQS } from '../data/clinicData';

export function FaqSection() {
  const [openId, setOpenId] = useState<string | null>(FAQS[0]?.id ?? null);

  const toggleItem = (id: string) => {
    setOpenId((current) => (current === id ? null : id));
  };

  return (
    <section id="faq" className="py-16 sm:py-24 border-t border-[#1C2422]/8">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          <div className="lg:col-span-4">
            <p className="text-sm font-medium text-[#1F6F5C] mb-3">Common Questions</p>
            <h2 className="font-serif text-3xl sm:text-4xl leading-[1.12] text-[#1C2422]">
              Everything you may want to know before your first visit.
            </h2>
            <p className="mt-4 text-base text-[#4C5854] leading-relaxed">
              Have a specific question about a recent scan, post-surgery timeline, or home visit?
              Message us anytime on WhatsApp.
            </p>
          </div>

          <div className="lg:col-span-8 divide-y divide-[#1C2422]/10 border-t border-b border-[#1C2422]/10">
            {FAQS.map((item) => {
              const isOpen = openId === item.id;
              const panelId = `${item.id}-panel`;
              const buttonId = `${item.id}-button`;

              return (
                <div key={item.id} className="py-1">
                  <button
                    id={buttonId}
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => toggleItem(item.id)}
                    className="w-full py-5 flex items-center justify-between gap-6 text-left group min-h-[56px]"
                  >
                    <span className="font-serif text-xl sm:text-[22px] text-[#1C2422] group-hover:text-[#1F6F5C] transition-colors leading-snug">
                      {item.question}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-[#1F6F5C] shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180' : 'rotate-0'
                      }`}
                      aria-hidden="true"
                    />
                  </button>

                  {isOpen && (
                    <div
                      id={panelId}
                      role="region"
                      aria-labelledby={buttonId}
                      className="pb-6 pr-8 text-sm sm:text-base text-[#4C5854] leading-relaxed"
                    >
                      {item.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
