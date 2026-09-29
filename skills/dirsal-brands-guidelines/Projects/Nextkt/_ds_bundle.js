/* @ds-bundle: {"format":4,"namespace":"NextktDesignSystem_1c6e87","components":[{"name":"Avatar","sourcePath":"components/core/Avatar.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"DateChip","sourcePath":"components/data-display/DateChip.jsx"},{"name":"EventCard","sourcePath":"components/data-display/EventCard.jsx"},{"name":"EventRow","sourcePath":"components/data-display/EventRow.jsx"},{"name":"SectionHeader","sourcePath":"components/data-display/SectionHeader.jsx"},{"name":"StatCard","sourcePath":"components/data-display/StatCard.jsx"},{"name":"TicketTier","sourcePath":"components/data-display/TicketTier.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"MobileAppBar","sourcePath":"components/mobile/MobileAppBar.jsx"},{"name":"MobileTabBar","sourcePath":"components/mobile/MobileTabBar.jsx"},{"name":"NavItem","sourcePath":"components/navigation/NavItem.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"}],"sourceHashes":{"components/core/Avatar.jsx":"324ae4f16550","components/core/Badge.jsx":"b55a5709ed33","components/core/Button.jsx":"0fc5680f371d","components/core/Card.jsx":"05c67b41341e","components/core/IconButton.jsx":"5b7f39739517","components/data-display/DateChip.jsx":"67d97d81e605","components/data-display/EventCard.jsx":"f82a73effbce","components/data-display/EventRow.jsx":"541b53e3ab02","components/data-display/SectionHeader.jsx":"651d5c7e7924","components/data-display/StatCard.jsx":"75bc1a1310d7","components/data-display/TicketTier.jsx":"b9b963c1599e","components/forms/Input.jsx":"26b103278813","components/forms/Select.jsx":"ea4e57c2bfb7","components/mobile/MobileAppBar.jsx":"96c3b2b49b86","components/mobile/MobileTabBar.jsx":"a41b5415f11f","components/navigation/NavItem.jsx":"514804265133","components/navigation/Tabs.jsx":"db534daed04d"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.NextktDesignSystem_1c6e87 = window.NextktDesignSystem_1c6e87 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Avatar.jsx
try { (() => {
const SIZES = {
  xs: 20,
  sm: 32,
  md: 40,
  lg: 56,
  xl: 96
};

/**
 * Buyer / organizer avatar. Image, or initials on steel blue (primary-container).
 * `tile` = the account-hero square (8px corners + 4px surface ring + shadow-lg);
 * default corners are the remapped 12px "rounded-full".
 */
function Avatar({
  src,
  name = "",
  size = "md",
  tile = false,
  color,
  style = {}
}) {
  const px = SIZES[size] || (typeof size === "number" ? size : 40);
  const initials = name.split(" ").map(w => w[0]).filter(Boolean).slice(0, tile ? 1 : 2).join("").toUpperCase();
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: px,
      height: px,
      flexShrink: 0,
      borderRadius: tile ? "var(--radius-card)" : px <= 24 ? "var(--radius-circle)" : "var(--radius-pill)",
      border: tile ? "4px solid var(--surface)" : "none",
      boxShadow: tile ? "var(--shadow-lg)" : "none",
      background: src ? `center / cover no-repeat url(${src})` : color || "var(--primary-container)",
      color: "var(--on-primary)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontFamily: "var(--font-body)",
      fontWeight: "var(--weight-bold)",
      fontSize: Math.max(10, Math.round(px * (tile ? 0.3 : 0.38))),
      overflow: "hidden",
      ...style
    }
  }, src ? null : initials);
}
__ds_scope.Avatar = Avatar;
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
const TONES = {
  "on-sale": {
    color: "var(--status-on-sale)",
    solid: "rgb(16 185 129 / 0.9)",
    tint: "rgb(16 185 129 / 0.10)"
  },
  primary: {
    color: "var(--primary)",
    solid: "rgb(28 110 135 / 0.9)",
    tint: "rgb(28 110 135 / 0.10)"
  },
  ga: {
    color: "var(--tier-ga)",
    solid: "var(--tier-ga)",
    tint: "rgb(65 114 146 / 0.10)"
  },
  vip: {
    color: "var(--tier-vip)",
    solid: "rgb(212 175 55 / 0.9)",
    tint: "rgb(212 175 55 / 0.10)"
  },
  tables: {
    color: "var(--tier-tables)",
    solid: "var(--tier-tables)",
    tint: "rgb(29 30 76 / 0.10)"
  },
  "sold-out": {
    color: "var(--status-sold-out)",
    solid: "rgb(107 114 128 / 0.9)",
    tint: "rgb(107 114 128 / 0.10)"
  },
  error: {
    color: "var(--error)",
    solid: "var(--error)",
    tint: "rgb(186 26 26 / 0.10)"
  },
  neutral: {
    color: "var(--on-secondary-container)",
    solid: "var(--secondary)",
    tint: "var(--secondary-container)"
  }
};

/**
 * Status / tier badge. Caps-only, tiny, 2px corners.
 * solid = over imagery (ON SALE on a card photo) · tint = on surfaces (tier chips, stock).
 * glass = translucent white chip for hero photography.
 */
