One-line: the storefront's four tab styles — header nav, caps category filter, mobile chips, auth segmented toggle.

```jsx
<Tabs variant="nav" tabs={["Home", "Events", "Venues", "Artists", "Loyalty", "Partners"]} value="Events" onChange={setNav} />
<Tabs variant="underline" tabs={["All Events", "Concerts", "Festivals", "Comedy", "Theatre"]} value={cat} onChange={setCat} />
<Tabs variant="chips" tabs={["All Events", "Concerts", "Festivals"]} value={cat} onChange={setCat} />
<Tabs variant="segmented" tabs={["Sign In", "Create Account"]} value={mode} onChange={setMode} />
```

- **nav** — 16px, idle `secondary` 600, active teal 800 with a 2px teal underline. Exactly these six links, in this order.
- **underline** — 12px caps (`label-caps`), idle `secondary`, active teal + 2px underline. Sits in a white bar under the hero, with the city picker on the right.
- **chips** — mobile; 12px-radius (remapped `rounded-full`) chips, active = solid teal + `shadow-sm`.
- **segmented** — grey track, white raised active segment with teal text.
