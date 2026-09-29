---
name: Nextkt
description: Consumer ticketing storefront design system (Nextkt-Frontend — Next.js 16 + Tailwind v3). Editorial, photo-first, logo-derived teal/navy.
colors:
  brand-teal: "#488790"
  brand-steel: "#417292"
  brand-navy: "#1D1E4C"
  brand-mark: "#3E6F8F"
  primary: "#1C6E87"
  on-primary: "#FFFFFF"
  primary-container: "#417292"
  on-primary-container: "#F4FBFD"
  primary-fixed: "#CDEAF2"
  primary-fixed-dim: "#A7D8E4"
  on-primary-fixed: "#06222B"
  on-primary-fixed-variant: "#2A5566"
  inverse-primary: "#A7D8E4"
  surface-tint: "#2F6D84"
  background: "#F8F9FA"
  on-background: "#1D1E4C"
  surface: "#F8F9FA"
  surface-dim: "#D9DADB"
  surface-bright: "#F8F9FA"
  surface-container-lowest: "#FFFFFF"
  surface-container-low: "#F3F4F5"
  surface-container: "#EDEEEF"
  surface-container-high: "#E7E8E9"
  surface-container-highest: "#E1E3E4"
  surface-variant: "#E1E3E4"
  on-surface: "#1D1E4C"
  on-surface-variant: "#4A5560"
  inverse-surface: "#2E3132"
  inverse-on-surface: "#F0F1F2"
  outline: "#74787E"
  outline-variant: "#C3C7CC"
  secondary: "#5F5E5E"
  on-secondary: "#FFFFFF"
  secondary-container: "#E2DFDF"
  on-secondary-container: "#636262"
  tertiary: "#735C00"
  tertiary-container: "#CBA72F"
  on-tertiary-container: "#4E3D00"
  tertiary-fixed: "#FFE088"
  tertiary-fixed-dim: "#E9C349"
  error: "#BA1A1A"
  on-error: "#FFFFFF"
  error-container: "#FFDAD6"
  on-error-container: "#93000A"
  status-on-sale: "#10B981"
  status-sold-out: "#6B7280"
  tier-ga: "#417292"
  tier-vip: "#D4AF37"
  tier-tables: "#1D1E4C"
typography:
  headline-display:
    fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif"
    fontSize: "48px"
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: "-0.02em"
  headline-lg:
    fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif"
    fontSize: "32px"
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: "-0.01em"
  headline-lg-mobile:
    fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif"
    fontSize: "24px"
    fontWeight: 600
    lineHeight: 1.2
  headline-md:
    fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif"
    fontSize: "24px"
    fontWeight: 600
    lineHeight: 1.3
  body-lg:
    fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif"
    fontSize: "18px"
    fontWeight: 400
    lineHeight: 1.6
  body-md:
    fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.5
  label-sm:
    fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif"
    fontSize: "13px"
    fontWeight: 500
    lineHeight: 1.2
  label-caps:
    fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif"
    fontSize: "12px"
    fontWeight: 700
    lineHeight: 1.0
    letterSpacing: "0.05em"
rounded:
  # tailwind.config.ts REMAPS these — the class name is not the Tailwind default.
  DEFAULT: 0.125rem   # rounded      = 2px
  sm: 0.125rem        # rounded-sm   = 2px (Tailwind default)
  md: 0.375rem        # rounded-md   = 6px (Tailwind default)
  lg: 0.25rem         # rounded-lg   = 4px  ← buttons, inputs
  xl: 0.5rem          # rounded-xl   = 8px  ← cards
  2xl: 1rem           # rounded-2xl  = 16px ← modals (Tailwind default)
  full: 0.75rem       # rounded-full = 12px ← NOT a circle
spacing:
  margin-mobile: 16px
  margin-desktop: 48px
  gutter: 24px
  stack-sm: 8px
  stack-md: 16px
  stack-lg: 32px
  container-max: 1280px
  header: 96px        # h-15 (remapped to 6rem)
  app-bar: 60px       # h-14 (remapped to 3.75rem)
  tab-bar: 96px       # h-15, includes safe-area inset
  cta: 60px           # Add to Cart
  account-nav: 256px
  order-summary: 380px
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.lg}"
    padding: "8px 24px"
  button-primary-hover:
    backgroundColor: "{colors.primary-container}"
    textColor: "{colors.on-primary}"
  button-cta:
    backgroundColor: "{colors.primary-container}"
    textColor: "{colors.on-primary-container}"
    rounded: "{rounded.lg}"
    height: "60px"
  button-glass:
    backgroundColor: "rgb(255 255 255 / 0.10)"
    textColor: "#FFFFFF"
    border: "1px solid rgb(255 255 255 / 0.30)"
    backdropFilter: "blur(12px)"
    rounded: "{rounded.lg}"
  card-event:
    backgroundColor: "{colors.surface-container-low}"
    border: "1px solid {colors.outline-variant}"
    rounded: "{rounded.lg}"
  card-panel:
    backgroundColor: "{colors.surface-container-lowest}"
    border: "1px solid rgb(195 199 204 / 0.3)"
    rounded: "{rounded.xl}"
    padding: "32px"
  badge-status:
    textColor: "#FFFFFF"
    fontSize: "10px"
    rounded: "{rounded.DEFAULT}"
    padding: "4px 12px"
