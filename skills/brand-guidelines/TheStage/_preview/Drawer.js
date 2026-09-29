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

  // .design-sync/previews/Drawer.tsx
  var Drawer_exports = {};
  __export(Drawer_exports, {
    PaymentConfirmed: () => PaymentConfirmed,
    TableDetails: () => TableDetails
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

  // .design-sync/previews/Drawer.tsx
  var import_jsx_runtime = __toESM(require_react_shim());
  var TableDetails = () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.Drawer, { open: true, children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ds_exports.DrawerContent, { className: "text-[var(--color-charcoal)]", children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ds_exports.DrawerHeader, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.DrawerTitle, { className: "font-display text-2xl font-normal tracking-wide", children: "Table 14 — Terrace" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.DrawerDescription, { children: "Seats six, facing the stage. Minimum spend IDR 3,600,000, redeemable against bottles and food." })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "px-4 text-sm", children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "flex items-center justify-between py-3 border-t", children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "text-muted-foreground", children: "Event" }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Midnight Sessions · Sat 22 Mar" })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "flex items-center justify-between py-3 border-t", children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "text-muted-foreground", children: "Arrival" }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "from 21:00, held until 22:30" })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "flex items-center justify-between py-3 border-t", children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "text-muted-foreground", children: "Deposit today" }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "tabular-nums", children: "IDR 1,800,000" })
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ds_exports.DrawerFooter, { className: "gap-2", children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.Button, { className: "bg-[var(--color-muted-gold)] text-black hover:bg-[var(--color-gold-light)]", children: "Hold this table" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.Button, { variant: "outline", children: "Back to the map" })
    ] })
  ] }) });
  var PaymentConfirmed = () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.Drawer, { open: true, children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ds_exports.DrawerContent, { className: "text-[var(--color-charcoal)]", children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ds_exports.DrawerHeader, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.DrawerTitle, { className: "font-display text-2xl font-normal tracking-wide", children: "Payment received" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.DrawerDescription, { children: "IDR 6,000,000 paid. Reservation TS-4821 is confirmed and your QR codes are on their way to kadek.wirawan@gmail.com." })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ds_exports.DrawerFooter, { className: "gap-2", children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.Button, { className: "bg-[var(--color-muted-gold)] text-black hover:bg-[var(--color-gold-light)]", children: "View my tickets" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.Button, { variant: "outline", children: "Add to calendar" })
    ] })
  ] }) });
  return __toCommonJS(Drawer_exports);
})();
