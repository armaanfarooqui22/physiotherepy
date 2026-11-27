import { useState, useEffect } from 'react';
import { Menu, Phone, X } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';

const NAV_LINKS = [
  { label: 'Conditions', href: '#conditions' },
  { label: 'Services', href: '#services' },
  { label: 'Our Approach', href: '#approach' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Contact', href: '#contact' },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!mobileOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMobileOpen(false);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [mobileOpen]);

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-colors duration-200 ${
        scrolled
          ? 'bg-[#FAFAF7]/95 backdrop-blur-md border-b border-[#1C2422]/10'
          : 'bg-[#FAFAF7] border-b border-[#1C2422]/6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 h-[68px] flex items-center justify-between gap-8">
        {/* Zone 1: Clean single-line brand wordmark */}
        <a
          href="#top"
          className="font-serif text-[22px] sm:text-2xl tracking-tight text-[#1C2422] hover:text-[#1F6F5C] transition-colors whitespace-nowrap shrink-0"
        >
          {CLINIC_INFO.name}
        </a>

        {/* Zone 2: 5 clean single-line navigation links */}
        <nav
          aria-label="Primary navigation"
          className="hidden lg:flex items-center gap-7 text-sm font-medium text-[#4C5854]"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative py-1 hover:text-[#1F6F5C] transition-colors whitespace-nowrap shrink-0 after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[1.5px] after:w-0 after:bg-[#1F6F5C] after:transition-all after:duration-200 hover:after:w-full"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: Click-to-call & primary booking action */}
        <div className="hidden md:flex items-center gap-5 shrink-0">
          <a
            href={CLINIC_INFO.phoneHref}
            className="inline-flex items-center gap-1.5 text-sm font-medium text-[#1C2422] hover:text-[#1F6F5C] transition-colors whitespace-nowrap shrink-0 tabular-nums"
            aria-label={`Call More Than Physio at ${CLINIC_INFO.phoneDisplay}`}
          >
            <Phone className="w-4 h-4 text-[#1F6F5C]" aria-hidden="true" />
            <span>{CLINIC_INFO.phoneDisplay}</span>
          </a>

          <a
            href="#booking"
            className="inline-flex items-center justify-center rounded-xl bg-[#1F6F5C] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#175748] transition-colors duration-200 whitespace-nowrap shrink-0 min-h-[42px]"
          >
            Book a Session
          </a>
        </div>

        {/* Mobile menu trigger */}
        <div className="flex items-center gap-2 md:hidden shrink-0">
          <a
            href={CLINIC_INFO.phoneHref}
            className="inline-flex items-center justify-center w-11 h-11 rounded-xl text-[#1F6F5C] hover:bg-[#1F6F5C]/10 transition-colors"
            aria-label={`Call ${CLINIC_INFO.phoneDisplay}`}
          >
            <Phone className="w-5 h-5" aria-hidden="true" />
          </a>
          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav-drawer"
            aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
            className="inline-flex items-center justify-center w-11 h-11 rounded-xl text-[#1C2422] hover:bg-[#1C2422]/6 transition-colors"
          >
            {mobileOpen ? (
              <X className="w-5 h-5" aria-hidden="true" />
            ) : (
              <Menu className="w-5 h-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile navigation drawer */}
      {mobileOpen && (
        <div
          id="mobile-nav-drawer"
          className="lg:hidden border-t border-[#1C2422]/10 bg-[#FAFAF7] px-5 py-5 space-y-4"
        >
          <nav aria-label="Mobile navigation" className="flex flex-col space-y-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="py-3 px-2 text-base font-medium text-[#1C2422] hover:text-[#1F6F5C] border-b border-[#1C2422]/6 last:border-b-0"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="pt-2 flex flex-col gap-3">
            <a
              href={CLINIC_INFO.phoneHref}
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-[#1C2422]/15 bg-white px-4 py-3 text-sm font-medium text-[#1C2422] tabular-nums min-h-[44px]"
            >
              <Phone className="w-4 h-4 text-[#1F6F5C]" aria-hidden="true" />
              <span>Call {CLINIC_INFO.phoneDisplay}</span>
            </a>
            <a
              href="#booking"
              onClick={() => setMobileOpen(false)}
              className="inline-flex items-center justify-center rounded-xl bg-[#1F6F5C] px-5 py-3 text-sm font-semibold text-white hover:bg-[#175748] min-h-[44px]"
            >
              Book a Session
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
