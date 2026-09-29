---
name: dirsal-brands-guidelines
description: Brand and design guidelines for our internal projects — Kisum (live-music operating platform, purple analytics UI, web + mobile), The Stage (luxury event venue in Bali, dark green and gold), and Nextkt (standalone ticketing storefront and operator admin; guidelines pending). Identifies which project the user is working on and applies that project's colors, typography, logos, components, templates, and voice. Use this whenever the user builds, designs, restyles, or reviews anything visual for Kisum, The Stage, or Nextkt — UI screens, components, landing pages, mockups, prototypes, slides, emails, marketing pages — or mentions branding, brand colors, design system, look-and-feel, or "make it on-brand", even if they don't name the project. If the project can't be determined, this skill asks the user instead of guessing.
---

# Dirsal Brands Guidelines

This skill is a router. Each internal project keeps its own complete design system
under `Projects/<Name>/`. Your job is to (1) work out which project the user is
working on, (2) load that project's guidelines, and (3) apply them faithfully. The
design rules themselves live in the project folders, not here — this file only tells
you which folder to open.

Paths below are relative to this skill's directory.

## Project registry

| Project | Folder | What it is | Start by reading |
|---|---|---|---|
| **Kisum** | `Projects/Kisum/` | Unified operating platform for the live-music industry (promoters, artists, venues, bookings, finance). Web app + mobile app. | `Projects/Kisum/readme.md` (lowercase) |
| **The Stage** | `Projects/TheStage/` | Luxury event venue in Bali. Public website (events, venue hire, private events, gallery) + booking flows, built on `@thestage/ui` (shadcn). | `Projects/TheStage/README.md` |
| **Nextkt** | `Projects/Nextkt/` | Standalone ticketing platform: consumer storefront, operator admin, sysadmin console, developer portal. **Design files not added yet.** | `Projects/Nextkt/README.md` (placeholder) |
| **Default** | `Projects/Default/` | Fallback when no project can be identified. Has no design system — it asks the user. | `Projects/Default/README.md` |

## Step 1 — Identify the project

Work through these sources in order and stop at the first one that gives a clear,
single answer:

1. **The user says so.** The project is named in the request or earlier in the
   conversation ("Kisum", "The Stage", "TheStage", "The Stage Bali", "Nextkt", "NexTkt").
2. **The workspace says so.** Look for a distinctive signal before asking: the
   repo or folder name, `package.json` name and dependencies, the git remote, the
   README, Tailwind/CSS config, logo files. A quick
   `rg -il "kisum|thestage|the stage|nextkt" --glob '{package.json,README*,*.css,tailwind.config.*}'`
   is usually enough.
3. **The artifact says so.** Brand-specific values in files the user shares.

Distinctive signals per project:

- **Kisum:** `kisum` / `kisum.dev`, `KisumDesignSystem`, purple `#8466AC`, Manrope + Inter,
  "The Booking Brief", promoter marketplace, artist insights, global rankings,
  booking requests/enquiries, agencies directory.
- **The Stage:** `@thestage/ui`, `window.TheStageUI`, `--color-muted-gold` / `--color-dark-green`,
  gold `#c9a962` on dark green `#0a140f`, Cormorant Garamond + Montserrat, Bali venue,
  venue hire, VIP tables, NYE events, the venue map.
- **Nextkt:** `nextkt` / `nextkt.com`, `Nextkt-Frontend`, `Nextkt-Frontend-Admin`,
  `Nextkt-Backend`, ticketing storefront, operator admin, box office, teal/navy palette.
  Kisum's docs mention Nextkt, but only to say it's outside the Kisum design system,
  so a Nextkt repo is Nextkt even if Kisum is referenced somewhere in it.

**Generic domain words are not enough.** All three brands live in the music, events,
and ticketing world, so "venue", "event", "booking", "artist", "tickets", "ticketing"
or "concert" alone could mean any of them. Treat those as hints to mention when you
ask, not as an answer.

**Use Default** (read `Projects/Default/README.md` and follow it) when:
- nothing identifies the project,
- signals point at more than one project (e.g. a monorepo containing both) and the
  request doesn't say which part, or
- the only evidence is generic domain vocabulary.

Once a project is identified, keep using it for the rest of the conversation unless
the user switches or the work clearly moves to another project — then identify again.

## Step 2 — Load the project's guidelines

