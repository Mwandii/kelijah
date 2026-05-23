/**
 * Overline.jsx
 * ─────────────────────────────────────────────────────────────
 * The red dash + uppercase label used above every section heading.
 * Pulls the .overline class from index.css.
 *
 * Props:
 *  @prop {string}  children  — label text
 *  @prop {string}  className — additional classes
 *
 * Usage:
 *  <Overline>Who We Are</Overline>
 *  <Overline>Expert Solutions</Overline>
 * ─────────────────────────────────────────────────────────────
 */

const Overline = ({ children, className = '' }) => (
  <div className={`overline ${className}`}>
    {children}
  </div>
);

export default Overline;