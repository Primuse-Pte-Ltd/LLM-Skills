import React from "react";

const TONES = {
  "on-sale": { color: "var(--status-on-sale)", solid: "rgb(16 185 129 / 0.9)", tint: "rgb(16 185 129 / 0.10)" },
  primary: { color: "var(--primary)", solid: "rgb(28 110 135 / 0.9)", tint: "rgb(28 110 135 / 0.10)" },
  ga: { color: "var(--tier-ga)", solid: "var(--tier-ga)", tint: "rgb(65 114 146 / 0.10)" },
  vip: { color: "var(--tier-vip)", solid: "rgb(212 175 55 / 0.9)", tint: "rgb(212 175 55 / 0.10)" },
  tables: { color: "var(--tier-tables)", solid: "var(--tier-tables)", tint: "rgb(29 30 76 / 0.10)" },
  "sold-out": { color: "var(--status-sold-out)", solid: "rgb(107 114 128 / 0.9)", tint: "rgb(107 114 128 / 0.10)" },
  error: { color: "var(--error)", solid: "var(--error)", tint: "rgb(186 26 26 / 0.10)" },
  neutral: { color: "var(--on-secondary-container)", solid: "var(--secondary)", tint: "var(--secondary-container)" },
};

/**
 * Status / tier badge. Caps-only, tiny, 2px corners.
 * solid = over imagery (ON SALE on a card photo) · tint = on surfaces (tier chips, stock).
 * glass = translucent white chip for hero photography.
 */
export function Badge({ children, tone = "on-sale", variant = "solid", caps = true, size = "sm", style = {} }) {
  const t = TONES[tone] || TONES["on-sale"];
  const isGlass = variant === "glass";
  const bg = isGlass ? "var(--glass-badge)" : variant === "tint" ? t.tint : t.solid;
  const fg = isGlass || variant === "solid" ? "#FFFFFF" : t.color;
  return (
    <span style={{
      display: "inline-flex",
      alignItems: "center",
      gap: 4,
      width: "fit-content",
      padding: size === "md" ? "4px 12px" : "4px 8px",
      borderRadius: isGlass ? "var(--radius-pill)" : "var(--radius-xs)",
      background: bg,
      color: fg,
      backdropFilter: variant === "tint" ? "none" : `blur(var(--blur-badge))`,
      WebkitBackdropFilter: variant === "tint" ? "none" : `blur(var(--blur-badge))`,
      fontFamily: "var(--font-body)",
      fontSize: size === "md" ? "var(--text-label-caps)" : "var(--text-micro)",
      fontWeight: "var(--weight-bold)",
      lineHeight: 1,
      letterSpacing: caps ? "var(--tracking-caps)" : "normal",
      textTransform: caps ? "uppercase" : "none",
      whiteSpace: "nowrap",
      ...style,
    }}>
      {children}
    </span>
  );
}