function Badge({
  children,
  tone = "on-sale",
  variant = "solid",
  caps = true,
  size = "sm",
  style = {}
}) {
  const t = TONES[tone] || TONES["on-sale"];
  const isGlass = variant === "glass";
  const bg = isGlass ? "var(--glass-badge)" : variant === "tint" ? t.tint : t.solid;
  const fg = isGlass || variant === "solid" ? "#FFFFFF" : t.color;
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 4,
      width: "fit-content",
      padding: size === "md" ? "4px 12px" : "4px 8px",
      borderRadius: isGlass ? "var(--radius-pill)" : "var(--radius-xs)",
      background: bg,
      color: fg,
      backdropFilter: variant === "tint" ? "none" : `blur(var(--blur-badge))`,
      WebkitBackdropFilter: variant === "tint" ? "none" : `blur(var(--blur-badge))`,
      fontFamily: "var(--font-body)",
      fontSize: size === "md" ? "var(--text-label-caps)" : "var(--text-micro)",
      fontWeight: "var(--weight-bold)",
      lineHeight: 1,
      letterSpacing: caps ? "var(--tracking-caps)" : "normal",
      textTransform: caps ? "uppercase" : "none",
      whiteSpace: "nowrap",
      ...style
    }
  }, children);
}
__ds_scope.Badge = Badge;
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const SIZES = {
  sm: {
    padding: "6px 16px",
    fontSize: "var(--text-label-sm)",
    height: 32,
    gap: 6,
    icon: 18
  },
  md: {
    padding: "10px 24px",
    fontSize: "var(--text-body-md)",
    height: 44,
    gap: 8,
    icon: 20
  },
  lg: {
    padding: "16px 40px",
    fontSize: "var(--text-body-md)",
    height: 56,
    gap: 8,
    icon: 24
  },
  cta: {
    padding: "0 24px",
    fontSize: "var(--text-headline-md)",
    height: 60,
    gap: 8,
    icon: 24
  }
};
function variantStyle(variant) {
  switch (variant) {
    case "container":
      return {
        background: "var(--primary-container)",
        color: "var(--on-primary-container)",
        border: "1px solid transparent"
      };
    case "outline":
      return {
        background: "transparent",
        color: "var(--primary)",
        border: "1px solid var(--primary)"
      };
    case "secondary":
      return {
        background: "var(--surface-container)",
        color: "var(--on-surface)",
        border: "1px solid var(--outline-variant)"
      };
    case "inverse":
      return {
        background: "#FFFFFF",
        color: "var(--primary)",
        border: "1px solid transparent"
      };
    case "glass":
      return {
        background: "var(--glass-overlay)",
        color: "#FFFFFF",
        border: "1px solid var(--glass-border)",
        backdropFilter: "blur(var(--blur-glass))",
        WebkitBackdropFilter: "blur(var(--blur-glass))"
      };
    case "link":
      return {
        background: "transparent",
        color: "var(--primary)",
        border: "none",
        borderBottom: "2px solid var(--primary)",
        borderRadius: 0,
        padding: "0 0 4px",
        minHeight: 0
      };
    case "destructive":
      return {
        background: "transparent",
        color: "var(--error)",
        border: "1px solid transparent"
      };
    case "primary":
    default:
      return {
        background: "var(--primary)",
        color: "var(--on-primary)",
        border: "1px solid transparent"
      };
  }
}

/**
 * Nextkt action button. Teal fill (`primary`) for the action that moves the buyer
 * toward a ticket; `container` (steel blue) for the big Add-to-Cart CTA; `glass`
 * over event photography; `link` for "View Full Calendar"-style text actions.
 */
function Button({
  children,
  variant = "primary",
  size = "md",
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
  const hoverStyle = {
    primary: {
      background: "var(--primary-container)"
    },
    container: {
      opacity: 0.9
    },
    outline: {
      background: "var(--primary)",
      color: "var(--on-primary)"
    },
    secondary: {
      background: "var(--surface-container-high)"
    },
    inverse: {
      background: "var(--surface)"
    },
    glass: {
      background: "rgb(255 255 255 / 0.10)"
    },
    link: {
      opacity: 0.7
    },
    destructive: {
      background: "var(--error-container)"
    }
  }[variant];
  const pressScale = size === "cta" ? "var(--press-scale-cta)" : "var(--press-scale)";
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
      fontFamily: "var(--font-body)",
      fontSize: s.fontSize,
      fontWeight: size === "cta" ? "var(--weight-semibold)" : "var(--weight-bold)",
      lineHeight: 1,
      whiteSpace: "nowrap",
      borderRadius: "var(--radius-btn)",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.6 : 1,
      transform: active && !disabled ? `scale(${pressScale})` : "none",
      transition: "background var(--duration) var(--ease), color var(--duration) var(--ease), opacity var(--duration) var(--ease), transform 120ms var(--ease)",
      ...v,
      ...(hover && !disabled ? hoverStyle : null),
      ...style
    }
  }), iconLeft ? /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      fontSize: s.icon
    }
  }, iconLeft) : null, children, iconRight ? /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      fontSize: s.icon
    }
  }, iconRight) : null);
}
__ds_scope.Button = Button;
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Flat surface container. White (`surface-container-lowest`) on the #f8f9fa canvas,
 * 1px outline-variant hairline, 8px corners. `interactive` adds the shadow-md hover lift.
 * `tone="muted"` = surface-container info panel (venue info / event time block).
 */
function Card({
  children,
  interactive = false,
  padding = 24,
  tone = "default",
  soft = false,
  style = {},
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const bg = tone === "muted" ? "var(--surface-container)" : tone === "low" ? "var(--surface-container-low)" : "var(--surface-card)";
  const line = interactive && hover ? "var(--primary)" : soft ? "var(--outline-soft)" : "var(--outline-variant)";
  return /*#__PURE__*/React.createElement("div", _extends({}, rest, {
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      background: bg,
      border: `1px solid ${line}`,
      borderRadius: "var(--radius-card)",
      padding,
      boxShadow: interactive && hover ? "var(--shadow-md)" : "none",
      transition: "box-shadow var(--duration) var(--ease), border-color var(--duration) var(--ease)",
      cursor: interactive ? "pointer" : "default",
      ...style
    }
  }), children);
}
__ds_scope.Card = Card;
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function variantStyle(variant) {
  switch (variant) {
    case "glass":
      return {
        background: "transparent",
        color: "#FFFFFF",
        border: "1px solid var(--glass-border)"
      };
    case "floating":
      return {
        background: "rgb(248 249 250 / 0.85)",
        color: "var(--on-surface)",
        border: "1px solid var(--outline-variant)",
        boxShadow: "var(--shadow-md)",
        backdropFilter: "blur(8px)",
        WebkitBackdropFilter: "blur(8px)"
      };
    case "brand":
      return {
        background: "transparent",
        color: "var(--primary)",
        border: "1px solid transparent"
      };
    case "ghost":
    default:
      return {
        background: "transparent",
        color: "var(--on-surface-variant)",
        border: "1px solid transparent"
      };
  }
}

/**
 * Icon-only control (cart, menu, carousel arrows, mobile back). 40px, 12px radius —
 * the remapped `rounded-full`, so it reads as a soft square, not a circle.
 * Optional `count` renders the teal cart badge.
 */
