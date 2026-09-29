import React from "react";

/**
 * Mobile top app bar (64px). Sticky, hairline bottom border, translucent blur.
 * Brand/title on the left, action slot on the right. Works in light and dark.
 */
export function MobileAppBar({ title, eyebrow, brand, right, style = {} }) {
  return (
    <header style={{
      position: "sticky", top: 0, zIndex: 50,
      height: 64, flexShrink: 0,
      display: "flex", alignItems: "center", justifyContent: "space-between",
      padding: "0 16px",
      background: "color-mix(in srgb, var(--surface-page) 90%, transparent)",
      backdropFilter: "blur(12px)",
      borderBottom: "1px solid var(--border-subtle)",
      ...style,
    }}>
      <div style={{ display: "flex", alignItems: "center", gap: 10, minWidth: 0 }}>
        {brand}
        <div style={{ minWidth: 0 }}>
          {eyebrow ? <div style={{ fontFamily: "var(--font-body)", fontSize: "var(--text-label-sm)", fontWeight: 600, letterSpacing: ".08em", textTransform: "uppercase", color: "var(--muted)" }}>{eyebrow}</div> : null}
          {title ? <div style={{ fontFamily: "var(--font-display)", fontSize: "var(--text-title)", fontWeight: 700, letterSpacing: "-.01em", color: "var(--ink)", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{title}</div> : null}
        </div>
      </div>
      {right ? <div style={{ display: "flex", alignItems: "center", gap: 12, flexShrink: 0 }}>{right}</div> : null}
    </header>
  );
}
