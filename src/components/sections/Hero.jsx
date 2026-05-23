/**
 * Hero.jsx
 * src/components/sections/Hero.jsx
 * ─────────────────────────────────────────────────────────────
 * Full-viewport hero section with:
 *  - Full-bleed background image (lazy loaded, eager flag set
 *    since this is above the fold)
 *  - Dark gradient overlay + subtle red diagonal slash accent
 *  - Staggered entrance animations on load
 *  - Headline, subtext, dual CTA buttons
 *  - Stats strip pinned to the bottom
 *  - Fully responsive — mobile first
 * ─────────────────────────────────────────────────────────────
 */

import { Link } from 'react-router-dom';
import Button from '../ui/Button';
import { STATS, WA_LINK, BUSINESS } from '../../data/siteData';

// ── SVG Icons ─────────────────────────────────────────────────
const WAIcon = () => (
  <svg
    width="18" height="18" viewBox="0 0 24 24"
    fill="currentColor" aria-hidden="true"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
  </svg>
);

const ArrowRight = () => (
  <svg
    width="16" height="16" viewBox="0 0 24 24"
    fill="none" stroke="currentColor"
    strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
    aria-hidden="true"
  >
    <line x1="5" y1="12" x2="19" y2="12"/>
    <polyline points="12 5 19 12 12 19"/>
  </svg>
);

// ── Hero image — replace with client photo ────────────────────
const HERO_IMAGE = "https://images.unsplash.com/photo-1568844293986-ca9c5c524285?w=1800&q=85";

