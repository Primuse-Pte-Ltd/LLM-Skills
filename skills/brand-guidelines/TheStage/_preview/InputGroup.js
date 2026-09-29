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

  // .design-sync/previews/InputGroup.tsx
  var InputGroup_exports = {};
  __export(InputGroup_exports, {
    MessageWithToolbar: () => MessageWithToolbar,
    PriceField: () => PriceField,
    SearchGuests: () => SearchGuests
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

  // .design-sync/previews/InputGroup.tsx
  var import_jsx_runtime = __toESM(require_react_shim());
  var Dark = ({ children }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    "div",
    {
      className: "on-brand-dark bg-[var(--color-dark-green)] text-[var(--color-cream)] font-body p-8",
      children
    }
  );
  var Light = ({ children }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "bg-[var(--color-cream)] text-[var(--color-charcoal)] font-body p-8", children });
  var SearchGuests = () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dark, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "max-w-md space-y-3", children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      ds_exports.Label,
      {
        htmlFor: "ig-search",
        className: "text-xs uppercase tracking-wider text-[var(--color-taupe)]",
        children: "Tonight’s guest list"
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ds_exports.InputGroup, { className: "border-white/10", children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.InputGroupAddon, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.InputGroupText, { className: "text-[var(--color-muted-gold)]", children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
        "svg",
        {
          width: "16",
          height: "16",
          viewBox: "0 0 24 24",
          fill: "none",
          stroke: "currentColor",
          strokeWidth: "2",
          strokeLinecap: "round",
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", { cx: "11", cy: "11", r: "7" }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", { x1: "16.5", y1: "16.5", x2: "21", y2: "21" })
          ]
        }
      ) }) }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        ds_exports.InputGroupInput,
        {
          id: "ig-search",
          defaultValue: "Pramesti",
          className: "text-[var(--color-cream)]"
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.InputGroupAddon, { align: "inline-end", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.InputGroupButton, { className: "text-[var(--color-taupe)]", children: "Clear" }) })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { className: "text-xs text-[var(--color-taupe)]", children: "3 of 142 guests match" })
  ] }) });
  var PriceField = () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dark, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "max-w-md space-y-3", children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      ds_exports.Label,
      {
        htmlFor: "ig-price",
        className: "text-xs uppercase tracking-wider text-[var(--color-taupe)]",
        children: "Minimum spend"
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ds_exports.InputGroup, { className: "border-[var(--color-muted-gold)]", children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.InputGroupAddon, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.InputGroupText, { className: "text-[var(--color-muted-gold)]", children: "IDR" }) }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        ds_exports.InputGroupInput,
        {
          id: "ig-price",
          defaultValue: "1,500,000",
          className: "text-[var(--color-cream)]"
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.InputGroupAddon, { align: "inline-end", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.InputGroupText, { className: "text-[var(--color-taupe)]", children: "per table" }) })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { className: "text-xs text-[var(--color-taupe)]", children: "Applied to rooftop bookings on Friday and Saturday." })
  ] }) });
  var MessageWithToolbar = () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Light, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "max-w-md space-y-3", children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.Label, { htmlFor: "ig-msg", className: "text-sm font-medium", children: "Note for the events team" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ds_exports.InputGroup, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        ds_exports.InputGroupTextarea,
        {
          id: "ig-msg",
          rows: 4,
          defaultValue: "Engagement dinner for 40 on the rooftop, Saturday 18 April. Gamelan trio for the first hour."
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ds_exports.InputGroupAddon, { align: "block-end", className: "border-t", children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.InputGroupText, { children: "92 / 500" }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.InputGroupButton, { size: "sm", variant: "outline", className: "ml-auto", children: "Attach menu" }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.InputGroupButton, { size: "sm", variant: "default", children: "Send" })
      ] })
    ] })
  ] }) });
  return __toCommonJS(InputGroup_exports);
})();
