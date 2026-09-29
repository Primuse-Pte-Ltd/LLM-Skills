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

  // .design-sync/previews/Pagination.tsx
  var Pagination_exports = {};
  __export(Pagination_exports, {
    Default: () => Default,
    EventsPager: () => EventsPager,
    PrevNextOnly: () => PrevNextOnly
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

  // .design-sync/previews/Pagination.tsx
  var import_jsx_runtime = __toESM(require_react_shim());
  var Dark = ({ children }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "bg-[var(--color-dark-green)] text-[var(--color-cream)] font-body p-8", children });
  var Light = ({ children }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "bg-[var(--color-cream)] text-[var(--color-charcoal)] font-body p-8", children });
  var link = "text-[var(--color-cream)] hover:bg-white/10 hover:text-[var(--color-muted-gold)]";
  var active = "border border-[var(--color-muted-gold)] bg-white/5 text-[var(--color-muted-gold)] hover:bg-white/10 hover:text-[var(--color-muted-gold)]";
  var EventsPager = () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dark, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.Pagination, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ds_exports.PaginationContent, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.PaginationItem, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.PaginationPrevious, { href: "/events?page=2", className: link }) }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.PaginationItem, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.PaginationLink, { href: "/events?page=1", className: link, children: "1" }) }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.PaginationItem, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.PaginationLink, { href: "/events?page=2", className: link, children: "2" }) }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.PaginationItem, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.PaginationLink, { href: "/events?page=3", isActive: true, className: active, children: "3" }) }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.PaginationItem, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.PaginationLink, { href: "/events?page=4", className: link, children: "4" }) }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.PaginationItem, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.PaginationEllipsis, { className: "text-[var(--color-bronze)]" }) }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.PaginationItem, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.PaginationLink, { href: "/events?page=12", className: link, children: "12" }) }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.PaginationItem, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.PaginationNext, { href: "/events?page=4", className: link }) })
  ] }) }) });
  var PrevNextOnly = () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dark, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "flex items-center justify-between gap-6", children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "text-xs uppercase tracking-widest text-[var(--color-taupe)]", children: "Showing 21–40 of 142 guests" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.Pagination, { className: "w-auto justify-end", children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ds_exports.PaginationContent, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.PaginationItem, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        ds_exports.PaginationPrevious,
        {
          href: "/guest-list?page=1",
          className: "border border-white/20 text-[var(--color-cream)] hover:bg-white/10 hover:text-[var(--color-muted-gold)]"
        }
      ) }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.PaginationItem, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        ds_exports.PaginationNext,
        {
          href: "/guest-list?page=3",
          className: "border border-[var(--color-muted-gold)] text-[var(--color-muted-gold)] hover:bg-white/10 hover:text-[var(--color-muted-gold)]"
        }
      ) })
    ] }) })
  ] }) });
  var Default = () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Light, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.Pagination, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ds_exports.PaginationContent, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.PaginationItem, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.PaginationPrevious, { href: "/reservations?page=1" }) }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.PaginationItem, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.PaginationLink, { href: "/reservations?page=1", children: "1" }) }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.PaginationItem, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.PaginationLink, { href: "/reservations?page=2", isActive: true, children: "2" }) }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.PaginationItem, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.PaginationLink, { href: "/reservations?page=3", children: "3" }) }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.PaginationItem, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.PaginationEllipsis, {}) }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.PaginationItem, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.PaginationNext, { href: "/reservations?page=3" }) })
  ] }) }) });
  return __toCommonJS(Pagination_exports);
})();
