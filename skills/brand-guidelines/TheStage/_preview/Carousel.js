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

  // .design-sync/previews/Carousel.tsx
  var Carousel_exports = {};
  __export(Carousel_exports, {
    EventLineup: () => EventLineup,
    HeroSlides: () => HeroSlides,
    Vertical: () => Vertical
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

  // .design-sync/previews/Carousel.tsx
  var import_jsx_runtime = __toESM(require_react_shim());
  var Dark = ({ children }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "bg-[var(--color-dark-green)] text-[var(--color-cream)] font-body p-8", children });
  var navClass = "border-[var(--color-muted-gold)] bg-transparent text-[var(--color-muted-gold)] hover:bg-white/5 hover:text-[var(--color-gold-light)]";
  var lineup = [
    ["14 Mar", "Midnight Sessions", "Deep house on the rooftop", "IDR 450,000"],
    ["21 Mar", "Gamelan Nights", "Ayu Laksmi & ensemble", "IDR 650,000"],
    ["28 Mar", "Cellar Tasting", "Six growers, six pours", "IDR 1,250,000"],
    ["04 Apr", "Nyepi Eve Supper", "Silent service, candlelight", "IDR 980,000"],
    ["11 Apr", "Sunset Set", "Golden hour, no cover", "Free entry"]
  ];
  var EventLineup = () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Dark, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { className: "text-xs uppercase tracking-widest text-[var(--color-taupe)]", children: "What’s on" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { className: "mt-2 font-display text-3xl font-normal tracking-wide", children: "Similar Events" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "mt-6", style: { paddingLeft: 56, paddingRight: 56, width: 660 }, children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ds_exports.Carousel, { opts: { align: "start" }, children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.CarouselContent, { children: lineup.map(([date, title, blurb, price]) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.CarouselItem, { style: { flexBasis: "33.3333%" }, children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "h-full rounded-lg border border-[var(--color-muted-gold)] bg-white/5 p-5", children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { className: "text-[11px] uppercase tracking-widest text-[var(--color-muted-gold)]", children: date }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { className: "mt-2 font-display text-2xl font-normal leading-none tracking-wide", children: title }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { className: "mt-3 text-sm text-[var(--color-champagne)]", children: blurb }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { className: "mt-4 text-[11px] uppercase tracking-widest text-[var(--color-taupe)]", children: price })
      ] }) }, title)) }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.CarouselPrevious, { className: navClass }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.CarouselNext, { className: navClass })
    ] }) })
  ] });
  var HeroSlides = () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dark, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { style: { paddingLeft: 56, paddingRight: 56, width: 660 }, children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ds_exports.Carousel, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.CarouselContent, { children: [
      ["Rooftop", "Midnight Sessions", "#122019", "#c9a962"],
      ["Garden Pavilion", "Gamelan Nights", "#1a2e23", "#8b7355"],
      ["The Cellar", "Cellar Tasting", "#060c09", "#243d2f"]
    ].map(([venue, title, from, to]) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.CarouselItem, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
      "div",
      {
        className: "flex flex-col justify-end rounded-lg p-6",
        style: {
          height: 220,
          backgroundImage: `linear-gradient(140deg, ${from} 0%, ${to} 100%)`
        },
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { className: "text-[11px] uppercase tracking-widest text-[var(--color-cream)]", children: venue }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { className: "mt-2 font-display text-4xl font-normal tracking-wide", children: title })
        ]
      }
    ) }, title)) }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.CarouselPrevious, { className: navClass }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.CarouselNext, { className: navClass })
  ] }) }) });
  var Vertical = () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Dark, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { className: "text-xs uppercase tracking-widest text-[var(--color-taupe)]", children: "Tonight’s running order" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "mt-6", style: { paddingTop: 56, paddingBottom: 56, width: 380 }, children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ds_exports.Carousel, { orientation: "vertical", opts: { align: "start" }, children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.CarouselContent, { style: { height: 210 }, children: [
        ["21:00", "Doors & welcome pour"],
        ["22:00", "Ayu Laksmi, opening set"],
        ["23:15", "Midnight Sessions"],
        ["01:00", "Last service"]
      ].map(([time, what]) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.CarouselItem, { style: { flexBasis: "50%" }, children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "flex h-full items-center gap-4 rounded-lg border border-white/10 bg-white/5 px-5", children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "font-display text-2xl font-normal tabular-nums text-[var(--color-muted-gold)]", children: time }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "text-sm text-[var(--color-champagne)]", children: what })
      ] }) }, time)) }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.CarouselPrevious, { className: navClass }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.CarouselNext, { className: navClass })
    ] }) })
  ] });
  return __toCommonJS(Carousel_exports);
})();