function IconButton({
  children,
  label,
  variant = "ghost",
  size = 40,
  count = 0,
  style = {},
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const [active, setActive] = React.useState(false);
  const hoverStyle = {
    ghost: {
      background: "var(--surface-container)",
      color: "var(--primary)"
    },
    brand: {
      background: "var(--surface-container-low)"
    },
    glass: {
      background: "rgb(255 255 255 / 0.10)"
    },
    floating: {
      background: "var(--surface-container)"
    }
  }[variant];
  return /*#__PURE__*/React.createElement("button", _extends({}, rest, {
    "aria-label": label,
    title: label,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setActive(false);
    },
    onMouseDown: () => setActive(true),
    onMouseUp: () => setActive(false),
    style: {
      position: "relative",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      width: size,
      height: size,
      flexShrink: 0,
      padding: 0,
      borderRadius: "var(--radius-pill)",
      cursor: "pointer",
      transform: active ? "scale(var(--press-scale))" : "none",
      transition: "background var(--duration) var(--ease), color var(--duration) var(--ease), transform 120ms var(--ease)",
      ...variantStyle(variant),
      ...(hover ? hoverStyle : null),
      ...style
    }
  }), children, count > 0 ? /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      right: 2,
      top: 2,
      minWidth: 18,
      height: 18,
      padding: "0 4px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: "var(--radius-pill)",
      background: "var(--primary)",
      color: "var(--on-primary)",
      fontFamily: "var(--font-body)",
      fontSize: 11,
      fontWeight: "var(--weight-bold)",
      lineHeight: 1,
      boxShadow: "0 0 0 2px var(--surface)"
    }
  }, count > 99 ? "99+" : count) : null);
}
__ds_scope.IconButton = IconButton;
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/data-display/DateChip.jsx
try { (() => {
/**
 * Calendar-leaf date: caps month over a bold day.
 * leaf = grey container (discovery cards) · glass = white/85 overlay on imagery (directory cards)
 * · plain = no fill (mobile upcoming list).
 */
function DateChip({
  month,
  day,
  variant = "leaf",
  style = {}
}) {
  const shells = {
    leaf: {
      background: "var(--surface-container)",
      borderRadius: "var(--radius-xs)",
      padding: "4px 8px"
    },
    glass: {
      background: "rgb(255 255 255 / 0.85)",
      borderRadius: "var(--radius-md)",
      padding: "4px 10px",
      backdropFilter: "blur(4px)",
      WebkitBackdropFilter: "blur(4px)"
    },
    plain: {
      background: "transparent",
      padding: 0,
      minWidth: 56
    }
  };
  const dayStyle = {
    leaf: {
      fontSize: 18,
      color: "var(--on-surface)"
    },
    glass: {
      fontSize: 16,
      color: "var(--primary)"
    },
    plain: {
      fontSize: "var(--text-headline-md)",
      color: "var(--on-surface)",
      fontWeight: "var(--weight-semibold)"
    }
  }[variant];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "inline-flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      textAlign: "center",
      fontFamily: "var(--font-body)",
      ...shells[variant],
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: variant === "plain" ? "var(--text-label-caps)" : "var(--text-micro)",
      fontWeight: "var(--weight-bold)",
      lineHeight: 1.2,
      letterSpacing: "var(--tracking-caps)",
      textTransform: "uppercase",
      color: "var(--primary)"
    }
  }, month), /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: "var(--weight-bold)",
      lineHeight: 1,
      fontVariantNumeric: "tabular-nums",
      ...dayStyle
    }
  }, day));
}
__ds_scope.DateChip = DateChip;
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data-display/DateChip.jsx", error: String((e && e.message) || e) }); }

// components/data-display/EventCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const Badge = __ds_scope.Badge;
const DateChip = __ds_scope.DateChip;
const STAGE = "radial-gradient(120% 90% at 30% 15%, #488790 0%, #1D1E4C 58%, #06222B 100%)";
function bg(image) {
  if (!image) return STAGE;
  return /gradient\(/.test(image) ? image : `center / cover no-repeat url(${image})`;
}
function Heart({
  initial = false
}) {
  const [on, setOn] = React.useState(initial);
  return /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-pressed": on,
    "aria-label": on ? "Remove from favorites" : "Add to favorites",
    onClick: e => {
      e.preventDefault();
      e.stopPropagation();
      setOn(v => !v);
    },
    className: "ms" + (on ? " fill" : ""),
    style: {
      background: "none",
      border: "none",
      padding: 0,
      cursor: "pointer",
      color: on ? "var(--error)" : "var(--secondary)"
    }
  }, "favorite");
}
function Media({
  image,
  ratio,
  hover,
  rounded,
  children
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      aspectRatio: ratio,
      overflow: "hidden",
      borderRadius: rounded || 0,
      background: "var(--surface-container)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      background: bg(image),
      transform: hover ? "scale(var(--hover-zoom))" : "none",
      transition: "transform var(--duration-image) var(--ease)"
    }
  }), children);
}

/**
 * Event card in the four storefront treatments:
 * featured (16:9, home "Premiere Events") · discovery (1:1 + Quick Buy overlay, "Upcoming Events")
 * · directory (16:10 + glass date, /events grid) · poster (3:4 mobile rail).
 * `image` accepts a URL or a CSS gradient placeholder.
 */
