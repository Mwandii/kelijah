/**
 * HowItWorks.jsx
 * src/components/sections/HowItWorks.jsx
 * ─────────────────────────────────────────────────────────────
 * 4-step process section showing how the service works:
 *  - Light gray background for contrast between dark sections
 *  - Horizontal step layout on desktop with connecting line
 *  - Vertical stacked layout on mobile
 *  - Red numbered circles with gradient connector line
 *  - CTA button at the bottom
 *  - Scroll-triggered FadeIn on each step
 * ─────────────────────────────────────────────────────────────
 */

import FadeIn from '../ui/FadeIn';
import Overline from '../ui/Overline';
import SectionHeading from '../ui/SectionHeading';
import Button from '../ui/Button';
import { HOW_IT_WORKS, WA_LINK } from '../../data/siteData';

// ── Icons ─────────────────────────────────────────────────────
const WAIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
  </svg>
);

// ── Step Card ─────────────────────────────────────────────────
const StepCard = ({ step, isLast }) => (
  <div className="flex flex-col items-center text-center px-4 relative">

    {/* Mobile connector line — vertical, left-aligned */}
    {!isLast && (
      <div
        aria-hidden="true"
        className="lg:hidden absolute top-[60px] left-1/2 -translate-x-1/2 w-px h-14 bg-gradient-to-b from-[var(--color-red)] to-transparent"
      />
    )}

    {/* Number circle */}
    <div className="relative z-10 w-[60px] h-[60px] rounded-full border-2 border-[var(--color-red)] bg-[var(--color-gray-light)] flex items-center justify-center mb-6 shadow-[0_0_0_8px_var(--color-gray-light)]">
      <span className="font-[family-name:var(--font-display)] font-bold text-[20px] text-[var(--color-red)] leading-none">
        {step.num}
      </span>
    </div>

    {/* Step title */}
    <h3 className="font-[family-name:var(--font-display)] font-600 text-[13px] text-[var(--color-black)] uppercase tracking-[0.08em] mb-3 leading-snug">
      {step.title}
    </h3>

    {/* Step description */}
    <p className="font-[family-name:var(--font-body)] text-[13px] text-[#888] leading-[1.78]">
      {step.desc}
    </p>

  </div>
);

// ── Main Component ────────────────────────────────────────────
const HowItWorks = () => {
  return (
    <section
      aria-labelledby="how-heading"
      className="bg-[var(--color-gray-light)] section-padding"
    >
      <div className="section-container">

        {/* ── Section header — centered ── */}
        <div className="text-center mb-16 sm:mb-20">

          <FadeIn direction="up">
            {/* Overline with flanking dashes */}
            <div className="inline-flex items-center gap-3 mb-4">
              <span
                aria-hidden="true"
                className="block w-6 h-[2px] bg-[var(--color-red)]"
              />
              <span className="font-[family-name:var(--font-display)] font-medium text-[11px] tracking-[0.24em] uppercase text-[var(--color-red)]">
                The Process
              </span>
              <span
                aria-hidden="true"
                className="block w-6 h-[2px] bg-[var(--color-red)]"
              />
            </div>
          </FadeIn>

          <FadeIn direction="up" delay={100}>
            <SectionHeading
              id="how-heading"
              light={false}
            >
              From Booking to{' '}
              <span className="text-[var(--color-red)]">
                Back on the Road
              </span>
            </SectionHeading>
          </FadeIn>

        </div>

        {/* ── Steps ── */}
        <div className="relative">

          {/* Desktop connector line — sits behind the circles */}
          <div
            aria-hidden="true"
            className="hidden lg:block absolute top-[30px] left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-[var(--color-red)] via-[var(--color-red-dark)] to-[rgba(224,27,27,0.15)]"
          />

          <ol
            aria-label="How our service works"
            className="grid grid-cols-1 lg:grid-cols-4 gap-12 lg:gap-6"
          >
            {HOW_IT_WORKS.map((step, index) => (
              <li key={step.num}>
                <FadeIn
                  direction="up"
                  delay={index * 100}
                  threshold={0.1}
                >
                  <StepCard
                    step={step}
                    isLast={index === HOW_IT_WORKS.length - 1}
                  />
                </FadeIn>
              </li>
            ))}
          </ol>

        </div>

        {/* ── Bottom CTA ── */}
        <FadeIn direction="up" delay={200} threshold={0.1}>
          <div className="text-center mt-16">
            <Button
              href={WA_LINK}
              external
              icon={<WAIcon />}
            >
              Book Your Appointment Now
            </Button>
          </div>
        </FadeIn>

      </div>
    </section>
  );
};

export default HowItWorks;