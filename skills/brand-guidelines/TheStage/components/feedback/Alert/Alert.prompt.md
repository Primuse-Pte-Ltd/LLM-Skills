Alert from @thestage/ui. Use via `window.TheStageUI.Alert` (bundle loaded from the root `_ds_bundle.js`).

## Props

```ts
interface AlertProps {
  className?: string;
  id?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
  variant?: "default" | "destructive";
  /** Allows getting a ref to the component instance. Once the component unmounts, React will set `ref.current` to `null` (or  */
  ref?: string | ((instance: HTMLDivElement) => void | React.DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES[keyof React.DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES]) | React.RefObject<HTMLDivElement>;
}
```

## Examples

### BookingConfirmed

```jsx
() => (
  <Dark>
    <Alert className="border-[var(--color-muted-gold)]">
      <CircleCheck width={16} height={16} className="text-[var(--color-muted-gold)]" />
      <AlertTitle className="font-display text-xl font-normal tracking-wide">
        Reservation confirmed
      </AlertTitle>
      <AlertDescription className="text-[var(--color-champagne)]">
        Table 12 for four guests, Friday 14 March at 20:30. Your deposit of
        IDR 1,200,000 has been received.
      </AlertDescription>
    </Alert>
    <Alert>
      <Info width={16} height={16} className="text-[var(--color-muted-gold)]" />
      <AlertTitle className="font-display text-xl font-normal tracking-wide">
        Rooftop closes at 01:00
      </AlertTitle>
      <AlertDescription className="text-[var(--color-taupe)]">
        Last orders are taken at 00:30. The garden bar stays open until 02:00.
      </AlertDescription>
    </Alert>
  </Dark>
);

/** The destructive variant: a failed payment and a sold-out night. */
```

### PaymentFailed

```jsx
() => (
  <Dark>
    <Alert variant="destructive">
      <OctagonX width={16} height={16} />
      <AlertTitle className="font-display text-xl font-normal tracking-wide">
        Payment declined
      </AlertTitle>
      <AlertDescription>
        Your card was declined by the issuing bank. The table is held for another
        9 minutes — try another card to keep it.
      </AlertDescription>
    </Alert>
    <Alert variant="destructive">
      <TriangleAlert width={16} height={16} />
      <AlertTitle className="font-display text-xl font-normal tracking-wide">
        Midnight Sessions is sold out
      </AlertTitle>
      <AlertDescription>
        All 180 places for Saturday 15 March are taken. Join the waiting list and
        we will write the moment a table is released.
      </AlertDescription>
    </Alert>
  </Dark>
);

/** The built-in variant axis, on the light surface the kit is built for. */
```

### Variants

```jsx
() => (
  <Light>
    <Alert>
      <Info width={16} height={16} />
      <AlertTitle>Default</AlertTitle>
      <AlertDescription>
        Guest list for tonight closes at 18:00.
      </AlertDescription>
    </Alert>
    <Alert variant="destructive">
      <OctagonX width={16} height={16} />
      <AlertTitle>Destructive</AlertTitle>
      <AlertDescription>
        Refund failed — the original card is no longer valid.
      </AlertDescription>
    </Alert>
    <Alert>
      <AlertTitle>Title only, no icon</AlertTitle>
      <AlertDescription>
        Kitchen service ends at 23:00.
      </AlertDescription>
    </Alert>
  </Light>
)
```

## Related

`AlertDialog`
