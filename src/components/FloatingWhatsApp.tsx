import { MessageCircle } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';

export function FloatingWhatsApp() {
  const whatsappUrl = `https://wa.me/${CLINIC_INFO.whatsappNumber}?text=${encodeURIComponent(
    'Hello More Than Physio (GK-1), I would like to book a physiotherapy consultation.'
  )}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Chat with ${CLINIC_INFO.name} on WhatsApp`}
      className="fixed bottom-5 right-5 z-40 inline-flex items-center gap-2.5 rounded-2xl bg-[#1F6F5C] text-white px-4 py-3 sm:px-5 sm:py-3.5 shadow-lg shadow-[#1C2422]/15 hover:bg-[#175748] hover:-translate-y-0.5 transition-all duration-200 min-h-[48px] min-w-[48px] focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#1F6F5C]"
    >
      <MessageCircle className="w-5 h-5 shrink-0" aria-hidden="true" />
      <span className="hidden sm:inline text-sm font-semibold whitespace-nowrap">
        WhatsApp Us
      </span>
    </a>
  );
}
