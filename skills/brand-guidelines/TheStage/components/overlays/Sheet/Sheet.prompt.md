Sheet from @thestage/ui. Use via `window.TheStageUI.Sheet` (bundle loaded from the root `_ds_bundle.js`).

## Props

```ts
interface SheetProps {
  children?: React.ReactNode;
  open?: boolean;
  defaultOpen?: boolean;
  modal?: boolean;
}
```

## Examples

### BookingSummary

```jsx
() => (
  <Sheet open>
    <SheetContent side="right" className="text-[var(--color-charcoal)]">
      <SheetHeader>
        <SheetTitle className="font-display text-2xl font-normal tracking-wide">
          Your booking
        </SheetTitle>
        <SheetDescription>
          Held for 14:32 minutes. Tables release automatically when the hold
          expires.
        </SheetDescription>
      </SheetHeader>
      <div className="mt-6 space-y-4">
        <Line
          label="Table 14 — Terrace"
          detail="Sat 22 Mar · 4 guests"
          amount="IDR 3,600,000"
        />
        <Separator />
        <Line
          label="Cabana 03 — Pool Deck"
          detail="Sat 22 Mar · 2 guests"
          amount="IDR 2,400,000"
        />
        <Separator />
        <div className="flex items-center justify-between text-sm">
          <span className="uppercase tracking-widest text-xs text-muted-foreground">
            Total
          </span>
          <span className="font-display text-2xl tabular-nums">
            IDR 6,000,000
          </span>
        </div>
      </div>
      <SheetFooter className="mt-6 gap-2">
        <Button variant="outline">Keep browsing</Button>
        <Button className="bg-[var(--color-muted-gold)] text-black hover:bg-[var(--color-gold-light)]">
          Checkout
        </Button>
      </SheetFooter>
    </SheetContent>
  </Sheet>
);

/** `side="left"` — the filter rail used on the events listing. */
```

### EventFilters

```jsx
() => (
  <Sheet open>
    <SheetContent side="left" className="text-[var(--color-charcoal)]">
      <SheetHeader>
        <SheetTitle className="font-display text-2xl font-normal tracking-wide">
          Filter events
        </SheetTitle>
        <SheetDescription>28 events across April and May.</SheetDescription>
      </SheetHeader>
      <div className="mt-6 space-y-6 text-sm">
        <div className="space-y-2">
          <div className="text-xs uppercase tracking-widest text-muted-foreground">
            Area
          </div>
          <div className="flex flex-wrap gap-2">
            <Button size="sm" className="bg-[var(--color-muted-gold)] text-black hover:bg-[var(--color-gold-light)]">
              Terrace
            </Button>
            <Button size="sm" variant="outline">Pool Deck</Button>
            <Button size="sm" variant="outline">Rooftop</Button>
          </div>
        </div>
        <Separator />
        <div className="space-y-2">
          <div className="text-xs uppercase tracking-widest text-muted-foreground">
            Table minimum
          </div>
          <div className="flex flex-wrap gap-2">
            <Button size="sm" variant="outline">Under IDR 2m</Button>
            <Button size="sm" variant="outline">IDR 2m – 5m</Button>
          </div>
        </div>
      </div>
      <SheetFooter className="mt-6 gap-2">
        <Button variant="outline">Clear all</Button>
        <Button className="bg-[var(--color-muted-gold)] text-black hover:bg-[var(--color-gold-light)]">
          Show 12 events
        </Button>
      </SheetFooter>
    </SheetContent>
  </Sheet>
);

/** `side="bottom"` — the door-team check-in panel on a tablet. */
```

### DoorCheckIn

```jsx
() => (
  <Sheet open>
    <SheetContent side="bottom" className="text-[var(--color-charcoal)]">
      <SheetHeader>
        <SheetTitle className="font-display text-2xl font-normal tracking-wide">
          Kadek Wirawan — Table 14
        </SheetTitle>
        <SheetDescription>
          Guest list · Midnight Sessions · Saturday 22 March.
        </SheetDescription>
      </SheetHeader>
      <div className="mt-4 text-sm">
        <div className="flex items-center justify-between border-t py-3">
          <span className="text-muted-foreground">Party</span>
          <span>4 guests · 2 already arrived</span>
        </div>
        <div className="flex items-center justify-between border-t py-3">
          <span className="text-muted-foreground">Added by</span>
          <span>Ayu Pradnyani · promoter list</span>
        </div>
        <div className="flex items-center justify-between border-t py-3">
          <span className="text-muted-foreground">Balance on arrival</span>
          <span className="tabular-nums">IDR 1,800,000</span>
        </div>
      </div>
      <SheetFooter className="mt-6 gap-2">
        <Button variant="outline">Mark as no-show</Button>
        <Button className="bg-[var(--color-muted-gold)] text-black hover:bg-[var(--color-gold-light)]">
          Check in 2 guests
        </Button>
      </SheetFooter>
    </SheetContent>
  </Sheet>
)
```