function EventCard({
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
  style = {}
}) {
  const [hover, setHover] = React.useState(false);
  const hoverProps = {
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    onClick
  };
  const titleStyle = {
    margin: 0,
    fontFamily: "var(--font-display)",
    fontSize: "var(--text-headline-md)",
    fontWeight: "var(--weight-semibold)",
    lineHeight: "var(--text-headline-md-lh)",
    color: "var(--on-surface)"
  };
  const eyebrowStyle = {
    display: "block",
    fontFamily: "var(--font-body)",
    fontSize: 11,
    fontWeight: "var(--weight-bold)",
    lineHeight: 1.2,
    letterSpacing: "var(--tracking-caps)",
    textTransform: "uppercase",
    color: "var(--primary)"
  };
  const place = [venue, city].filter(Boolean).join(variant === "discovery" ? " • " : ", ");
  if (variant === "discovery") {
    return /*#__PURE__*/React.createElement("div", _extends({}, hoverProps, {
      style: {
        overflow: "hidden",
        background: "var(--surface-container-lowest)",
        border: "1px solid var(--outline-variant)",
        borderRadius: "var(--radius-xs)",
        boxShadow: hover ? "var(--shadow-md)" : "none",
        transition: "box-shadow var(--duration) var(--ease)",
        cursor: "pointer",
        ...style
      }
    }), /*#__PURE__*/React.createElement(Media, {
      image: image,
      ratio: "1 / 1"
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        position: "absolute",
        inset: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "rgb(0 0 0 / 0.4)",
        opacity: hover ? 1 : 0,
        transition: "opacity var(--duration) var(--ease)"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        background: "#fff",
        color: "var(--primary)",
        borderRadius: "var(--radius-xs)",
        padding: "8px 16px",
        fontFamily: "var(--font-body)",
        fontSize: "var(--text-sm)",
        fontWeight: "var(--weight-bold)"
      }
    }, "Quick Buy"))), /*#__PURE__*/React.createElement("div", {
      style: {
        padding: 16
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "space-between",
        marginBottom: 8
      }
    }, /*#__PURE__*/React.createElement(DateChip, {
      month: month,
      day: day
    }), /*#__PURE__*/React.createElement(Heart, null)), /*#__PURE__*/React.createElement("h4", {
      style: {
        margin: "0 0 4px",
        fontFamily: "var(--font-body)",
        fontSize: "var(--text-sm)",
        fontWeight: "var(--weight-bold)",
        color: "var(--on-surface)",
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis"
      }
    }, title), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: "0 0 8px",
        fontFamily: "var(--font-body)",
        fontSize: 11,
        color: "var(--secondary)",
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis"
      }
    }, place), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        borderTop: "1px solid var(--outline-variant)",
        paddingTop: 12,
        marginTop: 4
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-body)",
        fontSize: 12,
        fontWeight: "var(--weight-bold)",
        color: "var(--primary)"
      }
    }, price), /*#__PURE__*/React.createElement(Badge, {
      tone: "neutral",
      variant: "tint",
      caps: false
    }, stock))));
  }
  if (variant === "directory") {
    return /*#__PURE__*/React.createElement("div", _extends({}, hoverProps, {
      style: {
        overflow: "hidden",
        background: "var(--surface-container-lowest)",
        border: "1px solid var(--outline-soft)",
        borderRadius: "var(--radius-card)",
        boxShadow: hover ? "var(--shadow-md)" : "none",
        transition: "box-shadow var(--duration) var(--ease)",
        cursor: "pointer",
        ...style
      }
    }), /*#__PURE__*/React.createElement(Media, {
      image: image,
      ratio: "16 / 10",
      hover: hover
    }, /*#__PURE__*/React.createElement(DateChip, {
      month: month,
      day: day,
      variant: "glass",
      style: {
        position: "absolute",
        left: 12,
        top: 12
      }
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        padding: 16,
        display: "flex",
        flexDirection: "column",
        gap: 8
      }
    }, /*#__PURE__*/React.createElement("h3", {
      style: {
        ...titleStyle,
        color: hover ? "var(--primary)" : "var(--on-surface)",
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis"
      }
    }, title), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: 0,
        display: "flex",
        alignItems: "center",
        gap: 4,
        fontFamily: "var(--font-body)",
        fontSize: "var(--text-body-md)",
        color: "var(--on-surface-variant)",
        whiteSpace: "nowrap",
        overflow: "hidden"
      }
    }, /*#__PURE__*/React.createElement("span", {
      className: "ms",
      style: {
        fontSize: 14
      }
    }, "location_on"), venue || "Venue TBA"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        borderTop: "1px solid var(--outline-soft)",
        paddingTop: 12
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-body)",
        fontWeight: "var(--weight-bold)",
        color: "var(--primary)"
      }
    }, price), /*#__PURE__*/React.createElement("span", {
      style: {
        background: "var(--primary)",
        color: "var(--on-primary)",
        borderRadius: "var(--radius-btn)",
        padding: "6px 16px",
        fontFamily: "var(--font-body)",
        fontSize: "var(--text-label-sm)",
        fontWeight: "var(--weight-bold)",
        opacity: hover ? 0.9 : 1
      }
    }, cta))));
  }
  if (variant === "poster") {
    return /*#__PURE__*/React.createElement("div", _extends({}, hoverProps, {
      style: {
        display: "flex",
        flexDirection: "column",
        minWidth: 280,
        cursor: "pointer",
        ...style
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        marginBottom: 8
      }
    }, /*#__PURE__*/React.createElement(Media, {
      image: image,
      ratio: "3 / 4",
      hover: hover,
      rounded: "var(--radius-btn)"
    }, /*#__PURE__*/React.createElement(Badge, {
      variant: "glass",
      size: "md",
      style: {
        position: "absolute",
        right: 12,
        top: 12
      }
    }, badge))), /*#__PURE__*/React.createElement("span", {
      style: {
        ...eyebrowStyle,
        fontSize: "var(--text-label-caps)",
        marginBottom: 4
      }
    }, eyebrow), /*#__PURE__*/React.createElement("h4", {
      style: {
        margin: 0,
        fontFamily: "var(--font-display)",
        fontSize: "var(--text-body-lg)",
        fontWeight: "var(--weight-semibold)",
        color: "var(--on-surface)",
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis"
      }
    }, title), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: 0,
        fontFamily: "var(--font-body)",
        fontSize: "var(--text-body-md)",
        color: "var(--on-surface-variant)"
      }
    }, venue));
  }
  return /*#__PURE__*/React.createElement("div", _extends({}, hoverProps, {
    style: {
      position: "relative",
      overflow: "hidden",
      background: "var(--surface-container-low)",
      border: "1px solid var(--outline-variant)",
      borderRadius: "var(--radius-btn)",
      cursor: "pointer",
      ...style
    }
  }), /*#__PURE__*/React.createElement(Media, {
    image: image,
    ratio: "16 / 9",
    hover: hover
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: badgeTone,
    style: {
      position: "absolute",
      right: 16,
      top: 16,
      padding: "4px 12px"
    }
  }, badge)), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 16
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      ...eyebrowStyle,
      marginBottom: 8
    }
  }, eyebrow), /*#__PURE__*/React.createElement("h3", {
    style: {
      ...titleStyle,
      marginBottom: 8
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "0 0 24px",
      fontFamily: "var(--font-body)",
      fontSize: "var(--text-sm)",
      lineHeight: "var(--text-sm-lh)",
      color: "var(--secondary)",
      display: "-webkit-box",
      WebkitLineClamp: 2,
      WebkitBoxOrient: "vertical",
      overflow: "hidden"
    }
  }, summary), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: "var(--text-headline-md)",
      fontWeight: "var(--weight-semibold)",
      color: "var(--primary)"
    }
  }, price), /*#__PURE__*/React.createElement("span", {
    style: {
      background: "var(--primary)",
      color: "#fff",
      borderRadius: "var(--radius-xs)",
      padding: "8px 24px",
      fontFamily: "var(--font-body)",
      fontWeight: "var(--weight-bold)",
      opacity: hover ? 0.9 : 1,
      transition: "opacity var(--duration) var(--ease)"
    }
  }, cta))));
}
__ds_scope.EventCard = EventCard;
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data-display/EventCard.jsx", error: String((e && e.message) || e) }); }

