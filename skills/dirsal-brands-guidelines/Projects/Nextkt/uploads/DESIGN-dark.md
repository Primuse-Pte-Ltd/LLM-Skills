---
name: Nextkt Dark Editorial
scope: featured zones only (hero bands, artist spotlights, promo strips) — the storefront ships light
colors:
  background: '#191c1d'
  surface: '#191c1d'
  surface-container-lowest: '#2e3132'
  surface-container-low: '#24282a'
  surface-container: '#2e3132'
  surface-container-high: '#393d3f'
  surface-container-highest: '#44484a'
  on-background: '#f0f1f2'
  on-surface: '#f0f1f2'
  on-surface-variant: '#c3c7cc'
  secondary: '#c8c6c6'
  outline-variant: 'rgb(255 255 255 / 0.20)'
  outline-soft: 'rgb(255 255 255 / 0.12)'
  primary: '#1c6e87'
  primary-container: '#417292'
  on-primary: '#ffffff'
  link: '#a7d8e4'
  link-hover: '#cdeaf2'
  accent-tint: 'rgb(167 216 228 / 0.14)'
  inverse-primary: '#a7d8e4'
  tier-vip: '#d4af37'
  on-sale-green: '#10b981'
  error: '#ffb4ab'
typography:
  headline-display:
    fontFamily: Inter
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  kicker:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '700'
    lineHeight: '1.0'
    letterSpacing: 0.2em
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
rounded:
  button: 0.25rem
  card: 0.5rem
  modal: 1rem
---

## Brand & Style
DESIGN.md describes the look as "Dark Editorial in featured areas, High-Utility Light in discovery areas". This file specifies the **dark half**, which is a *scope*, not a site theme. Nextkt ships **no** `dark:` classes and **no** user theme toggle. Apply the scope by adding `class="dark"` to a band (a hero, an artist spotlight, a promo strip). Everything outside the band stays light.

The mood is a darkened venue just before the lights come up: charcoal, not black, with teal used as stage light.

## Colors
- **Canvas:** `#191C1D` (DESIGN.md's dark base). Cards and raised surfaces step up tonally: `#24282A` for low, `#2E3132` for cards (the M3 inverse surface), and `#393D3F` for high.
- **Text:** `#F0F1F2` for strong text, `#C3C7CC` for body copy, and `#C8C6C6` for meta.
- **Teal text becomes `#A7D8E4`** (`inverse-primary`). This applies to links, eyebrows and active labels. `#1C6E87` text fails contrast on charcoal.
- **Teal fills stay `#1C6E87`.** A primary button looks identical in both scopes, and its white label still passes contrast.
- **Borders** are white at 20%, or white at 12% for soft borders. Never use `#C3C7CC` as a hairline on dark.
- **Gold** (`#D4AF37`) keeps its VIP-only meaning and reads better on dark, but it is still not decoration.

## Typography
Same Inter ramp as light. Featured bands usually carry the **kicker** (12px, weight 700, 0.2em tracking, uppercase) in `#A7D8E4` above a 48px display title in `#F0F1F2`.

## Elevation & Depth
There are no shadows on dark, because they disappear. Separate layers with a tonal step plus a white/12 hairline. Glass (`white/10`, blur 12px) still works over photography inside the band.

## Shapes
Unchanged: buttons 4px, cards 8px, modals 16px.

## Components
- **Primary button:** `#1C6E87` fill with a white label, and `#417292` on hover.
- **Glass button:** white/10 fill, white/30 border, 12px blur. Use it over imagery.
- **Links:** `#A7D8E4`, `#CDEAF2` on hover.
- **Cards:** `#2E3132` with a white/12 border.
- **Badges:** keep the solid status colours (green On Sale, grey Sold Out). Use `accent-tint` for teal pills.
