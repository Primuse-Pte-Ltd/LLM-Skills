Popover from @thestage/ui. Use via `window.TheStageUI.Popover` (bundle loaded from the root `_ds_bundle.js`).

## Props

```ts
interface PopoverProps {
  children?: React.ReactNode;
  open?: boolean;
  defaultOpen?: boolean;
  modal?: boolean;
}
```

## Examples

### GuestPicker

```jsx
() => (
  <Stage>
    <div className="text-center">
      <div className="text-xs uppercase tracking-widest text-[var(--color-taupe)]">
        Midnight Sessions
      </div>
      <div className="font-display text-3xl text-[var(--color-cream)]">
        Saturday 22 March
      </div>
    </div>
    <Popover open>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          className="border-[var(--color-muted-gold)] bg-transparent text-[var(--color-cream)] hover:bg-white/5"
        >
          4 guests · arriving 21:00
        </Button>
      </PopoverTrigger>
      <PopoverContent
        onOpenAutoFocus={(e) => e.preventDefault()}
        className="text-[var(--color-charcoal)]"
      >
        <div className="text-sm font-medium">Party details</div>
        <p className="mt-1 text-xs text-muted-foreground">
          Tables on the Terrace seat up to six. Larger parties are split across
          adjoining tables.
        </p>
        <Separator className="mt-3 mb-3" />
        <div className="flex items-center justify-between text-sm">
          <span>Guests</span>
          <div className="flex items-center gap-2">
            <Button size="sm" variant="outline">−</Button>
            <span className="w-4 text-center tabular-nums">4</span>
            <Button size="sm" variant="outline">+</Button>
          </div>
        </div>
        <div className="mt-3 flex items-center justify-between text-sm">
          <span>Arrival</span>
          <span className="tabular-nums">21:00</span>
        </div>
        <Button className="mt-4 w-full bg-[var(--color-muted-gold)] text-black hover:bg-[var(--color-gold-light)]">
          Find tables
        </Button>
      </PopoverContent>
    </Popover>
  </Stage>
);

/** A venue-map hotspot popover — the info panel behind a table on the map. */
```

### TableHotspot

```jsx
() => (
  <Stage>
    <div className="text-center">
      <div className="text-xs uppercase tracking-widest text-[var(--color-taupe)]">
        Terrace · level two
      </div>
      <div className="font-display text-3xl text-[var(--color-cream)]">
        Choose your table
      </div>
    </div>
    <Popover open>
      <PopoverTrigger asChild>
        <Button className="bg-[var(--color-muted-gold)] text-black hover:bg-[var(--color-gold-light)]">
          Table 14
        </Button>
      </PopoverTrigger>
      <PopoverContent
        onOpenAutoFocus={(e) => e.preventDefault()}
        className="text-[var(--color-charcoal)]"
      >
        <div className="flex items-start justify-between gap-4">
          <div>
            <div className="font-display text-xl">Table 14</div>
            <div className="text-xs text-muted-foreground">
              Terrace · seats 6 · stage-facing
            </div>
          </div>
          <span className="text-[11px] uppercase tracking-widest text-[var(--color-bronze)]">
            2 left
          </span>
        </div>
        <Separator className="mt-3 mb-3" />
        <div className="flex items-center justify-between text-sm">
          <span className="text-muted-foreground">Minimum spend</span>
          <span className="tabular-nums">IDR 3,600,000</span>
        </div>
        <div className="mt-2 flex items-center justify-between text-sm">
          <span className="text-muted-foreground">Deposit today</span>
          <span className="tabular-nums">IDR 1,800,000</span>
        </div>
        <Button className="mt-4 w-full bg-[var(--color-muted-gold)] text-black hover:bg-[var(--color-gold-light)]">
          Hold for 15 minutes
        </Button>
      </PopoverContent>
    </Popover>
  </Stage>
)
```
