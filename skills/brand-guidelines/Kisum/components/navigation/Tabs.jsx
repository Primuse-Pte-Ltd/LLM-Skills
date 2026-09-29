import React from "react";

/**
 * Horizontal detail-tab strip. Active tab uses brand emphasis (purple text +
 * underline) without filling the whole bar in purple.
 */
export function Tabs({ tabs = [], value, onChange, style = {} }) {
  const [internal, setInternal] = React.useState(value ?? (tabs[0] && (tabs[0].value ?? tabs[0])));
  const active = value ?? internal;
  const select = (v) => { setInternal(v); onChange && onChange(v); };
  return (
    <div style={{ display: "flex", gap: 28, borderBottom: "1px solid var(--border)", ...style }}>
      {tabs.map((t) => {
        const v = t.value ?? t;
        const labelText = t.label ?? t;
        const isActive = v === active;
        return (
          <button
            key={v}
            onClick={() => select(v)}
            style={{
              position: "relative", padding: "0 0 12px", background: "none", border: "none", cursor: "pointer",
              fontFamily: "var(--font-body)", fontSize: "var(--text-body)",
              fontWeight: isActive ? "var(--weight-bold)" : "var(--weight-medium)",
              color: isActive ? "var(--accent)" : "var(--muted)",
              transition: "color var(--duration) var(--ease)",
            }}
          >
            {labelText}
            <span style={{
              position: "absolute", left: 0, right: 0, bottom: -1, height: 2,
              background: "var(--accent)", borderRadius: 2,
              opacity: isActive ? 1 : 0, transition: "opacity var(--duration) var(--ease)",
            }} />
          </button>
        );
      })}
    </div>
  );
}
