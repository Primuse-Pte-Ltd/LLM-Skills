import React from "react";
import { Badge } from "../core/Badge";
import { DateChip } from "./DateChip";

const STAGE = "radial-gradient(120% 90% at 30% 15%, #488790 0%, #1D1E4C 58%, #06222B 100%)";

function bg(image) {
  if (!image) return STAGE;
  return /gradient\(/.test(image) ? image : `center / cover no-repeat url(${image})`;
}

function Heart({ initial = false }) {
  const [on, setOn] = React.useState(initial);
  return (
    <button
      type="button"
      aria-pressed={on}
      aria-label={on ? "Remove from favorites" : "Add to favorites"}
      onClick={(e) => { e.preventDefault(); e.stopPropagation(); setOn((v) => !v); }}
      className={"ms" + (on ? " fill" : "")}
      style={{ background: "none", border: "none", padding: 0, cursor: "pointer", color: on ? "var(--error)" : "var(--secondary)" }}
    >favorite</button>
  );
}

function Media({ image, ratio, hover, rounded, children }) {
  return (
    <div style={{ position: "relative", aspectRatio: ratio, overflow: "hidden", borderRadius: rounded || 0, background: "var(--surface-container)" }}>
      <div style={{
        position: "absolute", inset: 0, background: bg(image),
        transform: hover ? "scale(var(--hover-zoom))" : "none",
        transition: "transform var(--duration-image) var(--ease)",
      }} />
      {children}
    </div>
  );
}

/**
 * Event card in the four storefront treatments:
 * featured (16:9, home "Premiere Events") · discovery (1:1 + Quick Buy overlay, "Upcoming Events")
 * · directory (16:10 + glass date, /events grid) · poster (3:4 mobile rail).
 * `image` accepts a URL or a CSS gradient placeholder.
 */
export function EventCard({
  variant = "featured",
  title,
  image,
  badge = "On Sale",
  badgeTone = "on-sale",
  eyebrow,
  summary,
  venue,
  city,
  price,
  month,
  day,
  stock = "On Sale",
  cta = "Book Now",
  onClick,
  style = {},
}) {
  const [hover, setHover] = React.useState(false);
  const hoverProps = { onMouseEnter: () => setHover(true), onMouseLeave: () => setHover(false), onClick };
  const titleStyle = {
    margin: 0, fontFamily: "var(--font-display)", fontSize: "var(--text-headline-md)", fontWeight: "var(--weight-semibold)",
    lineHeight: "var(--text-headline-md-lh)", color: "var(--on-surface)",
  };
  const eyebrowStyle = {
    display: "block", fontFamily: "var(--font-body)", fontSize: 11, fontWeight: "var(--weight-bold)", lineHeight: 1.2,
    letterSpacing: "var(--tracking-caps)", textTransform: "uppercase", color: "var(--primary)",
  };
  const place = [venue, city].filter(Boolean).join(variant === "discovery" ? " • " : ", ");

  if (variant === "discovery") {
    return (
      <div {...hoverProps} style={{
        overflow: "hidden", background: "var(--surface-container-lowest)", border: "1px solid var(--outline-variant)",
        borderRadius: "var(--radius-xs)", boxShadow: hover ? "var(--shadow-md)" : "none",
        transition: "box-shadow var(--duration) var(--ease)", cursor: "pointer", ...style,
      }}>
        <Media image={image} ratio="1 / 1">
          <div style={{
            position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center",
            background: "rgb(0 0 0 / 0.4)", opacity: hover ? 1 : 0, transition: "opacity var(--duration) var(--ease)",
          }}>
            <span style={{ background: "#fff", color: "var(--primary)", borderRadius: "var(--radius-xs)", padding: "8px 16px", fontFamily: "var(--font-body)", fontSize: "var(--text-sm)", fontWeight: "var(--weight-bold)" }}>Quick Buy</span>
          </div>
        </Media>
        <div style={{ padding: 16 }}>
          <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: 8 }}>
            <DateChip month={month} day={day} />
            <Heart />
          </div>
          <h4 style={{ margin: "0 0 4px", fontFamily: "var(--font-body)", fontSize: "var(--text-sm)", fontWeight: "var(--weight-bold)", color: "var(--on-surface)", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{title}</h4>
          <p style={{ margin: "0 0 8px", fontFamily: "var(--font-body)", fontSize: 11, color: "var(--secondary)", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{place}</p>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", borderTop: "1px solid var(--outline-variant)", paddingTop: 12, marginTop: 4 }}>
            <span style={{ fontFamily: "var(--font-body)", fontSize: 12, fontWeight: "var(--weight-bold)", color: "var(--primary)" }}>{price}</span>
            <Badge tone="neutral" variant="tint" caps={false}>{stock}</Badge>
          </div>
        </div>
      </div>
    );
  }

  if (variant === "directory") {
    return (
      <div {...hoverProps} style={{
        overflow: "hidden", background: "var(--surface-container-lowest)", border: "1px solid var(--outline-soft)",
        borderRadius: "var(--radius-card)", boxShadow: hover ? "var(--shadow-md)" : "none",
        transition: "box-shadow var(--duration) var(--ease)", cursor: "pointer", ...style,
      }}>
        <Media image={image} ratio="16 / 10" hover={hover}>
          <DateChip month={month} day={day} variant="glass" style={{ position: "absolute", left: 12, top: 12 }} />
        </Media>
        <div style={{ padding: 16, display: "flex", flexDirection: "column", gap: 8 }}>
          <h3 style={{ ...titleStyle, color: hover ? "var(--primary)" : "var(--on-surface)", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{title}</h3>
          <p style={{ margin: 0, display: "flex", alignItems: "center", gap: 4, fontFamily: "var(--font-body)", fontSize: "var(--text-body-md)", color: "var(--on-surface-variant)", whiteSpace: "nowrap", overflow: "hidden" }}>
            <span className="ms" style={{ fontSize: 14 }}>location_on</span>{venue || "Venue TBA"}
          </p>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", borderTop: "1px solid var(--outline-soft)", paddingTop: 12 }}>
            <span style={{ fontFamily: "var(--font-body)", fontWeight: "var(--weight-bold)", color: "var(--primary)" }}>{price}</span>
            <span style={{ background: "var(--primary)", color: "var(--on-primary)", borderRadius: "var(--radius-btn)", padding: "6px 16px", fontFamily: "var(--font-body)", fontSize: "var(--text-label-sm)", fontWeight: "var(--weight-bold)", opacity: hover ? 0.9 : 1 }}>{cta}</span>
          </div>
        </div>
      </div>
    );
  }

  if (variant === "poster") {
    return (
      <div {...hoverProps} style={{ display: "flex", flexDirection: "column", minWidth: 280, cursor: "pointer", ...style }}>
        <div style={{ marginBottom: 8 }}>
          <Media image={image} ratio="3 / 4" hover={hover} rounded="var(--radius-btn)">
            <Badge variant="glass" size="md" style={{ position: "absolute", right: 12, top: 12 }}>{badge}</Badge>
          </Media>
        </div>
        <span style={{ ...eyebrowStyle, fontSize: "var(--text-label-caps)", marginBottom: 4 }}>{eyebrow}</span>
        <h4 style={{ margin: 0, fontFamily: "var(--font-display)", fontSize: "var(--text-body-lg)", fontWeight: "var(--weight-semibold)", color: "var(--on-surface)", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{title}</h4>
        <p style={{ margin: 0, fontFamily: "var(--font-body)", fontSize: "var(--text-body-md)", color: "var(--on-surface-variant)" }}>{venue}</p>
      </div>
    );
  }

  return (
    <div {...hoverProps} style={{
      position: "relative", overflow: "hidden", background: "var(--surface-container-low)",
      border: "1px solid var(--outline-variant)", borderRadius: "var(--radius-btn)", cursor: "pointer", ...style,
    }}>
      <Media image={image} ratio="16 / 9" hover={hover}>
        <Badge tone={badgeTone} style={{ position: "absolute", right: 16, top: 16, padding: "4px 12px" }}>{badge}</Badge>
      </Media>
      <div style={{ padding: 16 }}>
        <span style={{ ...eyebrowStyle, marginBottom: 8 }}>{eyebrow}</span>
        <h3 style={{ ...titleStyle, marginBottom: 8 }}>{title}</h3>
        <p style={{
          margin: "0 0 24px", fontFamily: "var(--font-body)", fontSize: "var(--text-sm)", lineHeight: "var(--text-sm-lh)", color: "var(--secondary)",
          display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical", overflow: "hidden",
        }}>{summary}</p>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <span style={{ fontFamily: "var(--font-display)", fontSize: "var(--text-headline-md)", fontWeight: "var(--weight-semibold)", color: "var(--primary)" }}>{price}</span>
          <span style={{ background: "var(--primary)", color: "#fff", borderRadius: "var(--radius-xs)", padding: "8px 24px", fontFamily: "var(--font-body)", fontWeight: "var(--weight-bold)", opacity: hover ? 0.9 : 1, transition: "opacity var(--duration) var(--ease)" }}>{cta}</span>
        </div>
      </div>
    </div>
  );
}
