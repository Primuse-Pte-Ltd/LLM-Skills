import React from "react";

/**
 * Tab strips in the four storefront styles:
 * nav (desktop header links) · underline (home category filter, caps) ·
 * chips (mobile category chips) · segmented (auth Sign in / Create account).
 */
export function Tabs({ tabs = [], value, onChange, variant = "underline", style = {} }) {
  if (variant === "segmented") {
    return (
      <div role="tablist" style={{ display: "flex", padding: 4, background: "var(--surface-container)", borderRadius: "var(--radius-btn)", ...style }}>
        {tabs.map((t) => {
          const on = t === value;
          return (
            <button key={t} role="tab" aria-selected={on} onClick={() => onChange && onChange(t)} style={{
              flex: 1, padding: "8px 0", border: "none", cursor: "pointer",
              borderRadius: "var(--radius-xs)",
              background: on ? "var(--surface-container-lowest)" : "transparent",
              boxShadow: on ? "var(--shadow-sm)" : "none",
              color: on ? "var(--primary)" : "var(--on-surface-variant)",
              fontFamily: "var(--font-body)", fontSize: "var(--text-label-sm)", fontWeight: "var(--weight-bold)",
              transition: "all var(--duration) var(--ease)",
            }}>{t}</button>
          );
        })}
      </div>
    );
  }

  if (variant === "chips") {
    return (
      <div role="tablist" style={{ display: "flex", gap: "var(--stack-sm)", overflowX: "auto", padding: "8px 0", scrollbarWidth: "none", ...style }}>
        {tabs.map((t) => {
          const on = t === value;
          return (
            <button key={t} role="tab" aria-selected={on} onClick={() => onChange && onChange(t)} style={{
              whiteSpace: "nowrap", padding: "8px 24px", cursor: "pointer",
              borderRadius: "var(--radius-pill)",
              border: on ? "1px solid transparent" : "1px solid var(--outline-variant)",
              background: on ? "var(--primary)" : "var(--surface-container-low)",
              color: on ? "var(--on-primary)" : "var(--on-surface-variant)",
              boxShadow: on ? "var(--shadow-sm)" : "none",
              fontFamily: "var(--font-body)", fontSize: "var(--text-label-sm)", fontWeight: "var(--weight-medium)",
              transition: "all var(--duration) var(--ease)",
            }}>{t}</button>
          );
        })}
      </div>
    );
  }

  const nav = variant === "nav";
  return (
    <div role="tablist" style={{ display: "flex", gap: 24, overflowX: "auto", scrollbarWidth: "none", ...style }}>
      {tabs.map((t) => {
        const on = t === value;
        return (
          <button key={t} role="tab" aria-selected={on} onClick={() => onChange && onChange(t)} style={{
            whiteSpace: "nowrap", background: "none", border: "none", cursor: "pointer",
            padding: nav ? "0 0 4px" : "8px 4px",
            borderBottom: on ? "2px solid var(--primary)" : "2px solid transparent",
            color: on ? "var(--primary)" : "var(--secondary)",
            fontFamily: "var(--font-body)",
            fontSize: nav ? "var(--text-body-md)" : "var(--text-label-caps)",
            fontWeight: nav ? (on ? "var(--weight-extrabold)" : "var(--weight-semibold)") : "var(--weight-bold)",
            letterSpacing: nav ? 0 : "var(--tracking-caps)",
            textTransform: nav ? "none" : "uppercase",
            lineHeight: nav ? 1.5 : 1,
            transition: "color var(--duration) var(--ease)",
          }}>{t}</button>
        );
      })}
    </div>
  );
}
