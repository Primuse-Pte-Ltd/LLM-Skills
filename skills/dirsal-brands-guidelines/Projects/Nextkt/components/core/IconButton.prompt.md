One-line: icon-only control — header cart with teal count badge, menu, carousel arrows, floating mobile back button.

```jsx
<IconButton label="Cart (3 items)" count={3}><span className="ms">shopping_cart</span></IconButton>
<IconButton label="Cart" variant="brand"><span className="ms">shopping_cart</span></IconButton>
<IconButton label="Next slide" variant="glass" size={48}><span className="ms">chevron_right</span></IconButton>
<IconButton label="Go back" variant="floating"><span className="ms">arrow_back</span></IconButton>
```

Always pass `label` (it becomes `aria-label`, and the cart label should include the count). Corners are 12px — the storefront's remapped `rounded-full` — so these are soft squares, not circles. `glass` only over photography.
