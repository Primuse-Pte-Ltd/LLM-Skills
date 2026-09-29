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

  // .design-sync/previews/Progress.tsx
  var Progress_exports = {};
  __export(Progress_exports, {
    CapacityTonight: () => CapacityTonight,
    GalleryUpload: () => GalleryUpload,
    Values: () => Values
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

  // .design-sync/previews/Progress.tsx
  var import_jsx_runtime = __toESM(require_react_shim());
  var Dark = ({ children }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "on-brand-dark bg-[var(--color-dark-green)] text-[var(--color-cream)] font-body p-8 flex flex-col gap-6", children });
  var Light = ({ children }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "bg-[var(--color-cream)] text-[var(--color-charcoal)] font-body p-8 flex flex-col gap-6", children });
  var GalleryUpload = () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dark, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "flex flex-col gap-3", style: { width: 420 }, children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "flex items-baseline justify-between", children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "text-xs uppercase tracking-widest text-[var(--color-taupe)]", children: "Uploading gallery" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "font-display text-2xl font-normal tracking-wide", children: "68%" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.Progress, { value: 68, className: "h-2" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { className: "text-sm text-[var(--color-champagne)]", children: "rooftop-canopy-04.jpg — 14 of 21 images" })
  ] }) });
  var CapacityTonight = () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dark, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "flex flex-col gap-5", style: { width: 440 }, children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { className: "text-xs uppercase tracking-widest text-[var(--color-taupe)]", children: "This weekend" }),
    [
      { name: "Midnight Sessions", taken: 180, total: 180, value: 100 },
      { name: "Gamelan Supper Club", taken: 94, total: 130, value: 72 },
      { name: "Sunday Long Lunch", taken: 21, total: 90, value: 24 }
    ].map((e) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "flex flex-col gap-2", children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "flex items-baseline justify-between", children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "font-display text-xl font-normal tracking-wide", children: e.name }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { className: "text-sm text-[var(--color-champagne)]", children: [
          e.taken,
          " / ",
          e.total
        ] })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.Progress, { value: e.value, className: "h-2" })
    ] }, e.name))
  ] }) });
  var Values = () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Light, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    "div",
    {
      className: "flex flex-col gap-4 rounded-lg border bg-background p-6",
      style: { width: 420 },
      children: [0, 25, 60, 100].map((v) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "flex items-center gap-4", children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { className: "text-sm", style: { width: 48 }, children: [
          v,
          "%"
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.Progress, { value: v, className: "flex-1" })
      ] }, v))
    }
  ) });
  return __toCommonJS(Progress_exports);
})();
