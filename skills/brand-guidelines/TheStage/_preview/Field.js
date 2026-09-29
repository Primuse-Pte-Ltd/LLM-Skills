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

  // .design-sync/previews/Field.tsx
  var Field_exports = {};
  __export(Field_exports, {
    Orientations: () => Orientations,
    Preferences: () => Preferences,
    ReservationDetails: () => ReservationDetails
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

  // .design-sync/previews/Field.tsx
  var import_jsx_runtime = __toESM(require_react_shim());
  var Dark = ({ children }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "bg-[var(--color-dark-green)] text-[var(--color-cream)] font-body p-8", children });
  var Light = ({ children }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "bg-[var(--color-cream)] text-[var(--color-charcoal)] font-body p-8", children });
  var labelDark = "text-xs uppercase tracking-wider text-[var(--color-champagne)]";
  var inputDark = "bg-[var(--color-deep-green)] border-white/20 text-[var(--color-cream)] placeholder:text-white/60";
  var ReservationDetails = () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dark, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ds_exports.FieldSet, { className: "w-[300px]", children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.FieldLegend, { className: "font-display text-[var(--color-cream)]", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "text-2xl font-normal tracking-wide", children: "Reservation details" }) }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.FieldDescription, { className: "text-[var(--color-taupe)]", children: "The name on the door list and how many of you we should seat." }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ds_exports.FieldGroup, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ds_exports.Field, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.FieldLabel, { htmlFor: "rd-name", className: labelDark, children: "Name on the booking" }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.Input, { id: "rd-name", defaultValue: "Amelia Hart", className: inputDark })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ds_exports.Field, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.FieldLabel, { htmlFor: "rd-guests", className: labelDark, children: "Party size" }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.Input, { id: "rd-guests", defaultValue: "18", className: inputDark }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.FieldError, { className: "text-rose-300", children: "The terrace seats 12. Ask us about a full venue hire." })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ds_exports.Field, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.FieldLabel, { htmlFor: "rd-notes", className: labelDark, children: "Notes for the host" }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
          ds_exports.Textarea,
          {
            id: "rd-notes",
            rows: 3,
            defaultValue: "Seated dinner, then a DJ set on the terrace.",
            className: inputDark
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.FieldDescription, { className: "text-[var(--color-taupe)]", children: "Allergies, celebrations, arrival time." })
      ] })
    ] })
  ] }) });
  var Preferences = () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Light, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ds_exports.FieldSet, { className: "w-[300px]", children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.FieldLegend, { children: "Add to your evening" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ds_exports.FieldGroup, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ds_exports.Field, { orientation: "horizontal", children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ds_exports.FieldContent, { children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.FieldTitle, { children: "Dedicated host" }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.FieldDescription, { children: "One host for your table all night. IDR 350,000." })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.Switch, { defaultChecked: true })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ds_exports.Field, { orientation: "horizontal", children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ds_exports.FieldContent, { children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.FieldTitle, { children: "Welcome bottle" }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.FieldDescription, { children: "Ruinart Blanc de Blancs on arrival. IDR 2,900,000." })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.Switch, {})
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ds_exports.Field, { orientation: "horizontal", children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.Checkbox, { id: "pf-news", defaultChecked: true }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ds_exports.FieldContent, { children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.FieldTitle, { children: "Event announcements" }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.FieldDescription, { children: "Tell me when tickets open for the rooftop sessions." })
        ] })
      ] })
    ] })
  ] }) });
  var Orientations = () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Light, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ds_exports.FieldGroup, { className: "w-[300px]", children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ds_exports.Field, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.FieldLabel, { htmlFor: "or-vertical", children: "Vertical — label above" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.Input, { id: "or-vertical", defaultValue: "Table 12" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.FieldDescription, { children: "The default for text inputs." })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ds_exports.Field, { orientation: "horizontal", children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.FieldLabel, { htmlFor: "or-horizontal", children: "Horizontal — label beside" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.Switch, { id: "or-horizontal", defaultChecked: true })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ds_exports.Field, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.FieldLabel, { htmlFor: "or-invalid", children: "Promo code" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.Input, { id: "or-invalid", defaultValue: "SUNSET24", "aria-invalid": true }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        ds_exports.FieldError,
        {
          errors: [
            { message: "This code expired on 31 December." },
            { message: "Codes cannot be combined with table minimums." }
          ]
        }
      )
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.Button, { size: "sm", className: "w-fit", children: "Apply" })
  ] }) });
  return __toCommonJS(Field_exports);
})();
