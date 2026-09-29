One-line: Avatar with image or initials fallback.

```jsx
<Avatar name="Taylor Swift" src={url} />
<Avatar name="Primuse Entertainment" square size="lg" />
```

`size`: `sm|md|lg|xl` or a number. `square` for org/entity marks (rounded square) vs circle for people. Falls back to initials on a purple tint when no `src`.
