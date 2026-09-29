One-line: App sidebar nav item — icon + label, purple fill when active, tint wash on hover.

```jsx
<NavItem icon={<DashIcon/>} label="Dashboard" active />
<NavItem icon={<CalIcon/>} label="Booking" badge={4} />
```

Used inside the mandatory Kisum app shell sidebar. `badge` shows a count pill; `active` fills purple.
