One-line: mobile top app bar — hamburger left, centered logo, teal cart with count badge.

```jsx
<MobileAppBar logoSrc="../../assets/logo.svg" cartCount={2} onMenu={openDrawer} onCart={() => go("cart")} />
```

60px tall (`h-14`, remapped), `surface/80` + 12px blur, bottom hairline. The logo is the full two-color lockup at 40px height — never an icon-only mark. The menu is always on the left (the floating back button sits *below* the bar at `left: 12px; top: 64px` on sub-pages, so the hamburger never moves).
