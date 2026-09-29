---
name: Kisum
description: Platform-wide analyst-confident design system for all Kisum product surfaces (Admin, Promoters, Artists, Venues, Finance, Checkout, Website)
colors:
  kisum-primary: "#8466AC"
  kisum-accent: "#9A7AFF"
  kisum-tint: "#F3EEF8"
  sidebar-bg: "lab(98.26% 0 0)"
  main-bg: "#FFFFFF"
  ink: "#18181B"
  surface: "#FFFFFF"
  shell: "#F4F4F5"
  body-bg: "#F9FAFB"
  border-subtle: "#F3F4F6"
  muted-text: "#71717A"
  danger: "#D34848"
  md-surface: '#faf8fd'
  md-surface-dim: '#dbd9de'
  md-surface-bright: '#faf8fd'
  md-surface-container-lowest: '#ffffff'
  md-surface-container-low: '#f5f3f7'
  md-surface-container: '#efedf2'
  md-surface-container-high: '#e9e7ec'
  md-surface-container-highest: '#e3e2e6'
  md-on-surface: '#1b1b1f'
  md-on-surface-variant: '#4a454f'
  md-inverse-surface: '#303034'
  md-inverse-on-surface: '#f2f0f4'
  md-outline: '#7b7580'
  md-outline-variant: '#ccc3d0'
  md-surface-tint: '#6e5095'
  md-primary: '#6a4d91'
  md-on-primary: '#ffffff'
  md-primary-container: '#8466ac'
  md-on-primary-container: '#fffafa'
  md-inverse-primary: '#d8b9ff'
  md-secondary: '#5e5e63'
  md-on-secondary: '#ffffff'
  md-secondary-container: '#e4e1e8'
  md-on-secondary-container: '#65646a'
  md-tertiary: '#5f5f00'
  md-on-tertiary: '#ffffff'
  md-tertiary-container: '#78781d'
  md-on-tertiary-container: '#fffaff'
  md-error: '#ba1a1a'
  md-on-error: '#ffffff'
  md-error-container: '#ffdad6'
  md-on-error-container: '#93000a'
  md-primary-fixed: '#eddcff'
  md-primary-fixed-dim: '#d8b9ff'
  md-on-primary-fixed: '#28074d'
  md-on-primary-fixed-variant: '#55397b'
  md-secondary-fixed: '#e4e1e8'
  md-secondary-fixed-dim: '#c8c5cc'
  md-on-secondary-fixed: '#1b1b20'
  md-on-secondary-fixed-variant: '#47464c'
  md-tertiary-fixed: '#e8e881'
  md-tertiary-fixed-dim: '#cccb68'
  md-on-tertiary-fixed: '#1d1d00'
  md-on-tertiary-fixed-variant: '#494900'
  md-background: '#faf8fd'
  md-on-background: '#1b1b1f'
  md-surface-variant: '#e3e2e6'
typography:
  display:
    fontFamily: "var(--font-manrope), ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 600
    lineHeight: 1.25
    letterSpacing: "-0.025em"
  body:
    fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: "normal"
  label:
    fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.6875rem"
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: "normal"
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  xs: "4px"
  sm: "8px"
  md: "16px"
  lg: "24px"
  xl: "32px"
  container-max: 1280px
  gutter: 1.5rem
  margin-mobile: 1rem
  margin-desktop: 2.5rem
  stack-sm: 0.5rem
  stack-md: 1rem
  stack-lg: 2rem
components:
  button-kisum:
    backgroundColor: "{colors.kisum-primary}"
    textColor: "#FFFFFF"
    rounded: "{rounded.full}"
    padding: "8px 16px"
  button-kisum-hover:
    backgroundColor: "#74579A"
    textColor: "#FFFFFF"
    rounded: "{rounded.full}"
    padding: "8px 16px"
  button-outline:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.kisum-primary}"
    rounded: "{rounded.full}"
    padding: "8px 16px"
  card-surface:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    rounded: "{rounded.xl}"
    padding: "24px"
  overview-badge:
    backgroundColor: "{colors.kisum-tint}"
    textColor: "{colors.kisum-primary}"
    rounded: "{rounded.full}"
    padding: "2px 8px"
