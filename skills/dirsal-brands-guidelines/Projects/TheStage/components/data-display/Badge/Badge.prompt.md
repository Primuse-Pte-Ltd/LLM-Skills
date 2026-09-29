Badge from @thestage/ui. Use via `window.TheStageUI.Badge` (bundle loaded from the root `_ds_bundle.js`).

## Props

```ts
interface BadgeProps {
  className?: string;
  id?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
  variant?: "default" | "destructive" | "outline" | "secondary";
}
```

## Examples

### Statuses

```jsx
() => (
  <Dark>
    <Badge className="bg-[var(--color-muted-gold)] text-black hover:bg-[var(--color-gold-light)]">
      Confirmed
    </Badge>
    <Badge
      variant="outline"
      className="border-[var(--color-muted-gold)] text-[var(--color-muted-gold)]"
    >
      Waitlist
    </Badge>
    <Badge className="bg-[var(--color-moss)] text-[var(--color-cream)] hover:bg-[var(--color-sage)]">
      Deposit held
    </Badge>
    <Badge
      variant="outline"
      className="border-[var(--color-taupe)] text-[var(--color-taupe)]"
    >
      Sold out
    </Badge>
    <Badge variant="destructive">Cancelled</Badge>
  </Dark>
);

/** In context: the small caps label a listing card carries above its title. */
```

### OnEventCard

```jsx
() => (
  <div className="bg-[var(--color-dark-green)] text-[var(--color-cream)] font-body p-8">
    <div className="border border-[var(--color-muted-gold)] bg-white/5 rounded-md p-6 max-w-md">
      <div className="flex flex-wrap items-center gap-2 mb-4">
        <Badge className="bg-[var(--color-muted-gold)] text-black hover:bg-[var(--color-muted-gold)] text-xs uppercase tracking-[0.15em]">
          Saturday
        </Badge>
        <Badge
          variant="outline"
          className="border-white/10 text-[var(--color-champagne)] text-xs uppercase tracking-[0.15em]"
        >
          Rooftop
        </Badge>
        <Badge
          variant="outline"
          className="border-white/10 text-[var(--color-champagne)] text-xs uppercase tracking-[0.15em]"
        >
          18+
        </Badge>
      </div>
      <h3 className="font-display text-3xl font-normal tracking-wide">
        Midnight Sessions
      </h3>
      <p className="text-sm text-[var(--color-champagne)] mt-2">
        Live sets above Seminyak, 22:00 until late. From IDR 450,000.
      </p>
    </div>
  </div>
);

/** The built-in variant axis, on the light surface these variants are built for. */
```

### Variants

```jsx
() => (
  <div className="bg-[var(--color-cream)] text-[var(--color-charcoal)] font-body p-8">
    <div className="bg-background rounded-md border p-6 flex flex-wrap items-center gap-3">
      <Badge>Default</Badge>
      <Badge variant="secondary">Secondary</Badge>
      <Badge variant="destructive">Destructive</Badge>
      <Badge variant="outline">Outline</Badge>
    </div>
  </div>
);

/** Numeric counters — the guest-count pill in the door app. */
```

### Counters

```jsx
() => (
  <Dark>
    <Badge className="bg-[var(--color-muted-gold)] text-black hover:bg-[var(--color-muted-gold)] tabular-nums">
      142 guests
    </Badge>
    <Badge className="bg-[var(--color-moss)] text-[var(--color-cream)] hover:bg-[var(--color-moss)] tabular-nums">
      9 tables
    </Badge>
    <Badge
      variant="outline"
      className="border-[var(--color-bronze)] text-[var(--color-champagne)] tabular-nums"
    >
      3 on the list
    </Badge>
  </Dark>
)
```
