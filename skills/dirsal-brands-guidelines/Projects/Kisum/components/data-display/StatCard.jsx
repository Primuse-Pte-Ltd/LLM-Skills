import React from "react";

/**
 * KPI / metric block. Uppercase label, large value, muted sub-caption.
 * Value can be highlighted in purple for the leading metric only.
 */
export function StatCard({ label, value, caption, icon, highlight = false, style = {} }) {
  return (
    <div style={{
      display: "flex", flexDirection: "column", gap: 4,
      padding: 20,
      background: "var(--surface-card)",
      border: "1px solid var(--border-subtle)",
      borderRadius: "var(--radius-card)",
      ...style,
    }}>
      <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8, color: "var(--muted)" }}>
        {icon ? <span style={{ display: "inline-flex", width: 18, height: 18 }}>{icon}</span> : null}
        <span style={{
          fontFamily: "var(--font-body)", fontSize: "var(--text-label-sm)",
          fontWeight: "var(--weight-semibold)", textTransform: "uppercase",
          letterSpacing: "0.08em",
        }}>{label}</span>
      </div>
      <span style={{
        fontFamily: "var(--font-display)", fontSize: "var(--text-headline-lg)",
        fontWeight: "var(--weight-bold)", lineHeight: 1.1,
        letterSpacing: "var(--tracking-tight)",
        color: highlight ? "var(--accent)" : "var(--ink)",
        fontVariantNumeric: "tabular-nums",
      }}>{value}</span>
      {caption ? (
        <span style={{ fontFamily: "var(--font-body)", fontSize: "var(--text-label)", color: "var(--muted)" }}>{caption}</span>
      ) : null}
    </div>
  );
}
