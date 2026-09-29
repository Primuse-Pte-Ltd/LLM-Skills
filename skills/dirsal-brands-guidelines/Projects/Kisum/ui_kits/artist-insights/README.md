# Kisum Artist Insights — Web App UI Kit

Recreation of the **Artist Insights** analytics surface — the data-dense artist overview (hero + genres + bio, KPI bar, Top Songs, Audience-by-Platform). Grounded in the source `artist_overview_dashboard`.

## Files
- `index.html` — mounts the app; loads `_ds_bundle.js`, Lucide (CDN), and the JSX.
- `icons.jsx` — `<Icon name>` Lucide wrapper.
- `app.jsx` — `TopBar`, `Hero` (with detail `Tabs`), KPI row, Top Songs, Audience chart.

## Components used
`Button`, `IconButton`, `Badge`, `Card`, `Avatar`, `StatCard`, `SectionHeader`, `TrackRow`, `Tabs`.

## Notes
Artist / album imagery is stubbed with purple-gradient placeholders (no bundled photography). Chart bars are CSS — purple with the leader emphasized. Detail tabs use brand-emphasis active state, not a purple-filled bar.
