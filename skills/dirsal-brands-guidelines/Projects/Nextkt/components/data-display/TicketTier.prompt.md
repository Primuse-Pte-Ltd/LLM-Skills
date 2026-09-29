One-line: GA tier row for the sticky "Select Tickets" box — tier chip, price, availability, pill stepper.

```jsx
const [qty, setQty] = React.useState(1);
<TicketTier badge="GA" tone="ga" name="General Admission" price="Rp 450.000" subtitle="Standing floor" available={214} qty={qty} onChange={setQty} />
<TicketTier badge="VIP" tone="vip" name="VIP" price="Rp 1.250.000" subtitle="Fast lane + lounge" available={12} qty={0} onChange={() => {}} />
<TicketTier badge="TABLES" tone="tables" price="Rp 8.000.000" subtitle="Seats 8" soldOut available={0} />
```

Controlled: pass `qty` + `onChange`. Quantity is clamped 0–10 (the storefront cap); the first tier defaults to 1, others to 0. Row hover turns the border teal. Stack tiers with 8px gaps inside a white 8px-radius box, then show "Total" in teal headline-md and the `container` Add-to-Cart CTA with "Secure Checkout" + lock below.
