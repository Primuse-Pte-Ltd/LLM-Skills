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

  // .design-sync/previews/Button.tsx
  var Button_exports = {};
  __export(Button_exports, {
    OnDarkSurface: () => OnDarkSurface,
    Primary: () => Primary,
    Sizes: () => Sizes,
    States: () => States,
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

  // .design-sync/previews/Button.tsx
  var import_jsx_runtime = __toESM(require_react_shim());
  var Dark = ({ children }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "bg-[var(--color-dark-green)] text-[var(--color-cream)] font-body p-8 flex flex-wrap items-center gap-4 [&>*]:shrink-0", children });
  var Light = ({ children }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "bg-[var(--color-cream)] text-[var(--color-charcoal)] font-body p-8 flex flex-wrap items-center gap-4 [&>*]:shrink-0", children });
  var Primary = () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Dark, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.Button, { className: "bg-[var(--color-muted-gold)] text-black hover:bg-[var(--color-gold-light)]", children: "Book a table" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      ds_exports.Button,
      {
        size: "lg",
        className: "bg-[var(--color-muted-gold)] text-black hover:bg-[var(--color-gold-light)] uppercase tracking-widest text-xs",
        children: "Reserve now"
      }
    )
  ] });
  var OnDarkSurface = () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Dark, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      ds_exports.Button,
      {
        variant: "outline",
        className: "border-[var(--color-muted-gold)] bg-transparent text-[var(--color-cream)] hover:bg-white/5",
        children: "Continue with Google"
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.Button, { variant: "ghost", className: "text-[var(--color-cream)] hover:bg-white/5", children: "View the menu" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      ds_exports.Button,
      {
        variant: "link",
        className: "text-[var(--color-muted-gold)]",
        children: "Private events"
      }
    )
  ] });
  var Variants = () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Light, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.Button, { children: "Default" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.Button, { variant: "secondary", children: "Secondary" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.Button, { variant: "destructive", children: "Cancel booking" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.Button, { variant: "outline", children: "Outline" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.Button, { variant: "ghost", children: "Ghost" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.Button, { variant: "link", children: "Link" })
  ] });
  var Sizes = () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Dark, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.Button, { size: "sm", className: "bg-[var(--color-muted-gold)] text-black", children: "Small" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.Button, { size: "default", className: "bg-[var(--color-muted-gold)] text-black", children: "Default" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.Button, { size: "lg", className: "bg-[var(--color-muted-gold)] text-black", children: "Large" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.Button, { size: "icon", className: "bg-[var(--color-muted-gold)] text-black", children: "★" })
  ] });
  var States = () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Dark, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.Button, { disabled: true, className: "bg-[var(--color-muted-gold)] text-black", children: "Sold out" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.Button, { pending: true, className: "bg-[var(--color-muted-gold)] text-black", children: "Confirming" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      ds_exports.Button,
      {
        variant: "outline",
        disabled: true,
        className: "border-[var(--color-muted-gold)] bg-transparent text-[var(--color-cream)]",
        children: "Unavailable"
      }
    )
  ] });
  return __toCommonJS(Button_exports);
})();
