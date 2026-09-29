Spinner from @thestage/ui. Use via `window.TheStageUI.Spinner` (bundle loaded from the root `_ds_bundle.js`).

## Props

```ts
interface SpinnerProps {
  className?: string;
  id?: string;
  style?: CSSProperties;
  children?: React.ReactNode;
  /** Allows getting a ref to the component instance. Once the component unmounts, React will set `ref.current` to `null` (or  */
  ref?: string | ((instance: SVGSVGElement) => void | DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES[keyof DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES]) | RefObject<SVGSVGElement>;
}
```

## Examples

### PendingBooking

```jsx
() => (
  <Dark>
    <div
      className="rounded-lg border border-white/10 bg-white/5 p-5 flex items-center gap-4"
      style={{ width: 440 }}
    >
      <Spinner className="h-6 w-6 text-[var(--color-muted-gold)]" />
      <div className="flex flex-1 flex-col gap-1">
        <span className="font-display text-xl font-normal tracking-wide">
          Confirming your table
        </span>
        <span className="text-sm text-[var(--color-taupe)]">
          Charging IDR 1,200,000 — do not close this window.
        </span>
      </div>
    </div>
    <p className="flex items-center gap-2 text-sm text-[var(--color-champagne)]">
      <Spinner className="text-[var(--color-muted-gold)]" />
      Checking availability for Saturday 15 March&hellip;
    </p>
  </Dark>
);

/** Inside a button, and as the label of a disabled action. */
```

### InAction

```jsx
() => (
  <Dark>
    <div className="flex flex-wrap items-center gap-4">
      <Button
        disabled
        className="bg-[var(--color-muted-gold)] text-black flex items-center gap-2"
      >
        <Spinner />
        Reserving
      </Button>
      <Button
        variant="outline"
        disabled
        className="border-[var(--color-muted-gold)] bg-transparent text-[var(--color-cream)] flex items-center gap-2"
      >
        <Spinner className="text-[var(--color-muted-gold)]" />
        Refunding deposit
      </Button>
    </div>
    <div className="flex items-center gap-3 border-t border-white/10 pt-6">
      <Spinner className="h-8 w-8 text-[var(--color-muted-gold)]" />
      <span className="text-xs uppercase tracking-widest text-[var(--color-taupe)]">
        Loading tonight&rsquo;s guest list
      </span>
    </div>
  </Dark>
);

/** The size axis — the spinner is sized by className, default `size-4`. */
```

### Sizes

```jsx
() => (
  <Light>
    <Spinner />
    <Spinner className="h-6 w-6" />
    <Spinner className="h-8 w-8" />
    <Spinner className="h-8 w-8 text-[var(--color-bronze)]" />
  </Light>
)
```
