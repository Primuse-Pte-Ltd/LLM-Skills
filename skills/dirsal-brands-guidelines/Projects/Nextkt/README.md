# Nextkt Design System

**Every show. One place.** Nextkt is a standalone ticketing platform. Its consumer storefront is where fans discover concerts, festivals, comedy and theatre, pick GA/VIP/table tickets, and check out against a 10-minute hold. This design system governs that storefront (`3- Nextkt/modules/Nextkt-Frontend`, Next.js 16 + Tailwind v3) on both its **desktop** and **mobile** layouts.

> **Creative North Star — "House Lights Down":** a calm, well-lit lobby that opens onto a stage. The chrome is quiet (navy ink on `#F8F9FA`, white cards, hairline borders) so that full-bleed artist photography, glass and a black scrim provide the drama. It is editorial and premium, and every action is teal.

## Sources
This system was distilled entirely from the storefront codebase (store these for reference; do not assume the reader has access):
- **`Nextkt-Frontend/` codebase:** `tailwind.config.ts` (the M3 token set, the remapped radius scale, the type ramp), `app/globals.css` (glass utilities, hero scrim, carousel easing, remapped `h-13`…`h-16`), `app/layout.tsx`, and every storefront page and component (`page.tsx`, `events/`, `events/[slug]/`, `cart`, `checkout`, `account/`, `site-header`, `hero-carousel`, `ga-ticket-box`, `cart-view`, `hold-countdown`, `mobile-app-bar`, `mobile-bottom-nav`, `tickets-view`, the footers).
- **`uploads/DESIGN.md`:** the canonical spec, reconciled against the code (§10 lists where the upstream file is stale).
- **`uploads/DESIGN-light.md`:** the upstream `Nextkt-Frontend/DESIGN.md`, verbatim (codename "Artist Tickets").
- **`uploads/DESIGN-dark.md`:** the "Dark Editorial" featured-zone scope.
- **Brand assets:**
  - `public/images/logo.svg` (NexTicket lockup) and `public/images/icon.svg` (N mark) are copied into `assets/` as `logo.svg`, `icon.svg` and `logo-icon.svg`.
  - `assets/textlogo.svg` is the text-only NexTicket wordmark (brand-supplied; not in `public/images/`).
  - `uploads/` also keeps `logo-v1.svg` (the retired lockup) and `app-icon.svg` (the favicon tile from `app/icon.svg`).

---

## CONTENT FUNDAMENTALS
How Nextkt writes.

- **Voice:** premium, inviting and brief. It sounds like a good box office rather than a hype machine: "Never Miss a Show", "Discover live experiences happening near you soon."
- **Person:** addresses the fan as **you** ("Your journey to the stage starts here", "Tickets will be sent to your account email.").
- **Casing:**
  - **Title Case** for CTAs and section titles: Book Now, Get Tickets, Add to Cart, View Full Calendar, Premiere Events, Upcoming Events.
  - **Sentence case** for status, help and error text: "Hold expired", "Your cart is empty", "Continue to payment".
  - **UPPERCASE** for badges, eyebrows and filters: ON SALE, FEATURED, OCT 24 • JAKARTA, ALL EVENTS.
- **Money:** Indonesian Rupiah with `id-ID` grouping: `Rp 450.000`, `From Rp 350.000`, `Rp 1.250.000`. Use tabular numerals.
- **Dates & times:** "Friday, October 24, 2026", "Doors 8:00 PM". Chips show a caps month over a 2-digit day (`NOV` / `02`).
- **Eyebrows** join date and city with a bullet: `OCT 24 • JAKARTA`. Venue lines join with a comma ("Istora Senayan, Jakarta") or a bullet on compact cards.
- **Urgency** is factual, never shouty: "Selling fast", "12 available", "10:00 left to pay", "Your hold has expired — please re-add your tickets."
- **Name:** the product is **Nextkt** (page titles, ©, logo alt). The logo wordmark reads **NexTicket**. "Artist Tickets" is a legacy codename that still leaks into a few strings, so don't use it in new copy.
- **Emoji:** none.

Example copy: *"Sign up for early access to pre-sales and exclusive artist announcements tailored to your taste."*

---