---

# Design System: Nextkt

## 0. Scope

This is the design system of the **Nextkt consumer storefront**: `3- Nextkt/modules/Nextkt-Frontend`, a Next.js 16 App Router app on Tailwind v3. It covers discovery (home, events, venues, artists), the event detail page, cart, checkout, the account area, and the mobile layouts.

Nextkt is **not** a Kisum Core app. It keeps its logo-derived teal/navy palette and does not use Kisum purple, Manrope or the Kisum app shell.

**Source of truth, in order:**
1. `tailwind.config.ts` and `app/globals.css`, which are what actually renders.
2. This file, reconciled against the code.
3. `Nextkt-Frontend/DESIGN.md` (preserved verbatim as `DESIGN-light.md`), which predates several code changes. See §10.

## 1. Overview

**Creative North Star: "House Lights Down"**

Nextkt should feel like the moment before a show: a calm, well-lit lobby (light, orderly, navy-on-white) that opens onto a stage (full-bleed photography, glass, a black scrim). The chrome is quiet on purpose, so the artist imagery provides the drama.

**Key characteristics:**
- **Photo-first.** Heroes are full-bleed at 21:9 on desktop and 4:5 on mobile, and cards lead with 16:9, 1:1 or 3:4 imagery that zooms to 1.05 on hover.
- **Editorial type.** Everything is Inter, with hierarchy from size and caps: 48px display with −0.02em tracking, and uppercase eyebrows.
- **Teal marks action.** Buttons, links, active nav, prices, eyebrows and the cart badge are teal. Nothing decorative is.
- **Two dedicated layouts.** Desktop and mobile are separate JSX branches (`hidden lg:block` / `lg:hidden`), not one layout that reflows.
- **Light-only.** No `dark:` variants ship. "Dark Editorial" exists only as scoped featured bands (`DESIGN-dark.md`).

## 2. Colors

The palette comes from the logo: a steel-blue N (`#417292`), teal "ex" (`#488790`), and navy "Ticket" (`#1D1E4C`). The standalone N mark uses `#3E6F8F`.

### Primary
- **Teal `#1C6E87`** (`primary`) is the action colour: primary buttons, links, active nav underline, prices, eyebrows, the focus ring, and the cart badge.
- **Steel `#417292`** (`primary-container`) is primary's hover, the fill of the 60px Add to Cart bar, the mobile newsletter card, and the GA tier.
- **Pale teal `#A7D8E4` / `#CDEAF2`** (`primary-fixed-dim` / `primary-fixed`) are used for the hero kicker on photos and for teal text inside dark bands.

### Neutral
- The page is **`#F8F9FA`**, cool and never cream. Cards and panels are **white** (`surface-container-lowest`).
- Tonal steps are `#F3F4F5` (low: featured cards, tier rows), `#EDEEEF` (container: date chips, footers), and `#E1E3E4` (highest: stepper pills).
- Text is **navy `#1D1E4C`** for headings and strong copy, **`#4A5560`** for body, **`#5F5E5E`** for meta, and **`#74787E`** for placeholders.
- Hairlines are **`#C3C7CC`** (`outline-variant`), or `outline-variant/30` for soft card borders.

### Tertiary (VIP)
- **Gold `#D4AF37`** (`tier-vip`) is for the VIP tier only. On tints, use `#4E3D00` text.

### Status & tiers
| Meaning | Colour |
|---|---|
| On Sale | `#10B981` (solid badge, 90% alpha over photos) |
| Sold Out | `#6B7280` (solid, or a 10% tint with grey text) |
| Presale / Selling fast | `primary` at 90% alpha |
| Low stock | `error-container` `#FFDAD6` / `#93000A` |
| GA · VIP · Tables | `#417292` · `#D4AF37` · `#1D1E4C` |
| Error text | `#BA1A1A` |

### Named Rules
- **Teal-Is-Action.** If it's teal, you can tap it (or it's a price or eyebrow). Never use teal as a decorative wash.
- **Gold-Is-Earned.** Gold means VIP or loyalty. Never use it on CTAs, links or placeholders.
- **No-Cream.** Neutrals stay cool grey. Warmth comes from photography.

