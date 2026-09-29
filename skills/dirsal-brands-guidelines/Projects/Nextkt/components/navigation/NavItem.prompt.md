One-line: account sidebar item — solid teal when active, grey wash on hover, red for Sign Out.

```jsx
<NavItem icon="dashboard" label="Dashboard" />
<NavItem icon="stars" label="Points & Rewards" />
<NavItem icon="confirmation_number" label="My Tickets" active />
<NavItem icon="person" label="Profile" />
<NavItem icon="shield" label="Security" />
<NavItem icon="logout" label="Sign Out" danger />
```

`icon` is a Material Symbols name string; the active item gets the filled glyph. The sidebar is 256px wide, sticky at `top: 96px`, with a hairline above Sign Out and a `primary-fixed` "NEED HELP? / 24/7 Concierge Service" card below. On mobile the same items become a horizontal scrolling rail.
