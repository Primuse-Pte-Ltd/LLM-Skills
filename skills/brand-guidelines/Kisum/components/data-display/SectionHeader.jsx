import React from "react";

/**
 * Signature overview section header: semibold Manrope title, optional source icon,
 * purple count badge, right-aligned action.
 */
export function SectionHeader({ title, count, icon, action, description, style = {} }) {
  return (
    <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: 16, ...style }}>
      <div style={{ minWidth: 0 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          {icon ? <span style={{ display: "inline-flex", width: 20, height: 20, color: "var(--muted)" }}>{icon}</span> : null}
          <h2 style={{
            margin: 0, fontFamily: "var(--font-display)",
            fontSize: "var(--text-headline-lg)", fontWeight: "var(--weight-semibold)",
            letterSpacing: "var(--tracking-tight)", color: "var(--ink)",
          }}>{title}</h2>
          {count != null ? (
            <span style={{
              display: "inline-flex", alignItems: "center", justifyContent: "center",
              minWidth: 22, height: 22, padding: "0 7px",
              fontFamily: "var(--font-body)", fontSize: "var(--text-label)",
              fontWeight: "var(--weight-bold)", fontVariantNumeric: "tabular-nums",
              color: "var(--kisum-600)", background: "var(--kisum-50)",
              borderRadius: "var(--radius-full)",
            }}>{count}</span>
          ) : null}
        </div>
        {description ? (
          <p style={{ margin: "4px 0 0", fontFamily: "var(--font-body)", fontSize: "var(--text-body)", color: "var(--muted)" }}>{description}</p>
        ) : null}
      </div>
      {action ? <div style={{ flexShrink: 0 }}>{action}</div> : null}
    </div>
  );
}
