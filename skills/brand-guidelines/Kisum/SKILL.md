---
name: kisum-design
description: Use this skill to generate well-branded interfaces and assets for Kisum, either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping.
user-invocable: true
---

Read the README.md file within this skill, and explore the other available files.
If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out and create static HTML files for the user to view. If working on production code, you can copy assets and read the rules here to become an expert in designing with this brand.
If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions, and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.

## Quick reference
- **Brand:** Kisum — unified operating platform for the live-music industry (web + mobile). North star: "The Booking Brief" — analyst-confident, information-dense, editorial. Not generic SaaS cream UI.
- **Accent:** Kisum Purple `#8466AC` — ranks, count badges, one primary CTA per view, active nav. Purple Budget Rule: ≤10% of any screen.
- **Neutrals (cool, No-Cream Rule):** page `#F9FAFB`, shell `#F4F4F5`, card `#FFFFFF`, ink `#18181B`, muted `#71717A`, border `#F3F4F6`/`#E5E7EB`.
- **Type:** Manrope (display/headings, 600–800, tight tracking) + Inter (body/label/data, 14px default, tabular numerals).
- **Shape:** button 6px · card 12px · pill full. Flat by default; depth from 1px borders + tonal layering; shadow only on hover/interaction.
- **Dark mode:** charcoal `.dark` scope — canvas `#0E0E11`, cards `#1E1E24`, text `#E4E1E9`; purple fills stay `#8466AC`, purple text lifts to `#CDB4F0`. The mobile app is the primary dark surface.
- **Icons:** Lucide (web, 2px stroke) and Material Symbols Outlined (mobile + analyst screens). Never emoji.
- **Surfaces:** web app (`ui_kits/promoters`, `ui_kits/artist-insights`) and mobile app (`ui_kits/mobile`, light/dark).
- **Files:** `styles.css` (token entry), `tokens/`, `components/`, `ui_kits/`, `guidelines/`, `assets/` (logo/textlogo/icon SVGs, single-color purple — never redraw).
