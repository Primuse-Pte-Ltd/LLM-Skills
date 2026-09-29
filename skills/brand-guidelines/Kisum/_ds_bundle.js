/* @ds-bundle: {"format":4,"namespace":"KisumDesignSystem_ff14fa","components":[{"name":"Avatar","sourcePath":"components/core/Avatar.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"ArtistCard","sourcePath":"components/data-display/ArtistCard.jsx"},{"name":"DataTable","sourcePath":"components/data-display/DataTable.jsx"},{"name":"SectionHeader","sourcePath":"components/data-display/SectionHeader.jsx"},{"name":"StatCard","sourcePath":"components/data-display/StatCard.jsx"},{"name":"TrackRow","sourcePath":"components/data-display/TrackRow.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"MobileAppBar","sourcePath":"components/mobile/MobileAppBar.jsx"},{"name":"MobileTabBar","sourcePath":"components/mobile/MobileTabBar.jsx"},{"name":"NavItem","sourcePath":"components/navigation/NavItem.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"}],"sourceHashes":{"components/core/Avatar.jsx":"25f31f644c00","components/core/Badge.jsx":"1a1691183f27","components/core/Button.jsx":"97e2c16ed393","components/core/Card.jsx":"8fafb9d293af","components/core/IconButton.jsx":"6ea853e780c0","components/data-display/ArtistCard.jsx":"c53c40270ab1","components/data-display/DataTable.jsx":"8b3253a29621","components/data-display/SectionHeader.jsx":"ef941ec2b8e4","components/data-display/StatCard.jsx":"84a7479cc5eb","components/data-display/TrackRow.jsx":"846c8c9d03c4","components/forms/Input.jsx":"b0f1747f4b10","components/forms/Select.jsx":"fa34482eee36","components/mobile/MobileAppBar.jsx":"ab1d552e25d1","components/mobile/MobileTabBar.jsx":"be126962eed1","components/navigation/NavItem.jsx":"a8fc348a21ab","components/navigation/Tabs.jsx":"e669b68aec89","ui_kits/artist-insights/app.jsx":"50e0f0a2e6eb","ui_kits/artist-insights/icons.jsx":"e12e4789ff56","ui_kits/mobile/app.jsx":"b5007d37cff7","ui_kits/promoters/app.jsx":"593f973a8077","ui_kits/promoters/icons.jsx":"e12e4789ff56"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.KisumDesignSystem_ff14fa = window.KisumDesignSystem_ff14fa || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Avatar.jsx
try { (() => {
const SIZES = {
  sm: 32,
  md: 40,
  lg: 48,
  xl: 56
};

/**
 * User / entity avatar. Falls back to initials on a tinted surface when no image.
 */
function Avatar({
  src,
  name = "",
  size = "md",
  square = false,
  style = {}
}) {
  const px = SIZES[size] || (typeof size === "number" ? size : 40);
  const initials = name.split(" ").map(w => w[0]).filter(Boolean).slice(0, 2).join("").toUpperCase();
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: px,
      height: px,
      flexShrink: 0,
      borderRadius: square ? "var(--radius)" : "var(--radius-full)",
      overflow: "hidden",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: "var(--kisum-50)",
      color: "var(--kisum-600)",
      border: "1px solid var(--border-subtle)",
      fontFamily: "var(--font-body)",
      fontWeight: "var(--weight-bold)",
      fontSize: px * 0.36,
      ...style
    }
  }, src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: name,
    style: {
      width: "100%",
      height: "100%",
      objectFit: "cover"
    }
  }) : initials || "?");
}
Object.assign(__ds_scope, { Avatar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
const TONES = {
  neutral: {
    bg: "var(--shell)",
    fg: "var(--muted)",
    bd: "var(--border)"
  },
  brand: {
    bg: "var(--kisum-50)",
    fg: "var(--kisum-600)",
    bd: "transparent"
  },
  success: {
    bg: "var(--success-tint)",
    fg: "#15803D",
    bd: "transparent"
  },
  danger: {
    bg: "var(--danger-tint)",
    fg: "var(--danger)",
    bd: "transparent"
  },
  warning: {
    bg: "var(--warning-tint)",
    fg: "var(--warning)",
    bd: "transparent"
  },
  outline: {
    bg: "var(--surface)",
    fg: "var(--muted)",
    bd: "var(--border)"
  }
};

/**
 * Small status / count / metadata pill. Brand tone for Kisum count badges,
 * semantic tones for boolean status. Sentence case, never all-caps body copy.
 */
function Badge({
  children,
  tone = "neutral",
  pill = true,
  dot = false,
  uppercase = false,
  style = {}
}) {
  const t = TONES[tone] || TONES.neutral;
  return /*#__PURE__*/React.createElement("span", {
    style: {
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
      ...style
    }
  }, dot ? /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: "50%",
      background: t.fg
    }
  }) : null, children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const SIZES = {
  sm: {
    padding: "6px 12px",
    fontSize: "var(--text-label)",
    height: 32,
    gap: 6,
    icon: 14
  },
  md: {
    padding: "8px 16px",
    fontSize: "var(--text-body)",
    height: 40,
    gap: 8,
    icon: 16
  },
  lg: {
    padding: "12px 22px",
    fontSize: "var(--text-body)",
    height: 48,
    gap: 8,
    icon: 18
  }
};
function variantStyle(variant) {
  switch (variant) {
    case "outline":
      return {
        background: "var(--surface)",
        color: "var(--accent)",
        border: "1px solid var(--accent)"
      };
    case "secondary":
      return {
        background: "var(--surface)",
        color: "var(--ink)",
        border: "1px solid var(--border)"
      };
    case "ghost":
      return {
        background: "transparent",
        color: "var(--accent)",
        border: "1px solid transparent"
      };
    case "destructive":
      return {
        background: "var(--danger)",
        color: "#fff",
        border: "1px solid transparent"
      };
    case "primary":
    default:
      return {
        background: "var(--accent)",
        color: "var(--text-on-accent)",
        border: "1px solid transparent"
      };
  }
}

/**
 * Kisum primary action button. Purple fill for the one primary action per view;
 * outline / secondary / ghost for everything else (Purple Budget Rule).
 */
function Button({
  children,
  variant = "primary",
  size = "md",
  pill = false,
  full = false,
  disabled = false,
  iconLeft = null,
  iconRight = null,
  style = {},
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const [active, setActive] = React.useState(false);
  const s = SIZES[size] || SIZES.md;
  const v = variantStyle(variant);
  const hoverBg = {
    primary: "var(--accent-hover)",
    destructive: "var(--danger-hover)",
    outline: "var(--kisum-50)",
    secondary: "var(--surface-muted)",
    ghost: "var(--kisum-50)"
  }[variant];
  return /*#__PURE__*/React.createElement("button", _extends({}, rest, {
    disabled: disabled,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setActive(false);
    },
    onMouseDown: () => setActive(true),
    onMouseUp: () => setActive(false),
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      gap: s.gap,
      width: full ? "100%" : "auto",
      minHeight: s.height,
      padding: s.padding,
      font: "inherit",
      fontFamily: "var(--font-body)",
      fontSize: s.fontSize,
      fontWeight: "var(--weight-semibold)",
      lineHeight: 1,
      whiteSpace: "nowrap",
      borderRadius: pill ? "var(--radius-full)" : "var(--radius-btn)",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.5 : 1,
      transform: active && !disabled ? "scale(0.97)" : "none",
      transition: "background var(--duration) var(--ease), box-shadow var(--duration) var(--ease), transform 120ms var(--ease)",
      boxShadow: variant === "primary" && hover && !disabled ? "var(--shadow-accent)" : "var(--shadow-xs)",
      ...v,
      ...(hover && !disabled ? {
        background: hoverBg
      } : null),
      ...style
    }
  }), iconLeft ? /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      width: s.icon,
      height: s.icon
    }
  }, iconLeft) : null, children, iconRight ? /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      width: s.icon,
      height: s.icon
    }
  }, iconRight) : null);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Flat-by-default content container. Border at rest; optional hover lift for
 * interactive cards. White surface on the gray page canvas.
 */
function Card({
  children,
  interactive = false,
  padding = 24,
  style = {},
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", _extends({}, rest, {
    onMouseEnter: () => interactive && setHover(true),
    onMouseLeave: () => interactive && setHover(false),
    style: {
      background: "var(--surface-card)",
      border: `1px solid ${hover ? "var(--border-hover)" : "var(--border-subtle)"}`,
      borderRadius: "var(--radius-card)",
      padding,
      boxShadow: hover ? "var(--shadow-lifted)" : "none",
      transform: hover ? `translateY(var(--lift-hover))` : "none",
      transition: "box-shadow var(--duration) var(--ease), transform var(--duration) var(--ease), border-color var(--duration) var(--ease)",
      cursor: interactive ? "pointer" : "default",
      ...style
    }
  }), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Icon-only button for management actions (edit, delete, overflow, notifications).
 * Subtle hover background; no purple unless it is a primary affordance.
 */
