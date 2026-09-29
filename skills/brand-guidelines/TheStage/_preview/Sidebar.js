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

  // ds-raw:__ds_raw__
  var require_ds_raw = __commonJS({
    "ds-raw:__ds_raw__"(exports, module) {
      init_define_import_meta_env();
      module.exports = window.TheStageUI;
    }
  });

  // .design-sync/previews/Sidebar.tsx
  var Sidebar_exports = {};
  __export(Sidebar_exports, {
    BackofficeNav: () => BackofficeNav,
    Default: () => Default,
    GroupedSections: () => GroupedSections
  });
  init_define_import_meta_env();

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

  // node_modules/.pnpm/lucide-react@0.408.0_react@18.3.1/node_modules/lucide-react/dist/esm/icons/bar-chart-3.js
  init_define_import_meta_env();
  var BarChart3 = createLucideIcon("BarChart3", [
    ["path", { d: "M3 3v18h18", key: "1s2lah" }],
    ["path", { d: "M18 17V9", key: "2bz60n" }],
    ["path", { d: "M13 17V5", key: "1frdt8" }],
    ["path", { d: "M8 17v-3", key: "17ska0" }]
  ]);

  // node_modules/.pnpm/lucide-react@0.408.0_react@18.3.1/node_modules/lucide-react/dist/esm/icons/calendar-days.js
  init_define_import_meta_env();
  var CalendarDays = createLucideIcon("CalendarDays", [
    ["path", { d: "M8 2v4", key: "1cmpym" }],
    ["path", { d: "M16 2v4", key: "4m81vk" }],
    ["rect", { width: "18", height: "18", x: "3", y: "4", rx: "2", key: "1hopcy" }],
    ["path", { d: "M3 10h18", key: "8toen8" }],
    ["path", { d: "M8 14h.01", key: "6423bh" }],
    ["path", { d: "M12 14h.01", key: "1etili" }],
    ["path", { d: "M16 14h.01", key: "1gbofw" }],
    ["path", { d: "M8 18h.01", key: "lrp35t" }],
    ["path", { d: "M12 18h.01", key: "mhygvu" }],
    ["path", { d: "M16 18h.01", key: "kzsmim" }]
  ]);

  // node_modules/.pnpm/lucide-react@0.408.0_react@18.3.1/node_modules/lucide-react/dist/esm/icons/clipboard-list.js
  init_define_import_meta_env();
  var ClipboardList = createLucideIcon("ClipboardList", [
    ["rect", { width: "8", height: "4", x: "8", y: "2", rx: "1", ry: "1", key: "tgr4d6" }],
    [
      "path",
      {
        d: "M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",
        key: "116196"
      }
    ],
    ["path", { d: "M12 11h4", key: "1jrz19" }],
    ["path", { d: "M12 16h4", key: "n85exb" }],
    ["path", { d: "M8 11h.01", key: "1dfujw" }],
    ["path", { d: "M8 16h.01", key: "18s6g9" }]
  ]);

  // node_modules/.pnpm/lucide-react@0.408.0_react@18.3.1/node_modules/lucide-react/dist/esm/icons/package.js
  init_define_import_meta_env();
  var Package = createLucideIcon("Package", [
    ["path", { d: "m7.5 4.27 9 5.15", key: "1c824w" }],
    [
      "path",
      {
        d: "M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",
        key: "hh9hay"
      }
    ],
    ["path", { d: "m3.3 7 8.7 5 8.7-5", key: "g66t2b" }],
    ["path", { d: "M12 22V12", key: "d0xqtd" }]
  ]);

  // node_modules/.pnpm/lucide-react@0.408.0_react@18.3.1/node_modules/lucide-react/dist/esm/icons/settings.js
  init_define_import_meta_env();
  var Settings = createLucideIcon("Settings", [
    [
      "path",
      {
        d: "M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",
        key: "1qme2f"
      }
    ],
    ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }]
  ]);

  // node_modules/.pnpm/lucide-react@0.408.0_react@18.3.1/node_modules/lucide-react/dist/esm/icons/users.js
  init_define_import_meta_env();
  var Users = createLucideIcon("Users", [
    ["path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2", key: "1yyitq" }],
    ["circle", { cx: "9", cy: "7", r: "4", key: "nufk8" }],
    ["path", { d: "M22 21v-2a4 4 0 0 0-3-3.87", key: "kshegd" }],
    ["path", { d: "M16 3.13a4 4 0 0 1 0 7.75", key: "1da9ce" }]
  ]);

  // ds-shim:ds
  var ds_exports = {};
  __export(ds_exports, {
    default: () => ds_default
  });
  init_define_import_meta_env();
  __reExport(ds_exports, __toESM(require_ds_raw()));
  var g = window.TheStageUI;
  var ds_default = "default" in g ? g.default : g;

  // .design-sync/previews/Sidebar.tsx
  var import_jsx_runtime = __toESM(require_react_shim());
  var brandTokens = {
    "--sidebar-background": "150 33% 4%",
    // --color-deep-green  #060c09
    "--sidebar-foreground": "43 26% 95%",
    // --color-cream       #f5f3ee
    "--sidebar-accent": "147 28% 14%",
    // --color-sage        #1a2e23
    "--sidebar-accent-foreground": "41 49% 59%",
    // --color-muted-gold  #c9a962
    "--sidebar-border": "146 26% 19%",
    // --color-moss        #243d2f
    "--sidebar-ring": "41 49% 59%",
    // --color-muted-gold
    "--background": "150 33% 6%",
    // --color-dark-green  #0a140f
    "--foreground": "43 26% 95%",
    // --color-cream
    "--accent": "147 28% 14%",
    // --color-sage
    "--accent-foreground": "41 49% 59%",
    // --color-muted-gold
    "--border": "146 26% 19%",
    // --color-moss
    "--muted-foreground": "55 5% 58%"
    // --color-taupe       #9a998f
  };
  var shell = { minHeight: 0, height: 420 };
  var label = "text-xs uppercase tracking-[0.15em]";
  var BackofficeNav = () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ds_exports.SidebarProvider, { style: { ...brandTokens, ...shell }, className: "w-full font-body", children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ds_exports.Sidebar, { collapsible: "none", className: "border-r border-sidebar-border", children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ds_exports.SidebarHeader, { className: "px-4 py-5", children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "font-display text-xl tracking-[0.3em] text-[var(--color-muted-gold)]", children: "THE STAGE" }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: `${label} text-[var(--color-taupe)]`, children: "Uluwatu, Bali" })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.SidebarSeparator, {}),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.SidebarContent, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ds_exports.SidebarGroup, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.SidebarGroupLabel, { className: label, children: "Operations" }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.SidebarGroupContent, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ds_exports.SidebarMenu, { children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ds_exports.SidebarMenuItem, { children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ds_exports.SidebarMenuButton, { isActive: true, children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CalendarDays, {}),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Events" })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.SidebarMenuBadge, { children: "4" })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ds_exports.SidebarMenuItem, { children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ds_exports.SidebarMenuButton, { children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ClipboardList, {}),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Reservations" })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.SidebarMenuBadge, { children: "27" })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.SidebarMenuItem, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ds_exports.SidebarMenuButton, { children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Users, {}),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Guest list" })
          ] }) }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.SidebarMenuItem, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ds_exports.SidebarMenuButton, { children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Package, {}),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Inventory" })
          ] }) }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.SidebarMenuItem, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ds_exports.SidebarMenuButton, { children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BarChart3, {}),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Analytics" })
          ] }) })
        ] }) })
      ] }) }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ds_exports.SidebarFooter, { className: "px-4 py-4", children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: `${label} text-[var(--color-taupe)]`, children: "Signed in as" }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "text-sm", children: "Wayan · Floor manager" })
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ds_exports.SidebarInset, { className: "text-[var(--color-cream)]", children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", { className: "flex items-center gap-3 border-b border-white/10 px-6 py-4", children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.SidebarTrigger, {}),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: `${label} text-[var(--color-taupe)]`, children: "Events" })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "p-6", children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { className: "font-display text-3xl tracking-wide", children: "Midnight Sessions" }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { className: "mt-2 max-w-md text-sm leading-relaxed text-[var(--color-champagne)]", children: "Saturday 22:00 · rooftop · 142 guests on the list, 18 tables confirmed and 2 held for walk-ins." })
      ] })
    ] })
  ] });
  var GroupedSections = () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.SidebarProvider, { style: { ...brandTokens, ...shell }, className: "w-fit font-body", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.Sidebar, { collapsible: "none", className: "border-r border-sidebar-border", children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ds_exports.SidebarContent, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ds_exports.SidebarGroup, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.SidebarGroupLabel, { className: label, children: "Tonight" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.SidebarGroupContent, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ds_exports.SidebarMenu, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ds_exports.SidebarMenuItem, { children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ds_exports.SidebarMenuButton, { isActive: true, children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ClipboardList, {}),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Reservations" })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ds_exports.SidebarMenuSub, { children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.SidebarMenuSubItem, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.SidebarMenuSubButton, { isActive: true, children: "Arrivals" }) }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.SidebarMenuSubItem, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.SidebarMenuSubButton, { children: "Waitlist" }) }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.SidebarMenuSubItem, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.SidebarMenuSubButton, { children: "No-shows" }) })
          ] })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ds_exports.SidebarMenuItem, { children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ds_exports.SidebarMenuButton, { children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Users, {}),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Guest list" })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.SidebarMenuBadge, { children: "142" })
        ] })
      ] }) })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.SidebarSeparator, {}),
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ds_exports.SidebarGroup, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.SidebarGroupLabel, { className: label, children: "Venue" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.SidebarGroupContent, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ds_exports.SidebarMenu, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.SidebarMenuItem, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ds_exports.SidebarMenuButton, { children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Package, {}),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Inventory" })
        ] }) }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.SidebarMenuItem, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ds_exports.SidebarMenuButton, { children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BarChart3, {}),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Analytics" })
        ] }) }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.SidebarMenuItem, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ds_exports.SidebarMenuButton, { children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Settings, {}),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Settings" })
        ] }) })
      ] }) })
    ] })
  ] }) }) });
  var Default = () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ds_exports.SidebarProvider, { style: shell, className: "w-full font-body", children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ds_exports.Sidebar, { collapsible: "none", className: "border-r border-sidebar-border", children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.SidebarHeader, { className: "px-4 py-4 text-sm font-medium", children: "The Stage · Backoffice" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.SidebarContent, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ds_exports.SidebarGroup, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.SidebarGroupLabel, { children: "Operations" }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.SidebarGroupContent, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ds_exports.SidebarMenu, { children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.SidebarMenuItem, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ds_exports.SidebarMenuButton, { isActive: true, children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CalendarDays, {}),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Events" })
          ] }) }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.SidebarMenuItem, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ds_exports.SidebarMenuButton, { children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ClipboardList, {}),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Reservations" })
          ] }) }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.SidebarMenuItem, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ds_exports.SidebarMenuButton, { children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Users, {}),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Guest list" })
          ] }) }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.SidebarMenuItem, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ds_exports.SidebarMenuButton, { variant: "outline", children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Settings, {}),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Settings" })
          ] }) })
        ] }) })
      ] }) }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.SidebarFooter, { className: "px-4 py-3 text-xs", children: "Wayan · Floor manager" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ds_exports.SidebarInset, { className: "text-[var(--color-charcoal)]", children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", { className: "flex items-center gap-3 border-b px-6 py-4", children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.SidebarTrigger, {}),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "text-sm font-medium", children: "Events" })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "p-6 text-sm text-muted-foreground", children: "Four events on sale this month." })
    ] })
  ] });
  return __toCommonJS(Sidebar_exports);
})();
/*! Bundled license information:

lucide-react/dist/esm/shared/src/utils.js:
lucide-react/dist/esm/defaultAttributes.js:
lucide-react/dist/esm/Icon.js:
lucide-react/dist/esm/createLucideIcon.js:
lucide-react/dist/esm/icons/bar-chart-3.js:
lucide-react/dist/esm/icons/calendar-days.js:
lucide-react/dist/esm/icons/clipboard-list.js:
lucide-react/dist/esm/icons/package.js:
lucide-react/dist/esm/icons/settings.js:
lucide-react/dist/esm/icons/users.js:
lucide-react/dist/esm/lucide-react.js:
  (**
   * @license lucide-react v0.408.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)
*/
