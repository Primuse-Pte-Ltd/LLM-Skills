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
      function jsxs(t, p, k) {
        return R.createElement.apply(R, [t, np(p, k)].concat(p.children));
      }
      module.exports = R;
      module.exports.jsx = jsx2;
      module.exports.jsxs = jsxs;
      module.exports.jsxDEV = function(t, p, k, s) {
        return (s ? jsxs : jsx2)(t, p, k);
      };
      module.exports.Fragment = R.Fragment;
    }
  });

  // .design-sync/previews/VenueMapSvgContent.tsx
  var VenueMapSvgContent_exports = {};
  __export(VenueMapSvgContent_exports, {
    AllAvailable: () => AllAvailable,
    SoldOut: () => SoldOut,
    TableSelected: () => TableSelected
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

  // .design-sync/previews/VenueMapSvgContent.tsx
  var import_jsx_runtime = __toESM(require_react_shim());
  var table = (id, x, y) => `
  <g id="${id}">
    <rect x="${x}" y="${y}" width="56" height="36" rx="6" fill="#1a2e23" stroke="#c9a962" stroke-width="1.5"/>
    <text x="${x + 28}" y="${y + 23}" text-anchor="middle" font-family="Montserrat, sans-serif"
          font-size="13" font-weight="600" fill="#c9a962">${id}</text>
  </g>`;
  var FLOORPLAN = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 520 300">
  <rect width="520" height="300" fill="#0a140f"/>
  <rect x="196" y="18" width="128" height="40" rx="4" fill="#243d2f"/>
  <text x="260" y="44" text-anchor="middle" font-family="Cormorant Garamond, serif"
        font-size="20" fill="#f5f3ee" letter-spacing="3">STAGE</text>
  <rect x="26" y="248" width="468" height="30" rx="4" fill="#122019"/>
  <text x="260" y="268" text-anchor="middle" font-family="Montserrat, sans-serif"
        font-size="11" fill="#9a998f" letter-spacing="2">BAR</text>
  <g id="LABELS">
    ${table("L1", 40, 90)}${table("L2", 40, 150)}${table("L3", 40, 200)}
    ${table("C1", 150, 110)}${table("C2", 232, 110)}${table("C3", 314, 110)}
    ${table("R1", 424, 90)}${table("R2", 424, 150)}${table("R3", 424, 200)}
  </g>
</svg>`;
  var LABELS = ["L1", "L2", "L3", "C1", "C2", "C3", "R1", "R2", "R3"];
  var Floor = ({ children }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "bg-[var(--color-deep-green)] font-body p-8", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "mx-auto max-w-[560px] rounded-lg border border-white/10 bg-[var(--color-dark-green)] p-4", children }) });
  var AllAvailable = () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Floor, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    ds_exports.VenueMapSvgContent,
    {
      className: "venue-map-interactive",
      svgMarkup: FLOORPLAN,
      labels: LABELS,
      onSelectLabel: () => {
      }
    }
  ) });
  var TableSelected = () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Floor, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    ds_exports.VenueMapSvgContent,
    {
      className: "venue-map-interactive",
      svgMarkup: FLOORPLAN,
      labels: LABELS,
      activeLabel: "C2",
      onSelectLabel: () => {
      }
    }
  ) });
  var SoldOut = () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Floor, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    ds_exports.VenueMapSvgContent,
    {
      className: "venue-map-interactive",
      svgMarkup: FLOORPLAN,
      labels: LABELS,
      activeLabel: "L2",
      soldOutLabels: ["C1", "C3", "R1"],
      onSelectLabel: () => {
      }
    }
  ) });
  return __toCommonJS(VenueMapSvgContent_exports);
})();
