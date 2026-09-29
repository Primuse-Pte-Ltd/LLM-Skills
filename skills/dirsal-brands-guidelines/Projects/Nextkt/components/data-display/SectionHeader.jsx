import React from "react";

/**
 * Section title row. lg = desktop (headline-lg 32px + optional subtitle + underlined
 * teal link action, e.g. "View Full Calendar"). md = mobile (headline-md 24px +
 * caps "See All"). eyebrow = small caps section label ("YOU MIGHT ALSO LIKE").
 */
export function SectionHeader({ title, subtitle, action, onAction, size = "lg", style = {} }) {
  if (size === "eyebrow") {
    return (
      <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", fontFamily: "var(--font-body)", ...style }}>
        <h3 style={{ margin: 0, fontSize: "var(--text-label-caps)", fontWeight: "var(--weight-bold)", letterSpacing: "var(--tracking-caps)", textTransform: "uppercase", color: "var(--secondary)" }}>{title}</h3>
        {action ? <button type="button" onClick={onAction} style={{ background: "none", border: "none", padding: 0, cursor: "pointer", fontFamily: "var(--font-body)", fontSize: "var(--text-label-sm)", color: "var(--primary)" }}>{action}</button> : null}
      </div>
    );
  }
  const lg = size === "lg";
  return (
    <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: 24, fontFamily: "var(--font-body)", ...style }}>
      <div>
        <h2 style={{
          margin: 0, fontFamily: "var(--font-display)",
          fontSize: lg ? "var(--text-headline-lg)" : "var(--text-headline-md)",
          lineHeight: lg ? "var(--text-headline-lg-lh)" : "var(--text-headline-md-lh)",
          fontWeight: "var(--weight-semibold)", letterSpacing: lg ? "var(--tracking-headline)" : 0,
          color: "var(--on-surface)",
        }}>{title}</h2>
        {subtitle ? <p style={{ margin: "8px 0 0", fontSize: "var(--text-body-md)", color: "var(--secondary)" }}>{subtitle}</p> : null}
      </div>
      {action ? (
        lg ? (
          <button type="button" onClick={onAction} style={{
            flexShrink: 0, background: "none", border: "none", borderBottom: "2px solid var(--primary)", borderRadius: 0,
            padding: "0 0 4px", cursor: "pointer", fontFamily: "var(--font-body)", fontSize: "var(--text-body-md)",
            fontWeight: "var(--weight-bold)", color: "var(--primary)",
          }}>{action}</button>
        ) : (
          <button type="button" onClick={onAction} style={{
            flexShrink: 0, background: "none", border: "none", padding: 0, cursor: "pointer", fontFamily: "var(--font-body)",
            fontSize: "var(--text-label-sm)", fontWeight: "var(--weight-bold)", letterSpacing: "0.05em", textTransform: "uppercase", color: "var(--primary)",
          }}>{action}</button>
        )
      ) : null}
    </div>
  );
}
