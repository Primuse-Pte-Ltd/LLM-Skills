One-line: buyer/organizer avatar — photo or initials on steel blue.

```jsx
<Avatar name="Ayu Pratiwi" size="xl" tile />       {/* account dashboard hero */}
<Avatar name="Primuse Live" size="xs" color="#1c6e87" /> {/* "Presented by" org dot */}
<Avatar name="Ayu Pratiwi" size="md" />
```

Initials sit on `primary-container` (#417292) in white. `tile` is the account hero treatment. An organizer's own `branding.primaryColor` is the only place a non-Nextkt color may appear (the "Presented by" chip) — pass it via `color`.
