/**
 * TrustMarquee.jsx
 * src/components/sections/TrustMarquee.jsx
 * ─────────────────────────────────────────────────────────────
 * Infinite scrolling marquee strip on a red background.
 * Displays trust signals that reinforce credibility.
 * Features:
 *  - CSS-only infinite scroll (no JS scroll logic)
 *  - Pauses on hover for readability
 *  - Accessible — marquee wrapped in aria-hidden since it's
 *    decorative/supplementary content
 *  - Items duplicated in data to create seamless loop
 * ─────────────────────────────────────────────────────────────
 */

import { TRUST_ITEMS } from '../../data/siteData';

// ── Dot separator between items ───────────────────────────────
const Dot = () => (
  <span
    aria-hidden="true"
    className="inline-block w-1.25 h-1.25 rounded-full bg-white/40 shrink-0"
  />
);

// ── Single marquee track ──────────────────────────────────────
// Items are duplicated to create a seamless infinite loop.
// The animation moves exactly -50% (one full set width),
// then loops — making the duplicate invisible seam seamless.
const MarqueeTrack = () => {
  // Duplicate items to fill the loop seamlessly
  const items = [...TRUST_ITEMS, ...TRUST_ITEMS];

  return (
    <div
      aria-hidden="true"
      className="flex w-max"
      style={{ animation: 'marquee-forward 30s linear infinite' }}
    >
      {items.map((item, index) => (
        <span
          key={index}
          className="inline-flex items-center gap-4 px-7"
        >
          <span className="font-display font-medium text-[11px] tracking-[0.2em] uppercase text-white whitespace-nowrap">
            {item}
          </span>
          <Dot />
        </span>
      ))}
    </div>
  );
};

// ── Main Component ────────────────────────────────────────────
const TrustMarquee = () => {
  return (
    <section
      aria-label="Trust signals"
      className="bg-red overflow-hidden py-3.25"
    >
      {/*
        Pause animation on hover — group/hover on wrapper,
        [animation-play-state:paused] on the track.
        This lets users read items without them scrolling away.
      */}
      <div className="group flex">
        <div className="flex w-max group-hover:[animation-play-state:paused]"
          style={{ animation: 'marquee-forward 30s linear infinite' }}
        >
          {[...TRUST_ITEMS, ...TRUST_ITEMS].map((item, index) => (
            <span
              key={index}
              aria-hidden="true"
              className="inline-flex items-center gap-4 px-7"
            >
              <span className="font-display font-medium text-[11px] tracking-[0.2em] uppercase text-white whitespace-nowrap">
                {item}
              </span>
              <Dot />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustMarquee;