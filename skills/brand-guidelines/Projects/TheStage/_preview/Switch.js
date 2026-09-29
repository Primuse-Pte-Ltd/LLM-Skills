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

  // .design-sync/previews/Switch.tsx
  var Switch_exports = {};
  __export(Switch_exports, {
    BookingPreferences: () => BookingPreferences,
    States: () => States,
    WithDescription: () => WithDescription
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

  // .design-sync/previews/Switch.tsx
  var import_jsx_runtime = __toESM(require_react_shim());
  var Dark = ({ children }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    "div",
    {
      className: "on-brand-dark bg-[var(--color-dark-green)] text-[var(--color-cream)] font-body p-8",
      children
    }
  );
  var Light = ({ children }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "bg-[var(--color-cream)] text-[var(--color-charcoal)] font-body p-8", children });
  var BookingPreferences = () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dark, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "max-w-md space-y-5", children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { className: "text-xs uppercase tracking-wider text-[var(--color-taupe)]", children: "How we reach you" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "flex items-center justify-between gap-6", children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.Label, { htmlFor: "sw-wa", className: "text-sm text-[var(--color-cream)]", children: "Table reminders on WhatsApp" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.Switch, { id: "sw-wa", defaultChecked: true })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "flex items-center justify-between gap-6", children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.Label, { htmlFor: "sw-events", className: "text-sm text-[var(--color-cream)]", children: "Rooftop session announcements" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.Switch, { id: "sw-events", defaultChecked: true })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "flex items-center justify-between gap-6", children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.Label, { htmlFor: "sw-offers", className: "text-sm text-[var(--color-cream)]", children: "Seasonal offers and set menus" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.Switch, { id: "sw-offers" })
    ] })
  ] }) });
  var WithDescription = () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dark, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "max-w-md space-y-3", children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "flex items-start justify-between gap-6 rounded-md border border-[var(--color-muted-gold)] p-5", children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "space-y-1", children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.Label, { htmlFor: "sw-auto", className: "text-sm text-[var(--color-cream)]", children: "Hold my usual table" }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { className: "text-xs leading-relaxed text-[var(--color-taupe)]", children: "Terrace 12 is kept for you every Friday until 20:45, then released to the waiting list." })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.Switch, { id: "sw-auto", defaultChecked: true })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "flex items-start justify-between gap-6 rounded-md border border-white/10 p-5", children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "space-y-1", children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.Label, { htmlFor: "sw-valet", className: "text-sm text-[var(--color-cream)]", children: "Valet on arrival" }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { className: "text-xs leading-relaxed text-[var(--color-taupe)]", children: "IDR 150,000 per visit, added to the bill." })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.Switch, { id: "sw-valet" })
    ] })
  ] }) });
  var States = () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Light, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "max-w-md space-y-4", children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "flex items-center gap-4", children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.Switch, { id: "sw-off" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.Label, { htmlFor: "sw-off", children: "Off" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "flex items-center gap-4", children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.Switch, { id: "sw-on", defaultChecked: true }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.Label, { htmlFor: "sw-on", children: "On" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "flex items-center gap-4", children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.Switch, { id: "sw-doff", disabled: true, className: "peer" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.Label, { htmlFor: "sw-doff", children: "Disabled, off" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "flex items-center gap-4", children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.Switch, { id: "sw-don", disabled: true, defaultChecked: true, className: "peer" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.Label, { htmlFor: "sw-don", children: "Disabled, on" })
    ] })
  ] }) });
  return __toCommonJS(Switch_exports);
})();
