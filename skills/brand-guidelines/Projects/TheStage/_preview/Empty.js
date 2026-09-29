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

  // .design-sync/previews/Empty.tsx
  var Empty_exports = {};
  __export(Empty_exports, {
    Default: () => Default,
    NoReservations: () => NoReservations,
    NoSearchResults: () => NoSearchResults
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

  // node_modules/.pnpm/lucide-react@0.408.0_react@18.3.1/node_modules/lucide-react/dist/esm/lucide-react.js
  init_define_import_meta_env();

  // node_modules/.pnpm/lucide-react@0.408.0_react@18.3.1/node_modules/lucide-react/dist/esm/createLucideIcon.js
  init_define_import_meta_env();
  var import_react2 = __toESM(require_react_shim());

  // node_modules/.pnpm/lucide-react@0.408.0_react@18.3.1/node_modules/lucide-react/dist/esm/shared/src/utils.js
  init_define_import_meta_env();
  var toKebabCase = (string) => string.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
  var mergeClasses = (...classes) => classes.filter((className, index, array) => {
    return Boolean(className) && array.indexOf(className) === index;
  }).join(" ");

  // node_modules/.pnpm/lucide-react@0.408.0_react@18.3.1/node_modules/lucide-react/dist/esm/Icon.js
  init_define_import_meta_env();
  var import_react = __toESM(require_react_shim());

  // node_modules/.pnpm/lucide-react@0.408.0_react@18.3.1/node_modules/lucide-react/dist/esm/defaultAttributes.js
  init_define_import_meta_env();
  var defaultAttributes = {
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  };

  // node_modules/.pnpm/lucide-react@0.408.0_react@18.3.1/node_modules/lucide-react/dist/esm/Icon.js
  var Icon = (0, import_react.forwardRef)(
    ({
      color = "currentColor",
      size = 24,
      strokeWidth = 2,
      absoluteStrokeWidth,
      className = "",
      children,
      iconNode,
      ...rest
    }, ref) => {
      return (0, import_react.createElement)(
        "svg",
        {
          ref,
          ...defaultAttributes,
          width: size,
          height: size,
          stroke: color,
          strokeWidth: absoluteStrokeWidth ? Number(strokeWidth) * 24 / Number(size) : strokeWidth,
          className: mergeClasses("lucide", className),
          ...rest
        },
        [
          ...iconNode.map(([tag, attrs]) => (0, import_react.createElement)(tag, attrs)),
          ...Array.isArray(children) ? children : [children]
        ]
      );
    }
  );

  // node_modules/.pnpm/lucide-react@0.408.0_react@18.3.1/node_modules/lucide-react/dist/esm/createLucideIcon.js
  var createLucideIcon = (iconName, iconNode) => {
    const Component = (0, import_react2.forwardRef)(
      ({ className, ...props }, ref) => (0, import_react2.createElement)(Icon, {
        ref,
        iconNode,
        className: mergeClasses(`lucide-${toKebabCase(iconName)}`, className),
        ...props
      })
    );
    Component.displayName = `${iconName}`;
    return Component;
  };

  // node_modules/.pnpm/lucide-react@0.408.0_react@18.3.1/node_modules/lucide-react/dist/esm/icons/calendar-off.js
  init_define_import_meta_env();
  var CalendarOff = createLucideIcon("CalendarOff", [
    ["path", { d: "M4.2 4.2A2 2 0 0 0 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 1.82-1.18", key: "16swn3" }],
    ["path", { d: "M21 15.5V6a2 2 0 0 0-2-2H9.5", key: "yhw86o" }],
    ["path", { d: "M16 2v4", key: "4m81vk" }],
    ["path", { d: "M3 10h7", key: "1wap6i" }],
    ["path", { d: "M21 10h-5.5", key: "quycpq" }],
    ["path", { d: "m2 2 20 20", key: "1ooewy" }]
  ]);

  // node_modules/.pnpm/lucide-react@0.408.0_react@18.3.1/node_modules/lucide-react/dist/esm/icons/search.js
  init_define_import_meta_env();
  var Search = createLucideIcon("Search", [
    ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
    ["path", { d: "m21 21-4.3-4.3", key: "1qie3q" }]
  ]);

  // node_modules/.pnpm/lucide-react@0.408.0_react@18.3.1/node_modules/lucide-react/dist/esm/icons/users.js
  init_define_import_meta_env();
  var Users = createLucideIcon("Users", [
    ["path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2", key: "1yyitq" }],
    ["circle", { cx: "9", cy: "7", r: "4", key: "nufk8" }],
    ["path", { d: "M22 21v-2a4 4 0 0 0-3-3.87", key: "kshegd" }],
    ["path", { d: "M16 3.13a4 4 0 0 1 0 7.75", key: "1da9ce" }]
  ]);

  // .design-sync/previews/Empty.tsx
  var import_jsx_runtime = __toESM(require_react_shim());
  var Dark = ({ children }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "on-brand-dark bg-[var(--color-dark-green)] text-[var(--color-cream)] font-body p-8", children });
  var Light = ({ children }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "bg-[var(--color-cream)] text-[var(--color-charcoal)] font-body p-8", children });
  var NoReservations = () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dark, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ds_exports.Empty, { className: "border border-[var(--color-muted-gold)] bg-white/5", style: { width: 460 }, children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ds_exports.EmptyHeader, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.EmptyMedia, { variant: "icon", className: "bg-white/10 text-[var(--color-muted-gold)]", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CalendarOff, {}) }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.EmptyTitle, { className: "font-display text-2xl font-normal tracking-wide", children: "No reservations tonight" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.EmptyDescription, { children: "Nothing is booked for Tuesday 11 March. The rooftop is still open for walk-ins from 18:00." })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ds_exports.EmptyContent, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.Button, { className: "bg-[var(--color-muted-gold)] text-black hover:bg-[var(--color-gold-light)]", children: "Open the night for bookings" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { className: "text-xs uppercase tracking-widest text-[var(--color-taupe)]", children: "Last booked 3 days ago" })
    ] })
  ] }) });
  var NoSearchResults = () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dark, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ds_exports.Empty, { className: "border border-dashed border-white/10", style: { width: 460 }, children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ds_exports.EmptyHeader, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.EmptyMedia, { className: "text-[var(--color-muted-gold)]", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { width: 40, height: 40, strokeWidth: 1 }) }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.EmptyTitle, { className: "font-display text-2xl font-normal tracking-wide", children: "No guest found" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.EmptyDescription, { children: "Nobody on Saturday’s list matches “Wayan Suartika”. Check the spelling, or search the whole season." })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.EmptyContent, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      ds_exports.Button,
      {
        variant: "outline",
        className: "border-[var(--color-muted-gold)] bg-transparent text-[var(--color-cream)] hover:bg-white/5",
        children: "Search all events"
      }
    ) })
  ] }) });
  var Default = () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Light, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
    ds_exports.Empty,
    {
      className: "rounded-lg border border-dashed bg-background",
      style: { width: 460 },
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ds_exports.EmptyHeader, { children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.EmptyMedia, { variant: "icon", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Users, {}) }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.EmptyTitle, { children: "Your party is empty" }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.EmptyDescription, { children: "Add the guests joining you so we can seat the table correctly." })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.EmptyContent, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.Button, { size: "sm", children: "Add a guest" }) })
      ]
    }
  ) });
  return __toCommonJS(Empty_exports);
})();
/*! Bundled license information:

lucide-react/dist/esm/shared/src/utils.js:
lucide-react/dist/esm/defaultAttributes.js:
lucide-react/dist/esm/Icon.js:
lucide-react/dist/esm/createLucideIcon.js:
lucide-react/dist/esm/icons/calendar-off.js:
lucide-react/dist/esm/icons/search.js:
lucide-react/dist/esm/icons/users.js:
lucide-react/dist/esm/lucide-react.js:
  (**
   * @license lucide-react v0.408.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)
*/
