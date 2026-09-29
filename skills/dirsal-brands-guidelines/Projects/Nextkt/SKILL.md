---
name: nextkt-design
description: Use this skill to generate well-branded interfaces and assets for Nextkt, either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping.
user-invocable: true
---

Read the readme.md file within this skill, and explore the other available files.
If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out and create static HTML files for the user to view. If working on production code, you can copy assets and read the rules here to become an expert in designing with this brand.
If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions, and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.

## Quick reference
- **Brand:** Nextkt, a consumer ticketing storefront for concerts, festivals, comedy and theatre (Next.js 16 + Tailwind v3, `3- Nextkt/modules/Nextkt-Frontend`). The logo wordmark reads **NexTicket**. North star: "House Lights Down", meaning a calm light lobby that opens onto photo-first, glassy stage moments.
- **Action colour:** Teal `#1C6E87` for CTAs, links, active nav, prices, eyebrows, the focus ring and the cart badge. Steel `#417292` is its hover, the 60px Add to Cart fill, and the GA tier. **Teal-Is-Action**: never use it decoratively.
- **Ink & neutrals (cool, never cream):** text is navy `#1D1E4C`, body `#4A5560`, meta `#5F5E5E`. The page is `#F8F9FA`, cards `#FFFFFF`, hairlines `#C3C7CC`.
- **Status & tiers:** On Sale `#10B981`, Sold Out `#6B7280`, GA `#417292`, **VIP gold `#D4AF37` (Gold-Is-Earned: VIP only)**, Tables navy, error `#BA1A1A`.
- **Type:** **Inter only.** Display 48/700/−0.02em, headlines 32 and 24 at 600, body 18/16, label-caps 12/700/0.05em uppercase (hero kickers use 0.2em). Money is formatted `SG$ 128.00` (Singapore dollars, two decimals).
- **Shape (Radius Trap):** button 4px · card 8px · pill/stepper/icon button 12px · modal 16px. Tailwind is remapped, so `rounded-full` = 12px and `rounded-xl` = 8px. Write `9999px` for circles.
- **Depth:** hairline borders at rest, `shadow-md` plus a 1.05 image zoom on hover. Glass over photos: `glass-overlay` (white/10, blur 12) and `glass-badge` (white/15, blur 8), with a black/80 bottom scrim.
- **Layouts:** desktop and mobile are separate compositions split at **`lg`**. Desktop has a sticky 96px header; mobile has a 60px glass app bar and a 96px bottom tab bar (Discover · Tickets · Venues · Profile).
- **Theme:** the storefront is light-only. `.dark` ("Dark Editorial") is for scoped featured bands only.
- **Icons:** Material Symbols Outlined (`<span class="ms">name</span>`), 20–24px, `FILL 1` when active. Never emoji.
- **Files:**
  - `styles.css` (token entry) and `tokens/`
  - `components/` (window.`NextktDesignSystem_1c6e87`)
  - `ui_kits/` (storefront, event-checkout, mobile)
  - `guidelines/`
  - `assets/`: lockup, text-only wordmark, N mark, logo-icon. Never recolor or redraw them.
