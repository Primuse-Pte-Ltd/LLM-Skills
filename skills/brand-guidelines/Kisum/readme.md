# Kisum Design System

**One ecosystem. One identity. One backbone.** Kisum is the unified operating platform for the live-music industry — connecting teams, finance, operations, and workflows in one central system, powered by the most comprehensive data infrastructure in live music (artists, venues, agents, and market intelligence in one place). This design system governs every Kisum product surface: a **web app** and a **mobile app** spanning Promoters, Artists, Venues, Admin, Finance, Checkout, and the marketing Website.

> **Creative North Star — "The Booking Brief":** a corporate-modern research desk with an editorial twist, built for live-music decisions. Calm, information-dense, typographically precise. The system serves workflow, not spectacle. Explicitly **not** generic SaaS cream UI.

## Sources
This system was distilled from materials provided by the Kisum team (store them for reference; do not assume the reader has access):
- **`Design/` codebase** (read-only, mounted) — the canonical `DESIGN.md` design-system spec plus ~20 real product-surface HTML recreations (booking marketplace, offers, requests, artist overview, listings management, agencies directory, discography, global rankings, platform analytics). The full spec is `uploads/DESIGN.md`.
- **`uploads/DESIGN-light.md`, `uploads/DESIGN-dark.md`** — light/dark token variants of the "Analyst-Confident" system.
- **Brand assets:** `uploads/{logo,textlogo,icon,logo-icon}.svg` — copied into `assets/`.
- Canonical published spec referenced in source: `docs.kisum.dev/frontend/3-0-kisum-design-system` (not fetched here).

---

## CONTENT FUNDAMENTALS
How Kisum writes.

- **Voice:** analyst-confident — precise, calm, declarative. It reads like a research desk briefing a decision-maker, never like marketing hype.
- **Person:** addresses the operator as **you** ("Your booking pipeline at a glance", "Negotiate directly with top-tier talent management"). Product describes itself in third person ("Kisum connects…").
- **Casing:** **Sentence case** everywhere for headings, buttons, and body. **UPPERCASE** is reserved for small eyebrow labels and metadata (`LISTING VIA`, `TERRITORY`, `MANAGEMENT`) with wide letter-spacing. Never all-caps body copy.
- **Tone:** factual and metric-anchored. Copy pairs claims with numbers and context ("745.9M followers across all platforms", "21 metrics • excludes views, plays, likes"). Disclaimers are direct and risk-aware ("Proceeding is at the promoter's risk.").
- **Density:** short, scannable. Titles are nouns ("Marketplace", "Booking Requests", "Top Songs"). Descriptions are one crisp sentence.
- **Numbers:** abbreviated and tabular (745.9M, 3.4B, $12.4M, 6.2d). Trends carry a sign and a delta (−1.1d, +4.2%).
- **Emoji:** none. Iconography carries visual meaning instead.
- **Vibe:** "controlled power" — the system is robust, predictable, exceptionally organized.

Example copy: *"Discover exclusive artist listings and premium availabilities. Negotiate directly with top-tier talent management in a secure, transparent environment."*

---

## VISUAL FOUNDATIONS
- **Color:** purple-centric on cool neutrals. **Kisum Purple `#8466AC`** is the single brand accent — ranks, count badges, one primary CTA per view, active nav. Cool zinc/gray carry the shell (`#F9FAFB` page, `#F4F4F5` shell, `#FFFFFF` cards). See tokens in `tokens/colors.css`.
  - **The Purple Budget Rule:** purple on ≤10% of any screen. If purple is everywhere, hierarchy collapses into generic SaaS.
  - **The No-Cream Rule:** never tint the page background warm. Neutrals stay cool; warmth comes only from artist imagery.
- **Type:** **Manrope** for display/headings (600–800, tight tracking) and **Inter** for body/label/data (400–700). Utilitarian-analyst, not editorial-magazine. Prefer 14px body on dense surfaces (**The Density Rule**); step up only for a hero name or lead KPI. Numeric data uses tabular figures.
- **Backgrounds:** flat solid surfaces. No gradient wallpaper, no textures, no patterns. The only gradients are protection scrims over artist photography (dark-to-transparent, bottom-up) on listing cards.
- **Cards & containers:** white surface, **1px `#F3F4F6` border at rest** (→ `#E4E4E7` on hover), **`12px` (`--radius-card`) corners**. Buttons use `6px`; branded CTAs and pills use full-round. No card-in-card-in-card nesting.
- **Dark mode:** ships a charcoal `.dark` token scope (add `class="dark"` to a root). Canvas `#0E0E11`, cards `#1E1E24`, shell `#151518`; text `#E4E1E9` / muted `#9D99A6`. Purple *fills* stay `#8466AC` (white text legible); purple used as *text/badges* lifts to `#CDB4F0` for contrast. Avoid heavy shadows in dark — lean on lighter borders + surface fills. The mobile app is the primary dark-mode surface.
- **Elevation:** **flat by default** (**The Flat-By-Default Rule**). Depth from borders + tonal layering (shell → white card → bordered row), not stacked shadows. Shadows appear on **interaction**: hover lift `translateY(-2px)` + soft `0 10px 40px /.04`. Modals use `0 4px 12px /.08`; the primary CTA gets a purple glow.
- **Borders:** hairline 1px. Never a colored left/right accent stripe wider than 1px.
- **Corner radii:** sm 4 · button 6 · base 8 · card 12 · xl 24 · pill full.
- **Animation:** restrained, functional. `200ms` `cubic-bezier(0.4,0,0.2,1)`. Fades and short lifts; no bounces. Respect `prefers-reduced-motion` (swap lifts for border/color shifts).
- **Hover states:** rows lift + gain shadow; titles shift to purple; nav items get a purple-tint wash; icon buttons get a subtle gray background.
- **Press states:** buttons scale to `0.97` (subtle), no color change beyond the hover tone.
- **Transparency & blur:** used sparingly — sticky headers use `backdrop-filter: blur(12px)` over 60–70% white; modal scrims blur the canvas; over-image chips use `blur(8px)` on translucent black.
- **Imagery vibe:** high-quality artist/venue photography treated as decision-quality content, anchored by a dark protection gradient so metadata stays legible. Cool, editorial, premium. (This system ships **no** photography — surfaces use purple-gradient placeholders.)
- **Layout:** fixed-grid management philosophy. 1280px container (`--container-max`), `max-w-7xl` page section, 12-column dense grids, collapsing to 2 then 1 column with 16px mobile margins. App sidebar is fixed-width (`288px`). Vertical rhythm: 8 / 16 / 32.