// components/data-display/EventRow.jsx
try { (() => {
const DateChip = __ds_scope.DateChip;
/**
 * Mobile "Upcoming Events" list row: plain date leaf, title + venue + teal price,
 * favorite heart. Rows are separated by a bottom hairline, not boxed.
 */
function EventRow({
  title,
  venue,
  city,
  price,
  month,
  day,
  favorite = false,
  last = false,
  onClick,
  style = {}
}) {
  const [on, setOn] = React.useState(favorite);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 16,
      paddingBottom: 16,
      borderBottom: last ? "none" : "1px solid var(--outline-variant)",
      fontFamily: "var(--font-body)",
      ...style
    }
  }, /*#__PURE__*/React.createElement(DateChip, {
    month: month,
    day: day,
    variant: "plain"
  }), /*#__PURE__*/React.createElement("div", {
    onClick: onClick,
    style: {
      flexGrow: 1,
      minWidth: 0,
      cursor: onClick ? "pointer" : "default"
    }
  }, /*#__PURE__*/React.createElement("h4", {
    style: {
      margin: 0,
      fontSize: "var(--text-body-lg)",
      fontWeight: "var(--weight-semibold)",
      lineHeight: 1.35,
      color: "var(--on-surface)"
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: "var(--text-label-sm)",
      lineHeight: 1.4,
      color: "var(--on-surface-variant)"
    }
  }, venue, city ? `, ${city}` : ""), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "4px 0 0",
      fontSize: "var(--text-label-sm)",
      fontWeight: "var(--weight-bold)",
      color: "var(--primary)"
    }
  }, price)), /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-pressed": on,
    "aria-label": on ? "Remove from favorites" : "Add to favorites",
    onClick: () => setOn(v => !v),
    className: "ms" + (on ? " fill" : ""),
    style: {
      background: "none",
      border: "none",
      padding: 8,
      cursor: "pointer",
      color: on ? "var(--error)" : "var(--on-surface-variant)"
    }
  }, "favorite"));
}
__ds_scope.EventRow = EventRow;
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data-display/EventRow.jsx", error: String((e && e.message) || e) }); }

// components/data-display/SectionHeader.jsx
try { (() => {
/**
 * Section title row. lg = desktop (headline-lg 32px + optional subtitle + underlined
 * teal link action, e.g. "View Full Calendar"). md = mobile (headline-md 24px +
 * caps "See All"). eyebrow = small caps section label ("YOU MIGHT ALSO LIKE").
 */
function SectionHeader({
  title,
  subtitle,
  action,
  onAction,
  size = "lg",
  style = {}
}) {
  if (size === "eyebrow") {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "flex-end",
        justifyContent: "space-between",
        fontFamily: "var(--font-body)",
        ...style
      }
    }, /*#__PURE__*/React.createElement("h3", {
      style: {
        margin: 0,
        fontSize: "var(--text-label-caps)",
        fontWeight: "var(--weight-bold)",
        letterSpacing: "var(--tracking-caps)",
        textTransform: "uppercase",
        color: "var(--secondary)"
      }
    }, title), action ? /*#__PURE__*/React.createElement("button", {
      type: "button",
      onClick: onAction,
      style: {
        background: "none",
        border: "none",
        padding: 0,
        cursor: "pointer",
        fontFamily: "var(--font-body)",
        fontSize: "var(--text-label-sm)",
        color: "var(--primary)"
      }
    }, action) : null);
  }
  const lg = size === "lg";
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "flex-end",
      justifyContent: "space-between",
      gap: 24,
      fontFamily: "var(--font-body)",
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontFamily: "var(--font-display)",
      fontSize: lg ? "var(--text-headline-lg)" : "var(--text-headline-md)",
      lineHeight: lg ? "var(--text-headline-lg-lh)" : "var(--text-headline-md-lh)",
      fontWeight: "var(--weight-semibold)",
      letterSpacing: lg ? "var(--tracking-headline)" : 0,
      color: "var(--on-surface)"
    }
  }, title), subtitle ? /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "8px 0 0",
      fontSize: "var(--text-body-md)",
      color: "var(--secondary)"
    }
  }, subtitle) : null), action ? lg ? /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onAction,
    style: {
      flexShrink: 0,
      background: "none",
      border: "none",
      borderBottom: "2px solid var(--primary)",
      borderRadius: 0,
      padding: "0 0 4px",
      cursor: "pointer",
      fontFamily: "var(--font-body)",
      fontSize: "var(--text-body-md)",
      fontWeight: "var(--weight-bold)",
      color: "var(--primary)"
    }
  }, action) : /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onAction,
    style: {
      flexShrink: 0,
      background: "none",
      border: "none",
      padding: 0,
      cursor: "pointer",
      fontFamily: "var(--font-body)",
      fontSize: "var(--text-label-sm)",
      fontWeight: "var(--weight-bold)",
      letterSpacing: "0.05em",
      textTransform: "uppercase",
      color: "var(--primary)"
    }
  }, action) : null);
}
__ds_scope.SectionHeader = SectionHeader;
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data-display/SectionHeader.jsx", error: String((e && e.message) || e) }); }

