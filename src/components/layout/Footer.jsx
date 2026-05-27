/**
 * Footer.jsx
 * src/components/layout/Footer.jsx
 * ─────────────────────────────────────────────────────────────
 * Site footer with:
 *  - Brand column with tagline and social links
 *  - Top Services, Main Pages, and Contact columns
 *  - Bottom bar with copyright and built-by credit
 *  - All links and content pulled from siteData.js
 *  - Fully responsive — stacks to 2 cols on tablet, 1 on mobile
 * ─────────────────────────────────────────────────────────────
 */

import { Link } from 'react-router-dom';
import { BUSINESS, FOOTER_SERVICES, FOOTER_PAGES, WA_LINK } from '../../data/siteData';

// ── Icons ─────────────────────────────────────────────────────
const ToolIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="2"
    strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
  </svg>
);

const MapPinIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="2"
    strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
    <circle cx="12" cy="10" r="3"/>
  </svg>
);

const ClockIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="2"
    strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="12" cy="12" r="10"/>
    <polyline points="12 6 12 12 16 14"/>
  </svg>
);

const PhoneIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="2"
    strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.41 2 2 0 0 1 3.6 1.22h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.8a16 16 0 0 0 6.29 6.29l.96-.96a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
  </svg>
);

const ArrowRight = () => (
  <svg width="11" height="11" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="2.5"
    strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <line x1="5" y1="12" x2="19" y2="12"/>
    <polyline points="12 5 19 12 12 19"/>
  </svg>
);

// ── Social link stubs ─────────────────────────────────────────
const SOCIALS = [
  { label: "Facebook",  abbr: "FB", href: "#" },
  { label: "Instagram", abbr: "IG", href: "#" },
  { label: "WhatsApp",  abbr: "WA", href: WA_LINK },
  { label: "TikTok",    abbr: "TT", href: "#" },
];

// ── Column heading ────────────────────────────────────────────
const ColHeading = ({ children }) => (
  <h3 className="font-display font-600 text-[11px] tracking-[0.2em] uppercase text-white mb-5">
    {children}
  </h3>
);

// ── Footer link ───────────────────────────────────────────────
const FooterLink = ({ to, href, children, external = false }) => {
  const classes = "font-[family-name:var(--font-body)] text-[13px] text-white/32 hover:text-white transition-colors duration-200";

  if (href) {
    return (
      <a
        href={href}
        className={classes}
        {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
      >
        {children}
      </a>
    );
  }

  return (
    <Link to={to} className={classes}>
      {children}
    </Link>
  );
};

// ── Main Component ────────────────────────────────────────────
const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      role="contentinfo"
      className="bg-[#070707] border-t border-white/6"
    >
      <div className="section-container py-16 sm:py-20">

        {/* ── Top grid — 4 columns ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 pb-12 border-b border-white/[0.07] mb-8">

          {/* ── Brand column ── */}
          <div className="sm:col-span-2 lg:col-span-1">
            {/* Logo */}
            <Link
              to="/"
              aria-label={`${BUSINESS.name} — Home`}
              className="inline-flex items-center gap-3 mb-5"
            >
              <div className="w-10 h-10 bg-red rounded-md flex items-center justify-center text-white shrink-0">
                <ToolIcon />
              </div>
              <div className="leading-tight">
                <div className="font-display font-bold text-[15px] text-white tracking-[0.08em] uppercase leading-none">
                  {BUSINESS.shortName}
                </div>
                <div className="text-[9px] text-white/28 tracking-[0.14em] uppercase mt-0.75">
                  Auto Spares & Garage
                </div>
              </div>
            </Link>

            {/* Tagline */}
            <p className="font-body text-[13px] text-white/30 leading-[1.88] mb-5 max-w-60">
              Nairobi's trusted garage for precision diagnostics, honest
              repairs, and genuine parts.
            </p>

            {/* Hours blurb */}
            <p className="font-display font-medium text-[10px] tracking-[0.12em] uppercase text-white/18 mb-6">
              Mon–Sat 8AM–6:30PM · Sunday Emergency
            </p>

            {/* Social links */}
            <nav aria-label="Social media links">
              <ul className="flex gap-2">
                {SOCIALS.map(({ label, abbr, href }) => (
                  <li key={label}>
                    <a
                      href={href}
                      aria-label={label}
                      target="_blank"
                      rel="noreferrer"
                      className="w-9 h-9 border border-white/10 rounded-md flex items-center justify-center font-display font-bold text-[10px] text-white/28 hover:border-red hover:text-red transition-all duration-200"
                    >
                      {abbr}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* ── Top Services column ── */}
          <div>
            <ColHeading>Top Services</ColHeading>
            <nav aria-label="Top services">
              <ul className="flex flex-col gap-3">
                {FOOTER_SERVICES.map((service, index) => (
                  <li key={index}>
                    <FooterLink to="/services">
                      {service}
                    </FooterLink>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* ── Main Pages column ── */}
          <div>
            <ColHeading>Main Pages</ColHeading>
            <nav aria-label="Main pages">
              <ul className="flex flex-col gap-3">
                {FOOTER_PAGES.map(({ label, path }) => (
                  <li key={path}>
                    <FooterLink to={path}>
                      {label}
                    </FooterLink>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* ── Contact column ── */}
          <div>
            <ColHeading>Contact</ColHeading>
            <ul className="flex flex-col gap-4">
              {/* Phone 1 */}
              <li className="flex items-center gap-2">
                <span className="text-red shrink-0"><PhoneIcon /></span>
                <a
                  href={`tel:${BUSINESS.phone1}`}
                  className="font-body text-[13px] text-white/32 hover:text-white transition-colors duration-200"
                >
                  {BUSINESS.phone1}
                </a>
              </li>

              {/* Phone 2 */}
              <li className="flex items-center gap-2">
                <span className="text-red shrink-0"><PhoneIcon /></span>
                <a
                  href={`tel:${BUSINESS.phone2}`}
                  className="font-body text-[13px] text-white/32 hover:text-white transition-colors duration-200"
                >
                  {BUSINESS.phone2}
                </a>
              </li>

              {/* Address */}
              <li className="flex items-start gap-2">
                <span className="text-red shrink-0 mt-0.5"><MapPinIcon /></span>
                <span className="font-body text-[13px] text-white/32 leading-[1.6]">
                  {BUSINESS.address},<br />Nairobi, Kenya
                </span>
              </li>

              {/* Hours */}
              <li className="flex items-start gap-2">
                <span className="text-red shrink-0 mt-0.5"><ClockIcon /></span>
                <span className="font-body text-[13px] text-white/32 leading-[1.6]">
                  {BUSINESS.hours}
                </span>
              </li>

              {/* Get directions */}
              <li className="mt-1">
                <a
                  href={BUSINESS.mapEmbedSrc}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 font-display font-medium text-[12px] tracking-[0.08em] uppercase text-red hover:text-red-dark transition-colors duration-200"
                >
                  Open Map <ArrowRight />
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* ── Bottom bar ── */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="font-body text-[12px] text-white/18">
            © {currentYear} {BUSINESS.name}. 
          </p>
          <p className="font-body text-[12px] text-white/18">
            All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;