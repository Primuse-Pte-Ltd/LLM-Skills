One-line: persistent mobile bottom nav — Discover, Tickets, Venues, Profile; active = teal filled glyph.

```jsx
<MobileTabBar value={tab} onChange={setTab} />
```

The four tabs and their glyphs are fixed: Discover `explore` → `/`, Tickets `confirmation_number` → `/account/tickets`, Venues `stadium` → `/venues`, Profile `person` → `/account`. Labels are 10px uppercase. No pill or tint behind the active tab — just teal color + `FILL 1`. It shows on every storefront screen below `lg`; page content reserves `pb-24` (96px) to clear it.
