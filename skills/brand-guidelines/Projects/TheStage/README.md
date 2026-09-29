## Building with The Stage design system

`@thestage/ui` is the shadcn/ui kit (Radix primitives + Tailwind) as vendored by
The Stage, a luxury event venue in Bali. The components themselves are stock
shadcn; **the brand is a layer you apply on top with utility classes.** Getting
that layer right is the whole job.

### Setup

No provider, no theme context. Components are on `window.TheStageUI` and the
stylesheet is already loaded. Two exceptions worth knowing:

- `Sidebar` and its parts must be inside `<SidebarProvider>`.
- `Tooltip` needs a `<TooltipProvider>` ancestor.

### Colour: use the CSS variables, not the Tailwind colour names

The house idiom is Tailwind **arbitrary values** pointing at brand variables:

```jsx
<Button className="bg-[var(--color-muted-gold)] text-black hover:bg-[var(--color-gold-light)]">
```

The full palette (`--color-` prefix on each):

| Greens (surfaces) | Neutrals (text/fills) | Golds (accent) |
|---|---|---|
| `dark-green` `#0a140f` — page background | `cream` `#f5f3ee` — body text | `muted-gold` `#c9a962` — primary accent |
| `deep-green` `#060c09` — deepest panel | `warm-white` `#fdfcfa` | `gold-light` `#d4b978` — hover |
| `forest` `#122019` | `stone` `#e8e4dc` | `bronze` `#8b7355` |
| `sage` `#1a2e23` | `taupe` `#9a998f` — muted text | |
| `moss` `#243d2f` — raised panel | `champagne` `#d4c8b8` — secondary text | |

Also `charcoal` and `graphite` (aliases of the darkest greens).

**Do not use the bare Tailwind colour names** (`bg-sage`, `bg-muted-gold`). They
exist in the preset but hold *different values* — preset `sage` is a pale green
`#A8B5A0`, the variable is a dark green `#1a2e23`. Always the `var()` form.

**Opacity modifiers do not work on these.** `text-[var(--color-cream)]/70` emits
no CSS at all. For translucency use concrete colours: `bg-white/5`, `bg-black/20`,
`text-white/70`, or a `border-white/10` hairline.

### Typography

`font-display` is Cormorant Garamond — headings, event names, numerals. It is a
light, wide serif: pair it with `font-normal` and generous `tracking-wide`, never
bold. `font-body` is Montserrat and is the default. Small labels are the venue's
signature: `text-xs uppercase tracking-widest text-[var(--color-taupe)]`.

### The one trap: Dialog, AlertDialog and Drawer

The theme sets an unlayered `body { color: var(--color-cream) }` that outranks
shadcn's `text-foreground`. Three panels set a background but no text colour, so
they render **cream text on white and are invisible**. Always set a colour:

```jsx
<DialogContent className="text-[var(--color-charcoal)]">
```

Everything else is safe: `Sheet` carries `text-foreground`, and `Popover`,
`DropdownMenu`, `ContextMenu`, `Tooltip`, `HoverCard`, `Menubar` and `Select`
all carry `text-popover-foreground`.

### Controls on the dark surface: `on-brand-dark`

The kit assumes a light page — `bg-background` is white, `border-input` is pale
grey — so an `Input` or `Select` dropped straight onto the dark green page is a
white slab. Wrap the section in `on-brand-dark`, which re-points the surface
tokens at the brand darks for its subtree:

```jsx
<section className="on-brand-dark bg-[var(--color-dark-green)] p-8">
  <Input placeholder="Guest name" />
</section>
```

`--primary` and `--ring` are already gold globally, so checked checkboxes,
switches, radios, slider ranges and focus rings are on-brand everywhere without
any extra work.

**Do not wrap `ScrollArea`, `Separator` or `ResizableHandle` in it.** Those draw
their whole visual with `bg-border`, and the class repoints `--border` to a dark
moss that disappears against the dark surface. Leave them on the default border.
The rule is for form controls and panels, not for hairline components.

### Light vs dark surfaces

Pages are dark green. But the components' own variants (`variant="outline"`,
`"secondary"`, `"link"`, and `Card`'s white `--card`) are built for a light
background and are illegible on dark green. Either restyle them with brand
classes, or place them on a cream panel (`bg-[var(--color-cream)]
text-[var(--color-charcoal)]`). Do not drop a stock `<Card>` onto the dark page
and expect it to look intentional.

### Where the truth is

Read `_ds/<folder>/styles.css` and its `@import` closure for the real compiled
vocabulary, and each component's `.prompt.md` for its props and usage. The
`.prompt.md` examples are rendered, verified code — prefer copying them.

### An idiomatic composition

```jsx
<section className="bg-[var(--color-dark-green)] text-[var(--color-cream)] font-body p-10">
  <p className="text-xs uppercase tracking-widest text-[var(--color-taupe)]">Saturday</p>
  <h2 className="font-display text-4xl font-normal tracking-wide mt-2">Midnight Sessions</h2>
  <p className="mt-3 max-w-prose text-[var(--color-champagne)]">
    Live sets from the rooftop, 22:00 until late.
  </p>
  <Button className="mt-6 bg-[var(--color-muted-gold)] text-black hover:bg-[var(--color-gold-light)]">
    Book a table
  </Button>
</section>
```

# TheStageUI (@thestage/ui@0.1.0)

This design system is the published @thestage/ui React library, bundled as a single
browser global. All 55 components are the real upstream code.

## Where things are

- `_ds_bundle.js` — the whole-DS bundle at the project root; loads every component to `window.TheStageUI`. First line is a `/* @ds-bundle: … */` metadata header.
- `styles.css` — the single stylesheet entry: it `@import`s the tokens, fonts, and component styles (`_ds_bundle.css`). Link this one file.
- `components/<group>/<Name>/<Name>.prompt.md` (example JSX + variants), `<Name>.d.ts` (types), `<Name>.html` (variant grid).
- `tokens/*.css` — CSS custom properties, names verbatim from upstream.
- `fonts/` — `@font-face` files + `fonts.css` (when the package ships fonts).

For a specific component, `read_file("components/<group>/<Name>/<Name>.prompt.md")`.

## Loading

Add these two lines to your page once (React must be on the page first):

```html
<link rel="stylesheet" href="styles.css">
<script src="_ds_bundle.js"></script>
```

Components are then available at `window.TheStageUI.*`. Mount into a dedicated child node (e.g. `<div id="ds-root">`), not the host page's own React root, so the two trees don't collide:

```jsx
const { Accordion } = window.TheStageUI;
ReactDOM.createRoot(document.getElementById('ds-root')).render(<Accordion />);
```

## Tokens

160 CSS custom properties from @thestage/ui. Names are
preserved verbatim from upstream. They are declared inside `_ds_bundle.css` (this DS ships one compiled stylesheet rather than separate token files).

- **color** (24): `--tw-border-spacing-x`, `--tw-border-spacing-y`, `--tw-ring-offset-color`, …
- **spacing** (4): `--tw-ring-inset`, `--tw-space-x-reverse`, `--tw-space-y-reverse`, …
- **typography** (2): `--font-display`, `--font-body`
- **radius** (1): `--radius`
- **shadow** (6): `--tw-ring-offset-shadow`, `--tw-ring-shadow`, `--tw-shadow`, …
- **other** (123): `--tw-translate-x`, `--tw-translate-y`, `--tw-rotate`, …

## Components

### data-display
- `Accordion`
- `AspectRatio`
- `Avatar`
- `Badge`
- `Card`
- `Carousel`
- `ChartContainer`
- `Collapsible`
- `Item`
- `Kbd`
- `ResizablePanelGroup`
- `ScrollArea`
- `Separator`
- `Table`

### feedback
- `Alert`
- `Empty`
- `Progress`
- `Skeleton`
- `Spinner`
- `Toaster`

### overlays
- `AlertDialog`
- `Command`
- `ContextMenu`
- `Dialog`
- `Drawer`
- `DropdownMenu`
- `HoverCard`
- `Popover`
- `Sheet`
- `Tooltip`

### navigation
- `Breadcrumb`
- `Menubar`
- `NavigationMenu`
- `Pagination`
- `Sidebar`
- `Tabs`

### actions
- `Button`
- `ButtonGroup`
- `Toggle`
- `ToggleGroup`

### forms
- `Calendar`
- `Checkbox`
- `Field`
- `Form`
- `Input`
- `InputGroup`
- `InputOTP`
- `Label`
- `RadioGroup`
- `Select`
- `Slider`
- `Switch`
- `Textarea`

### the-stage
- `GoogleOAuthInAppNotice` — When Google Sign-In is opened inside an in-app browser, steer the user into
- `VenueMapSvgContent` — Inlines SVG and wires the same hit-testing as admin event editor:
