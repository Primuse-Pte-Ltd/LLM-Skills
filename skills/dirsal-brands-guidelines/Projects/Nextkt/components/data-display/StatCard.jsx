import React from "react";

/**
 * Account-dashboard stat tile: teal icon disc, large number, bold label, muted sub-line.
 * Hover turns the hairline teal and adds shadow-md (it links somewhere).
 */
export function StatCard({ icon, value, label, sub, onClick, style = {} }) {
  const [hover, setHover] = React.useState(false);
  return (
    <div
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        padding: 24,
        background: "var(--surface-card)",
        border: `1px solid ${hover ? "var(--primary)" : "var(--outline-soft)"}`,
        borderRadius: "var(--radius-card)",
        boxShadow: hover ? "var(--shadow-md)" : "none",
        transition: "border-color var(--duration) var(--ease), box-shadow var(--duration) var(--ease)",
        cursor: onClick ? "pointer" : "default",
        fontFamily: "var(--font-body)",
        ...style,
      }}
    >
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 16 }}>
        <div style={{
          width: 44, height: 44, display: "flex", alignItems: "center", justifyContent: "center",
          borderRadius: "var(--radius-pill)", background: "var(--accent-tint)", color: "var(--primary)",
        }}>{icon}</div>
        <span className="ms" style={{ color: hover ? "var(--primary)" : "var(--on-surface-variant)", transition: "color var(--duration) var(--ease)" }}>arrow_forward</span>
      </div>
      <p style={{
        margin: 0, fontFamily: "var(--font-display)", fontSize: 32, fontWeight: "var(--weight-bold)", lineHeight: 1,
        letterSpacing: "var(--tracking-display)", color: "var(--on-surface)", fontVariantNumeric: "tabular-nums",
      }}>{value}</p>
      <p style={{ margin: "8px 0 0", fontWeight: "var(--weight-bold)", color: "var(--on-surface)" }}>{label}</p>
      {sub ? <p style={{ margin: 0, fontSize: "var(--text-label-sm)", lineHeight: 1.4, color: "var(--on-surface-variant)" }}>{sub}</p> : null}
    </div>
  );
}
