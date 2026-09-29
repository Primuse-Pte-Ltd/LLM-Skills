ScrollArea from @thestage/ui. Use via `window.TheStageUI.ScrollArea` (bundle loaded from the root `_ds_bundle.js`).

## Props

```ts
interface ScrollAreaProps {
  style?: CSSProperties;
  className?: string;
  dir?: "ltr" | "rtl";
  id?: string;
  children?: React.ReactNode;
  asChild?: boolean;
  type?: "hover" | "auto" | "always" | "scroll";
  scrollHideDelay?: number;
  /** Allows getting a ref to the component instance. Once the component unmounts, React will set `ref.current` to `null` (or  */
  ref?: string | ((instance: HTMLDivElement) => void | React.DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES[keyof React.DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES]) | React.RefObject<HTMLDivElement>;
}
```

## Examples

### GuestList

```jsx
() => (
  <Dark>
    <p className="text-xs uppercase tracking-widest text-[var(--color-taupe)]">
      Reservation book · Saturday 14 March
    </p>
    <ScrollArea
      type="always"
      className="mt-4 rounded-lg border border-white/10 bg-white/5"
      style={{ height: 260, width: 420 }}
    >
      <div className="p-4">
        {guests.map(([time, name, table, note], i) => (
          <div key={name}>
            {i > 0 ? <Separator className="mt-3 mb-3 bg-white/10" /> : null}
            <div className="flex items-baseline gap-4">
              <span className="tabular-nums text-sm text-[var(--color-muted-gold)]">
                {time}
              </span>
              <div className="flex-1">
                <p className="text-sm">{name}</p>
                <p className="text-[11px] uppercase tracking-widest text-[var(--color-taupe)]">
                  {table}
                </p>
              </div>
              {note ? (
                <Badge className="bg-white/10 text-[10px] uppercase tracking-widest text-[var(--color-champagne)] hover:bg-white/10">
                  {note}
                </Badge>
              ) : null}
            </div>
          </div>
        ))}
      </div>
    </ScrollArea>
  </Dark>
);

/** A horizontal rail of upcoming nights — needs an explicit horizontal ScrollBar. */
```

### UpcomingRail

```jsx
() => (
  <Dark>
    <p className="text-xs uppercase tracking-widest text-[var(--color-taupe)]">
      Next three weeks
    </p>
    <ScrollArea type="always" className="mt-4" style={{ width: 520 }}>
      <div className="flex gap-4 pb-4">
        {[
          ["14 Mar", "Midnight Sessions"],
          ["21 Mar", "Gamelan Nights"],
          ["28 Mar", "Cellar Tasting"],
          ["04 Apr", "Nyepi Eve Supper"],
          ["11 Apr", "Rooftop Sunset Set"],
          ["18 Apr", "Private Hire"],
        ].map(([date, title]) => (
          <div
            key={title}
            className="shrink-0 rounded-lg border border-[var(--color-muted-gold)] bg-white/5 p-4"
            style={{ width: 180 }}
          >
            <p className="text-[11px] uppercase tracking-widest text-[var(--color-muted-gold)]">
              {date}
            </p>
            <p className="mt-2 font-display text-2xl font-normal tracking-wide">
              {title}
            </p>
          </div>
        ))}
      </div>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  </Dark>
);

/** Long-form terms on the cream surface, with the component's own colours. */
```

### Default

```jsx
() => (
  <Light>
    <ScrollArea
      type="always"
      className="rounded-md border p-4"
      style={{ height: 200, width: 420 }}
    >
      <h4 className="font-display text-2xl font-normal tracking-wide">
        Reservation terms
      </h4>
      <p className="mt-3 text-sm leading-relaxed">
        Tables are held for fifteen minutes past the reserved time. Parties of six
        or more are asked for a deposit of IDR 250,000 per guest, redeemable
        against the final bill on the night.
      </p>
      <p className="mt-3 text-sm leading-relaxed">
        Cancellations made more than 48 hours before the reservation are refunded
        in full. Inside 48 hours the deposit is retained and may be moved once to
        another date within the same calendar month.
      </p>
      <p className="mt-3 text-sm leading-relaxed">
        The rooftop is open air. In the event of rain, seated guests are moved to
        the Garden Pavilion where capacity allows, and the kitchen continues to
        serve the full menu until 23:30.
      </p>
      <p className="mt-3 text-sm leading-relaxed">
        Smart casual dress is requested after 19:00. Children under twelve are
        welcome in the Garden Pavilion until 21:00.
      </p>
    </ScrollArea>
  </Light>
)
```
