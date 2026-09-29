"use strict";
var __dsPreview = (() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __esm = (fn, res, err) => function __init() {
    if (err) throw err[0];
    try {
      return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
    } catch (e) {
      throw err = [e], e;
    }
  };
  var __commonJS = (cb, mod) => function __require() {
    try {
      return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
    } catch (e) {
      throw mod = 0, e;
    }
  };
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __reExport = (target, mod, secondTarget) => (__copyProps(target, mod, "default"), secondTarget && __copyProps(secondTarget, mod, "default"));
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));
  var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

  // <define:import.meta.env>
  var init_define_import_meta_env = __esm({
    "<define:import.meta.env>"() {
    }
  });

  // ds-raw:__ds_raw__
  var require_ds_raw = __commonJS({
    "ds-raw:__ds_raw__"(exports, module) {
      init_define_import_meta_env();
      module.exports = window.TheStageUI;
    }
  });

  // shim:react-shim
  var require_react_shim = __commonJS({
    "shim:react-shim"(exports, module) {
      init_define_import_meta_env();
      var R = window.React;
      function np(p, k) {
        var o = {};
        for (var x in p) if (x !== "children") o[x] = p[x];
        if (k !== void 0) o.key = k;
        return o;
      }
      function jsx2(t, p, k) {
        var c = p && p.children;
        return c === void 0 ? R.createElement(t, np(p, k)) : R.createElement(t, np(p, k), c);
      }
      function jsxs2(t, p, k) {
        return R.createElement.apply(R, [t, np(p, k)].concat(p.children));
      }
      module.exports = R;
      module.exports.jsx = jsx2;
      module.exports.jsxs = jsxs2;
      module.exports.jsxDEV = function(t, p, k, s) {
        return (s ? jsxs2 : jsx2)(t, p, k);
      };
      module.exports.Fragment = R.Fragment;
    }
  });

  // .design-sync/previews/NavigationMenu.tsx
  var NavigationMenu_exports = {};
  __export(NavigationMenu_exports, {
    Default: () => Default,
    EventsPanelOpen: () => EventsPanelOpen,
    SiteHeader: () => SiteHeader
  });
  init_define_import_meta_env();

  // ds-shim:ds
  var ds_exports = {};
  __export(ds_exports, {
    default: () => ds_default
  });
  init_define_import_meta_env();
  __reExport(ds_exports, __toESM(require_ds_raw()));
  var g = window.TheStageUI;
  var ds_default = "default" in g ? g.default : g;

  // .design-sync/previews/NavigationMenu.tsx
  var import_jsx_runtime = __toESM(require_react_shim());
  var brandTokens = {
    "--background": "150 33% 6%",
    // --color-dark-green  #0a140f
    "--foreground": "43 26% 95%",
    // --color-cream       #f5f3ee
    "--accent": "147 28% 14%",
    // --color-sage        #1a2e23
    "--accent-foreground": "41 49% 59%",
    // --color-muted-gold  #c9a962
    "--popover": "150 33% 4%",
    // --color-deep-green  #060c09
    "--popover-foreground": "43 26% 95%",
    // --color-cream
    "--border": "146 26% 19%"
    // --color-moss        #243d2f
  };
  var Dark = ({
    children,
    minHeight = 0
  }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    "div",
    {
      style: { ...brandTokens, minHeight },
      className: "bg-[var(--color-dark-green)] text-[var(--color-cream)] font-body p-8",
      children
    }
  );
  var Light = ({ children }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    "div",
    {
      style: { minHeight: 260 },
      className: "bg-[var(--color-cream)] text-[var(--color-charcoal)] font-body p-8",
      children
    }
  );
  var linkClass = `${(0, ds_exports.navigationMenuTriggerStyle)()} text-xs uppercase tracking-[0.15em]`;
  var SiteHeader = () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dark, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "flex items-center justify-between gap-10", children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "font-display text-2xl tracking-[0.3em] text-[var(--color-muted-gold)]", children: "THE STAGE" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.NavigationMenu, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ds_exports.NavigationMenuList, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.NavigationMenuItem, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.NavigationMenuLink, { href: "/", className: linkClass, children: "Home" }) }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.NavigationMenuItem, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.NavigationMenuLink, { href: "/events", className: linkClass, children: "Events" }) }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.NavigationMenuItem, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.NavigationMenuLink, { href: "/booking", className: linkClass, children: "Reserve VIP" }) }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.NavigationMenuItem, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.NavigationMenuLink, { href: "/gallery", className: linkClass, children: "Gallery" }) }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.NavigationMenuItem, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.NavigationMenuLink, { href: "/contact", className: linkClass, children: "Contact" }) })
    ] }) })
  ] }) });
  var EventsPanelOpen = () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dark, { minHeight: 400, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.NavigationMenu, { defaultValue: "events", children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ds_exports.NavigationMenuList, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ds_exports.NavigationMenuItem, { value: "events", children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.NavigationMenuTrigger, { className: "text-xs uppercase tracking-[0.15em]", children: "Events" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ds_exports.NavigationMenuContent, { style: { width: 460 }, className: "p-6", children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { className: "mb-4 text-xs uppercase tracking-[0.15em] text-[var(--color-muted-gold)]", children: "What’s on" }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", { className: "grid grid-cols-2 gap-3", children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
            ds_exports.NavigationMenuLink,
            {
              href: "/events/midnight-sessions",
              className: "block rounded-md p-3 hover:bg-white/10",
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "font-display text-xl", children: "Midnight Sessions" }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "mt-2 block text-xs text-[var(--color-taupe)]", children: "Rooftop, Saturdays from 22:00" })
              ]
            }
          ) }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
            ds_exports.NavigationMenuLink,
            {
              href: "/events/sunset-ceremony",
              className: "block rounded-md p-3 hover:bg-white/10",
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "font-display text-xl", children: "Sunset Ceremony" }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "mt-2 block text-xs text-[var(--color-taupe)]", children: "Cliff terrace, Fridays 17:30" })
              ]
            }
          ) }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
            ds_exports.NavigationMenuLink,
            {
              href: "/events/private-events",
              className: "block rounded-md p-3 hover:bg-white/10",
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "font-display text-xl", children: "Private events" }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "mt-2 block text-xs text-[var(--color-taupe)]", children: "Weddings and buy-outs" })
              ]
            }
          ) }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
            ds_exports.NavigationMenuLink,
            {
              href: "/events/venue-hire",
              className: "block rounded-md p-3 hover:bg-white/10",
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "font-display text-xl", children: "Venue hire" }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "mt-2 block text-xs text-[var(--color-taupe)]", children: "Four rooms, up to 320 guests" })
              ]
            }
          ) })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.NavigationMenuItem, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.NavigationMenuLink, { href: "/gallery", className: linkClass, children: "Gallery" }) }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.NavigationMenuItem, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.NavigationMenuLink, { href: "/contact", className: linkClass, children: "Contact" }) })
  ] }) }) });
  var Default = () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Light, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.NavigationMenu, { defaultValue: "venue", children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ds_exports.NavigationMenuList, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ds_exports.NavigationMenuItem, { value: "venue", children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.NavigationMenuTrigger, { children: "Venue" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        ds_exports.NavigationMenuContent,
        {
          style: { width: 320 },
          className: "p-4 text-[var(--color-charcoal)]",
          children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", { className: "space-y-1", children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.NavigationMenuLink, { href: "/venue/the-terrace", className: "block rounded-md p-2 text-sm hover:bg-black/5", children: "The Terrace" }) }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.NavigationMenuLink, { href: "/venue/the-cellar", className: "block rounded-md p-2 text-sm hover:bg-black/5", children: "The Cellar" }) }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.NavigationMenuLink, { href: "/venue/the-garden", className: "block rounded-md p-2 text-sm hover:bg-black/5", children: "The Garden" }) })
          ] })
        }
      )
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.NavigationMenuItem, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.NavigationMenuLink, { href: "/events", className: (0, ds_exports.navigationMenuTriggerStyle)(), children: "Events" }) }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.NavigationMenuItem, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.NavigationMenuLink, { href: "/contact", className: (0, ds_exports.navigationMenuTriggerStyle)(), children: "Contact" }) })
  ] }) }) });
  return __toCommonJS(NavigationMenu_exports);
})();
