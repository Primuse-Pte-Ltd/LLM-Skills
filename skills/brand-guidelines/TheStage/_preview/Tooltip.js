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

  // .design-sync/previews/Tooltip.tsx
  var Tooltip_exports = {};
  __export(Tooltip_exports, {
    IconAction: () => IconAction,
    TableStatus: () => TableStatus
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

  // .design-sync/previews/Tooltip.tsx
  var import_jsx_runtime = __toESM(require_react_shim());
  var Stage = ({ children }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    "div",
    {
      className: "font-body flex flex-col items-center justify-center gap-6 bg-[var(--color-dark-green)] p-8",
      style: { minHeight: 472 },
      children
    }
  );
  var TableStatus = () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Stage, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "text-center", children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "text-xs uppercase tracking-widest text-[var(--color-taupe)]", children: "Pool Deck · Full Moon Rooftop" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "font-display text-3xl text-[var(--color-cream)]", children: "Friday 3 April" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.TooltipProvider, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ds_exports.Tooltip, { open: true, children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.TooltipTrigger, { asChild: true, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        ds_exports.Button,
        {
          variant: "outline",
          className: "border-[var(--color-muted-gold)] bg-transparent text-[var(--color-cream)] hover:bg-white/5",
          children: "Cabana 03 · unavailable"
        }
      ) }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.TooltipContent, { side: "bottom", className: "text-[var(--color-charcoal)]", children: "Held by a promoter until 18:00 today" })
    ] }) })
  ] });
  var IconAction = () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Stage, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "text-center", children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "text-xs uppercase tracking-widest text-[var(--color-taupe)]", children: "Reservation TS-4821" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "font-display text-3xl text-[var(--color-cream)]", children: "Table 14 · Terrace" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.TooltipProvider, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ds_exports.Tooltip, { open: true, children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.TooltipTrigger, { asChild: true, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        ds_exports.Button,
        {
          size: "icon",
          className: "bg-[var(--color-muted-gold)] text-black hover:bg-[var(--color-gold-light)]",
          children: "?"
        }
      ) }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.TooltipContent, { side: "bottom", className: "text-[var(--color-charcoal)]", children: "Minimum spend is redeemable against bottles and food" })
    ] }) })
  ] });
  return __toCommonJS(Tooltip_exports);
})();
