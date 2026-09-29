import React from "react";

/**
 * High-density data table. Uppercase label header row on shell tint, 1px row
 * separators, subtle row hover. Columns: [{ key, label, align, render }].
 */
export function DataTable({ columns = [], rows = [], rowKey = "id", onRowClick, style = {} }) {
  const [hoverIdx, setHoverIdx] = React.useState(-1);
  return (
    <div style={{
      border: "1px solid var(--border-subtle)", borderRadius: "var(--radius-card)",
      overflow: "hidden", background: "var(--surface)", ...style,
    }}>
      <table style={{ width: "100%", borderCollapse: "collapse", fontFamily: "var(--font-body)" }}>
        <thead>
          <tr style={{ background: "var(--shell)" }}>
            {columns.map((c) => (
              <th key={c.key} style={{
                textAlign: c.align || "left", padding: "10px 16px",
                fontSize: "var(--text-label-sm)", fontWeight: "var(--weight-semibold)",
                textTransform: "uppercase", letterSpacing: "0.06em", color: "var(--muted)",
                borderBottom: "1px solid var(--border)", whiteSpace: "nowrap",
              }}>{c.label}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr
              key={row[rowKey] ?? i}
              onClick={() => onRowClick && onRowClick(row)}
              onMouseEnter={() => setHoverIdx(i)}
              onMouseLeave={() => setHoverIdx(-1)}
              style={{
                background: hoverIdx === i ? "var(--body-bg)" : "transparent",
                cursor: onRowClick ? "pointer" : "default",
                transition: "background var(--duration) var(--ease)",
              }}
            >
              {columns.map((c) => (
                <td key={c.key} style={{
                  textAlign: c.align || "left", padding: "12px 16px",
                  fontSize: "var(--text-body-sm)", color: "var(--ink)",
                  borderBottom: i === rows.length - 1 ? "none" : "1px solid var(--border-subtle)",
                  fontVariantNumeric: c.align === "right" ? "tabular-nums" : "normal",
                }}>{c.render ? c.render(row) : row[c.key]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
