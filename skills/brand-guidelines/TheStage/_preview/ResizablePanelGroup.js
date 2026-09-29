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

  // .design-sync/previews/ResizablePanelGroup.tsx
  var ResizablePanelGroup_exports = {};
  __export(ResizablePanelGroup_exports, {
    FloorPlanSplit: () => FloorPlanSplit,
    ThreePanels: () => ThreePanels,
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

  // .design-sync/previews/ResizablePanelGroup.tsx
  var import_jsx_runtime = __toESM(require_react_shim());
  var Dark = ({ children }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "bg-[var(--color-dark-green)] text-[var(--color-cream)] font-body p-8", children });
  var handleClass = "bg-[var(--color-muted-gold)] text-[var(--color-charcoal)]";
  var handleH = { width: 2 };
  var handleV = { height: 2 };
  var shell = "rounded-lg border border-white/10 bg-white/5 overflow-hidden";
  var Label = ({ children }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { className: "text-[11px] uppercase tracking-widest text-[var(--color-taupe)]", children });
  var FloorPlanSplit = () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Dark, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { className: "text-xs uppercase tracking-widest text-[var(--color-taupe)]", children: "Floor plan · Saturday 14 March" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: `mt-4 ${shell}`, style: { height: 260, width: 620 }, children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ds_exports.ResizablePanelGroup, { direction: "horizontal", children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.ResizablePanel, { defaultSize: 34, minSize: 20, children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "h-full p-5", children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Rooms" }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "mt-3 space-y-2 text-sm", children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { className: "text-[var(--color-muted-gold)]", children: "Rooftop" }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { className: "text-[var(--color-champagne)]", children: "Garden Pavilion" }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { className: "text-[var(--color-champagne)]", children: "The Cellar" }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { className: "text-[var(--color-champagne)]", children: "Private Hire" })
        ] })
      ] }) }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.ResizableHandle, { withHandle: true, className: handleClass, style: handleH }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.ResizablePanel, { defaultSize: 66, children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "h-full p-5", children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Rooftop" }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { className: "mt-2 font-display text-3xl font-normal tracking-wide", children: "18 tables · 96 covers" }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.Separator, { className: "mt-4 mb-4 bg-white/10" }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { className: "text-sm leading-relaxed text-[var(--color-champagne)]", children: "Open air, bar service from 18:00. Twelve tables are held for reservations until 21:00; the remaining six are released to walk-ins." })
      ] }) })
    ] }) })
  ] });
  var Vertical = () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dark, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: shell, style: { height: 280, width: 460 }, children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ds_exports.ResizablePanelGroup, { direction: "vertical", children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.ResizablePanel, { defaultSize: 45, minSize: 20, children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "h-full p-5", children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Tonight" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { className: "mt-2 font-display text-4xl font-normal leading-none tabular-nums", children: "142" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { className: "mt-2 text-sm text-[var(--color-champagne)]", children: "covers across three rooms" })
    ] }) }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.ResizableHandle, { withHandle: true, className: handleClass, style: handleV }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.ResizablePanel, { defaultSize: 55, children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "h-full p-5", children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Notes for the pass" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { className: "mt-3 text-sm leading-relaxed text-[var(--color-champagne)]", children: "Table 12 is an anniversary — send the petit fours with the candle. Two shellfish allergies on the Garden side, both flagged in the book." })
    ] }) })
  ] }) }) });
  var ThreePanels = () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dark, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: shell, style: { height: 220, width: 660 }, children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ds_exports.ResizablePanelGroup, { direction: "horizontal", children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.ResizablePanel, { defaultSize: 30, children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "h-full p-5", children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Arrivals" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { className: "mt-2 font-display text-4xl font-normal leading-none tabular-nums", children: "38" })
    ] }) }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.ResizableHandle, { className: handleClass, style: handleH }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.ResizablePanel, { defaultSize: 40, children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "h-full p-5", children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "On the floor" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { className: "mt-2 font-display text-4xl font-normal leading-none tabular-nums", children: "104" })
    ] }) }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.ResizableHandle, { className: handleClass, style: handleH }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.ResizablePanel, { defaultSize: 30, children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "h-full p-5", children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Revenue" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { className: "mt-2 font-display text-3xl font-normal leading-none tabular-nums", children: "IDR 64.2M" })
    ] }) })
  ] }) }) });
  return __toCommonJS(ResizablePanelGroup_exports);
})();
