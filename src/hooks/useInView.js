/**
 * useInView.js
 * ─────────────────────────────────────────────────────────────
 * Returns a [ref, isVisible] pair.
 * Attaches an IntersectionObserver to the ref'd element and sets
 * isVisible true when it enters the viewport.
 *
 * Used internally by FadeIn.jsx. Can also be used directly when
 * you need scroll-triggered logic without a wrapper element.
 *
 * @param {number} threshold  — visibility ratio to trigger (default: 0.15)
 * @param {string} rootMargin — observer rootMargin (default: '0px')
 * @returns {[React.RefObject, boolean]}
 *
 * Usage:
 *  const [ref, isVisible] = useInView(0.2);
 *  <div ref={ref} className={isVisible ? 'opacity-100' : 'opacity-0'} />
 * ─────────────────────────────────────────────────────────────
 */

import { useRef, useEffect, useState } from 'react';

const useInView = (threshold = 0.15, rootMargin = '0px') => {
  const ref       = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(el); // fire once only
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  return [ref, visible];
};

export default useInView;