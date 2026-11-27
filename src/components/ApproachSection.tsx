import { motion } from 'motion/react';
import { APPROACH_STEPS, CLINIC_IMAGES } from '../data/clinicData';
import { ClinicImage } from './ClinicImage';

export function ApproachSection() {
  return (
    <section
      id="approach"
      className="py-16 sm:py-24 bg-[#F2F5F2] border-t border-[#1C2422]/8"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-stretch">
          {/* Left column: editorial intro + calm therapy image */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-8">
            <div>
              <p className="text-sm font-medium text-[#1F6F5C] mb-3">Our Approach</p>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-[42px] leading-[1.12] text-[#1C2422]">
                A calm, four-step path to lasting movement.
              </h2>
              <p className="mt-4 text-base text-[#4C5854] leading-relaxed">
                Good physiotherapy is never passive or rushed. We pair attentive clinical assessment
                with hands-on care and purposeful movement so you understand your body at every
                stage.
              </p>
            </div>

            <div className="overflow-hidden rounded-3xl border border-[#1C2422]/10 bg-white aspect-[4/3] lg:flex-1 lg:min-h-[300px]">
              <ClinicImage
                src={CLINIC_IMAGES.manualTherapy}
                alt="Physiotherapist providing careful hands-on manual therapy during a calm one-on-one session"
                fallbackTitle="Hands-on Assessment & Care"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right column: 4 numbered steps */}
          <div className="lg:col-span-7 flex flex-col justify-between divide-y divide-[#1C2422]/10 border-t border-b border-[#1C2422]/10">
            {APPROACH_STEPS.map((step, idx) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 'some' }}
                transition={{ duration: 0.35, delay: idx * 0.06 }}
                className="py-7 sm:py-8 grid grid-cols-1 sm:grid-cols-12 gap-3 sm:gap-6 items-start"
              >
                <div className="sm:col-span-2 flex items-baseline gap-2">
                  <span className="font-serif text-3xl sm:text-4xl text-[#1F6F5C] tabular-nums">
                    {step.number}.
                  </span>
                </div>
                <div className="sm:col-span-10">
                  <div className="flex flex-wrap items-baseline gap-x-2.5 gap-y-1">
                    <h3 className="font-serif text-2xl text-[#1C2422]">{step.title}</h3>
                    <span className="text-xs text-[#4C5854]" aria-hidden="true">
                      ·
                    </span>
                    <span className="text-sm font-medium text-[#C84839]">{step.subtitle}</span>
                  </div>
                  <p className="mt-2.5 text-sm sm:text-[15px] text-[#4C5854] leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
