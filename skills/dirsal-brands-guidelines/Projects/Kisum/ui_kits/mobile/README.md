# Kisum Mobile — Promoter App UI Kit

Interactive recreation of the **Kisum mobile promoter app**, with a working **light/dark toggle** (tap the sun/moon in the app bar). Grounded in the mobile source screens (`app_dashboard_overview`, `app_dashboard_dark_mode`, `festival_rankings`).

## Files
- `index.html` — mounts the app inside a 390×844 phone frame; loads `_ds_bundle.js` + Material Symbols.
- `app.jsx` — screens (`Dashboard`, `Rankings`, `Artists`, `AIChat`) + root with theme toggle and bottom-nav routing.

## Interactions
- **Bottom nav** switches between AI Chat / Artists / Dashboard / Rankings (active tab = purple-tint pill, filled icon).
- **Theme toggle** flips the whole frame between light and dark via the `.dark` token scope.
- Rankings has a Global / Regional segmented toggle.

## Components used
`MobileAppBar`, `MobileTabBar`, `StatCard`, `Card`, `Badge`, `Button`.

## Notes
- **Icons: Material Symbols Outlined** (the mobile app's icon set — matches source), with the filled variant on active tabs.
- Event/artist imagery uses purple-gradient placeholders (no bundled photography).
- Dark mode uses the charcoal `.dark` palette in `tokens/colors.css` (`#0E0E11` canvas, `#1E1E24` cards, `#CDB4F0` accent text).
