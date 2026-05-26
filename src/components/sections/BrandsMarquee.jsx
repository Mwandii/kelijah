/**
 * BrandsMarquee.jsx
 * src/components/sections/BrandsMarquee.jsx
 * ─────────────────────────────────────────────────────────────
 * Infinite scrolling brands strip.
 * Scrolls in reverse direction to the TrustMarquee for
 * visual variety. Dark background to sit between About
 * (black) and Services (white).
 * Features:
 *  - Reverse direction marquee animation
 *  - Pauses on hover
 *  - Accessible — decorative content marked aria-hidden
 * ─────────────────────────────────────────────────────────────
 */

import { BRANDS } from '../../data/siteData';

// ── Dot separator ─────────────────────────────────────────────
const Dot = () => (
  <span
    aria-hidden="true"
    className="inline-block w-0.75 h-0.75 rounded-full bg-[rgba(224,27,27,0.5)] shrink-0"
  />
);

// ── Component ─────────────────────────────────────────────────
const BrandsMarquee = () => {
  // Duplicate for seamless loop
  const items = [...BRANDS, ...BRANDS];

  return (
    <section
      aria-label="Vehicle brands we service"
      className="bg-black-2 border-t border-b border-white/5 py-7 overflow-hidden"
    >
      {/* Label */}
      <p className="font-[family-name:var(--font-display)] font-medium text-[10px] tracking-[0.26em] uppercase text-white/18 text-center mb-4">
        Brands We Service
      </p>

      {/* Marquee — reverse direction */}
      <div className="group flex">
        <div
          aria-hidden="true"
          className="flex w-max group-hover:[animation-play-state:paused]"
          style={{ animation: 'marquee-reverse 36s linear infinite' }}
        >
          {items.map((brand, index) => (
            <div
              key={index}
              className="inline-flex items-center gap-5 px-6"
            >
              <span className="font-[family-name:var(--font-display)] font-600 text-[13px] tracking-[0.12em] uppercase text-white/22 whitespace-nowrap">
                {brand}
              </span>
              <Dot />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandsMarquee;