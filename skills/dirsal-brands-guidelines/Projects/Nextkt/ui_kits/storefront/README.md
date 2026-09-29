# Nextkt Storefront — Desktop UI Kit

Interactive recreation of the **Nextkt desktop storefront** (`lg` and up). It is grounded in `app/page.tsx`, `app/events/page.tsx`, `site-header.tsx`, `hero-carousel.tsx`, `events-directory.tsx` and `site-footer.tsx` in `Nextkt-Frontend`. It composes the design-system primitives rather than re-implementing them.

## Files
- `index.html` mounts the app and loads `_ds_bundle.js` and the JSX below.
- `icons.jsx` provides `<Icon name>`, a Material Symbols Outlined wrapper that mirrors `components/material-icon.tsx`.
- `app.jsx` contains the chrome (`Header`, `Footer`), `Hero` (the carousel), the `Home` and `Events` pages, and a cart `Toast`.

## Interactions
- Header nav switches between **Home** and **Events**. The active link gets the teal underline.
- The hero carousel auto-advances every 8s and has prev/next glass arrows. The slide transition is 700ms `var(--ease)`.
- The category underline tabs filter Premiere and Upcoming events live.
- On the Events page, search filters by name, the category select filters by category, and Sort by reorders the grid.
- Any **Book Now**, **Quick Buy**, **Get Tickets** or card click adds to the cart. The header badge increments and a toast confirms the hold.

## Components used
`Button`, `IconButton`, `Badge`, `EventCard` (featured / discovery / directory), `Tabs` (nav / underline), `Input`, `Select`.

## Shell notes
- **Header:** sticky, 96px, surface at 90% with a 12px blur, hairline bottom border. It holds the 56px logo, the nav, then search, cart and a teal **Sign In** on the right.
- **Page:** `#F8F9FA` canvas, 1280px container with 48px side margins, and bands that alternate between the page colour and white `surface-container-lowest`.
- **Footer:** `surface-container` background. The brand blurb sits beside two stacked link columns (Company/Partners and Support/Legal) and the Country Selector, with a © line and legal links underneath.
- **Imagery:** teal/navy gradient placeholders; no photography ships with the design system.