// components/data-display/StatCard.jsx
try { (() => {
/**
 * Account-dashboard stat tile: teal icon disc, large number, bold label, muted sub-line.
 * Hover turns the hairline teal and adds shadow-md (it links somewhere).
 */
function StatCard({
  icon,
  value,
  label,
  sub,
  onClick,
  style = {}
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      padding: 24,
      background: "var(--surface-card)",
      border: `1px solid ${hover ? "var(--primary)" : "var(--outline-soft)"}`,
      borderRadius: "var(--radius-card)",
      boxShadow: hover ? "var(--shadow-md)" : "none",
      transition: "border-color var(--duration) var(--ease), box-shadow var(--duration) var(--ease)",
      cursor: onClick ? "pointer" : "default",
      fontFamily: "var(--font-body)",
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 44,
      height: 44,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: "var(--radius-pill)",
      background: "var(--accent-tint)",
      color: "var(--primary)"
    }
  }, icon), /*#__PURE__*/React.createElement("span", {
    className: "ms",
    style: {
      color: hover ? "var(--primary)" : "var(--on-surface-variant)",
      transition: "color var(--duration) var(--ease)"
    }
  }, "arrow_forward")), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontFamily: "var(--font-display)",
      fontSize: 32,
      fontWeight: "var(--weight-bold)",
      lineHeight: 1,
      letterSpacing: "var(--tracking-display)",
      color: "var(--on-surface)",
      fontVariantNumeric: "tabular-nums"
    }
  }, value), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "8px 0 0",
      fontWeight: "var(--weight-bold)",
      color: "var(--on-surface)"
    }
  }, label), sub ? /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: "var(--text-label-sm)",
      lineHeight: 1.4,
      color: "var(--on-surface-variant)"
    }
  }, sub) : null);
}
__ds_scope.StatCard = StatCard;
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data-display/StatCard.jsx", error: String((e && e.message) || e) }); }

// components/data-display/TicketTier.jsx
try { (() => {
const Badge = __ds_scope.Badge;
/**
 * One GA ticket tier inside the "Select Tickets" box: tier badge, face price,
 * subtitle, availability, and the pill quantity stepper (0–10). Sold-out tiers
 * swap the stepper for a grey "Sold out" pill.
 */
function TicketTier({
  badge,
  tone = "ga",
  name,
  price,
  subtitle,
  available,
  soldOut = false,
  qty = 0,
  max = 10,
  onChange,
  style = {}
}) {
  const [hover, setHover] = React.useState(false);
  const set = delta => onChange && onChange(Math.max(0, Math.min(max, qty + delta)));
  const stepBtn = {
    width: 24,
    height: 24,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "none",
    border: "none",
    padding: 0,
    cursor: "pointer",
    fontFamily: "var(--font-body)",
    fontSize: 18,
    color: "var(--on-surface)"
  };
  return /*#__PURE__*/React.createElement("div", {
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      padding: 16,
      background: "var(--surface-container-low)",
      border: `1px solid ${hover ? "var(--primary)" : "var(--outline-variant)"}`,
      borderRadius: "var(--radius-btn)",
      transition: "border-color var(--duration) var(--ease)",
      fontFamily: "var(--font-body)",
      ...style
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: tone,
    variant: "tint",
    size: "md"
  }, badge), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 12,
      display: "flex",
      alignItems: "flex-start",
      justifyContent: "space-between",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: "var(--text-body-md)",
      fontWeight: "var(--weight-bold)",
      color: "var(--on-surface)"
    }
  }, price), subtitle ? /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: "var(--text-label-sm)",
      lineHeight: 1.4,
      color: "var(--secondary)"
    }
  }, subtitle) : null, typeof available === "number" ? /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "4px 0 0",
      fontSize: "var(--text-label-sm)",
      color: "var(--on-surface-variant)"
    }
  }, soldOut ? "Sold out" : `${available} available`) : null), soldOut ? /*#__PURE__*/React.createElement("span", {
    style: {
      flexShrink: 0,
      padding: "4px 12px",
      borderRadius: "var(--radius-pill)",
      background: "var(--surface-container-highest)",
      color: "var(--on-surface-variant)",
      fontSize: "var(--text-label-sm)"
    }
  }, "Sold out") : /*#__PURE__*/React.createElement("div", {
    style: {
      flexShrink: 0,
      display: "flex",
      alignItems: "center",
      gap: 12,
      padding: "4px 12px",
      borderRadius: "var(--radius-pill)",
      border: "1px solid var(--outline-variant)",
      background: "var(--surface-container-highest)"
    }
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": `Decrease ${name || badge} quantity`,
    onClick: () => set(-1),
    style: stepBtn
  }, "\u2212"), /*#__PURE__*/React.createElement("span", {
    "aria-live": "polite",
    style: {
      width: 16,
      textAlign: "center",
      fontWeight: "var(--weight-bold)",
      fontVariantNumeric: "tabular-nums",
      color: "var(--on-surface)"
    }
  }, qty), /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": `Increase ${name || badge} quantity`,
    onClick: () => set(1),
    style: stepBtn
  }, "+"))));
}
__ds_scope.TicketTier = TicketTier;
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data-display/TicketTier.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Labeled text field (auth / checkout / profile). Caps label, optional leading
 * Material Symbol, 4px corners, teal border + 2px teal ring on focus.
 */
function Input({
  label,
  hint,
  error,
  icon = null,
  id,
  style = {},
  inputStyle = {},
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const inputId = id || (label ? `nk-${label.replace(/\s+/g, "-").toLowerCase()}` : undefined);
  const ring = error ? "var(--focus-ring-danger)" : "var(--focus-ring)";
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: inputId,
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 4,
      ...style
    }
  }, label ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "var(--text-label-caps)",
      fontWeight: "var(--weight-bold)",
      lineHeight: 1,
      letterSpacing: "var(--tracking-caps)",
      textTransform: "uppercase",
      color: "var(--on-surface-variant)",
      marginBottom: 4
    }
  }, label) : null, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      display: "block"
    }
  }, icon ? /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 12,
      top: "50%",
      transform: "translateY(-50%)",
      display: "inline-flex",
      color: "var(--outline)",
      fontSize: 20,
      pointerEvents: "none"
    }
  }, icon) : null, /*#__PURE__*/React.createElement("input", _extends({
    id: inputId
  }, rest, {
    onFocus: e => {
      setFocus(true);
      rest.onFocus && rest.onFocus(e);
    },
    onBlur: e => {
      setFocus(false);
      rest.onBlur && rest.onBlur(e);
    },
    style: {
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
      ...inputStyle
    }
  }))), error ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "var(--text-label-sm)",
      color: "var(--error)"
    }
  }, error) : hint ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "var(--text-label-sm)",
      color: "var(--on-surface-variant)"
    }
  }, hint) : null);
}
__ds_scope.Input = Input;
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Filter-bar / form dropdown. Same field shell as the events filter bar:
 * surface fill, outline-variant border, 4px corners, teal focus ring, expand_more chevron.
 */
