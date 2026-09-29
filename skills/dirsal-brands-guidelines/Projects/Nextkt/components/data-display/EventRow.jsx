import React from "react";
import { DateChip } from "./DateChip";

/**
 * Mobile "Upcoming Events" list row: plain date leaf, title + venue + teal price,
 * favorite heart. Rows are separated by a bottom hairline, not boxed.
 */
export function EventRow({ title, venue, city, price, month, day, favorite = false, last = false, onClick, style = {} }) {
  const [on, setOn] = React.useState(favorite);
  return (
    <div style={{
      display: "flex", alignItems: "center", gap: 16,
      paddingBottom: 16, borderBottom: last ? "none" : "1px solid var(--outline-variant)",
      fontFamily: "var(--font-body)", ...style,
    }}>
      <DateChip month={month} day={day} variant="plain" />
      <div onClick={onClick} style={{ flexGrow: 1, minWidth: 0, cursor: onClick ? "pointer" : "default" }}>
        <h4 style={{ margin: 0, fontSize: "var(--text-body-lg)", fontWeight: "var(--weight-semibold)", lineHeight: 1.35, color: "var(--on-surface)" }}>{title}</h4>
        <p style={{ margin: 0, fontSize: "var(--text-label-sm)", lineHeight: 1.4, color: "var(--on-surface-variant)" }}>
          {venue}{city ? `, ${city}` : ""}
        </p>
        <p style={{ margin: "4px 0 0", fontSize: "var(--text-label-sm)", fontWeight: "var(--weight-bold)", color: "var(--primary)" }}>{price}</p>
      </div>
      <button
        type="button"
        aria-pressed={on}
        aria-label={on ? "Remove from favorites" : "Add to favorites"}
        onClick={() => setOn((v) => !v)}
        className={"ms" + (on ? " fill" : "")}
        style={{ background: "none", border: "none", padding: 8, cursor: "pointer", color: on ? "var(--error)" : "var(--on-surface-variant)" }}
      >favorite</button>
    </div>
  );
}
