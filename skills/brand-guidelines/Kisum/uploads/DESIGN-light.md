---
name: Analyst-Confident Precision
colors:
  surface: '#f9f9ff'
  surface-dim: '#d3daef'
  surface-bright: '#f9f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f1f3ff'
  surface-container: '#e9edff'
  surface-container-high: '#e1e8fd'
  surface-container-highest: '#dce2f7'
  on-surface: '#141b2b'
  on-surface-variant: '#4a454f'
  inverse-surface: '#293040'
  inverse-on-surface: '#edf0ff'
  outline: '#7b7580'
  outline-variant: '#ccc3d0'
  surface-tint: '#6e5095'
  primary: '#6a4d91'
  on-primary: '#ffffff'
  primary-container: '#8466ac'
  on-primary-container: '#fffafa'
  inverse-primary: '#d8b9ff'
  secondary: '#6f41c6'
  on-secondary: '#ffffff'
  secondary-container: '#a377fd'
  on-secondary-container: '#36007d'
  tertiary: '#6a37d4'
  on-tertiary: '#ffffff'
  tertiary-container: '#8454ee'
  on-tertiary-container: '#fffbfa'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#eddcff'
  primary-fixed-dim: '#d8b9ff'
  on-primary-fixed: '#28074d'
  on-primary-fixed-variant: '#55397b'
  secondary-fixed: '#eaddff'
  secondary-fixed-dim: '#d2bbff'
  on-secondary-fixed: '#25005a'
  on-secondary-fixed-variant: '#5623ad'
  tertiary-fixed: '#e9ddff'
  tertiary-fixed-dim: '#d0bcff'
  on-tertiary-fixed: '#23005c'
  on-tertiary-fixed-variant: '#5516be'
  background: '#f9f9ff'
  on-background: '#141b2b'
  surface-variant: '#dce2f7'
  text-muted: '#6B7280'
  surface-white: '#FFFFFF'
  border-subtle: '#E5E7EB'
  surface-subtle: '#F9FAFB'
typography:
  display-lg:
    fontFamily: Manrope
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Manrope
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Manrope
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  headline-md:
    fontFamily: Manrope
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  title-lg:
    fontFamily: Manrope
    fontSize: 18px
    fontWeight: '600'
    lineHeight: 24px
  body-lg:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  body-sm:
    fontFamily: Inter
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 18px
  label-md:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.02em
  code-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 16px
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 4px
  gutter-desktop: 24px
  margin-desktop: 40px
  gutter-mobile: 16px
  margin-mobile: 16px
  container-max: 1440px
---

## Brand & Style
The design system is engineered for the "Analyst-confident CRM," prioritizing high information density, technical precision, and professional reliability. The aesthetic is **Corporate Modern** with a lean toward **Minimalism**, ensuring that complex data remains the focal point without unnecessary visual noise. 

The target audience consists of data-driven analysts and relationship managers who require a UI that feels like a powerful tool rather than a decorative interface. The emotional response should be one of "controlled power"—a sense that the system is robust, predictable, and exceptionally organized. We utilize a structured grid, subtle tonal layering, and sharp typography to evoke a sophisticated SaaS environment.

## Colors
This design system utilizes a sophisticated purple-centric palette to differentiate from standard blue-heavy CRMs. 

- **Primary (#8466AC):** Used for primary actions, active states, and brand-identifying accents.
- **Secondary/Tertiary:** Derived from the source material to provide depth in data visualization and interactive states.
- **Neutrals:** We rely on a deep Slate/Gray scale. `#111827` provides high-contrast grounding for typography, while `#6B7280` handles secondary metadata.
- **Functional Use:** Backgrounds should remain primarily white or very light gray to maintain the "Analyst" focus on clarity. High-density tables should use alternating row tints using a 2% opacity of the primary color.

## Typography
The typography strategy follows a strict hierarchy to manage high-density data. 

**Manrope** is reserved for headlines and structural landmarks, providing a modern, slightly geometric "refined" feel that signals authority. 
**Inter** is the workhorse for all functional data, body copy, and UI labels. Its high legibility at small sizes is critical for the CRM's density requirements. 

For analyst-focused views (tables and dashboards), prefer `body-sm` (13px) to maximize the information visible on-screen. All labels should be uppercase with slight letter spacing to distinguish them from interactive data points.

## Layout & Spacing
The layout follows a **Fixed-Fluid Hybrid Grid**. The sidebar remains fixed at 240px, while the main content area utilizes a 12-column fluid grid.

A strict **4px baseline grid** governs all internal component spacing. For high-density views, use "Compact" spacing (8px between elements), while marketing or landing pages should utilize "Default" spacing (16px-24px). 

**Breakpoints:**
- Desktop: 1200px+ (12 columns)
- Tablet: 768px - 1199px (8 columns)
- Mobile: <767px (4 columns, stacking behavior)

## Elevation & Depth
In this design system, depth is communicated through **Tonal Layering** rather than heavy shadows. This maintains a clean, technical appearance.

- **Level 0 (Background):** `#F9FAFB` – The base canvas.
- **Level 1 (Cards/Surface):** `#FFFFFF` with a 1px border of `#E5E7EB`. No shadow.
- **Level 2 (Dropdowns/Modals):** `#FFFFFF` with a subtle, diffused shadow: `0 4px 12px rgba(17, 24, 39, 0.08)`.
- **Active States:** Subtle 2px inset borders or color fills are preferred over elevation changes to keep the interface feeling flat and fast.

## Shapes
We adopt a **Soft (0.25rem)** shape language. This provides enough roundness to feel modern and approachable without sacrificing the "precise" and "professional" requirement of an analyst tool. 

- **Small Components (Buttons, Inputs):** 4px (0.25rem) radius.
- **Large Components (Cards, Modals):** 8px (0.5rem) radius.
- **Data Visualizations:** Bar charts and status indicators should maintain the 4px radius for consistency. Avoid full circles (pills) except for status "dots."

## Components

### Buttons
- **Primary:** Solid `#8466AC` fill with white text. 4px border radius.
- **Secondary:** White fill with `#E5E7EB` border and `#111827` text.
- **Ghost:** No border or fill, primary color text. Used for secondary actions in dense tables.

### Inputs & Fields
- Use a 1px border of `#D1D5DB`. Focus state uses a 1px solid `#8466AC` border with a 3px soft outer glow of the same color at 10% opacity. 
- Labels must always be visible (never placeholder-only) using `label-md`.

### Tables (Critical Component)
- High-density rows (32px height).
- Header row uses a light gray background (`#F3F4F6`) with `label-md` text color.
- Hover state on rows uses `#F9FAFB`.

### Chips & Tags
- Used for status indicators. Use low-saturation background tints (e.g., Success: Light Green bg, Dark Green text) with the standard 4px radius.

### Cards
- White background, 1px border `#E5E7EB`. Headers within cards should be separated by a subtle horizontal rule.