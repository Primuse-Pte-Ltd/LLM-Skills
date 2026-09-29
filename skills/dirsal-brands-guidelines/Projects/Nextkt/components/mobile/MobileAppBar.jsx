import React from "react";

/**
 * Mobile top app bar (below lg): menu left, logo centered, teal cart right with
 * count badge. 60px, surface at 80% with a 12px glass blur and a bottom hairline.
 * Pass the real logo path via `logoSrc` (assets/logo.svg).
 */
export function MobileAppBar({ logoSrc = "assets/logo.svg", cartCount = 0, onMenu, onCart, onLogo, style = {} }) {
  return (
    <header style={{
      position: "sticky", top: 0, zIndex: 50,
      height: "var(--app-bar-height)", flexShrink: 0,
      display: "flex", alignItems: "center", justifyContent: "space-between",
      padding: "0 var(--margin-mobile)",
      background: "rgb(248 249 250 / 0.8)",
      backdropFilter: "blur(var(--blur-glass))", WebkitBackdropFilter: "blur(var(--blur-glass))",
      borderBottom: "1px solid var(--outline-variant)",
      ...style,
    }}>
      <button type="button" aria-label="Open menu" onClick={onMenu} className="ms" style={{
        width: 40, height: 40, marginLeft: -8, background: "none", border: "none", borderRadius: "var(--radius-pill)",
        color: "var(--on-surface)", cursor: "pointer",
      }}>menu</button>
      <button type="button" aria-label="Nextkt — home" onClick={onLogo} style={{ background: "none", border: "none", padding: 0, cursor: "pointer", display: "flex" }}>
        <img src={logoSrc} alt="Nextkt" style={{ height: 40, width: "auto" }} />
      </button>
      <button type="button" aria-label={cartCount > 0 ? `Cart (${cartCount} item${cartCount === 1 ? "" : "s"})` : "Cart"} onClick={onCart} style={{
        position: "relative", width: 40, height: 40, marginRight: -8, display: "flex", alignItems: "center", justifyContent: "center",
        background: "none", border: "none", borderRadius: "var(--radius-pill)", color: "var(--primary)", cursor: "pointer",
      }}>
        <span className="ms">shopping_cart</span>
        {cartCount > 0 ? (
          <span style={{
            position: "absolute", right: 0, top: 0, minWidth: 18, height: 18, padding: "0 4px",
            display: "flex", alignItems: "center", justifyContent: "center", borderRadius: "var(--radius-pill)",
            background: "var(--primary)", color: "var(--on-primary)", fontFamily: "var(--font-body)", fontSize: 11,
            fontWeight: "var(--weight-bold)", lineHeight: 1, boxShadow: "0 0 0 2px var(--surface)",
          }}>{cartCount > 99 ? "99+" : cartCount}</span>
        ) : null}
      </button>
    </header>
  );
}
