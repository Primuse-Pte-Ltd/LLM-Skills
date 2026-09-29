---
name: The Design System
colors:
  surface: '#fdf8fd'
  surface-dim: '#ddd9de'
  surface-bright: '#fdf8fd'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f7f2f8'
  surface-container: '#f1ecf2'
  surface-container-high: '#ebe7ec'
  surface-container-highest: '#e5e1e7'
  on-surface: '#1c1b1f'
  on-surface-variant: '#4a454f'
  inverse-surface: '#313034'
  inverse-on-surface: '#f4eff5'
  outline: '#7b7580'
  outline-variant: '#ccc3d0'
  surface-tint: '#6e5095'
  primary: '#6a4d91'
  on-primary: '#ffffff'
  primary-container: '#8466ac'
  on-primary-container: '#fffafa'
  inverse-primary: '#d8b9ff'
  secondary: '#5e5e62'
  on-secondary: '#ffffff'
  secondary-container: '#e1dfe3'
  on-secondary-container: '#626266'
  tertiary: '#555c67'
  on-tertiary: '#ffffff'
  tertiary-container: '#6e7480'
  on-tertiary-container: '#fcfbff'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#eddcff'
  primary-fixed-dim: '#d8b9ff'
  on-primary-fixed: '#28074d'
  on-primary-fixed-variant: '#55397b'
  secondary-fixed: '#e3e2e6'
  secondary-fixed-dim: '#c7c6ca'
  on-secondary-fixed: '#1b1b1f'
  on-secondary-fixed-variant: '#46464a'
  tertiary-fixed: '#dce3f0'
  tertiary-fixed-dim: '#c0c7d4'
  on-tertiary-fixed: '#151c26'
  on-tertiary-fixed-variant: '#414752'
  background: '#fdf8fd'
  on-background: '#1c1b1f'
  surface-variant: '#e5e1e7'
typography:
  display-lg:
    fontFamily: Newsreader
    fontSize: 57px
    fontWeight: '400'
    lineHeight: 64px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Newsreader
    fontSize: 32px
    fontWeight: '500'
    lineHeight: 40px
  headline-lg-mobile:
    fontFamily: Newsreader
    fontSize: 28px
    fontWeight: '500'
    lineHeight: 36px
  headline-md:
    fontFamily: Newsreader
    fontSize: 28px
    fontWeight: '400'
    lineHeight: 36px
  headline-sm:
    fontFamily: Newsreader
    fontSize: 24px
    fontWeight: '400'
    lineHeight: 32px
  title-lg:
    fontFamily: Inter
    fontSize: 22px
    fontWeight: '500'
    lineHeight: 28px
  title-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '500'
    lineHeight: 24px
    letterSpacing: 0.01em
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
  label-lg:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '500'
    lineHeight: 20px
  label-sm:
    fontFamily: Inter
    fontSize: 11px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.05em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  base: 4px
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 32px
  gutter: 24px
  margin-desktop: 80px
  margin-mobile: 16px
---

## Brand & Style

This design system is built on a foundation of **Editorial Minimalism**. It bridges the gap between the authoritative presence of a legacy publication and the seamless efficiency of modern SaaS. The brand personality is sophisticated, composed, and intellectually curious, targeting professionals who value clarity and focused environments.

The visual style employs high-contrast layouts and generous whitespace to create a "breathable" interface. While the primary interactions are powered by a distinct purple hue, the overall aesthetic remains light and neutral to ensure content remains the hero. By stripping away unnecessary ornamentation, the design system evokes an emotional response of calm reliability and premium quality.

## Colors

The color palette is centered around **#8466ac**, a muted wisteria purple that provides a distinctive but professional character. The system prioritizes a light-mode editorial feel, utilizing varying levels of surface containers to create hierarchy without relying on heavy borders.

- **Primary Shade:** Used for core actions and brand presence.
- **Surface Containers:** Designed with subtle shifts in neutral tones to group related information while maintaining the white-page aesthetic.
- **Fixed Roles:** `primary-fixed` and its variants are used for elements that require a consistent color prominence regardless of elevation, such as chip backgrounds or selected states in navigation.
- **Interaction States:** Hover states should utilize a 10% opacity overlay of the `on-surface` color, while active states increase this to 12%.

## Typography

The typography strategy leverages a "System-Native Plus" approach. We pair the authoritative, high-contrast serifs of **Newsreader** for editorial headings with the hyper-functional, neutral grotesque **Inter** for UI elements and long-form body text.

- **Editorial Expression:** Use `display` and `headline` roles for marketing moments and section titles to evoke a literary feel.
- **Functional Clarity:** `Inter` is utilized for all functional UI components, labels, and inputs to maintain a native, utilitarian feel that developers and users find intuitive.
- **Optical Adjustments:** Larger headlines utilize negative letter-spacing to maintain tension, while small labels use increased tracking for legibility at small sizes.

## Layout & Spacing

This design system utilizes a **Fixed-Fluid Hybrid Grid**. Content is housed within a 12-column grid that centers on large displays with a maximum width of 1280px, while remaining fully fluid on smaller tablet and mobile viewports.

- **Spacing Logic:** All spacing is based on a 4px baseline, with 8px and 16px being the most common increments for component internal padding.
- **Breakpoints:** 
  - **Mobile:** 0-599px (4 columns, 16px margins).
  - **Tablet:** 600-1023px (8 columns, 24px margins).
  - **Desktop:** 1024px+ (12 columns, variable margins).
- **Rhythm:** Vertical rhythm is maintained by ensuring all component heights and stack spacing are multiples of 8px.

## Elevation & Depth

Depth in this design system is expressed primarily through **Tonal Layering** rather than heavy shadows, preserving the flat, editorial aesthetic. 

- **Surface Tiers:** Backgrounds live on the `surface` color. Content cards and containers sit on `surface-container-low`. Floating elements (like menus) use `surface-container-high`.
- **Shadow Character:** When elevation is required for clarity (e.g., Modals), use a single, highly-diffused shadow: `0px 4px 20px rgba(132, 102, 172, 0.08)`. The tinting of the shadow with the primary purple color ensures it feels integrated into the brand environment.
- **Outlines:** Use `outline-variant` for low-contrast boundaries on interactive elements like input fields to maintain structure without adding visual weight.

## Shapes

The shape language is **Soft and Precise**. We avoid overly rounded or "bubbly" forms to maintain a professional, editorial tone.

- **Base Radius:** 0.25rem (4px) is the standard for buttons, inputs, and small components.
- **Large Radius:** 0.5rem (8px) is reserved for cards and modular containers.
- **Constraint:** Do not use full-pill shapes for buttons; stick to the base radius to maintain a structural, grid-aligned feel.

## Components

### Buttons
Primary buttons use the `primary` fill with `on-primary` text. They should feature a subtle 1px inner stroke in a lighter purple to add a "pressed" tactile feel in the active state. Secondary buttons use the `outline` role with no fill.

### Chips
Chips utilize `primary-fixed` backgrounds with `on-primary-container` text. This ensures they are clearly interactive but distinct from the high-priority primary buttons.

### Input Fields
Inputs use a `surface` fill with an `outline-variant` border. Upon focus, the border transitions to a 2px `primary` stroke. Labels use the `label-sm` typography level, positioned consistently above the field.

### Cards
Cards are defined by a `surface-container-low` background and no border. On hover, they transition to `surface-container`, creating a "lift" through color rather than shadow.

### Lists
List items should have a minimum touch target of 48px. Use `outline-variant` for dividers, but only between items—never at the top or bottom of a list container—to maintain the open editorial feel.