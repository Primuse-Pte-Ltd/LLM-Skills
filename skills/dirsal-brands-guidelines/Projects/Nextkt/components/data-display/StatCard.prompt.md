One-line: account-dashboard stat tile — teal icon disc, big number, label, sub-line.

```jsx
<StatCard icon={<span className="ms">confirmation_number</span>} value="6" label="Upcoming tickets" sub="Next: Midnight Echoes, Oct 24" />
<StatCard icon={<span className="ms">stars</span>} value="2,450" label="Reward points" sub="≈ Rp 24.500 to spend" />
```

Used 3-up on `/account`. The whole tile is a link, so hover shows a teal border + `shadow-md` and the arrow turns teal. Numbers use tabular figures and thousands separators.
