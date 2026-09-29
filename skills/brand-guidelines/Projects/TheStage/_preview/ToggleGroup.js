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

  // .design-sync/previews/ToggleGroup.tsx
  var ToggleGroup_exports = {};
  __export(ToggleGroup_exports, {
    SeatingTime: () => SeatingTime,
    Sizes: () => Sizes,
    Variants: () => Variants,
    VenueAreas: () => VenueAreas
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

  // .design-sync/previews/ToggleGroup.tsx
  var import_jsx_runtime = __toESM(require_react_shim());
  var Dark = ({ children }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "on-brand-dark bg-[var(--color-dark-green)] text-[var(--color-cream)] font-body p-8 flex flex-col items-start gap-4", children });
  var Light = ({ children }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "bg-[var(--color-cream)] text-[var(--color-charcoal)] font-body p-8 flex flex-col items-start gap-4", children });
  var Label = ({ children }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { className: "text-[11px] uppercase tracking-[0.2em] text-[var(--color-taupe)]", children });
  var item = "text-[var(--color-champagne)] hover:bg-white/5 hover:text-[var(--color-muted-gold)] data-[state=on]:bg-[var(--color-muted-gold)] data-[state=on]:text-[var(--color-dark-green)]";
  var outlineItem = `border-white/10 ${item} data-[state=on]:border-[var(--color-muted-gold)]`;
  var lightItem = "text-[var(--color-graphite)] data-[state=on]:bg-[var(--color-charcoal)] data-[state=on]:text-[var(--color-cream)]";
  var lightOutlineItem = `border-[var(--color-stone)] ${lightItem} data-[state=on]:border-[var(--color-charcoal)]`;
  var VenueAreas = () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Dark, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Spaces required" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
      ds_exports.ToggleGroup,
      {
        type: "multiple",
        variant: "outline",
        defaultValue: ["terrace", "rooftop"],
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.ToggleGroupItem, { value: "terrace", className: outlineItem, children: "Terrace" }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.ToggleGroupItem, { value: "rooftop", className: outlineItem, children: "Rooftop" }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.ToggleGroupItem, { value: "garden", className: outlineItem, children: "Garden" }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.ToggleGroupItem, { value: "cellar", className: outlineItem, children: "Wine Cellar" })
        ]
      }
    )
  ] });
  var SeatingTime = () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Dark, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Seating" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ds_exports.ToggleGroup, { type: "single", defaultValue: "sunset", children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.ToggleGroupItem, { value: "early", className: item, children: "17:30" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.ToggleGroupItem, { value: "sunset", className: item, children: "19:00" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.ToggleGroupItem, { value: "late", className: item, children: "21:30" })
    ] })
  ] });
  var Sizes = () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Dark, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ds_exports.ToggleGroup, { type: "single", size: "sm", defaultValue: "terrace", children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.ToggleGroupItem, { value: "terrace", className: item, children: "Terrace" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.ToggleGroupItem, { value: "rooftop", className: item, children: "Rooftop" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ds_exports.ToggleGroup, { type: "single", size: "default", defaultValue: "terrace", children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.ToggleGroupItem, { value: "terrace", className: item, children: "Terrace" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.ToggleGroupItem, { value: "rooftop", className: item, children: "Rooftop" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ds_exports.ToggleGroup, { type: "single", size: "lg", defaultValue: "terrace", children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.ToggleGroupItem, { value: "terrace", className: item, children: "Terrace" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.ToggleGroupItem, { value: "rooftop", className: item, children: "Rooftop" })
    ] })
  ] });
  var Variants = () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Light, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ds_exports.ToggleGroup, { type: "single", defaultValue: "rooftop", children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.ToggleGroupItem, { value: "terrace", className: lightItem, children: "Terrace" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.ToggleGroupItem, { value: "rooftop", className: lightItem, children: "Rooftop" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.ToggleGroupItem, { value: "garden", className: lightItem, children: "Garden" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ds_exports.ToggleGroup, { type: "multiple", variant: "outline", defaultValue: ["garden"], children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.ToggleGroupItem, { value: "terrace", className: lightOutlineItem, children: "Terrace" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.ToggleGroupItem, { value: "rooftop", className: lightOutlineItem, children: "Rooftop" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.ToggleGroupItem, { value: "garden", className: lightOutlineItem, children: "Garden" })
    ] })
  ] });
  return __toCommonJS(ToggleGroup_exports);
})();
