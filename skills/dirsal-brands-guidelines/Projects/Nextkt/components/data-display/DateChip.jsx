import React from "react";

/**
 * Calendar-leaf date: caps month over a bold day.
 * leaf = grey container (discovery cards) · glass = white/85 overlay on imagery (directory cards)
 * · plain = no fill (mobile upcoming list).
 */
export function DateChip({ month, day, variant = "leaf", style = {} }) {
  const shells = {
    leaf: { background: "var(--surface-container)", borderRadius: "var(--radius-xs)", padding: "4px 8px" },
    glass: {
      background: "rgb(255 255 255 / 0.85)", borderRadius: "var(--radius-md)", padding: "4px 10px",
      backdropFilter: "blur(4px)", WebkitBackdropFilter: "blur(4px)",
    },
    plain: { background: "transparent", padding: 0, minWidth: 56 },
  };
  const dayStyle = {
    leaf: { fontSize: 18, color: "var(--on-surface)" },
    glass: { fontSize: 16, color: "var(--primary)" },
    plain: { fontSize: "var(--text-headline-md)", color: "var(--on-surface)", fontWeight: "var(--weight-semibold)" },
  }[variant];
  return (
    <div style={{
      display: "inline-flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
      textAlign: "center", fontFamily: "var(--font-body)", ...shells[variant], ...style,
    }}>
      <span style={{
        fontSize: variant === "plain" ? "var(--text-label-caps)" : "var(--text-micro)",
        fontWeight: "var(--weight-bold)", lineHeight: 1.2, letterSpacing: "var(--tracking-caps)",
        textTransform: "uppercase", color: "var(--primary)",
      }}>{month}</span>
      <span style={{ fontWeight: "var(--weight-bold)", lineHeight: 1, fontVariantNumeric: "tabular-nums", ...dayStyle }}>{day}</span>
    </div>
  );
}
