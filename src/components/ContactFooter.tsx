import { Clock, ExternalLink, MapPin, MessageCircle, Phone } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';

export function ContactFooter() {
  const whatsappUrl = `https://wa.me/${CLINIC_INFO.whatsappNumber}?text=${encodeURIComponent(
    'Hello More Than Physio, could you please share directions and available appointment timings for your GK-1 clinic?'
  )}`;

  const currentYear = new Date().getFullYear();

  return (
    <>
      <section
        id="contact"
        className="py-16 sm:py-24 bg-[#F2F5F2] border-t border-[#1C2422]/8"
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-medium text-[#1F6F5C] mb-3">Visit Us</p>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[42px] leading-[1.12] text-[#1C2422]">
              Conveniently located in Greater Kailash 1, New Delhi.
            </h2>
            <p className="mt-4 text-base text-[#4C5854] leading-relaxed">
              Easy access from M-Block Market, N-Block Market, Kailash Colony Metro, and nearby
              South Delhi neighbourhoods.
            </p>
          </div>

          <div className="mt-10 sm:mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Left column: Contact details */}
            <div className="lg:col-span-5 rounded-3xl bg-white border border-[#1C2422]/10 p-6 sm:p-8 flex flex-col justify-between gap-8">
              <div className="space-y-6">
                <div className="flex items-start gap-3.5">
                  <MapPin
                    className="w-5 h-5 text-[#1F6F5C] shrink-0 mt-0.5"
                    aria-hidden="true"
                  />
                  <div>
                    <h3 className="font-sans text-sm font-semibold text-[#1C2422]">
                      Clinic Location
                    </h3>
                    <p className="mt-1 text-sm text-[#4C5854] leading-relaxed">
                      {CLINIC_INFO.area}
                    </p>
                    <p className="mt-1 text-xs text-[#4C5854]/85">
                      New Delhi – 110048 (Exact street &amp; floor shared upon confirmation)
                    </p>
                  </div>
                </div>

                <div className="pt-5 border-t border-[#1C2422]/8 flex items-start gap-3.5">
                  <Phone
                    className="w-5 h-5 text-[#1F6F5C] shrink-0 mt-0.5"
                    aria-hidden="true"
                  />
                  <div>
                    <h3 className="font-sans text-sm font-semibold text-[#1C2422]">
                      Phone &amp; WhatsApp
                    </h3>
                    <a
                      href={CLINIC_INFO.phoneHref}
                      className="inline-block mt-1 text-base font-semibold text-[#1C2422] hover:text-[#1F6F5C] transition-colors tabular-nums"
                    >
                      {CLINIC_INFO.phoneDisplay}
                    </a>
                    <div className="mt-2">
                      <a
                        href={whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm font-medium text-[#1F6F5C] hover:underline"
                      >
                        <MessageCircle className="w-4 h-4" aria-hidden="true" />
                        <span>Message on WhatsApp</span>
                      </a>
                    </div>
                  </div>
                </div>

                <div className="pt-5 border-t border-[#1C2422]/8 flex items-start gap-3.5">
                  <Clock
                    className="w-5 h-5 text-[#1F6F5C] shrink-0 mt-0.5"
                    aria-hidden="true"
                  />
                  <div className="w-full">
                    <h3 className="font-sans text-sm font-semibold text-[#1C2422]">
                      Clinic Timings
                    </h3>
                    <dl className="mt-2 space-y-1.5 text-sm">
                      {CLINIC_INFO.timings.map((slot) => (
                        <div
                          key={slot.days}
                          className="flex flex-wrap items-baseline justify-between gap-2"
                        >
                          <dt className="text-[#4C5854]">{slot.days}</dt>
                          <dd className="font-medium text-[#1C2422] tabular-nums">
                            {slot.hours}
                          </dd>
                        </div>
                      ))}
                    </dl>
                  </div>
                </div>
              </div>

              <div className="pt-5 border-t border-[#1C2422]/8 flex flex-wrap gap-3">
                <a
                  href="#booking"
                  className="inline-flex items-center justify-center rounded-xl bg-[#1F6F5C] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#175748] transition-colors min-h-[44px]"
                >
                  Book a Consultation
                </a>
                <a
                  href={CLINIC_INFO.googleReviewsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-1.5 rounded-xl border border-[#1C2422]/15 bg-[#FAFAF7] px-4 py-2.5 text-sm font-medium text-[#1C2422] hover:border-[#1F6F5C] hover:text-[#1F6F5C] transition-colors min-h-[44px]"
                >
                  <span>Open in Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
                </a>
              </div>
            </div>

            {/* Right column: Editorial GK-1 Neighborhood Map Placeholder */}
            <div className="lg:col-span-7 rounded-3xl bg-white border border-[#1C2422]/10 overflow-hidden flex flex-col justify-between min-h-[340px]">
              <div className="relative flex-1 bg-[#EFF5F2] min-h-[280px]">
                <svg
                  viewBox="0 0 720 420"
                  role="img"
                  aria-label="Stylised neighbourhood map placeholder of Greater Kailash 1 (GK-1), New Delhi showing More Than Physio clinic near M-Block Market, N-Block Market, and Kailash Colony Metro"
                  className="w-full h-full object-cover"
                >
                  <rect width="720" height="420" fill="#EFF5F2" />

                  {/* Subtle green parks of GK-1 */}
                  <rect x="64" y="54" width="136" height="86" rx="18" fill="#DDEBE3" />
                  <rect x="466" y="254" width="164" height="98" rx="18" fill="#DDEBE3" />
                  <rect x="498" y="48" width="128" height="72" rx="16" fill="#DDEBE3" />

                  {/* Main South Delhi arterials */}
                  <path
                    d="M -20 330 Q 220 300 410 340 T 740 310"
                    fill="none"
                    stroke="#FFFFFF"
                    strokeWidth="16"
                    strokeLinecap="round"
                  />
                  <path
                    d="M 180 -10 L 210 430"
                    fill="none"
                    stroke="#FFFFFF"
                    strokeWidth="12"
                  />
                  <path
                    d="M 430 -10 L 405 430"
                    fill="none"
                    stroke="#FFFFFF"
                    strokeWidth="12"
                  />
                  <path
                    d="M -10 175 L 730 198"
                    fill="none"
                    stroke="#FFFFFF"
                    strokeWidth="10"
                  />

                  {/* Secondary neighborhood blocks */}
                  <path
                    d="M 210 96 L 420 102"
                    fill="none"
                    stroke="#FFFFFF"
                    strokeWidth="5"
                  />
                  <path
                    d="M 205 262 L 412 268"
                    fill="none"
                    stroke="#FFFFFF"
                    strokeWidth="5"
                  />
                  <path
                    d="M 310 100 L 304 320"
                    fill="none"
                    stroke="#FFFFFF"
                    strokeWidth="5"
                  />

                  {/* Landmark labels */}
                  <text
                    x="132"
                    y="102"
                    textAnchor="middle"
                    fill="#4C5854"
                    fontSize="12"
                    fontFamily="DM Sans, sans-serif"
                    fontWeight="600"
                  >
                    N-Block Market
                  </text>
                  <text
                    x="562"
                    y="88"
                    textAnchor="middle"
                    fill="#4C5854"
                    fontSize="12"
                    fontFamily="DM Sans, sans-serif"
                    fontWeight="600"
                  >
                    Kailash Colony Metro
                  </text>
                  <text
                    x="548"
                    y="306"
                    textAnchor="middle"
                    fill="#4C5854"
                    fontSize="12"
                    fontFamily="DM Sans, sans-serif"
                    fontWeight="600"
                  >
                    M-Block Market
                  </text>
                  <text
                    x="115"
                    y="354"
                    textAnchor="middle"
                    fill="#4C5854"
                    fontSize="11"
                    fontFamily="DM Sans, sans-serif"
                  >
                    Outer Ring Road
                  </text>

                  {/* Clinic Pin Marker */}
                  <g transform="translate(310, 186)">
                    <circle r="34" fill="#1F6F5C" fillOpacity="0.14" />
                    <circle r="18" fill="#1F6F5C" />
                    <circle r="7" fill="#F26B5B" />
                  </g>

                  {/* Clinic Nameplate */}
                  <g transform="translate(338, 152)">
                    <rect
                      x="0"
                      y="0"
                      width="196"
                      height="56"
                      rx="14"
                      fill="#FFFFFF"
                      stroke="#1C2422"
                      strokeOpacity="0.12"
                    />
                    <text
                      x="16"
                      y="25"
                      fill="#1C2422"
                      fontSize="14"
                      fontFamily="DM Serif Display, Georgia, serif"
                    >
                      More Than Physio
                    </text>
                    <text
                      x="16"
                      y="43"
                      fill="#1F6F5C"
                      fontSize="11"
                      fontFamily="DM Sans, sans-serif"
                      fontWeight="600"
                    >
                      Greater Kailash 1 · New Delhi
                    </text>
                  </g>
                </svg>
              </div>

              <div className="px-6 py-4 bg-white border-t border-[#1C2422]/8 flex flex-wrap items-center justify-between gap-3 text-xs text-[#4C5854]">
                <span>
                  Map placeholder for Greater Kailash 1 (GK-1). Embed exact Google Maps pin once
                  street address is finalised.
                </span>
                <a
                  href={CLINIC_INFO.googleReviewsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-[#1F6F5C] hover:underline whitespace-nowrap"
                >
                  View area on Google Maps
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-[#FAFAF7] border-t border-[#1C2422]/10 py-12">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-8 border-b border-[#1C2422]/8">
            <div>
              <a href="#top" className="font-serif text-2xl text-[#1C2422]">
                {CLINIC_INFO.name}
              </a>
              <p className="mt-1 text-sm text-[#4C5854]">
                Physiotherapy &amp; Rehabilitation · {CLINIC_INFO.area}
              </p>
            </div>

            <nav
              aria-label="Footer navigation"
              className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-[#4C5854]"
            >
              <a href="#conditions" className="hover:text-[#1F6F5C] transition-colors">
                Conditions
              </a>
              <a href="#approach" className="hover:text-[#1F6F5C] transition-colors">
                Our Approach
              </a>
              <a href="#services" className="hover:text-[#1F6F5C] transition-colors">
                Services
              </a>
              <a href="#reviews" className="hover:text-[#1F6F5C] transition-colors">
                Reviews
              </a>
              <a href="#booking" className="hover:text-[#1F6F5C] transition-colors">
                Book Consultation
              </a>
              <a href="#faq" className="hover:text-[#1F6F5C] transition-colors">
                FAQ
              </a>
            </nav>
          </div>

          <div className="pt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs text-[#4C5854]">
            <p className="max-w-2xl leading-relaxed">
              Clinical note: Information on this website is intended for general patient guidance
              and does not replace an in-person clinical assessment. Recovery timelines vary by
              individual.
            </p>
            <p className="whitespace-nowrap shrink-0 tabular-nums">
              © {currentYear} {CLINIC_INFO.name}. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
