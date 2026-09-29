import React from "react";

const TONES = {
  neutral: { bg: "var(--shell)", fg: "var(--muted)", bd: "var(--border)" },
  brand: { bg: "var(--kisum-50)", fg: "var(--kisum-600)", bd: "transparent" },
  success: { bg: "var(--success-tint)", fg: "#15803D", bd: "transparent" },
  danger: { bg: "var(--danger-tint)", fg: "var(--danger)", bd: "transparent" },
  warning: { bg: "var(--warning-tint)", fg: "var(--warning)", bd: "transparent" },
  outline: { bg: "var(--surface)", fg: "var(--muted)", bd: "var(--border)" },
};

/**
 * Small status / count / metadata pill. Brand tone for Kisum count badges,
 * semantic tones for boolean status. Sentence case, never all-caps body copy.
 */
export function Badge({ children, tone = "neutral", pill = true, dot = false, uppercase = false, style = {} }) {
  const t = TONES[tone] || TONES.neutral;
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 5,
        padding: "2px 8px",
        fontFamily: "var(--font-body)",
        fontSize: "var(--text-label-sm)",
        fontWeight: "var(--weight-semibold)",
        lineHeight: 1.4,
        letterSpacing: uppercase ? "0.06em" : "var(--tracking-label)",
        textTransform: uppercase ? "uppercase" : "none",
        color: t.fg,
        background: t.bg,
        border: `1px solid ${t.bd}`,
        borderRadius: pill ? "var(--radius-full)" : "var(--radius-sm)",
        whiteSpace: "nowrap",
        ...style,
      }}
    >
      {dot ? <span style={{ width: 6, height: 6, borderRadius: "50%", background: t.fg }} /> : null}
      {children}
    </span>
  );
}
