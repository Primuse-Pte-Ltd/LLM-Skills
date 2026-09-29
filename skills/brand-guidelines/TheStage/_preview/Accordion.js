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

  // .design-sync/previews/Accordion.tsx
  var Accordion_exports = {};
  __export(Accordion_exports, {
    Default: () => Default,
    Faq: () => Faq,
    MultipleOpen: () => MultipleOpen
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

  // .design-sync/previews/Accordion.tsx
  var import_jsx_runtime = __toESM(require_react_shim());
  var Dark = ({ children }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "on-brand-dark bg-[var(--color-dark-green)] text-[var(--color-cream)] font-body p-8", children });
  var trigger = "font-display text-xl font-normal tracking-wide text-[var(--color-cream)] hover:no-underline hover:text-[var(--color-muted-gold)] data-[state=open]:text-[var(--color-muted-gold)]";
  var content = "text-sm leading-relaxed text-[var(--color-champagne)]";
  var Faq = () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Dark, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { className: "text-xs uppercase tracking-widest text-[var(--color-taupe)] mb-4", children: "Before you arrive" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ds_exports.Accordion, { type: "single", defaultValue: "dress", className: "max-w-xl", children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ds_exports.AccordionItem, { value: "dress", className: "border-white/10", children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.AccordionTrigger, { className: trigger, children: "What is the dress code?" }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.AccordionContent, { className: content, children: "Smart resort after 20:00 — linen, collared shirts, closed shoes on the rooftop. Swimwear is fine at the garden pavilion until sunset." })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ds_exports.AccordionItem, { value: "deposit", className: "border-white/10", children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.AccordionTrigger, { className: trigger, children: "Is a deposit required?" }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.AccordionContent, { className: content, children: "Tables of six or more hold a IDR 1,500,000 deposit, redeemable against the bill on the night." })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ds_exports.AccordionItem, { value: "parking", className: "border-white/10", children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.AccordionTrigger, { className: trigger, children: "Where do we park?" }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.AccordionContent, { className: content, children: "Valet on Jalan Kayu Aya from 18:00. Scooters park free at the Seminyak gate." })
      ] })
    ] })
  ] });
  var MultipleOpen = () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Dark, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { className: "text-xs uppercase tracking-widest text-[var(--color-taupe)] mb-4", children: "Venue hire · Jimbaran" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
      ds_exports.Accordion,
      {
        type: "multiple",
        defaultValue: ["spaces", "catering"],
        className: "max-w-xl",
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ds_exports.AccordionItem, { value: "spaces", className: "border-[var(--color-muted-gold)]", children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.AccordionTrigger, { className: trigger, children: "Spaces" }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.AccordionContent, { className: content, children: "Rooftop terrace (120 standing), garden pavilion (80 seated) and the cellar room (24 seated). All three can be taken together for a buyout." })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ds_exports.AccordionItem, { value: "catering", className: "border-[var(--color-muted-gold)]", children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.AccordionTrigger, { className: trigger, children: "Catering" }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.AccordionContent, { className: content, children: "Five-course tasting menu from IDR 850,000 per guest, or a Balinese megibung service from IDR 620,000. Vegetarian menus at no extra charge." })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ds_exports.AccordionItem, { value: "music", className: "border-[var(--color-muted-gold)]", children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.AccordionTrigger, { className: trigger, children: "Music and sound" }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.AccordionContent, { className: content, children: "House gamelan ensemble included until 22:00. DJ booth and rider on request." })
          ] })
        ]
      }
    )
  ] });
  var Default = () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "bg-[var(--color-cream)] text-[var(--color-charcoal)] font-body p-8", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "bg-background rounded-md border p-6", children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ds_exports.Accordion, { type: "single", defaultValue: "cancel", className: "max-w-xl", children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ds_exports.AccordionItem, { value: "cancel", children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.AccordionTrigger, { children: "Can I cancel a reservation?" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.AccordionContent, { children: "Yes — up to 24 hours before your arrival time, from the link in your confirmation email. The deposit is refunded within five working days." })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ds_exports.AccordionItem, { value: "children", children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.AccordionTrigger, { children: "Are children welcome?" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.AccordionContent, { children: "Until 20:00 in the garden pavilion. The rooftop is 18+ all evening." })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ds_exports.AccordionItem, { value: "accessible", children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.AccordionTrigger, { children: "Is the venue accessible?" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.AccordionContent, { children: "Step-free from the Seminyak gate to the pavilion and the rooftop lift." })
    ] })
  ] }) }) });
  return __toCommonJS(Accordion_exports);
})();
