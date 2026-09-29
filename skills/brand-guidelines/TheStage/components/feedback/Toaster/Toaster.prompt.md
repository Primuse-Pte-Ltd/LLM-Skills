Toaster from @thestage/ui. Use via `window.TheStageUI.Toaster` (bundle loaded from the root `_ds_bundle.js`).

## Props

```ts
interface ToasterProps {
  id?: string;
  invert?: boolean;
  theme?: "light" | "dark" | "system";
  position?: "top-left" | "top-right" | "bottom-left" | "bottom-right" | "top-center" | "bottom-center";
  hotkey?: string[];
  richColors?: boolean;
  expand?: boolean;
  duration?: number;
  gap?: number;
  visibleToasts?: number;
  closeButton?: boolean;
  toastOptions?: ToastOptions;
  className?: string;
  style?: CSSProperties;
  offset?: string | number | { top?: string | number; right?: string | number; bottom?: string | number; left?: string | number; };
  mobileOffset?: string | number | { top?: string | number; right?: string | number; bottom?: string | number; left?: string | number; };
  dir?: "auto" | "ltr" | "rtl";
  swipeDirections?: ("top" | "bottom" | "left" | "right")[];
  icons?: ToastIcons;
  containerAriaLabel?: string;
  /** Allows getting a ref to the component instance. Once the component unmounts, React will set `ref.current` to `null` (or  */
  ref?: string | ((instance: HTMLElement) => void | DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES[keyof DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES]) | RefObject<HTMLElement>;
}
```

## Examples

### ToastKinds

```jsx
() => (
  <Dark>
    <p className="text-xs uppercase tracking-widest text-[var(--color-taupe)]">
      Static representation — not a live toast
    </p>
    <div className="mt-4 flex flex-col gap-3">
      <MockToast
        icon={<CircleCheck width={16} height={16} />}
        title="Reservation confirmed"
        description="Table 12 for four, Friday 14 March at 20:30."
      />
      <MockToast
        icon={<OctagonX width={16} height={16} />}
        title="Payment declined"
        description="Your card was refused by the issuing bank."
        action="Retry"
      />
      <MockToast
        icon={<TriangleAlert width={16} height={16} />}
        title="Midnight Sessions is nearly full"
        description="12 of 180 places left for Saturday."
      />
      <MockToast
        icon={<Info width={16} height={16} />}
        title="Guest list closes at 18:00"
        description="Additions after that go to the door team."
      />
    </div>
  </Dark>
);

/** The host in place beside the action that fires a toast. */
```

### InPage

```jsx
() => (
  <Dark>
    <div
      className="rounded-lg border border-[var(--color-muted-gold)] bg-white/5 p-6"
      style={{ width: 420 }}
    >
      <p className="text-xs uppercase tracking-widest text-[var(--color-taupe)]">
        Saturday 15 March
      </p>
      <p className="mt-2 font-display text-3xl font-normal tracking-wide">
        Gamelan Supper Club
      </p>
      <p className="mt-3 text-sm text-[var(--color-champagne)]">
        Deposit IDR 1,200,000 — refundable up to 48 hours before.
      </p>
      <Button className="mt-5 bg-[var(--color-muted-gold)] text-black hover:bg-[var(--color-gold-light)]">
        Confirm booking
      </Button>
    </div>
    <div className="mt-6">
      <MockToast
        icon={<CircleCheck width={16} height={16} />}
        title="Reservation confirmed"
        description="We have emailed your QR code to putu@example.com."
        action="View"
      />
    </div>
    <Toaster position="bottom-right" />
  </Dark>
);

/** The action and cancel slots, plus the loading toast — the rest of the axis. */
```

### WithActions

```jsx
() => (
  <Dark>
    <p className="text-xs uppercase tracking-widest text-[var(--color-taupe)]">
      Static representation — not a live toast
    </p>
    <div className="mt-4 flex flex-col gap-3">
      <div
        className="group toast flex items-center gap-2 rounded-lg border border-border bg-background text-foreground shadow-lg"
        style={{ width: 356, padding: 16, fontSize: 13 }}
      >
        <div className="flex h-4 w-4 shrink-0 items-center justify-center text-[var(--color-muted-gold)]">
          <TriangleAlert width={16} height={16} />
        </div>
        <div className="flex flex-1 flex-col gap-1">
          <span className="font-medium leading-tight">Cancel this reservation?</span>
          <span className="leading-snug text-muted-foreground">
            Table 12, Friday 14 March. The deposit is refundable.
          </span>
        </div>
        <button
          type="button"
          className="shrink-0 rounded-md bg-muted text-muted-foreground"
          style={{ height: 24, paddingLeft: 8, paddingRight: 8, fontSize: 12 }}
        >
          Keep
        </button>
        <button
          type="button"
          className="shrink-0 rounded-md bg-primary text-primary-foreground"
          style={{ height: 24, paddingLeft: 8, paddingRight: 8, fontSize: 12 }}
        >
          Cancel
        </button>
      </div>
      <MockToast
        icon={<LoaderCircle width={16} height={16} className="animate-spin" />}
        title="Refunding IDR 1,200,000"
        description="This usually takes under a minute."
      />
    </div>
    <Toaster position="top-center" />
  </Dark>
)
```
