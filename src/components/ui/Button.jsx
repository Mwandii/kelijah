/**
 * Button.jsx
 * ─────────────────────────────────────────────────────────────
 * Reusable button / anchor component.
 * Renders as <a> when `href` is provided, <button> otherwise.
 *
 * Variants:
 *  'primary'       — red fill, white text
 *  'outline-light' — transparent, white border (for dark backgrounds)
 *  'outline-dark'  — transparent, red border  (for light backgrounds)
 *  'white'         — white fill, red text      (for red backgrounds)
 *
 * Props:
 *  @prop {string}    variant     — button style variant (default: 'primary')
 *  @prop {string}    href        — if provided, renders as <a>
 *  @prop {boolean}   external    — adds target="_blank" rel="noreferrer"
 *  @prop {ReactNode} children    — button label / content
 *  @prop {ReactNode} icon        — optional icon rendered before label
 *  @prop {string}    className   — additional classes
 *  @prop {Function}  onClick     — click handler (for <button>)
 *  @prop {boolean}   disabled    — disables the button
 *  @prop {string}    type        — button type attr (default: 'button')
 *
 * Usage:
 *  <Button href={WA_LINK} external icon={<WAIcon />}>
 *    Book via WhatsApp
 *  </Button>
 *
 *  <Button variant="outline-light" href="#services">
 *    View Services
 *  </Button>
 * ─────────────────────────────────────────────────────────────
 */

const VARIANT_CLASSES = {
  'primary':       'btn-primary',
  'outline-light': 'btn-outline-light',
  'outline-dark':  'btn-outline-dark',
  'white':         'btn-white',
};

const Button = ({
  variant   = 'primary',
  href,
  external  = false,
  children,
  icon,
  className = '',
  onClick,
  disabled  = false,
  type      = 'button',
}) => {
  const baseClass = VARIANT_CLASSES[variant] ?? VARIANT_CLASSES.primary;
  const classes   = `${baseClass} ${className}`.trim();

  const content = (
    <>
      {icon && <span aria-hidden="true">{icon}</span>}
      {children}
    </>
  );

  // Render as anchor tag when href is supplied
  if (href) {
    return (
      <a
        href={href}
        className={classes}
        {...(external
          ? { target: '_blank', rel: 'noreferrer' }
          : {})}
      >
        {content}
      </a>
    );
  }

  // Render as button
  return (
    <button
      type={type}
      className={classes}
      onClick={onClick}
      disabled={disabled}
      style={disabled ? { opacity: 0.5, pointerEvents: 'none' } : {}}
    >
      {content}
    </button>
  );
};

export default Button;