## 3. Typography

**Inter only** (400–800), self-hosted in `public/fonts`. Icons are **Material Symbols Outlined** (also self-hosted).

### Hierarchy
| Token | Size / LH | Weight | Tracking | Use |
|---|---|---|---|---|
| `headline-display` | 48 / 1.1 | 700 | −0.02em | Hero titles, event title |
| `headline-lg` | 32 / 1.2 | 600 | −0.01em | Section titles ("Premiere Events") |
| `headline-lg-mobile` | 24 / 1.2 | 600 | — | Mobile page titles |
| `headline-md` | 24 / 1.3 | 600 | — | Card titles, "Select Tickets", prices |
| `body-lg` | 18 / 1.6 | 400 | — | Hero description, lead paragraph |
| `body-md` | 16 / 1.5 | 400 | — | Body copy, nav links (600, or 800 when active) |
| `text-sm` | 14 / 1.43 | 400–500 | — | Card summaries, meta |
| `label-sm` | 13 / 1.2 | 500 | — | Footer links, helper text, fees |
| `label-caps` | 12 / 1.0 | 700 | **0.05em** | Eyebrows, filters, form labels (uppercase) |
| micro | 10–11px | 700 | 0.05em | Badges, date-chip month |

### Named Rules
- **Kicker-Is-Wide.** Hero kickers ("ON SALE NOW") use `label-caps` with `tracking-[0.2em]` in `primary-fixed`. Everywhere else, caps use the tighter 0.05em.
- **Tabular-Money.** Prices use tabular numerals and Singapore dollars with two decimals: `SG$ 128.00`, `From SG$ 98.00`, `SG$ 1,250.00`.

## 4. Elevation

Depth comes from **tonal layering and glass**, not shadow stacks.

### Shadow vocabulary
- **Rest:** no shadow, 1px `outline-variant`.
- **Soft panel:** `shadow-sm` (the Select Tickets box, ticket cards).
- **Hover lift:** `shadow-md` (discovery and directory cards). Featured cards zoom the image instead.
- **Overlay:** `shadow-xl` / `shadow-2xl` (menus, toasts).

### Glass (`app/globals.css`)
- `.glass-overlay`: white/10 with a 12px blur. Used for hero secondary buttons and the status chip.
- `.glass-badge`: white/15 with an 8px blur. Used for "Featured" / "ON SALE" pills on photos.
- `.glass-panel`: white/80. Used for the QR modal and the Presented-by chip.
- `.hero-gradient`: `linear-gradient(0deg, rgb(0 0 0/.8), transparent 60%)` scrim.

### Motion
- Buttons press to `active:scale-95` (the CTA uses `0.98`).
- Card images scale to 1.05 over 500–700ms.
- The carousel slides for 0.7s with `cubic-bezier(.4,0,.2,1)`.
- `prefers-reduced-motion` disables auto-advance.

## 5. Components

### Buttons
- **Primary:** teal fill, white bold label, **4px** radius (`rounded-lg`), `px-6 py-2`, steel on hover.
- **CTA (Add to Cart):** 60px tall, steel `primary-container` fill, `headline-md` label with a trailing `confirmation_number` icon, full width.
- **Glass:** white/10 fill, white/30 border, 12px blur. Use over photos only.
- **Inverse:** white fill with a teal label, on teal panels ("Subscribe Now").
- **Link:** teal bold text with a 2px teal underline ("View Full Calendar").
- **Icon buttons:** 40px (48px for carousel arrows), `rounded-full` (= 12px). The cart badge is 18px teal with a surface ring.

### Badges & chips
- **Status:** 10px bold caps with white text on a solid colour at 90% alpha, 2px radius.
- **Tier:** GA / VIP / TABLES caps on a 12–16% tint of the tier colour.
- **Filter chips (mobile):** `rounded-full` (12px), active teal fill, inactive with a hairline on `surface-container-low`.
- **Date chip:** caps month (10px, teal) over the day (18–24px, bold), on `surface-container` like a calendar leaf, or on white/85 glass over photos.

### Cards
- **Featured (home):** 16:9 image, status badge top-right, eyebrow "OCT 24 • JAKARTA", `headline-md` title, two-line summary, then price and **Book Now**.
- **Discovery (upcoming):** 1:1 image with a **Quick Buy** overlay on hover, date chip plus heart, then price and a stock pill.
- **Directory (/events):** 16:10 image with a glass date chip, title, a `location_on` venue line, then price and **Get Tickets**.
- **Poster (mobile rail):** 3:4 image, `rounded-lg`, glass badge, eyebrow, title, venue.

### Inputs
White or surface fill, 1px `outline-variant`, 4px radius, a leading Material icon in `secondary`, caps labels, and a **2px teal ring** on focus (red for errors).

