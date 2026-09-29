Input from @thestage/ui. Use via `window.TheStageUI.Input` (bundle loaded from the root `_ds_bundle.js`).

## Props

```ts
interface InputProps {
  style?: CSSProperties;
  className?: string;
  id?: string;
  children?: React.ReactNode;
  /** Allows getting a ref to the component instance. Once the component unmounts, React will set `ref.current` to `null` (or  */
  ref?: string | ((instance: HTMLInputElement) => void | React.DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES[keyof React.DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES]) | React.RefObject<HTMLInputElement>;
}
```

## Examples

### ReservationForm

```jsx
() => (
  <Dark>
    <div className="max-w-md space-y-4">
      <div className="space-y-1.5">
        <FieldLabel htmlFor="guest-name">Full name</FieldLabel>
        <Input
          id="guest-name"
          defaultValue="Ayu Pramesti"
          className="on-brand-dark bg-[var(--color-dark-green)] text-[var(--color-cream)]"
        />
      </div>
      <div className="space-y-1.5">
        <FieldLabel htmlFor="guest-email">Email</FieldLabel>
        <Input
          id="guest-email"
          type="email"
          defaultValue="ayu.pramesti@gmail.com"
          className="on-brand-dark bg-[var(--color-dark-green)] text-[var(--color-cream)]"
        />
      </div>
      <div className="space-y-1.5">
        <FieldLabel htmlFor="guest-phone">WhatsApp</FieldLabel>
        <Input
          id="guest-phone"
          type="tel"
          defaultValue="+62 812 3907 4415"
          className="on-brand-dark bg-[var(--color-dark-green)] text-[var(--color-cream)]"
        />
      </div>
    </div>
  </Dark>
);

/** The native `type` axis — the same field carries date, time and number entry. */
```

### Types

```jsx
() => (
  <Dark>
    <div className="max-w-md space-y-4">
      <div className="space-y-1.5">
        <FieldLabel htmlFor="res-date">Date of visit</FieldLabel>
        <Input
          id="res-date"
          type="date"
          defaultValue="2026-03-14"
          className="on-brand-dark bg-[var(--color-dark-green)] text-[var(--color-cream)]"
        />
      </div>
      <div className="space-y-1.5">
        <FieldLabel htmlFor="res-time">Arrival</FieldLabel>
        <Input
          id="res-time"
          type="time"
          defaultValue="20:30"
          className="on-brand-dark bg-[var(--color-dark-green)] text-[var(--color-cream)]"
        />
      </div>
      <div className="space-y-1.5">
        <FieldLabel htmlFor="res-guests">Guests</FieldLabel>
        <Input
          id="res-guests"
          type="number"
          min={1}
          max={12}
          defaultValue={4}
          className="on-brand-dark bg-[var(--color-dark-green)] text-[var(--color-cream)]"
        />
      </div>
    </div>
  </Dark>
);

/** Input paired with an action, the shape used by the promo code block. */
```

### WithAction

```jsx
() => (
  <Dark>
    <div className="max-w-md space-y-1.5">
      <FieldLabel htmlFor="promo">Promotion code</FieldLabel>
      <div className="flex gap-2">
        <Input
          id="promo"
          placeholder="Enter code"
          defaultValue="LEGIAN25"
          className="on-brand-dark bg-[var(--color-dark-green)] text-[var(--color-cream)] uppercase"
        />
        <Button className="bg-[var(--color-muted-gold)] text-black hover:bg-[var(--color-gold-light)]">
          Apply
        </Button>
      </div>
      <p className="text-xs text-[var(--color-taupe)]">
        IDR 250,000 off tables booked before 18:00.
      </p>
    </div>
  </Dark>
);

/** Placeholder, filled, read-only and disabled, on the surface shadcn assumes. */
```

### States

```jsx
() => (
  <Light>
    <div className="max-w-md space-y-4">
      <div className="space-y-1.5">
        <Label htmlFor="st-empty">Special request</Label>
        <Input id="st-empty" placeholder="Anniversary, dietary needs, seating…" />
      </div>
      <div className="space-y-1.5">
        <Label htmlFor="st-filled">Booking reference</Label>
        <Input id="st-filled" defaultValue="TS-2026-0418" />
      </div>
      <div className="space-y-1.5">
        <Label htmlFor="st-readonly">Table</Label>
        <Input id="st-readonly" readOnly defaultValue="Terrace 12 · seats 6" />
      </div>
      <div className="space-y-1.5">
        <Label htmlFor="st-disabled">Deposit paid</Label>
        <Input id="st-disabled" disabled defaultValue="IDR 1,500,000" />
      </div>
    </div>
  </Light>
)
```

## Related

`InputGroup`, `InputOTP`