## VISUAL FOUNDATIONS
- **Color:** logo-derived teal on cool neutrals. See `tokens/colors.css`, where M3 names mirror Tailwind 1:1.
  - **Teal `#1C6E87`** (`--primary`) covers CTAs, links, the active nav underline, prices, eyebrows, the focus ring and the cart badge. **Steel `#417292`** (`--primary-container`) is its hover, the 60px Add to Cart fill, the mobile newsletter card and the GA tier.
  - **Navy `#1D1E4C`** is the text colour (`--on-surface`), not a surface. Body text is `#4A5560` and meta is `#5F5E5E`.
  - The page is `#F8F9FA`, cards and panels are `#FFFFFF`, tonal steps are `#F3F4F5` and `#EDEEEF`, and hairlines are `#C3C7CC`.
  - **The Teal-Is-Action Rule:** if it's teal, it's tappable, a price, or an eyebrow. Never use teal as a decorative wash.
  - **The Gold-Is-Earned Rule:** gold `#D4AF37` means the VIP tier or loyalty and nothing else. It never appears on buttons, links or placeholders.
  - **Status:** On Sale `#10B981`, Sold Out `#6B7280`, low stock/error `#FFDAD6` with `#93000A`, error text `#BA1A1A`. **Tiers:** GA steel, VIP gold, Tables navy.
- **Type:** **Inter only** (400–800), with hierarchy from scale and caps.
  - Display is 48px/1.1 at weight 700 with −0.02em tracking. Section titles are 32px at 600, card titles and "Select Tickets" 24px at 600, and body 18px or 16px.
  - `label-caps` is 12px/700 uppercase at **0.05em**. Hero kickers widen to **0.2em** in pale teal `#A7D8E4`.
- **Backgrounds:** flat, cool surfaces. Bands alternate page colour and white to separate sections without rules. The only gradients are photo scrims (`hero-gradient`: black/80 → 0 from the bottom), the event hero's fade to the page colour, and two soft blurred blobs on the teal newsletter panel.
- **Cards & containers:** white or `#F3F4F5` fill, a 1px `#C3C7CC` border (or `outline-variant/30` on soft panels), and **8px** corners (`rounded-xl`). Featured home cards use 4px. There is no card-in-card nesting beyond tier rows inside the ticket box.
- **The Radius Trap:** `tailwind.config.ts` remaps the scale. `rounded` = 2px, `rounded-lg` = **4px** (buttons, inputs), `rounded-xl` = **8px** (cards), and `rounded-full` = **12px** (steppers, chips, icon buttons, which are *not* circles). `rounded-2xl` = 16px (modals). Use a literal `9999px` for true circles such as avatars.
- **Heights are remapped too:** `h-13` 56px (the logo), `h-14` 60px (app bar, CTA), `h-15` 96px (header, tab bar), `h-16` 112px.
- **Dark mode:** the storefront ships **light-only**, with zero `dark:` classes and no toggle. `tokens/colors.css` provides a **Dark Editorial `.dark` scope for featured bands only**:
  - The canvas is `#191C1D`, cards `#2E3132`, and text `#F0F1F2` / `#C3C7CC`.
  - Teal fills stay `#1C6E87`, but teal text lifts to `#A7D8E4`.
  - Borders are white at 12–20%. There are no shadows on dark.
- **Elevation:** tonal layering and glass rather than shadow stacks.
  - Surfaces are flat at rest.
  - The Select Tickets box and ticket cards get `shadow-sm`.
  - Discovery and directory cards lift to `shadow-md` on hover. Featured cards zoom the image instead.
  - Toasts and menus use `shadow-xl`.
- **Transparency & blur:**
  - The sticky header is `surface/90` with a 12px blur.
  - The mobile app bar is `surface/80` with a 12px blur.
  - `glass-overlay` (white/10, blur 12) for hero secondary buttons and the status chip.
  - `glass-badge` (white/15, blur 8) for "Featured" and "ON SALE" pills on photos.
  - `glass-panel` (white/80) for the QR modal and the Presented-by chip.
- **Animation:** quick and functional.
  - Color transitions take 150ms, image zoom to 1.05 takes 500–700ms, and the carousel slides for 0.7s with `cubic-bezier(.4,0,.2,1)`, auto-advancing every 8s.
  - Scroll reveals use `cubic-bezier(.22,1,.36,1)`.
  - Respect `prefers-reduced-motion`, which disables auto-advance.
