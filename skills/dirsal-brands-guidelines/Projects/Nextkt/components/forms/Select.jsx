import React from "react";

/**
 * Filter-bar / form dropdown. Same field shell as the events filter bar:
 * surface fill, outline-variant border, 4px corners, teal focus ring, expand_more chevron.
 */
export function Select({ label, options = [], value, onChange, id, style = {}, ...rest }) {
  const [focus, setFocus] = React.useState(false);
  const selectId = id || (label ? `nk-${label.replace(/\s+/g, "-").toLowerCase()}` : undefined);
  return (
    <label htmlFor={selectId} style={{ display: "flex", flexDirection: "column", gap: 4, ...style }}>
      {label ? (
        <span style={{
          fontFamily: "var(--font-body)", fontSize: "var(--text-label-caps)", fontWeight: "var(--weight-bold)",
          lineHeight: 1, letterSpacing: "var(--tracking-caps)", textTransform: "uppercase",
          color: "var(--on-surface-variant)", marginBottom: 4,
        }}>{label}</span>
      ) : null}
      <span style={{ position: "relative", display: "block" }}>
        <select
          id={selectId}
          value={value}
          onChange={onChange}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
          {...rest}
          style={{
            width: "100%",
            boxSizing: "border-box",
            appearance: "none",
            WebkitAppearance: "none",
            padding: "10px 40px 10px 12px",
            fontFamily: "var(--font-body)",
            fontSize: "var(--text-sm)",
            color: "var(--on-surface)",
            background: "var(--surface)",
            border: `1px solid ${focus ? "var(--primary)" : "var(--outline-variant)"}`,
            borderRadius: "var(--radius-btn)",
            outline: "none",
            boxShadow: focus ? "var(--focus-ring)" : "none",
            cursor: "pointer",
            transition: "border-color var(--duration) var(--ease), box-shadow var(--duration) var(--ease)",
          }}
        >
          {options.map((o) => {
            const opt = typeof o === "string" ? { value: o, label: o } : o;
            return <option key={opt.value} value={opt.value}>{opt.label}</option>;
          })}
        </select>
        <span className="ms" style={{
          position: "absolute", right: 10, top: "50%", transform: "translateY(-50%)",
          fontSize: 20, color: "var(--secondary)", pointerEvents: "none",
        }}>expand_more</span>
      </span>
    </label>
  );
}