### Ticket selection
The **Select Tickets** box is sticky at `top-28`, white, 8px radius, with `shadow-sm`. Each tier row sits on `surface-container-low` with a border that turns teal on hover. It shows the tier badge, price (bold), subtitle, availability, and a **pill stepper** (`rounded-full`, `surface-container-highest`). After that come the points slider (`accent-primary`), Total, and the CTA.

### Hold countdown
A pill with `schedule` and `M:SS left to pay`. It is neutral normally, turns red in the last 2 minutes, and becomes `error-container` with "Hold expired" at zero.

### Navigation
- **Desktop header links:** `body-md` at 600 in `secondary`. The active link is 800, teal, with a 2px underline.
- **Account sidebar:** 256px of icon-leading items. The active item has a solid teal fill with white text, and Sign Out is red.
- **Mobile bottom nav:** Discover / Tickets / Venues / Profile. The active item is teal with a filled icon, and labels are 10px uppercase.

## 6. Storefront shell

| Surface | Desktop (`lg+`) | Mobile (`<lg`) |
|---|---|---|
| Top bar | Sticky 96px, `bg-surface/90` with blur and a bottom hairline. Holds the 56px logo, nav, search, cart and **Sign In** | 60px glass app bar with menu, a centered 40px logo, and a teal cart |
| Bottom | — | 96px tab bar (safe-area inset included) |
| Footer | Full `SiteFooter` everywhere except `/checkout`, which uses `CompactFooter` (`desktopFooterForPath`) | Centered `MobileFooter` with legal links, logo and © |
| Content | 1280px container, 48px margins | 16px margins, `pb-24` for the tab bar |

**Breakpoint:** the code switches at **`lg` (1024px)**. Component comments and `AGENTS.md` still say `md`, so trust the classes.

## 7. Layout & spacing
- Uses a 4px base unit. Stacks are 8, 16 and 32px, with `stack-lg` between sections.
- Grids use 24px gutters. Premiere is 3 columns, Upcoming is 4, the directory is 3, the event detail is 7/5, and cart/checkout is `1fr 380px`.
- Bands alternate between the page colour (`#F8F9FA`) and white `surface-container-lowest` to separate sections without rules.

## 8. Content & voice
- **Title Case** for CTAs and section titles: Book Now, Get Tickets, Add to Cart, View Full Calendar, Premiere Events, Never Miss a Show.
- **Sentence case** for status and help text: "Hold expired", "Your cart is empty", "Tickets will be sent to your account email.", "Continue to payment".
- **UPPERCASE** for badges, eyebrows and filters: ON SALE, FEATURED, OCT 24 • JAKARTA, ALL EVENTS.
- **Dates:** "Friday, October 24, 2026", "Doors 8:00 PM", and chips as caps month plus 2-digit day.
- **Name:** the product is **Nextkt** (title, ©, logo alt). The logo wordmark reads **NexTicket**. "Artist Tickets" is a legacy codename and should not appear in new copy.

## 9. Do's and Don'ts

### Do:
- Use real `rounded-*` values knowingly: 4px buttons, 8px cards, 12px pills. Write `9999px` for true circles.
- Keep teal for actions and prices, navy for text, and gold for VIP.
- Put white text over photography only with the black/80 scrim or a glass surface.
- Use Material Symbols Outlined at 20–24px, with `FILL 1` for active states.
- Design the desktop and mobile compositions separately.

### Don't:
- Don't assume `rounded-full` is a circle, or that `h-14`/`h-15`/`h-16` are Tailwind defaults (they are 60/96/112px).
- Don't add `dark:` variants or a theme toggle. Dark exists only as scoped featured bands.
- Don't crop the N out of the lockup. Use `assets/icon.svg`.
- Don't introduce a second typeface or a different icon set.
- Don't tint the page warm or use gold decoratively.

## 10. Corrections vs upstream `Nextkt-Frontend/DESIGN.md`
| Upstream says | Code does | Follow |
|---|---|---|
| `name: Artist Tickets` | Product is **Nextkt** (logo: NexTicket) | Nextkt |
| `rounded.full: 9999px`, `lg: 0.5rem`, `xl: 0.75rem` | `full` = 12px, `xl` = 8px, `lg` = 4px, DEFAULT = 2px | Code |
| `label-caps` tracking 0.2em | 0.05em (0.2em only on hero kickers) | Code |
| Carousel arrows are "full circle" | `rounded-full` renders 12px squircles | Code (12px) |
| Hidden below `md` | Layouts split at `lg` | `lg` |
| — | `text-headline-md-mobile` is used on mobile cards but is **not defined** | Treat as `headline-md` (24px) |
