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

  // .design-sync/previews/Toaster.tsx
  var Toaster_exports = {};
  __export(Toaster_exports, {
    InPage: () => InPage,
    ToastKinds: () => ToastKinds,
    WithActions: () => WithActions
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

  // node_modules/.pnpm/lucide-react@0.408.0_react@18.3.1/node_modules/lucide-react/dist/esm/icons/loader-circle.js
  init_define_import_meta_env();
  var LoaderCircle = createLucideIcon("LoaderCircle", [
    ["path", { d: "M21 12a9 9 0 1 1-6.219-8.56", key: "13zald" }]
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

  // .design-sync/previews/Toaster.tsx
  var import_jsx_runtime = __toESM(require_react_shim());
  var Dark = ({ children }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    "div",
    {
      className: "on-brand-dark bg-[var(--color-dark-green)] text-[var(--color-cream)] font-body p-8",
      style: { minHeight: 320 },
      children
    }
  );
  var MockToast = ({
    icon,
    title,
    description,
    action
  }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
    "div",
    {
      className: "group toast flex items-center gap-2 rounded-lg border border-border bg-background text-foreground shadow-lg",
      style: { width: 356, padding: 16, fontSize: 13 },
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "flex h-4 w-4 shrink-0 items-center justify-center text-[var(--color-muted-gold)]", children: icon }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "flex flex-1 flex-col gap-1", children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "font-medium leading-tight", children: title }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "leading-snug text-muted-foreground", children: description })
        ] }),
        action ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
          "button",
          {
            type: "button",
            className: "shrink-0 rounded-md bg-primary text-primary-foreground",
            style: { height: 24, paddingLeft: 8, paddingRight: 8, fontSize: 12 },
            children: action
          }
        ) : null
      ]
    }
  );
  var ToastKinds = () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Dark, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { className: "text-xs uppercase tracking-widest text-[var(--color-taupe)]", children: "Static representation — not a live toast" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "mt-4 flex flex-col gap-3", children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        MockToast,
        {
          icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { width: 16, height: 16 }),
          title: "Reservation confirmed",
          description: "Table 12 for four, Friday 14 March at 20:30."
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        MockToast,
        {
          icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(OctagonX, { width: 16, height: 16 }),
          title: "Payment declined",
          description: "Your card was refused by the issuing bank.",
          action: "Retry"
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        MockToast,
        {
          icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, { width: 16, height: 16 }),
          title: "Midnight Sessions is nearly full",
          description: "12 of 180 places left for Saturday."
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        MockToast,
        {
          icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Info, { width: 16, height: 16 }),
          title: "Guest list closes at 18:00",
          description: "Additions after that go to the door team."
        }
      )
    ] })
  ] });
  var InPage = () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Dark, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
      "div",
      {
        className: "rounded-lg border border-[var(--color-muted-gold)] bg-white/5 p-6",
        style: { width: 420 },
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { className: "text-xs uppercase tracking-widest text-[var(--color-taupe)]", children: "Saturday 15 March" }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { className: "mt-2 font-display text-3xl font-normal tracking-wide", children: "Gamelan Supper Club" }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { className: "mt-3 text-sm text-[var(--color-champagne)]", children: "Deposit IDR 1,200,000 — refundable up to 48 hours before." }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.Button, { className: "mt-5 bg-[var(--color-muted-gold)] text-black hover:bg-[var(--color-gold-light)]", children: "Confirm booking" })
        ]
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "mt-6", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      MockToast,
      {
        icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { width: 16, height: 16 }),
        title: "Reservation confirmed",
        description: "We have emailed your QR code to putu@example.com.",
        action: "View"
      }
    ) }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.Toaster, { position: "bottom-right" })
  ] });
  var WithActions = () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Dark, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { className: "text-xs uppercase tracking-widest text-[var(--color-taupe)]", children: "Static representation — not a live toast" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "mt-4 flex flex-col gap-3", children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
        "div",
        {
          className: "group toast flex items-center gap-2 rounded-lg border border-border bg-background text-foreground shadow-lg",
          style: { width: 356, padding: 16, fontSize: 13 },
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "flex h-4 w-4 shrink-0 items-center justify-center text-[var(--color-muted-gold)]", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, { width: 16, height: 16 }) }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "flex flex-1 flex-col gap-1", children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "font-medium leading-tight", children: "Cancel this reservation?" }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "leading-snug text-muted-foreground", children: "Table 12, Friday 14 March. The deposit is refundable." })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
              "button",
              {
                type: "button",
                className: "shrink-0 rounded-md bg-muted text-muted-foreground",
                style: { height: 24, paddingLeft: 8, paddingRight: 8, fontSize: 12 },
                children: "Keep"
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
              "button",
              {
                type: "button",
                className: "shrink-0 rounded-md bg-primary text-primary-foreground",
                style: { height: 24, paddingLeft: 8, paddingRight: 8, fontSize: 12 },
                children: "Cancel"
              }
            )
          ]
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        MockToast,
        {
          icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { width: 16, height: 16, className: "animate-spin" }),
          title: "Refunding IDR 1,200,000",
          description: "This usually takes under a minute."
        }
      )
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.Toaster, { position: "top-center" })
  ] });
  return __toCommonJS(Toaster_exports);
})();
/*! Bundled license information:

lucide-react/dist/esm/shared/src/utils.js:
lucide-react/dist/esm/defaultAttributes.js:
lucide-react/dist/esm/Icon.js:
lucide-react/dist/esm/createLucideIcon.js:
lucide-react/dist/esm/icons/circle-check.js:
lucide-react/dist/esm/icons/info.js:
lucide-react/dist/esm/icons/loader-circle.js:
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
