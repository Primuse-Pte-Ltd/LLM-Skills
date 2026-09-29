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

  // .design-sync/previews/RadioGroup.tsx
  var RadioGroup_exports = {};
  __export(RadioGroup_exports, {
    Horizontal: () => Horizontal,
    SeatingChoice: () => SeatingChoice,
    States: () => States
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

  // .design-sync/previews/RadioGroup.tsx
  var import_jsx_runtime = __toESM(require_react_shim());
  var Dark = ({ children }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    "div",
    {
      className: "on-brand-dark bg-[var(--color-dark-green)] text-[var(--color-cream)] font-body p-8",
      children
    }
  );
  var Light = ({ children }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "bg-[var(--color-cream)] text-[var(--color-charcoal)] font-body p-8", children });
  var SeatingChoice = () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dark, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "max-w-md space-y-4", children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { className: "text-xs uppercase tracking-wider text-[var(--color-taupe)]", children: "Where would you like to sit" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ds_exports.RadioGroup, { defaultValue: "rooftop", name: "seating", children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "flex items-start gap-3 rounded-md border border-white/10 p-4", children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.RadioGroupItem, { value: "terrace", id: "rg-terrace", className: "mt-1" }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ds_exports.Label, { htmlFor: "rg-terrace", className: "text-sm leading-relaxed text-[var(--color-cream)]", children: [
          "Garden terrace",
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "block text-xs text-[var(--color-taupe)]", children: "Open air, seats six · from IDR 450,000" })
        ] })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "flex items-start gap-3 rounded-md border border-[var(--color-muted-gold)] p-4", children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.RadioGroupItem, { value: "rooftop", id: "rg-rooftop", className: "mt-1" }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ds_exports.Label, { htmlFor: "rg-rooftop", className: "text-sm leading-relaxed text-[var(--color-cream)]", children: [
          "Rooftop canopy",
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "block text-xs text-[var(--color-taupe)]", children: "Sunset view, seats eight · from IDR 1,200,000" })
        ] })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "flex items-start gap-3 rounded-md border border-white/10 p-4", children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.RadioGroupItem, { value: "pavilion", id: "rg-pavilion", className: "mt-1" }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ds_exports.Label, { htmlFor: "rg-pavilion", className: "text-sm leading-relaxed text-[var(--color-cream)]", children: [
          "Private pavilion",
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "block text-xs text-[var(--color-taupe)]", children: "Enclosed, seats twelve · from IDR 3,500,000" })
        ] })
      ] })
    ] })
  ] }) });
  var Horizontal = () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dark, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "max-w-md space-y-4", children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { className: "text-xs uppercase tracking-wider text-[var(--color-taupe)]", children: "Party size" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
      ds_exports.RadioGroup,
      {
        defaultValue: "4",
        orientation: "horizontal",
        name: "party",
        className: "flex flex-wrap gap-6",
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.RadioGroupItem, { value: "2", id: "rg-2" }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.Label, { htmlFor: "rg-2", className: "text-sm text-[var(--color-cream)]", children: "Two" })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.RadioGroupItem, { value: "4", id: "rg-4" }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.Label, { htmlFor: "rg-4", className: "text-sm text-[var(--color-cream)]", children: "Four" })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.RadioGroupItem, { value: "6", id: "rg-6" }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.Label, { htmlFor: "rg-6", className: "text-sm text-[var(--color-cream)]", children: "Six" })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.RadioGroupItem, { value: "8", id: "rg-8" }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.Label, { htmlFor: "rg-8", className: "text-sm text-[var(--color-cream)]", children: "Eight or more" })
          ] })
        ]
      }
    )
  ] }) });
  var States = () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Light, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "max-w-md space-y-6", children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "space-y-2", children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.Label, { className: "text-sm font-medium", children: "Deposit" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ds_exports.RadioGroup, { defaultValue: "half", name: "deposit", children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.RadioGroupItem, { value: "full", id: "rg-full" }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.Label, { htmlFor: "rg-full", children: "Pay IDR 3,000,000 in full" })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.RadioGroupItem, { value: "half", id: "rg-half" }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.Label, { htmlFor: "rg-half", children: "Half now, half on the night" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "space-y-2", children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.Label, { className: "text-sm font-medium", children: "Table upgrade — unavailable for this date" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ds_exports.RadioGroup, { defaultValue: "none", name: "upgrade", disabled: true, children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.RadioGroupItem, { value: "none", id: "rg-none" }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.Label, { htmlFor: "rg-none", children: "Keep my table" })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.RadioGroupItem, { value: "cabana", id: "rg-cabana" }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.Label, { htmlFor: "rg-cabana", children: "Move to a pool cabana" })
        ] })
      ] })
    ] })
  ] }) });
  return __toCommonJS(RadioGroup_exports);
})();
