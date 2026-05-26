/**
 * ServiceDetail.jsx
 * src/pages/ServiceDetail.jsx
 * ─────────────────────────────────────────────────────────────
 * Dynamic service detail page — /services/:slug
 * Features:
 *  - Hero banner with service image and title
 *  - Long description
 *  - How we deliver this service (4 steps)
 *  - FAQ accordion (open/close per item, no libraries)
 *  - Sticky sidebar with book CTA + phone + other services list
 *  - Redirects to /services if slug not found
 *  - Scroll-triggered FadeIn animations
 * ─────────────────────────────────────────────────────────────
 */

import { useState } from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';

import FadeIn         from '../components/ui/FadeIn';
import LazyImage      from '../components/ui/LazyImage';
import Overline       from '../components/ui/Overline';
import Button         from '../components/ui/Button';
import CtaStrip       from '../components/sections/CtaStrip';
import { SERVICES, BUSINESS, WA_LINK, buildWALink } from '../data/siteData';

// ── Icons ─────────────────────────────────────────────────────
const WAIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
  </svg>
);

const PhoneIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor"
    strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.41 2 2 0 0 1 3.6 1.22h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.8a16 16 0 0 0 6.29 6.29l.96-.96a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
  </svg>
);

const ChevronDown = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor"
    strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <polyline points="6 9 12 15 18 9"/>
  </svg>
);

const ArrowRight = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor"
    strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <line x1="5" y1="12" x2="19" y2="12"/>
    <polyline points="12 5 19 12 12 19"/>
  </svg>
);

const BackArrow = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor"
    strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <line x1="19" y1="12" x2="5" y2="12"/>
    <polyline points="12 19 5 12 12 5"/>
  </svg>
);

// ── FAQ Accordion Item ────────────────────────────────────────
const FaqItem = ({ faq, isOpen, onToggle }) => (
  <div className="border-b border-white/[0.08] last:border-0">
    <button
      type="button"
      onClick={onToggle}
      aria-expanded={isOpen}
      className="w-full flex items-center justify-between gap-4 py-5 text-left group"
    >
      <span className="font-[family-name:var(--font-display)] font-600 text-[14px] text-white uppercase tracking-[0.04em] leading-snug group-hover:text-[var(--color-red)] transition-colors duration-200">
        {faq.q}
      </span>
      <span className={`text-[var(--color-red)] shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'}`}>
        <ChevronDown />
      </span>
    </button>

    {/* Answer — smooth height transition via max-height */}
    <div
      className="overflow-hidden transition-all duration-300 ease-in-out"
      style={{ maxHeight: isOpen ? '300px' : '0px' }}
    >
      <p className="font-[family-name:var(--font-body)] text-[14px] text-white/52 leading-[1.82] pb-5">
        {faq.a}
      </p>
    </div>
  </div>
);

// ── Step Card ─────────────────────────────────────────────────
const StepCard = ({ step }) => (
  <div className="flex gap-5 items-start">
    {/* Number */}
    <div className="w-11 h-11 rounded-full border-2 border-[var(--color-red)] flex items-center justify-center shrink-0 mt-0.5">
      <span className="font-[family-name:var(--font-display)] font-bold text-[15px] text-[var(--color-red)]">
        {step.num}
      </span>
    </div>
    <div>
      <h3 className="font-[family-name:var(--font-display)] font-600 text-[14px] text-white uppercase tracking-[0.06em] mb-2">
        {step.title}
      </h3>
      <p className="font-[family-name:var(--font-body)] text-[13px] text-white/48 leading-[1.78]">
        {step.desc}
      </p>
    </div>
  </div>
);

