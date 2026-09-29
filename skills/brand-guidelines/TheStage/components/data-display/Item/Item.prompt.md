Item from @thestage/ui. Use via `window.TheStageUI.Item` (bundle loaded from the root `_ds_bundle.js`).

## Props

```ts
interface ItemProps {
  /** Allows getting a ref to the component instance. Once the component unmounts, React will set `ref.current` to `null` (or  */
  ref?: string | ((instance: HTMLDivElement) => void | DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES[keyof DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES]) | RefObject<HTMLDivElement>;
  className?: string;
  id?: string;
  style?: CSSProperties;
  children?: React.ReactNode;
  size?: "default" | "sm";
  variant?: "muted" | "default" | "outline";
  asChild?: boolean;
}
```

## Examples

### GuestList

```jsx
() => (
  <Dark>
    <p className="text-xs uppercase tracking-widest text-[var(--color-taupe)] mb-4">
      Tonight · arrivals
    </p>
    <ItemGroup className="border border-white/10 bg-white/5 rounded-md max-w-xl">
      <Item>
        <ItemMedia>
          <Avatar className="border border-[var(--color-muted-gold)]">
            <AvatarFallback className="bg-[var(--color-moss)] text-[var(--color-muted-gold)] font-display text-lg font-normal">
              AK
            </AvatarFallback>
          </Avatar>
        </ItemMedia>
        <ItemContent>
          <ItemTitle className="text-[var(--color-cream)]">Ayu Kusuma</ItemTitle>
          <ItemDescription>Table R1 · party of 4 · 19:30</ItemDescription>
        </ItemContent>
        <ItemActions>
          <Badge className="bg-[var(--color-muted-gold)] text-black hover:bg-[var(--color-muted-gold)]">
            Seated
          </Badge>
        </ItemActions>
      </Item>
      <ItemSeparator className="bg-white/20" />
      <Item>
        <ItemMedia>
          <Avatar className="border border-[var(--color-muted-gold)]">
            <AvatarFallback className="bg-[var(--color-moss)] text-[var(--color-muted-gold)] font-display text-lg font-normal">
              MW
            </AvatarFallback>
          </Avatar>
        </ItemMedia>
        <ItemContent>
          <ItemTitle className="text-[var(--color-cream)]">Made Wirawan</ItemTitle>
          <ItemDescription>Table C2 · party of 2 · 20:00</ItemDescription>
        </ItemContent>
        <ItemActions>
          <Button
            size="sm"
            variant="outline"
            className="border-[var(--color-muted-gold)] bg-transparent text-[var(--color-cream)] hover:bg-white/5"
          >
            Seat
          </Button>
        </ItemActions>
      </Item>
      <ItemSeparator className="bg-white/20" />
      <Item>
        <ItemMedia>
          <Avatar className="border border-white/10">
            <AvatarFallback className="bg-[var(--color-forest)] text-[var(--color-taupe)] font-display text-lg font-normal">
              BV
            </AvatarFallback>
          </Avatar>
        </ItemMedia>
        <ItemContent>
          <ItemTitle className="text-[var(--color-cream)]">Bram de Vries</ItemTitle>
          <ItemDescription>Table L6 · party of 2 · 22:00</ItemDescription>
        </ItemContent>
        <ItemActions>
          <Badge
            variant="outline"
            className="border-[var(--color-taupe)] text-[var(--color-taupe)]"
          >
            Waitlist
          </Badge>
        </ItemActions>
      </Item>
    </ItemGroup>
  </Dark>
);

/** The variant axis: `default` is transparent, `outline` draws --border,
 *  `muted` fills with --muted/50. */
```

### Variants

```jsx
() => (
  <Dark>
    <div className="flex flex-col gap-4 max-w-xl">
      <Item>
        <ItemContent>
          <ItemTitle className="text-[var(--color-cream)]">default</ItemTitle>
          <ItemDescription>Transparent — for rows inside a framed group.</ItemDescription>
        </ItemContent>
      </Item>
      <Item variant="outline">
        <ItemContent>
          <ItemTitle className="text-[var(--color-cream)]">outline</ItemTitle>
          <ItemDescription>A moss hairline — a standalone card row.</ItemDescription>
        </ItemContent>
      </Item>
      <Item variant="muted">
        <ItemContent>
          <ItemTitle className="text-[var(--color-cream)]">muted</ItemTitle>
          <ItemDescription>Filled — the selected or raised row.</ItemDescription>
        </ItemContent>
      </Item>
    </div>
  </Dark>
);

/** `size="sm"` plus `ItemMedia variant="icon"` — the compact settings row. */
```

### IconRows

```jsx
() => (
  <Dark>
    <p className="text-xs uppercase tracking-widest text-[var(--color-taupe)] mb-4">
      Venue hire · what is included
    </p>
    <div className="flex flex-col gap-2 max-w-xl">
      <Item variant="outline" size="sm">
        <ItemMedia variant="icon" className="border-[var(--color-muted-gold)] bg-[var(--color-moss)] text-[var(--color-muted-gold)]">
          <span className="font-display text-base">R</span>
        </ItemMedia>
        <ItemContent>
          <ItemTitle className="text-[var(--color-cream)]">Rooftop terrace</ItemTitle>
          <ItemDescription>Seats 120 standing, 60 seated.</ItemDescription>
        </ItemContent>
        <ItemActions>
          <span className="text-xs uppercase tracking-widest text-[var(--color-muted-gold)] tabular-nums">
            IDR 42,000,000
          </span>
        </ItemActions>
      </Item>
      <Item variant="outline" size="sm">
        <ItemMedia variant="icon" className="border-[var(--color-muted-gold)] bg-[var(--color-moss)] text-[var(--color-muted-gold)]">
          <span className="font-display text-base">G</span>
        </ItemMedia>
        <ItemContent>
          <ItemTitle className="text-[var(--color-cream)]">Garden pavilion</ItemTitle>
          <ItemDescription>Seats 80 seated, gamelan stage included.</ItemDescription>
        </ItemContent>
        <ItemActions>
          <span className="text-xs uppercase tracking-widest text-[var(--color-muted-gold)] tabular-nums">
            IDR 28,000,000
          </span>
        </ItemActions>
      </Item>
      <Item variant="outline" size="sm">
        <ItemMedia variant="icon" className="border-[var(--color-muted-gold)] bg-[var(--color-moss)] text-[var(--color-muted-gold)]">
          <span className="font-display text-base">C</span>
        </ItemMedia>
        <ItemContent>
          <ItemTitle className="text-[var(--color-cream)]">Cellar room</ItemTitle>
          <ItemDescription>Seats 24, private tasting menu.</ItemDescription>
        </ItemContent>
        <ItemActions>
          <span className="text-xs uppercase tracking-widest text-[var(--color-muted-gold)] tabular-nums">
            IDR 15,000,000
          </span>
        </ItemActions>
      </Item>
    </div>
  </Dark>
)
```
