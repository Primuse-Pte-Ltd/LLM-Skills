import React from "react";

const SIZES = {
  sm: { padding: "6px 12px", fontSize: "var(--text-label)", height: 32, gap: 6, icon: 14 },
  md: { padding: "8px 16px", fontSize: "var(--text-body)", height: 40, gap: 8, icon: 16 },
  lg: { padding: "12px 22px", fontSize: "var(--text-body)", height: 48, gap: 8, icon: 18 },
};

function variantStyle(variant) {
  switch (variant) {
    case "outline":
      return { background: "var(--surface)", color: "var(--accent)", border: "1px solid var(--accent)" };
    case "secondary":
      return { background: "var(--surface)", color: "var(--ink)", border: "1px solid var(--border)" };
    case "ghost":
      return { background: "transparent", color: "var(--accent)", border: "1px solid transparent" };
    case "destructive":
      return { background: "var(--danger)", color: "#fff", border: "1px solid transparent" };
    case "primary":
    default:
      return { background: "var(--accent)", color: "var(--text-on-accent)", border: "1px solid transparent" };
  }
}

/**
 * Kisum primary action button. Purple fill for the one primary action per view;
 * outline / secondary / ghost for everything else (Purple Budget Rule).
 */
export function Button({
  children,
  variant = "primary",
  size = "md",
  pill = false,
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

  const hoverBg = {
    primary: "var(--accent-hover)",
    destructive: "var(--danger-hover)",
    outline: "var(--kisum-50)",
    secondary: "var(--surface-muted)",
    ghost: "var(--kisum-50)",
  }[variant];

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
        font: "inherit",
        fontFamily: "var(--font-body)",
        fontSize: s.fontSize,
        fontWeight: "var(--weight-semibold)",
        lineHeight: 1,
        whiteSpace: "nowrap",
        borderRadius: pill ? "var(--radius-full)" : "var(--radius-btn)",
        cursor: disabled ? "not-allowed" : "pointer",
        opacity: disabled ? 0.5 : 1,
        transform: active && !disabled ? "scale(0.97)" : "none",
        transition: "background var(--duration) var(--ease), box-shadow var(--duration) var(--ease), transform 120ms var(--ease)",
        boxShadow: variant === "primary" && hover && !disabled ? "var(--shadow-accent)" : "var(--shadow-xs)",
        ...v,
        ...(hover && !disabled ? { background: hoverBg } : null),
        ...style,
      }}
    >
      {iconLeft ? <span style={{ display: "inline-flex", width: s.icon, height: s.icon }}>{iconLeft}</span> : null}
      {children}
      {iconRight ? <span style={{ display: "inline-flex", width: s.icon, height: s.icon }}>{iconRight}</span> : null}
    </button>
  );
}