---

## ICONOGRAPHY
- **Primary set: [Lucide](https://lucide.dev)** — the stroke icon family used across the Kisum app shell (dashboard, calendar, sparkles, bell, search, send, sliders, chevrons-up-down…). **1.75–2px stroke, rounded caps and joins.** Loaded from CDN in the UI kits and the iconography card. This matches the inline SVGs in the source booking surfaces.
- **Material Symbols Outlined** — the **mobile app's** icon set (bottom nav, KPIs, list glyphs), weight 400, optical size 24, filled variant for active tabs; also used in the analyst/overview web surfaces. Loaded via Google Fonts. On mobile it is the primary set; on new web work prefer Lucide.
- **Sizing:** 16px inline with text, 20px for nav/section-source icons, 24px for standalone. Color inherits `currentColor`; purple only when the icon is itself the accent.
- **Emoji / unicode:** never used as icons.
- **Brand marks:** `assets/logo.svg` (full lockup), `assets/textlogo.svg` (wordmark), `assets/icon.svg` (concentric-ring mark), `assets/logo-icon.svg` (collapsed icon mark). All are single-color `#8466AC`; knock out to white on dark/purple surfaces via `filter: brightness(0) invert(1)`. **Do not recolor, redraw, or reconstruct these marks.**

---

## Components
Reusable React primitives (`window.KisumDesignSystem_ff14fa.<Name>`). Grouped by concern under `components/`.

**Core** (`components/core/`)
- **Button** — primary / outline / secondary / ghost / destructive; sizes; `pill`; icons.
- **IconButton** — icon-only management action (ghost / tint / solid).
- **Badge** — count / status / metadata pill (neutral / brand / success / danger / warning / outline).
- **Card** — flat surface container, optional hover lift.
- **Avatar** — image or initials fallback; circle (person) or square (org).

**Forms** (`components/forms/`)
- **Input** — labeled text field, focus ring, error state, leading icon.
- **Select** — labeled dropdown with refined chevron.

**Data display** (`components/data-display/`)
- **StatCard** — KPI / metric block, optional purple highlight.
- **SectionHeader** — signature overview header (title + purple count badge + action).
- **TrackRow** — dense list row (purple rank, thumb, title/subtitle, metric + trend).
- **DataTable** — high-density table, uppercase header, row hover.
- **ArtistCard** — marketplace listing card (imagery header, metadata, action footer).

**Navigation** (`components/navigation/`)
- **Tabs** — detail-tab strip with brand-emphasis active state.
- **NavItem** — app-sidebar nav item (purple active fill, tint hover).

**Mobile** (`components/mobile/`)
- **MobileAppBar** — sticky 64px top app bar (brand/title + actions), light/dark aware.
- **MobileTabBar** — bottom navigation with purple-tint active pill + filled icon.

## UI Kits (`ui_kits/`)
- **`promoters/`** — Kisum Promoters booking platform: app shell (sidebar + header), Dashboard, Marketplace (live search + tabs), Requests table, and an interactive Send-Enquiry modal → toast.
- **`artist-insights/`** — Artist Insights analytics: hero + detail tabs, KPI bar, Top Songs, Audience-by-Platform chart.
- **`mobile/`** — Kisum mobile promoter app in a phone frame with a **live light/dark toggle**: Dashboard, Rankings, Artists, AI Chat, bottom-nav routing.

## Foundations (`guidelines/`)
Specimen cards for the Design System tab: brand purple scale, neutrals, semantic states, Manrope/Inter/label type, spacing scale, radii, elevation, logo usage, iconography, and the four Named Rules.

---

## Index / manifest (root)
- `styles.css` — the single entry point consumers link (only `@import` lines).
- `tokens/` — `fonts.css`, `colors.css`, `typography.css`, `spacing.css`, `radii.css`, `elevation.css`.
- `components/{core,forms,data-display,navigation,mobile}/` — primitives (`.jsx` + `.d.ts` + `.prompt.md`) with one showcase card each.
- `ui_kits/{promoters,artist-insights,mobile}/` — full-screen product recreations (web + mobile).
- `guidelines/*.card.html` — foundation specimen cards.
- `assets/` — logo, textlogo, icon, logo-icon (SVG).
- `thumbnail.html` — homepage tile.
- `SKILL.md` — Agent-Skills-compatible entry point.

## Caveats & substitutions
- **Fonts** are loaded from Google Fonts CDN (Manrope + Inter). No local font binaries were provided — swap `tokens/fonts.css` for self-hosted `@font-face` if needed.
- **Icons:** Lucide (CDN) is used as the primary set, matching the source app's inline SVGs; Material Symbols is documented as the secondary/analyst set.
- **No photography** ships with the system; UI kits use purple-gradient placeholders.
- **Mobile** is recreated in `ui_kits/mobile/` (light + dark) from the provided mobile source screens. Additional mobile flows (AI chat history, company/artist detail, user profile) exist in the source and can be added on request.
