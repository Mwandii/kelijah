/**
 * BookAppointment.jsx
 * src/pages/BookAppointment.jsx
 * ─────────────────────────────────────────────────────────────
 * Booking page with:
 *  - Controlled form with full validation
 *  - All fields: Name, Phone, Service, Vehicle Make/Model/Year,
 *    Plate Number, Preferred Date, Issue Description
 *  - On submit: builds a structured WhatsApp message and opens
 *    wa.me link — no backend needed
 *  - Loading state while opening WhatsApp
 *  - Success state after redirect
 *  - Inline field-level error messages
 *  - Info sidebar with contact details + what to expect
 *  - Fully responsive — stacks on mobile
 * ─────────────────────────────────────────────────────────────
 */

import { useState } from 'react';
import FadeIn        from '../components/ui/FadeIn';
import Overline      from '../components/ui/Overline';
import SectionHeading from '../components/ui/SectionHeading';
import { BUSINESS, SERVICE_OPTIONS, buildWALink } from '../data/siteData';

// ── Icons ─────────────────────────────────────────────────────
const WAIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
  </svg>
);

const PhoneIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor"
    strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.41 2 2 0 0 1 3.6 1.22h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.8a16 16 0 0 0 6.29 6.29l.96-.96a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
  </svg>
);

const ClockIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor"
    strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
  </svg>
);

const MapPinIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor"
    strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
    <circle cx="12" cy="10" r="3"/>
  </svg>
);

const CheckCircle = () => (
  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor"
    strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
    <polyline points="22 4 12 14.01 9 11.01"/>
  </svg>
);

// ── Initial form state ────────────────────────────────────────
const INITIAL_FORM = {
  fullName:      '',
  phone:         '',
  service:       '',
  vehicleMake:   '',
  vehicleModel:  '',
  vehicleYear:   '',
  plateNumber:   '',
  preferredDate: '',
  issueDesc:     '',
};

// ── Validators ────────────────────────────────────────────────
const validate = (fields) => {
  const errors = {};

  if (!fields.fullName.trim())
    errors.fullName = 'Please enter your full name.';

  if (!fields.phone.trim())
    errors.phone = 'Please enter your phone number.';
  else if (!/^[0-9+\s\-]{7,15}$/.test(fields.phone.trim()))
    errors.phone = 'Please enter a valid phone number.';

  if (!fields.service)
    errors.service = 'Please select a service.';

  if (!fields.vehicleMake.trim())
    errors.vehicleMake = 'Please enter your vehicle make (e.g. Toyota).';

  if (!fields.vehicleModel.trim())
    errors.vehicleModel = 'Please enter your vehicle model (e.g. Prado).';

  if (!fields.vehicleYear.trim())
    errors.vehicleYear = 'Please enter the vehicle year.';
  else if (!/^\d{4}$/.test(fields.vehicleYear.trim()))
    errors.vehicleYear = 'Enter a valid 4-digit year.';

  if (!fields.preferredDate)
    errors.preferredDate = 'Please select a preferred date.';

  if (!fields.issueDesc.trim())
    errors.issueDesc = 'Please describe the issue or service needed.';
  else if (fields.issueDesc.trim().length < 10)
    errors.issueDesc = 'Please provide a bit more detail (min 10 characters).';

  return errors;
};

// ── Build WhatsApp message from form fields ───────────────────
const buildMessage = (f) => `Hello Kelijah Auto, I would like to book an appointment.

*Full Name:* ${f.fullName}
*Phone:* ${f.phone}
*Requested Service:* ${f.service}
*Vehicle Make:* ${f.vehicleMake}
*Vehicle Model:* ${f.vehicleModel}
*Vehicle Year:* ${f.vehicleYear}
*Plate Number:* ${f.plateNumber || 'Not provided'}
*Preferred Date:* ${f.preferredDate}
*Issue / Description:* ${f.issueDesc}`;

