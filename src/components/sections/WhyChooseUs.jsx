/**
 * WhyChooseUs.jsx
 * src/components/sections/WhyChooseUs.jsx
 * ─────────────────────────────────────────────────────────────
 * Why Choose Us section with:
 *  - Sticky left column — heading + direct support card
 *  - Right column — 2x3 grid of reason cards
 *  - Cards lift and border turns red on hover
 *  - Direct support card has phone link + WhatsApp CTA
 *  - Scroll-triggered FadeIn animations
 *  - Fully responsive — stacks on mobile
 * ─────────────────────────────────────────────────────────────
 */

import FadeIn from '../ui/FadeIn';
import Overline from '../ui/Overline';
import SectionHeading from '../ui/SectionHeading';
import Button from '../ui/Button';
import { WHY_US, WA_LINK, BUSINESS } from '../../data/siteData';

// ── Icons ─────────────────────────────────────────────────────
const CheckIcon = () => (
  <svg
    width="17" height="17" viewBox="0 0 24 24"
    fill="none" stroke="currentColor"
    strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
    aria-hidden="true"
  >
    <polyline points="20 6 9 17 4 12"/>
  </svg>
);

const PhoneIcon = () => (
  <svg
    width="16" height="16" viewBox="0 0 24 24"
    fill="none" stroke="currentColor"
    strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.41 2 2 0 0 1 3.6 1.22h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.8a16 16 0 0 0 6.29 6.29l.96-.96a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
  </svg>
);

const WAIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
  </svg>
);

// ── Reason Card ───────────────────────────────────────────────
const ReasonCard = ({ item }) => (
  <article className="group bg-black-2 border border-white/[0.07] rounded-lg p-5 sm:p-6 hover:border-[var(--color-red)] hover:-translate-y-1 transition-all duration-250">
    {/* Icon */}
    <div className="w-9 h-9 bg-red-muted rounded-md flex items-center justify-center mb-4 text-[var(--color-red)] transition-colors duration-250 group-hover:bg-[rgba(224,27,27,0.2)]">
      <CheckIcon />
    </div>

    {/* Label */}
    <h3 className="font-[family-name:var(--font-display)] font-600 text-[14px] text-white uppercase tracking-[0.06em] mb-2 leading-snug">
      {item.label}
    </h3>

    {/* Description */}
    <p className="font-[family-name:var(--font-body)] text-[13px] text-white/38 leading-[1.76]">
      {item.desc}
    </p>
  </article>
);

// ── Main Component ────────────────────────────────────────────
const WhyChooseUs = () => {
  return (
    <section
      aria-labelledby="why-heading"
      className="bg-[var(--color-black)] section-padding"
    >
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-start">

          {/* ── Left — sticky on desktop ── */}
          <div className="lg:sticky lg:top-24">

            <FadeIn direction="up">
              <Overline>Why Choose Us</Overline>
            </FadeIn>

            <FadeIn direction="up" delay={100}>
              <SectionHeading
                id="why-heading"
                light
                className="mb-6"
              >
                Premium Workshop
                <br />
                Standards,
                <br />
                <span className="text-[var(--color-red)]">Every Time.</span>
              </SectionHeading>
            </FadeIn>

            <FadeIn direction="up" delay={180}>
              <p className="font-[family-name:var(--font-body)] text-[15px] text-white/44 leading-[1.85] mb-10">
                We don't just fix cars — we build trust. Every vehicle comes
                with a transparent report, honest communication, and work
                that stands behind itself.
              </p>
            </FadeIn>

            {/* ── Direct Support Card ── */}
            <FadeIn direction="up" delay={240}>
              <div className="bg-black-3 border border-white/8 rounded-lg p-6 sm:p-7">

                <p className="font-[family-name:var(--font-display)] font-medium text-[10px] tracking-[0.2em] uppercase text-white/28 mb-2">
                  Direct Support
                </p>

                <h3 className="font-[family-name:var(--font-display)] font-bold text-[22px] text-white uppercase tracking-[0.02em] mb-3">
                  Need Help Right Now?
                </h3>

                <p className="font-[family-name:var(--font-body)] text-[13px] text-white/44 leading-[1.76] mb-6">
                  Reach our advisors directly for immediate diagnostics,
                  appointment scheduling, or parts support.
                </p>

                {/* Phone link */}
                <a
                  href={`tel:${BUSINESS.phone1}`}
                  className="flex items-center gap-3 bg-[rgba(224,27,27,0.1)] border border-[rgba(224,27,27,0.22)] rounded-md px-4 py-3.25 text-white hover:bg-[rgba(224,27,27,0.18)] transition-colors duration-200 mb-3"
                >
                  <PhoneIcon />
                  <span className="font-[family-name:var(--font-display)] font-medium text-[15px] tracking-[0.04em]">
                    {BUSINESS.phone1}
                  </span>
                </a>

                {/* WhatsApp CTA */}
                <Button
                  href={WA_LINK}
                  external
                  icon={<WAIcon />}
                  className="w-full justify-center"
                >
                  WhatsApp Us
                </Button>

              </div>
            </FadeIn>
          </div>

          {/* ── Right — reasons grid ── */}
          <div
            role="list"
            aria-label="Reasons to choose Kelijah Auto"
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {WHY_US.map((item, index) => (
              <div role="listitem" key={item.label}>
                <FadeIn
                  direction="up"
                  delay={index * 80}
                  threshold={0.08}
                >
                  <ReasonCard item={item} />
                </FadeIn>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;