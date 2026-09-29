One-line: caps-only status/tier badge — ON SALE, VIP, GA, TABLES, Selling fast, Sold out.

```jsx
<Badge tone="on-sale">On Sale</Badge>                     {/* over a card photo */}
<Badge tone="vip" variant="tint" size="md">VIP</Badge>     {/* tier chip in the ticket box */}
<Badge tone="ga" variant="tint" size="md">GA</Badge>
<Badge tone="error" variant="tint" size="md">Selling fast</Badge>
<Badge tone="neutral" variant="tint" caps={false}>On Sale</Badge>  {/* stock chip on discovery cards */}
<Badge variant="glass" size="md">Featured</Badge>          {/* mobile hero */}
```

`solid` badges sit on imagery at 90% opacity with a backdrop blur; `tint` badges sit on surfaces (10% wash + colored text). Gold (`vip`) is only for the VIP tier (Gold-Is-Earned Rule). Tier colors are fixed: GA steel blue `#417292`, VIP gold `#d4af37`, Tables navy `#1d1e4c`.
