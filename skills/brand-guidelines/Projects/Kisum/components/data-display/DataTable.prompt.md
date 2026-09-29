One-line: High-density data table with uppercase header row and subtle row hover.

```jsx
<DataTable
  columns={[
    { key: "rank", label: "#", align: "right" },
    { key: "artist", label: "Artist" },
    { key: "audience", label: "Audience", align: "right",
      render: (r) => <b>{r.audience}</b> },
  ]}
  rows={rows} onRowClick={(r) => open(r)} />
```

Columns support `align` and a `render(row)` for custom cells (badges, links). Numeric right-aligned columns get tabular figures automatically.
