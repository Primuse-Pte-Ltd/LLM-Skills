import React from "react";

/**
 * Dense interactive list row: purple tabular rank, optional thumb, title/subtitle,
 * right-aligned metric with trend. Hover lift.
 */
export function TrackRow({ rank, thumb, title, subtitle, metric, trend, trendUp = true, onClick, style = {} }) {
  const [hover, setHover] = React.useState(false);
  return (
    <div
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        display: "flex", alignItems: "center", gap: 16,
        padding: 12,
        borderRadius: "var(--radius-card)",
        background: hover ? "var(--surface)" : "transparent",
        border: `1px solid ${hover ? "var(--border-subtle)" : "transparent"}`,
        boxShadow: hover ? "var(--shadow-lifted)" : "none",
        transform: hover ? "translateY(-2px)" : "none",
        transition: "all var(--duration) var(--ease)",
        cursor: onClick ? "pointer" : "default",
        ...style,
      }}
    >
      {rank != null ? (
        <span style={{
          width: 28, flexShrink: 0, textAlign: "center",
          fontFamily: "var(--font-display)", fontSize: "var(--text-title)",
          fontWeight: "var(--weight-semibold)", fontVariantNumeric: "tabular-nums",
          color: "var(--kisum-600)",
        }}>{String(rank).padStart(2, "0")}</span>
      ) : null}
      {thumb !== undefined ? (
        <div style={{
          width: 44, height: 44, flexShrink: 0, borderRadius: "var(--radius-sm)", overflow: "hidden",
          background: "var(--shell)",
        }}>
          {thumb ? <img src={thumb} alt={title} style={{ width: "100%", height: "100%", objectFit: "cover" }} /> : null}
        </div>
      ) : null}
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{
          fontFamily: "var(--font-body)", fontSize: "var(--text-body)", fontWeight: "var(--weight-semibold)",
          color: hover ? "var(--accent)" : "var(--ink)", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis",
          transition: "color var(--duration) var(--ease)",
        }}>{title}</div>
        {subtitle ? (
          <div style={{ fontFamily: "var(--font-body)", fontSize: "var(--text-label)", color: "var(--muted)" }}>{subtitle}</div>
        ) : null}
      </div>
      {metric != null ? (
        <div style={{ textAlign: "right", flexShrink: 0 }}>
          <div style={{ fontFamily: "var(--font-body)", fontSize: "var(--text-body)", fontWeight: "var(--weight-bold)", color: "var(--ink)", fontVariantNumeric: "tabular-nums" }}>{metric}</div>
          {trend ? (
            <div style={{ display: "flex", alignItems: "center", justifyContent: "flex-end", gap: 2, fontSize: "var(--text-label-sm)", color: trendUp ? "var(--success)" : "var(--danger)" }}>
              <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                {trendUp ? <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" /> : <polyline points="23 18 13.5 8.5 8.5 13.5 1 6" />}
              </svg>
              {trend}
            </div>
          ) : null}
        </div>
      ) : null}
    </div>
  );
}
