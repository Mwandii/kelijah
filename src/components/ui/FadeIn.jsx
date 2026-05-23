/**
 * FadeIn.jsx
 * ─────────────────────────────────────────────────────────────
 * Scroll-triggered entrance animation using IntersectionObserver.
 * No external animation libraries — pure CSS + JS.
 *
 * Props:
 *  @prop {ReactNode} children   — content to animate
 *  @prop {'up'|'left'|'right'} direction — animation direction (default: 'up')
 *  @prop {number}  delay        — animation delay in ms (default: 0)
 *  @prop {number}  threshold    — how much of element must be visible (default: 0.15)
 *  @prop {string}  className    — additional Tailwind classes
 *  @prop {string}  rootMargin   — IntersectionObserver rootMargin (default: '0px')
 *
 * Usage:
 *  <FadeIn direction="up" delay={150}>
 *    <p>This fades in when scrolled into view</p>
 *  </FadeIn>
 * ─────────────────────────────────────────────────────────────
 */

import { useRef, useEffect, useState } from 'react';

const ANIMATION_MAP = {
  up:    'fadeUp',
  left:  'fadeLeft',
  right: 'fadeRight',
};

const FadeIn = ({
  children,
  direction   = 'up',
  delay       = 0,
  threshold   = 0.15,
  className   = '',
  rootMargin  = '0px',
}) => {
  const ref       = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Skip animation for users who prefer reduced motion
    const prefersReduced = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    if (prefersReduced) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          // Once visible, stop observing — no re-trigger on scroll up
          observer.unobserve(el);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  const animationName = ANIMATION_MAP[direction] ?? 'fadeUp';

  return (
    <div
      ref={ref}
      className={className}
      style={{
        // Before visible: hidden at starting position
        opacity:    visible ? 1 : 0,
        transform:  visible ? 'translate(0,0)' : getInitialTransform(direction),
        animation:  visible
          ? `${animationName} 0.75s cubic-bezier(0.22, 0.68, 0, 1.2) ${delay}ms both`
          : 'none',
        // Prevent layout shift during animation
        willChange: 'opacity, transform',
      }}
    >
      {children}
    </div>
  );
};

/**
 * Returns the CSS transform for the pre-visible state.
 * Ensures no flash of content in wrong position before JS runs.
 */
const getInitialTransform = (direction) => {
  switch (direction) {
    case 'left':  return 'translateX(32px)';
    case 'right': return 'translateX(-32px)';
    default:      return 'translateY(32px)';
  }
};

export default FadeIn;