Read the project's entry file in full before designing anything. It holds the brand
rules, voice, and the non-obvious traps. Then pull in only what the task needs:

**Kisum** (`Projects/Kisum/`)
- `readme.md` — content voice, visual foundations, iconography, component index. `SKILL.md` in the same folder is a one-screen quick reference.
- `uploads/DESIGN.md` — the full canonical spec, for detailed questions. `uploads/DESIGN-light.md` / `DESIGN-dark.md` for mode-specific tokens.
- `tokens/*.css` via `styles.css` — the real token values.
- `components/<group>/<Name>.prompt.md` — usage for each primitive.
- `ui_kits/{promoters,artist-insights,mobile}/` — full reference screens for web and mobile.
- `guidelines/*.card.html` — specimen cards (color, type, spacing, logo rules).
- `assets/*.svg` — logo, wordmark, icon.

**The Stage** (`Projects/TheStage/`)
- `README.md` — the top section ("Building with The Stage design system") is the brand layer and the part that matters most: the palette variables, typography, the Dialog/AlertDialog/Drawer text-color trap, `on-brand-dark`, and light-vs-dark surface rules.
- `components/<group>/<Name>/<Name>.prompt.md` — verified example JSX for each of the 55 components; copy from these.
- `templates/<page>/*.dc.html` — full website pages to start from: home, events, event-detail, venue-hire, private-events, gallery, faq, contact.
- `_ds_bundle.css` — compiled tokens and styles (there is no separate `tokens/` folder, despite what the generic part of the README says). Search it, don't read it whole.
- `templates/*/assets/logoW.svg` — the white logo.

**Nextkt** (`Projects/Nextkt/`)
- `README.md` — a placeholder until the design files are added. Follow it: say the
  guidelines aren't available yet, match the existing Nextkt code if you're in a
  Nextkt repo, otherwise ask for references. Never substitute Kisum or The Stage.

**Don't read these into context:** `_ds_bundle.js`, `_vendor/`, `_preview/`, and
`uploads/*.png`. They are large build outputs or screenshots, often several MB each.
Reference them from HTML if you need them at runtime.

## Step 3 — Apply the guidelines

- **Say which project you're applying**, in one short line at the start of your
  response (e.g. "Applying The Stage brand guidelines."). If you detected it from
  the workspace rather than being told, the user can correct you before the work goes further.
- **Follow the project's rules over your own taste.** These systems make deliberate
  choices that can look like mistakes to an outsider, like Kisum's ≤10% purple
  budget or The Stage's light, never-bold display serif. Keep them.
- **Use the real assets.** Copy logos and icons from the project folder. Never
  redraw, recolor, or approximate a logo.
- **Artifacts vs. production code:** for throwaway mocks, slides, or prototypes,
  copy the needed assets and build static HTML that links the project's
  `styles.css`. For production code, adopt the project's tokens and component
  patterns in the user's codebase.
- **One brand per artifact.** Never mix palettes, fonts, or components across projects.
- **For design craft, pair with `dirsal-frontend-design`** (`../dirsal-frontend-design/SKILL.md`).
  Use it for layout, hero choice, the plan → build → critique process, the
  accessibility floor, and writing. Where it conflicts with the brand (it discourages
  uppercase labels and some palettes that are core to our brands), the brand wins.
- **Posters and art pieces go through `dirsal-canvas-design`** (`../dirsal-canvas-design/SKILL.md`)
  with this brand's colors, fonts, and logos. It keeps its philosophy-first process, but
  the brand supplies the palette and type.
- **Brand themes, not preset themes.** `dirsal-theme-factory` (`../dirsal-theme-factory/SKILL.md`)
  has a quick-reference theme for each project: `themes/kisum.md`, `themes/thestage.md`,
  `themes/nextkt.md`. Use the identified project's theme for color and type on slides,
  docs, and other styled artifacts. The project folder here stays the source of truth.
  Never apply, blend in, or generate one of its 10 generic preset themes for branded work.

## Adding a new project

1. Put the design-system export in `Projects/<Name>/`, with an entry README.
2. Add a row to the registry above, plus its distinctive signals in Step 1 and its key files in Step 2.
3. Add it to the example question in `Projects/Default/README.md`.

When Nextkt's design files arrive, they replace `Projects/Nextkt/README.md`; then
update its registry row and Step 2 entry to point at the real files.
