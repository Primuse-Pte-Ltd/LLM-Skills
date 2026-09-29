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

  // .design-sync/previews/Kbd.tsx
  var Kbd_exports = {};
  __export(Kbd_exports, {
    ActionLegend: () => ActionLegend,
    Default: () => Default,
    Shortcuts: () => Shortcuts
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

  // .design-sync/previews/Kbd.tsx
  var import_jsx_runtime = __toESM(require_react_shim());
  var Dark = ({ children }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "on-brand-dark bg-[var(--color-dark-green)] text-[var(--color-cream)] font-body p-8", children });
  var goldKey = "bg-[var(--color-muted-gold)] text-black border border-[var(--color-gold-light)]";
  var Shortcuts = () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Dark, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { className: "text-xs uppercase tracking-widest text-[var(--color-taupe)] mb-4", children: "Door app · keyboard" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "flex flex-wrap items-center gap-6", children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.Kbd, { children: "⌘" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.Kbd, { children: "K" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.Kbd, { children: "Esc" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ds_exports.KbdGroup, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.Kbd, { className: goldKey, children: "⌘" }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "text-[var(--color-taupe)] text-xs", children: "+" }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.Kbd, { className: goldKey, children: "K" })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ds_exports.KbdGroup, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.Kbd, { children: "Shift" }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "text-[var(--color-taupe)] text-xs", children: "+" }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.Kbd, { children: "Enter" })
      ] })
    ] })
  ] });
  var ActionLegend = () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dark, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "border border-white/10 bg-white/5 rounded-md p-6 max-w-md", children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { className: "font-display text-2xl font-normal tracking-wide mb-4", children: "Floor shortcuts" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "flex items-center justify-between py-2 border-b border-white/10", children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "text-sm text-[var(--color-champagne)]", children: "Search guests" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ds_exports.KbdGroup, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.Kbd, { className: goldKey, children: "⌘" }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.Kbd, { className: goldKey, children: "K" })
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "flex items-center justify-between py-2 border-b border-white/10", children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "text-sm text-[var(--color-champagne)]", children: "Seat selected table" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ds_exports.KbdGroup, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.Kbd, { children: "Shift" }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.Kbd, { children: "S" })
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "flex items-center justify-between py-2 border-b border-white/10", children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "text-sm text-[var(--color-champagne)]", children: "Move to waitlist" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ds_exports.KbdGroup, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.Kbd, { children: "Shift" }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.Kbd, { children: "W" })
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "flex items-center justify-between py-2", children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "text-sm text-[var(--color-champagne)]", children: "Close panel" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.Kbd, { children: "Esc" })
    ] })
  ] }) });
  var Default = () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "bg-[var(--color-cream)] text-[var(--color-charcoal)] font-body p-8", children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "bg-background rounded-md border p-6 flex flex-wrap items-center gap-4", children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.Kbd, { children: "⌘" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.Kbd, { children: "K" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.Kbd, { children: "Esc" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.Kbd, { children: "Enter" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ds_exports.KbdGroup, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.Kbd, { children: "⌘" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.Kbd, { children: "Shift" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.Kbd, { children: "P" })
    ] })
  ] }) });
  return __toCommonJS(Kbd_exports);
})();
