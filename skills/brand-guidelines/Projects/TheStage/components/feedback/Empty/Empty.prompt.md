Empty from @thestage/ui. Use via `window.TheStageUI.Empty` (bundle loaded from the root `_ds_bundle.js`).

## Props

```ts
interface EmptyProps {
  /** Allows getting a ref to the component instance. Once the component unmounts, React will set `ref.current` to `null` (or  */
  ref?: string | ((instance: HTMLDivElement) => void | DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES[keyof DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES]) | RefObject<HTMLDivElement>;
  className?: string;
  id?: string;
  style?: CSSProperties;
  children?: React.ReactNode;
}
```

## Examples

### NoReservations

```jsx
() => (
  <Dark>
    <Empty className="border border-[var(--color-muted-gold)] bg-white/5" style={{ width: 460 }}>
      <EmptyHeader>
        <EmptyMedia variant="icon" className="bg-white/10 text-[var(--color-muted-gold)]">
          <CalendarOff />
        </EmptyMedia>
        <EmptyTitle className="font-display text-2xl font-normal tracking-wide">
          No reservations tonight
        </EmptyTitle>
        <EmptyDescription>
          Nothing is booked for Tuesday 11 March. The rooftop is still open for
          walk-ins from 18:00.
        </EmptyDescription>
      </EmptyHeader>
      <EmptyContent>
        <Button className="bg-[var(--color-muted-gold)] text-black hover:bg-[var(--color-gold-light)]">
          Open the night for bookings
        </Button>
        <p className="text-xs uppercase tracking-widest text-[var(--color-taupe)]">
          Last booked 3 days ago
        </p>
      </EmptyContent>
    </Empty>
  </Dark>
);

/** A search that found nothing, with the `default` media variant (no fill). */
```

### NoSearchResults

```jsx
() => (
  <Dark>
    <Empty className="border border-dashed border-white/10" style={{ width: 460 }}>
      <EmptyHeader>
        <EmptyMedia className="text-[var(--color-muted-gold)]">
          <Search width={40} height={40} strokeWidth={1} />
        </EmptyMedia>
        <EmptyTitle className="font-display text-2xl font-normal tracking-wide">
          No guest found
        </EmptyTitle>
        <EmptyDescription>
          Nobody on Saturday&rsquo;s list matches &ldquo;Wayan Suartika&rdquo;.
          Check the spelling, or search the whole season.
        </EmptyDescription>
      </EmptyHeader>
      <EmptyContent>
        <Button
          variant="outline"
          className="border-[var(--color-muted-gold)] bg-transparent text-[var(--color-cream)] hover:bg-white/5"
        >
          Search all events
        </Button>
      </EmptyContent>
    </Empty>
  </Dark>
);

/** The raw primitive on the light surface the kit assumes. `EmptyMedia`'s icon
 *  fill is --muted (#f5f5f5), lighter than cream, so it needs a bg-background
 *  panel under it to read at all. */
```

### Default

```jsx
() => (
  <Light>
    <Empty
      className="rounded-lg border border-dashed bg-background"
      style={{ width: 460 }}
    >
      <EmptyHeader>
        <EmptyMedia variant="icon">
          <Users />
        </EmptyMedia>
        <EmptyTitle>Your party is empty</EmptyTitle>
        <EmptyDescription>
          Add the guests joining you so we can seat the table correctly.
        </EmptyDescription>
      </EmptyHeader>
      <EmptyContent>
        <Button size="sm">Add a guest</Button>
      </EmptyContent>
    </Empty>
  </Light>
)
```
