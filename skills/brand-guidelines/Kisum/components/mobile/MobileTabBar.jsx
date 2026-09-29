import React from "react";

/**
 * Mobile bottom navigation bar. Fixed to the bottom, 3–4 tabs. Active tab shows
 * a purple-tint rounded pill with a filled icon; inactive tabs are muted.
 * items: [{ key, label, icon, activeIcon? }].
 */
export function MobileTabBar({ items = [], value, onChange, style = {} }) {
  return (
    <nav style={{
      position: "absolute", left: 0, right: 0, bottom: 0, zIndex: 40,
      height: 68, display: "flex", alignItems: "center", justifyContent: "space-around",
      padding: "0 8px",
      background: "var(--surface-card)",
      borderTop: "1px solid var(--border-subtle)",
      ...style,
    }}>
      {items.map((it) => {
        const active = it.key === value;
        return (
          <button key={it.key} onClick={() => onChange && onChange(it.key)}
            style={{
              display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 3,
              padding: active ? "6px 18px" : "6px 12px",
              border: "none", cursor: "pointer",
              background: active ? "var(--accent-tint)" : "transparent",
              color: active ? "var(--accent)" : "var(--muted)",
              borderRadius: "var(--radius-full)",
              transition: "background var(--duration) var(--ease), color var(--duration) var(--ease)",
            }}>
            <span style={{ display: "inline-flex", width: 24, height: 24 }}>{active && it.activeIcon ? it.activeIcon : it.icon}</span>
            <span style={{ fontFamily: "var(--font-body)", fontSize: "var(--text-label-sm)", fontWeight: active ? 700 : 600, letterSpacing: ".02em" }}>{it.label}</span>
          </button>
        );
      })}
    </nav>
  );
}
