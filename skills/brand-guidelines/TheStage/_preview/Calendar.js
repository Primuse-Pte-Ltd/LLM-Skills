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

  // .design-sync/previews/Calendar.tsx
  var Calendar_exports = {};
  __export(Calendar_exports, {
    DateRange: () => DateRange,
    Default: () => Default,
    VenueHire: () => VenueHire
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

  // .design-sync/previews/Calendar.tsx
  var import_jsx_runtime = __toESM(require_react_shim());
  var day = (d) => new Date(2026, 2, d);
  var OPEN_DAYS = [5, 6, 7, 12, 13, 14, 19, 20, 21, 26, 27, 28].map(day);
  var SOLD_OUT = [
    1,
    2,
    3,
    4,
    8,
    9,
    10,
    11,
    15,
    16,
    17,
    18,
    22,
    23,
    24,
    25,
    29,
    30,
    31
  ].map(day);
  var MARCH = day(1);
  var TODAY = day(5);
  var CHOSEN = day(14);
  var Dark = ({ children }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "bg-[var(--color-dark-green)] text-[var(--color-cream)] font-body p-8", children });
  var Light = ({ children }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "bg-[var(--color-cream)] text-[var(--color-charcoal)] font-body p-8", children });
  var VenueHire = () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dark, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "mx-auto max-w-md border border-[var(--color-muted-gold)] bg-[var(--color-deep-green)] px-5 py-6", children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      ds_exports.Calendar,
      {
        mode: "single",
        month: MARCH,
        today: TODAY,
        selected: CHOSEN,
        disabled: SOLD_OUT,
        modifiers: { available: OPEN_DAYS },
        modifiersClassNames: {
          available: "[&_button]:after:absolute [&_button]:after:bottom-1.5 [&_button]:after:left-1/2 [&_button]:after:-translate-x-1/2 [&_button]:after:h-1 [&_button]:after:w-1 [&_button]:after:rounded-full [&_button]:after:bg-[var(--color-muted-gold)] [&_button]:after:content-['']"
        },
        showOutsideDays: false,
        className: "mx-auto w-full bg-transparent p-0 text-[var(--color-cream)] [--cell-size:2.5rem]",
        classNames: {
          months: "relative flex w-full flex-col gap-5",
          month: "flex w-full flex-col gap-5",
          month_caption: "relative flex h-10 w-full items-center justify-center",
          caption_label: "text-lg font-light tracking-[0.08em] text-[var(--color-cream)]",
          nav: "absolute inset-x-0 top-0 flex w-full items-center justify-between",
          button_previous: "inline-flex h-10 w-10 items-center justify-center border border-[var(--color-muted-gold)] text-[var(--color-cream)] aria-disabled:opacity-30",
          button_next: "inline-flex h-10 w-10 items-center justify-center border border-[var(--color-muted-gold)] text-[var(--color-cream)] aria-disabled:opacity-30",
          weekdays: "flex w-full",
          weekday: "flex-1 select-none text-[0.65rem] font-normal uppercase tracking-[0.2em] text-[var(--color-muted-gold)]",
          week: "mt-1.5 flex w-full",
          day: "relative aspect-square h-full w-full p-0.5",
          today: "[&_button]:text-[var(--color-muted-gold)]",
          disabled: "opacity-50 [&_button]:line-through",
          selected: "[&_button]:after:hidden",
          day_button: "relative rounded-none border border-transparent font-light text-[var(--color-cream)] transition-colors duration-200 data-[selected-single=true]:border-[var(--color-muted-gold)] data-[selected-single=true]:bg-[var(--color-muted-gold)] data-[selected-single=true]:text-[var(--color-dark-green)] data-[selected-single=true]:font-medium focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-muted-gold)]"
        }
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", { className: "mt-6 flex flex-wrap items-center justify-center gap-5 text-[0.65rem] uppercase tracking-[0.18em] text-[var(--color-taupe)]", children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { className: "inline-flex items-center gap-2", children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-1.5 w-1.5 rounded-full bg-[var(--color-muted-gold)]" }),
        "Available"
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { className: "inline-flex items-center gap-2", children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-4 w-4 bg-[var(--color-muted-gold)]" }),
        "Selected"
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { className: "inline-flex items-center gap-2", children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "line-through", children: "12" }),
        "Fully booked"
      ] })
    ] })
  ] }) });
  var Default = () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Light, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "mx-auto w-fit rounded-md border bg-background", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    ds_exports.Calendar,
    {
      mode: "single",
      month: MARCH,
      today: TODAY,
      selected: CHOSEN,
      className: "bg-transparent"
    }
  ) }) });
  var DateRange = () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Light, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "mx-auto w-fit rounded-md border bg-background", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      ds_exports.Calendar,
      {
        mode: "range",
        month: MARCH,
        today: TODAY,
        numberOfMonths: 2,
        selected: { from: day(12), to: day(16) },
        disabled: [day(1), day(2), day(3)],
        className: "bg-transparent"
      }
    ) }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { className: "mt-3 text-center text-sm text-[var(--color-graphite)]", children: "12 – 16 March 2026 · five nights · IDR 185,000,000" })
  ] });
  return __toCommonJS(Calendar_exports);
})();
