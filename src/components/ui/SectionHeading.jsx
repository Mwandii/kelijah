/**
 * SectionHeading.jsx
 * ─────────────────────────────────────────────────────────────
 * Consistent section heading across the site.
 * Uses Oswald via .section-heading / .section-heading-white classes.
 *
 * Props:
 *  @prop {ReactNode} children   — heading content (can include <span> for red accent)
 *  @prop {boolean}   light      — true = white text (dark backgrounds), default true
 *  @prop {string}    className  — additional classes
 *  @prop {string}    as         — HTML element to render (default: 'h2')
 *
 * Usage:
 *  <SectionHeading light>
 *    Built on Trust,<br/>
 *    <span className="text-[var(--color-red)]">Driven by Precision.</span>
 *  </SectionHeading>
 *
 *  <SectionHeading light={false}>
 *    Professional<br/>Services
 *  </SectionHeading>
 * ─────────────────────────────────────────────────────────────
 */

const SectionHeading = ({
  children,
  light     = true,
  className = '',
  as: Tag   = 'h2',
}) => {
  const baseClass = light ? 'section-heading-white' : 'section-heading';

  return (
    <Tag className={`${baseClass} ${className}`}>
      {children}
    </Tag>
  );
};

export default SectionHeading;