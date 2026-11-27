import { motion } from 'motion/react';
import { ExternalLink, Star } from 'lucide-react';
import { CLINIC_INFO, TESTIMONIALS } from '../data/clinicData';

export function TestimonialsSection() {
  return (
    <section id="reviews" className="py-16 sm:py-24 border-t border-[#1C2422]/8">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div className="max-w-2xl">
            <p className="text-sm font-medium text-[#1F6F5C] mb-3">Patient Stories</p>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[42px] leading-[1.12] text-[#1C2422]">
              Rated 5.0 on Google by 84+ patients across South Delhi.
            </h2>
            <p className="mt-4 text-base text-[#4C5854] leading-relaxed">
              Word-of-mouth trust from neighbours in Greater Kailash and nearby communities has
              built our clinic from day one.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center gap-4 shrink-0">
            <div className="flex items-center gap-2 text-sm text-[#1C2422]">
              <span className="inline-flex items-center gap-0.5" aria-label="5 out of 5 stars">
                {[...Array(5)].map((_, idx) => (
                  <Star
                    key={idx}
                    className="w-4 h-4 fill-[#F26B5B] text-[#D95343]"
                    aria-hidden="true"
                  />
                ))}
              </span>
              <span className="font-semibold tabular-nums">
                {CLINIC_INFO.rating} ({CLINIC_INFO.reviewCount} reviews)
              </span>
            </div>

            <a
              href={CLINIC_INFO.googleReviewsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-[#1C2422]/15 bg-white px-5 py-2.5 text-sm font-semibold text-[#1C2422] hover:border-[#1F6F5C] hover:text-[#1F6F5C] transition-colors whitespace-nowrap shrink-0 min-h-[44px]"
            >
              <span>Read our Google reviews</span>
              <ExternalLink className="w-4 h-4" aria-hidden="true" />
            </a>
          </div>
        </div>

        {/* 5 Patient story cards: top 2 wide + bottom 3 balanced */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6">
          {TESTIMONIALS.map((story, idx) => {
            const colSpan = idx < 2 ? 'lg:col-span-3' : 'lg:col-span-2';
            return (
              <motion.article
                key={story.id}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 'some' }}
                transition={{ duration: 0.35, delay: Math.min(idx * 0.05, 0.22) }}
                className={`${colSpan} rounded-3xl bg-white border border-[#1C2422]/10 p-6 sm:p-7 flex flex-col justify-between`}
              >
                <div>
                  <div className="flex items-center justify-between gap-4 mb-4">
                    <div
                      className="inline-flex items-center gap-0.5"
                      aria-label="5 out of 5 stars"
                    >
                      {[...Array(5)].map((_, starIdx) => (
                        <Star
                          key={starIdx}
                          className="w-4 h-4 fill-[#F26B5B] text-[#D95343]"
                          aria-hidden="true"
                        />
                      ))}
                    </div>
                    <span className="text-xs text-[#4C5854]">{story.condition}</span>
                  </div>

                  <blockquote className="text-base text-[#1C2422] leading-relaxed">
                    “{story.quote}”
                  </blockquote>
                </div>

                <div className="mt-6 pt-5 border-t border-[#1C2422]/8 space-y-2">
                  <p className="text-xs font-medium text-[#1F6F5C]">{story.outcome}</p>
                  <div className="flex items-center gap-2 text-sm">
                    <span className="font-semibold text-[#1C2422]">{story.name}</span>
                    <span className="text-[#4C5854]" aria-hidden="true">
                      ·
                    </span>
                    <span className="text-[#4C5854]">{story.context}</span>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

        <p className="mt-6 text-xs text-[#4C5854]">
          Individual recovery experiences vary depending on condition, health history, and consistency
          with rehabilitation.
        </p>
      </div>
    </section>
  );
}
