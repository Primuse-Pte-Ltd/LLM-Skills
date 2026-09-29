import React from "react";

/**
 * App sidebar navigation item. Active = purple fill; hover = purple tint wash.
 * Icon-leading, single line, used inside the mandatory Kisum app shell.
 */
export function NavItem({ icon, label, active = false, badge, onClick, style = {} }) {
  const [hover, setHover] = React.useState(false);
  const bg = active ? "var(--accent)" : (hover ? "rgba(132,102,172,0.08)" : "transparent");
  const color = active ? "#fff" : (hover ? "var(--accent)" : "var(--muted)");
  return (
    <a
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        display: "flex", alignItems: "center", gap: 14,
        padding: "10px 16px", borderRadius: "var(--radius-card)",
        background: bg, color, cursor: "pointer", textDecoration: "none",
        fontFamily: "var(--font-body)", fontSize: "var(--text-body)",
        fontWeight: active ? "var(--weight-bold)" : "var(--weight-medium)",
        transition: "background var(--duration) var(--ease), color var(--duration) var(--ease)",
        ...style,
      }}
    >
      {icon ? <span style={{ display: "inline-flex", width: 20, height: 20, flexShrink: 0 }}>{icon}</span> : null}
      <span style={{ flex: 1, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{label}</span>
      {badge != null ? (
        <span style={{
          fontFamily: "var(--font-body)", fontSize: "var(--text-label-sm)", fontWeight: "var(--weight-bold)",
          padding: "1px 7px", borderRadius: "var(--radius-full)",
          background: active ? "rgba(255,255,255,0.2)" : "var(--kisum-50)",
          color: active ? "#fff" : "var(--accent)",
        }}>{badge}</span>
      ) : null}
    </a>
  );
}
