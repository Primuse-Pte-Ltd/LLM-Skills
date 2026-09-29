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

  // .design-sync/previews/Alert.tsx
  var Alert_exports = {};
  __export(Alert_exports, {
    BookingConfirmed: () => BookingConfirmed,
    PaymentFailed: () => PaymentFailed,
    Variants: () => Variants
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

  // node_modules/.pnpm/lucide-react@0.408.0_react@18.3.1/node_modules/lucide-react/dist/esm/icons/circle-check.js
  init_define_import_meta_env();
  var CircleCheck = createLucideIcon("CircleCheck", [
    ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
    ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }]
  ]);

  // node_modules/.pnpm/lucide-react@0.408.0_react@18.3.1/node_modules/lucide-react/dist/esm/icons/info.js
  init_define_import_meta_env();
  var Info = createLucideIcon("Info", [
    ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
    ["path", { d: "M12 16v-4", key: "1dtifu" }],
    ["path", { d: "M12 8h.01", key: "e9boi3" }]
  ]);

  // node_modules/.pnpm/lucide-react@0.408.0_react@18.3.1/node_modules/lucide-react/dist/esm/icons/octagon-x.js
  init_define_import_meta_env();
  var OctagonX = createLucideIcon("OctagonX", [
    ["path", { d: "m15 9-6 6", key: "1uzhvr" }],
    [
      "path",
      {
        d: "M2.586 16.726A2 2 0 0 1 2 15.312V8.688a2 2 0 0 1 .586-1.414l4.688-4.688A2 2 0 0 1 8.688 2h6.624a2 2 0 0 1 1.414.586l4.688 4.688A2 2 0 0 1 22 8.688v6.624a2 2 0 0 1-.586 1.414l-4.688 4.688a2 2 0 0 1-1.414.586H8.688a2 2 0 0 1-1.414-.586z",
        key: "2d38gg"
      }
    ],
    ["path", { d: "m9 9 6 6", key: "z0biqf" }]
  ]);

  // node_modules/.pnpm/lucide-react@0.408.0_react@18.3.1/node_modules/lucide-react/dist/esm/icons/triangle-alert.js
  init_define_import_meta_env();
  var TriangleAlert = createLucideIcon("TriangleAlert", [
    [
      "path",
      {
        d: "m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",
        key: "wmoenq"
      }
    ],
    ["path", { d: "M12 9v4", key: "juzpu7" }],
    ["path", { d: "M12 17h.01", key: "p32p05" }]
  ]);

  // .design-sync/previews/Alert.tsx
  var import_jsx_runtime = __toESM(require_react_shim());
  var Dark = ({ children }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "on-brand-dark bg-[var(--color-dark-green)] text-[var(--color-cream)] font-body p-8 flex flex-col gap-4", children });
  var Light = ({ children }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "bg-[var(--color-cream)] text-[var(--color-charcoal)] font-body p-8 flex flex-col gap-4", children });
  var BookingConfirmed = () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Dark, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ds_exports.Alert, { className: "border-[var(--color-muted-gold)]", children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { width: 16, height: 16, className: "text-[var(--color-muted-gold)]" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.AlertTitle, { className: "font-display text-xl font-normal tracking-wide", children: "Reservation confirmed" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.AlertDescription, { className: "text-[var(--color-champagne)]", children: "Table 12 for four guests, Friday 14 March at 20:30. Your deposit of IDR 1,200,000 has been received." })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ds_exports.Alert, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Info, { width: 16, height: 16, className: "text-[var(--color-muted-gold)]" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.AlertTitle, { className: "font-display text-xl font-normal tracking-wide", children: "Rooftop closes at 01:00" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.AlertDescription, { className: "text-[var(--color-taupe)]", children: "Last orders are taken at 00:30. The garden bar stays open until 02:00." })
    ] })
  ] });
  var PaymentFailed = () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Dark, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ds_exports.Alert, { variant: "destructive", children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(OctagonX, { width: 16, height: 16 }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.AlertTitle, { className: "font-display text-xl font-normal tracking-wide", children: "Payment declined" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.AlertDescription, { children: "Your card was declined by the issuing bank. The table is held for another 9 minutes — try another card to keep it." })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ds_exports.Alert, { variant: "destructive", children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, { width: 16, height: 16 }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.AlertTitle, { className: "font-display text-xl font-normal tracking-wide", children: "Midnight Sessions is sold out" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.AlertDescription, { children: "All 180 places for Saturday 15 March are taken. Join the waiting list and we will write the moment a table is released." })
    ] })
  ] });
  var Variants = () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Light, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ds_exports.Alert, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Info, { width: 16, height: 16 }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.AlertTitle, { children: "Default" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.AlertDescription, { children: "Guest list for tonight closes at 18:00." })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ds_exports.Alert, { variant: "destructive", children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(OctagonX, { width: 16, height: 16 }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.AlertTitle, { children: "Destructive" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.AlertDescription, { children: "Refund failed — the original card is no longer valid." })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ds_exports.Alert, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.AlertTitle, { children: "Title only, no icon" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.AlertDescription, { children: "Kitchen service ends at 23:00." })
    ] })
  ] });
  return __toCommonJS(Alert_exports);
})();
/*! Bundled license information:

lucide-react/dist/esm/shared/src/utils.js:
lucide-react/dist/esm/defaultAttributes.js:
lucide-react/dist/esm/Icon.js:
lucide-react/dist/esm/createLucideIcon.js:
lucide-react/dist/esm/icons/circle-check.js:
lucide-react/dist/esm/icons/info.js:
lucide-react/dist/esm/icons/octagon-x.js:
lucide-react/dist/esm/icons/triangle-alert.js:
lucide-react/dist/esm/lucide-react.js:
  (**
   * @license lucide-react v0.408.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)
*/