// ── Field error message ───────────────────────────────────────
const FieldError = ({ message }) =>
  message ? (
    <p role="alert" className="mt-1.5 text-[12px] text-[var(--color-red)] font-[family-name:var(--font-body)]">
      {message}
    </p>
  ) : null;

// ── Minimum date — today ──────────────────────────────────────
const getTodayString = () => new Date().toISOString().split('T')[0];

// ── Main Component ────────────────────────────────────────────
const BookAppointment = () => {
  const [form,    setForm]    = useState(INITIAL_FORM);
  const [errors,  setErrors]  = useState({});
  const [status,  setStatus]  = useState('idle'); // idle | loading | success

  // ── Handle input change ──────────────────────────────────
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
    // Clear error for this field as user types
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  // ── Handle submit ────────────────────────────────────────
  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validate(form);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      // Scroll to first error
      const firstErrorField = document.querySelector('[aria-invalid="true"]');
      if (firstErrorField) {
        firstErrorField.scrollIntoView({ behavior: 'smooth', block: 'center' });
        firstErrorField.focus();
      }
      return;
    }

    setStatus('loading');

    // Build the WhatsApp URL with pre-filled message
    const message = buildMessage(form);
    const waUrl   = buildWALink(message);

    // Small delay to show loading state, then open WhatsApp
    setTimeout(() => {
      window.open(waUrl, '_blank', 'noreferrer');
      setStatus('success');
    }, 800);
  };

  // ── Reset form ───────────────────────────────────────────
  const handleReset = () => {
    setForm(INITIAL_FORM);
    setErrors({});
    setStatus('idle');
  };

  // ── Shared input classes ─────────────────────────────────
  const inputClass = (field) =>
    `form-input ${errors[field] ? 'border-[var(--color-red)]' : ''}`;

  // ── Success screen ───────────────────────────────────────
  if (status === 'success') {
    return (
      <main id="main-content" className="bg-[var(--color-black)] min-h-screen flex items-center justify-center px-6">
        <div className="text-center max-w-105">
          <div className="text-[var(--color-red)] flex justify-center mb-6">
            <CheckCircle />
          </div>
          <h1 className="font-[family-name:var(--font-display)] font-bold text-white uppercase text-[28px] sm:text-[34px] tracking-[0.02em] mb-4">
            WhatsApp Opened!
          </h1>
          <p className="font-[family-name:var(--font-body)] text-[15px] text-white/52 leading-relaxed mb-8">
            Your booking details have been pre-filled in WhatsApp. Just hit
            send and we'll confirm your appointment within minutes.
          </p>
          <p className="font-[family-name:var(--font-body)] text-[13px] text-white/30 mb-8">
            WhatsApp didn't open?{' '}
            <a
              href={buildWALink(buildMessage(form))}
              target="_blank"
              rel="noreferrer"
              className="text-[var(--color-red)] hover:underline"
            >
              Click here to try again
            </a>
          </p>
          <button
            type="button"
            onClick={handleReset}
            className="btn-outline-light"
          >
            Submit Another Booking
          </button>
        </div>
      </main>
    );
  }

  return (
    <main id="main-content">

      {/* ── Page header ── */}
      <section
        aria-label="Book appointment header"
        className="bg-[var(--color-black)] pt-28 pb-14 sm:pt-32 sm:pb-16 border-b border-white/6"
      >
        <div className="section-container">
          <FadeIn direction="up">
            <Overline>Get Started</Overline>
          </FadeIn>
          <FadeIn direction="up" delay={100}>
            <SectionHeading light className="mb-4">
              Book an Appointment
            </SectionHeading>
          </FadeIn>
          <FadeIn direction="up" delay={180}>
            <p className="font-[family-name:var(--font-body)] text-[15px] text-white/48 leading-relaxed max-w-125">
              Fill in the form below and we'll open WhatsApp with your
              details pre-filled. We confirm all bookings within minutes.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ── Form + Sidebar ── */}
      <section className="bg-[var(--color-black)] section-padding">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] xl:grid-cols-[1fr_340px] gap-12 lg:gap-16 items-start">

            {/* ── Form ── */}
            <FadeIn direction="up">
              <form
                onSubmit={handleSubmit}
                noValidate
                aria-label="Book an appointment form"
                className="flex flex-col gap-6"
              >

                {/* ── Personal details ── */}
                <fieldset className="border-0 p-0 m-0">
                  <legend className="font-[family-name:var(--font-display)] font-600 text-[11px] tracking-[0.2em] uppercase text-white/30 mb-5 pb-3 border-b border-white/[0.07] w-full">
                    Your Details
                  </legend>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">

                    {/* Full Name */}
                    <div>
                      <label htmlFor="fullName" className="form-label">
                        Full Name <span aria-hidden="true" className="text-[var(--color-red)]">*</span>
                      </label>
                      <input
                        id="fullName"
                        name="fullName"
                        type="text"
                        autoComplete="name"
                        placeholder="e.g. James Mwangi"
                        value={form.fullName}
                        onChange={handleChange}
                        aria-invalid={!!errors.fullName}
                        aria-describedby={errors.fullName ? 'fullName-error' : undefined}
                        disabled={status === 'loading'}
                        className={inputClass('fullName')}
                      />
                      <FieldError message={errors.fullName} />
                    </div>

                    {/* Phone */}
                    <div>
                      <label htmlFor="phone" className="form-label">
                        Phone Number <span aria-hidden="true" className="text-[var(--color-red)]">*</span>
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        autoComplete="tel"
                        placeholder="e.g. 0712 345 678"
                        value={form.phone}
                        onChange={handleChange}
                        aria-invalid={!!errors.phone}
                        aria-describedby={errors.phone ? 'phone-error' : undefined}
                        disabled={status === 'loading'}
                        className={inputClass('phone')}
                      />
                      <FieldError message={errors.phone} />
                    </div>

                  </div>
                </fieldset>

                {/* ── Service ── */}
                <fieldset className="border-0 p-0 m-0">
                  <legend className="font-[family-name:var(--font-display)] font-600 text-[11px] tracking-[0.2em] uppercase text-white/30 mb-5 pb-3 border-b border-white/[0.07] w-full">
                    Requested Service
                  </legend>

                  <div>
                    <label htmlFor="service" className="form-label">
                      Select a Service <span aria-hidden="true" className="text-[var(--color-red)]">*</span>
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={form.service}
                      onChange={handleChange}
                      aria-invalid={!!errors.service}
                      disabled={status === 'loading'}
                      className={`${inputClass('service')} cursor-pointer`}
                      style={{ colorScheme: 'dark' }}
                    >
                      <option value="" disabled>Choose a service...</option>
                      {SERVICE_OPTIONS.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                    <FieldError message={errors.service} />
                  </div>
                </fieldset>

                {/* ── Vehicle details ── */}
                <fieldset className="border-0 p-0 m-0">
                  <legend className="font-[family-name:var(--font-display)] font-600 text-[11px] tracking-[0.2em] uppercase text-white/30 mb-5 pb-3 border-b border-white/[0.07] w-full">
                    Vehicle Details
                  </legend>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">

                    {/* Vehicle Make */}
                    <div>
                      <label htmlFor="vehicleMake" className="form-label">
                        Vehicle Make <span aria-hidden="true" className="text-[var(--color-red)]">*</span>
                      </label>
                      <input
                        id="vehicleMake"
                        name="vehicleMake"
                        type="text"
                        placeholder="e.g. Toyota"
                        value={form.vehicleMake}
                        onChange={handleChange}
                        aria-invalid={!!errors.vehicleMake}
                        disabled={status === 'loading'}
                        className={inputClass('vehicleMake')}
                      />
                      <FieldError message={errors.vehicleMake} />
                    </div>

                    {/* Vehicle Model */}
                    <div>
                      <label htmlFor="vehicleModel" className="form-label">
                        Vehicle Model <span aria-hidden="true" className="text-[var(--color-red)]">*</span>
                      </label>
                      <input
                        id="vehicleModel"
                        name="vehicleModel"
                        type="text"
                        placeholder="e.g. Prado"
                        value={form.vehicleModel}
                        onChange={handleChange}
                        aria-invalid={!!errors.vehicleModel}
                        disabled={status === 'loading'}
                        className={inputClass('vehicleModel')}
                      />
                      <FieldError message={errors.vehicleModel} />
                    </div>

                    {/* Vehicle Year */}
                    <div>
                      <label htmlFor="vehicleYear" className="form-label">
                        Vehicle Year <span aria-hidden="true" className="text-[var(--color-red)]">*</span>
                      </label>
                      <input
                        id="vehicleYear"
                        name="vehicleYear"
                        type="number"
                        placeholder="e.g. 2019"
                        min="1970"
                        max={new Date().getFullYear() + 1}
                        value={form.vehicleYear}
                        onChange={handleChange}
                        aria-invalid={!!errors.vehicleYear}
                        disabled={status === 'loading'}
                        className={inputClass('vehicleYear')}
                      />
                      <FieldError message={errors.vehicleYear} />
                    </div>

                    {/* Plate Number */}
                    <div>
                      <label htmlFor="plateNumber" className="form-label">
                        Plate Number{' '}
                        <span className="text-white/25 normal-case tracking-normal font-[family-name:var(--font-body)] font-normal text-[11px]">
                          (optional)
                        </span>
                      </label>
                      <input
                        id="plateNumber"
                        name="plateNumber"
                        type="text"
                        placeholder="e.g. KDG 123A"
                        value={form.plateNumber}
                        onChange={handleChange}
                        disabled={status === 'loading'}
                        className="form-input"
                      />
                    </div>

                    {/* Preferred Date */}
                    <div className="sm:col-span-2">
                      <label htmlFor="preferredDate" className="form-label">
                        Preferred Date <span aria-hidden="true" className="text-[var(--color-red)]">*</span>
                      </label>
                      <input
                        id="preferredDate"
                        name="preferredDate"
                        type="date"
                        min={getTodayString()}
                        value={form.preferredDate}
                        onChange={handleChange}
                        aria-invalid={!!errors.preferredDate}
                        disabled={status === 'loading'}
                        className={`${inputClass('preferredDate')} cursor-pointer`}
                        style={{ colorScheme: 'dark' }}
                      />
                      <FieldError message={errors.preferredDate} />
                    </div>

                  </div>
                </fieldset>

                {/* ── Issue description ── */}
                <fieldset className="border-0 p-0 m-0">
                  <legend className="font-[family-name:var(--font-display)] font-600 text-[11px] tracking-[0.2em] uppercase text-white/30 mb-5 pb-3 border-b border-white/[0.07] w-full">
                    Issue Description
                  </legend>

                  <div>
                    <label htmlFor="issueDesc" className="form-label">
                      Describe the issue or service needed <span aria-hidden="true" className="text-[var(--color-red)]">*</span>
                    </label>
                    <textarea
                      id="issueDesc"
                      name="issueDesc"
                      rows={5}
                      placeholder="e.g. My car makes a grinding noise when braking, especially at low speeds. The brake pedal also feels slightly soft."
                      value={form.issueDesc}
                      onChange={handleChange}
                      aria-invalid={!!errors.issueDesc}
                      disabled={status === 'loading'}
                      className={`${inputClass('issueDesc')} resize-none`}
                    />
                    <div className="flex justify-between items-center mt-1.5">
                      <FieldError message={errors.issueDesc} />
                      <span className="text-[11px] text-white/20 ml-auto">
                        {form.issueDesc.length} chars
                      </span>
                    </div>
                  </div>
                </fieldset>

                {/* ── Submit button ── */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="btn-primary w-full justify-center sm:w-auto"
                  >
                    {status === 'loading' ? (
                      <>
                        <svg className="animate-spin" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                          <path d="M21 12a9 9 0 1 1-6.219-8.56"/>
                        </svg>
                        Opening WhatsApp...
                      </>
                    ) : (
                      <>
                        <WAIcon /> Send Booking via WhatsApp
                      </>
                    )}
                  </button>
                  <p className="font-[family-name:var(--font-body)] text-[12px] text-white/25 mt-3">
                    * Required fields. Your details will be sent directly to our WhatsApp.
                  </p>
                </div>

              </form>
            </FadeIn>

            {/* ── Sidebar ── */}
            <aside
              aria-label="Booking information"
              className="flex flex-col gap-5 lg:sticky lg:top-24"
            >

              {/* What to expect */}
              <FadeIn direction="left" delay={100}>
                <div className="bg-[#111] border border-white/8 rounded-lg p-6">
                  <p className="font-[family-name:var(--font-display)] font-600 text-[11px] tracking-[0.18em] uppercase text-white/28 mb-4">
                    What to Expect
                  </p>
                  <ul className="flex flex-col gap-4">
                    {[
                      { n:'01', t:'Send Your Details',    d:'Fill the form and hit send. WhatsApp opens with everything pre-filled.' },
                      { n:'02', t:'We Confirm',           d:'We reply within minutes to confirm your slot and answer any questions.' },
                      { n:'03', t:'Drop Your Vehicle',    d:'Arrive at your preferred time. Walk-ins also welcome any time.' },
                      { n:'04', t:'Drive Away Confident', d:'Work completed, tested, and signed off before you leave.' },
                    ].map(step => (
                      <li key={step.n} className="flex gap-3 items-start">
                        <span className="font-[family-name:var(--font-display)] font-bold text-[11px] text-[var(--color-red)] mt-0.5 shrink-0 w-5">
                          {step.n}
                        </span>
                        <div>
                          <p className="font-[family-name:var(--font-display)] font-600 text-[13px] text-white uppercase tracking-[0.04em] mb-0.5">
                            {step.t}
                          </p>
                          <p className="font-[family-name:var(--font-body)] text-[12px] text-white/38 leading-relaxed">
                            {step.d}
                          </p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeIn>

              {/* Contact details */}
              <FadeIn direction="left" delay={180}>
                <div className="bg-[#111] border border-white/8 rounded-lg p-6">
                  <p className="font-[family-name:var(--font-display)] font-600 text-[11px] tracking-[0.18em] uppercase text-white/28 mb-4">
                    Prefer to Call?
                  </p>
                  <a
                    href={`tel:${BUSINESS.phone1}`}
                    className="flex items-center gap-3 text-white hover:text-[var(--color-red)] transition-colors duration-200 mb-3"
                  >
                    <PhoneIcon />
                    <span className="font-[family-name:var(--font-display)] font-600 text-[15px] tracking-[0.04em]">
                      {BUSINESS.phone1}
                    </span>
                  </a>
                  <div className="flex items-start gap-3 text-white/35 mb-3">
                    <ClockIcon />
                    <span className="font-[family-name:var(--font-body)] text-[13px] leading-relaxed">
                      {BUSINESS.hours}<br/>{BUSINESS.hoursSunday}
                    </span>
                  </div>
                  <div className="flex items-start gap-3 text-white/35">
                    <MapPinIcon />
                    <span className="font-[family-name:var(--font-body)] text-[13px] leading-relaxed">
                      {BUSINESS.addressFull}
                    </span>
                  </div>
                </div>
              </FadeIn>

            </aside>

          </div>
        </div>
      </section>

    </main>
  );
};

export default BookAppointment;