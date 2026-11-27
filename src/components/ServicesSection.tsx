import { motion } from 'motion/react';
import { ArrowRight, Check } from 'lucide-react';
import { SERVICES } from '../data/clinicData';
import { ClinicImage } from './ClinicImage';

interface ServicesSectionProps {
  onEnquireService: (serviceTitle: string) => void;
}

export function ServicesSection({ onEnquireService }: ServicesSectionProps) {
  const handleSelect = (title: string) => {
    onEnquireService(title);
    const el = document.getElementById('booking');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const featuredPair = SERVICES.slice(0, 2);
  const sportsFeature = SERVICES[2];
  const supportingServices = SERVICES.slice(3);

  return (
    <section id="services" className="py-16 sm:py-24 border-t border-[#1C2422]/8">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div className="max-w-2xl">
            <p className="text-sm font-medium text-[#1F6F5C] mb-3">Services</p>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[42px] leading-[1.12] text-[#1C2422]">
              Clinical therapies tailored to how you move.
            </h2>
          </div>
          <p className="text-base text-[#4C5854] max-w-md leading-relaxed">
            Every treatment modality is chosen intentionally after your assessment—never applied as
            a generic routine.
          </p>
        </div>

        {/* Row 1: Two primary photographic services */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-6">
          {featuredPair.map((service, idx) => (
            <motion.article
              key={service.id}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 'some' }}
              transition={{ duration: 0.35, delay: idx * 0.06 }}
              className="rounded-3xl bg-white border border-[#1C2422]/10 overflow-hidden flex flex-col justify-between"
            >
              <div>
                {service.image && (
                  <div className="aspect-[4/3] w-full overflow-hidden bg-[#EFF5F2] border-b border-[#1C2422]/8">
                    <ClinicImage
                      src={service.image}
                      alt={service.imageAlt || service.title}
                      fallbackTitle={service.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}

                <div className="p-6 sm:p-8">
                  <p className="text-xs text-[#4C5854] mb-2">{service.category}</p>
                  <h3 className="font-serif text-2xl sm:text-[28px] text-[#1C2422]">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-sm sm:text-[15px] text-[#4C5854] leading-relaxed">
                    {service.description}
                  </p>

                  <ul className="mt-5 space-y-2">
                    {service.highlights.map((item) => (
                      <li
                        key={item}
                        className="flex items-center gap-2.5 text-sm text-[#1C2422]/90"
                      >
                        <Check
                          className="w-4 h-4 text-[#1F6F5C] shrink-0"
                          aria-hidden="true"
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="px-6 sm:px-8 pb-7 pt-2">
                <button
                  type="button"
                  onClick={() => handleSelect(service.title)}
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#1F6F5C] hover:text-[#175748] transition-colors group"
                >
                  <span>Book a session for {service.title}</span>
                  <ArrowRight
                    className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200"
                    aria-hidden="true"
                  />
                </button>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Row 2: Wide horizontal feature for Sports Physio */}
        {sportsFeature && (
          <motion.article
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 'some' }}
            transition={{ duration: 0.38 }}
            className="mt-6 rounded-3xl bg-white border border-[#1C2422]/10 overflow-hidden grid grid-cols-1 lg:grid-cols-12 items-stretch"
          >
            <div className="lg:col-span-5 aspect-[4/3] lg:aspect-auto bg-[#EFF5F2] overflow-hidden border-b lg:border-b-0 lg:border-r border-[#1C2422]/8">
              {sportsFeature.image && (
                <ClinicImage
                  src={sportsFeature.image}
                  alt={sportsFeature.imageAlt || sportsFeature.title}
                  fallbackTitle={sportsFeature.title}
                  className="w-full h-full object-cover"
                />
              )}
            </div>

            <div className="lg:col-span-7 p-6 sm:p-8 lg:p-10 flex flex-col justify-between">
              <div>
                <p className="text-xs text-[#4C5854] mb-2">{sportsFeature.category}</p>
                <h3 className="font-serif text-2xl sm:text-3xl text-[#1C2422]">
                  {sportsFeature.title}
                </h3>
                <p className="mt-3 text-sm sm:text-base text-[#4C5854] leading-relaxed max-w-2xl">
                  {sportsFeature.description}
                </p>

                <ul className="mt-5 grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {sportsFeature.highlights.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2 text-sm text-[#1C2422]/90"
                    >
                      <Check
                        className="w-4 h-4 text-[#1F6F5C] shrink-0"
                        aria-hidden="true"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-7 pt-5 border-t border-[#1C2422]/8">
                <button
                  type="button"
                  onClick={() => handleSelect(sportsFeature.title)}
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#1F6F5C] hover:text-[#175748] transition-colors group"
                >
                  <span>Book a {sportsFeature.title} assessment</span>
                  <ArrowRight
                    className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200"
                    aria-hidden="true"
                  />
                </button>
              </div>
            </div>
          </motion.article>
        )}

        {/* Row 3: Supporting therapies (Dry Needling, Electrotherapy, Home Visits [confirm]) */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          {supportingServices.map((service, idx) => (
            <motion.article
              key={service.id}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 'some' }}
              transition={{ duration: 0.35, delay: idx * 0.05 }}
              className="rounded-3xl bg-white border border-[#1C2422]/10 p-6 sm:p-7 flex flex-col justify-between"
            >
              <div>
                <div className="flex flex-wrap items-center gap-2 text-xs text-[#4C5854] mb-2">
                  <span>{service.category}</span>
                  {service.confirmNote && (
                    <>
                      <span aria-hidden="true">·</span>
                      <span className="text-[#C84839] font-medium">Confirm availability</span>
                    </>
                  )}
                </div>

                <h3 className="font-serif text-2xl text-[#1C2422]">{service.title}</h3>
                <p className="mt-2.5 text-sm text-[#4C5854] leading-relaxed">
                  {service.description}
                </p>

                <ul className="mt-5 space-y-2">
                  {service.highlights.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2.5 text-sm text-[#1C2422]/90"
                    >
                      <Check
                        className="w-4 h-4 text-[#1F6F5C] shrink-0"
                        aria-hidden="true"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                {service.confirmNote && (
                  <p className="mt-4 text-xs text-[#4C5854]">
                    {service.confirmNote} [confirm].
                  </p>
                )}
              </div>

              <div className="mt-6 pt-4 border-t border-[#1C2422]/8">
                <button
                  type="button"
                  onClick={() => handleSelect(service.title)}
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#1F6F5C] hover:text-[#175748] transition-colors group"
                >
                  <span>Enquire about {service.title}</span>
                  <ArrowRight
                    className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200"
                    aria-hidden="true"
                  />
                </button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
