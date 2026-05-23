/**
 * useScrolled.js
 * ─────────────────────────────────────────────────────────────
 * Returns true when the page has scrolled past a given threshold.
 * Used by Navbar to switch from transparent to solid background.
 *
 * @param {number} threshold — scroll distance in px (default: 60)
 * @returns {boolean}
 *
 * Usage:
 *  const scrolled = useScrolled(60);
 * ─────────────────────────────────────────────────────────────
 */

import { useState, useEffect } from 'react';

const useScrolled = (threshold = 60) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > threshold);
    };

    // Check on mount in case page loads mid-scroll
    handleScroll();

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [threshold]);

  return scrolled;
};

export default useScrolled;