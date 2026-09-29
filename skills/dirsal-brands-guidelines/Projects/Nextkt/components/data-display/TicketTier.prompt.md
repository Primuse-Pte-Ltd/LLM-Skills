One-line: GA tier row for the sticky "Select Tickets" box — tier chip, price, availability, pill stepper.

```jsx
const [qty, setQty] = React.useState(1);
<TicketTier badge="GA" tone="ga" name="General Admission" price="SG$ 128.00" subtitle="Standing floor" available={214} qty={qty} onChange={setQty} />
<TicketTier badge="VIP" tone="vip" name="VIP" price="SG$ 348.00" subtitle="Fast lane + lounge" available={12} qty={0} onChange={() => {}} />
<TicketTier badge="TABLES" tone="tables" price="SG$ 2,400.00" subtitle="Seats 8" soldOut available={0} />
```

Controlled: pass `qty` + `onChange`. Quantity is clamped 0–10 (the storefront cap); the first tier defaults to 1, others to 0. Row hover turns the border teal. Stack tiers with 8px gaps inside a white 8px-radius box, then show "Total" in teal headline-md and the `container` Add-to-Cart CTA with "Secure Checkout" + lock below.
