import React from "react";

/**
 * Flat surface container. White (`surface-container-lowest`) on the #f8f9fa canvas,
 * 1px outline-variant hairline, 8px corners. `interactive` adds the shadow-md hover lift.
 * `tone="muted"` = surface-container info panel (venue info / event time block).
 */
export function Card({ children, interactive = false, padding = 24, tone = "default", soft = false, style = {}, ...rest }) {
  const [hover, setHover] = React.useState(false);
  const bg = tone === "muted" ? "var(--surface-container)" : tone === "low" ? "var(--surface-container-low)" : "var(--surface-card)";
  const line = interactive && hover ? "var(--primary)" : soft ? "var(--outline-soft)" : "var(--outline-variant)";
  return (
    <div
      {...rest}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        background: bg,
        border: `1px solid ${line}`,
        borderRadius: "var(--radius-card)",
        padding,
        boxShadow: interactive && hover ? "var(--shadow-md)" : "none",
        transition: "box-shadow var(--duration) var(--ease), border-color var(--duration) var(--ease)",
        cursor: interactive ? "pointer" : "default",
        ...style,
      }}
    >
      {children}
    </div>
  );
}
