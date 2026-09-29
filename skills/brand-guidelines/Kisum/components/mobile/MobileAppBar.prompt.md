One-line: Mobile top app bar — sticky 64px header with brand/title left, actions right.

```jsx
<MobileAppBar eyebrow="Dashboard" title="Welcome, Lead Promoter"
  brand={<img src="assets/icon.svg" style={{height:24}}/>}
  right={<IconButton label="Alerts"><BellIcon/></IconButton>} />
```

Translucent blur over the page canvas; adapts to light/dark automatically via tokens.
