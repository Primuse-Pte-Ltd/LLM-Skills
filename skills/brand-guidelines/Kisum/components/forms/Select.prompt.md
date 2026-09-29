One-line: Labeled dropdown with refined chevron; matches Input field treatment.

```jsx
<Select label="Territory" options={["Global","Europe","Asia Pacific"]} />
<Select label="Status" options={[{value:"open",label:"Open"},{value:"closed",label:"Closed"}]} />
```

Options accept plain strings or `{value,label}`. Same border/focus treatment as `Input`.
