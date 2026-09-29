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

  // .design-sync/previews/Table.tsx
  var Table_exports = {};
  __export(Table_exports, {
    Default: () => Default,
    GuestList: () => GuestList,
    Reservations: () => Reservations
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

  // .design-sync/previews/Table.tsx
  var import_jsx_runtime = __toESM(require_react_shim());
  var Dark = ({ children }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "on-brand-dark bg-[var(--color-dark-green)] text-[var(--color-cream)] font-body p-8", children });
  var headClass = "text-xs uppercase tracking-widest text-[var(--color-taupe)] font-normal";
  var Reservations = () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Dark, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { className: "text-xs uppercase tracking-widest text-[var(--color-taupe)]", children: "Saturday 14 March" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { className: "font-display text-3xl font-normal tracking-wide mt-1 mb-6", children: "Floor sheet" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ds_exports.Table, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.TableCaption, { className: "text-[var(--color-taupe)]", children: "Six of nine tables seated. Kitchen closes at 23:30." }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.TableHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ds_exports.TableRow, { className: "hover:bg-[var(--color-moss)]", children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.TableHead, { className: headClass, children: "Table" }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.TableHead, { className: headClass, children: "Guest" }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.TableHead, { className: headClass, children: "Arrival" }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.TableHead, { className: headClass, children: "Party" }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.TableHead, { className: headClass, children: "Status" }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.TableHead, { className: "text-xs uppercase tracking-widest text-[var(--color-taupe)] font-normal text-right", children: "Minimum" })
      ] }) }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ds_exports.TableBody, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ds_exports.TableRow, { children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.TableCell, { className: "font-display text-lg text-[var(--color-muted-gold)]", children: "R1" }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.TableCell, { children: "Ayu Kusuma" }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.TableCell, { className: "tabular-nums", children: "19:30" }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.TableCell, { className: "tabular-nums", children: "4" }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.TableCell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.Badge, { className: "bg-[var(--color-muted-gold)] text-black hover:bg-[var(--color-muted-gold)]", children: "Seated" }) }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.TableCell, { className: "text-right tabular-nums", children: "IDR 3,500,000" })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ds_exports.TableRow, { "data-state": "selected", className: "data-[state=selected]:bg-[var(--color-moss)]", children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.TableCell, { className: "font-display text-lg text-[var(--color-muted-gold)]", children: "C2" }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.TableCell, { children: "Made Wirawan" }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.TableCell, { className: "tabular-nums", children: "20:00" }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.TableCell, { className: "tabular-nums", children: "2" }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.TableCell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.Badge, { className: "bg-[var(--color-muted-gold)] text-black hover:bg-[var(--color-muted-gold)]", children: "Seated" }) }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.TableCell, { className: "text-right tabular-nums", children: "IDR 1,800,000" })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ds_exports.TableRow, { children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.TableCell, { className: "font-display text-lg text-[var(--color-muted-gold)]", children: "L3" }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.TableCell, { children: "Sasha Lindqvist" }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.TableCell, { className: "tabular-nums", children: "20:30" }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.TableCell, { className: "tabular-nums", children: "6" }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.TableCell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
            ds_exports.Badge,
            {
              variant: "outline",
              className: "border-[var(--color-muted-gold)] text-[var(--color-muted-gold)]",
              children: "Confirmed"
            }
          ) }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.TableCell, { className: "text-right tabular-nums", children: "IDR 6,000,000" })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ds_exports.TableRow, { children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.TableCell, { className: "font-display text-lg text-[var(--color-muted-gold)]", children: "R4" }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.TableCell, { children: "Ketut Suardana" }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.TableCell, { className: "tabular-nums", children: "21:00" }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.TableCell, { className: "tabular-nums", children: "8" }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.TableCell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
            ds_exports.Badge,
            {
              variant: "outline",
              className: "border-[var(--color-taupe)] text-[var(--color-taupe)]",
              children: "Waitlist"
            }
          ) }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.TableCell, { className: "text-right tabular-nums", children: "IDR 9,200,000" })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ds_exports.TableRow, { children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.TableCell, { className: "font-display text-lg text-[var(--color-muted-gold)]", children: "C5" }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.TableCell, { children: "Nadia Prameswari" }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.TableCell, { className: "tabular-nums", children: "21:30" }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.TableCell, { className: "tabular-nums", children: "3" }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.TableCell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
            ds_exports.Badge,
            {
              variant: "outline",
              className: "border-[var(--color-muted-gold)] text-[var(--color-muted-gold)]",
              children: "Confirmed"
            }
          ) }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.TableCell, { className: "text-right tabular-nums", children: "IDR 2,700,000" })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ds_exports.TableRow, { className: "opacity-60", children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.TableCell, { className: "font-display text-lg text-[var(--color-taupe)]", children: "L6" }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.TableCell, { children: "Bram de Vries" }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.TableCell, { className: "tabular-nums", children: "22:00" }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.TableCell, { className: "tabular-nums", children: "2" }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.TableCell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.Badge, { variant: "destructive", children: "No show" }) }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.TableCell, { className: "text-right tabular-nums", children: "IDR 1,800,000" })
        ] })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.TableFooter, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ds_exports.TableRow, { className: "hover:bg-[var(--color-moss)]", children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.TableCell, { className: "text-xs uppercase tracking-widest text-[var(--color-taupe)]", children: "Total" }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.TableCell, { className: "tabular-nums", children: "6 tables" }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.TableCell, {}),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.TableCell, { className: "tabular-nums", children: "25" }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.TableCell, {}),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.TableCell, { className: "text-right font-display text-xl text-[var(--color-muted-gold)] tabular-nums", children: "IDR 25,000,000" })
      ] }) })
    ] })
  ] });
  var GuestList = () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Dark, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { className: "text-xs uppercase tracking-widest text-[var(--color-taupe)] mb-4", children: "Midnight Sessions · guest list" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ds_exports.Table, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.TableHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ds_exports.TableRow, { className: "hover:bg-[var(--color-moss)]", children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.TableHead, { className: headClass, children: "Guest" }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.TableHead, { className: headClass, children: "Host" }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.TableHead, { className: "text-xs uppercase tracking-widest text-[var(--color-taupe)] font-normal text-right", children: "Plus ones" })
      ] }) }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ds_exports.TableBody, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ds_exports.TableRow, { children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.TableCell, { className: "font-medium", children: "Wayan Sudarsana" }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.TableCell, { className: "text-[var(--color-champagne)]", children: "Uluwatu desk" }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.TableCell, { className: "text-right tabular-nums", children: "2" })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ds_exports.TableRow, { children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.TableCell, { className: "font-medium", children: "Clara Menezes" }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.TableCell, { className: "text-[var(--color-champagne)]", children: "Seminyak desk" }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.TableCell, { className: "text-right tabular-nums", children: "0" })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ds_exports.TableRow, { children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.TableCell, { className: "font-medium", children: "Putu Ariani" }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.TableCell, { className: "text-[var(--color-champagne)]", children: "Canggu desk" }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.TableCell, { className: "text-right tabular-nums", children: "4" })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ds_exports.TableRow, { children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.TableCell, { className: "font-medium", children: "Haruto Ishikawa" }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.TableCell, { className: "text-[var(--color-champagne)]", children: "Ubud desk" }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.TableCell, { className: "text-right tabular-nums", children: "1" })
        ] })
      ] })
    ] })
  ] });
  var Default = () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "bg-[var(--color-cream)] text-[var(--color-charcoal)] font-body p-8", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "bg-background rounded-md border p-4", children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ds_exports.Table, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.TableCaption, { children: "Deposits taken in the last seven days." }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.TableHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ds_exports.TableRow, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.TableHead, { children: "Reference" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.TableHead, { children: "Event" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.TableHead, { children: "Method" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.TableHead, { className: "text-right", children: "Amount" })
    ] }) }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ds_exports.TableBody, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ds_exports.TableRow, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.TableCell, { className: "font-medium", children: "TS-4412" }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.TableCell, { children: "Midnight Sessions" }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.TableCell, { children: "Card" }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.TableCell, { className: "text-right tabular-nums", children: "IDR 1,500,000" })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ds_exports.TableRow, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.TableCell, { className: "font-medium", children: "TS-4413" }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.TableCell, { children: "Wedding · Jimbaran" }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.TableCell, { children: "Transfer" }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.TableCell, { className: "text-right tabular-nums", children: "IDR 42,000,000" })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ds_exports.TableRow, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.TableCell, { className: "font-medium", children: "TS-4414" }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.TableCell, { children: "Sunset Gamelan" }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.TableCell, { children: "Card" }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.TableCell, { className: "text-right tabular-nums", children: "IDR 900,000" })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ds_exports.TableRow, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.TableCell, { className: "font-medium", children: "TS-4415" }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.TableCell, { children: "Private hire · Rooftop" }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.TableCell, { children: "Transfer" }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.TableCell, { className: "text-right tabular-nums", children: "IDR 18,000,000" })
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.TableFooter, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ds_exports.TableRow, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.TableCell, { children: "Total" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.TableCell, {}),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.TableCell, {}),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.TableCell, { className: "text-right tabular-nums", children: "IDR 62,400,000" })
    ] }) })
  ] }) }) });
  return __toCommonJS(Table_exports);
})();