function Select({
  label,
  options = [],
  value,
  onChange,
  id,
  style = {},
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const selectId = id || (label ? `nk-${label.replace(/\s+/g, "-").toLowerCase()}` : undefined);
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: selectId,
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 4,
      ...style
    }
  }, label ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "var(--text-label-caps)",
      fontWeight: "var(--weight-bold)",
      lineHeight: 1,
      letterSpacing: "var(--tracking-caps)",
      textTransform: "uppercase",
      color: "var(--on-surface-variant)",
      marginBottom: 4
    }
  }, label) : null, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      display: "block"
    }
  }, /*#__PURE__*/React.createElement("select", _extends({
    id: selectId,
    value: value,
    onChange: onChange,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false)
  }, rest, {
    style: {
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
      transition: "border-color var(--duration) var(--ease), box-shadow var(--duration) var(--ease)"
    }
  }), options.map(o => {
    const opt = typeof o === "string" ? {
      value: o,
      label: o
    } : o;
    return /*#__PURE__*/React.createElement("option", {
      key: opt.value,
      value: opt.value
    }, opt.label);
  })), /*#__PURE__*/React.createElement("span", {
    className: "ms",
    style: {
      position: "absolute",
      right: 10,
      top: "50%",
      transform: "translateY(-50%)",
      fontSize: 20,
      color: "var(--secondary)",
      pointerEvents: "none"
    }
  }, "expand_more")));
}
__ds_scope.Select = Select;
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/mobile/MobileAppBar.jsx
try { (() => {
/**
 * Mobile top app bar (below lg): menu left, logo centered, teal cart right with
 * count badge. 60px, surface at 80% with a 12px glass blur and a bottom hairline.
 * Pass the real logo path via `logoSrc` (assets/logo.svg).
 */
function MobileAppBar({
  logoSrc = "assets/logo.svg",
  cartCount = 0,
  onMenu,
  onCart,
  onLogo,
  style = {}
}) {
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: "sticky",
      top: 0,
      zIndex: 50,
      height: "var(--app-bar-height)",
      flexShrink: 0,
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "0 var(--margin-mobile)",
      background: "rgb(248 249 250 / 0.8)",
      backdropFilter: "blur(var(--blur-glass))",
      WebkitBackdropFilter: "blur(var(--blur-glass))",
      borderBottom: "1px solid var(--outline-variant)",
      ...style
    }
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": "Open menu",
    onClick: onMenu,
    className: "ms",
    style: {
      width: 40,
      height: 40,
      marginLeft: -8,
      background: "none",
      border: "none",
      borderRadius: "var(--radius-pill)",
      color: "var(--on-surface)",
      cursor: "pointer"
    }
  }, "menu"), /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": "Nextkt \u2014 home",
    onClick: onLogo,
    style: {
      background: "none",
      border: "none",
      padding: 0,
      cursor: "pointer",
      display: "flex"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: logoSrc,
    alt: "Nextkt",
    style: {
      height: 40,
      width: "auto"
    }
  })), /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": cartCount > 0 ? `Cart (${cartCount} item${cartCount === 1 ? "" : "s"})` : "Cart",
    onClick: onCart,
    style: {
      position: "relative",
      width: 40,
      height: 40,
      marginRight: -8,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: "none",
      border: "none",
      borderRadius: "var(--radius-pill)",
      color: "var(--primary)",
      cursor: "pointer"
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "ms"
  }, "shopping_cart"), cartCount > 0 ? /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      right: 0,
      top: 0,
      minWidth: 18,
      height: 18,
      padding: "0 4px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: "var(--radius-pill)",
      background: "var(--primary)",
      color: "var(--on-primary)",
      fontFamily: "var(--font-body)",
      fontSize: 11,
      fontWeight: "var(--weight-bold)",
      lineHeight: 1,
      boxShadow: "0 0 0 2px var(--surface)"
    }
  }, cartCount > 99 ? "99+" : cartCount) : null));
}
__ds_scope.MobileAppBar = MobileAppBar;
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/mobile/MobileAppBar.jsx", error: String((e && e.message) || e) }); }

// components/mobile/MobileTabBar.jsx
try { (() => {
const DEFAULT_ITEMS = [{
  key: "discover",
  label: "Discover",
  icon: "explore"
}, {
  key: "tickets",
  label: "Tickets",
  icon: "confirmation_number"
}, {
  key: "venues",
  label: "Venues",
  icon: "stadium"
}, {
  key: "profile",
  label: "Profile",
  icon: "person"
}];

/**
 * Persistent mobile bottom nav (below lg). Four tabs; active = teal + filled glyph.
 * Labels are 10px uppercase. 96px tall including the home-indicator safe area.
 */
function MobileTabBar({
  items = DEFAULT_ITEMS,
  value = "discover",
  onChange,
  safeArea = 34,
  style = {}
}) {
  return /*#__PURE__*/React.createElement("nav", {
    "aria-label": "Primary",
    style: {
      height: "var(--tab-bar-height)",
      boxSizing: "border-box",
      paddingBottom: safeArea,
      display: "flex",
      alignItems: "center",
      justifyContent: "space-around",
      background: "var(--surface)",
      borderTop: "1px solid var(--outline-variant)",
      ...style
    }
  }, items.map(it => {
    const on = it.key === value;
    return /*#__PURE__*/React.createElement("button", {
      key: it.key,
      type: "button",
      "aria-current": on ? "page" : undefined,
      onClick: () => onChange && onChange(it.key),
      style: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 4,
        background: "none",
        border: "none",
        padding: 0,
        cursor: "pointer",
        color: on ? "var(--primary)" : "var(--on-surface-variant)"
      }
    }, /*#__PURE__*/React.createElement("span", {
      className: "ms" + (on ? " fill" : "")
    }, it.icon), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-body)",
        fontSize: "var(--text-micro)",
        fontWeight: "var(--weight-medium)",
        textTransform: "uppercase",
        lineHeight: 1.2
      }
    }, it.label));
  }));
}
__ds_scope.MobileTabBar = MobileTabBar;
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/mobile/MobileTabBar.jsx", error: String((e && e.message) || e) }); }

