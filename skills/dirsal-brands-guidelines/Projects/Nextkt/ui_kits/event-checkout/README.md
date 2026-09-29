# Nextkt Event → Checkout — Desktop UI Kit

Interactive recreation of the **purchase funnel**: GA event detail, then cart, then checkout, then confirmation. It is grounded in `app/events/[slug]/page.tsx` (`GaDetail`), `ga-ticket-box.tsx`, `cart-view.tsx`, `hold-countdown.tsx`, `checkout-form.tsx` and `checkout-confirmation.tsx`.

## Files
- `index.html` mounts the app and loads `_ds_bundle.js` and the JSX below.
- `icons.jsx` provides the Material Symbols `<Icon name>` wrapper.
- `app.jsx` contains `Header`, `SiteFooter`, `CompactFooter` (checkout only), `HoldCountdown`, and the screens `EventDetail`, `CartScreen`, `CheckoutScreen` and `Confirmation`.

## Interactions
- **Select Tickets** (the sticky 5/12 column) holds GA/VIP steppers. Tables is sold out. A **Redeem points** slider takes 1 cent per point, strikes through the old total and shows the saving in green.
- **Add to Cart** is the 60px steel `container` CTA. It shows "Adding…", then opens the cart with a **10:00 hold**. The countdown pill turns red in the last 2 minutes and switches to "Hold expired" at zero, which disables checkout.
- **Order Summary** (380px aside) shows subtotal, service (5%) and platform fee, the points line, the total in teal, and an "Earn ~N points" line.
- **Checkout** shows the buyer and card fields with caps labels, a promo code field (locked while points are applied), and **Continue to payment**, which leads to **Payment successful**.

## Components used
`Button` (primary / container `cta` / outline / secondary), `IconButton`, `Badge` (glass), `Card`, `Input`, `TicketTier`, `EventCard` (directory), `Tabs` (nav).

## Notes
- The event hero fades to the **page colour** (`from-background`), not to black, so the title is navy on light. This differs from the home carousel, which puts white text on a black scrim.
- Money is Singapore dollars with two decimals: `SG$ 1,250.00`. Amounts are held in cents, like the backend's minor units.
- Only the checkout step uses the compact footer. Event, cart and confirmation get the full footer, as in production (`desktopFooterForPath` returns `"compact"` only for `/checkout`).
