import React from "react";

const DEFAULT_ITEMS = [
  { key: "discover", label: "Discover", icon: "explore" },
  { key: "tickets", label: "Tickets", icon: "confirmation_number" },
  { key: "venues", label: "Venues", icon: "stadium" },
  { key: "profile", label: "Profile", icon: "person" },
];

/**
 * Persistent mobile bottom nav (below lg). Four tabs; active = teal + filled glyph.
 * Labels are 10px uppercase. 96px tall including the home-indicator safe area.
 */
export function MobileTabBar({ items = DEFAULT_ITEMS, value = "discover", onChange, safeArea = 34, style = {} }) {
  return (
    <nav aria-label="Primary" style={{
      height: "var(--tab-bar-height)", boxSizing: "border-box", paddingBottom: safeArea,
      display: "flex", alignItems: "center", justifyContent: "space-around",
      background: "var(--surface)", borderTop: "1px solid var(--outline-variant)",
      ...style,
    }}>
      {items.map((it) => {
        const on = it.key === value;
        return (
          <button key={it.key} type="button" aria-current={on ? "page" : undefined} onClick={() => onChange && onChange(it.key)} style={{
            display: "flex", flexDirection: "column", alignItems: "center", gap: 4,
            background: "none", border: "none", padding: 0, cursor: "pointer",
            color: on ? "var(--primary)" : "var(--on-surface-variant)",
          }}>
            <span className={"ms" + (on ? " fill" : "")}>{it.icon}</span>
            <span style={{ fontFamily: "var(--font-body)", fontSize: "var(--text-micro)", fontWeight: "var(--weight-medium)", textTransform: "uppercase", lineHeight: 1.2 }}>{it.label}</span>
          </button>
        );
      })}
    </nav>
  );
}
