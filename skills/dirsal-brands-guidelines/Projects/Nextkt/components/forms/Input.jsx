import React from "react";

/**
 * Labeled text field (auth / checkout / profile). Caps label, optional leading
 * Material Symbol, 4px corners, teal border + 2px teal ring on focus.
 */
export function Input({ label, hint, error, icon = null, id, style = {}, inputStyle = {}, ...rest }) {
  const [focus, setFocus] = React.useState(false);
  const inputId = id || (label ? `nk-${label.replace(/\s+/g, "-").toLowerCase()}` : undefined);
  const ring = error ? "var(--focus-ring-danger)" : "var(--focus-ring)";
  return (
    <label htmlFor={inputId} style={{ display: "flex", flexDirection: "column", gap: 4, ...style }}>
      {label ? (
        <span style={{
          fontFamily: "var(--font-body)", fontSize: "var(--text-label-caps)", fontWeight: "var(--weight-bold)",
          lineHeight: 1, letterSpacing: "var(--tracking-caps)", textTransform: "uppercase",
          color: "var(--on-surface-variant)", marginBottom: 4,
        }}>{label}</span>
      ) : null}
      <span style={{ position: "relative", display: "block" }}>
        {icon ? (
          <span style={{
            position: "absolute", left: 12, top: "50%", transform: "translateY(-50%)",
            display: "inline-flex", color: "var(--outline)", fontSize: 20, pointerEvents: "none",
          }}>{icon}</span>
        ) : null}
        <input
          id={inputId}
          {...rest}
          onFocus={(e) => { setFocus(true); rest.onFocus && rest.onFocus(e); }}
          onBlur={(e) => { setFocus(false); rest.onBlur && rest.onBlur(e); }}
          style={{
            width: "100%",
            boxSizing: "border-box",
            padding: icon ? "12px 16px 12px 40px" : "12px 16px",
            fontFamily: "var(--font-body)",
            fontSize: "var(--text-body-md)",
            color: "var(--on-surface)",
            background: "var(--surface-container-lowest)",
            border: `1px solid ${error ? "var(--error)" : focus ? "var(--primary)" : "var(--outline-variant)"}`,
            borderRadius: "var(--radius-btn)",
            outline: "none",
            boxShadow: focus ? ring : "none",
            transition: "border-color var(--duration) var(--ease), box-shadow var(--duration) var(--ease)",
            ...inputStyle,
          }}
        />
      </span>
      {error ? (
        <span style={{ fontFamily: "var(--font-body)", fontSize: "var(--text-label-sm)", color: "var(--error)" }}>{error}</span>
      ) : hint ? (
        <span style={{ fontFamily: "var(--font-body)", fontSize: "var(--text-label-sm)", color: "var(--on-surface-variant)" }}>{hint}</span>
      ) : null}
    </label>
  );
}
