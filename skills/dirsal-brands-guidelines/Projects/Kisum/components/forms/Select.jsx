import React from "react";

/**
 * Labeled select with refined chevron. Same field treatment as Input.
 */
export function Select({ label, options = [], id, style = {}, wrapStyle = {}, ...rest }) {
  const [focus, setFocus] = React.useState(false);
  const selectId = id || `sel-${Math.random().toString(36).slice(2, 8)}`;
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 6, ...wrapStyle }}>
      {label ? (
        <label htmlFor={selectId} style={{
          fontFamily: "var(--font-body)", fontSize: "var(--text-label)",
          fontWeight: "var(--weight-semibold)", color: "var(--text-body)",
          letterSpacing: "var(--tracking-label)",
        }}>{label}</label>
      ) : null}
      <div style={{ position: "relative", display: "flex", alignItems: "center" }}>
        <select
          id={selectId}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
          style={{
            width: "100%",
            boxSizing: "border-box",
            height: 40,
            padding: "0 36px 0 12px",
            appearance: "none",
            WebkitAppearance: "none",
            fontFamily: "var(--font-body)",
            fontSize: "var(--text-body)",
            color: "var(--ink)",
            background: "var(--surface)",
            border: `1px solid ${focus ? "var(--accent)" : "var(--border)"}`,
            borderRadius: "var(--radius-btn)",
            outline: "none",
            boxShadow: focus ? "var(--focus-ring)" : "none",
            cursor: "pointer",
            transition: "border-color var(--duration) var(--ease), box-shadow var(--duration) var(--ease)",
            ...style,
          }}
          {...rest}
        >
          {options.map((o) => {
            const value = typeof o === "string" ? o : o.value;
            const labelText = typeof o === "string" ? o : o.label;
            return <option key={value} value={value}>{labelText}</option>;
          })}
        </select>
        <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="var(--muted)"
          strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
          style={{ position: "absolute", right: 12, pointerEvents: "none" }}>
          <path d="m6 9 6 6 6-6" />
        </svg>
      </div>
    </div>
  );
}
