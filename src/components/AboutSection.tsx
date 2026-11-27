import { motion } from 'motion/react';
import { Award, GraduationCap, HeartHandshake } from 'lucide-react';
import { CLINIC_IMAGES } from '../data/clinicData';
import { ClinicImage } from './ClinicImage';

const CLINIC_PILLARS = [
  {
    icon: GraduationCap,
    title: 'Qualifications & Training',
    detail:
      'BPT, MPT (Orthopaedics / Musculoskeletal & Sports) [Update with therapist credentials & registration number]',
  },
  {
    icon: HeartHandshake,
    title: 'One-on-One Philosophy',
    detail:
      'We dedicate uninterrupted time to every patient—listening closely, explaining clearly, and never passing you off to unattended machines.',
  },
  {
    icon: Award,
    title: 'Trusted in Greater Kailash 1',
    detail:
      'Built primarily through patient word-of-mouth across GK-1 and South Delhi, earning a 5.0 ★ Google rating from 84+ families and athletes.',
  },
];

export function AboutSection() {
  return (
    <section
      id="about"
      className="py-16 sm:py-24 bg-[#F2F5F2] border-t border-[#1C2422]/8"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-stretch">
          {/* Portrait column */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 'some' }}
            transition={{ duration: 0.45 }}
            className="lg:col-span-5 flex flex-col"
          >
            <div className="relative overflow-hidden rounded-3xl border border-[#1C2422]/10 bg-white aspect-[3/4] lg:flex-1 lg:min-h-[480px]">
              <ClinicImage
                src={CLINIC_IMAGES.therapist}
                alt="Portrait placeholder for the lead physiotherapist at More Than Physio clinic in Greater Kailash 1, New Delhi"
                fallbackTitle="[Therapist Name] · Lead Physiotherapist"
                className="w-full h-full object-cover object-top"
              />
            </div>
            <p className="mt-3 text-xs text-[#4C5854]">
              Clinic photo placeholder · Ready to update with your lead physiotherapist &amp; GK-1
              studio portrait.
            </p>
          </motion.div>

          {/* Story & philosophy column */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 'some' }}
            transition={{ duration: 0.45, delay: 0.08 }}
            className="lg:col-span-7 flex flex-col justify-center"
          >
            <p className="text-sm font-medium text-[#1F6F5C] mb-3">
              About the Clinic &amp; Therapist
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[42px] leading-[1.12] text-[#1C2422]">
              Why we call it More Than Physio.
            </h2>

            <div className="mt-5 pb-5 border-b border-[#1C2422]/10">
              <p className="font-serif text-2xl text-[#1C2422]">
                Dr. [Therapist Name], PT
              </p>
              <p className="text-sm text-[#4C5854] mt-1">
                Lead Physiotherapist &amp; Founder · Greater Kailash 1, New Delhi
              </p>
            </div>

            <div className="mt-5 space-y-4 text-base text-[#4C5854] leading-relaxed">
              <p>
                Too many people walk away from rushed appointments feeling like a set of aching
                joints rather than a person trying to get back to work, family, sleep, or sport.
                More Than Physio was founded in Greater Kailash 1 to offer a calmer, more attentive
                standard of rehabilitation.
              </p>
              <p>
                Our philosophy is simple: listen first, examine thoroughly, explain honestly, and
                guide you with evidence-led hands-on care and realistic movement habits that fit
                real life in Delhi—not just the clinic room.
              </p>
            </div>

            <div className="mt-8 space-y-5">
              {CLINIC_PILLARS.map((pillar) => {
                const Icon = pillar.icon;
                return (
                  <div
                    key={pillar.title}
                    className="flex items-start gap-4 pt-5 border-t border-[#1C2422]/8"
                  >
                    <div className="w-10 h-10 rounded-xl bg-white border border-[#1C2422]/10 flex items-center justify-center text-[#1F6F5C] shrink-0">
                      <Icon className="w-5 h-5" aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="font-sans text-base font-semibold text-[#1C2422]">
                        {pillar.title}
                      </h3>
                      <p className="mt-1 text-sm text-[#4C5854] leading-relaxed">
                        {pillar.detail}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
