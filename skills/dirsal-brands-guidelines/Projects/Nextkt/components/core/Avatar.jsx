import React from "react";

const SIZES = { xs: 20, sm: 32, md: 40, lg: 56, xl: 96 };

/**
 * Buyer / organizer avatar. Image, or initials on steel blue (primary-container).
 * `tile` = the account-hero square (8px corners + 4px surface ring + shadow-lg);
 * default corners are the remapped 12px "rounded-full".
 */
export function Avatar({ src, name = "", size = "md", tile = false, color, style = {} }) {
  const px = SIZES[size] || (typeof size === "number" ? size : 40);
  const initials = name.split(" ").map((w) => w[0]).filter(Boolean).slice(0, tile ? 1 : 2).join("").toUpperCase();
  return (
    <div style={{
      width: px,
      height: px,
      flexShrink: 0,
      borderRadius: tile ? "var(--radius-card)" : px <= 24 ? "var(--radius-circle)" : "var(--radius-pill)",
      border: tile ? "4px solid var(--surface)" : "none",
      boxShadow: tile ? "var(--shadow-lg)" : "none",
      background: src ? `center / cover no-repeat url(${src})` : color || "var(--primary-container)",
      color: "var(--on-primary)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontFamily: "var(--font-body)",
      fontWeight: "var(--weight-bold)",
      fontSize: Math.max(10, Math.round(px * (tile ? 0.3 : 0.38))),
      overflow: "hidden",
      ...style,
    }}>
      {src ? null : initials}
    </div>
  );
}
