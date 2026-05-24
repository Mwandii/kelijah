/**
 * About.jsx
 * src/components/sections/About.jsx
 * ─────────────────────────────────────────────────────────────
 * Who We Are section with:
 *  - Layered image composition (main photo + red badge +
 *    offset border + floating stat card)
 *  - Brand copy and core value chips
 *  - Scroll-triggered FadeIn animations
 *  - Fully responsive — stacks on mobile, side-by-side on desktop
 * ─────────────────────────────────────────────────────────────
 */

import FadeIn from '../ui/FadeIn';
import LazyImage from '../ui/LazyImage';
import Overline from '../ui/Overline';
import SectionHeading from '../ui/SectionHeading';
import Button from '../ui/Button';
import { CORE_VALUES, WA_LINK, BUSINESS } from '../../data/siteData';

// ── Icons ─────────────────────────────────────────────────────
const WAIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
  </svg>
);

const CheckIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor"
    strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <polyline points="20 6 9 17 4 12"/>
  </svg>
);

// ── About image — replace with client photo ───────────────────
const ABOUT_IMAGE = "https://images.unsplash.com/photo-1625047509248-ec889cbff17f?w=1000&auto=format&fit=crop&q=85";

// ── Component ─────────────────────────────────────────────────
const About = () => {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="bg-[var(--color-black)] section-padding"
    >
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">

          {/* ── Left — Image composition ── */}
          <FadeIn direction="right" threshold={0.1}>
            <div className="relative">

              {/* Offset red border behind image */}
              <div
                aria-hidden="true"
                className="absolute -top-4 -left-4 right-4 -bottom-4 border border-[rgba(224,27,27,0.2)] rounded-lg pointer-events-none"
              />

              {/* Main image */}
              <LazyImage
                src={ABOUT_IMAGE}
                alt="Kelijah Auto Spares and Garage — professional mechanics at work in our Nairobi workshop"
                wrapClass="rounded-lg aspect-[4/3] relative z-10"
              />

              {/* Est. badge — bottom right overlap */}
              <div
                aria-hidden="true"
                className="absolute -bottom-5 -right-5 z-20 bg-[var(--color-red)] rounded-md px-5 py-4 text-center"
              >
                <p className="font-[family-name:var(--font-display)] font-bold text-white text-[34px] leading-none">
                  EST.
                </p>
                <p className="font-[family-name:var(--font-display)] font-bold text-white text-[34px] leading-none">
                  {BUSINESS.established}
                </p>
              </div>

              {/* Floating stat card — top left overlap */}
              <div className="absolute -top-5 -left-5 z-20 bg-[#161616] border border-white/10 rounded-lg px-5 py-4">
                <p className="font-[family-name:var(--font-display)] font-bold text-[var(--color-red)] text-[26px] leading-none">
                  100%
                </p>
                <p className="font-[family-name:var(--font-body)] text-[10px] text-white/40 tracking-[0.12em] uppercase mt-1">
                  Honest Quotes
                </p>
              </div>

            </div>
          </FadeIn>

          {/* ── Right — Text content ── */}
          <div className="lg:pl-4">
            <FadeIn direction="up" delay={100}>
              <Overline>Who We Are</Overline>
            </FadeIn>

            <FadeIn direction="up" delay={180}>
              <SectionHeading
                id="about-heading"
                light
                className="mb-6"
              >
                Built on Trust,{' '}
                <br />
                <span className="text-[var(--color-red)]">
                  Driven by Precision.
                </span>
              </SectionHeading>
            </FadeIn>

            <FadeIn direction="up" delay={240}>
              <p className="text-white/52 text-[15px] leading-[1.88] mb-4">
                Kelijah Auto Spares & Garage is a professional auto service
                centre in Nairobi delivering honest diagnostics, quality
                workmanship, and genuine parts support to private vehicle
                owners, fleet operators, and commercial clients.
              </p>
              <p className="text-white/52 text-[15px] leading-[1.88] mb-9">
                No inflated quotes, no guesswork, no shortcuts. We tell you
                what's wrong, quote fairly, and get it done right.{' '}
                <span className="text-white/80 font-medium">
                  Walk-ins are always welcome.
                </span>
              </p>
            </FadeIn>

            {/* Core value chips */}
            <FadeIn direction="up" delay={300}>
              <ul
                aria-label="Our core values"
                className="flex flex-wrap gap-2 mb-10"
              >
                {CORE_VALUES.map((value) => (
                  <li
                    key={value}
                    className="inline-flex items-center gap-2 bg-[rgba(224,27,27,0.08)] border border-[rgba(224,27,27,0.22)] rounded-sm px-3 py-[7px] text-[var(--color-red)] text-[11px] font-[family-name:var(--font-display)] font-medium tracking-[0.1em] uppercase"
                  >
                    <CheckIcon />
                    {value}
                  </li>
                ))}
              </ul>
            </FadeIn>

            <FadeIn direction="up" delay={360}>
              <Button
                href={WA_LINK}
                external
                icon={<WAIcon />}
              >
                Book an Appointment
              </Button>
            </FadeIn>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;