// ── Component ─────────────────────────────────────────────────
const Hero = () => {
  return (
    <section
      aria-label="Hero — Kelijah Auto Spares & Garage"
      className="relative min-h-svh flex flex-col overflow-hidden bg-[var(--color-black)]"
    >

      {/* ── Background Image ── */}
      {/*
        eager=true because this is the LCP (Largest Contentful Paint)
        element — we want it to load immediately, not lazily.
      */}
      <img
        src={HERO_IMAGE}
        alt="Kelijah Auto Spares and Garage — professional workshop"
        loading="eager"
        decoding="async"
        fetchPriority="high"
        className="absolute inset-0 w-full h-full object-cover object-center"
      />

      {/* ── Dark gradient overlay ── */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-r from-[rgba(12,12,12,0.95)] via-[rgba(12,12,12,0.75)] to-[rgba(12,12,12,0.25)] lg:from-[rgba(12,12,12,0.93)] lg:via-[rgba(12,12,12,0.65)] lg:to-[rgba(12,12,12,0.15)]"
      />

      {/* ── Bottom red gradient fade ── */}
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[rgba(224,27,27,0.12)] to-transparent"
      />

      {/* ── Red vertical slash accent — desktop only ── */}
      <div
        aria-hidden="true"
        className="hidden lg:block absolute top-0 bottom-0 w-[5px] bg-gradient-to-b from-[var(--color-red)] via-[var(--color-red-dark)] to-transparent"
        style={{ left: '38%', transform: 'skewX(-6deg)', transformOrigin: 'top', opacity: 0.9 }}
      />
      {/* Thin echo line beside the slash */}
      <div
        aria-hidden="true"
        className="hidden lg:block absolute top-0 bottom-0 w-px bg-gradient-to-b from-[rgba(224,27,27,0.3)] to-transparent"
        style={{ left: 'calc(38% + 14px)', transform: 'skewX(-6deg)' }}
      />

      {/* ── Hero Content ── */}
      <div className="relative z-10 flex-1 flex items-end section-container pb-10 pt-28 lg:pt-36 lg:pb-14">
        <div className="w-full max-w-[600px]">

          {/* Eyebrow label */}
          <div
            className="inline-flex items-center gap-3 mb-7"
            style={{ animation: 'heroSlideUp 0.85s cubic-bezier(0.22,0.68,0,1.2) 0.1s both' }}
          >
            <span
              aria-hidden="true"
              className="block w-7 h-[2px] bg-[var(--color-red)] shrink-0"
            />
            <span className="font-[family-name:var(--font-display)] font-medium text-[11px] tracking-[0.24em] uppercase text-[var(--color-red)]">
              {BUSINESS.city} · Est. {BUSINESS.established}
            </span>
          </div>

          {/* Main headline — white line */}
          <h1
            className="font-[family-name:var(--font-display)] font-bold uppercase text-white leading-[0.9] tracking-[0.01em]"
            style={{
              fontSize: 'clamp(58px, 10vw, 120px)',
              animation: 'heroSlideUp 0.85s cubic-bezier(0.22,0.68,0,1.2) 0.22s both',
            }}
          >
            Drive In.
          </h1>

          {/* Main headline — red line */}
          <h1
            className="font-[family-name:var(--font-display)] font-bold uppercase text-[var(--color-red)] leading-[0.9] tracking-[0.01em] mb-8"
            style={{
              fontSize: 'clamp(58px, 10vw, 120px)',
              animation: 'heroSlideUp 0.85s cubic-bezier(0.22,0.68,0,1.2) 0.36s both',
            }}
          >
            Drive Right.
          </h1>

          {/* Subtext */}
          <p
            className="text-white/60 font-light leading-relaxed mb-10 max-w-[460px]"
            style={{
              fontSize: 'clamp(14px, 1.6vw, 16px)',
              animation: 'heroSlideUp 0.85s cubic-bezier(0.22,0.68,0,1.2) 0.46s both',
            }}
          >
            Professional diagnostics, precision repairs, and genuine spare
            parts — for private owners, fleets, and commercial vehicles.{' '}
            <span className="text-white/90 font-medium">
              Walk-ins always welcome.
            </span>
          </p>

          {/* CTA Buttons */}
          <div
            className="flex flex-wrap gap-3"
            style={{ animation: 'heroSlideUp 0.85s cubic-bezier(0.22,0.68,0,1.2) 0.56s both' }}
          >
            <Button
              href={WA_LINK}
              external
              icon={<WAIcon />}
            >
              Book via WhatsApp
            </Button>

            <Button
              href="/services"
              variant="outline-light"
              icon={<ArrowRight />}
            >
              Our Services
            </Button>
          </div>
        </div>
      </div>

      {/* ── Stats Strip ── */}
      <div
        className="relative z-10"
        style={{ animation: 'heroSlideUp 0.85s cubic-bezier(0.22,0.68,0,1.2) 0.65s both' }}
      >
        {/* Red top accent line */}
        <div
          aria-hidden="true"
          className="h-[2px] bg-gradient-to-r from-[var(--color-red)] via-[var(--color-red-dark)] to-transparent"
        />

        <div className="bg-[rgba(12,12,12,0.82)] backdrop-blur-md">
          <div className="section-container">
            <dl className="grid grid-cols-2 lg:grid-cols-4">
              {STATS.map((stat, index) => (
                <div
                  key={stat.label}
                  className={[
                    'py-5 text-center',
                    // Right border except last in each row
                    index < STATS.length - 1
                      ? 'border-r border-white/[0.07]'
                      : '',
                    // Extra top border for second row on mobile
                    index >= 2
                      ? 'border-t border-white/[0.07] lg:border-t-0'
                      : '',
                  ].join(' ')}
                >
                  <dt className="sr-only">{stat.label}</dt>
                  <dd
                    className="font-[family-name:var(--font-display)] font-bold text-[var(--color-red)] leading-none tracking-[0.02em]"
                    style={{ fontSize: 'clamp(28px, 4vw, 38px)' }}
                  >
                    {stat.number}
                  </dd>
                  <p className="font-[family-name:var(--font-body)] font-medium text-[10px] tracking-[0.14em] uppercase text-white/30 mt-[6px]">
                    {stat.label}
                  </p>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>

    </section>
  );
};

export default Hero;