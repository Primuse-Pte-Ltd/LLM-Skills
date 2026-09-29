---
name: Analyst-Confident System
colors:
  surface: '#fbf8ff'
  surface-dim: '#dad9e3'
  surface-bright: '#fbf8ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f4f2fd'
  surface-container: '#eeedf7'
  surface-container-high: '#e8e7f1'
  surface-container-highest: '#e3e1ec'
  on-surface: '#1a1b22'
  on-surface-variant: '#4a454f'
  inverse-surface: '#2f3038'
  inverse-on-surface: '#f1effa'
  outline: '#7b7580'
  outline-variant: '#ccc3d0'
  surface-tint: '#6e5095'
  primary: '#6a4d91'
  on-primary: '#ffffff'
  primary-container: '#8466ac'
  on-primary-container: '#fffafa'
  inverse-primary: '#d8b9ff'
  secondary: '#5e5e65'
  on-secondary: '#ffffff'
  secondary-container: '#e3e1ea'
  on-secondary-container: '#64646b'
  tertiary: '#5f5f00'
  on-tertiary: '#ffffff'
  tertiary-container: '#78781d'
  on-tertiary-container: '#fffaff'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#eddcff'
  primary-fixed-dim: '#d8b9ff'
  on-primary-fixed: '#28074d'
  on-primary-fixed-variant: '#55397b'
  secondary-fixed: '#e3e1ea'
  secondary-fixed-dim: '#c7c5ce'
  on-secondary-fixed: '#1b1b21'
  on-secondary-fixed-variant: '#46464d'
  tertiary-fixed: '#e8e881'
  tertiary-fixed-dim: '#cccb68'
  on-tertiary-fixed: '#1d1d00'
  on-tertiary-fixed-variant: '#494900'
  background: '#fbf8ff'
  on-background: '#1a1b22'
  surface-variant: '#e3e1ec'
typography:
  display-lg:
    fontFamily: Hanken Grotesk
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Hanken Grotesk
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  headline-md-mobile:
    fontFamily: Hanken Grotesk
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
  body-lg:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-sm:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  label-md:
    fontFamily: Geist
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.05em
  code-sm:
    fontFamily: Geist
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 18px
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  base: 4px
  container-padding-desktop: 32px
  container-padding-mobile: 16px
  gutter: 16px
  stack-sm: 8px
  stack-md: 16px
  stack-lg: 32px
---

## Brand & Style
This design system is engineered for high-stakes environments where precision, speed, and clarity are paramount. The brand personality is "Analyst-Confident": an aesthetic that balances the authority of enterprise software with the modern agility of a high-growth startup. 

The style is **Modern/Corporate with a Technical Edge**, utilizing a restrained UI that allows complex data to take center stage. It leverages a structured grid, meticulous typography, and a "function-over-form" philosophy that results in an interface that feels like a professional instrument. The emotional response should be one of reliability, focus, and intellectual mastery.

## Colors
The palette is centered around the signature purple, used sparingly to draw attention to primary actions and critical states. 

### Light Mode
In light mode, the system uses a crisp white base with Zinc-based neutrals to maintain a professional, low-strain environment. Surfaces are layered using subtle grey shifts rather than heavy shadows.

### Dark Mode
The dark mode utilizes a deep Charcoal/Zinc base (`#09090B`). It is optimized for long-form data analysis, reducing eye fatigue. Elements are elevated using "surface-variant" tones (`#18181B`) and subtle outlines to maintain separation without losing the "true black" aesthetic of the background.

## Typography
The typography system is built for information density. 

- **Headlines:** Hanken Grotesk provides a sharp, contemporary edge for titles and major headings.
- **Body:** Inter is the workhorse for all prose and data entries, chosen for its exceptional legibility and neutral character.
- **Data & Labels:** Geist (Monospace/Technical) is used for labels, metadata, and code snippets to provide a distinct visual cue for technical or secondary information.

Scale headlines down by one tier for mobile devices to maintain a clear hierarchy on narrow viewports.

## Layout & Spacing
The system uses a **Fluid Grid** with a strict 4px base unit. This ensures all elements align to a predictable rhythm.

- **Desktop:** 12-column grid with 32px outer margins and 16px gutters.
- **Tablet:** 8-column grid with 24px outer margins and 16px gutters.
- **Mobile:** 4-column grid with 16px outer margins and 12px gutters.

Spacing between functional groups should follow a "stack" logic: small (8px) for related items, medium (16px) for standard sections, and large (32px) for distinct content blocks.

## Elevation & Depth
Elevation is communicated through **Tonal Layers** and **Low-Contrast Outlines**.

- **Level 0 (Base):** The main background (`surface`).
- **Level 1 (Cards/Sidebar):** Slightly offset color (`surface-variant`) with a 1px `outline` border.
- **Level 2 (Modals/Popovers):** Uses a subtle ambient shadow (0px 4px 12px, 10% opacity) to provide depth without breaking the flat, technical aesthetic.

In Dark Mode, avoid heavy shadows; use lighter border outlines and slightly lighter surface fills to indicate "closeness" to the user.

## Shapes
The shape language is **Soft/Technical**. 

A base radius of 4px (`0.25rem`) is applied to buttons, input fields, and small components. This creates a professional look that is approachable but retains its geometric integrity. Larger containers like cards use 8px (`0.5rem`). Avoid pill shapes except for specific status indicators or tags.

## Components
- **Buttons:** Solid primary buttons use the signature purple. Secondary buttons use an outline style with `on-surface` text. Text must be `label-md` for high-density layouts.
- **Input Fields:** 1px border using `outline`. In focus state, the border transitions to `primary` with a 2px outer glow of the same color at 20% opacity.
- **Chips/Tags:** Small, rectangular with 2px radius. Use `surface-variant` backgrounds with `label-md` typography.
- **Data Tables:** High-density. Rows use a 1px bottom border of `outline`. Header text is `label-md` all-caps.
- **Cards:** No shadows by default. Use a 1px `outline` border and a background of `surface-variant` to distinguish from the base canvas.
- **Lists:** Interactive list items should have a subtle hover state (`surface-variant`) with a 200ms transition.