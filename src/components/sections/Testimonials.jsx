/**
 * Testimonials.jsx
 * src/components/sections/Testimonials.jsx
 * ─────────────────────────────────────────────────────────────
 * Client reviews section with:
 *  - 2-column card grid on desktop, 1 column on mobile
 *  - Star rating display on each card
 *  - Avatar initials with red tint background
 *  - Aggregate rating display in section header
 *  - Cards lift on hover with red border accent
 *  - Scroll-triggered staggered FadeIn animations
 * ─────────────────────────────────────────────────────────────
 */

import FadeIn from '../ui/FadeIn';
import Overline from '../ui/Overline';
import SectionHeading from '../ui/SectionHeading';
import { TESTIMONIALS } from '../../data/siteData';

// ── Star icon ─────────────────────────────────────────────────
const StarIcon = ({ filled = true }) => (
  <svg
    width="14" height="14" viewBox="0 0 24 24"
    fill={filled ? 'var(--color-red)' : 'none'}
    stroke="var(--color-red)"
    strokeWidth="1.5"
    aria-hidden="true"
  >
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
  </svg>
);

// ── Five stars row ────────────────────────────────────────────
const FiveStars = ({ size = 14 }) => (
  <div className="flex items-center gap-[3px]" aria-label="5 out of 5 stars">
    {[...Array(5)].map((_, i) => (
      <StarIcon key={i} filled />
    ))}
  </div>
);

// ── Testimonial Card ──────────────────────────────────────────
const TestimonialCard = ({ testimonial }) => (
  <article className="group bg-[#111111] border border-white/[0.07] rounded-lg p-7 sm:p-8 flex flex-col gap-5 hover:border-[rgba(224,27,27,0.4)] hover:-translate-y-[3px] transition-all duration-250">

    {/* Stars */}
    <FiveStars />

    {/* Quote text */}
    <blockquote className="flex-1">
      <p className="font-[family-name:var(--font-body)] text-[15px] text-white/74 leading-[1.86] italic">
        "{testimonial.text}"
      </p>
    </blockquote>

    {/* Author */}
    <footer className="flex items-center gap-3 pt-5 border-t border-white/[0.07]">
      {/* Avatar */}
      <div
        aria-hidden="true"
        className="w-11 h-11 rounded-full bg-[rgba(224,27,27,0.14)] flex items-center justify-center shrink-0"
      >
        <span className="font-[family-name:var(--font-display)] font-bold text-[14px] text-[var(--color-red)]">
          {testimonial.initials}
        </span>
      </div>

      <div>
        <p className="font-[family-name:var(--font-display)] font-600 text-[15px] text-white tracking-[0.04em]">
          {testimonial.name}
        </p>
        <p className="font-[family-name:var(--font-body)] text-[11px] text-white/28 tracking-[0.08em] uppercase mt-[3px]">
          {testimonial.tag}
        </p>
      </div>
    </footer>

  </article>
);

// ── Main Component ────────────────────────────────────────────
const Testimonials = () => {
  return (
    <section
      aria-labelledby="testimonials-heading"
      className="bg-[var(--color-black)] section-padding"
    >
      <div className="section-container">

        {/* ── Section header ── */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">

          <div>
            <FadeIn direction="up">
              <Overline>Client Reviews</Overline>
            </FadeIn>
            <FadeIn direction="up" delay={100}>
              <SectionHeading
                id="testimonials-heading"
                light
              >
                Trusted by
                <br />
                Nairobi Drivers
              </SectionHeading>
            </FadeIn>
          </div>

          {/* Aggregate rating */}
          <FadeIn direction="up" delay={180}>
            <div className="flex flex-col items-start sm:items-end gap-2 shrink-0">
              <div className="flex items-center gap-[4px]">
                {[...Array(5)].map((_, i) => (
                  <StarIcon key={i} filled />
                ))}
              </div>
              <p className="font-[family-name:var(--font-display)] font-bold text-[18px] text-white tracking-[0.04em]">
                4.9{' '}
                <span className="font-normal text-[16px]">/ 5.0</span>
              </p>
              <p className="font-[family-name:var(--font-body)] text-[11px] text-white/30 tracking-[0.1em] uppercase">
                Verified Customer Reviews
              </p>
            </div>
          </FadeIn>

        </div>

        {/* ── Cards grid ── */}
        <div
          role="list"
          aria-label="Customer testimonials"
          className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5"
        >
          {TESTIMONIALS.map((testimonial, index) => (
            <div role="listitem" key={testimonial.name}>
              <FadeIn
                direction="up"
                delay={index * 100}
                threshold={0.08}
              >
                <TestimonialCard testimonial={testimonial} />
              </FadeIn>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Testimonials;