function IconButton({
  children,
  size = 40,
  variant = "ghost",
  label,
  style = {},
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const bg = {
    ghost: hover ? "var(--surface-muted)" : "transparent",
    tint: hover ? "var(--kisum-100)" : "var(--kisum-50)",
    solid: hover ? "var(--accent-hover)" : "var(--accent)"
  }[variant];
  const color = variant === "solid" ? "#fff" : variant === "tint" ? "var(--accent)" : "var(--muted)";
  return /*#__PURE__*/React.createElement("button", _extends({}, rest, {
    "aria-label": label,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      width: size,
      height: size,
      padding: 0,
      border: "none",
      borderRadius: "var(--radius-full)",
      background: bg,
      color,
      cursor: "pointer",
      transition: "background var(--duration) var(--ease), color var(--duration) var(--ease)",
      ...style
    }
  }), children);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/data-display/ArtistCard.jsx
try { (() => {
/**
 * Marketplace listing card: imagery header with protection gradient + status,
 * metadata grid, tag row, and a predictable action footer. Stays a management
 * object — clear owner/window/territory context, not a social profile.
 */
function ArtistCard({
  name,
  location,
  image,
  agency,
  statusLabel = "Available",
  statusTone = "success",
  window,
  territory,
  tags = [],
  badge = "Non-Official",
  saved = false,
  onEnquiry,
  onDetails,
  style = {}
}) {
  const [hover, setHover] = React.useState(false);
  const dotColor = {
    success: "#4ADE80",
    warning: "#FB923C",
    danger: "#F87171"
  }[statusTone] || "#4ADE80";
  return /*#__PURE__*/React.createElement("article", {
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: "flex",
      flexDirection: "column",
      overflow: "hidden",
      background: "var(--surface)",
      border: "1px solid var(--border-subtle)",
      borderRadius: "var(--radius-xl)",
      boxShadow: hover ? "var(--shadow-lifted)" : "none",
      transition: "box-shadow 400ms var(--ease)",
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 260,
      overflow: "hidden",
      background: "var(--shell)"
    }
  }, image ? /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: name,
    style: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      transform: hover ? "scale(1.06)" : "none",
      transition: "transform 600ms var(--ease)"
    }
  }) : /*#__PURE__*/React.createElement("div", {
    style: {
      width: "100%",
      height: "100%",
      background: "linear-gradient(135deg, var(--kisum-200), var(--kisum-600))"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      background: "linear-gradient(to top, rgba(0,0,0,0.9), rgba(0,0,0,0.15) 55%, transparent)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: 20,
      left: 20,
      right: 20,
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-start"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      padding: "5px 12px",
      fontFamily: "var(--font-body)",
      fontSize: "var(--text-label-sm)",
      fontWeight: "var(--weight-bold)",
      letterSpacing: "0.12em",
      textTransform: "uppercase",
      color: "#fff",
      background: "rgba(0,0,0,0.4)",
      backdropFilter: "blur(8px)",
      border: "1px solid rgba(255,255,255,0.2)",
      borderRadius: "var(--radius-full)"
    }
  }, badge), /*#__PURE__*/React.createElement("button", {
    "aria-label": "Save",
    style: {
      width: 38,
      height: 38,
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: "var(--radius-full)",
      border: "none",
      cursor: "pointer",
      background: saved ? "var(--accent)" : "rgba(255,255,255,0.2)",
      color: "#fff",
      backdropFilter: "blur(8px)"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    width: "18",
    height: "18",
    fill: saved ? "currentColor" : "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 24,
      right: 24,
      bottom: 22
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8,
      marginBottom: 4
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 8,
      height: 8,
      borderRadius: "50%",
      background: dotColor,
      boxShadow: `0 0 8px ${dotColor}`
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "var(--text-label-sm)",
      fontWeight: "var(--weight-bold)",
      letterSpacing: "0.12em",
      textTransform: "uppercase",
      color: "rgba(255,255,255,0.7)"
    }
  }, statusLabel)), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontFamily: "var(--font-display)",
      fontSize: "2rem",
      fontWeight: "var(--weight-bold)",
      letterSpacing: "var(--tracking-tight)",
      color: "#fff",
      lineHeight: 1.05
    }
  }, name), location ? /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "2px 0 0",
      fontFamily: "var(--font-body)",
      fontSize: "var(--text-body)",
      color: "rgba(255,255,255,0.7)"
    }
  }, location) : null)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 20,
      padding: 24,
      flex: 1
    }
  }, agency ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      paddingBottom: 16,
      borderBottom: "1px solid var(--border-subtle)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "var(--text-label-sm)",
      fontWeight: "var(--weight-bold)",
      letterSpacing: "0.1em",
      textTransform: "uppercase",
      color: "var(--muted)"
    }
  }, "Listing via"), /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    tone: "brand"
  }, agency)) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 20
    }
  }, /*#__PURE__*/React.createElement(Field, {
    label: "Window",
    value: window
  }), /*#__PURE__*/React.createElement(Field, {
    label: "Territory",
    value: territory
  })), tags.length ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      gap: 8
    }
  }, tags.map(t => /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    key: t,
    tone: "neutral",
    pill: false,
    uppercase: true
  }, t))) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 12,
      marginTop: "auto"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "primary",
    pill: true,
    full: true,
    onClick: onEnquiry,
    style: {
      flex: 2
    }
  }, "Send Enquiry"), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "secondary",
    pill: true,
    onClick: onDetails,
    style: {
      flex: 1
    }
  }, "Details"))));
}
function Field({
  label,
  value
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 2
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "var(--text-label-sm)",
      fontWeight: "var(--weight-bold)",
      letterSpacing: "0.08em",
      textTransform: "uppercase",
      color: "var(--muted)"
    }
  }, label), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "var(--text-body)",
      fontWeight: "var(--weight-semibold)",
      color: "var(--ink)"
    }
  }, value || "—"));
}
Object.assign(__ds_scope, { ArtistCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data-display/ArtistCard.jsx", error: String((e && e.message) || e) }); }

// components/data-display/DataTable.jsx
try { (() => {
/**
 * High-density data table. Uppercase label header row on shell tint, 1px row
 * separators, subtle row hover. Columns: [{ key, label, align, render }].
 */
function DataTable({
  columns = [],
  rows = [],
  rowKey = "id",
  onRowClick,
  style = {}
}) {
  const [hoverIdx, setHoverIdx] = React.useState(-1);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      border: "1px solid var(--border-subtle)",
      borderRadius: "var(--radius-card)",
      overflow: "hidden",
      background: "var(--surface)",
      ...style
    }
  }, /*#__PURE__*/React.createElement("table", {
    style: {
      width: "100%",
      borderCollapse: "collapse",
      fontFamily: "var(--font-body)"
    }
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", {
    style: {
      background: "var(--shell)"
    }
  }, columns.map(c => /*#__PURE__*/React.createElement("th", {
    key: c.key,
    style: {
      textAlign: c.align || "left",
      padding: "10px 16px",
      fontSize: "var(--text-label-sm)",
      fontWeight: "var(--weight-semibold)",
      textTransform: "uppercase",
      letterSpacing: "0.06em",
      color: "var(--muted)",
      borderBottom: "1px solid var(--border)",
      whiteSpace: "nowrap"
    }
  }, c.label)))), /*#__PURE__*/React.createElement("tbody", null, rows.map((row, i) => /*#__PURE__*/React.createElement("tr", {
    key: row[rowKey] ?? i,
    onClick: () => onRowClick && onRowClick(row),
    onMouseEnter: () => setHoverIdx(i),
    onMouseLeave: () => setHoverIdx(-1),
    style: {
      background: hoverIdx === i ? "var(--body-bg)" : "transparent",
      cursor: onRowClick ? "pointer" : "default",
      transition: "background var(--duration) var(--ease)"
    }
  }, columns.map(c => /*#__PURE__*/React.createElement("td", {
    key: c.key,
    style: {
      textAlign: c.align || "left",
      padding: "12px 16px",
      fontSize: "var(--text-body-sm)",
      color: "var(--ink)",
      borderBottom: i === rows.length - 1 ? "none" : "1px solid var(--border-subtle)",
      fontVariantNumeric: c.align === "right" ? "tabular-nums" : "normal"
    }
  }, c.render ? c.render(row) : row[c.key])))))));
}
Object.assign(__ds_scope, { DataTable });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data-display/DataTable.jsx", error: String((e && e.message) || e) }); }

// components/data-display/SectionHeader.jsx
try { (() => {
/**
 * Signature overview section header: semibold Manrope title, optional source icon,
 * purple count badge, right-aligned action.
 */
function SectionHeader({
  title,
  count,
  icon,
  action,
  description,
  style = {}
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "flex-end",
      justifyContent: "space-between",
      gap: 16,
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10
    }
  }, icon ? /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      width: 20,
      height: 20,
      color: "var(--muted)"
    }
  }, icon) : null, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontFamily: "var(--font-display)",
      fontSize: "var(--text-headline-lg)",
      fontWeight: "var(--weight-semibold)",
      letterSpacing: "var(--tracking-tight)",
      color: "var(--ink)"
    }
  }, title), count != null ? /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      minWidth: 22,
      height: 22,
      padding: "0 7px",
      fontFamily: "var(--font-body)",
      fontSize: "var(--text-label)",
      fontWeight: "var(--weight-bold)",
      fontVariantNumeric: "tabular-nums",
      color: "var(--kisum-600)",
      background: "var(--kisum-50)",
      borderRadius: "var(--radius-full)"
    }
  }, count) : null), description ? /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "4px 0 0",
      fontFamily: "var(--font-body)",
      fontSize: "var(--text-body)",
      color: "var(--muted)"
    }
  }, description) : null), action ? /*#__PURE__*/React.createElement("div", {
    style: {
      flexShrink: 0
    }
  }, action) : null);
}
Object.assign(__ds_scope, { SectionHeader });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data-display/SectionHeader.jsx", error: String((e && e.message) || e) }); }

// components/data-display/StatCard.jsx
try { (() => {
/**
 * KPI / metric block. Uppercase label, large value, muted sub-caption.
 * Value can be highlighted in purple for the leading metric only.
 */
function StatCard({
  label,
  value,
  caption,
  icon,
  highlight = false,
  style = {}
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 4,
      padding: 20,
      background: "var(--surface-card)",
      border: "1px solid var(--border-subtle)",
      borderRadius: "var(--radius-card)",
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8,
      marginBottom: 8,
      color: "var(--muted)"
    }
  }, icon ? /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      width: 18,
      height: 18
    }
  }, icon) : null, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "var(--text-label-sm)",
      fontWeight: "var(--weight-semibold)",
      textTransform: "uppercase",
      letterSpacing: "0.08em"
    }
  }, label)), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: "var(--text-headline-lg)",
      fontWeight: "var(--weight-bold)",
      lineHeight: 1.1,
      letterSpacing: "var(--tracking-tight)",
      color: highlight ? "var(--accent)" : "var(--ink)",
      fontVariantNumeric: "tabular-nums"
    }
  }, value), caption ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "var(--text-label)",
      color: "var(--muted)"
    }
  }, caption) : null);
}
Object.assign(__ds_scope, { StatCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data-display/StatCard.jsx", error: String((e && e.message) || e) }); }

// components/data-display/TrackRow.jsx
try { (() => {
/**
 * Dense interactive list row: purple tabular rank, optional thumb, title/subtitle,
 * right-aligned metric with trend. Hover lift.
 */
function TrackRow({
  rank,
  thumb,
  title,
  subtitle,
  metric,
  trend,
  trendUp = true,
  onClick,
  style = {}
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: "flex",
      alignItems: "center",
      gap: 16,
      padding: 12,
      borderRadius: "var(--radius-card)",
      background: hover ? "var(--surface)" : "transparent",
      border: `1px solid ${hover ? "var(--border-subtle)" : "transparent"}`,
      boxShadow: hover ? "var(--shadow-lifted)" : "none",
      transform: hover ? "translateY(-2px)" : "none",
      transition: "all var(--duration) var(--ease)",
      cursor: onClick ? "pointer" : "default",
      ...style
    }
  }, rank != null ? /*#__PURE__*/React.createElement("span", {
    style: {
      width: 28,
      flexShrink: 0,
      textAlign: "center",
      fontFamily: "var(--font-display)",
      fontSize: "var(--text-title)",
      fontWeight: "var(--weight-semibold)",
      fontVariantNumeric: "tabular-nums",
      color: "var(--kisum-600)"
    }
  }, String(rank).padStart(2, "0")) : null, thumb !== undefined ? /*#__PURE__*/React.createElement("div", {
    style: {
      width: 44,
      height: 44,
      flexShrink: 0,
      borderRadius: "var(--radius-sm)",
      overflow: "hidden",
      background: "var(--shell)"
    }
  }, thumb ? /*#__PURE__*/React.createElement("img", {
    src: thumb,
    alt: title,
    style: {
      width: "100%",
      height: "100%",
      objectFit: "cover"
    }
  }) : null) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "var(--text-body)",
      fontWeight: "var(--weight-semibold)",
      color: hover ? "var(--accent)" : "var(--ink)",
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis",
      transition: "color var(--duration) var(--ease)"
    }
  }, title), subtitle ? /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "var(--text-label)",
      color: "var(--muted)"
    }
  }, subtitle) : null), metric != null ? /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "right",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "var(--text-body)",
      fontWeight: "var(--weight-bold)",
      color: "var(--ink)",
      fontVariantNumeric: "tabular-nums"
    }
  }, metric), trend ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-end",
      gap: 2,
      fontSize: "var(--text-label-sm)",
      color: trendUp ? "var(--success)" : "var(--danger)"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    width: "12",
    height: "12",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, trendUp ? /*#__PURE__*/React.createElement("polyline", {
    points: "23 6 13.5 15.5 8.5 10.5 1 18"
  }) : /*#__PURE__*/React.createElement("polyline", {
    points: "23 18 13.5 8.5 8.5 13.5 1 6"
  })), trend) : null) : null);
}
Object.assign(__ds_scope, { TrackRow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data-display/TrackRow.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Labeled text input. Label always visible (never placeholder-only).
 * 1px border at rest; purple ring on focus.
 */
function Input({
  label,
  hint,
  error,
  iconLeft,
  id,
  style = {},
  wrapStyle = {},
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const inputId = id || `in-${Math.random().toString(36).slice(2, 8)}`;
  const invalid = Boolean(error);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 6,
      ...wrapStyle
    }
  }, label ? /*#__PURE__*/React.createElement("label", {
    htmlFor: inputId,
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "var(--text-label)",
      fontWeight: "var(--weight-semibold)",
      color: "var(--text-body)",
      letterSpacing: "var(--tracking-label)"
    }
  }, label) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      alignItems: "center"
    }
  }, iconLeft ? /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 12,
      display: "inline-flex",
      color: focus ? "var(--accent)" : "var(--muted)",
      pointerEvents: "none"
    }
  }, iconLeft) : null, /*#__PURE__*/React.createElement("input", _extends({
    id: inputId,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      width: "100%",
      boxSizing: "border-box",
      height: 40,
      padding: iconLeft ? "0 12px 0 38px" : "0 12px",
      fontFamily: "var(--font-body)",
      fontSize: "var(--text-body)",
      color: "var(--ink)",
      background: "var(--surface)",
      border: `1px solid ${invalid ? "var(--danger)" : focus ? "var(--accent)" : "var(--border)"}`,
      borderRadius: "var(--radius-btn)",
      outline: "none",
      boxShadow: focus ? invalid ? "var(--focus-ring-danger)" : "var(--focus-ring)" : "none",
      transition: "border-color var(--duration) var(--ease), box-shadow var(--duration) var(--ease)",
      ...style
    }
  }, rest))), error ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "var(--text-label)",
      color: "var(--danger)"
    }
  }, error) : hint ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "var(--text-label)",
      color: "var(--muted)"
    }
  }, hint) : null);
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Labeled select with refined chevron. Same field treatment as Input.
 */
function Select({
  label,
  options = [],
  id,
  style = {},
  wrapStyle = {},
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const selectId = id || `sel-${Math.random().toString(36).slice(2, 8)}`;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 6,
      ...wrapStyle
    }
  }, label ? /*#__PURE__*/React.createElement("label", {
    htmlFor: selectId,
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "var(--text-label)",
      fontWeight: "var(--weight-semibold)",
      color: "var(--text-body)",
      letterSpacing: "var(--tracking-label)"
    }
  }, label) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("select", _extends({
    id: selectId,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
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
      ...style
    }
  }, rest), options.map(o => {
    const value = typeof o === "string" ? o : o.value;
    const labelText = typeof o === "string" ? o : o.label;
    return /*#__PURE__*/React.createElement("option", {
      key: value,
      value: value
    }, labelText);
  })), /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    width: "16",
    height: "16",
    fill: "none",
    stroke: "var(--muted)",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    style: {
      position: "absolute",
      right: 12,
      pointerEvents: "none"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "m6 9 6 6 6-6"
  }))));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/mobile/MobileAppBar.jsx
try { (() => {
/**
 * Mobile top app bar (64px). Sticky, hairline bottom border, translucent blur.
 * Brand/title on the left, action slot on the right. Works in light and dark.
 */
function MobileAppBar({
  title,
  eyebrow,
  brand,
  right,
  style = {}
}) {
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: "sticky",
      top: 0,
      zIndex: 50,
      height: 64,
      flexShrink: 0,
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "0 16px",
      background: "color-mix(in srgb, var(--surface-page) 90%, transparent)",
      backdropFilter: "blur(12px)",
      borderBottom: "1px solid var(--border-subtle)",
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10,
      minWidth: 0
    }
  }, brand, /*#__PURE__*/React.createElement("div", {
    style: {
      minWidth: 0
    }
  }, eyebrow ? /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "var(--text-label-sm)",
      fontWeight: 600,
      letterSpacing: ".08em",
      textTransform: "uppercase",
      color: "var(--muted)"
    }
  }, eyebrow) : null, title ? /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: "var(--text-title)",
      fontWeight: 700,
      letterSpacing: "-.01em",
      color: "var(--ink)",
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis"
    }
  }, title) : null)), right ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12,
      flexShrink: 0
    }
  }, right) : null);
}
Object.assign(__ds_scope, { MobileAppBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/mobile/MobileAppBar.jsx", error: String((e && e.message) || e) }); }

// components/mobile/MobileTabBar.jsx
try { (() => {
/**
 * Mobile bottom navigation bar. Fixed to the bottom, 3–4 tabs. Active tab shows
 * a purple-tint rounded pill with a filled icon; inactive tabs are muted.
 * items: [{ key, label, icon, activeIcon? }].
 */
function MobileTabBar({
  items = [],
  value,
  onChange,
  style = {}
}) {
  return /*#__PURE__*/React.createElement("nav", {
    style: {
      position: "absolute",
      left: 0,
      right: 0,
      bottom: 0,
      zIndex: 40,
      height: 68,
      display: "flex",
      alignItems: "center",
      justifyContent: "space-around",
      padding: "0 8px",
      background: "var(--surface-card)",
      borderTop: "1px solid var(--border-subtle)",
      ...style
    }
  }, items.map(it => {
    const active = it.key === value;
    return /*#__PURE__*/React.createElement("button", {
      key: it.key,
      onClick: () => onChange && onChange(it.key),
      style: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 3,
        padding: active ? "6px 18px" : "6px 12px",
        border: "none",
        cursor: "pointer",
        background: active ? "var(--accent-tint)" : "transparent",
        color: active ? "var(--accent)" : "var(--muted)",
        borderRadius: "var(--radius-full)",
        transition: "background var(--duration) var(--ease), color var(--duration) var(--ease)"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        display: "inline-flex",
        width: 24,
        height: 24
      }
    }, active && it.activeIcon ? it.activeIcon : it.icon), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-body)",
        fontSize: "var(--text-label-sm)",
        fontWeight: active ? 700 : 600,
        letterSpacing: ".02em"
      }
    }, it.label));
  }));
}
Object.assign(__ds_scope, { MobileTabBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/mobile/MobileTabBar.jsx", error: String((e && e.message) || e) }); }

// components/navigation/NavItem.jsx
try { (() => {
/**
 * App sidebar navigation item. Active = purple fill; hover = purple tint wash.
 * Icon-leading, single line, used inside the mandatory Kisum app shell.
 */
function NavItem({
  icon,
  label,
  active = false,
  badge,
  onClick,
  style = {}
}) {
  const [hover, setHover] = React.useState(false);
  const bg = active ? "var(--accent)" : hover ? "rgba(132,102,172,0.08)" : "transparent";
  const color = active ? "#fff" : hover ? "var(--accent)" : "var(--muted)";
  return /*#__PURE__*/React.createElement("a", {
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: "flex",
      alignItems: "center",
      gap: 14,
      padding: "10px 16px",
      borderRadius: "var(--radius-card)",
      background: bg,
      color,
      cursor: "pointer",
      textDecoration: "none",
      fontFamily: "var(--font-body)",
      fontSize: "var(--text-body)",
      fontWeight: active ? "var(--weight-bold)" : "var(--weight-medium)",
      transition: "background var(--duration) var(--ease), color var(--duration) var(--ease)",
      ...style
    }
  }, icon ? /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      width: 20,
      height: 20,
      flexShrink: 0
    }
  }, icon) : null, /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis"
    }
  }, label), badge != null ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "var(--text-label-sm)",
      fontWeight: "var(--weight-bold)",
      padding: "1px 7px",
      borderRadius: "var(--radius-full)",
      background: active ? "rgba(255,255,255,0.2)" : "var(--kisum-50)",
      color: active ? "#fff" : "var(--accent)"
    }
  }, badge) : null);
}
Object.assign(__ds_scope, { NavItem });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/NavItem.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
/**
 * Horizontal detail-tab strip. Active tab uses brand emphasis (purple text +
 * underline) without filling the whole bar in purple.
 */
function Tabs({
  tabs = [],
  value,
  onChange,
  style = {}
}) {
  const [internal, setInternal] = React.useState(value ?? (tabs[0] && (tabs[0].value ?? tabs[0])));
  const active = value ?? internal;
  const select = v => {
    setInternal(v);
    onChange && onChange(v);
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 28,
      borderBottom: "1px solid var(--border)",
      ...style
    }
  }, tabs.map(t => {
    const v = t.value ?? t;
    const labelText = t.label ?? t;
    const isActive = v === active;
    return /*#__PURE__*/React.createElement("button", {
      key: v,
      onClick: () => select(v),
      style: {
        position: "relative",
        padding: "0 0 12px",
        background: "none",
        border: "none",
        cursor: "pointer",
        fontFamily: "var(--font-body)",
        fontSize: "var(--text-body)",
        fontWeight: isActive ? "var(--weight-bold)" : "var(--weight-medium)",
        color: isActive ? "var(--accent)" : "var(--muted)",
        transition: "color var(--duration) var(--ease)"
      }
    }, labelText, /*#__PURE__*/React.createElement("span", {
      style: {
        position: "absolute",
        left: 0,
        right: 0,
        bottom: -1,
        height: 2,
        background: "var(--accent)",
        borderRadius: 2,
        opacity: isActive ? 1 : 0,
        transition: "opacity var(--duration) var(--ease)"
      }
    }));
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// ui_kits/artist-insights/app.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  Button,
  IconButton,
  Badge,
  Card,
  Avatar,
  StatCard,
  SectionHeader,
  TrackRow,
  Tabs
} = window.KisumDesignSystem_ff14fa;
const Icon = window.Icon;
const SONGS = [{
  rank: 1,
  title: "Cruel Summer",
  subtitle: "Lover • 2019",
  metric: "3.4B",
  trend: "1.2M"
}, {
  rank: 2,
  title: "Blank Space",
  subtitle: "1989 • 2014",
  metric: "2.5B",
  trend: "1.1M"
}, {
  rank: 3,
  title: "Anti-Hero",
  subtitle: "Midnights • 2022",
  metric: "2.0B",
  trend: "398K"
}, {
  rank: 4,
  title: "Shake It Off",
  subtitle: "1989 • 2014",
  metric: "1.9B",
  trend: "818K"
}, {
  rank: 5,
  title: "cardigan",
  subtitle: "folklore • 2020",
  metric: "2.3B",
  trend: "609K"
}, {
  rank: 6,
  title: "Don't Blame Me",
  subtitle: "reputation • 2017",
  metric: "1.6B",
  trend: "453K"
}];
const PLATFORMS = [{
  name: "Instagram",
  value: "273.8M",
  pct: 37,
  leader: true
}, {
  name: "Spotify Followers",
  value: "158.4M",
  pct: 21
}, {
  name: "X (Twitter)",
  value: "80.6M",
  pct: 11
}, {
  name: "Facebook",
  value: "78.6M",
  pct: 11
}, {
  name: "YouTube",
  value: "63.2M",
  pct: 8
}];
function TopBar() {
  return /*#__PURE__*/React.createElement("header", {
    style: {
      height: 72,
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "0 40px",
      borderBottom: "1px solid var(--border)",
      background: "rgba(255,255,255,0.7)",
      backdropFilter: "blur(12px)",
      position: "sticky",
      top: 0,
      zIndex: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 40
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo.svg",
    alt: "Kisum",
    style: {
      height: 24
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: "var(--text-body)",
      color: "var(--muted)",
      letterSpacing: ".02em"
    }
  }, "Artist Insights")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(IconButton, {
    label: "Search"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "search",
    size: 20
  })), /*#__PURE__*/React.createElement(IconButton, {
    label: "Settings"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "settings",
    size: 20
  })), /*#__PURE__*/React.createElement(Avatar, {
    name: "Taylor Swift",
    size: 36
  })));
}
function Hero({
  tab,
  setTab
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 28
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "5fr 7fr",
      gap: 32,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 380,
      borderRadius: "var(--radius-lg)",
      background: "linear-gradient(150deg, var(--kisum-200), var(--kisum-700))",
      boxShadow: "var(--shadow-lifted)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 20
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      fontFamily: "var(--font-display)",
      fontSize: "var(--text-display)",
      fontWeight: 800,
      letterSpacing: "-.025em",
      lineHeight: 1.05
    }
  }, "Taylor Swift"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      gap: 8,
      marginTop: 14
    }
  }, ["Country", "Pop", "Female Vocalists", "Singer-songwriter"].map(g => /*#__PURE__*/React.createElement(Badge, {
    key: g,
    tone: "neutral"
  }, g)))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: "var(--text-headline)",
      fontWeight: 600,
      margin: "0 0 8px"
    }
  }, "About"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: "var(--text-body-lg)",
      lineHeight: 1.6,
      color: "#475569",
      maxWidth: "60ch"
    }
  }, "American singer-songwriter known for narrative songwriting. Signed to Sony/ATV at 14, her pop crossover began with ", /*#__PURE__*/React.createElement("em", null, "Fearless"), " (2008). ", /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, "Read more\u2026"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(MiniStat, {
    icon: "briefcase",
    label: "Management",
    value: "13 Management"
  }), /*#__PURE__*/React.createElement(MiniStat, {
    icon: "ticket",
    label: "Touring",
    value: "Messina Touring Group"
  })))), /*#__PURE__*/React.createElement(Tabs, {
    tabs: ["Overview", "Team", "Biography", "Analytics", "Shows", "Discography"],
    value: tab,
    onChange: setTab
  }));
}
function MiniStat({
  icon,
  label,
  value
}) {
  return /*#__PURE__*/React.createElement(Card, {
    padding: 16,
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12,
      boxShadow: "var(--shadow-lifted)",
      border: "none"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 40,
      height: 40,
      borderRadius: "50%",
      background: "var(--kisum-50)",
      color: "var(--kisum-600)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: icon,
    size: 20
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "var(--text-label-sm)",
      color: "var(--muted)",
      fontWeight: 600
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "var(--text-body)",
      fontWeight: 700
    }
  }, value)));
}
function App() {
  const [tab, setTab] = React.useState("Overview");
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(TopBar, null), /*#__PURE__*/React.createElement("main", {
    style: {
      maxWidth: "var(--page-max)",
      margin: "0 auto",
      padding: "40px",
      display: "flex",
      flexDirection: "column",
      gap: 56
    }
  }, /*#__PURE__*/React.createElement(Hero, {
    tab: tab,
    setTab: setTab
  }), /*#__PURE__*/React.createElement("section", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(4,1fr)",
      gap: 24
    }
  }, /*#__PURE__*/React.createElement(StatCard, {
    label: "Total Audience",
    value: "745.9M",
    caption: "Followers across all platforms",
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "users",
      size: 18
    }),
    highlight: true
  }), /*#__PURE__*/React.createElement(StatCard, {
    label: "Audience Leader",
    value: "273.8M",
    caption: "Top: Instagram",
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "star",
      size: 18
    })
  }), /*#__PURE__*/React.createElement(StatCard, {
    label: "Platforms Tracked",
    value: "21",
    caption: "Live metrics from providers",
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "database",
      size: 18
    })
  }), /*#__PURE__*/React.createElement(StatCard, {
    label: "Monthly Growth",
    value: "+4.2%",
    caption: "Trailing 30 days",
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "trending-up",
      size: 18
    })
  })), /*#__PURE__*/React.createElement("section", null, /*#__PURE__*/React.createElement(SectionHeader, {
    title: "Top Songs",
    count: SONGS.length,
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "music",
      size: 20
    }),
    description: "All-time top streamed tracks from Spotify and global charts.",
    action: /*#__PURE__*/React.createElement(Button, {
      variant: "secondary",
      size: "sm"
    }, "View all tracks")
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 20,
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "8px 40px"
    }
  }, SONGS.map(s => /*#__PURE__*/React.createElement(TrackRow, _extends({
    key: s.rank
  }, s, {
    thumb: null,
    onClick: () => {}
  }))))), /*#__PURE__*/React.createElement("section", null, /*#__PURE__*/React.createElement(SectionHeader, {
    title: "Audience by Platform",
    description: "Top platforms by follower count",
    action: /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: "var(--text-label)",
        color: "var(--muted)",
        fontWeight: 600
      }
    }, "Updated 7m ago")
  }), /*#__PURE__*/React.createElement(Card, {
    style: {
      marginTop: 20,
      padding: 32
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 22
    }
  }, PLATFORMS.map(p => /*#__PURE__*/React.createElement("div", {
    key: p.name,
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      fontSize: "var(--text-label)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8,
      fontWeight: 600
    }
  }, p.name, p.leader && /*#__PURE__*/React.createElement(Badge, {
    tone: "brand",
    uppercase: true
  }, "Leader")), /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 700,
      fontVariantNumeric: "tabular-nums"
    }
  }, p.value, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--muted)",
      fontWeight: 400,
      marginLeft: 6
    }
  }, p.pct, "%"))), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 12,
      background: "var(--kisum-50)",
      borderRadius: "var(--radius-full)",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: "100%",
      width: `${p.pct}%`,
      background: "var(--kisum-600)",
      borderRadius: "var(--radius-full)"
    }
  })))))))));
}
ReactDOM.createRoot(document.getElementById("root")).render(/*#__PURE__*/React.createElement(App, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/artist-insights/app.jsx", error: String((e && e.message) || e) }); }

// ui_kits/artist-insights/icons.jsx
try { (() => {
// Lucide-backed icon component. Renders real Lucide SVGs (CDN) imperatively so
// React reconciliation never fights the replaced nodes.
function Icon({
  name,
  size = 20,
  color = "currentColor",
  strokeWidth = 2,
  style = {}
}) {
  const ref = React.useRef(null);
  React.useEffect(() => {
    const el = ref.current;
    if (!el || !window.lucide) return;
    el.innerHTML = "";
    const i = document.createElement("i");
    i.setAttribute("data-lucide", name);
    el.appendChild(i);
    window.lucide.createIcons({
      attrs: {
        width: size,
        height: size,
        stroke: color,
        "stroke-width": strokeWidth
      }
    });
  });
  return /*#__PURE__*/React.createElement("span", {
    ref: ref,
    style: {
      display: "inline-flex",
      width: size,
      height: size,
      ...style
    }
  });
}
window.Icon = Icon;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/artist-insights/icons.jsx", error: String((e && e.message) || e) }); }

// ui_kits/mobile/app.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  MobileAppBar,
  MobileTabBar,
  StatCard,
  Card,
  Badge,
  Button
} = window.KisumDesignSystem_ff14fa;
const M = ({
  n,
  fill,
  style
}) => /*#__PURE__*/React.createElement("span", {
  className: "ms" + (fill ? " fill" : ""),
  style: style
}, n);

/* ---------------- Data ---------------- */
const KPIS = [{
  label: "Roster Audience",
  value: "2.4M",
  caption: "+4.2%",
  highlight: true
}, {
  label: "Active Offers",
  value: "12",
  caption: "Pending"
}, {
  label: "Market Sentiment",
  value: "88.4",
  caption: "Trending up"
}, {
  label: "Upcoming Shows",
  value: "34",
  caption: "Next 30d"
}];
const EVENTS = [{
  title: "Digital Echoes",
  city: "Berlin",
  venue: "Tempodrom",
  date: "Oct 24",
  status: "On sale",
  tone: "brand"
}, {
  title: "Midnight Jazz",
  city: "London",
  venue: "Royal Albert Hall",
  date: "Nov 02",
  status: "Sold out",
  tone: "success"
}, {
  title: "Neon Genesis",
  city: "Tokyo",
  venue: "Zepp",
  date: "Nov 12",
  status: "Draft",
  tone: "neutral"
}];
const OFFERS = [{
  name: "The Velocity",
  meta: "$45,000 • Flat fee",
  status: "Negotiating",
  tone: "warning",
  icon: "analytics"
}, {
  name: "Sara Luna",
  meta: "$120,000 • 85/15 split",
  status: "Expires soon",
  tone: "danger",
  icon: "person"
}, {
  name: "Cosmic Drift",
  meta: "$28,000 • Flat fee",
  status: "Confirmed",
  tone: "success",
  icon: "music_note"
}];
const RANKS = [{
  rank: 1,
  name: "Coachella Valley",
  loc: "Indio, California",
  idx: 98.4,
  pct: 98,
  trend: "+4.2%",
  up: true
}, {
  rank: 2,
  name: "Tomorrowland",
  loc: "Boom, Belgium",
  idx: 96.1,
  pct: 96,
  trend: "0.0%",
  up: null
}, {
  rank: 3,
  name: "Glastonbury",
  loc: "Pilton, UK",
  idx: 92.7,
  pct: 92,
  trend: "+1.8%",
  up: true
}, {
  rank: 4,
  name: "Lollapalooza",
  loc: "Chicago, USA",
  idx: 89.9,
  pct: 89,
  trend: "−0.5%",
  up: false
}, {
  rank: 5,
  name: "Ultra Miami",
  loc: "Miami, Florida",
  idx: 85.2,
  pct: 85,
  trend: "+12.4%",
  up: true
}];
const ARTISTS = [{
  name: "Sara Luna",
  genre: "Synth-pop",
  aud: "1.2M"
}, {
  name: "The Velocity",
  genre: "Indie rock",
  aud: "840K"
}, {
  name: "Cosmic Drift",
  genre: "Electronic",
  aud: "612K"
}, {
  name: "Neon District",
  genre: "House",
  aud: "455K"
}];

/* ---------------- Shared bits ---------------- */
function SectionTitle({
  children,
  action
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontFamily: "var(--font-display)",
      fontSize: "var(--text-title)",
      fontWeight: 700,
      letterSpacing: "-.01em",
      color: "var(--ink)"
    }
  }, children), action ? /*#__PURE__*/React.createElement("button", {
    style: {
      background: "none",
      border: "none",
      cursor: "pointer",
      fontFamily: "var(--font-body)",
      fontSize: "var(--text-label)",
      fontWeight: 700,
      letterSpacing: ".04em",
      textTransform: "uppercase",
      color: "var(--accent-soft)"
    }
  }, action) : null);
}

/* ---------------- Screens ---------------- */
function Dashboard() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 16,
      display: "flex",
      flexDirection: "column",
      gap: 24
    }
  }, /*#__PURE__*/React.createElement("section", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 12
    }
  }, KPIS.map(k => /*#__PURE__*/React.createElement(StatCard, _extends({
    key: k.label
  }, k, {
    style: {
      padding: 16,
      minHeight: 96
    }
  })))), /*#__PURE__*/React.createElement(Card, {
    padding: 16,
    style: {
      background: "var(--kisum-600)",
      border: "none",
      color: "#fff"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 40,
      height: 40,
      flexShrink: 0,
      borderRadius: "var(--radius)",
      background: "rgba(255,255,255,0.15)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      border: "1px solid rgba(255,255,255,0.15)"
    }
  }, /*#__PURE__*/React.createElement(M, {
    n: "smart_toy",
    fill: true,
    style: {
      color: "#fff"
    }
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "var(--text-label-sm)",
      fontWeight: 700,
      letterSpacing: ".1em",
      textTransform: "uppercase",
      color: "rgba(255,255,255,0.75)",
      marginBottom: 4
    }
  }, "Kisum AI Insight"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: "var(--text-body)",
      lineHeight: 1.5,
      color: "#fff"
    }
  }, "Synth-wave interest in ", /*#__PURE__*/React.createElement("u", null, "Berlin"), " is up 15% this week. High sell-through probability for a mid-tier venue booking."), /*#__PURE__*/React.createElement("button", {
    style: {
      marginTop: 12,
      background: "none",
      border: "none",
      borderBottom: "1px solid rgba(255,255,255,0.5)",
      padding: "0 0 2px",
      color: "#fff",
      fontFamily: "var(--font-body)",
      fontSize: "var(--text-label)",
      fontWeight: 700,
      letterSpacing: ".06em",
      cursor: "pointer",
      display: "inline-flex",
      alignItems: "center",
      gap: 6
    }
  }, "EXPLORE DATA ", /*#__PURE__*/React.createElement(M, {
    n: "arrow_forward",
    style: {
      fontSize: 14
    }
  }))))), /*#__PURE__*/React.createElement("section", null, /*#__PURE__*/React.createElement(SectionTitle, {
    action: "View map"
  }, "Upcoming Events"), /*#__PURE__*/React.createElement("div", {
    className: "hs",
    style: {
      margin: "0 -16px",
      padding: "0 16px"
    }
  }, EVENTS.map(e => /*#__PURE__*/React.createElement(Card, {
    key: e.title,
    padding: 0,
    style: {
      minWidth: 260,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 120,
      background: "linear-gradient(135deg, var(--kisum-400), var(--kisum-700))",
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      top: 10,
      right: 10
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: e.tone,
    uppercase: true
  }, e.status))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: "var(--text-body-lg)",
      color: "var(--ink)"
    }
  }, e.title, " | ", e.city), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 6,
      marginTop: 6,
      color: "var(--muted)",
      fontSize: "var(--text-label)"
    }
  }, /*#__PURE__*/React.createElement(M, {
    n: "calendar_today",
    style: {
      fontSize: 14
    }
  }), e.date, ", 2026 \xB7 ", e.venue)))))), /*#__PURE__*/React.createElement("section", null, /*#__PURE__*/React.createElement(SectionTitle, {
    action: "View all (12)"
  }, "Active Booking Offers"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 8
    }
  }, OFFERS.map(o => /*#__PURE__*/React.createElement(Card, {
    key: o.name,
    interactive: true,
    padding: 12,
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 40,
      height: 40,
      borderRadius: "var(--radius)",
      background: "var(--accent-tint)",
      color: "var(--accent-soft)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(M, {
    n: o.icon,
    style: {
      fontSize: 20
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "var(--text-body)",
      fontWeight: 700,
      color: "var(--ink)"
    }
  }, o.name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "var(--text-label)",
      color: "var(--muted)"
    }
  }, o.meta))), /*#__PURE__*/React.createElement(Badge, {
    tone: o.tone,
    dot: true
  }, o.status))))), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    full: true,
    iconLeft: /*#__PURE__*/React.createElement(M, {
      n: "add_circle",
      fill: true,
      style: {
        fontSize: 18
      }
    }),
    style: {
      padding: "14px 16px"
    }
  }, "Create new proposal"));
}
function Rankings() {
  const [scope, setScope] = React.useState("Global");
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 16,
      display: "flex",
      flexDirection: "column",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      fontFamily: "var(--font-display)",
      fontSize: "var(--text-headline)",
      fontWeight: 700,
      letterSpacing: "-.02em",
      color: "var(--ink)"
    }
  }, "Festival Leaderboard"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "4px 0 0",
      fontSize: "var(--text-body)",
      color: "var(--muted)"
    }
  }, "Real-time popularity index tracking.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      padding: 4,
      background: "var(--surface-muted)",
      borderRadius: "var(--radius-md)",
      width: "fit-content"
    }
  }, ["Global", "Regional"].map(s => /*#__PURE__*/React.createElement("button", {
    key: s,
    onClick: () => setScope(s),
    style: {
      padding: "8px 20px",
      border: "none",
      cursor: "pointer",
      borderRadius: "var(--radius)",
      fontFamily: "var(--font-body)",
      fontSize: "var(--text-body)",
      fontWeight: 600,
      background: scope === s ? "var(--surface-card)" : "transparent",
      color: scope === s ? "var(--accent)" : "var(--muted)",
      boxShadow: scope === s ? "var(--shadow-xs)" : "none"
    }
  }, s))), /*#__PURE__*/React.createElement(Card, {
    padding: 0,
    style: {
      overflow: "hidden"
    }
  }, RANKS.map((r, i) => /*#__PURE__*/React.createElement("div", {
    key: r.rank,
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12,
      padding: "16px 14px",
      borderBottom: i === RANKS.length - 1 ? "none" : "1px solid var(--border-subtle)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 26,
      fontFamily: "var(--font-display)",
      fontSize: "var(--text-title)",
      fontWeight: 700,
      color: "var(--accent-soft)",
      fontVariantNumeric: "tabular-nums"
    }
  }, r.rank), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 40,
      height: 40,
      borderRadius: "var(--radius)",
      background: "linear-gradient(135deg, var(--kisum-400), var(--kisum-700))",
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "var(--text-body)",
      fontWeight: 700,
      color: "var(--ink)"
    }
  }, r.name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "var(--text-label)",
      color: "var(--muted)"
    }
  }, r.loc)), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "right"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "var(--text-body-lg)",
      fontWeight: 700,
      color: "var(--ink)",
      fontVariantNumeric: "tabular-nums"
    }
  }, r.idx), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-end",
      gap: 2,
      fontSize: "var(--text-label-sm)",
      fontWeight: 700,
      color: r.up === null ? "var(--muted)" : r.up ? "var(--success)" : "var(--danger)"
    }
  }, /*#__PURE__*/React.createElement(M, {
    n: r.up === null ? "horizontal_rule" : r.up ? "trending_up" : "trending_down",
    style: {
      fontSize: 14
    }
  }), r.trend))))));
}
function Artists() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 16,
      display: "flex",
      flexDirection: "column",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      fontFamily: "var(--font-display)",
      fontSize: "var(--text-headline)",
      fontWeight: 700,
      letterSpacing: "-.02em",
      color: "var(--ink)"
    }
  }, "Roster"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 8
    }
  }, ARTISTS.map(a => /*#__PURE__*/React.createElement(Card, {
    key: a.name,
    interactive: true,
    padding: 12,
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 44,
      height: 44,
      borderRadius: "50%",
      background: "linear-gradient(135deg, var(--kisum-400), var(--kisum-700))",
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "var(--text-body)",
      fontWeight: 700,
      color: "var(--ink)"
    }
  }, a.name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "var(--text-label)",
      color: "var(--muted)"
    }
  }, a.genre)), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "right"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "var(--text-body)",
      fontWeight: 700,
      color: "var(--ink)"
    }
  }, a.aud), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "var(--text-label-sm)",
      color: "var(--muted)",
      textTransform: "uppercase",
      letterSpacing: ".06em"
    }
  }, "Audience"))))));
}
function AIChat() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 16,
      display: "flex",
      flexDirection: "column",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      fontFamily: "var(--font-display)",
      fontSize: "var(--text-headline)",
      fontWeight: 700,
      letterSpacing: "-.02em",
      color: "var(--ink)"
    }
  }, "Kisum AI"), /*#__PURE__*/React.createElement(Card, {
    padding: 14,
    style: {
      alignSelf: "flex-start",
      maxWidth: "85%",
      background: "var(--surface-muted)",
      border: "none"
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: "var(--text-body)",
      lineHeight: 1.5,
      color: "var(--text-body)"
    }
  }, "Ask me about market sentiment, artist availability, or venue fit.")), /*#__PURE__*/React.createElement(Card, {
    padding: 14,
    style: {
      alignSelf: "flex-end",
      maxWidth: "85%",
      background: "var(--kisum-600)",
      border: "none"
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: "var(--text-body)",
      lineHeight: 1.5,
      color: "#fff"
    }
  }, "Which festivals are rising fastest in APAC?")), /*#__PURE__*/React.createElement(Card, {
    padding: 14,
    style: {
      alignSelf: "flex-start",
      maxWidth: "85%",
      background: "var(--surface-muted)",
      border: "none"
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: "var(--text-body)",
      lineHeight: 1.5,
      color: "var(--text-body)"
    }
  }, "Fuji Rock (+12) leads APAC risers this quarter with exceptional ticket velocity. Want a booking window analysis?")));
}

/* ---------------- Root ---------------- */
function App() {
  const [dark, setDark] = React.useState(false);
  const [tab, setTab] = React.useState("dashboard");
  const TITLES = {
    dashboard: ["Dashboard", "Welcome, Lead Promoter"],
    rankings: ["Rankings", "Market performance"],
    artists: ["Artists", "Your roster"],
    chat: ["AI Chat", "Kisum intelligence"]
  };
  const items = [{
    key: "chat",
    label: "AI Chat",
    icon: /*#__PURE__*/React.createElement(M, {
      n: "smart_toy"
    }),
    activeIcon: /*#__PURE__*/React.createElement(M, {
      n: "smart_toy",
      fill: true
    })
  }, {
    key: "artists",
    label: "Artists",
    icon: /*#__PURE__*/React.createElement(M, {
      n: "group"
    }),
    activeIcon: /*#__PURE__*/React.createElement(M, {
      n: "group",
      fill: true
    })
  }, {
    key: "dashboard",
    label: "Dashboard",
    icon: /*#__PURE__*/React.createElement(M, {
      n: "dashboard"
    }),
    activeIcon: /*#__PURE__*/React.createElement(M, {
      n: "dashboard",
      fill: true
    })
  }, {
    key: "rankings",
    label: "Rankings",
    icon: /*#__PURE__*/React.createElement(M, {
      n: "leaderboard"
    }),
    activeIcon: /*#__PURE__*/React.createElement(M, {
      n: "leaderboard",
      fill: true
    })
  }];
  return /*#__PURE__*/React.createElement("div", {
    className: dark ? "dark" : ""
  }, /*#__PURE__*/React.createElement("div", {
    className: "phone"
  }, /*#__PURE__*/React.createElement(MobileAppBar, {
    eyebrow: TITLES[tab][0],
    title: TITLES[tab][1],
    brand: /*#__PURE__*/React.createElement("img", {
      src: "../../assets/icon.svg",
      alt: "Kisum",
      style: {
        height: 24
      }
    }),
    right: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("button", {
      onClick: () => setDark(!dark),
      "aria-label": "Toggle theme",
      style: {
        background: "none",
        border: "none",
        cursor: "pointer",
        color: "var(--muted)",
        display: "inline-flex"
      }
    }, /*#__PURE__*/React.createElement(M, {
      n: dark ? "light_mode" : "dark_mode",
      style: {
        fontSize: 22
      }
    })), /*#__PURE__*/React.createElement(M, {
      n: "notifications",
      style: {
        color: "var(--muted)",
        fontSize: 22
      }
    }))
  }), /*#__PURE__*/React.createElement("div", {
    className: "scroll"
  }, tab === "dashboard" && /*#__PURE__*/React.createElement(Dashboard, null), tab === "rankings" && /*#__PURE__*/React.createElement(Rankings, null), tab === "artists" && /*#__PURE__*/React.createElement(Artists, null), tab === "chat" && /*#__PURE__*/React.createElement(AIChat, null)), /*#__PURE__*/React.createElement(MobileTabBar, {
    items: items,
    value: tab,
    onChange: setTab
  })));
}
ReactDOM.createRoot(document.getElementById("root")).render(/*#__PURE__*/React.createElement(App, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/mobile/app.jsx", error: String((e && e.message) || e) }); }

// ui_kits/promoters/app.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  Button,
  IconButton,
  Badge,
  Card,
  Avatar,
  Input,
  Select,
  StatCard,
  SectionHeader,
  TrackRow,
  DataTable,
  NavItem,
  ArtistCard,
  Tabs
} = window.KisumDesignSystem_ff14fa;
const Icon = window.Icon;

/* ---------------- Data ---------------- */
const LISTINGS = [{
  id: 1,
  name: "Shakira",
  location: "Barranquilla, Colombia",
  agency: "LGM Agency",
  statusLabel: "Available for Tours",
  statusTone: "success",
  window: "Dec 01 — Dec 20",
  territory: "China",
  tags: ["Concert", "Festival"],
  badge: "Non-Official"
}, {
  id: 2,
  name: "Backstreet Boys",
  location: "Florida, USA",
  agency: "LGM Agency",
  statusLabel: "Limited Avails",
  statusTone: "warning",
  window: "Mar 01 — Apr 13",
  territory: "Asia Pacific",
  tags: ["Stadium Tour", "Concert"],
  badge: "Non-Official"
}, {
  id: 3,
  name: "Rosalía",
  location: "Barcelona, Spain",
  agency: "Primary Talent",
  statusLabel: "Available",
  statusTone: "success",
  window: "Jun 05 — Jul 30",
  territory: "Europe",
  tags: ["Festival", "Arena"],
  badge: "Official"
}];
const REQUESTS = [{
  id: 1,
  artist: "Dua Lipa",
  promoter: "Live Nation MX",
  date: "Aug 14, 2026",
  fee: "$1.20M",
  status: "Confirmed",
  tone: "success"
}, {
  id: 2,
  artist: "The Weeknd",
  promoter: "Primuse Entertainment",
  date: "Sep 02, 2026",
  fee: "$2.75M",
  status: "Negotiating",
  tone: "warning"
}, {
  id: 3,
  artist: "Karol G",
  promoter: "OCESA",
  date: "Oct 19, 2026",
  fee: "$980K",
  status: "Draft",
  tone: "neutral"
}, {
  id: 4,
  artist: "Coldplay",
  promoter: "Primuse Entertainment",
  date: "Nov 08, 2026",
  fee: "$3.40M",
  status: "Declined",
  tone: "danger"
}];

/* ---------------- App Shell ---------------- */
function Sidebar({
  view,
  setView
}) {
  const NAV = [{
    key: "dashboard",
    label: "Dashboard",
    icon: "layout-dashboard"
  }, {
    key: "marketplace",
    label: "Marketplace",
    icon: "store"
  }, {
    key: "requests",
    label: "Requests",
    icon: "inbox",
    badge: 4
  }, {
    key: "artists",
    label: "Artists",
    icon: "sparkles"
  }];
  return /*#__PURE__*/React.createElement("aside", {
    style: {
      width: "var(--sidebar-width)",
      flexShrink: 0,
      background: "var(--surface-sidebar)",
      borderRight: "1px solid var(--border)",
      display: "flex",
      flexDirection: "column"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 80,
      display: "flex",
      alignItems: "center",
      padding: "0 28px",
      borderBottom: "1px solid var(--border)"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo.svg",
    alt: "Kisum",
    style: {
      height: 28
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 20
    }
  }, /*#__PURE__*/React.createElement("button", {
    style: {
      width: "100%",
      display: "flex",
      alignItems: "center",
      gap: 12,
      padding: 10,
      background: "var(--surface)",
      border: "1px solid var(--border)",
      borderRadius: "var(--radius-card)",
      cursor: "pointer",
      boxShadow: "var(--shadow-xs)"
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    name: "Primuse Entertainment",
    square: true,
    size: 40,
    style: {
      background: "var(--ink)",
      color: "#fff"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "left",
      overflow: "hidden",
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "var(--text-body)",
      fontWeight: 600,
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis"
    }
  }, "Primuse Entertainment"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "var(--text-label-sm)",
      fontWeight: 700,
      letterSpacing: ".1em",
      textTransform: "uppercase",
      color: "var(--muted)"
    }
  }, "Promoters")), /*#__PURE__*/React.createElement(Icon, {
    name: "chevrons-up-down",
    size: 16,
    color: "var(--muted)"
  }))), /*#__PURE__*/React.createElement("nav", {
    style: {
      flex: 1,
      padding: "0 12px",
      display: "flex",
      flexDirection: "column",
      gap: 4
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "var(--text-label-sm)",
      fontWeight: 700,
      letterSpacing: ".15em",
      textTransform: "uppercase",
      color: "var(--muted)",
      padding: "8px 16px 4px"
    }
  }, "Management"), NAV.map(n => /*#__PURE__*/React.createElement(NavItem, {
    key: n.key,
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: n.icon
    }),
    label: n.label,
    badge: n.badge,
    active: view === n.key,
    onClick: () => setView(n.key)
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 16,
      borderTop: "1px solid var(--border)"
    }
  }, /*#__PURE__*/React.createElement("button", {
    style: {
      width: "100%",
      display: "flex",
      alignItems: "center",
      gap: 12,
      padding: 8,
      background: "none",
      border: "none",
      borderRadius: "var(--radius-card)",
      cursor: "pointer"
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    name: "Priya Anand",
    size: 40
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "left",
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "var(--text-label-sm)",
      fontWeight: 700,
      letterSpacing: ".08em",
      textTransform: "uppercase",
      color: "var(--muted)"
    }
  }, "Admin"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "var(--text-body)",
      fontWeight: 700
    }
  }, "Priya Anand")), /*#__PURE__*/React.createElement(Icon, {
    name: "chevrons-up-down",
    size: 16,
    color: "var(--muted)"
  }))));
}
function Header({
  crumbs,
  onNew
}) {
  return /*#__PURE__*/React.createElement("header", {
    style: {
      height: 80,
      flexShrink: 0,
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "0 40px",
      borderBottom: "1px solid var(--border)",
      background: "rgba(255,255,255,0.6)",
      backdropFilter: "blur(12px)",
      position: "sticky",
      top: 0,
      zIndex: 10
    }
  }, /*#__PURE__*/React.createElement("nav", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10,
      fontSize: "var(--text-label)",
      fontWeight: 700,
      letterSpacing: ".12em",
      textTransform: "uppercase",
      color: "var(--muted)"
    }
  }, crumbs.map((c, i) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: c
  }, i > 0 && /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--border)"
    }
  }, "/"), /*#__PURE__*/React.createElement("span", {
    style: {
      color: i === crumbs.length - 1 ? "var(--ink)" : "var(--muted)"
    }
  }, c)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(IconButton, {
    label: "Notifications"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "bell",
    size: 20
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 1,
      height: 24,
      background: "var(--border)"
    }
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    iconLeft: /*#__PURE__*/React.createElement(Icon, {
      name: "plus",
      size: 16
    }),
    onClick: onNew
  }, "New Booking")));
}

/* ---------------- Screens ---------------- */
function Dashboard() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--page-max)",
      margin: "0 auto",
      padding: 40,
      display: "flex",
      flexDirection: "column",
      gap: 40
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      fontFamily: "var(--font-display)",
      fontSize: "var(--text-page-title)",
      fontWeight: 700,
      letterSpacing: "-.02em"
    }
  }, "Dashboard"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "8px 0 0",
      fontSize: "var(--text-body-lg)",
      lineHeight: 1.5,
      color: "#64748B"
    }
  }, "Your booking pipeline at a glance \u2014 Q3 2026.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(4,1fr)",
      gap: 24
    }
  }, /*#__PURE__*/React.createElement(StatCard, {
    label: "Open Requests",
    value: "18",
    caption: "4 need your reply",
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "inbox",
      size: 18
    }),
    highlight: true
  }), /*#__PURE__*/React.createElement(StatCard, {
    label: "Confirmed Value",
    value: "$12.4M",
    caption: "This quarter",
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "check-circle",
      size: 18
    })
  }), /*#__PURE__*/React.createElement(StatCard, {
    label: "Active Listings",
    value: "1,248",
    caption: "Across marketplace",
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "store",
      size: 18
    })
  }), /*#__PURE__*/React.createElement(StatCard, {
    label: "Avg. Close Time",
    value: "6.2d",
    caption: "\u22121.1d vs last Q",
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "timer",
      size: 18
    })
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SectionHeader, {
    title: "Recent Requests",
    count: REQUESTS.length,
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "inbox",
      size: 20
    }),
    action: /*#__PURE__*/React.createElement(Button, {
      variant: "secondary",
      size: "sm"
    }, "View all")
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 16
    }
  }, /*#__PURE__*/React.createElement(RequestsTable, {
    compact: true
  }))));
}
function Marketplace({
  onEnquiry
}) {
  const [tab, setTab] = React.useState("All");
  const [q, setQ] = React.useState("");
  const filtered = LISTINGS.filter(l => l.name.toLowerCase().includes(q.toLowerCase()));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--page-max)",
      margin: "0 auto",
      padding: 40,
      display: "flex",
      flexDirection: "column",
      gap: 32
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "flex-end",
      justifyContent: "space-between",
      gap: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 640
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      fontFamily: "var(--font-display)",
      fontSize: "var(--text-display)",
      fontWeight: 800,
      letterSpacing: "-.025em",
      lineHeight: 1.05
    }
  }, "Marketplace"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "12px 0 0",
      fontSize: "var(--text-body-lg)",
      lineHeight: 1.55,
      color: "#64748B"
    }
  }, "Discover exclusive artist listings and premium availabilities. Negotiate directly with top-tier talent management in a secure, transparent environment.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex"
    }
  }, [0, 1, 2].map(i => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      width: 32,
      height: 32,
      borderRadius: "50%",
      border: "2px solid var(--surface)",
      background: "var(--kisum-200)",
      marginLeft: i ? -8 : 0
    }
  }))), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--text-label)",
      fontWeight: 700,
      letterSpacing: ".08em",
      textTransform: "uppercase",
      color: "var(--muted)"
    }
  }, "1.2k+ Active"))), /*#__PURE__*/React.createElement(Card, {
    padding: 8,
    style: {
      display: "flex",
      gap: 12,
      alignItems: "center",
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 240
    }
  }, /*#__PURE__*/React.createElement(Input, {
    placeholder: "Search by name, genre, location\u2026",
    iconLeft: /*#__PURE__*/React.createElement(Icon, {
      name: "search",
      size: 18
    }),
    value: q,
    onChange: e => setQ(e.target.value)
  })), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    iconLeft: /*#__PURE__*/React.createElement(Icon, {
      name: "sliders-horizontal",
      size: 16
    })
  }, "Refine"), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 1,
      height: 28,
      background: "var(--border)"
    }
  }), /*#__PURE__*/React.createElement(Tabs, {
    tabs: ["All", "Official", "Secondary"],
    value: tab,
    onChange: setTab,
    style: {
      border: "none"
    }
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SectionHeader, {
    title: "Listings",
    count: filtered.length,
    action: /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: "var(--text-label)",
        fontWeight: 700,
        letterSpacing: ".12em",
        textTransform: "uppercase",
        color: "var(--muted)"
      }
    }, filtered.length, " results")
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 20,
      display: "grid",
      gridTemplateColumns: "repeat(auto-fill,minmax(340px,1fr))",
      gap: 32
    }
  }, filtered.map(l => /*#__PURE__*/React.createElement(ArtistCard, _extends({
    key: l.id
  }, l, {
    onEnquiry: () => onEnquiry(l),
    onDetails: () => onEnquiry(l)
  }))))));
}
function RequestsTable({
  compact
}) {
  const cols = [{
    key: "artist",
    label: "Artist",
    render: r => /*#__PURE__*/React.createElement("span", {
      style: {
        fontWeight: 600
      }
    }, r.artist)
  }, {
    key: "promoter",
    label: "Promoter"
  }, {
    key: "date",
    label: "Show Date"
  }, {
    key: "fee",
    label: "Fee",
    align: "right",
    render: r => /*#__PURE__*/React.createElement("span", {
      style: {
        fontWeight: 700
      }
    }, r.fee)
  }, {
    key: "status",
    label: "Status",
    render: r => /*#__PURE__*/React.createElement(Badge, {
      tone: r.tone,
      dot: true
    }, r.status)
  }];
  return /*#__PURE__*/React.createElement(DataTable, {
    columns: cols,
    rows: compact ? REQUESTS.slice(0, 4) : REQUESTS,
    onRowClick: () => {}
  });
}
function Requests() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--page-max)",
      margin: "0 auto",
      padding: 40,
      display: "flex",
      flexDirection: "column",
      gap: 32
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      fontFamily: "var(--font-display)",
      fontSize: "var(--text-page-title)",
      fontWeight: 700,
      letterSpacing: "-.02em"
    }
  }, "Booking Requests"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "8px 0 0",
      fontSize: "var(--text-body-lg)",
      color: "#64748B"
    }
  }, "All inbound and outbound offers across your roster.")), /*#__PURE__*/React.createElement(RequestsTable, null));
}
function Placeholder({
  title
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--page-max)",
      margin: "0 auto",
      padding: 40
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: "var(--text-page-title)",
      fontWeight: 700
    }
  }, title), /*#__PURE__*/React.createElement(Card, {
    style: {
      marginTop: 24,
      padding: 64,
      textAlign: "center",
      border: "2px dashed var(--border)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      color: "var(--muted)"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "folder-open",
    size: 40
  })), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: "var(--text-title)",
      margin: "16px 0 4px"
    }
  }, "Nothing here yet"), /*#__PURE__*/React.createElement("p", {
    style: {
      color: "var(--muted)",
      margin: 0
    }
  }, "This surface is part of the Kisum Promoters shell.")));
}

/* ---------------- Enquiry modal + toast ---------------- */
function EnquiryModal({
  listing,
  onClose,
  onSend
}) {
  if (!listing) return null;
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    style: {
      position: "fixed",
      inset: 0,
      background: "rgba(24,24,27,0.45)",
      backdropFilter: "blur(4px)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      zIndex: 50,
      padding: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: e => e.stopPropagation(),
    style: {
      width: 480,
      background: "var(--surface)",
      borderRadius: "var(--radius-lg)",
      boxShadow: "var(--shadow-modal)",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "24px 28px",
      borderBottom: "1px solid var(--border-subtle)",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-start"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "var(--text-label-sm)",
      fontWeight: 700,
      letterSpacing: ".1em",
      textTransform: "uppercase",
      color: "var(--muted)"
    }
  }, "Send Enquiry"), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: "4px 0 0",
      fontFamily: "var(--font-display)",
      fontSize: "var(--text-headline)",
      fontWeight: 700
    }
  }, listing.name)), /*#__PURE__*/React.createElement(IconButton, {
    label: "Close",
    onClick: onClose
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "x",
    size: 20
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 28,
      display: "flex",
      flexDirection: "column",
      gap: 18
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Territory",
    defaultValue: listing.territory
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Window",
    defaultValue: listing.window
  })), /*#__PURE__*/React.createElement(Select, {
    label: "Event type",
    options: listing.tags
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Proposed fee (USD)",
    placeholder: "e.g. 850,000",
    iconLeft: /*#__PURE__*/React.createElement(Icon, {
      name: "dollar-sign",
      size: 16
    })
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("label", {
    style: {
      fontSize: "var(--text-label)",
      fontWeight: 600,
      color: "var(--text-body)"
    }
  }, "Message"), /*#__PURE__*/React.createElement("textarea", {
    rows: 3,
    defaultValue: `Hi ${listing.agency}, we'd love to discuss availability for ${listing.name}.`,
    style: {
      font: "inherit",
      fontSize: "var(--text-body)",
      padding: 12,
      borderRadius: "var(--radius-btn)",
      border: "1px solid var(--border)",
      resize: "vertical",
      color: "var(--ink)"
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "18px 28px",
      borderTop: "1px solid var(--border-subtle)",
      display: "flex",
      justifyContent: "flex-end",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    onClick: onClose
  }, "Cancel"), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    pill: true,
    iconLeft: /*#__PURE__*/React.createElement(Icon, {
      name: "send",
      size: 16
    }),
    onClick: onSend
  }, "Send Enquiry"))));
}
function Toast({
  msg
}) {
  if (!msg) return null;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "fixed",
      bottom: 32,
      left: "50%",
      transform: "translateX(-50%)",
      zIndex: 60,
      display: "flex",
      alignItems: "center",
      gap: 10,
      padding: "12px 20px",
      background: "var(--ink)",
      color: "#fff",
      borderRadius: "var(--radius-full)",
      boxShadow: "var(--shadow-modal)",
      fontSize: "var(--text-body)",
      fontWeight: 600
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "#4ADE80",
      display: "inline-flex"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check-circle",
    size: 18
  })), msg);
}

/* ---------------- Root ---------------- */
const CRUMBS = {
  dashboard: ["Kisum", "Dashboard"],
  marketplace: ["Kisum", "Booking", "Marketplace"],
  requests: ["Kisum", "Booking", "Requests"],
  artists: ["Kisum", "Artists"]
};
function App() {
  const [view, setView] = React.useState("marketplace");
  const [enquiry, setEnquiry] = React.useState(null);
  const [toast, setToast] = React.useState("");
  const send = () => {
    const n = enquiry.name;
    setEnquiry(null);
    setToast(`Enquiry sent to ${n}`);
    setTimeout(() => setToast(""), 3200);
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      height: "100%"
    }
  }, /*#__PURE__*/React.createElement(Sidebar, {
    view: view,
    setView: setView
  }), /*#__PURE__*/React.createElement("main", {
    style: {
      flex: 1,
      display: "flex",
      flexDirection: "column",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement(Header, {
    crumbs: CRUMBS[view],
    onNew: () => setView("marketplace")
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflowY: "auto"
    }
  }, view === "dashboard" && /*#__PURE__*/React.createElement(Dashboard, null), view === "marketplace" && /*#__PURE__*/React.createElement(Marketplace, {
    onEnquiry: setEnquiry
  }), view === "requests" && /*#__PURE__*/React.createElement(Requests, null), view === "artists" && /*#__PURE__*/React.createElement(Placeholder, {
    title: "Artists"
  }))), /*#__PURE__*/React.createElement(EnquiryModal, {
    listing: enquiry,
    onClose: () => setEnquiry(null),
    onSend: send
  }), /*#__PURE__*/React.createElement(Toast, {
    msg: toast
  }));
}
ReactDOM.createRoot(document.getElementById("root")).render(/*#__PURE__*/React.createElement(App, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/promoters/app.jsx", error: String((e && e.message) || e) }); }

// ui_kits/promoters/icons.jsx
try { (() => {
// Lucide-backed icon component. Renders real Lucide SVGs (CDN) imperatively so
// React reconciliation never fights the replaced nodes.
function Icon({
  name,
  size = 20,
  color = "currentColor",
  strokeWidth = 2,
  style = {}
}) {
  const ref = React.useRef(null);
  React.useEffect(() => {
    const el = ref.current;
    if (!el || !window.lucide) return;
    el.innerHTML = "";
    const i = document.createElement("i");
    i.setAttribute("data-lucide", name);
    el.appendChild(i);
    window.lucide.createIcons({
      attrs: {
        width: size,
        height: size,
        stroke: color,
        "stroke-width": strokeWidth
      }
    });
  });
  return /*#__PURE__*/React.createElement("span", {
    ref: ref,
    style: {
      display: "inline-flex",
      width: size,
      height: size,
      ...style
    }
  });
}
window.Icon = Icon;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/promoters/icons.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.ArtistCard = __ds_scope.ArtistCard;

__ds_ns.DataTable = __ds_scope.DataTable;

__ds_ns.SectionHeader = __ds_scope.SectionHeader;

__ds_ns.StatCard = __ds_scope.StatCard;

__ds_ns.TrackRow = __ds_scope.TrackRow;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.MobileAppBar = __ds_scope.MobileAppBar;

__ds_ns.MobileTabBar = __ds_scope.MobileTabBar;

__ds_ns.NavItem = __ds_scope.NavItem;

__ds_ns.Tabs = __ds_scope.Tabs;

})();
