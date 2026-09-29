# Kisum Promoters — Web App UI Kit

Interactive recreation of the **Kisum Promoters** booking platform (the flagship web surface). Composes the design-system primitives — it does not re-implement them.

## Files
- `index.html` — mounts the app; loads `_ds_bundle.js`, Lucide (CDN), and the JSX below.
- `icons.jsx` — `<Icon name>` wrapper rendering real Lucide SVGs.
- `app.jsx` — app shell (`Sidebar`, `Header`), screens (`Dashboard`, `Marketplace`, `Requests`), and the enquiry modal + toast.

## Interactions
- Sidebar nav switches views (Dashboard / Marketplace / Requests / Artists).
- Marketplace search filters listings live; tabs segment All / Official / Secondary.
- **Send Enquiry** / **Details** on any listing opens the enquiry modal → submitting fires a success toast.

## Components used
`Button`, `IconButton`, `Badge`, `Card`, `Avatar`, `Input`, `Select`, `StatCard`, `SectionHeader`, `TrackRow`, `DataTable`, `NavItem`, `ArtistCard`, `Tabs`.

## Shell notes
Follows the mandatory Kisum app shell: cool gray page canvas (`--body-bg`), near-white sidebar (`--surface-sidebar`), white main panel, logo row + org switcher, icon-leading nav with purple active fill, `NavUser` footer. Purple stays within the Purple Budget (nav active, count badges, one primary CTA).
