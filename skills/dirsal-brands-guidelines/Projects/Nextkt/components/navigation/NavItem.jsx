import React from "react";

/**
 * Account sidebar item. Active = solid teal fill, white text, filled icon, shadow-sm.
 * Idle = on-surface-variant, surface-container-high wash on hover. `danger` = Sign Out.
 */
export function NavItem({ icon, label, active = false, danger = false, onClick, style = {} }) {
  const [hover, setHover] = React.useState(false);
  const bg = active ? "var(--primary)" : hover ? (danger ? "var(--error-container)" : "var(--surface-container-high)") : "transparent";
  const fg = active ? "var(--on-primary)" : danger ? "var(--error)" : "var(--on-surface-variant)";
  return (
    <button
      type="button"
      aria-current={active ? "page" : undefined}
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        display: "flex", alignItems: "center", gap: 12, width: "100%",
        padding: "12px 16px", whiteSpace: "nowrap",
        background: bg, color: fg, border: "none",
        borderRadius: "var(--radius-card)",
        boxShadow: active ? "var(--shadow-sm)" : "none",
        fontFamily: "var(--font-body)", fontSize: "var(--text-body-md)", fontWeight: "var(--weight-medium)",
        textAlign: "left", cursor: "pointer",
        transition: "background var(--duration) var(--ease), color var(--duration) var(--ease)",
        ...style,
      }}
    >
      {icon ? <span className={"ms" + (active ? " fill" : "")}>{icon}</span> : null}
      <span>{label}</span>
    </button>
  );
}