- **Hover states:** links go from grey to teal. Primary buttons go from teal to steel, or drop to 90% opacity. Card images zoom and titles turn teal. Tier rows get a teal border. Discovery cards reveal a black/40 **Quick Buy** overlay.
- **Press states:** `active:scale-95` on buttons, and `0.98` on the 60px CTA.
- **Imagery vibe:** full-bleed live-music photography (stage light, crowds, silhouettes), cool and atmospheric, always under a scrim or glass when text sits on it.
  - Aspect ratios: 21:9 desktop hero, 4:5 mobile hero, 16:9 featured, 1:1 discovery, 16:10 directory, 3:4 mobile poster.
  - This system ships **no** photography. Kits use teal/navy "stage" gradients.
- **Layout:** fixed editorial grid with a 1280px container and 48px desktop / 16px mobile margins, 24px gutters, and stacks of 8, 16 and 32px.
  - Grid columns: Premiere 3, Upcoming 4, directory 3, event detail 7/5, cart and checkout `1fr 380px`, account nav 256px.
  - **The Two-Layouts Rule:** desktop and mobile are separate compositions (`hidden lg:block` / `lg:hidden`), not one reflowed layout.
  - Desktop has a sticky 96px header. Mobile has a 60px app bar and a 96px bottom tab bar.
- **The Photo-First Rule:** chrome never competes with imagery. There are no loud backgrounds, no coloured section fills except the one teal newsletter panel, and no decorative illustration.

---

## ICONOGRAPHY
- **Material Symbols Outlined** is the only icon set. The storefront self-hosts it through `components/material-icon.tsx`; this system loads it from Google Fonts in `tokens/fonts.css` as `.ms` / `.material-symbols-outlined`.
  - Weight 400, optical size 24, **`FILL 1` for active states** (active bottom-nav tab, a favourited heart).
  - Common glyphs: `search`, `shopping_cart`, `confirmation_number`, `calendar_month`, `schedule`, `location_on`, `qr_code_2`, `favorite`, `explore`, `stadium`, `person`, `chevron_left/right`, `arrow_forward`, `lock`, `savings`, `redeem`, `delete`, `timer_off`.
- **Sizing:** 14–18px inline with meta text, 20px in inputs and small buttons, 24px in chrome, 48px carousel arrow buttons. Colour inherits `currentColor`, with teal on the mobile cart and active states.
- **Social icons** in the footer (Instagram, Facebook, LinkedIn, Telegram, WhatsApp) are custom inline SVGs in `social-icon.tsx`. The kits approximate them with Material glyphs.
- **Emoji / unicode:** never used as icons.
- **Brand marks:**
  - `assets/logo.svg` is the full **NexTicket** lockup: steel `#417292` N, teal `#488790` "ex" and navy `#1D1E4C` "Ticket". Use it at 56px in the desktop header, 40px in the mobile app bar and 36px in footers.
  - `assets/textlogo.svg` is the text-only **NexTicket** wordmark in navy `#1D1E4C` and teal `#339999`, for tight horizontal slots where the full lockup is too tall. The storefront itself ships only the lockup.
  - `assets/icon.svg` / `assets/logo-icon.svg` is the standalone N mark, single-colour `#3E6F8F`.
  - Knock marks out to white on navy, teal or photos via `filter: brightness(0) invert(1)`.
  - **Never crop the N out of the lockup** (the "e" interlocks with it). **Do not recolor, redraw, or reconstruct these marks.**

---

## Components
Reusable React primitives (`window.NextktDesignSystem_1c6e87.<Name>`), grouped by concern under `components/`.

**Core** (`components/core/`)
- **Button**
  - Variants: primary (teal), container (steel), outline, secondary, inverse, glass, link, destructive.
  - Sizes: sm, md, lg, and `cta` (the 60px Add to Cart bar). Props: `full`, `iconLeft`, `iconRight`. 4px radius with a press scale.
- **IconButton:** ghost / brand / glass (carousel) / floating (mobile back), with an optional teal cart-count badge. 12px radius.
- **Badge:**
  - Tones: on-sale / primary / ga / vip / tables / sold-out / error / neutral.
  - Variants: solid / tint / glass. Caps by default.
- **Card:** white panel with a hairline border, optional hover lift, and `low` / `muted` tones.
- **Avatar:** image or initials, as a circle or a tile.

**Forms** (`components/forms/`)
- **Input:** caps label, leading Material icon, hint, error, 2px teal focus ring.
- **Select:** caps label, `expand_more` chevron.