// components/navigation/NavItem.jsx
try { (() => {
/**
 * Account sidebar item. Active = solid teal fill, white text, filled icon, shadow-sm.
 * Idle = on-surface-variant, surface-container-high wash on hover. `danger` = Sign Out.
 */
function NavItem({
  icon,
  label,
  active = false,
  danger = false,
  onClick,
  style = {}
}) {
  const [hover, setHover] = React.useState(false);
  const bg = active ? "var(--primary)" : hover ? danger ? "var(--error-container)" : "var(--surface-container-high)" : "transparent";
  const fg = active ? "var(--on-primary)" : danger ? "var(--error)" : "var(--on-surface-variant)";
  return /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-current": active ? "page" : undefined,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12,
      width: "100%",
      padding: "12px 16px",
      whiteSpace: "nowrap",
      background: bg,
      color: fg,
      border: "none",
      borderRadius: "var(--radius-card)",
      boxShadow: active ? "var(--shadow-sm)" : "none",
      fontFamily: "var(--font-body)",
      fontSize: "var(--text-body-md)",
      fontWeight: "var(--weight-medium)",
      textAlign: "left",
      cursor: "pointer",
      transition: "background var(--duration) var(--ease), color var(--duration) var(--ease)",
      ...style
    }
  }, icon ? /*#__PURE__*/React.createElement("span", {
    className: "ms" + (active ? " fill" : "")
  }, icon) : null, /*#__PURE__*/React.createElement("span", null, label));
}
__ds_scope.NavItem = NavItem;
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/NavItem.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
/**
 * Tab strips in the four storefront styles:
 * nav (desktop header links) · underline (home category filter, caps) ·
 * chips (mobile category chips) · segmented (auth Sign in / Create account).
 */
function Tabs({
  tabs = [],
  value,
  onChange,
  variant = "underline",
  style = {}
}) {
  if (variant === "segmented") {
    return /*#__PURE__*/React.createElement("div", {
      role: "tablist",
      style: {
        display: "flex",
        padding: 4,
        background: "var(--surface-container)",
        borderRadius: "var(--radius-btn)",
        ...style
      }
    }, tabs.map(t => {
      const on = t === value;
      return /*#__PURE__*/React.createElement("button", {
        key: t,
        role: "tab",
        "aria-selected": on,
        onClick: () => onChange && onChange(t),
        style: {
          flex: 1,
          padding: "8px 0",
          border: "none",
          cursor: "pointer",
          borderRadius: "var(--radius-xs)",
          background: on ? "var(--surface-container-lowest)" : "transparent",
          boxShadow: on ? "var(--shadow-sm)" : "none",
          color: on ? "var(--primary)" : "var(--on-surface-variant)",
          fontFamily: "var(--font-body)",
          fontSize: "var(--text-label-sm)",
          fontWeight: "var(--weight-bold)",
          transition: "all var(--duration) var(--ease)"
        }
      }, t);
    }));
  }
  if (variant === "chips") {
    return /*#__PURE__*/React.createElement("div", {
      role: "tablist",
      style: {
        display: "flex",
        gap: "var(--stack-sm)",
        overflowX: "auto",
        padding: "8px 0",
        scrollbarWidth: "none",
        ...style
      }
    }, tabs.map(t => {
      const on = t === value;
      return /*#__PURE__*/React.createElement("button", {
        key: t,
        role: "tab",
        "aria-selected": on,
        onClick: () => onChange && onChange(t),
        style: {
          whiteSpace: "nowrap",
          padding: "8px 24px",
          cursor: "pointer",
          borderRadius: "var(--radius-pill)",
          border: on ? "1px solid transparent" : "1px solid var(--outline-variant)",
          background: on ? "var(--primary)" : "var(--surface-container-low)",
          color: on ? "var(--on-primary)" : "var(--on-surface-variant)",
          boxShadow: on ? "var(--shadow-sm)" : "none",
          fontFamily: "var(--font-body)",
          fontSize: "var(--text-label-sm)",
          fontWeight: "var(--weight-medium)",
          transition: "all var(--duration) var(--ease)"
        }
      }, t);
    }));
  }
  const nav = variant === "nav";
  return /*#__PURE__*/React.createElement("div", {
    role: "tablist",
    style: {
      display: "flex",
      gap: 24,
      overflowX: "auto",
      scrollbarWidth: "none",
      ...style
    }
  }, tabs.map(t => {
    const on = t === value;
    return /*#__PURE__*/React.createElement("button", {
      key: t,
      role: "tab",
      "aria-selected": on,
      onClick: () => onChange && onChange(t),
      style: {
        whiteSpace: "nowrap",
        background: "none",
        border: "none",
        cursor: "pointer",
        padding: nav ? "0 0 4px" : "8px 4px",
        borderBottom: on ? "2px solid var(--primary)" : "2px solid transparent",
        color: on ? "var(--primary)" : "var(--secondary)",
        fontFamily: "var(--font-body)",
        fontSize: nav ? "var(--text-body-md)" : "var(--text-label-caps)",
        fontWeight: nav ? on ? "var(--weight-extrabold)" : "var(--weight-semibold)" : "var(--weight-bold)",
        letterSpacing: nav ? 0 : "var(--tracking-caps)",
        textTransform: nav ? "none" : "uppercase",
        lineHeight: nav ? 1.5 : 1,
        transition: "color var(--duration) var(--ease)"
      }
    }, t);
  }));
}
__ds_scope.Tabs = Tabs;
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.DateChip = __ds_scope.DateChip;

__ds_ns.EventCard = __ds_scope.EventCard;

__ds_ns.EventRow = __ds_scope.EventRow;

__ds_ns.SectionHeader = __ds_scope.SectionHeader;

__ds_ns.StatCard = __ds_scope.StatCard;

__ds_ns.TicketTier = __ds_scope.TicketTier;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.MobileAppBar = __ds_scope.MobileAppBar;

__ds_ns.MobileTabBar = __ds_scope.MobileTabBar;

__ds_ns.NavItem = __ds_scope.NavItem;

__ds_ns.Tabs = __ds_scope.Tabs;

})();
