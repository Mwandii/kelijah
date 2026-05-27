/**
 * ServicesGrid.jsx
 * src/components/sections/ServicesGrid.jsx
 * ─────────────────────────────────────────────────────────────
 * Services section with:
 *  - 4-column image card grid on desktop
 *  - 2-column on tablet, 1-column on mobile
 *  - Each card links to its service detail page /services/:slug
 *  - Hover: image zoom + overlay shifts to red tint +
 *    "Learn More" arrow slides in
 *  - Red numbered badge on each card
 *  - Scroll-triggered FadeIn on section header
 *  - Images lazy loaded via LazyImage component
 * ─────────────────────────────────────────────────────────────
 */

import { Link } from 'react-router-dom';
import FadeIn from '../ui/FadeIn';
import LazyImage from '../ui/LazyImage';
import Overline from '../ui/Overline';
import SectionHeading from '../ui/SectionHeading';
import { SERVICES } from '../../data/siteData';

// ── Icons ─────────────────────────────────────────────────────
const ArrowRight = () => (
  <svg
    width="14" height="14" viewBox="0 0 24 24"
    fill="none" stroke="currentColor"
    strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
    aria-hidden="true"
  >
    <line x1="5" y1="12" x2="19" y2="12"/>
    <polyline points="12 5 19 12 12 19"/>
  </svg>
);

// ── Service Card ──────────────────────────────────────────────
const ServiceCard = ({ service }) => {
  return (
    <Link
      to={`/services/${service.slug}`}
      aria-label={`Learn more about ${service.fullTitle}`}
      className="group relative block overflow-hidden bg-[#111] aspect-3/4 focus-visible:outline-2 focus-visible:outline-red"
    >
      {/* Image with zoom on hover */}
      <LazyImage
        src={service.image}
        alt={service.fullTitle}
        wrapClass="absolute inset-0"
        className="transition-transform duration-700 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] group-hover:scale-110"
      />

      {/* Base overlay — darkens image for text legibility */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-linear-to-t from-black/90 via-black/40 to-transparent transition-all duration-400 group-hover:from-[rgba(180,10,10,0.82)] group-hover:via-black/55"
      />

      {/* Card content */}
      <div className="absolute inset-0 p-5 sm:p-6 flex flex-col justify-end z-10">

        {/* Service number badge — top right */}
        <div
          aria-hidden="true"
          className="absolute top-4 right-4 bg-red px-2.5 py-1 rounded-sm"
        >
          <span className="font-display font-bold text-[10px] tracking-[0.14em] text-white">
            {service.num}
          </span>
        </div>

        {/* Title */}
        <h3 className="font-display font-bold text-white uppercase leading-tight tracking-[0.02em] mb-2 whitespace-pre-line"
          style={{ fontSize: 'clamp(15px, 1.4vw, 18px)' }}
        >
          {service.title}
        </h3>

        {/* Description */}
        <p className="font-body text-[12px] text-white/62 leading-relaxed mb-3">
          {service.desc}
        </p>

        {/* Learn More — slides up on hover */}
        <div
          aria-hidden="true"
          className="flex items-center gap-2 font-display font-medium text-[11px] tracking-[0.12em] uppercase text-red translate-y-2 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100"
        >
          Learn More <ArrowRight />
        </div>

      </div>

      {/* Red top accent line — slides in on hover */}
      <div
        aria-hidden="true"
        className="absolute top-0 left-0 right-0 h-0.75 bg-red scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"
      />

    </Link>
  );
};

// ── Main Component ────────────────────────────────────────────
const ServicesGrid = () => {
  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="bg-white pt-(--spacing-section)"
    >
      {/* ── Section header ── */}
      <div className="section-container mb-12">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">

          <div>
            <FadeIn direction="up">
              <Overline>Expert Solutions</Overline>
            </FadeIn>
            <FadeIn direction="up" delay={100}>
              <SectionHeading
                id="services-heading"
                light={false}
              >
                Professional
                <br />
                Services
              </SectionHeading>
            </FadeIn>
          </div>

          <FadeIn direction="up" delay={180}>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 font-display font-medium text-[12px] tracking-[0.14em] uppercase text-red border border-red px-5 py-3 rounded-sm hover:bg-red hover:text-white transition-colors duration-200 whitespace-nowrap self-start sm:self-auto"
            >
              View All Services <ArrowRight />
            </Link>
          </FadeIn>

        </div>
      </div>

      {/* ── Cards grid — flush to edges, no container padding ── */}
      <div
        role="list"
        aria-label="Our services"
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0"
      >
        {SERVICES.map((service, index) => (
          <div role="listitem" key={service.slug}>
            <FadeIn direction="up" delay={index * 60} threshold={0.08}>
              <ServiceCard service={service} />
            </FadeIn>
          </div>
        ))}
      </div>

    </section>
  );
};

export default ServicesGrid;