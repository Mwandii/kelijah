/**
 * Navbar.jsx
 * src/components/layout/Navbar.jsx
 * ─────────────────────────────────────────────────────────────
 * Fixed navigation bar with:
 *  - Transparent on top, solid dark on scroll
 *  - Smooth background transition
 *  - Mobile hamburger menu with body scroll lock
 *  - Closes mobile menu on route change and resize
 *  - Active link highlighting via React Router
 *  - WhatsApp Book Now CTA button
 * ─────────────────────────────────────────────────────────────
 */

import { useState, useEffect, useCallback } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';

import useScrolled from '../../hooks/useScrolled';
import Button from '../ui/Button';
import { NAV_LINKS, WA_LINK, BUSINESS } from '../../data/siteData';

// ── SVG Icons ────────────────────────────────────────────────
const ToolIcon = () => (
  <svg
    width="19" height="19" viewBox="0 0 24 24"
    fill="none" stroke="currentColor"
    strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
  </svg>
);

const WAIcon = () => (
  <svg
    width="16" height="16" viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
  </svg>
);

// ── Hamburger — animated 3-bar → X ───────────────────────────
const Hamburger = ({ open }) => (
  <div
    className="flex flex-col justify-center items-center w-6 h-6 gap-1.25"
    aria-hidden="true"
  >
    <span
      className={[
        'block h-0.5 w-6 bg-white origin-center transition-all duration-300',
        open ? 'translate-y-1.75 rotate-45' : '',
      ].join(' ')}
    />
    <span
      className={[
        'block h-0.5 bg-white transition-all duration-300',
        open ? 'w-0 opacity-0' : 'w-6 opacity-100',
      ].join(' ')}
    />
    <span
      className={[
        'block h-0.5 w-6 bg-white origin-center transition-all duration-300',
        open ? '-translate-y-1.75 -rotate-45' : '',
      ].join(' ')}
    />
  </div>
);

// ── Main Component ────────────────────────────────────────────
const Navbar = () => {
  const scrolled           = useScrolled(60);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location           = useLocation();

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  // Close mobile menu on window resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setMobileOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const toggleMobile = useCallback(() => {
    setMobileOpen(prev => !prev);
  }, []);

  // Active link styles for desktop nav
  const getNavLinkClass = ({ isActive }) =>
    [
      'relative font-[family-name:var(--font-display)] font-medium text-[11px]',
      'tracking-[0.12em] uppercase transition-colors duration-200',
      'after:content-[""] after:absolute after:bottom-[-3px] after:left-0',
      'after:h-[2px] after:bg-[var(--color-red)] after:transition-[width] after:duration-250',
      isActive
        ? 'text-white after:w-full'
        : 'text-white/60 hover:text-white after:w-0 hover:after:w-full',
    ].join(' ');

  // Active link styles for mobile nav
  const getMobileNavLinkClass = ({ isActive }) =>
    [
      'block font-[family-name:var(--font-display)] font-medium text-[15px]',
      'tracking-[0.12em] uppercase py-4 border-b border-white/8',
      'transition-colors duration-200',
      isActive
        ? 'text-[var(--color-red)]'
        : 'text-white/70 hover:text-white',
    ].join(' ');

  return (
    <>
      {/* ── Main Navbar ── */}
      <header
        role="banner"
        className={[
          'fixed top-0 left-0 right-0 z-50 h-16.5',
          'transition-[background,border,backdrop-filter] duration-300',
          scrolled
            ? 'bg-[rgba(12,12,12,0.97)] backdrop-blur-md border-b border-white/6'
            : 'bg-transparent',
        ].join(' ')}
      >
        <div className="section-container h-full flex items-center justify-between">

          {/* Logo */}
          <Link
            to="/"
            aria-label={`${BUSINESS.name} — Home`}
            className="flex items-center gap-3 shrink-0"
          >
            <div className="w-9.5 h-9.5 bg-red rounded-md flex items-center justify-center text-white shrink-0">
              <ToolIcon />
            </div>
            <div className="leading-tight">
              <div className="font-display font-bold text-[16px] text-white tracking-[0.08em] uppercase leading-none">
                {BUSINESS.shortName}
              </div>
              <div className="text-[9px] text-white/35 tracking-[0.16em] uppercase mt-0.75">
                Auto Spares & Garage
              </div>
            </div>
          </Link>

          {/* Desktop links */}
          <nav
            aria-label="Main navigation"
            className="hidden lg:flex items-center gap-9"
          >
            {NAV_LINKS.map(({ label, path }) => (
              <NavLink
                key={path}
                to={path}
                className={getNavLinkClass}
              >
                {label}
              </NavLink>
            ))}

            <Button
              href={WA_LINK}
              external
              icon={<WAIcon />}
              className="ml-2"
            >
              Book Now
            </Button>
          </nav>

          {/* Mobile hamburger */}
          <button
            type="button"
            onClick={toggleMobile}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
            className="lg:hidden flex items-center justify-center w-10 h-10 -mr-2"
          >
            <Hamburger open={mobileOpen} />
          </button>
        </div>
      </header>

      {/* ── Mobile Menu Overlay ── */}
      <div
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
        className={[
          'fixed inset-0 z-40 lg:hidden',
          'flex flex-col',
          'bg-black pt-16.5',
          'transition-[opacity,transform] duration-300 ease-in-out',
          mobileOpen
            ? 'opacity-100 translate-y-0 pointer-events-auto'
            : 'opacity-0 -translate-y-3 pointer-events-none',
        ].join(' ')}
      >
        <nav
          aria-label="Mobile navigation"
          className="section-container flex flex-col pt-6 pb-10 flex-1 overflow-y-auto"
        >
          {NAV_LINKS.map(({ label, path }) => (
            <NavLink
              key={path}
              to={path}
              className={getMobileNavLinkClass}
            >
              {label}
            </NavLink>
          ))}

          {/* Mobile CTA */}
          <div className="mt-8 flex flex-col gap-3">
            <Button
              href={WA_LINK}
              external
              icon={<WAIcon />}
              className="w-full justify-center"
            >
              Book via WhatsApp
            </Button>
            <Button
              href="/book-appointment"
              variant="outline-light"
              className="w-full justify-center"
            >
              Book Appointment Online
            </Button>
          </div>

          {/* Mobile contact info */}
          <div className="mt-auto pt-8 border-t border-white/8">
            <p className="text-white/30 text-xs tracking-widest uppercase font-display mb-2">
              Call Us
            </p>
            <a
              href={`tel:${BUSINESS.phone1}`}
              className="text-white font-semibold text-base hover:text-red transition-colors"
            >
              {BUSINESS.phone1}
            </a>
            <p className="text-white/35 text-xs mt-2">{BUSINESS.hours}</p>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;