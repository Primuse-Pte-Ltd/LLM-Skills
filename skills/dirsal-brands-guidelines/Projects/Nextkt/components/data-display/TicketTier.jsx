import React from "react";
import { Badge } from "../core/Badge";

/**
 * One GA ticket tier inside the "Select Tickets" box: tier badge, face price,
 * subtitle, availability, and the pill quantity stepper (0–10). Sold-out tiers
 * swap the stepper for a grey "Sold out" pill.
 */
export function TicketTier({ badge, tone = "ga", name, price, subtitle, available, soldOut = false, qty = 0, max = 10, onChange, style = {} }) {
  const [hover, setHover] = React.useState(false);
  const set = (delta) => onChange && onChange(Math.max(0, Math.min(max, qty + delta)));
  const stepBtn = {
    width: 24, height: 24, display: "flex", alignItems: "center", justifyContent: "center",
    background: "none", border: "none", padding: 0, cursor: "pointer",
    fontFamily: "var(--font-body)", fontSize: 18, color: "var(--on-surface)",
  };
  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        padding: 16,
        background: "var(--surface-container-low)",
        border: `1px solid ${hover ? "var(--primary)" : "var(--outline-variant)"}`,
        borderRadius: "var(--radius-btn)",
        transition: "border-color var(--duration) var(--ease)",
        fontFamily: "var(--font-body)",
        ...style,
      }}
    >
      <Badge tone={tone} variant="tint" size="md">{badge}</Badge>
      <div style={{ marginTop: 12, display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 12 }}>
        <div style={{ minWidth: 0 }}>
          <p style={{ margin: 0, fontSize: "var(--text-body-md)", fontWeight: "var(--weight-bold)", color: "var(--on-surface)" }}>{price}</p>
          {subtitle ? <p style={{ margin: 0, fontSize: "var(--text-label-sm)", lineHeight: 1.4, color: "var(--secondary)" }}>{subtitle}</p> : null}
          {typeof available === "number" ? (
            <p style={{ margin: "4px 0 0", fontSize: "var(--text-label-sm)", color: "var(--on-surface-variant)" }}>
              {soldOut ? "Sold out" : `${available} available`}
            </p>
          ) : null}
        </div>
        {soldOut ? (
          <span style={{
            flexShrink: 0, padding: "4px 12px", borderRadius: "var(--radius-pill)",
            background: "var(--surface-container-highest)", color: "var(--on-surface-variant)", fontSize: "var(--text-label-sm)",
          }}>Sold out</span>
        ) : (
          <div style={{
            flexShrink: 0, display: "flex", alignItems: "center", gap: 12, padding: "4px 12px",
            borderRadius: "var(--radius-pill)", border: "1px solid var(--outline-variant)", background: "var(--surface-container-highest)",
          }}>
            <button type="button" aria-label={`Decrease ${name || badge} quantity`} onClick={() => set(-1)} style={stepBtn}>−</button>
            <span aria-live="polite" style={{ width: 16, textAlign: "center", fontWeight: "var(--weight-bold)", fontVariantNumeric: "tabular-nums", color: "var(--on-surface)" }}>{qty}</span>
            <button type="button" aria-label={`Increase ${name || badge} quantity`} onClick={() => set(1)} style={stepBtn}>+</button>
          </div>
        )}
      </div>
    </div>
  );
}
