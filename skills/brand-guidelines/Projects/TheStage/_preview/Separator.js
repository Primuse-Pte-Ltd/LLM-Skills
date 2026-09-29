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

  // .design-sync/previews/Separator.tsx
  var Separator_exports = {};
  __export(Separator_exports, {
    MenuSection: () => MenuSection,
    Orientations: () => Orientations,
    StatRow: () => StatRow
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

  // .design-sync/previews/Separator.tsx
  var import_jsx_runtime = __toESM(require_react_shim());
  var Dark = ({ children }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "bg-[var(--color-dark-green)] text-[var(--color-cream)] font-body p-8", children });
  var Light = ({ children }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "bg-[var(--color-cream)] text-[var(--color-charcoal)] font-body p-8", children });
  var StatRow = () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Dark, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { className: "text-xs uppercase tracking-widest text-[var(--color-taupe)]", children: "Tonight · Saturday 14 March" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "mt-4 flex h-16 items-center gap-6", children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { className: "font-display text-4xl font-normal leading-none tabular-nums", children: "142" }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { className: "mt-2 text-[11px] uppercase tracking-widest text-[var(--color-taupe)]", children: "Covers" })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.Separator, { orientation: "vertical", className: "bg-[var(--color-muted-gold)]" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { className: "font-display text-4xl font-normal leading-none tabular-nums", children: "38" }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { className: "mt-2 text-[11px] uppercase tracking-widest text-[var(--color-taupe)]", children: "Reservations" })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.Separator, { orientation: "vertical", className: "bg-[var(--color-muted-gold)]" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { className: "font-display text-4xl font-normal leading-none tabular-nums", children: "IDR 64.2M" }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { className: "mt-2 text-[11px] uppercase tracking-widest text-[var(--color-taupe)]", children: "Revenue" })
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.Separator, { className: "mt-6 bg-white/10" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { className: "mt-4 text-sm text-[var(--color-champagne)]", children: "Rooftop and Garden Pavilion combined. Walk-ins close at 23:00." })
  ] });
  var MenuSection = () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Light, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { style: { maxWidth: 380 }, children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { className: "font-display text-3xl font-normal tracking-wide", children: "Tasting Menu" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { className: "mt-1 text-xs uppercase tracking-widest text-[var(--color-bronze)]", children: "Five courses · IDR 1,250,000 per guest" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.Separator, { className: "mt-4 mb-4 bg-[var(--color-bronze)]" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "space-y-2 text-sm", children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "flex justify-between", children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Kingfish crudo, green mango" }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "tabular-nums text-[var(--color-bronze)]", children: "I" })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "flex justify-between", children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Charred palm heart, kemiri" }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "tabular-nums text-[var(--color-bronze)]", children: "II" })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "flex justify-between", children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Bebek betutu, twelve hours" }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "tabular-nums text-[var(--color-bronze)]", children: "III" })
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.Separator, { className: "mt-4 mb-4 bg-[var(--color-bronze)]" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { className: "text-xs text-[var(--color-bronze)]", children: "Wine pairing available. Please advise dietary requirements 24 hours ahead." })
  ] }) });
  var Orientations = () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Light, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { className: "text-xs uppercase tracking-widest text-[var(--color-bronze)]", children: "Horizontal" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.Separator, { className: "mt-3" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { className: "mt-6 text-xs uppercase tracking-widest text-[var(--color-bronze)]", children: "Vertical" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "mt-3 flex h-10 items-center gap-4 text-sm", children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Rooftop" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.Separator, { orientation: "vertical" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Garden Pavilion" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.Separator, { orientation: "vertical" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "The Cellar" })
    ] })
  ] });
  return __toCommonJS(Separator_exports);
})();