**Data display** (`components/data-display/`)
- **EventCard:** the four storefront treatments: `featured` (16:9 plus summary and Book Now), `discovery` (1:1 plus Quick Buy), `directory` (16:10 plus glass date), and `poster` (3:4 mobile rail).
- **EventRow:** mobile/list row with a date stack, title, venue, teal price and a heart.
- **TicketTier:** tier row with badge, price, subtitle, availability, pill stepper and a sold-out state.
- **DateChip:** calendar-leaf month/day, as leaf, glass or plain.
- **StatCard:** account KPI tile (icon, value, label).
- **SectionHeader:** section title with subtitle and a teal underlined action.

**Navigation** (`components/navigation/`)
- **Tabs:** `nav` (header links), `underline` (category filter), `chips` (mobile filter), `segmented` (Sign In / Create Account).
- **NavItem:** account-sidebar item with a solid teal active fill and a red danger variant.

**Mobile** (`components/mobile/`)
- **MobileAppBar:** 60px glass top bar with menu, a centered logo and a teal cart with a badge.
- **MobileTabBar:** 96px bottom nav (Discover · Tickets · Venues · Profile), filled teal icon when active.

## UI Kits (`ui_kits/`)
- **`storefront/`:** desktop home (sticky header, 21:9 hero carousel, category bar, Premiere and Upcoming grids, teal newsletter, full footer) plus the **Events directory** (search, filters, sort, directory grid). It is interactive: nav, category filtering, add to cart with a toast.
- **`event-checkout/`:** the GA event detail with the sticky **Select Tickets** box (steppers, points slider), then a cart with a live **10:00 hold countdown**, then checkout, then Payment successful.
- **`mobile/`:** the mobile storefront in a phone frame: Discover, Event (sticky Add to Cart bar), Tickets with the **QR modal**, Venues, Profile, and bottom-nav routing.

## Foundations (`guidelines/`)
Specimen cards for the Design System tab:
- **Brand:** logo and N mark, logo on surfaces, Material Symbols, the four Named Rules.
- **Colors:** teal family, neutrals, status/tiers/error, the Dark Editorial scope.
- **Type:** Inter display, body and labels.
- **Spacing:** spacing scale, radii (the Radius Trap), elevation and glass.

---

## Index / manifest (root)
- `styles.css` is the single entry point consumers link (only `@import` lines).
- `tokens/`: `fonts.css`, `colors.css`, `typography.css`, `spacing.css`, `radii.css`, `elevation.css`.
- `components/{core,forms,data-display,navigation,mobile}/`: primitives (`.jsx` + `.d.ts` + `.prompt.md`) with one showcase card per group.
- `ui_kits/{storefront,event-checkout,mobile}/`: full-screen product recreations (desktop and mobile).
- `guidelines/*.card.html`: foundation specimen cards.
- `assets/`: `logo.svg`, `textlogo.svg`, `icon.svg`, `logo-icon.svg`.
- `uploads/`: `DESIGN.md`, `DESIGN-light.md`, `DESIGN-dark.md`, and the source SVGs.
- `_ds_bundle.js` (compiled components), `_ds_manifest.json` (cards, starting points, tokens), `_adherence.oxlintrc.json` (lint rules for generated code).
- `thumbnail.html` is the homepage tile. `SKILL.md` is the Agent-Skills-compatible entry point.

## Caveats & substitutions
- **Scope:** storefront only. Nextkt also has an operator admin dashboard, a sysadmin console and a developer portal (`developers.nextkt.com`); they are **not** covered here. Reuse these tokens there only as a starting point.
- **Fonts:** production self-hosts Inter and Material Symbols (`public/fonts`). This system loads both from the Google Fonts CDN. Swap `tokens/fonts.css` for `@font-face` rules pointing at the woff2 files if you need them offline.
- **Upstream DESIGN.md is stale** in places; the code wins. It gives radius `full` as 9999px (the code has 12px) and label-caps as 0.2em (the code has 0.05em). The full list is in `uploads/DESIGN.md` §10.
- **Breakpoint:** layouts split at `lg` (1024px) in code, while `AGENTS.md` and some component comments still say `md`.
- **Undefined token:** mobile cards use `text-headline-md-mobile`, which has no Tailwind definition, so it falls back to inherited sizing. This system treats it as `headline-md`.
- **Legacy naming:** "Artist Tickets" still appears in some storefront copy (sign-in prompt, cookie banner, loyalty page, about/artists/venues metadata). Treat it as a bug; the brand is Nextkt.
- **No photography** ships with the system. The UI kits use teal/navy gradient placeholders, never gold.
- **Dark Editorial** is a documented scope, not a shipped theme. Use it for featured bands only.
