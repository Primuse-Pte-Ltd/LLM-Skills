import React from "react";

function variantStyle(variant) {
  switch (variant) {
    case "glass":
      return { background: "transparent", color: "#FFFFFF", border: "1px solid var(--glass-border)" };
    case "floating":
      return {
        background: "rgb(248 249 250 / 0.85)", color: "var(--on-surface)", border: "1px solid var(--outline-variant)",
        boxShadow: "var(--shadow-md)", backdropFilter: "blur(8px)", WebkitBackdropFilter: "blur(8px)",
      };
    case "brand":
      return { background: "transparent", color: "var(--primary)", border: "1px solid transparent" };
    case "ghost":
    default:
      return { background: "transparent", color: "var(--on-surface-variant)", border: "1px solid transparent" };
  }
}

/**
 * Icon-only control (cart, menu, carousel arrows, mobile back). 40px, 12px radius —
 * the remapped `rounded-full`, so it reads as a soft square, not a circle.
 * Optional `count` renders the teal cart badge.
 */
export function IconButton({ children, label, variant = "ghost", size = 40, count = 0, style = {}, ...rest }) {
  const [hover, setHover] = React.useState(false);
  const [active, setActive] = React.useState(false);
  const hoverStyle = {
    ghost: { background: "var(--surface-container)", color: "var(--primary)" },
    brand: { background: "var(--surface-container-low)" },
    glass: { background: "rgb(255 255 255 / 0.10)" },
    floating: { background: "var(--surface-container)" },
  }[variant];
  return (
    <button
      {...rest}
      aria-label={label}
      title={label}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => { setHover(false); setActive(false); }}
      onMouseDown={() => setActive(true)}
      onMouseUp={() => setActive(false)}
      style={{
        position: "relative",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        width: size,
        height: size,
        flexShrink: 0,
        padding: 0,
        borderRadius: "var(--radius-pill)",
        cursor: "pointer",
        transform: active ? "scale(var(--press-scale))" : "none",
        transition: "background var(--duration) var(--ease), color var(--duration) var(--ease), transform 120ms var(--ease)",
        ...variantStyle(variant),
        ...(hover ? hoverStyle : null),
        ...style,
      }}
    >
      {children}
      {count > 0 ? (
        <span style={{
          position: "absolute", right: 2, top: 2,
          minWidth: 18, height: 18, padding: "0 4px",
          display: "flex", alignItems: "center", justifyContent: "center",
          borderRadius: "var(--radius-pill)",
          background: "var(--primary)", color: "var(--on-primary)",
          fontFamily: "var(--font-body)", fontSize: 11, fontWeight: "var(--weight-bold)", lineHeight: 1,
          boxShadow: "0 0 0 2px var(--surface)",
        }}>{count > 99 ? "99+" : count}</span>
      ) : null}
    </button>
  );
}
