HoverCard from @thestage/ui. Use via `window.TheStageUI.HoverCard` (bundle loaded from the root `_ds_bundle.js`).

## Props

```ts
interface HoverCardProps {
  children?: React.ReactNode;
  open?: boolean;
  defaultOpen?: boolean;
  openDelay?: number;
  closeDelay?: number;
}
```

## Examples

### ArtistPreview

```jsx
() => (
  <Stage>
    <div className="text-center">
      <div className="text-xs uppercase tracking-widest text-[var(--color-taupe)]">
        Line-up · Saturday 22 March
      </div>
      <div className="font-display text-3xl text-[var(--color-cream)]">
        Midnight Sessions
      </div>
    </div>
    <HoverCard open>
      <HoverCardTrigger asChild>
        <Button variant="link" className="text-[var(--color-muted-gold)]">
          Dewa Nakamura
        </Button>
      </HoverCardTrigger>
      <HoverCardContent className="text-[var(--color-charcoal)]">
        <div className="flex items-center gap-3">
          <Avatar>
            <AvatarFallback>DN</AvatarFallback>
          </Avatar>
          <div>
            <div className="font-display text-lg">Dewa Nakamura</div>
            <div className="text-xs text-muted-foreground">
              Resident since 2022
            </div>
          </div>
        </div>
        <p className="mt-3 text-sm leading-relaxed">
          Deep house and gamelan-sampled percussion. Closes the Terrace room
          every second Saturday.
        </p>
        <Separator className="mt-3 mb-3" />
        <div className="text-xs text-muted-foreground">
          Next set 01:00 — 03:30 · Rooftop
        </div>
      </HoverCardContent>
    </HoverCard>
  </Stage>
);

/** The backoffice version — a guest record hovered from a reservation row. */
```

### GuestRecord

```jsx
() => (
  <Stage>
    <div className="text-center">
      <div className="text-xs uppercase tracking-widest text-[var(--color-taupe)]">
        Reservations · TS-4821
      </div>
      <div className="font-display text-3xl text-[var(--color-cream)]">
        Table 14 · four guests
      </div>
    </div>
    <HoverCard open>
      <HoverCardTrigger asChild>
        <Button variant="link" className="text-[var(--color-muted-gold)]">
          Kadek Wirawan
        </Button>
      </HoverCardTrigger>
      <HoverCardContent className="w-80 text-[var(--color-charcoal)]">
        <div className="flex items-center gap-3">
          <Avatar>
            <AvatarFallback>KW</AvatarFallback>
          </Avatar>
          <div>
            <div className="font-medium">Kadek Wirawan</div>
            <div className="text-xs text-muted-foreground">
              kadek.wirawan@gmail.com
            </div>
          </div>
        </div>
        <Separator className="mt-3 mb-3" />
        <div className="flex items-center justify-between text-sm">
          <span className="text-muted-foreground">Bookings</span>
          <span className="tabular-nums">11 since Aug 2023</span>
        </div>
        <div className="mt-2 flex items-center justify-between text-sm">
          <span className="text-muted-foreground">Total spend</span>
          <span className="tabular-nums">IDR 41,200,000</span>
        </div>
        <div className="mt-2 flex items-center justify-between text-sm">
          <span className="text-muted-foreground">No-shows</span>
          <span className="tabular-nums">0</span>
        </div>
      </HoverCardContent>
    </HoverCard>
  </Stage>
)
```
