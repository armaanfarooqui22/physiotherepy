import { useState, useEffect, type FormEvent } from 'react';
import {
  AlertCircle,
  Calendar,
  Check,
  CheckCircle2,
  Copy,
  MessageCircle,
  Phone,
  RotateCcw,
} from 'lucide-react';
import { CLINIC_INFO, CONDITIONS, SERVICES } from '../data/clinicData';

interface BookingSectionProps {
  preselectedCondition: string;
}

interface BookingFormState {
  name: string;
  phone: string;
  condition: string;
  preferredDate: string;
  message: string;
}

interface FormErrors {
  name?: string;
  phone?: string;
  condition?: string;
  preferredDate?: string;
}

const CONDITION_OPTIONS = [
  ...CONDITIONS.map((c) => c.name),
  ...SERVICES.map((s) => `Service: ${s.title}`),
  'General Assessment / Other',
];

function getTodayIsoDate(): string {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const day = String(now.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

function formatReadableDate(isoDate: string): string {
  if (!isoDate) return 'Earliest available slot';
  const [year, month, day] = isoDate.split('-').map(Number);
  if (!year || !month || !day) return isoDate;
  const dateObj = new Date(year, month - 1, day);
  return dateObj.toLocaleDateString('en-IN', {
    weekday: 'short',
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  });
}

export function BookingSection({ preselectedCondition }: BookingSectionProps) {
  const [form, setForm] = useState<BookingFormState>({
    name: '',
    phone: '',
    condition: preselectedCondition || '',
    preferredDate: '',
    message: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submittedData, setSubmittedData] = useState<BookingFormState | null>(null);
  const [copied, setCopied] = useState(false);

  const todayDate = getTodayIsoDate();

  useEffect(() => {
    if (!preselectedCondition) return;
    setSubmittedData(null);
    const matchingOption =
      CONDITION_OPTIONS.find(
        (opt) =>
          opt.toLowerCase() === preselectedCondition.toLowerCase() ||
          opt.toLowerCase() === `service: ${preselectedCondition.toLowerCase()}`
      ) || preselectedCondition;

    setForm((prev) => ({
      ...prev,
      condition: matchingOption,
    }));
    setErrors((prev) => ({ ...prev, condition: undefined }));
  }, [preselectedCondition]);

  const validate = (values: BookingFormState): FormErrors => {
    const nextErrors: FormErrors = {};

    if (!values.name.trim() || values.name.trim().length < 2) {
      nextErrors.name = 'Please enter your full name (at least 2 characters).';
    }

    const digitsOnly = values.phone.replace(/\D/g, '');
    if (!digitsOnly) {
      nextErrors.phone = 'Please enter your phone or WhatsApp number.';
    } else if (digitsOnly.length < 10 || digitsOnly.length > 15) {
      nextErrors.phone = 'Please enter a valid 10-digit mobile number.';
    }

    if (!values.condition.trim()) {
      nextErrors.condition = 'Please select a condition or service so we can prepare.';
    }

    if (!values.preferredDate) {
      nextErrors.preferredDate = 'Please choose a preferred consultation date.';
    } else if (values.preferredDate < todayDate) {
      nextErrors.preferredDate = 'Please select today or a future date.';
    }

    return nextErrors;
  };

  const buildWhatsAppMessage = (data: BookingFormState): string => {
    const lines = [
      `Hello ${CLINIC_INFO.name} (GK-1), I would like to book a physiotherapy consultation.`,
      '',
      `Name: ${data.name.trim()}`,
      `Phone: ${data.phone.trim()}`,
      `Condition / Focus: ${data.condition}`,
      `Preferred Date: ${formatReadableDate(data.preferredDate)}`,
    ];
    if (data.message.trim()) {
      lines.push(`Notes: ${data.message.trim()}`);
    }
    return lines.join('\n');
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const validationErrors = validate(form);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      return;
    }

    setSubmittedData({ ...form });
    setCopied(false);
  };

  const handleReset = () => {
    setSubmittedData(null);
    setErrors({});
    setCopied(false);
    setForm({
      name: '',
      phone: '',
      condition: '',
      preferredDate: '',
      message: '',
    });
  };

  const whatsappMessage = submittedData ? buildWhatsAppMessage(submittedData) : '';
  const whatsappUrl = submittedData
    ? `https://wa.me/${CLINIC_INFO.whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`
    : '';

  const handleCopyMessage = async () => {
    if (!whatsappMessage) return;
    try {
      await navigator.clipboard.writeText(whatsappMessage);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      setCopied(false);
    }
  };

  return (
    <section
      id="booking"
      className="py-16 sm:py-24 bg-[#1F6F5C] text-white border-t border-[#1C2422]/10"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left column: reassuring context */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <p className="text-sm font-medium text-white/80 mb-3">Book a Consultation</p>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-[44px] leading-[1.1] text-white">
                Take the first calm step toward moving comfortably again.
              </h2>
              <p className="mt-4 text-base text-white/85 leading-relaxed">
                Share a few details below and send your booking request straight to our Greater
                Kailash 1 clinic WhatsApp desk. We respond promptly to confirm your exact time slot.
              </p>
            </div>

            <div className="pt-6 border-t border-white/15 space-y-4 text-sm text-white/90">
              <div className="flex items-start gap-3">
                <Calendar className="w-5 h-5 text-[#F26B5B] shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <p className="font-semibold text-white">45–60 minute initial assessment</p>
                  <p className="text-white/80 mt-0.5">
                    Includes movement evaluation, plain-language diagnosis, initial relief, and a
                    personalised care roadmap.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-[#F26B5B] shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <p className="font-semibold text-white">Prefer calling the clinic directly?</p>
                  <a
                    href={CLINIC_INFO.phoneHref}
                    className="inline-block mt-0.5 text-white underline decoration-[#F26B5B] decoration-2 underline-offset-4 hover:text-white/90 tabular-nums font-medium"
                  >
                    {CLINIC_INFO.phoneDisplay}
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right column: validated booking form / success state */}
          <div className="lg:col-span-7 rounded-3xl bg-[#FAFAF7] text-[#1C2422] p-6 sm:p-9 border border-white/15">
            {submittedData ? (
              <div className="space-y-6" role="status" aria-live="polite">
                <div className="flex items-start gap-3.5">
                  <div className="w-11 h-11 rounded-2xl bg-[#1F6F5C]/12 text-[#1F6F5C] flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-6 h-6" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-[#1F6F5C]">
                      Consultation Request Ready
                    </p>
                    <h3 className="font-serif text-2xl sm:text-3xl text-[#1C2422] mt-0.5">
                      Thank you, {submittedData.name.trim()}.
                    </h3>
                    <p className="mt-1.5 text-sm text-[#4C5854] leading-relaxed">
                      Your details are validated and formatted below. Tap the button to send your
                      request directly to our GK-1 clinic on WhatsApp ({CLINIC_INFO.phoneDisplay})
                      to confirm your time slot.
                    </p>
                  </div>
                </div>

                <dl className="rounded-2xl bg-white border border-[#1C2422]/10 p-5 space-y-3 text-sm">
                  <div className="flex flex-col sm:flex-row sm:justify-between gap-1 pb-2.5 border-b border-[#1C2422]/6">
                    <dt className="text-[#4C5854]">Patient Name</dt>
                    <dd className="font-semibold text-[#1C2422]">{submittedData.name.trim()}</dd>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:justify-between gap-1 pb-2.5 border-b border-[#1C2422]/6">
                    <dt className="text-[#4C5854]">Phone Number</dt>
                    <dd className="font-semibold text-[#1C2422] tabular-nums">
                      {submittedData.phone.trim()}
                    </dd>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:justify-between gap-1 pb-2.5 border-b border-[#1C2422]/6">
                    <dt className="text-[#4C5854]">Condition / Focus</dt>
                    <dd className="font-semibold text-[#1C2422]">{submittedData.condition}</dd>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:justify-between gap-1">
                    <dt className="text-[#4C5854]">Preferred Date</dt>
                    <dd className="font-semibold text-[#1C2422]">
                      {formatReadableDate(submittedData.preferredDate)}
                    </dd>
                  </div>
                  {submittedData.message.trim() && (
                    <div className="pt-2.5 border-t border-[#1C2422]/6">
                      <dt className="text-[#4C5854] mb-1">Notes</dt>
                      <dd className="text-[#1C2422]">{submittedData.message.trim()}</dd>
                    </div>
                  )}
                </dl>

                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#1F6F5C] px-6 py-3.5 text-sm sm:text-base font-semibold text-white hover:bg-[#175748] transition-colors min-h-[48px] flex-1"
                  >
                    <MessageCircle className="w-5 h-5" aria-hidden="true" />
                    <span>Send Booking via WhatsApp</span>
                  </a>

                  <button
                    type="button"
                    onClick={handleCopyMessage}
                    className="inline-flex items-center justify-center gap-2 rounded-xl border border-[#1C2422]/15 bg-white px-5 py-3.5 text-sm font-medium text-[#1C2422] hover:border-[#1F6F5C] transition-colors min-h-[48px]"
                  >
                    {copied ? (
                      <>
                        <Check className="w-4 h-4 text-[#1F6F5C]" aria-hidden="true" />
                        <span>Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4 text-[#4C5854]" aria-hidden="true" />
                        <span>Copy Details</span>
                      </>
                    )}
                  </button>
                </div>

                <div className="pt-2 flex flex-wrap items-center justify-between gap-3 text-xs text-[#4C5854]">
                  <span>
                    Or call us directly at{' '}
                    <a
                      href={CLINIC_INFO.phoneHref}
                      className="font-semibold text-[#1F6F5C] underline tabular-nums"
                    >
                      {CLINIC_INFO.phoneDisplay}
                    </a>
                  </span>

                  <button
                    type="button"
                    onClick={handleReset}
                    className="inline-flex items-center gap-1.5 font-medium text-[#1C2422] hover:text-[#1F6F5C] transition-colors"
                  >
                    <RotateCcw className="w-3.5 h-3.5" aria-hidden="true" />
                    <span>Edit or book another session</span>
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                <div>
                  <h3 className="font-serif text-2xl sm:text-3xl text-[#1C2422]">
                    Request Your Appointment
                  </h3>
                  <p className="mt-1 text-sm text-[#4C5854]">
                    All fields marked with * help us prepare for your consultation.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                  <div>
                    <label
                      htmlFor="booking-name"
                      className="block text-sm font-medium text-[#1C2422] mb-1.5"
                    >
                      Full Name *
                    </label>
                    <input
                      id="booking-name"
                      name="name"
                      type="text"
                      autoComplete="name"
                      placeholder="e.g., Rohan Verma"
                      value={form.name}
                      onChange={(e) => {
                        setForm((prev) => ({ ...prev, name: e.target.value }));
                        if (errors.name) setErrors((prev) => ({ ...prev, name: undefined }));
                      }}
                      aria-invalid={Boolean(errors.name)}
                      aria-describedby={errors.name ? 'booking-name-error' : undefined}
                      className={`w-full rounded-xl bg-white px-4 py-3 text-sm text-[#1C2422] placeholder:text-[#4C5854]/60 border transition-colors min-h-[46px] ${
                        errors.name
                          ? 'border-[#C84839] focus:border-[#C84839]'
                          : 'border-[#1C2422]/15 focus:border-[#1F6F5C]'
                      }`}
                    />
                    {errors.name && (
                      <p
                        id="booking-name-error"
                        className="mt-1.5 flex items-center gap-1.5 text-xs font-medium text-[#C84839]"
                      >
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                        <span>{errors.name}</span>
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="booking-phone"
                      className="block text-sm font-medium text-[#1C2422] mb-1.5"
                    >
                      Phone / WhatsApp Number *
                    </label>
                    <input
                      id="booking-phone"
                      name="phone"
                      type="tel"
                      autoComplete="tel"
                      placeholder="+91 98XXX XXXXX"
                      value={form.phone}
                      onChange={(e) => {
                        setForm((prev) => ({ ...prev, phone: e.target.value }));
                        if (errors.phone) setErrors((prev) => ({ ...prev, phone: undefined }));
                      }}
                      aria-invalid={Boolean(errors.phone)}
                      aria-describedby={errors.phone ? 'booking-phone-error' : undefined}
                      className={`w-full rounded-xl bg-white px-4 py-3 text-sm text-[#1C2422] placeholder:text-[#4C5854]/60 border transition-colors min-h-[46px] tabular-nums ${
                        errors.phone
                          ? 'border-[#C84839] focus:border-[#C84839]'
                          : 'border-[#1C2422]/15 focus:border-[#1F6F5C]'
                      }`}
                    />
                    {errors.phone && (
                      <p
                        id="booking-phone-error"
                        className="mt-1.5 flex items-center gap-1.5 text-xs font-medium text-[#C84839]"
                      >
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                        <span>{errors.phone}</span>
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                  <div>
                    <label
                      htmlFor="booking-condition"
                      className="block text-sm font-medium text-[#1C2422] mb-1.5"
                    >
                      Condition / Focus Area *
                    </label>
                    <select
                      id="booking-condition"
                      name="condition"
                      value={form.condition}
                      onChange={(e) => {
                        setForm((prev) => ({ ...prev, condition: e.target.value }));
                        if (errors.condition)
                          setErrors((prev) => ({ ...prev, condition: undefined }));
                      }}
                      aria-invalid={Boolean(errors.condition)}
                      aria-describedby={errors.condition ? 'booking-condition-error' : undefined}
                      className={`w-full rounded-xl bg-white px-4 py-3 text-sm text-[#1C2422] border transition-colors min-h-[46px] ${
                        errors.condition
                          ? 'border-[#C84839] focus:border-[#C84839]'
                          : 'border-[#1C2422]/15 focus:border-[#1F6F5C]'
                      }`}
                    >
                      <option value="">Select a condition or service</option>
                      {CONDITION_OPTIONS.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                    {errors.condition && (
                      <p
                        id="booking-condition-error"
                        className="mt-1.5 flex items-center gap-1.5 text-xs font-medium text-[#C84839]"
                      >
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                        <span>{errors.condition}</span>
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="booking-date"
                      className="block text-sm font-medium text-[#1C2422] mb-1.5"
                    >
                      Preferred Date *
                    </label>
                    <input
                      id="booking-date"
                      name="preferredDate"
                      type="date"
                      min={todayDate}
                      value={form.preferredDate}
                      onChange={(e) => {
                        setForm((prev) => ({ ...prev, preferredDate: e.target.value }));
                        if (errors.preferredDate)
                          setErrors((prev) => ({ ...prev, preferredDate: undefined }));
                      }}
                      aria-invalid={Boolean(errors.preferredDate)}
                      aria-describedby={errors.preferredDate ? 'booking-date-error' : undefined}
                      className={`w-full rounded-xl bg-white px-4 py-3 text-sm text-[#1C2422] border transition-colors min-h-[46px] tabular-nums ${
                        errors.preferredDate
                          ? 'border-[#C84839] focus:border-[#C84839]'
                          : 'border-[#1C2422]/15 focus:border-[#1F6F5C]'
                      }`}
                    />
                    {errors.preferredDate && (
                      <p
                        id="booking-date-error"
                        className="mt-1.5 flex items-center gap-1.5 text-xs font-medium text-[#C84839]"
                      >
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                        <span>{errors.preferredDate}</span>
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="booking-message"
                    className="block text-sm font-medium text-[#1C2422] mb-1.5"
                  >
                    Briefly share your symptoms or preferred time (optional)
                  </label>
                  <textarea
                    id="booking-message"
                    name="message"
                    rows={3}
                    placeholder="e.g., Morning slot preferred, stiffness in right knee when climbing stairs..."
                    value={form.message}
                    onChange={(e) => setForm((prev) => ({ ...prev, message: e.target.value }))}
                    className="w-full rounded-xl bg-white px-4 py-3 text-sm text-[#1C2422] placeholder:text-[#4C5854]/60 border border-[#1C2422]/15 focus:border-[#1F6F5C] transition-colors resize-y"
                  />
                </div>

                <div className="pt-1 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#1F6F5C] px-7 py-3.5 text-sm sm:text-base font-semibold text-white hover:bg-[#175748] transition-colors min-h-[48px] whitespace-nowrap shrink-0"
                  >
                    <MessageCircle className="w-4 h-4" aria-hidden="true" />
                    <span>Confirm &amp; Continue to WhatsApp</span>
                  </button>

                  <p className="text-xs text-[#4C5854]">
                    No payment needed to enquire. Sends to {CLINIC_INFO.phoneDisplay}.
                  </p>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
