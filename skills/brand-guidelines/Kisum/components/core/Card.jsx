import React from "react";

/**
 * Flat-by-default content container. Border at rest; optional hover lift for
 * interactive cards. White surface on the gray page canvas.
 */
export function Card({ children, interactive = false, padding = 24, style = {}, ...rest }) {
  const [hover, setHover] = React.useState(false);
  return (
    <div
      {...rest}
      onMouseEnter={() => interactive && setHover(true)}
      onMouseLeave={() => interactive && setHover(false)}
      style={{
        background: "var(--surface-card)",
        border: `1px solid ${hover ? "var(--border-hover)" : "var(--border-subtle)"}`,
        borderRadius: "var(--radius-card)",
        padding,
        boxShadow: hover ? "var(--shadow-lifted)" : "none",
        transform: hover ? `translateY(var(--lift-hover))` : "none",
        transition: "box-shadow var(--duration) var(--ease), transform var(--duration) var(--ease), border-color var(--duration) var(--ease)",
        cursor: interactive ? "pointer" : "default",
        ...style,
      }}
    >
      {children}
    </div>
  );
}
