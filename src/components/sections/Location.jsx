/**
 * Location.jsx
 * src/components/sections/Location.jsx
 * ─────────────────────────────────────────────────────────────
 * Location section with:
 *  - Address, hours, and phone details on the left
 *  - Google Maps iframe embed on the right
 *  - Map styled with dark filter to match site theme
 *  - Scroll-triggered FadeIn animations
 *  - Fully responsive — stacks on mobile
 * ─────────────────────────────────────────────────────────────
 */

import FadeIn from '../ui/FadeIn';
import Overline from '../ui/Overline';
import SectionHeading from '../ui/SectionHeading';
import Button from '../ui/Button';
import { BUSINESS, WA_LINK } from '../../data/siteData';

// ── Icons ─────────────────────────────────────────────────────
const MapPinIcon = () => (
  <svg
    width="17" height="17" viewBox="0 0 24 24"
    fill="none" stroke="currentColor"
    strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
    <circle cx="12" cy="10" r="3"/>
  </svg>
);

const ClockIcon = () => (
  <svg
    width="17" height="17" viewBox="0 0 24 24"
    fill="none" stroke="currentColor"
    strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="10"/>
    <polyline points="12 6 12 12 16 14"/>
  </svg>
);

const PhoneIcon = () => (
  <svg
    width="17" height="17" viewBox="0 0 24 24"
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

// ── Detail row ────────────────────────────────────────────────
const DetailRow = ({ icon, label, value, sub, isLast = false }) => (
  <div className={`flex items-start gap-4 ${!isLast ? 'pb-7 mb-7 border-b border-white/[0.07]' : ''}`}>
    {/* Icon */}
    <div className="w-10 h-10 bg-[rgba(224,27,27,0.1)] border border-[rgba(224,27,27,0.2)] rounded-md flex items-center justify-center text-red shrink-0 mt-0.5">
      {icon}
    </div>

    <div>
      <p className="font-display font-medium text-[10px] tracking-[0.18em] uppercase text-white/22 mb-1">
        {label}
      </p>
      <p className="font-display font-600 text-[15px] text-white tracking-[0.03em] mb-1">
        {value}
      </p>
      {sub && (
        <p className="font-body text-[13px] text-white/38 leading-[1.6]">
          {sub}
        </p>
      )}
    </div>
  </div>
);

// ── Main Component ────────────────────────────────────────────
const Location = () => {
  return (
    <section
      id="location"
      aria-labelledby="location-heading"
      className="bg-black section-padding"
    >
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-16 items-start">

          {/* ── Left — Info ── */}
          <div>
            <FadeIn direction="up">
              <Overline>Find Us</Overline>
            </FadeIn>

            <FadeIn direction="up" delay={100}>
              <SectionHeading
                id="location-heading"
                light
                className="mb-10"
              >
                Visit the Garage
              </SectionHeading>
            </FadeIn>

            <FadeIn direction="up" delay={180}>
              <div>
                <DetailRow
                  icon={<MapPinIcon />}
                  label="Address"
                  value={BUSINESS.address}
                  sub={BUSINESS.addressFull.split(',').slice(1).join(',').trim()}
                />
                <DetailRow
                  icon={<ClockIcon />}
                  label="Working Hours"
                  value={BUSINESS.hours}
                  sub={`${BUSINESS.hoursSunday} · Walk-ins welcome`}
                />
                <DetailRow
                  icon={<PhoneIcon />}
                  label="Call or WhatsApp"
                  value={BUSINESS.phone1}
                  sub="Direct line for bookings and urgent vehicle queries"
                  isLast
                />
              </div>
            </FadeIn>

            <FadeIn direction="up" delay={260}>
              <div className="mt-8">
                <Button
                  href={WA_LINK}
                  external
                  icon={<WAIcon />}
                >
                  Get in Touch
                </Button>
              </div>
            </FadeIn>
          </div>

          {/* ── Right — Map ── */}
          <FadeIn direction="left" delay={100} threshold={0.1}>
            <div className="rounded-lg overflow-hidden border border-white/8 w-full h-80 sm:h-100 lg:h-120">
              {/*
                Replace the src below with your actual Google Maps embed URL.
                To get it:
                1. Go to maps.google.com
                2. Search for the garage address
                3. Click Share → Embed a map → Copy HTML
                4. Paste only the src="..." value here
              */}
              <iframe
                title="Kelijah Auto Spares & Garage location on Google Maps"
                src={BUSINESS.mapEmbedSrc}
                width="100%"
                height="100%"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                className="border-0 block w-full h-full"
                style={{
                  filter: 'grayscale(1) invert(0.9) contrast(0.88)',
                }}
              />
            </div>
          </FadeIn>

        </div>
      </div>
    </section>
  );
};

export default Location;