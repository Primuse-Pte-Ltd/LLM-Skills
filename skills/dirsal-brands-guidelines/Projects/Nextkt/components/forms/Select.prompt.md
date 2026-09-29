One-line: dropdown in the events filter-bar field shell — category, sort, country.

```jsx
<Select options={[{ value: "", label: "All categories" }, "Concerts", "Festivals", "Comedy"]} />
<Select label="Sort by" options={["Date", "Price", "Name", "City"]} />
```

14px text, `surface` fill, `outline-variant` border, 4px corners, teal focus ring, Material `expand_more` chevron. Sort options are Date / Price / Name / City (plus Country only in the worldwide view).
