One-line: Labeled text field with visible label, focus ring, and error state.

```jsx
<Input label="Search" placeholder="Name, genre, location…" iconLeft={<SearchIcon/>} />
<Input label="Fee" error="Required" />
```

Labels are always visible (never placeholder-only). Purple focus ring; red ring + message on `error`. `hint` for helper text, `iconLeft` for a leading glyph.
