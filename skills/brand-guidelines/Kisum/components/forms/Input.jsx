import React from "react";

/**
 * Labeled text input. Label always visible (never placeholder-only).
 * 1px border at rest; purple ring on focus.
 */
export function Input({ label, hint, error, iconLeft, id, style = {}, wrapStyle = {}, ...rest }) {
  const [focus, setFocus] = React.useState(false);
  const inputId = id || `in-${Math.random().toString(36).slice(2, 8)}`;
  const invalid = Boolean(error);
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 6, ...wrapStyle }}>
      {label ? (
        <label htmlFor={inputId} style={{
          fontFamily: "var(--font-body)", fontSize: "var(--text-label)",
          fontWeight: "var(--weight-semibold)", color: "var(--text-body)",
          letterSpacing: "var(--tracking-label)",
        }}>{label}</label>
      ) : null}
      <div style={{ position: "relative", display: "flex", alignItems: "center" }}>
        {iconLeft ? (
          <span style={{ position: "absolute", left: 12, display: "inline-flex", color: focus ? "var(--accent)" : "var(--muted)", pointerEvents: "none" }}>{iconLeft}</span>
        ) : null}
        <input
          id={inputId}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
          style={{
            width: "100%",
            boxSizing: "border-box",
            height: 40,
            padding: iconLeft ? "0 12px 0 38px" : "0 12px",
            fontFamily: "var(--font-body)",
            fontSize: "var(--text-body)",
            color: "var(--ink)",
            background: "var(--surface)",
            border: `1px solid ${invalid ? "var(--danger)" : (focus ? "var(--accent)" : "var(--border)")}`,
            borderRadius: "var(--radius-btn)",
            outline: "none",
            boxShadow: focus ? (invalid ? "var(--focus-ring-danger)" : "var(--focus-ring)") : "none",
            transition: "border-color var(--duration) var(--ease), box-shadow var(--duration) var(--ease)",
            ...style,
          }}
          {...rest}
        />
      </div>
      {error ? (
        <span style={{ fontFamily: "var(--font-body)", fontSize: "var(--text-label)", color: "var(--danger)" }}>{error}</span>
      ) : hint ? (
        <span style={{ fontFamily: "var(--font-body)", fontSize: "var(--text-label)", color: "var(--muted)" }}>{hint}</span>
      ) : null}
    </div>
  );
}
