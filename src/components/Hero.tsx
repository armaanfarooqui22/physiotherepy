import { motion } from 'motion/react';
import { ArrowRight, MessageCircle, Star } from 'lucide-react';
import { CLINIC_IMAGES, CLINIC_INFO } from '../data/clinicData';
import { ClinicImage } from './ClinicImage';

const HERO_HIGHLIGHTS = [
  {
    value: '5.0 ★',
    label: '84+ verified Google reviews',
  },
  {
    value: '1-on-1',
    label: 'Unhurried therapist-led care',
  },
  {
    value: 'GK-1',
    label: 'Greater Kailash 1, New Delhi',
  },
  {
    value: 'Root-Cause',
    label: 'Hands-on therapy & active rehab',
  },
];

export function Hero() {
  const whatsappHref = `https://wa.me/${CLINIC_INFO.whatsappNumber}?text=${encodeURIComponent(
    'Hello More Than Physio, I would like to enquire about booking a physiotherapy consultation in GK-1.'
  )}`;

  return (
    <section id="top" className="relative pt-10 pb-14 sm:pt-14 sm:pb-20 lg:pt-16 lg:pb-24">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
          {/* Left editorial column */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 flex flex-col justify-center"
          >
            {/* Clean unboxed Google rating proof anchor */}
            <a
              href="#reviews"
              className="inline-flex items-center gap-2.5 text-sm font-medium text-[#1C2422] hover:text-[#1F6F5C] transition-colors w-fit mb-6 group"
            >
              <span className="inline-flex items-center gap-0.5 text-[#D95343]" aria-hidden="true">
                {[...Array(5)].map((_, idx) => (
                  <Star key={idx} className="w-4 h-4 fill-[#F26B5B] text-[#D95343]" />
                ))}
              </span>
              <span className="font-semibold tabular-nums">5.0 ★ Rated on Google</span>
              <span className="text-[#4C5854]" aria-hidden="true">
                ·
              </span>
              <span className="text-[#4C5854] group-hover:text-[#1F6F5C] transition-colors">
                84+ Patient Reviews
              </span>
            </a>

            <h1 className="font-serif text-[clamp(2.6rem,4.8vw,4.35rem)] leading-[1.06] tracking-tight text-[#1C2422]">
              Move Better.
              <br />
              <span className="text-[#1F6F5C]">Live Better.</span>
            </h1>

            <p className="mt-6 text-lg sm:text-xl text-[#1C2422]/90 font-medium leading-relaxed max-w-xl">
              Expert physiotherapy and rehabilitation in Greater Kailash, New Delhi.
            </p>

            <p className="mt-3 text-base text-[#4C5854] leading-relaxed max-w-xl">
              Thoughtful, one-on-one care that looks beyond temporary pain relief—combining skilled
              hands-on therapy with guided movement to help you return to everyday life with
              confidence.
            </p>

            {/* Primary & Secondary CTAs */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#booking"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#1F6F5C] px-7 py-3.5 text-base font-semibold text-white hover:bg-[#175748] transition-colors duration-200 whitespace-nowrap shrink-0 min-h-[48px]"
              >
                <span>Book a Consultation</span>
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </a>

              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-[#1C2422]/15 bg-white px-6 py-3.5 text-base font-semibold text-[#1C2422] hover:border-[#1F6F5C] hover:text-[#1F6F5C] transition-colors duration-200 whitespace-nowrap shrink-0 min-h-[48px]"
              >
                <MessageCircle className="w-4 h-4 text-[#1F6F5C]" aria-hidden="true" />
                <span>WhatsApp Us</span>
              </a>
            </div>

            {/* Subtle accent editorial note */}
            <p className="mt-6 text-sm text-[#4C5854]">
              Prefer to speak directly? Call{' '}
              <a
                href={CLINIC_INFO.phoneHref}
                className="font-semibold text-[#1C2422] underline decoration-[#F26B5B] decoration-2 underline-offset-4 hover:text-[#1F6F5C] tabular-nums"
              >
                {CLINIC_INFO.phoneDisplay}
              </a>
            </p>
          </motion.div>

          {/* Right focal photograph */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 flex"
          >
            <div className="relative w-full overflow-hidden rounded-3xl border border-[#1C2422]/8 bg-[#EFF5F2] aspect-[16/10] lg:aspect-auto lg:min-h-[470px]">
              <ClinicImage
                src={CLINIC_IMAGES.hero}
                alt="Physiotherapist guiding a smiling patient through gentle shoulder mobility therapy inside a sunlit clinic in Greater Kailash 1, New Delhi"
                fallbackTitle="More Than Physio · GK-1 Clinic"
                eager
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>

        {/* Full-width quiet highlights strip below hero split */}
        <div className="mt-12 lg:mt-16 pt-8 border-t border-[#1C2422]/10 grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {HERO_HIGHLIGHTS.map((item) => (
            <div key={item.value} className="space-y-1">
              <p className="font-serif text-2xl sm:text-[26px] text-[#1C2422] tabular-nums">
                {item.value}
              </p>
              <p className="text-sm text-[#4C5854] leading-snug">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
