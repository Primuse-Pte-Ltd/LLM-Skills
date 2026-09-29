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

  // .design-sync/previews/Sheet.tsx
  var Sheet_exports = {};
  __export(Sheet_exports, {
    BookingSummary: () => BookingSummary,
    DoorCheckIn: () => DoorCheckIn,
    EventFilters: () => EventFilters
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

  // .design-sync/previews/Sheet.tsx
  var import_jsx_runtime = __toESM(require_react_shim());
  var Line = ({
    label,
    detail,
    amount
  }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "flex items-start justify-between gap-4 text-sm", children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "font-medium", children: label }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "text-xs text-muted-foreground", children: detail })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "shrink-0 whitespace-nowrap tabular-nums", children: amount })
  ] });
  var BookingSummary = () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.Sheet, { open: true, children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ds_exports.SheetContent, { side: "right", className: "text-[var(--color-charcoal)]", children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ds_exports.SheetHeader, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.SheetTitle, { className: "font-display text-2xl font-normal tracking-wide", children: "Your booking" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.SheetDescription, { children: "Held for 14:32 minutes. Tables release automatically when the hold expires." })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "mt-6 space-y-4", children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        Line,
        {
          label: "Table 14 — Terrace",
          detail: "Sat 22 Mar · 4 guests",
          amount: "IDR 3,600,000"
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.Separator, {}),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        Line,
        {
          label: "Cabana 03 — Pool Deck",
          detail: "Sat 22 Mar · 2 guests",
          amount: "IDR 2,400,000"
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.Separator, {}),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "flex items-center justify-between text-sm", children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "uppercase tracking-widest text-xs text-muted-foreground", children: "Total" }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "font-display text-2xl tabular-nums", children: "IDR 6,000,000" })
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ds_exports.SheetFooter, { className: "mt-6 gap-2", children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.Button, { variant: "outline", children: "Keep browsing" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.Button, { className: "bg-[var(--color-muted-gold)] text-black hover:bg-[var(--color-gold-light)]", children: "Checkout" })
    ] })
  ] }) });
  var EventFilters = () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.Sheet, { open: true, children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ds_exports.SheetContent, { side: "left", className: "text-[var(--color-charcoal)]", children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ds_exports.SheetHeader, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.SheetTitle, { className: "font-display text-2xl font-normal tracking-wide", children: "Filter events" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.SheetDescription, { children: "28 events across April and May." })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "mt-6 space-y-6 text-sm", children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "space-y-2", children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "text-xs uppercase tracking-widest text-muted-foreground", children: "Area" }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "flex flex-wrap gap-2", children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.Button, { size: "sm", className: "bg-[var(--color-muted-gold)] text-black hover:bg-[var(--color-gold-light)]", children: "Terrace" }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.Button, { size: "sm", variant: "outline", children: "Pool Deck" }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.Button, { size: "sm", variant: "outline", children: "Rooftop" })
        ] })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.Separator, {}),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "space-y-2", children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "text-xs uppercase tracking-widest text-muted-foreground", children: "Table minimum" }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "flex flex-wrap gap-2", children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.Button, { size: "sm", variant: "outline", children: "Under IDR 2m" }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.Button, { size: "sm", variant: "outline", children: "IDR 2m – 5m" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ds_exports.SheetFooter, { className: "mt-6 gap-2", children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.Button, { variant: "outline", children: "Clear all" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.Button, { className: "bg-[var(--color-muted-gold)] text-black hover:bg-[var(--color-gold-light)]", children: "Show 12 events" })
    ] })
  ] }) });
  var DoorCheckIn = () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.Sheet, { open: true, children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ds_exports.SheetContent, { side: "bottom", className: "text-[var(--color-charcoal)]", children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ds_exports.SheetHeader, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.SheetTitle, { className: "font-display text-2xl font-normal tracking-wide", children: "Kadek Wirawan — Table 14" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.SheetDescription, { children: "Guest list · Midnight Sessions · Saturday 22 March." })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "mt-4 text-sm", children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "flex items-center justify-between border-t py-3", children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "text-muted-foreground", children: "Party" }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "4 guests · 2 already arrived" })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "flex items-center justify-between border-t py-3", children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "text-muted-foreground", children: "Added by" }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Ayu Pradnyani · promoter list" })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "flex items-center justify-between border-t py-3", children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "text-muted-foreground", children: "Balance on arrival" }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "tabular-nums", children: "IDR 1,800,000" })
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ds_exports.SheetFooter, { className: "mt-6 gap-2", children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.Button, { variant: "outline", children: "Mark as no-show" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.Button, { className: "bg-[var(--color-muted-gold)] text-black hover:bg-[var(--color-gold-light)]", children: "Check in 2 guests" })
    ] })
  ] }) });
  return __toCommonJS(Sheet_exports);
})();
