One-line: Mobile bottom nav — 3–4 tabs, active tab gets a purple-tint pill + filled icon.

```jsx
<MobileTabBar value={tab} onChange={setTab}
  items={[
    { key:"chat", label:"AI Chat", icon:<BotIcon/> },
    { key:"artists", label:"Artists", icon:<UsersIcon/> },
    { key:"dashboard", label:"Dashboard", icon:<DashIcon/> },
    { key:"rankings", label:"Rankings", icon:<RankIcon/> },
  ]} />
```

Pass an `activeIcon` (e.g. a filled variant) to swap the glyph when selected. Positioned absolute to the bottom of its container (use inside a phone frame / positioned shell).
