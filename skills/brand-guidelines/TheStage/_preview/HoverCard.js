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

  // .design-sync/previews/HoverCard.tsx
  var HoverCard_exports = {};
  __export(HoverCard_exports, {
    ArtistPreview: () => ArtistPreview,
    GuestRecord: () => GuestRecord
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

  // .design-sync/previews/HoverCard.tsx
  var import_jsx_runtime = __toESM(require_react_shim());
  var Stage = ({ children }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    "div",
    {
      className: "font-body flex flex-col items-center gap-6 bg-[var(--color-dark-green)] p-8",
      style: { minHeight: 472 },
      children
    }
  );
  var ArtistPreview = () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Stage, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "text-center", children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "text-xs uppercase tracking-widest text-[var(--color-taupe)]", children: "Line-up · Saturday 22 March" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "font-display text-3xl text-[var(--color-cream)]", children: "Midnight Sessions" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ds_exports.HoverCard, { open: true, children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.HoverCardTrigger, { asChild: true, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.Button, { variant: "link", className: "text-[var(--color-muted-gold)]", children: "Dewa Nakamura" }) }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ds_exports.HoverCardContent, { className: "text-[var(--color-charcoal)]", children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.Avatar, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.AvatarFallback, { children: "DN" }) }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "font-display text-lg", children: "Dewa Nakamura" }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "text-xs text-muted-foreground", children: "Resident since 2022" })
          ] })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { className: "mt-3 text-sm leading-relaxed", children: "Deep house and gamelan-sampled percussion. Closes the Terrace room every second Saturday." }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.Separator, { className: "mt-3 mb-3" }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "text-xs text-muted-foreground", children: "Next set 01:00 — 03:30 · Rooftop" })
      ] })
    ] })
  ] });
  var GuestRecord = () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Stage, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "text-center", children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "text-xs uppercase tracking-widest text-[var(--color-taupe)]", children: "Reservations · TS-4821" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "font-display text-3xl text-[var(--color-cream)]", children: "Table 14 · four guests" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ds_exports.HoverCard, { open: true, children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.HoverCardTrigger, { asChild: true, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.Button, { variant: "link", className: "text-[var(--color-muted-gold)]", children: "Kadek Wirawan" }) }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ds_exports.HoverCardContent, { className: "w-80 text-[var(--color-charcoal)]", children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.Avatar, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.AvatarFallback, { children: "KW" }) }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "font-medium", children: "Kadek Wirawan" }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "text-xs text-muted-foreground", children: "kadek.wirawan@gmail.com" })
          ] })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.Separator, { className: "mt-3 mb-3" }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "flex items-center justify-between text-sm", children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "text-muted-foreground", children: "Bookings" }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "tabular-nums", children: "11 since Aug 2023" })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "mt-2 flex items-center justify-between text-sm", children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "text-muted-foreground", children: "Total spend" }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "tabular-nums", children: "IDR 41,200,000" })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "mt-2 flex items-center justify-between text-sm", children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "text-muted-foreground", children: "No-shows" }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "tabular-nums", children: "0" })
        ] })
      ] })
    ] })
  ] });
  return __toCommonJS(HoverCard_exports);
})();
