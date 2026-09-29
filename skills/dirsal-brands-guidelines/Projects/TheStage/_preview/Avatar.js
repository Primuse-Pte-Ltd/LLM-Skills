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

  // .design-sync/previews/Avatar.tsx
  var Avatar_exports = {};
  __export(Avatar_exports, {
    GuestRow: () => GuestRow,
    Monograms: () => Monograms,
    Sizes: () => Sizes,
    WithImage: () => WithImage
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

  // .design-sync/previews/Avatar.tsx
  var import_jsx_runtime = __toESM(require_react_shim());
  var Dark = ({ children }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "bg-[var(--color-dark-green)] text-[var(--color-cream)] font-body p-8", children });
  var monogram = "bg-[var(--color-moss)] text-[var(--color-muted-gold)] font-display text-lg font-normal tracking-wide";
  var Monograms = () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Dark, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { className: "text-xs uppercase tracking-widest text-[var(--color-taupe)] mb-4", children: "Concierge team" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "flex flex-wrap items-center gap-4", children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.Avatar, { className: "border border-[var(--color-muted-gold)]", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.AvatarFallback, { className: monogram, children: "AK" }) }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.Avatar, { className: "border border-[var(--color-muted-gold)]", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.AvatarFallback, { className: monogram, children: "MW" }) }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.Avatar, { className: "border border-[var(--color-muted-gold)]", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.AvatarFallback, { className: monogram, children: "PA" }) }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.Avatar, { className: "border border-white/10", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.AvatarFallback, { className: "bg-[var(--color-forest)] text-[var(--color-taupe)] font-display text-lg font-normal", children: "+6" }) })
    ] })
  ] });
  var Sizes = () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Dark, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "flex flex-wrap items-center gap-4", children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.Avatar, { className: "h-8 w-8 border border-[var(--color-muted-gold)]", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.AvatarFallback, { className: "bg-[var(--color-moss)] text-[var(--color-muted-gold)] font-display text-xs font-normal", children: "AK" }) }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.Avatar, { className: "border border-[var(--color-muted-gold)]", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.AvatarFallback, { className: monogram, children: "AK" }) }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.Avatar, { className: "h-12 w-12 border border-[var(--color-muted-gold)]", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.AvatarFallback, { className: "bg-[var(--color-moss)] text-[var(--color-muted-gold)] font-display text-xl font-normal", children: "AK" }) }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        ds_exports.Avatar,
        {
          style: { width: 80, height: 80 },
          className: "border border-[var(--color-muted-gold)]",
          children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.AvatarFallback, { className: "bg-[var(--color-moss)] text-[var(--color-muted-gold)] font-display text-3xl font-normal", children: "AK" })
        }
      )
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { className: "text-xs uppercase tracking-widest text-[var(--color-taupe)] mt-4", children: "32 · 40 · 48 · 80" })
  ] });
  var GuestRow = () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dark, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "border border-white/10 bg-white/5 rounded-md p-6 max-w-md", children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "flex items-center gap-4", children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.Avatar, { className: "h-12 w-12 border border-[var(--color-muted-gold)]", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.AvatarFallback, { className: "bg-[var(--color-moss)] text-[var(--color-muted-gold)] font-display text-xl font-normal", children: "NP" }) }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "flex-1 min-w-0", children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { className: "font-display text-2xl font-normal tracking-wide", children: "Nadia Prameswari" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { className: "text-xs uppercase tracking-widest text-[var(--color-taupe)] mt-1", children: "Table C5 · party of 3 · 21:30" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.Badge, { className: "bg-[var(--color-muted-gold)] text-black hover:bg-[var(--color-muted-gold)]", children: "VIP" })
  ] }) }) });
  var WithImage = () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dark, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "flex flex-wrap items-center gap-4", children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ds_exports.Avatar, { className: "h-12 w-12 border border-[var(--color-muted-gold)]", children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        ds_exports.AvatarImage,
        {
          src: "data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2296%22%20height%3D%2296%22%3E%3Crect%20width%3D%2296%22%20height%3D%2296%22%20fill%3D%22%23243d2f%22%2F%3E%3Ccircle%20cx%3D%2248%22%20cy%3D%2238%22%20r%3D%2216%22%20fill%3D%22%23c9a962%22%2F%3E%3Cpath%20d%3D%22M16%2096c0-18%2014-30%2032-30s32%2012%2032%2030z%22%20fill%3D%22%23c9a962%22%2F%3E%3C%2Fsvg%3E",
          alt: "Wayan Sudarsana"
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.AvatarFallback, { className: monogram, children: "WS" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { className: "font-display text-2xl font-normal tracking-wide", children: "Wayan Sudarsana" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { className: "text-xs uppercase tracking-widest text-[var(--color-taupe)] mt-1", children: "Uluwatu desk · host" })
    ] })
  ] }) });
  return __toCommonJS(Avatar_exports);
})();