// ── Main Component ────────────────────────────────────────────
const ServiceDetail = () => {
  const { slug } = useParams();
  const [openFaq, setOpenFaq] = useState(null);

  // Find the service matching the slug
  const service = SERVICES.find(s => s.slug === slug);

  // If slug doesn't match any service — redirect to services listing
  if (!service) return <Navigate to="/services" replace />;

  // Other services for the sidebar (exclude current)
  const otherServices = SERVICES.filter(s => s.slug !== slug).slice(0, 5);

  // Pre-filled WhatsApp message mentioning this specific service
  const serviceWALink = buildWALink(
    `Hello Kelijah Auto, I would like to book an appointment for: ${service.fullTitle}.`
  );

  const toggleFaq = (index) => {
    setOpenFaq(prev => prev === index ? null : index);
  };

  return (
    <main id="main-content">

      {/* ── Hero banner ── */}
      <section
        aria-label={`${service.fullTitle} service header`}
        className="relative bg-[var(--color-black)] pt-[66px] overflow-hidden min-h-[320px] sm:min-h-[360px] flex flex-col justify-end"
      >
        {/* Background image */}
        <LazyImage
          src={service.image}
          alt={service.fullTitle}
          wrapClass="absolute inset-0"
          eager
        />
        {/* Overlay */}
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-r from-[rgba(12,12,12,0.95)] via-[rgba(12,12,12,0.75)] to-[rgba(12,12,12,0.3)]"
        />
        {/* Red left accent */}
        <div
          aria-hidden="true"
          className="absolute left-0 top-0 bottom-0 w-1 bg-[var(--color-red)]"
        />

        <div className="relative z-10 section-container pb-8 pt-10">
          {/* Back link */}
          <Link
            to="/services"
            className="inline-flex items-center gap-2 font-[family-name:var(--font-display)] font-medium text-[11px] tracking-[0.14em] uppercase text-white/40 hover:text-white transition-colors duration-200 mb-6"
          >
            <BackArrow /> All Services
          </Link>

          {/* Service number */}
          <div className="font-[family-name:var(--font-display)] font-medium text-[11px] tracking-[0.22em] uppercase text-[var(--color-red)] mb-3">
            {service.num} / {String(SERVICES.length).padStart(2, '0')}
          </div>

          {/* Title */}
          <h1
            className="font-[family-name:var(--font-display)] font-bold text-white uppercase leading-[0.95] tracking-[0.01em] max-w-[700px]"
            style={{ fontSize: 'clamp(28px, 4.5vw, 52px)' }}
          >
            {service.fullTitle}
          </h1>
        </div>
      </section>

      {/* ── Main content ── */}
      <section className="bg-[var(--color-black)] section-padding">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] xl:grid-cols-[1fr_360px] gap-12 lg:gap-16 items-start">

            {/* ── Left — main content ── */}
            <div>

              {/* Long description */}
              <FadeIn direction="up">
                <div className="mb-12">
                  <Overline>Overview</Overline>
                  <p className="font-[family-name:var(--font-body)] text-[15px] text-white/58 leading-[1.9]">
                    {service.longDesc}
                  </p>
                </div>
              </FadeIn>

              {/* How we deliver — steps */}
              <FadeIn direction="up" delay={100}>
                <div className="mb-12">
                  <Overline>How We Deliver This Service</Overline>
                  <div className="flex flex-col gap-7">
                    {service.steps.map((step) => (
                      <StepCard key={step.num} step={step} />
                    ))}
                  </div>
                </div>
              </FadeIn>

              {/* Book CTA inline — mobile only (sidebar handles desktop) */}
              <FadeIn direction="up" delay={140}>
                <div className="lg:hidden bg-[#111] border border-white/[0.08] rounded-lg p-6 mb-12">
                  <p className="font-[family-name:var(--font-display)] font-bold text-[18px] text-white uppercase tracking-[0.02em] mb-2">
                    Book This Service
                  </p>
                  <p className="font-[family-name:var(--font-body)] text-[13px] text-white/42 leading-relaxed mb-5">
                    Walk in or book via WhatsApp. We'll confirm your slot within minutes.
                  </p>
                  <Button
                    href={serviceWALink}
                    external
                    icon={<WAIcon />}
                    className="w-full justify-center"
                  >
                    Book via WhatsApp
                  </Button>
                  <a
                    href={`tel:${BUSINESS.phone1}`}
                    className="flex items-center justify-center gap-2 mt-3 font-[family-name:var(--font-display)] font-medium text-[13px] tracking-[0.08em] uppercase text-white/40 hover:text-white transition-colors duration-200"
                  >
                    <PhoneIcon /> {BUSINESS.phone1}
                  </a>
                </div>
              </FadeIn>

              {/* FAQ accordion */}
              <FadeIn direction="up" delay={180}>
                <div>
                  <Overline>Frequently Asked Questions</Overline>
                  <div className="bg-[#111] border border-white/[0.08] rounded-lg px-6">
                    {service.faqs.map((faq, index) => (
                      <FaqItem
                        key={index}
                        faq={faq}
                        isOpen={openFaq === index}
                        onToggle={() => toggleFaq(index)}
                      />
                    ))}
                  </div>
                </div>
              </FadeIn>

            </div>

            {/* ── Right — sticky sidebar (desktop only) ── */}
            <aside
              aria-label="Book this service"
              className="hidden lg:flex flex-col gap-5 sticky top-24"
            >
              {/* Book CTA card */}
              <div className="bg-[#111] border border-white/[0.08] rounded-lg p-6">
                <p className="font-[family-name:var(--font-display)] font-bold text-[20px] text-white uppercase tracking-[0.02em] mb-2 leading-tight">
                  Book This Service
                </p>
                <p className="font-[family-name:var(--font-body)] text-[13px] text-white/42 leading-relaxed mb-5">
                  Walk in or book via WhatsApp. We'll confirm your slot within minutes.
                </p>
                <Button
                  href={serviceWALink}
                  external
                  icon={<WAIcon />}
                  className="w-full justify-center"
                >
                  Book via WhatsApp
                </Button>
                {/* Phone */}
                <a
                  href={`tel:${BUSINESS.phone1}`}
                  className="flex items-center justify-center gap-2 mt-3 font-[family-name:var(--font-body)] text-[13px] text-white/35 hover:text-white transition-colors duration-200"
                >
                  <PhoneIcon /> {BUSINESS.phone1}
                </a>
                {/* Divider */}
                <div className="border-t border-white/[0.07] my-5" />
                {/* Hours */}
                <div className="text-center">
                  <p className="font-[family-name:var(--font-display)] font-medium text-[10px] tracking-[0.16em] uppercase text-white/25 mb-1">
                    Working Hours
                  </p>
                  <p className="font-[family-name:var(--font-body)] text-[13px] text-white/45">
                    {BUSINESS.hours}
                  </p>
                  <p className="font-[family-name:var(--font-body)] text-[12px] text-white/28 mt-1">
                    {BUSINESS.hoursSunday}
                  </p>
                </div>
              </div>

              {/* Other services card */}
              <div className="bg-[#111] border border-white/[0.08] rounded-lg p-6">
                <p className="font-[family-name:var(--font-display)] font-medium text-[10px] tracking-[0.18em] uppercase text-white/28 mb-4">
                  Other Services
                </p>
                <ul className="flex flex-col gap-1">
                  {otherServices.map(s => (
                    <li key={s.slug}>
                      <Link
                        to={`/services/${s.slug}`}
                        className="flex items-center justify-between gap-3 py-2.5 border-b border-white/[0.06] last:border-0 group"
                      >
                        <span className="font-[family-name:var(--font-body)] text-[13px] text-white/40 group-hover:text-white transition-colors duration-200 leading-snug">
                          {s.fullTitle}
                        </span>
                        <span className="text-white/20 group-hover:text-[var(--color-red)] transition-colors duration-200 shrink-0">
                          <ArrowRight />
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
                <Link
                  to="/services"
                  className="inline-flex items-center gap-2 mt-4 font-[family-name:var(--font-display)] font-medium text-[11px] tracking-[0.12em] uppercase text-[var(--color-red)] hover:text-[var(--color-red-dark)] transition-colors duration-200"
                >
                  View All Services <ArrowRight />
                </Link>
              </div>
            </aside>

          </div>
        </div>
      </section>

      {/* ── CTA strip ── */}
      <CtaStrip />

    </main>
  );
};

export default ServiceDetail;