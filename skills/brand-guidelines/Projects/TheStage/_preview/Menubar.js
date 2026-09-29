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

  // .design-sync/previews/Menubar.tsx
  var Menubar_exports = {};
  __export(Menubar_exports, {
    BackofficeBar: () => BackofficeBar,
    Default: () => Default,
    EventsMenuOpen: () => EventsMenuOpen
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

  // .design-sync/previews/Menubar.tsx
  var import_jsx_runtime = __toESM(require_react_shim());
  var brandTokens = {
    "--background": "150 33% 6%",
    // --color-dark-green  #0a140f
    "--foreground": "43 26% 95%",
    // --color-cream       #f5f3ee
    "--popover": "150 33% 4%",
    // --color-deep-green  #060c09
    "--popover-foreground": "43 26% 95%",
    // --color-cream
    "--accent": "147 28% 14%",
    // --color-sage        #1a2e23
    "--accent-foreground": "41 49% 59%",
    // --color-muted-gold  #c9a962
    "--border": "146 26% 19%",
    // --color-moss        #243d2f
    "--muted": "146 26% 19%",
    // --color-moss
    "--muted-foreground": "55 5% 58%"
    // --color-taupe       #9a998f
  };
  var Dark = ({
    children,
    minHeight = 0
  }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    "div",
    {
      style: { ...brandTokens, minHeight },
      className: "bg-[var(--color-dark-green)] text-[var(--color-cream)] font-body p-8",
      children
    }
  );
  var Light = ({ children }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    "div",
    {
      style: { minHeight: 400 },
      className: "bg-[var(--color-cream)] text-[var(--color-charcoal)] font-body p-8",
      children
    }
  );
  var contentClass = "w-72 shadow-xl";
  var itemClass = "cursor-pointer text-xs uppercase tracking-[0.15em]";
  var triggerClass = "text-xs uppercase tracking-[0.15em]";
  var BackofficeBar = () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dark, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ds_exports.Menubar, { className: "border-white/20", children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.MenubarMenu, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.MenubarTrigger, { className: triggerClass, children: "Venue" }) }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.MenubarMenu, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.MenubarTrigger, { className: triggerClass, children: "Events" }) }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.MenubarMenu, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.MenubarTrigger, { className: triggerClass, children: "Reservations" }) }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.MenubarMenu, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.MenubarTrigger, { className: triggerClass, children: "Team" }) })
  ] }) });
  var EventsMenuOpen = () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dark, { minHeight: 380, children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ds_exports.Menubar, { defaultValue: "events", className: "border-white/20", children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.MenubarMenu, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.MenubarTrigger, { className: triggerClass, children: "Venue" }) }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ds_exports.MenubarMenu, { value: "events", children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.MenubarTrigger, { className: triggerClass, children: "Events" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ds_exports.MenubarContent, { style: brandTokens, className: contentClass, children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ds_exports.MenubarItem, { className: itemClass, children: [
          "New event ",
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.MenubarShortcut, { children: "⌘N" })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ds_exports.MenubarItem, { className: itemClass, children: [
          "Duplicate tonight ",
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.MenubarShortcut, { children: "⌘D" })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ds_exports.MenubarSub, { children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.MenubarSubTrigger, { className: itemClass, children: "Export" }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ds_exports.MenubarSubContent, { style: brandTokens, className: contentClass, children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.MenubarItem, { className: itemClass, children: "Guest list (CSV)" }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.MenubarItem, { className: itemClass, children: "Table plan (PDF)" })
          ] })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.MenubarSeparator, {}),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.MenubarItem, { className: itemClass, children: "Publish to the site" }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.MenubarItem, { className: itemClass, disabled: true, children: "Archive season" })
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.MenubarMenu, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.MenubarTrigger, { className: triggerClass, children: "Reservations" }) }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.MenubarMenu, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.MenubarTrigger, { className: triggerClass, children: "Team" }) })
  ] }) });
  var Default = () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Light, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ds_exports.Menubar, { defaultValue: "view", children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.MenubarMenu, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.MenubarTrigger, { children: "Reservations" }) }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ds_exports.MenubarMenu, { value: "view", children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.MenubarTrigger, { children: "View" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ds_exports.MenubarContent, { className: "text-[var(--color-charcoal)]", children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.MenubarCheckboxItem, { checked: true, children: "Show cancelled" }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.MenubarCheckboxItem, { children: "Show walk-ins" }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.MenubarSeparator, {}),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.MenubarLabel, { children: "Group by" }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ds_exports.MenubarRadioGroup, { value: "floor", children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.MenubarRadioItem, { value: "floor", children: "Floor" }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.MenubarRadioItem, { value: "time", children: "Arrival time" }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.MenubarRadioItem, { value: "host", children: "Host" })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.MenubarSeparator, {}),
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ds_exports.MenubarItem, { children: [
          "Refresh ",
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.MenubarShortcut, { children: "⌘R" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.MenubarMenu, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.MenubarTrigger, { children: "Team" }) })
  ] }) });
  return __toCommonJS(Menubar_exports);
})();
