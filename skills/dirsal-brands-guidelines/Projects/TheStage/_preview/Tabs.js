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

  // .design-sync/previews/Tabs.tsx
  var Tabs_exports = {};
  __export(Tabs_exports, {
    Default: () => Default,
    EventDetail: () => EventDetail,
    Vertical: () => Vertical
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

  // .design-sync/previews/Tabs.tsx
  var import_jsx_runtime = __toESM(require_react_shim());
  var brandTokens = {
    "--background": "41 49% 59%",
    // --color-muted-gold  #c9a962
    "--foreground": "150 33% 6%",
    // --color-dark-green  #0a140f
    "--muted-foreground": "34 25% 78%"
    // --color-champagne #d4c8b8
  };
  var Dark = ({ children }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    "div",
    {
      style: brandTokens,
      className: "bg-[var(--color-dark-green)] text-[var(--color-cream)] font-body p-8",
      children
    }
  );
  var Light = ({ children }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "bg-[var(--color-cream)] text-[var(--color-charcoal)] font-body p-8", children });
  var EventDetail = () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dark, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ds_exports.Tabs, { defaultValue: "overview", children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ds_exports.TabsList, { className: "border border-white/10 bg-white/5", children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.TabsTrigger, { value: "overview", children: "Overview" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.TabsTrigger, { value: "lineup", children: "Line-up" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.TabsTrigger, { value: "tables", children: "Table plans" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ds_exports.TabsContent, { value: "overview", className: "mt-6 max-w-md", children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { className: "font-display text-3xl tracking-wide text-[var(--color-cream)]", children: "Midnight Sessions" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { className: "mt-2 text-sm leading-relaxed text-[var(--color-champagne)]", children: "Saturday 22:00 until late, on the rooftop. Deep house, Balinese cocktails and table service for parties of four or more." })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.TabsContent, { value: "lineup", className: "mt-6 max-w-md text-sm", children: "Kalya, then Ruma B from 01:00." }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.TabsContent, { value: "tables", className: "mt-6 max-w-md text-sm", children: "18 tables, 6 cabanas, 2 held for walk-ins." })
  ] }) });
  var Vertical = () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dark, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ds_exports.Tabs, { defaultValue: "floorplan", orientation: "vertical", className: "flex gap-6", children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ds_exports.TabsList, { className: "h-auto w-48 flex-col items-stretch justify-start gap-1 border border-white/10 bg-white/5 p-2", children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.TabsTrigger, { value: "floorplan", className: "justify-start", children: "Floor plan" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.TabsTrigger, { value: "hours", className: "justify-start", children: "Opening hours" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.TabsTrigger, { value: "deposits", className: "justify-start", children: "Deposits" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.TabsTrigger, { value: "staff", className: "justify-start", children: "Staff access" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ds_exports.TabsContent, { value: "floorplan", className: "mt-0 max-w-md", children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { className: "font-display text-2xl tracking-wide text-[var(--color-cream)]", children: "Floor plan" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { className: "mt-2 text-sm leading-relaxed text-[var(--color-champagne)]", children: "18 tables across the rooftop and cliff terrace, 6 cabanas, 2 held back for walk-ins every night." })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.TabsContent, { value: "hours", className: "mt-0 max-w-md text-sm text-[var(--color-champagne)]", children: "17:00 until 02:00, Wednesday to Sunday." }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.TabsContent, { value: "deposits", className: "mt-0 max-w-md text-sm text-[var(--color-champagne)]", children: "IDR 1,500,000 per cabana, refundable up to 48 hours before." }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.TabsContent, { value: "staff", className: "mt-0 max-w-md text-sm text-[var(--color-champagne)]", children: "11 accounts, 3 with floor-manager rights." })
  ] }) });
  var Default = () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Light, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ds_exports.Tabs, { defaultValue: "details", children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ds_exports.TabsList, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.TabsTrigger, { value: "details", children: "Details" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.TabsTrigger, { value: "guests", children: "Guests" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.TabsTrigger, { value: "payment", children: "Payment" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.TabsContent, { value: "details", className: "max-w-md text-sm", children: "Table 12 · Friday 14 March · 20:30 · party of six." }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.TabsContent, { value: "guests", className: "max-w-md text-sm", children: "Six names on the list, four checked in." }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.TabsContent, { value: "payment", className: "max-w-md text-sm", children: "Deposit of IDR 1,500,000 paid on 2 March." })
  ] }) });
  return __toCommonJS(Tabs_exports);
})();
