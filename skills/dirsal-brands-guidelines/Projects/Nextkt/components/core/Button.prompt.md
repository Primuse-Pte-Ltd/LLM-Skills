One-line: Nextkt's action button — teal fill for the step toward a ticket, steel-blue container for the big Add-to-Cart bar, glass over photography.

```jsx
<Button variant="primary">Book Now</Button>
<Button variant="container" size="cta" full iconRight={<span className="ms">confirmation_number</span>}>Add to Cart</Button>
<Button variant="glass" size="lg">Tour Dates</Button>
<Button variant="outline">Resend code</Button>
<Button variant="secondary" size="sm">Manage cookies</Button>
<Button variant="link">View Full Calendar</Button>
<Button variant="destructive" iconLeft={<span className="ms">logout</span>}>Sign Out</Button>
```

Variants: `primary` (teal `#1c6e87`, hover → steel blue `#417292`), `container` (steel-blue fill — Add to Cart, "Open ticket page"), `outline` (teal border/text), `secondary` (grey container — cookie "Manage", neutral actions), `inverse` (white on a teal block — newsletter "Subscribe Now"), `glass` (white/10 + blur + white/30 border, only over imagery), `link` (teal text + 2px underline), `destructive` (red text, red-tint hover — Sign Out). Sizes `sm|md|lg|cta`. Radius is always 4px (`rounded-lg` in the remapped Tailwind scale). Press = `scale(0.95)` (`0.98` for `cta`). CTA labels are Title Case ("Book Now", "Get Tickets", "Quick Buy", "Add to Cart").
