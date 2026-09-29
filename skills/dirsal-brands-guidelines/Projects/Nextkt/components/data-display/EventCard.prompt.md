One-line: the storefront event card in its four real treatments — featured, discovery, directory, poster.

```jsx
<EventCard variant="featured" title="Midnight Echoes" eyebrow="OCT 24 • JAKARTA"
  summary="Live at Istora Senayan, Jakarta. Mobile entry and live availability."
  price="From SG$ 128.00" />
<EventCard variant="discovery" title="Velvet Jazz Nights" venue="Motion Blue" city="Jakarta"
  month="NOV" day="02" price="From SG$ 98.00" stock="On Sale" />
<EventCard variant="directory" title="Neon Pulse" venue="Beach City International Stadium"
  month="DEC" day="12" price="From SG$ 188.00" />
<EventCard variant="poster" title="Ethereal World Tour" eyebrow="JAN 18 • SINGAPORE" venue="Singapore Indoor Stadium" badge="On Sale" />
```

- **featured** — home "Premiere Events", 3-up. 16:9 image with solid ON SALE badge, teal 11px caps eyebrow, headline-md title, 2-line summary, teal price + "Book Now" (2px corners). Image zooms 1.05 on hover.
- **discovery** — home "Upcoming Events", 4-up. 1:1 image with a black/40 "Quick Buy" overlay on hover, grey date leaf + heart, stock chip.
- **directory** — `/events` grid, 3-up, infinite scroll. 16:10 image with glass date chip, `location_on` line, "Book Now".
- **poster** — mobile horizontal rail, 280px min width, 3:4 image with glass badge.

`image` takes a URL or a gradient placeholder (this system ships no photography). Prices are pre-formatted strings from `lib/format` (written `SG$ 128.00`).
