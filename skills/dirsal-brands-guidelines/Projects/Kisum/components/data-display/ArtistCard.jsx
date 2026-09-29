import React from "react";
import { Badge } from "../core/Badge.jsx";
import { Button } from "../core/Button.jsx";

/**
 * Marketplace listing card: imagery header with protection gradient + status,
 * metadata grid, tag row, and a predictable action footer. Stays a management
 * object — clear owner/window/territory context, not a social profile.
 */
export function ArtistCard({
  name, location, image, agency, statusLabel = "Available", statusTone = "success",
  window, territory, tags = [], badge = "Non-Official", saved = false, onEnquiry, onDetails, style = {},
}) {
  const [hover, setHover] = React.useState(false);
  const dotColor = { success: "#4ADE80", warning: "#FB923C", danger: "#F87171" }[statusTone] || "#4ADE80";
  return (
    <article
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        display: "flex", flexDirection: "column", overflow: "hidden",
        background: "var(--surface)", border: "1px solid var(--border-subtle)",
        borderRadius: "var(--radius-xl)",
        boxShadow: hover ? "var(--shadow-lifted)" : "none",
        transition: "box-shadow 400ms var(--ease)",
        ...style,
      }}
    >
      <div style={{ position: "relative", height: 260, overflow: "hidden", background: "var(--shell)" }}>
        {image ? (
          <img src={image} alt={name} style={{
            width: "100%", height: "100%", objectFit: "cover",
            transform: hover ? "scale(1.06)" : "none", transition: "transform 600ms var(--ease)",
          }} />
        ) : (
          <div style={{ width: "100%", height: "100%", background: "linear-gradient(135deg, var(--kisum-200), var(--kisum-600))" }} />
        )}
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.9), rgba(0,0,0,0.15) 55%, transparent)" }} />
        <div style={{ position: "absolute", top: 20, left: 20, right: 20, display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
          <span style={{
            padding: "5px 12px", fontFamily: "var(--font-body)", fontSize: "var(--text-label-sm)",
            fontWeight: "var(--weight-bold)", letterSpacing: "0.12em", textTransform: "uppercase",
            color: "#fff", background: "rgba(0,0,0,0.4)", backdropFilter: "blur(8px)",
            border: "1px solid rgba(255,255,255,0.2)", borderRadius: "var(--radius-full)",
          }}>{badge}</span>
          <button aria-label="Save" style={{
            width: 38, height: 38, display: "inline-flex", alignItems: "center", justifyContent: "center",
            borderRadius: "var(--radius-full)", border: "none", cursor: "pointer",
            background: saved ? "var(--accent)" : "rgba(255,255,255,0.2)",
            color: "#fff", backdropFilter: "blur(8px)",
          }}>
            <svg viewBox="0 0 24 24" width="18" height="18" fill={saved ? "currentColor" : "none"} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z" />
            </svg>
          </button>
        </div>
        <div style={{ position: "absolute", left: 24, right: 24, bottom: 22 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 4 }}>
            <span style={{ width: 8, height: 8, borderRadius: "50%", background: dotColor, boxShadow: `0 0 8px ${dotColor}` }} />
            <span style={{ fontFamily: "var(--font-body)", fontSize: "var(--text-label-sm)", fontWeight: "var(--weight-bold)", letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(255,255,255,0.7)" }}>{statusLabel}</span>
          </div>
          <h3 style={{ margin: 0, fontFamily: "var(--font-display)", fontSize: "2rem", fontWeight: "var(--weight-bold)", letterSpacing: "var(--tracking-tight)", color: "#fff", lineHeight: 1.05 }}>{name}</h3>
          {location ? <p style={{ margin: "2px 0 0", fontFamily: "var(--font-body)", fontSize: "var(--text-body)", color: "rgba(255,255,255,0.7)" }}>{location}</p> : null}
        </div>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 20, padding: 24, flex: 1 }}>
        {agency ? (
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", paddingBottom: 16, borderBottom: "1px solid var(--border-subtle)" }}>
            <span style={{ fontFamily: "var(--font-body)", fontSize: "var(--text-label-sm)", fontWeight: "var(--weight-bold)", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--muted)" }}>Listing via</span>
            <Badge tone="brand">{agency}</Badge>
          </div>
        ) : null}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
          <Field label="Window" value={window} />
          <Field label="Territory" value={territory} />
        </div>
        {tags.length ? (
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
            {tags.map((t) => <Badge key={t} tone="neutral" pill={false} uppercase>{t}</Badge>)}
          </div>
        ) : null}
        <div style={{ display: "flex", gap: 12, marginTop: "auto" }}>
          <Button variant="primary" pill full onClick={onEnquiry} style={{ flex: 2 }}>Send Enquiry</Button>
          <Button variant="secondary" pill onClick={onDetails} style={{ flex: 1 }}>Details</Button>
        </div>
      </div>
    </article>
  );
}

function Field({ label, value }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
      <span style={{ fontFamily: "var(--font-body)", fontSize: "var(--text-label-sm)", fontWeight: "var(--weight-bold)", letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--muted)" }}>{label}</span>
      <span style={{ fontFamily: "var(--font-body)", fontSize: "var(--text-body)", fontWeight: "var(--weight-semibold)", color: "var(--ink)" }}>{value || "—"}</span>
    </div>
  );
}
