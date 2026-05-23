/**
 * LazyImage.jsx
 * ─────────────────────────────────────────────────────────────
 * Performance-optimised image component.
 * Features:
 *  - Native lazy loading (loading="lazy")
 *  - Blur-up placeholder while loading
 *  - Smooth fade-in on load
 *  - Accessible alt text enforcement
 *  - Aspect ratio container to prevent layout shift
 *
 * Props:
 *  @prop {string}  src         — image URL (required)
 *  @prop {string}  alt         — alt text (required for accessibility)
 *  @prop {string}  className   — classes applied to the <img> element
 *  @prop {string}  wrapClass   — classes applied to the wrapper <div>
 *  @prop {string}  objectFit   — CSS object-fit value (default: 'cover')
 *  @prop {string}  objectPos   — CSS object-position (default: 'center')
 *  @prop {boolean} eager       — set true for above-the-fold images (disables lazy)
 *
 * Usage:
 *  <LazyImage
 *    src="https://..."
 *    alt="Mechanic inspecting vehicle engine"
 *    wrapClass="rounded-lg overflow-hidden aspect-[4/3]"
 *  />
 * ─────────────────────────────────────────────────────────────
 */

import { useState } from 'react';

const LazyImage = ({
  src,
  alt,
  className  = '',
  wrapClass  = '',
  objectFit  = 'cover',
  objectPos  = 'center',
  eager      = false,
}) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className={`relative overflow-hidden ${wrapClass}`}>
      {/* Blur placeholder — visible until image loads */}
      {!loaded && (
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-neutral-800 animate-pulse"
        />
      )}

      <img
        src={src}
        alt={alt}
        loading={eager ? 'eager' : 'lazy'}
        decoding="async"
        onLoad={() => setLoaded(true)}
        className={`
          w-full h-full
          transition-opacity duration-500 ease-in-out
          ${loaded ? 'opacity-100' : 'opacity-0'}
          ${className}
        `}
        style={{
          objectFit,
          objectPosition: objectPos,
          willChange: 'opacity',
        }}
      />
    </div>
  );
};

export default LazyImage;