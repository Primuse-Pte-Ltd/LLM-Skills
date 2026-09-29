# Nextkt Mobile — Storefront UI Kit

Interactive recreation of the **mobile storefront** (everything below `lg`) inside a 390×844 phone frame. It is grounded in the `lg:hidden` branches of `app/page.tsx` and `app/events/[slug]/page.tsx`, plus `mobile-app-bar.tsx`, `mobile-bottom-nav.tsx`, `mobile-back.tsx` and `account/tickets-view.tsx`.

## Files
- `index.html` mounts the phone plus an explanatory side panel and loads `_ds_bundle.js`. Material Symbols come from `tokens/fonts.css`.
- `app.jsx` contains the screens (`Discover`, `EventScreen`, `Tickets` with the QR modal, `Venues`, `Profile`) and the phone root with tab routing.

## Interactions
- **Bottom tab bar** switches Discover / Tickets / Venues / Profile. The active tab is teal with a filled icon.
- **Discover:** a 4:5 hero with a glass "Featured" badge and a black/80 scrim, category chips, a 3:4 poster rail, the steel "Never Miss a Show" card, and upcoming rows.
- Tapping the hero or any event opens **EventScreen**, which has a floating back button, tier steppers, and a glass bottom bar with the total and **Add to Cart**. Adding bumps the cart badge and jumps to Tickets.
- **Tickets:** tap **View QR** to open the glass modal (16px radius, 4px teal QR frame, mono entry code). Tap the scrim or ✕ to close.
- **Profile** mirrors the account nav. Active items get a solid teal fill, and Sign Out is red.

## Components used
`MobileAppBar`, `MobileTabBar`, `EventCard` (poster), `EventRow`, `TicketTier`, `Tabs` (chips), `Badge`, `Button`, `IconButton` (floating), `StatCard`, `NavItem`.

## Notes
- Icons are **Material Symbols Outlined**, the same set as desktop, with `FILL 1` on active tabs.
- There is no dark mode. The storefront ships light-only on mobile as well.
- The tab bar is 96px including a 34px home-indicator inset (`env(safe-area-inset-bottom)` in production).
