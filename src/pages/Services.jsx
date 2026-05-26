/**
 * Services.jsx
 * src/pages/Services.jsx
 * ─────────────────────────────────────────────────────────────
 * Full services catalog page with:
 *  - Hero banner with page title
 *  - All 8 service cards in a responsive grid
 *  - Each card links to its detail page /services/:slug
 *  - Image hover zoom + red overlay effect
 *  - CTA strip at the bottom
 *  - Scroll-triggered FadeIn animations
 * ─────────────────────────────────────────────────────────────
 */

import { Link } from 'react-router-dom';
import FadeIn        from '../components/ui/FadeIn';
import LazyImage     from '../components/ui/LazyImage';
import Overline      from '../components/ui/Overline';
import SectionHeading from '../components/ui/SectionHeading';
import Button        from '../components/ui/Button';
import { SERVICES, WA_LINK, BUSINESS } from '../data/siteData';

// ── Icons ─────────────────────────────────────────────────────
const ArrowRight = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="2.5"
    strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <line x1="5" y1="12" x2="19" y2="12"/>
    <polyline points="12 5 19 12 12 19"/>
  </svg>
);

const WAIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
  </svg>
);

// ── Service Card ──────────────────────────────────────────────
const ServiceCard = ({ service, index }) => (
  <FadeIn direction="up" delay={index * 80} threshold={0.08}>
    <Link
      to={`/services/${service.slug}`}
      aria-label={`Learn more about ${service.fullTitle}`}
      className="group relative flex flex-col bg-[#111] rounded-lg overflow-hidden border border-white/[0.07] hover:border-[var(--color-red)] transition-colors duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--color-red)]"
    >
      {/* Image */}
      <div className="relative overflow-hidden aspect-video">
        <LazyImage
          src={service.image}
          alt={service.fullTitle}
          wrapClass="absolute inset-0"
          className="transition-transform duration-700 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] group-hover:scale-110"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent transition-all duration-400 group-hover:from-[rgba(180,10,10,0.7)] group-hover:via-black/30" />

        {/* Number badge */}
        <div className="absolute top-3 right-3 bg-[var(--color-red)] px-2.5 py-1 rounded-sm">
          <span className="font-[family-name:var(--font-display)] font-bold text-[10px] tracking-[0.14em] text-white">
            {service.num}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-5 sm:p-6">
        <h2 className="font-[family-name:var(--font-display)] font-bold text-white uppercase tracking-[0.03em] leading-tight mb-3"
          style={{ fontSize: 'clamp(15px, 1.5vw, 18px)' }}>
          {service.fullTitle}
        </h2>
        <p className="font-[family-name:var(--font-body)] text-[13px] text-white/50 leading-relaxed flex-1 mb-5">
          {service.desc}
        </p>

        {/* Learn more row */}
        <div className="flex items-center justify-between pt-4 border-t border-white/[0.07]">
          <span className="font-[family-name:var(--font-display)] font-medium text-[11px] tracking-[0.12em] uppercase text-[var(--color-red)] flex items-center gap-2 group-hover:gap-3 transition-all duration-200">
            Learn More <ArrowRight />
          </span>
          {/* Red accent line grows on hover */}
          <div className="h-px w-0 group-hover:w-12 bg-[var(--color-red)] transition-all duration-300" />
        </div>
      </div>
    </Link>
  </FadeIn>
);

// ── Main Component ────────────────────────────────────────────
const Services = () => {
  return (
    <main id="main-content">

      {/* ── Page Hero Banner ── */}
      <section
        aria-label="Services page header"
        className="relative bg-[var(--color-black)] pt-36 pb-20 overflow-hidden"
      >
        {/* Background texture */}
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none opacity-[0.03]"
          style={{
            backgroundImage:
              'repeating-linear-gradient(-55deg, transparent, transparent 40px, white 40px, white 41px)',
          }}
        />
        {/* Red left accent */}
        <div
          aria-hidden="true"
          className="absolute left-0 top-0 bottom-0 w-1 bg-linear-to-b from-[var(--color-red)] to-transparent"
        />

        <div className="section-container relative z-10">
          <FadeIn direction="up">
            <Overline>What We Do</Overline>
          </FadeIn>
          <FadeIn direction="up" delay={100}>
            <SectionHeading light className="mb-4">
              Our Services
            </SectionHeading>
          </FadeIn>
          <FadeIn direction="up" delay={180}>
            <p className="font-[family-name:var(--font-body)] text-[15px] text-white/50 leading-relaxed max-w-130">
              From routine oil changes to full engine overhauls — every
              aspect of your vehicle's health covered by certified
              technicians using genuine parts.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ── Services Grid ── */}
      <section
        aria-label="All services"
        className="bg-[var(--color-black)] pb-[var(--spacing-section)]"
      >
        <div className="section-container">
          <div
            role="list"
            aria-label="Service catalog"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5"
          >
            {SERVICES.map((service, index) => (
              <div role="listitem" key={service.slug}>
                <ServiceCard service={service} index={index} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Bottom CTA ── */}
      <section
        aria-label="Book a service"
        className="relative bg-[var(--color-red)] py-20 overflow-hidden"
      >
        {/* Diagonal texture */}
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              'repeating-linear-gradient(-52deg, transparent, transparent 36px, rgba(0,0,0,0.055) 36px, rgba(0,0,0,0.055) 72px)',
          }}
        />
        <div className="section-container relative z-10">
          <FadeIn direction="up">
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
              <div>
                <h2 className="font-[family-name:var(--font-display)] font-bold text-white uppercase leading-tight tracking-[0.02em] mb-3"
                  style={{ fontSize: 'clamp(28px, 4vw, 48px)' }}>
                  Not Sure Which Service You Need?
                </h2>
                <p className="font-[family-name:var(--font-body)] text-[15px] text-white/80 max-w-105 leading-relaxed">
                  Message us on WhatsApp, describe the issue, and our
                  technicians will advise you — no charge.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 shrink-0">
                <Button href={WA_LINK} external variant="white" icon={<WAIcon />}>
                  WhatsApp Us
                </Button>
                <Button href="/book-appointment" variant="outline-light" icon={<ArrowRight />}>
                  Book Appointment
                </Button>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

    </main>
  );
};

export default Services;