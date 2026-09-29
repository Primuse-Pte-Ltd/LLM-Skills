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

  // .design-sync/previews/Spinner.tsx
  var Spinner_exports = {};
  __export(Spinner_exports, {
    InAction: () => InAction,
    PendingBooking: () => PendingBooking,
    Sizes: () => Sizes
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

  // .design-sync/previews/Spinner.tsx
  var import_jsx_runtime = __toESM(require_react_shim());
  var Dark = ({ children }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "on-brand-dark bg-[var(--color-dark-green)] text-[var(--color-cream)] font-body p-8 flex flex-col gap-6", children });
  var Light = ({ children }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "bg-[var(--color-cream)] text-[var(--color-charcoal)] font-body p-8 flex items-center gap-8", children });
  var PendingBooking = () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Dark, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
      "div",
      {
        className: "rounded-lg border border-white/10 bg-white/5 p-5 flex items-center gap-4",
        style: { width: 440 },
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.Spinner, { className: "h-6 w-6 text-[var(--color-muted-gold)]" }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "flex flex-1 flex-col gap-1", children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "font-display text-xl font-normal tracking-wide", children: "Confirming your table" }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "text-sm text-[var(--color-taupe)]", children: "Charging IDR 1,200,000 — do not close this window." })
          ] })
        ]
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { className: "flex items-center gap-2 text-sm text-[var(--color-champagne)]", children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.Spinner, { className: "text-[var(--color-muted-gold)]" }),
      "Checking availability for Saturday 15 March…"
    ] })
  ] });
  var InAction = () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Dark, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "flex flex-wrap items-center gap-4", children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
        ds_exports.Button,
        {
          disabled: true,
          className: "bg-[var(--color-muted-gold)] text-black flex items-center gap-2",
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.Spinner, {}),
            "Reserving"
          ]
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
        ds_exports.Button,
        {
          variant: "outline",
          disabled: true,
          className: "border-[var(--color-muted-gold)] bg-transparent text-[var(--color-cream)] flex items-center gap-2",
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.Spinner, { className: "text-[var(--color-muted-gold)]" }),
            "Refunding deposit"
          ]
        }
      )
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "flex items-center gap-3 border-t border-white/10 pt-6", children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.Spinner, { className: "h-8 w-8 text-[var(--color-muted-gold)]" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "text-xs uppercase tracking-widest text-[var(--color-taupe)]", children: "Loading tonight’s guest list" })
    ] })
  ] });
  var Sizes = () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Light, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.Spinner, {}),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.Spinner, { className: "h-6 w-6" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.Spinner, { className: "h-8 w-8" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.Spinner, { className: "h-8 w-8 text-[var(--color-bronze)]" })
  ] });
  return __toCommonJS(Spinner_exports);
})();
