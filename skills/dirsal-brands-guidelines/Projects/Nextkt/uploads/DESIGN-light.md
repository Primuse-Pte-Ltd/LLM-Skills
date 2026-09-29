---
name: Artist Tickets
colors:
  surface: '#f8f9fa'
  surface-dim: '#d9dadb'
  surface-bright: '#f8f9fa'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f3f4f5'
  surface-container: '#edeeef'
  surface-container-high: '#e7e8e9'
  surface-container-highest: '#e1e3e4'
  on-surface: '#1d1e4c'
  on-surface-variant: '#4a5560'
  inverse-surface: '#2e3132'
  inverse-on-surface: '#f0f1f2'
  outline: '#74787e'
  outline-variant: '#c3c7cc'
  surface-tint: '#2f6d84'
  primary: '#1c6e87'
  on-primary: '#ffffff'
  primary-container: '#417292'
  on-primary-container: '#f4fbfd'
  inverse-primary: '#a7d8e4'
  secondary: '#5f5e5e'
  on-secondary: '#ffffff'
  secondary-container: '#e2dfdf'
  on-secondary-container: '#636262'
  tertiary: '#735c00'
  on-tertiary: '#ffffff'
  tertiary-container: '#cba72f'
  on-tertiary-container: '#4e3d00'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#cdeaf2'
  primary-fixed-dim: '#a7d8e4'
  on-primary-fixed: '#06222b'
  on-primary-fixed-variant: '#2a5566'
  secondary-fixed: '#e5e2e1'
  secondary-fixed-dim: '#c8c6c6'
  on-secondary-fixed: '#1c1b1c'
  on-secondary-fixed-variant: '#474647'
  tertiary-fixed: '#ffe088'
  tertiary-fixed-dim: '#e9c349'
  on-tertiary-fixed: '#241a00'
  on-tertiary-fixed-variant: '#574500'
  background: '#f8f9fa'
  on-background: '#1d1e4c'
  surface-variant: '#e1e3e4'
  on-sale-green: '#10b981'
  brand-teal: '#488790'
  brand-navy: '#1d1e4c'
  tier-ga: '#417292'
  tier-vip: '#d4af37'
  tier-tables: '#1d1e4c'
  outline-subtle: '#c3c7cc'
typography:
  headline-display:
    fontFamily: Inter
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.5'
  label-caps:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '700'
    lineHeight: '1.0'
    letterSpacing: 0.2em
  label-sm:
    fontFamily: Inter
    fontSize: 13px
    fontWeight: '500'
    lineHeight: '1.2'
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  margin-mobile: 16px
  margin-desktop: 48px
  gutter: 24px
  stack-sm: 8px
  stack-md: 16px
  stack-lg: 32px
  container-max: 1280px
---

## Brand & Style
The brand personality is **Editorial, Premium, and Immersive**. It targets a discerning audience seeking high-end live entertainment experiences, from global stadium tours to intimate jazz residencies. The emotional response is one of exclusive access and professional curation.

The design style is a blend of **Modern Corporate and Glassmorphism**. It utilizes a clean, systematic layout (Modern) while employing atmospheric elements like semi-transparent overlays, backdrop blurs, and deep teal-tinted imagery (Glassmorphism) to evoke the feeling of a live stage environment. The aesthetic is "Dark Editorial" in featured areas and "High-Utility Light" in discovery areas.

## Colors
The palette is derived from the brand **logo** (`public/images/logo.svg`): a
**teal / steel-blue** mark (#488790 / #417292) over a **deep navy** wordmark
(#1d1e4c). Teal is the primary brand identifier, evoking the cool stage lighting
of live events; navy anchors typography and dark accents.

- **Primary:** Deep teal (#1c6e87) for key actions, brand identity, and active
  states. The steel-blue container (#417292) is used for large CTA surfaces and
  the GA seating tier.
- **Secondary:** A neutral slate-grey for body text and less emphasized
  navigation. Headings render in deep navy (#1d1e4c).
- **Tertiary (VIP):** A metallic gold (#d4af37) reserved strictly for premium
  status and high-tier access indicators.
- **Tables tier:** Deep navy (#1d1e4c).
- **Neutral:** A range of cool greys from a bright white surface to deep
  container tones.
- **Functional Colors:** Success states (On Sale) use a vibrant emerald green.
  Low-stock warnings use a soft red-tinted container.

## Typography
The system relies exclusively on **Inter** to maintain a clean, utilitarian foundation that doesn't compete with high-impact event imagery. 

Hierarchy is established through extreme scale and capitalization:
- **Display levels** use tight line heights and negative letter spacing for a dramatic, editorial look.
- **Labels** often use all-caps with wide tracking (0.2em) to differentiate metadata from body content.
- **Readability** is prioritized in body text with a generous 1.5 - 1.6 line height.

## Layout & Spacing
The layout follows a **Fixed Grid** philosophy for desktop, centering content within a 1280px container to maintain editorial control. 

- **Horizontal Rhythm:** A wide 48px margin on desktop provides breathing room, while mobile tightens to 16px. Gutters are fixed at 24px for card grids.
- **Vertical Rhythm:** Defined by "stacks." Use `stack-lg` (32px) to separate major sections and `stack-md` (16px) for internal component spacing.
- **Adaptation:** On mobile, 3-column featured grids reflow to a single-column stack, while 4-column smaller grids reflow to a 2x2 matrix.

## Elevation & Depth
Depth is communicated through **Tonal Layering** and **Glassmorphism** rather than traditional heavy shadows.

- **The Base:** Backgrounds use `#f8f9fa` (Light) or `#191c1d` (Dark).
- **Containers:** Lower-tier surfaces use `#edeeef` to create subtle separation.
- **Interactive Depth:** Featured hero sections use `backdrop-filter: blur(12px)` with a 10% white alpha overlay to create a "glass" effect that lets event photography bleed through.
- **Shadows:** Only used on hover states for interactive cards, using a very soft, diffused shadow (`shadow-md`) to indicate lift.

## Shapes
The shape language is **Soft and Precise**. 

- **Standard Elements:** Buttons, input fields, and small cards use a 0.25rem (4px) radius.
- **Large Containers:** Hero banners and featured sections use a more pronounced 0.5rem (8px) or 0.75rem (12px) radius.
- **Iconography:** Navigation icons and control buttons (like carousel arrows) use a full `rounded-full` circle to distinguish them from structural content.

## Components
- **Buttons:** 
  - **Primary:** Solid `#1c6e87` (teal) with white text, bold weight. Should have a slight scale-down effect (active:scale-95) on click.
  - **Glass:** Transparent with `border-white/30` and backdrop blur for use over imagery.
- **Event Cards:** 
  - **Featured:** 16:9 aspect ratio imagery with a bottom-aligned info block and a price/action footer.
  - **Discovery:** 1:1 square imagery with a floating "Quick Buy" overlay that appears on hover.
- **Status Badges:** Small, caps-only labels with 10px font size. Use background colors like Green (On Sale), Gold (VIP), or Red (Low Stock) with 90% opacity.
- **Date Chips:** Vertically stacked day/month units using a grey container (`#edeeef`) to create a calendar-leaf metaphor.
- **Inputs:** Minimalist borders with icons inside the container. Focus states should use a 2px primary color ring.
- **Carousel Controls:** Circular, semi-transparent buttons with thin `Material Symbols` icons.