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

  // .design-sync/previews/Collapsible.tsx
  var Collapsible_exports = {};
  __export(Collapsible_exports, {
    BookingDetails: () => BookingDetails,
    OpenAndClosed: () => OpenAndClosed,
    StaffNotes: () => StaffNotes
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

  // .design-sync/previews/Collapsible.tsx
  var import_jsx_runtime = __toESM(require_react_shim());
  var Dark = ({ children }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "bg-[var(--color-dark-green)] text-[var(--color-cream)] font-body p-8", children });
  var triggerClass = "flex w-full items-center justify-between py-3 text-xs uppercase tracking-widest text-[var(--color-taupe)] hover:text-[var(--color-muted-gold)] data-[state=open]:text-[var(--color-muted-gold)]";
  var BookingDetails = () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dark, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "border border-[var(--color-muted-gold)] bg-white/5 rounded-md p-6 max-w-md", children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { className: "font-display text-2xl font-normal tracking-wide", children: "Midnight Sessions" }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { className: "text-xs uppercase tracking-widest text-[var(--color-taupe)] mt-1", children: "Saturday 14 March · 22:00" })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.Badge, { className: "bg-[var(--color-muted-gold)] text-black hover:bg-[var(--color-muted-gold)]", children: "Confirmed" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ds_exports.Collapsible, { defaultOpen: true, className: "mt-4", children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ds_exports.CollapsibleTrigger, { className: triggerClass, children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Reservation details" }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "text-base", children: "−" })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.CollapsibleContent, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "border-t border-white/10 pt-2", children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "flex items-center justify-between py-2", children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "text-sm text-[var(--color-taupe)]", children: "Table" }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "text-sm text-[var(--color-cream)]", children: "R1 · rooftop" })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "flex items-center justify-between py-2", children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "text-sm text-[var(--color-taupe)]", children: "Party" }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "text-sm text-[var(--color-cream)] tabular-nums", children: "4 guests" })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "flex items-center justify-between py-2", children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "text-sm text-[var(--color-taupe)]", children: "Host" }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "text-sm text-[var(--color-cream)]", children: "Ayu Kusuma" })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "flex items-center justify-between py-2", children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "text-sm text-[var(--color-taupe)]", children: "Minimum spend" }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "font-display text-xl text-[var(--color-muted-gold)] tabular-nums", children: "IDR 3,500,000" })
        ] })
      ] }) })
    ] })
  ] }) });
  var OpenAndClosed = () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Dark, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "flex flex-wrap gap-6", children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ds_exports.Collapsible, { defaultOpen: true, className: "border border-white/10 bg-white/5 rounded-md p-4 w-[300px]", children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ds_exports.CollapsibleTrigger, { className: triggerClass, children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Dietary notes" }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "text-base", children: "−" })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.CollapsibleContent, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { className: "text-sm leading-relaxed text-[var(--color-champagne)] border-t border-white/10 pt-2", children: "Two pescatarian, one shellfish allergy. Kitchen notified 12 March." }) })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ds_exports.Collapsible, { className: "border border-white/10 bg-white/5 rounded-md p-4 w-[300px]", children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ds_exports.CollapsibleTrigger, { className: triggerClass, children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Dietary notes" }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "text-base", children: "+" })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.CollapsibleContent, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { className: "text-sm leading-relaxed text-[var(--color-champagne)] border-t border-white/10 pt-2", children: "Two pescatarian, one shellfish allergy. Kitchen notified 12 March." }) })
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { className: "text-xs uppercase tracking-widest text-[var(--color-taupe)] mt-4", children: "defaultOpen · closed" })
  ] });
  var StaffNotes = () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dark, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ds_exports.Collapsible, { defaultOpen: true, className: "border border-white/10 bg-white/5 rounded-md p-6 max-w-xl", children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { className: "text-xs uppercase tracking-widest text-[var(--color-taupe)]", children: "Table C5 · Nadia Prameswari" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { className: "text-sm leading-relaxed text-[var(--color-champagne)] mt-2", children: "Regular since 2022. Prefers the corner banquette facing the sea." }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ds_exports.CollapsibleTrigger, { className: triggerClass, children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Full history" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "text-base", children: "−" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.CollapsibleContent, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "border-t border-white/10 pt-2 text-sm leading-relaxed text-[var(--color-champagne)] space-y-2", children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "14 Feb — Anniversary dinner, party of 2. Champagne on arrival." }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "28 Dec — New Year rooftop, party of 8. Deposit IDR 12,000,000." }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "03 Nov — Gamelan sunset, party of 3. Left a note for the kitchen." })
    ] }) })
  ] }) });
  return __toCommonJS(Collapsible_exports);
})();
