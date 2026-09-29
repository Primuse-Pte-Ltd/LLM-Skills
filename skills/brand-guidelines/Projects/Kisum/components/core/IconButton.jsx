import React from "react";

/**
 * Icon-only button for management actions (edit, delete, overflow, notifications).
 * Subtle hover background; no purple unless it is a primary affordance.
 */
export function IconButton({ children, size = 40, variant = "ghost", label, style = {}, ...rest }) {
  const [hover, setHover] = React.useState(false);
  const bg = {
    ghost: hover ? "var(--surface-muted)" : "transparent",
    tint: hover ? "var(--kisum-100)" : "var(--kisum-50)",
    solid: hover ? "var(--accent-hover)" : "var(--accent)",
  }[variant];
  const color = variant === "solid" ? "#fff" : (variant === "tint" ? "var(--accent)" : "var(--muted)");
  return (
    <button
      {...rest}
      aria-label={label}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        width: size,
        height: size,
        padding: 0,
        border: "none",
        borderRadius: "var(--radius-full)",
        background: bg,
        color,
        cursor: "pointer",
        transition: "background var(--duration) var(--ease), color var(--duration) var(--ease)",
        ...style,
      }}
    >
      {children}
    </button>
  );
}
