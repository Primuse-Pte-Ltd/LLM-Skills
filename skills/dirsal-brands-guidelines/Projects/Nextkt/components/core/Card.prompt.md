One-line: flat white card on the #f8f9fa canvas — 1px hairline, 8px corners, shadow only on hover.

```jsx
<Card>…Order Summary…</Card>
<Card interactive soft padding={24}>…account stat…</Card>
<Card tone="muted" soft>…VENUE INFO / EVENT TIME…</Card>
```

Depth is tonal (canvas `#f8f9fa` → white card → `surface-container-low` rows), not shadowed. `interactive` adds `shadow-md` + teal border on hover (account quick-links, discovery cards). `soft` = the `outline-variant/30` hairline used on account, cart and directory cards. Don't nest cards more than one level.
