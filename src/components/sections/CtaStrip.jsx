/**
 * CtaStrip.jsx
 * src/components/sections/CtaStrip.jsx
 * ─────────────────────────────────────────────────────────────
 * Full-width red call-to-action strip with:
 *  - Diagonal texture overlay for depth
 *  - Large ghosted "BOOK NOW" text in background
 *  - Heading + subtext on the left
 *  - WhatsApp + Book Online buttons on the right
 *  - Fully responsive — stacks on mobile
 *  - Scroll-triggered FadeIn animations
 * ─────────────────────────────────────────────────────────────
 */

import FadeIn from '../ui/FadeIn';
import Button from '../ui/Button';
import { WA_LINK } from '../../data/siteData';

// ── Icons ─────────────────────────────────────────────────────
const WAIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
  </svg>
);

const ArrowRight = () => (
  <svg
    width="15" height="15" viewBox="0 0 24 24"
    fill="none" stroke="currentColor"
    strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
    aria-hidden="true"
  >
    <line x1="5" y1="12" x2="19" y2="12"/>
    <polyline points="12 5 19 12 12 19"/>
  </svg>
);

// ── Component ─────────────────────────────────────────────────
const CtaStrip = () => {
  return (
    <section
      aria-labelledby="cta-heading"
      className="relative bg-red py-20 sm:py-24 overflow-hidden"
    >

      {/* ── Diagonal texture overlay ── */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            'repeating-linear-gradient(-52deg, transparent, transparent 36px, rgba(0,0,0,0.055) 36px, rgba(0,0,0,0.055) 72px)',
        }}
      />

      {/* ── Large ghosted background text ── */}
      <div
        aria-hidden="true"
        className="absolute right-0 top-1/2 -translate-y-1/2 font-display font-bold text-[rgba(0,0,0,0.07)] uppercase whitespace-nowrap leading-none select-none pointer-events-none"
        style={{ fontSize: 'clamp(80px, 14vw, 180px)' }}
      >
        BOOK NOW
      </div>

      {/* ── Content ── */}
      <div className="section-container relative z-10">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10">

          {/* Left — text */}
          <div className="max-w-125">
            <FadeIn direction="up">
              <h2
                id="cta-heading"
                className="font-display font-bold text-white uppercase leading-none tracking-[0.02em] mb-4"
                style={{ fontSize: 'clamp(32px, 5vw, 56px)' }}
              >
                Ready to Book
                <br />
                Your Service?
              </h2>
            </FadeIn>

            <FadeIn direction="up" delay={100}>
              <p className="font-body text-[16px] text-white/80 leading-[1.72] max-w-105">
                Same-day slots available. Walk-ins always welcome.
                WhatsApp us now and we'll confirm within minutes.
              </p>
            </FadeIn>
          </div>

          {/* Right — buttons */}
          <FadeIn direction="up" delay={180}>
            <div className="flex flex-col sm:flex-row gap-3 shrink-0">

              {/* WhatsApp — white fill */}
              <Button
                href={WA_LINK}
                external
                variant="white"
                icon={<WAIcon />}
              >
                WhatsApp Us
              </Button>

              {/* Book Online — ghost outline */}
              <Button
                href="/book-appointment"
                variant="outline-light"
                icon={<ArrowRight />}
              >
                Book Online
              </Button>

            </div>
          </FadeIn>

        </div>
      </div>
    </section>
  );
};

export default CtaStrip;