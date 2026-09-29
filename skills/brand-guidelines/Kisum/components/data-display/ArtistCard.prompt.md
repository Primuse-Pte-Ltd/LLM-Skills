One-line: Marketplace listing card — imagery header with status, metadata grid, action footer.

```jsx
<ArtistCard name="Shakira" location="Barranquilla, Colombia" image={url}
  agency="LGM Agency" statusLabel="Available for Tours" statusTone="success"
  window="Dec 01 — Dec 20" territory="China" tags={["Concert","Festival"]}
  onEnquiry={...} onDetails={...} />
```

Stays a management object: owner (`agency`), `window`, `territory`, and a predictable Send Enquiry / Details footer. `statusTone`: `success|warning|danger` sets the availability dot. Falls back to a purple gradient when no `image`.
