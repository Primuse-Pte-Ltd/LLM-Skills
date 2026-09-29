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

  // .design-sync/previews/Select.tsx
  var Select_exports = {};
  __export(Select_exports, {
    OnLightSurface: () => OnLightSurface,
    PartySize: () => PartySize,
    TriggerStates: () => TriggerStates
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

  // .design-sync/previews/Select.tsx
  var import_jsx_runtime = __toESM(require_react_shim());
  var Dark = ({ children }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "bg-[var(--color-dark-green)] text-[var(--color-cream)] font-body p-8", children });
  var Light = ({ children }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "bg-[var(--color-cream)] text-[var(--color-charcoal)] font-body p-8", children });
  var triggerDark = "bg-[var(--color-deep-green)] border-[var(--color-muted-gold)] text-[var(--color-cream)]";
  var PartySize = () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dark, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "w-[300px] space-y-5 pb-12", children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { className: "font-display text-2xl font-normal tracking-wide", children: "Reserve a table" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.Label, { className: "text-xs uppercase tracking-wider text-[var(--color-champagne)]", children: "Party size" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "mt-2", children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ds_exports.Select, { open: true, defaultValue: "4", children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.SelectTrigger, { className: triggerDark, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.SelectValue, {}) }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ds_exports.SelectContent, { className: "text-[var(--color-charcoal)]", children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ds_exports.SelectGroup, { children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.SelectLabel, { children: "Tables" }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.SelectItem, { value: "2", children: "2 guests" }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.SelectItem, { value: "4", children: "4 guests" }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.SelectItem, { value: "6", children: "6 guests" })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.SelectSeparator, {}),
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ds_exports.SelectGroup, { children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.SelectLabel, { children: "Cabanas" }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.SelectItem, { value: "8", children: "8 guests — cabana only" }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.SelectItem, { value: "12", disabled: true, children: "12 guests — terrace hire" })
          ] })
        ] })
      ] }) })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "border border-white/10 bg-white/5 p-4 text-sm text-[var(--color-champagne)]", children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Table minimum · IDR 4,500,000" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { className: "mt-1 text-[var(--color-taupe)]", children: "Redeemable against food and drinks on the night." })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.Button, { className: "w-full bg-[var(--color-muted-gold)] text-black hover:bg-[var(--color-gold-light)]", children: "Check availability" })
  ] }) });
  var TriggerStates = () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dark, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "w-[300px] space-y-5", children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.Label, { className: "text-xs uppercase tracking-wider text-[var(--color-champagne)]", children: "Seating area" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "mt-2", children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ds_exports.Select, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.SelectTrigger, { className: triggerDark, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.SelectValue, { placeholder: "Choose an area" }) }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.SelectContent, { className: "text-[var(--color-charcoal)]", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.SelectItem, { value: "terrace", children: "Terrace" }) })
      ] }) })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.Label, { className: "text-xs uppercase tracking-wider text-[var(--color-champagne)]", children: "Arrival time" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "mt-2", children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ds_exports.Select, { defaultValue: "2030", children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.SelectTrigger, { className: triggerDark, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.SelectValue, {}) }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.SelectContent, { className: "text-[var(--color-charcoal)]", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.SelectItem, { value: "2030", children: "20:30" }) })
      ] }) })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.Label, { className: "text-xs uppercase tracking-wider text-[var(--color-taupe)]", children: "Cabana — sold out tonight" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "mt-2", children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ds_exports.Select, { disabled: true, defaultValue: "cabana3", children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.SelectTrigger, { className: triggerDark, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.SelectValue, {}) }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.SelectContent, { className: "text-[var(--color-charcoal)]", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.SelectItem, { value: "cabana3", children: "Cabana 3" }) })
      ] }) })
    ] })
  ] }) });
  var OnLightSurface = () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Light, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "w-[300px] space-y-5", children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.Label, { children: "Event" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "mt-2", children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ds_exports.Select, { defaultValue: "midnight", children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.SelectTrigger, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.SelectValue, {}) }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ds_exports.SelectContent, { className: "text-[var(--color-charcoal)]", children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ds_exports.SelectGroup, { children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.SelectLabel, { children: "This week" }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.SelectItem, { value: "midnight", children: "Midnight Sessions" }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.SelectItem, { value: "sunset", children: "Sunset Ceremony" })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.SelectSeparator, {}),
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ds_exports.SelectGroup, { children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.SelectLabel, { children: "Private hire" }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.SelectItem, { value: "terrace", children: "Terrace buy-out" })
          ] })
        ] })
      ] }) })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.Label, { children: "Ticket type" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "mt-2", children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ds_exports.Select, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.SelectTrigger, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.SelectValue, { placeholder: "Select a ticket" }) }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ds_exports.SelectContent, { className: "text-[var(--color-charcoal)]", children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.SelectItem, { value: "ga", children: "General admission — IDR 450,000" }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.SelectItem, { value: "table", children: "Table for four — IDR 4,500,000" })
        ] })
      ] }) })
    ] })
  ] }) });
  return __toCommonJS(Select_exports);
})();
