One-line: Horizontal tab strip for entity detail pages; active tab gets purple text + underline.

```jsx
<Tabs tabs={["Overview","Team","Biography","Analytics","Shows"]}
  value={tab} onChange={setTab} />
```

Controlled (`value`+`onChange`) or uncontrolled. Never fills the whole bar purple — brand emphasis on the active label only.
