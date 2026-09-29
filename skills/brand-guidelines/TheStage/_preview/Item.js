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

  // .design-sync/previews/Item.tsx
  var Item_exports = {};
  __export(Item_exports, {
    GuestList: () => GuestList,
    IconRows: () => IconRows,
    Variants: () => Variants
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

  // .design-sync/previews/Item.tsx
  var import_jsx_runtime = __toESM(require_react_shim());
  var Dark = ({ children }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "on-brand-dark bg-[var(--color-dark-green)] text-[var(--color-cream)] font-body p-8", children });
  var GuestList = () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Dark, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { className: "text-xs uppercase tracking-widest text-[var(--color-taupe)] mb-4", children: "Tonight · arrivals" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ds_exports.ItemGroup, { className: "border border-white/10 bg-white/5 rounded-md max-w-xl", children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ds_exports.Item, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.ItemMedia, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.Avatar, { className: "border border-[var(--color-muted-gold)]", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.AvatarFallback, { className: "bg-[var(--color-moss)] text-[var(--color-muted-gold)] font-display text-lg font-normal", children: "AK" }) }) }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ds_exports.ItemContent, { children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.ItemTitle, { className: "text-[var(--color-cream)]", children: "Ayu Kusuma" }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.ItemDescription, { children: "Table R1 · party of 4 · 19:30" })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.ItemActions, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.Badge, { className: "bg-[var(--color-muted-gold)] text-black hover:bg-[var(--color-muted-gold)]", children: "Seated" }) })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.ItemSeparator, { className: "bg-white/20" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ds_exports.Item, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.ItemMedia, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.Avatar, { className: "border border-[var(--color-muted-gold)]", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.AvatarFallback, { className: "bg-[var(--color-moss)] text-[var(--color-muted-gold)] font-display text-lg font-normal", children: "MW" }) }) }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ds_exports.ItemContent, { children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.ItemTitle, { className: "text-[var(--color-cream)]", children: "Made Wirawan" }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.ItemDescription, { children: "Table C2 · party of 2 · 20:00" })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.ItemActions, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
          ds_exports.Button,
          {
            size: "sm",
            variant: "outline",
            className: "border-[var(--color-muted-gold)] bg-transparent text-[var(--color-cream)] hover:bg-white/5",
            children: "Seat"
          }
        ) })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.ItemSeparator, { className: "bg-white/20" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ds_exports.Item, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.ItemMedia, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.Avatar, { className: "border border-white/10", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.AvatarFallback, { className: "bg-[var(--color-forest)] text-[var(--color-taupe)] font-display text-lg font-normal", children: "BV" }) }) }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ds_exports.ItemContent, { children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.ItemTitle, { className: "text-[var(--color-cream)]", children: "Bram de Vries" }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.ItemDescription, { children: "Table L6 · party of 2 · 22:00" })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.ItemActions, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
          ds_exports.Badge,
          {
            variant: "outline",
            className: "border-[var(--color-taupe)] text-[var(--color-taupe)]",
            children: "Waitlist"
          }
        ) })
      ] })
    ] })
  ] });
  var Variants = () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dark, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "flex flex-col gap-4 max-w-xl", children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.Item, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ds_exports.ItemContent, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.ItemTitle, { className: "text-[var(--color-cream)]", children: "default" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.ItemDescription, { children: "Transparent — for rows inside a framed group." })
    ] }) }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.Item, { variant: "outline", children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ds_exports.ItemContent, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.ItemTitle, { className: "text-[var(--color-cream)]", children: "outline" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.ItemDescription, { children: "A moss hairline — a standalone card row." })
    ] }) }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.Item, { variant: "muted", children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ds_exports.ItemContent, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.ItemTitle, { className: "text-[var(--color-cream)]", children: "muted" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.ItemDescription, { children: "Filled — the selected or raised row." })
    ] }) })
  ] }) });
  var IconRows = () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Dark, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { className: "text-xs uppercase tracking-widest text-[var(--color-taupe)] mb-4", children: "Venue hire · what is included" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "flex flex-col gap-2 max-w-xl", children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ds_exports.Item, { variant: "outline", size: "sm", children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.ItemMedia, { variant: "icon", className: "border-[var(--color-muted-gold)] bg-[var(--color-moss)] text-[var(--color-muted-gold)]", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "font-display text-base", children: "R" }) }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ds_exports.ItemContent, { children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.ItemTitle, { className: "text-[var(--color-cream)]", children: "Rooftop terrace" }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.ItemDescription, { children: "Seats 120 standing, 60 seated." })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.ItemActions, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "text-xs uppercase tracking-widest text-[var(--color-muted-gold)] tabular-nums", children: "IDR 42,000,000" }) })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ds_exports.Item, { variant: "outline", size: "sm", children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.ItemMedia, { variant: "icon", className: "border-[var(--color-muted-gold)] bg-[var(--color-moss)] text-[var(--color-muted-gold)]", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "font-display text-base", children: "G" }) }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ds_exports.ItemContent, { children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.ItemTitle, { className: "text-[var(--color-cream)]", children: "Garden pavilion" }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.ItemDescription, { children: "Seats 80 seated, gamelan stage included." })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.ItemActions, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "text-xs uppercase tracking-widest text-[var(--color-muted-gold)] tabular-nums", children: "IDR 28,000,000" }) })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ds_exports.Item, { variant: "outline", size: "sm", children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.ItemMedia, { variant: "icon", className: "border-[var(--color-muted-gold)] bg-[var(--color-moss)] text-[var(--color-muted-gold)]", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "font-display text-base", children: "C" }) }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ds_exports.ItemContent, { children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.ItemTitle, { className: "text-[var(--color-cream)]", children: "Cellar room" }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.ItemDescription, { children: "Seats 24, private tasting menu." })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.ItemActions, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "text-xs uppercase tracking-widest text-[var(--color-muted-gold)] tabular-nums", children: "IDR 15,000,000" }) })
      ] })
    ] })
  ] });
  return __toCommonJS(Item_exports);
})();
