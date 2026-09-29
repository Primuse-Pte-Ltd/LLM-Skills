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

  // .design-sync/previews/Card.tsx
  var Card_exports = {};
  __export(Card_exports, {
    Default: () => Default,
    EventCard: () => EventCard,
    Minimal: () => Minimal
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

  // .design-sync/previews/Card.tsx
  var import_jsx_runtime = __toESM(require_react_shim());
  var Dark = ({ children }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "bg-[var(--color-dark-green)] font-body p-8 flex flex-wrap gap-6", children });
  var Light = ({ children }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "bg-[var(--color-cream)] font-body p-8 flex flex-wrap gap-6", children });
  var EventCard = () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dark, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ds_exports.Card, { className: "w-[340px] border-[var(--color-muted-gold)] bg-white/5 text-[var(--color-cream)]", children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ds_exports.CardHeader, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.Badge, { className: "mb-2 w-fit bg-[var(--color-muted-gold)] text-black hover:bg-[var(--color-muted-gold)]", children: "Saturday" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.CardTitle, { className: "font-display text-3xl font-normal tracking-wide", children: "Midnight Sessions" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.CardDescription, { className: "text-[var(--color-taupe)]", children: "Live sets from the rooftop, 22:00 until late." })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.CardContent, { className: "text-sm leading-relaxed text-[var(--color-champagne)]", children: "An intimate evening of deep house and Balinese cocktails, served under the canopy. Table service available for parties of four or more." }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ds_exports.CardFooter, { className: "justify-between", children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "text-xs uppercase tracking-widest text-[var(--color-taupe)]", children: "From IDR 450,000" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        ds_exports.Button,
        {
          size: "sm",
          className: "bg-[var(--color-muted-gold)] text-black hover:bg-[var(--color-gold-light)]",
          children: "Book"
        }
      )
    ] })
  ] }) });
  var Default = () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Light, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ds_exports.Card, { className: "w-[340px]", children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ds_exports.CardHeader, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.CardTitle, { children: "Reservation confirmed" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.CardDescription, { children: "Table 12 · Friday 14 March · 20:30" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.CardContent, { className: "text-sm", children: "Your table is held for 15 minutes past the reservation time. Bring the QR code in your confirmation email." }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ds_exports.CardFooter, { className: "gap-2", children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.Button, { size: "sm", children: "View ticket" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.Button, { size: "sm", variant: "outline", children: "Cancel" })
    ] })
  ] }) });
  var Minimal = () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dark, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ds_exports.Card, { className: "w-[280px] border-white/10 bg-white/5 text-[var(--color-cream)]", children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ds_exports.CardHeader, { className: "pb-2", children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.CardDescription, { className: "text-xs uppercase tracking-widest text-[var(--color-taupe)]", children: "Tonight" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.CardTitle, { className: "font-display text-4xl font-normal", children: "142" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.CardContent, { className: "text-sm text-[var(--color-champagne)]", children: "guests on the list" })
  ] }) });
  return __toCommonJS(Card_exports);
})();
