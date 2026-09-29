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

  // .design-sync/previews/ScrollArea.tsx
  var ScrollArea_exports = {};
  __export(ScrollArea_exports, {
    Default: () => Default,
    GuestList: () => GuestList,
    UpcomingRail: () => UpcomingRail
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

  // .design-sync/previews/ScrollArea.tsx
  var import_jsx_runtime = __toESM(require_react_shim());
  var Dark = ({ children }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "bg-[var(--color-dark-green)] text-[var(--color-cream)] font-body p-8", children });
  var Light = ({ children }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "bg-[var(--color-cream)] text-[var(--color-charcoal)] font-body p-8", children });
  var guests = [
    ["20:00", "Wijaya, P.", "Rooftop · 12", "Anniversary"],
    ["20:15", "Hartono, M.", "Garden · 4", ""],
    ["20:30", "Clarke, S.", "The Cellar · 2", "Wine pairing"],
    ["20:30", "Suryadi, N.", "Rooftop · 6", ""],
    ["20:45", "Renaud, C.", "Garden · 8", "Birthday"],
    ["21:00", "Tanaka, H.", "The Cellar · 2", ""],
    ["21:15", "Oktaviani, D.", "Rooftop · 10", "Corporate"],
    ["21:30", "Bianchi, L.", "Garden · 4", ""],
    ["21:45", "Pramesti, A.", "Rooftop · 2", "Proposal"],
    ["22:00", "Nugroho, B.", "The Cellar · 6", ""]
  ];
  var GuestList = () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Dark, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { className: "text-xs uppercase tracking-widest text-[var(--color-taupe)]", children: "Reservation book · Saturday 14 March" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      ds_exports.ScrollArea,
      {
        type: "always",
        className: "mt-4 rounded-lg border border-white/10 bg-white/5",
        style: { height: 260, width: 420 },
        children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "p-4", children: guests.map(([time, name, table, note], i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
          i > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.Separator, { className: "mt-3 mb-3 bg-white/10" }) : null,
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "flex items-baseline gap-4", children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "tabular-nums text-sm text-[var(--color-muted-gold)]", children: time }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "flex-1", children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { className: "text-sm", children: name }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { className: "text-[11px] uppercase tracking-widest text-[var(--color-taupe)]", children: table })
            ] }),
            note ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.Badge, { className: "bg-white/10 text-[10px] uppercase tracking-widest text-[var(--color-champagne)] hover:bg-white/10", children: note }) : null
          ] })
        ] }, name)) })
      }
    )
  ] });
  var UpcomingRail = () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Dark, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { className: "text-xs uppercase tracking-widest text-[var(--color-taupe)]", children: "Next three weeks" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ds_exports.ScrollArea, { type: "always", className: "mt-4", style: { width: 520 }, children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "flex gap-4 pb-4", children: [
        ["14 Mar", "Midnight Sessions"],
        ["21 Mar", "Gamelan Nights"],
        ["28 Mar", "Cellar Tasting"],
        ["04 Apr", "Nyepi Eve Supper"],
        ["11 Apr", "Rooftop Sunset Set"],
        ["18 Apr", "Private Hire"]
      ].map(([date, title]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
        "div",
        {
          className: "shrink-0 rounded-lg border border-[var(--color-muted-gold)] bg-white/5 p-4",
          style: { width: 180 },
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { className: "text-[11px] uppercase tracking-widest text-[var(--color-muted-gold)]", children: date }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { className: "mt-2 font-display text-2xl font-normal tracking-wide", children: title })
          ]
        },
        title
      )) }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.ScrollBar, { orientation: "horizontal" })
    ] })
  ] });
  var Default = () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Light, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
    ds_exports.ScrollArea,
    {
      type: "always",
      className: "rounded-md border p-4",
      style: { height: 200, width: 420 },
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", { className: "font-display text-2xl font-normal tracking-wide", children: "Reservation terms" }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { className: "mt-3 text-sm leading-relaxed", children: "Tables are held for fifteen minutes past the reserved time. Parties of six or more are asked for a deposit of IDR 250,000 per guest, redeemable against the final bill on the night." }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { className: "mt-3 text-sm leading-relaxed", children: "Cancellations made more than 48 hours before the reservation are refunded in full. Inside 48 hours the deposit is retained and may be moved once to another date within the same calendar month." }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { className: "mt-3 text-sm leading-relaxed", children: "The rooftop is open air. In the event of rain, seated guests are moved to the Garden Pavilion where capacity allows, and the kitchen continues to serve the full menu until 23:30." }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { className: "mt-3 text-sm leading-relaxed", children: "Smart casual dress is requested after 19:00. Children under twelve are welcome in the Garden Pavilion until 21:00." })
      ]
    }
  ) });
  return __toCommonJS(ScrollArea_exports);
})();
