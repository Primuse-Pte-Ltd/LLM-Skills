import React from "react";

const SIZES = { sm: 32, md: 40, lg: 48, xl: 56 };

/**
 * User / entity avatar. Falls back to initials on a tinted surface when no image.
 */
export function Avatar({ src, name = "", size = "md", square = false, style = {} }) {
  const px = SIZES[size] || (typeof size === "number" ? size : 40);
  const initials = name.split(" ").map((w) => w[0]).filter(Boolean).slice(0, 2).join("").toUpperCase();
  return (
    <div
      style={{
        width: px,
        height: px,
        flexShrink: 0,
        borderRadius: square ? "var(--radius)" : "var(--radius-full)",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "var(--kisum-50)",
        color: "var(--kisum-600)",
        border: "1px solid var(--border-subtle)",
        fontFamily: "var(--font-body)",
        fontWeight: "var(--weight-bold)",
        fontSize: px * 0.36,
        ...style,
      }}
    >
      {src ? (
        <img src={src} alt={name} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
      ) : (
        initials || "?"
      )}
    </div>
  );
}