backgrounds:
  bg-sidebar:
    css: "background-color: var(--sidebar)"
    token: "{colors.sidebar-bg}"
  bg-main:
    css: "background-color: var(--main)"
    token: "{colors.main-bg}"
css-vars:
  sidebar: "{colors.sidebar-bg}"
  main: "{colors.main-bg}"
---

# Design System: Kisum

## 0. Scope

**This is the single Kisum platform design system.** Every Kisum product UI must follow it:

- `Frontend-Kisum-Promoters`, `Frontend-Kisum-Artists`, `Frontend-Kisum-Venues`
- `Frontend-Kisum-Admin`, `Frontend-Kisum-Finance`, `Frontend-Kisum`, `Frontend-Kisum-Website`
- `System-Kisum-Checkout` and other Kisum-branded surfaces in this workspace

Do **not** fork aesthetics per app, module, or persona. Reuse the same tokens, typography, elevation rules, and component patterns.

**Exception:** standalone **Nextkt** ticketing (consumer storefront + operator admin) may retain its logo-derived teal/navy palette until an explicit migration — it is not a Kisum Core module app. See `System-Kisum-Docs` → Frontend Nextkt.

**Canonical source:** `System-Kisum-Docs/src/content/docs/frontend/3-0-kisum-design-system.md` (published at [docs.kisum.dev](https://docs.kisum.dev/frontend/3-0-kisum-design-system)). This file is a local Impeccable/design-tool sidecar — keep it in sync with the canonical page.

**Cursor rule:** `.cursor/rules/00-design.mdc` (loads on Kisum frontend UI files).

## 1. Overview

**Creative North Star: "The Booking Brief"**

Kisum reads like a corporate-modern research desk with an editorial twist, built for live-music industry decisions. Surfaces are calm, information-dense, and typographically precise: operators scan signals, compare metrics, and move to action without wading through decorative UI. The system serves workflow, not spectacle.

This is explicitly **not** generic SaaS cream UI: no warm-tinted near-white wallpaper, no endless gray card stacks, no purple CTAs on every row. Kisum purple is an accent for emphasis and brand continuity, not the dominant surface treatment. Detail tabs, list views, admin tables, and workflow surfaces across **all** Kisum apps share one visual language so users do not relearn layout per module.

**Key Characteristics:**

- Analyst-grade density with scannable hierarchy (section headers, rank numerals, metric blocks)
- Refined management-dashboard polish: generous whitespace, disciplined grids, and listings treated as decision-quality content cards
- Flat-by-default surfaces; depth from borders, tint, and spacing rather than heavy shadow stacks
- Inter for UI body copy; Manrope for semibold section titles and display-weight emphasis
- Kisum purple (`#8466AC`) reserved for ranks, badges, primary actions, and focus moments
- ShadCN/Radix primitives with Tailwind 4 tokens; extend patterns, do not fork aesthetics per screen

## 2. Colors

A restrained product palette: cool neutrals carry the shell, white cards hold content, Kisum purple marks decision points.

### Primary

- **Kisum Purple** (`#8466AC` / kisum-600): Primary brand accent. Section count badges, rank numerals, `kisum` button fills, top-loader accent (`#9A7AFF`). Use for emphasis, not backgrounds.
- **Kisum Accent** (`#9A7AFF` / kisum-500): Lighter highlight for theme-color, hover states, and chart emphasis. Pair with purple-600 for legibility on white.
- **Kisum Tint** (`#F3EEF8`): Soft purple wash for pills and chips (e.g. Overview section count badges). Never as full-page background.
- **Material Accent Tokens** (`md-*` in frontmatter): Imported low-level tonal tokens kept for compatibility/reference only. Do not let them override the canonical Kisum semantic tokens (`kisum-primary`, `surface`, `body-bg`, `ink`).

### Neutral

- **Ink** (`#18181B` / zinc-950): Primary text on light surfaces. Body and titles on cards.
- **Muted Ink** (`#71717A` / zinc-500): Secondary labels, subtitles, metadata. Must still meet 4.5:1 on white; bump toward ink if contrast fails on tinted surfaces.
- **Surface** (`#FFFFFF`): Card and row backgrounds on detail sections, list rows, and admin panels.
- **Shell** (`#F4F4F5` / zinc-100): App chrome at `lg+` (`lg:bg-zinc-100` on `<html>`).
- **Body Background** (`#F9FAFB` / gray-50): Page canvas inside the shell — see **§6 App shell (mandatory)**; never replace with white or cream.
- **Sidebar Background** (`lab(98.26% 0 0)` / `--sidebar`): Cool near-white sidebar panel via `bg-sidebar` (token `sidebar-bg`).
- **Main Background** (`#FFFFFF` / `--main`): White main content panel via `bg-main` or `bg-background` on `MainColumn` / `<main>` (token `main-bg`).
- **Border Subtle** (`#F3F4F6` / gray-100): Row and tile borders at rest (`border-gray-100`).
- **Neutral Slate** (`#5E5E62`): Legacy management-surface text reference; prefer `Ink` for primary text and use this only where existing components already depend on it.

### Tertiary

- **Danger** (`#D34848`): Destructive actions and error emphasis. Hover `#B53030`.

### Named Rules

**The Purple Budget Rule.** Kisum purple appears on ≤10% of any given screen. If purple is everywhere, hierarchy collapses and the UI reads as generic SaaS.

**The No-Cream Rule.** Do not tint the page background warm (cream, sand, parchment). Neutrals stay cool (zinc/gray). Warmth comes from artist imagery and data, not body bg.

## 3. Typography

**Display Font:** Manrope (local, `--font-manrope`) with ui-sans-serif fallback  
**Body Font:** Inter (Google, `display: swap`) with system-ui fallback  
**Label Font:** Inter (same stack as body)

**Character:** Inter keeps dense tables and metadata readable; Manrope adds confident weight to section titles without switching to a display serif. Pairing is utilitarian-analyst, not editorial-magazine.

### Hierarchy

- **Display** (600, `text-lg` / 1.125rem, tight tracking): Overview section headers (`OverviewSectionHeader`), tab-level titles. `text-wrap: balance` on multi-line headings.
- **Headline** (600, `text-sm`–`text-base`): Row titles, artist names in lists, KPI values.
- **Title** (500–600, `text-sm`): Card titles, semibold metadata labels.
- **Body** (400, `text-sm` / 0.875rem, line-height 1.5): Descriptions, bio preview. Cap prose at ~65–75ch (`max-w-3xl` on biography blocks).
- **Label** (600, `text-[11px]`–`text-xs`): Count badges, platform pills, freshness badges. Sentence case preferred; avoid all-caps body copy.
- **Data fields** (400–600, `text-sm`, tabular where numeric): Use Inter for scan accuracy across rankings, listings, metrics, and management rows.

### Named Rules

**The Density Rule.** Prefer `text-sm` body on analyst surfaces. Step up to `text-base` only for hero artist name or primary KPI, not every paragraph.

## 4. Elevation

Mostly flat surfaces. Depth is conveyed through **tonal layering** (shell → white card → bordered row) and **1px borders**, not stacked shadows. Shadows appear as a **response to interaction** (`hover:shadow-sm`, `hover:-translate-y-0.5` on `TrackRow`), not at rest on every container.

ShadCN `Card` uses `shadow-sm` at rest; on dense list/overview surfaces prefer the flatter row pattern (border-only at rest, shadow on hover). Do not nest card-in-card-in-card stacks.

### Shadow Vocabulary

- **Hover lift** (`box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05)`): Track rows and interactive tiles on hover only.
- **Focus ring** (`ring-[3px] ring-ring/50`): Buttons and inputs via ShadCN focus-visible treatment.
- **Modal / Popover depth:** Standard dialog shadow with backdrop blur only where focus isolation is needed for a management task.

### Named Rules

**The Flat-By-Default Rule.** Surfaces are flat at rest. Shadows signal interactivity, not decoration.

## 5. Components

### Buttons

- **Shape:** `rounded-md` (6px) for default ShadCN variants; `rounded-full` for branded `kisum` / `kisum_outline` CTAs.
- **Primary (kisum):** `bg-kisum-600` (`#8466AC`), white text, `shadow-xs`, hover `bg-kisum-600/90`.
- **Outline (kisum_outline):** White background, `border-kisum-600`, purple text, hover `bg-kisum-600/10`.
- **Icon buttons:** Prefer icon-only or icon-leading management actions with subtle hover backgrounds, especially edit/delete/overflow actions.
- **Hover / Focus:** `transition-all`; focus-visible ring 3px at 50% ring color. Destructive uses `kisum_destructive` full-round variant.

### Chips

- **Overview badge:** `rounded-full bg-[#F3EEF8] px-2 py-0.5 text-[11px] font-semibold text-[#8466AC]`.
- **Genre / status pills:** Small rounded pills on biography; positive/negative accent chips for boolean states.

### Cards / Containers

- **Corner Style:** `rounded-xl` (12px) for overview rows and ShadCN cards.
- **Background:** White (`bg-white`) on gray shell; avoid `bg-gray-100` cards unless grouping personnel under agencies.
- **Border:** `border-gray-100` at rest, `border-gray-200` on hover.
- **Internal Padding:** `p-2.5` compact rows; `p-4`–`p-6` for section containers.

### Inputs / Fields

- **Style:** ShadCN input with `border-input`, `rounded-md`, background `bg-background`.
- **Filter bars:** Treat filters as one cohesive control group. Use segmented controls for binary/mode toggles and Select dropdowns with refined chevrons for option sets.
- **Labels:** Prefer labels above inputs or compact `label-sm` treatment; avoid floating labels unless already present in the component family.
- **Focus:** Ring-based focus-visible per ShadCN defaults.
- **Error:** `aria-invalid` ring destructive/20.

### Navigation

- **App shell:** Sidebar + top bar (or equivalent module shell); gray body canvas, white main panel, sidebar on `bg-sidebar`. Same treatment in Admin, persona apps, Checkout, and every other Kisum frontend (Nextkt excepted).
- **App sidebar structure:** **Mandatory** — Promoters, Venues, and Artists MUST use the canonical app-shell tree (see **§6**); only `SideNavBody` menu may differ.
- **Detail tabs:** Horizontal tab strip on entity detail pages; active state uses brand emphasis without full purple fill of the tab bar.

## 6. App shell (mandatory — all Kisum frontends)

Every Kisum product frontend MUST use this shell layering. Do not fork per app, module, or persona. **Nextkt** is the only documented exception.

### `<body>` (mandatory)

The root layout `<body>` MUST always use **exactly** these classes (no substitutions, no omissions):

```tsx
className="min-h-screen bg-gray-50 antialiased dark:bg-gray-900"
```

This is the page canvas. It must stay cool gray — not white, not cream, not zinc-100 alone.

### Sidebar desktop root (mandatory)

The ShadCN `Sidebar` desktop wrapper (`data-slot="sidebar"`) MUST always include this **exact** base class string:

```tsx
'group peer hidden text-sidebar-foreground xl:block'
```

State, variant, and collapsible classes may be appended via `cn()`; do not replace or drop the mandatory base. Required on **all** Kisum frontends that use the shared sidebar pattern.

Reference: `Frontend-Kisum-Promoters/src/components/ui/app-shell.tsx` (`SideNav` desktop block).

### Kisum app-shell primitive naming (Promoters canonical)

See full table in `System-Kisum-Docs` design system page. Primitives live in `components/ui/app-shell.tsx`; app composition in `components/app-shell/`.

**In-scope (mandatory):** Promoters (canonical), Venues, Artists — copy-per-repo tree. **Out of scope:** Admin, Checkout, Website, legacy, Nextkt. **Finance:** full visual redesign done (2026-07-13) — transparent desktop sidebar on body canvas, white `bg-main` panel, gradient-free CTAs on shared kisum `Button`, flat-at-rest surfaces, Manrope `h1–h3`, charcoal dark tokens; full Promoters `AppShellProvider` + `@main` tree still future work (see app-shell normalization plan).

**§6.3–§6.6** (canonical folder tree, `@main` route wiring, exceptions, migration checklist): see [`System-Kisum-Docs/src/content/docs/frontend/3-0-kisum-design-system.md`](System-Kisum-Docs/src/content/docs/frontend/3-0-kisum-design-system.md). Plan: `docs/superpowers/plans/2026-06-27-kisum-app-shell-normalization.md`.

### Surface layering (mandatory)

| Layer | Utility / token | Value | Use |
| --- | --- | --- | --- |
| Page canvas | `bg-gray-50` on `<body>` | `#F9FAFB` | Outermost shell behind side nav + main |
| Side nav | `bg-sidebar` → `var(--sidebar)` | `lab(98.26% 0 0)` | Side nav inner surfaces (`data-sidebar="sidebar"`) |
| Main content | `bg-main` or `bg-background` on `MainColumn` / `<main>` | `#FFFFFF` | Primary work area — always white |
| Cards / boxes / rows | `bg-white` / `bg-surface` + `border-gray-100` | `#FFFFFF` | Content objects on the white main panel |

Wire `--main: #FFFFFF` (or alias `--main` to `--background`) and expose `bg-main` in Tailwind `@theme` where not already present. Cards and panels on the main area use white/surface — not `bg-gray-50` on top of white main unless an existing grouped-subsection pattern already requires it.

### App sidebar structure (mandatory — all Kisum frontends)

**Every Kisum persona frontend in scope (Promoters, Venues, Artists) MUST use the same app-sidebar shell.** Admin, Checkout, Website, legacy base, and **Nextkt** are out of scope. **Finance** uses the same visual shell layering (gray canvas, transparent desktop sidebar riding the body canvas — documented substitution for `bg-sidebar`, visually equivalent —, white `bg-main` main, Kisum purple accent) on its existing `Sidebar` + `MainLayoutClient` — structural `AppShellProvider` migration remains optional Phase 7.

**Only `SideNavBody` navigation items may differ per module** (menu keys, optional secondary blocks such as events). Header, collapse behavior, company switcher row, footer user block, guest upsell slot, spacing, icons, and colors **MUST match** the canonical Promoters implementation.

**Canonical reference (do not reinvent):**

- `Frontend-Kisum-Promoters/src/components/app-shell/app-shell-layout.tsx`
- `Frontend-Kisum-Promoters/src/components/app-shell/side-nav/app-sidebar.tsx`
- `Frontend-Kisum-Promoters/src/components/app-shell/side-nav/nav-user.tsx`
- `Frontend-Kisum-Promoters/src/components/app-shell/side-nav/companies-switcher.tsx`
- `Frontend-Kisum-Promoters/src/components/app-shell/side-nav/sidebar-package-plan.tsx`
- `Frontend-Kisum-Promoters/src/components/ui/app-shell.tsx` (primitives: `SideNavToggle`, `SideNavRail`, collapse group)

#### Mandatory component order

Render inside `<SideNav collapsible="icon" className="z-40">` in **exactly** this order:

1. **`SideNavHeader`** — logo row + company switcher row
2. **`SideNavBody`** — module menu only (variable)
3. **Guest upsell slot** (conditional — see below)
4. **`SideNavFooter`** — `NavUser`
5. **`SideNavRail`** — last child; edge collapse toggle

#### Side nav root (mandatory)

```tsx
<SideNav collapsible="icon" className="z-40">
  {/* …header, body, guest?, footer… */}
  <SideNavRail />
</SideNav>
```

- **`collapsible="icon"`** is mandatory — desktop collapses to an icon rail, not offcanvas-only hide.
- **`className="z-40"`** on the side nav root (stacking above main chrome where needed).
- **`SideNavRail`** MUST be present as the final child.

#### Logo row (mandatory — inside `SideNavHeader`)

Wrapper classes (exact):

```tsx
className="mb-6 flex w-full items-center pt-2.5 group-data-[collapsible=icon]:flex-col-reverse group-data-[collapsible=icon]:pt-2 group-data-[collapsible=icon]:pl-0"
```

| Asset | Expanded | Icon-collapsed (`group-data-[collapsible=icon]`) |
| --- | --- | --- |
| Full wordmark | `/logo.svg`, `className="flex h-auto w-32 group-data-[collapsible=icon]:hidden"` | hidden |
| Icon mark | `/logo-icon.svg`, `className="hidden h-auto w-6 group-data-[collapsible=icon]:flex"` | visible (`w-6`) |

Both use `alt="KISUM"`. Do not substitute different logos or sizes per module.

#### SideNavToggle (mandatory — expanded header only)

```tsx
<SideNavToggle className="ml-auto group-data-[collapsible=icon]:hidden" />
```

- ShadCN ghost icon button with **`PanelLeftIcon`** (from `app-shell.tsx` primitive).
- **`ml-auto`** in the logo row when expanded.
- **Hidden when icon-collapsed** — expand/collapse in icon mode via **`SideNavRail`**.
- Action: **`toggleSideNav()`** (provided by primitive).

#### SideNavRail (mandatory)

```tsx
<SideNavRail />
```

Thin edge hit area on the side nav border for collapse/expand when the header trigger is hidden. Do not omit or replace with a custom control.

#### Company switcher row (mandatory — below logo row, inside `SideNavHeader`)

Same visual treatment in every module; only eligibility/filter logic may differ internally.

| State | Component | Key classes / behavior |
| --- | --- | --- |
| Loading | Skeleton placeholder | Match Promoters `SkeletonSwitcher` pattern |
| No active company | `NoCompanySelectedPlaceholder` | Dashed border, `Building2` icon, muted “No company selected” copy; icon-only when collapsed |
| Active company | `CompaniesSwitcher` | Row: `bg-gray-200/80 p-2 rounded-md`; `size-10` square avatar; bold name + subtitle; dropdown with `ChevronsUpDown` |

Icon-collapsed: compact avatar (`group-data-[collapsible=icon]:p-0` on row; labels `group-data-[collapsible=icon]:hidden`).

#### SideNavBody (module-specific — menu only)

Navigation items, grouping, and optional module-only blocks (e.g. Promoters `nav-events.tsx`) live here. **Do not** move header, footer, guest upsell, or logo into the body.

#### Guest upsell slot (mandatory pattern when guest role applies)

Between **`SideNavBody`** and **`SideNavFooter`**, when the user has guest access and profile is loaded:

**Expanded (icon rail hidden content):**

- Wrapper: `className="group-data-[collapsible=icon]:hidden"`
- **`SidebarPackagePlan`** card: `rounded-none border-x-0 py-4 shadow-none`; title “You're currently using free plan”; full-width **`variant="kisum"`** button, `rounded-full py-5`, label **Subscribe Plan**

**Icon-collapsed:**

- Hide the card wrapper above
- Show **`BellRingIcon`** button: `className="m-2.5 hidden size-8 rounded-md p-0 text-kisum group-data-[collapsible=icon]:flex hover:bg-kisum-100/75"`, `variant="secondary"`
- **`Tooltip`**: content **“Subscribe to a plan”**, `side="right"`, `align="center"`
- Same **`onClick`** as the expanded subscribe CTA (opens subscription flow)

Omit the entire slot when not guest or while profile is loading.

#### SideNavFooter — NavUser (mandatory)

```tsx
<SideNavFooter id="sidebar-footer-user" data-onborda="sidebar-footer-user">
  {/* SkeletonUser while loading; NavUser when ready */}
</SideNavFooter>
```

**Footer trigger row** (`SideNavMenuButton size="lg"`):

- Container: `min-h-16`, `hover:bg-kisum-50`
- **Avatar:** `size-12 rounded-full border border-gray-200` → `size-8` when icon-collapsed
- **Company pill** (when company selected): `rounded-md border border-gray-200 px-2 py-1 text-xs font-medium text-kisum-600`
- **User name:** `font-bold capitalize`, truncated
- **Chevron:** `ChevronsUpDownIcon` with `ml-auto size-4`

**Dropdown** (desktop: `side="right"`, `align="end"`, `min-w-80`): user summary, switch company, profile, companies, plan & billing, get started, sign out — mirror Promoters `nav-user.tsx` structure and icon colors (`text-kisum-600` for nav icons, `text-red-500` for sign out).

#### Sidebar icons, spacing, and colors (mandatory)

- **Surface:** inner sidebar **`bg-sidebar`**, text **`text-sidebar-foreground`** — not main-panel white.
- **Spacing:** header/footer primitives use ShadCN **`p-2`**; logo row **`mb-6 pt-2.5`** (collapsed: **`pt-2 pl-0`**).
- **Purple accent (sidebar):** company pills, guest CTA, footer hover **`hover:bg-kisum-50`**, guest bell **`text-kisum`** / **`hover:bg-kisum-100/75`**, dropdown icons **`text-kisum-600`** — respect **Purple Budget Rule**.
- **Neutrals:** company row **`bg-gray-200/80`**, borders **`border-gray-200`**, secondary copy **`text-muted-foreground`**.
- **Collapse visibility:** use **`group-data-[collapsible=icon]:*`** selectors on children — do not invent alternate collapse widths, breakpoints, or offcanvas-only sidebars for Kisum module apps.

### Overview / dense list section (signature pattern)

Reference implementations today live in **Promoters** (`OverviewSectionHeader`, `TrackRow`); other apps should match this pattern or extract shared components — do not invent alternate row/card aesthetics.

- **Section header:** `text-lg font-semibold tracking-tight text-gray-900`, optional 20px source icon, purple count badge, right-aligned action (`ml-auto`).
- **Dense row:** Rank or index in purple tabular nums, 44px thumb when media applies, truncated title/subtitle, metric block right-aligned; hover lift `-translate-y-0.5` + `shadow-sm`.

### Listing / Marketplace Cards

- **Editorial Insight Card:** High-quality artist or venue imagery may anchor the card, but the card must remain a management object: clear metadata, status, owner/action context, and a predictable action footer.
- **Status badges:** Float over imagery only when contrast is guaranteed; otherwise place in a dedicated header row.
- **Action footer:** Keep primary view/action and edit/unpublish/manage controls aligned and consistently padded.

## 7. Layout & Spacing

The layout follows a fixed-grid management philosophy for readability and comparison. Keep app content centered in the 1280px container token, use a 12-column grid for dense listing/filter surfaces, and collapse cleanly to 2 columns on tablet and 1 column on mobile with 16px margins.

### Page main section (mandatory — Promoters, Artists, Venues)

Every `@main` page (below the sticky app header / breadcrumb bar, above page content) MUST wrap its primary content in the canonical page container. Do **not** add extra horizontal padding on the app-shell `{children}` wrapper — padding lives on this container only.

**Container (mandatory class string):**

```tsx
mx-auto flex w-full max-w-7xl flex-1 flex-col gap-12 p-6 sm:p-8 lg:p-10
```

Prefer the shared helper in each persona app:

- `PageMainSection` / `PAGE_MAIN_SECTION_CLASS`
- `PageSectionHeader` with `PAGE_SECTION_TITLE_CLASS` + `PAGE_SECTION_DESCRIPTION_CLASS`
- Path: `src/components/app-shell/main-chrome/page-main-section.tsx` (Promoters canonical)

**Page section title (primary `h1` at top of main content):**

```tsx
className="text-4xl font-bold"
```

**Page section description (subtitle directly under that `h1`):**

```tsx
className="mt-2 text-base leading-relaxed text-slate-500"
```

Do not use `text-2xl font-semibold`, `text-muted-foreground`, or ad-hoc `max-w-[1160px]` / `max-w-6xl` / `max-w-5xl` wrappers for standard list and workflow pages. Detail sub-heroes, cards, modals, and tab bodies are excluded.

- **Desktop:** Listing cards may span 4 columns (3 per row) or 3 columns (4 per row) depending on information density.
- **Tablet:** 2-column grid unless data comparison requires a table or horizontal scroll pattern already used elsewhere.
- **Mobile:** 1-column grid, no horizontal overflow.
- **Vertical rhythm:** `stack-sm` (8px) for label/control pairs, `stack-md` (16px) for card internals, `stack-lg` (32px) for major section breaks.

## 8. Do's and Don'ts

### Do:

- **Do** set `<body className="min-h-screen bg-gray-50 antialiased dark:bg-gray-900">` on every Kisum frontend root layout.
- **Do** keep the sidebar desktop root at `group peer hidden text-sidebar-foreground xl:block` and main content white (`bg-main` / `bg-background`).
- **Do** implement **`AppSidebar`** with **`collapsible="icon"`**, logo/logo-icon swap, **`SideNavToggle`**, **`SideNavRail`**, company switcher row, **`NavUser`** footer, and guest upsell slot exactly as in Promoters — **mandatory on Promoters, Venues, Artists.**
- **Do** wrap every `@main` page body in **`PageMainSection`** (or `PAGE_MAIN_SECTION_CLASS`) with **`text-4xl font-bold`** page titles and **`mt-2 text-base leading-relaxed text-slate-500`** subtitles — mandatory on Promoters, Artists, Venues.
- **Do** keep Kisum purple for ranks, badges, and primary CTAs only (The Purple Budget Rule).
- **Do** verify muted text contrast on tinted surfaces; bump `text-muted-foreground` toward ink when close to 4.5:1.
- **Do** respect `prefers-reduced-motion`: replace hover translate lifts with border/color shifts only.
- **Do** pair platform brand colors in charts with labels and numeric context, not color alone.

### Don't:

- **Don't** change the mandatory `<body>` or sidebar desktop root classes per app or route.
- **Don't** fork side nav header, footer, collapse, logo swap, company switcher layout, or guest upsell pattern per module — **only menu items in `SideNavBody` may differ.**
- **Don't** omit **`SideNavRail`**, use `collapsible="offcanvas"` instead of **`collapsible="icon"`**, or hide the logo-icon swap on collapse.
- **Don't** set the main content area or default page panel to `bg-gray-50` — main is white; gray-50 is body-only.
- **Don't** ship generic SaaS cream UI: warm-tinted near-white backgrounds, muted gray card stacks, purple CTAs everywhere, identical icon-heading-text grids.
- **Don't** clone consumer social profiles (Instagram/Spotify artist page layout with engagement-first hierarchy).
- **Don't** add dashboard chaos: competing chart widgets with no clear primary signal on one screen.
- **Don't** use `border-left` or `border-right` greater than 1px as a colored accent stripe on cards or list items.
- **Don't** use gradient text (`background-clip: text`) for headings or metrics.
- **Don't** nest identical card grids (card inside card inside card).
- **Don't** add shell-level `px-4 py-6` padding around `{children}` when pages already use **`PageMainSection`** — avoids double padding.
