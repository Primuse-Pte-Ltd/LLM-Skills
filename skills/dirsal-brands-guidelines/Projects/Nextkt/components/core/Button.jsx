import React from "react";

const SIZES = {
  sm: { padding: "6px 16px", fontSize: "var(--text-label-sm)", height: 32, gap: 6, icon: 18 },
  md: { padding: "10px 24px", fontSize: "var(--text-body-md)", height: 44, gap: 8, icon: 20 },
  lg: { padding: "16px 40px", fontSize: "var(--text-body-md)", height: 56, gap: 8, icon: 24 },
  cta: { padding: "0 24px", fontSize: "var(--text-headline-md)", height: 60, gap: 8, icon: 24 },
};

function variantStyle(variant) {
  switch (variant) {
    case "container":
      return { background: "var(--primary-container)", color: "var(--on-primary-container)", border: "1px solid transparent" };
    case "outline":
      return { background: "transparent", color: "var(--primary)", border: "1px solid var(--primary)" };
    case "secondary":
      return { background: "var(--surface-container)", color: "var(--on-surface)", border: "1px solid var(--outline-variant)" };
    case "inverse":
      return { background: "#FFFFFF", color: "var(--primary)", border: "1px solid transparent" };
    case "glass":
      return {
        background: "var(--glass-overlay)", color: "#FFFFFF", border: "1px solid var(--glass-border)",
        backdropFilter: "blur(var(--blur-glass))", WebkitBackdropFilter: "blur(var(--blur-glass))",
      };
    case "link":
      return {
        background: "transparent", color: "var(--primary)", border: "none",
        borderBottom: "2px solid var(--primary)", borderRadius: 0, padding: "0 0 4px", minHeight: 0,
      };
    case "destructive":
      return { background: "transparent", color: "var(--error)", border: "1px solid transparent" };
    case "primary":
    default:
      return { background: "var(--primary)", color: "var(--on-primary)", border: "1px solid transparent" };
  }
}

/**
 * Nextkt action button. Teal fill (`primary`) for the action that moves the buyer
 * toward a ticket; `container` (steel blue) for the big Add-to-Cart CTA; `glass`
 * over event photography; `link` for "View Full Calendar"-style text actions.
 */
export function Button({
  children,
  variant = "primary",
  size = "md",
  full = false,
  disabled = false,
  iconLeft = null,
  iconRight = null,
  style = {},
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const [active, setActive] = React.useState(false);
  const s = SIZES[size] || SIZES.md;
  const v = variantStyle(variant);

  const hoverStyle = {
    primary: { background: "var(--primary-container)" },
    container: { opacity: 0.9 },
    outline: { background: "var(--primary)", color: "var(--on-primary)" },
    secondary: { background: "var(--surface-container-high)" },
    inverse: { background: "var(--surface)" },
    glass: { background: "rgb(255 255 255 / 0.10)" },
    link: { opacity: 0.7 },
    destructive: { background: "var(--error-container)" },
  }[variant];

  const pressScale = size === "cta" ? "var(--press-scale-cta)" : "var(--press-scale)";

  return (
    <button
      {...rest}
      disabled={disabled}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => { setHover(false); setActive(false); }}
      onMouseDown={() => setActive(true)}
      onMouseUp={() => setActive(false)}
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        gap: s.gap,
        width: full ? "100%" : "auto",
        minHeight: s.height,
        padding: s.padding,
        fontFamily: "var(--font-body)",
        fontSize: s.fontSize,
        fontWeight: size === "cta" ? "var(--weight-semibold)" : "var(--weight-bold)",
        lineHeight: 1,
        whiteSpace: "nowrap",
        borderRadius: "var(--radius-btn)",
        cursor: disabled ? "not-allowed" : "pointer",
        opacity: disabled ? 0.6 : 1,
        transform: active && !disabled ? `scale(${pressScale})` : "none",
        transition: "background var(--duration) var(--ease), color var(--duration) var(--ease), opacity var(--duration) var(--ease), transform 120ms var(--ease)",
        ...v,
        ...(hover && !disabled ? hoverStyle : null),
        ...style,
      }}
    >
      {iconLeft ? <span style={{ display: "inline-flex", fontSize: s.icon }}>{iconLeft}</span> : null}
      {children}
      {iconRight ? <span style={{ display: "inline-flex", fontSize: s.icon }}>{iconRight}</span> : null}
    </button>
  );
}
