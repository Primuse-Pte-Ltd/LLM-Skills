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

  // .design-sync/previews/Popover.tsx
  var Popover_exports = {};
  __export(Popover_exports, {
    GuestPicker: () => GuestPicker,
    TableHotspot: () => TableHotspot
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

  // .design-sync/previews/Popover.tsx
  var import_jsx_runtime = __toESM(require_react_shim());
  var Stage = ({ children }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    "div",
    {
      className: "font-body flex flex-col items-center gap-6 bg-[var(--color-dark-green)] p-8",
      style: { minHeight: 472 },
      children
    }
  );
  var GuestPicker = () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Stage, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "text-center", children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "text-xs uppercase tracking-widest text-[var(--color-taupe)]", children: "Midnight Sessions" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "font-display text-3xl text-[var(--color-cream)]", children: "Saturday 22 March" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ds_exports.Popover, { open: true, children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.PopoverTrigger, { asChild: true, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        ds_exports.Button,
        {
          variant: "outline",
          className: "border-[var(--color-muted-gold)] bg-transparent text-[var(--color-cream)] hover:bg-white/5",
          children: "4 guests · arriving 21:00"
        }
      ) }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
        ds_exports.PopoverContent,
        {
          onOpenAutoFocus: (e) => e.preventDefault(),
          className: "text-[var(--color-charcoal)]",
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "text-sm font-medium", children: "Party details" }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { className: "mt-1 text-xs text-muted-foreground", children: "Tables on the Terrace seat up to six. Larger parties are split across adjoining tables." }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.Separator, { className: "mt-3 mb-3" }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "flex items-center justify-between text-sm", children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Guests" }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.Button, { size: "sm", variant: "outline", children: "−" }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "w-4 text-center tabular-nums", children: "4" }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.Button, { size: "sm", variant: "outline", children: "+" })
              ] })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "mt-3 flex items-center justify-between text-sm", children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Arrival" }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "tabular-nums", children: "21:00" })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.Button, { className: "mt-4 w-full bg-[var(--color-muted-gold)] text-black hover:bg-[var(--color-gold-light)]", children: "Find tables" })
          ]
        }
      )
    ] })
  ] });
  var TableHotspot = () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Stage, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "text-center", children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "text-xs uppercase tracking-widest text-[var(--color-taupe)]", children: "Terrace · level two" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "font-display text-3xl text-[var(--color-cream)]", children: "Choose your table" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ds_exports.Popover, { open: true, children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.PopoverTrigger, { asChild: true, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.Button, { className: "bg-[var(--color-muted-gold)] text-black hover:bg-[var(--color-gold-light)]", children: "Table 14" }) }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
        ds_exports.PopoverContent,
        {
          onOpenAutoFocus: (e) => e.preventDefault(),
          className: "text-[var(--color-charcoal)]",
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "flex items-start justify-between gap-4", children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "font-display text-xl", children: "Table 14" }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "text-xs text-muted-foreground", children: "Terrace · seats 6 · stage-facing" })
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "text-[11px] uppercase tracking-widest text-[var(--color-bronze)]", children: "2 left" })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.Separator, { className: "mt-3 mb-3" }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "flex items-center justify-between text-sm", children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "text-muted-foreground", children: "Minimum spend" }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "tabular-nums", children: "IDR 3,600,000" })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "mt-2 flex items-center justify-between text-sm", children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "text-muted-foreground", children: "Deposit today" }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "tabular-nums", children: "IDR 1,800,000" })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.Button, { className: "mt-4 w-full bg-[var(--color-muted-gold)] text-black hover:bg-[var(--color-gold-light)]", children: "Hold for 15 minutes" })
          ]
        }
      )
    ] })
  ] });
  return __toCommonJS(Popover_exports);
})();
