InputOTP from @thestage/ui. Use via `window.TheStageUI.InputOTP` (bundle loaded from the root `_ds_bundle.js`).

## Props

```ts
interface InputOTPProps {
  style?: CSSProperties;
  className?: string;
  id?: string;
  children?: React.ReactNode;
  value?: string;
  maxLength: number;
  render?: (props: RenderProps) => ReactNode;
  textAlign?: "center" | "left" | "right";
  pushPasswordManagerStrategy?: "none" | "increase-width";
  pasteTransformer?: (pasted: string) => string;
  containerClassName?: string;
  noScriptCSSFallback?: string;
  /** Allows getting a ref to the component instance. Once the component unmounts, React will set `ref.current` to `null` (or  */
  ref?: string | ((instance: HTMLInputElement) => void | React.DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES[keyof React.DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES]) | React.RefObject<HTMLInputElement>;
}
```

## Examples

### ConfirmBooking

```jsx
() => (
  <Dark>
    <div className="space-y-3">
      <Label
        htmlFor="otp-confirm"
        className="text-xs uppercase tracking-wider text-[var(--color-taupe)]"
      >
        Confirmation code
      </Label>
      <InputOTP id="otp-confirm" maxLength={6} defaultValue="483102">
        <InputOTPGroup>
          <InputOTPSlot index={0} className="text-[var(--color-cream)]" />
          <InputOTPSlot index={1} className="text-[var(--color-cream)]" />
          <InputOTPSlot index={2} className="text-[var(--color-cream)]" />
        </InputOTPGroup>
        <InputOTPSeparator className="text-[var(--color-muted-gold)]" />
        <InputOTPGroup>
          <InputOTPSlot index={3} className="text-[var(--color-cream)]" />
          <InputOTPSlot index={4} className="text-[var(--color-cream)]" />
          <InputOTPSlot index={5} className="text-[var(--color-cream)]" />
        </InputOTPGroup>
      </InputOTP>
      <p className="text-xs text-[var(--color-taupe)]">
        Sent to +62 812 3907 4415. It expires in ten minutes.
      </p>
    </div>
  </Dark>
);

/** Four slots in one group, outlined in gold — the PIN a host keys at the table. */
```

### TablePin

```jsx
() => (
  <Dark>
    <div className="space-y-3">
      <Label
        htmlFor="otp-pin"
        className="text-xs uppercase tracking-wider text-[var(--color-taupe)]"
      >
        Host PIN
      </Label>
      <InputOTP id="otp-pin" maxLength={4} defaultValue="7209">
        <InputOTPGroup>
          <InputOTPSlot
            index={0}
            className="h-12 w-12 border-[var(--color-muted-gold)] text-lg text-[var(--color-muted-gold)]"
          />
          <InputOTPSlot
            index={1}
            className="h-12 w-12 border-[var(--color-muted-gold)] text-lg text-[var(--color-muted-gold)]"
          />
          <InputOTPSlot
            index={2}
            className="h-12 w-12 border-[var(--color-muted-gold)] text-lg text-[var(--color-muted-gold)]"
          />
          <InputOTPSlot
            index={3}
            className="h-12 w-12 border-[var(--color-muted-gold)] text-lg text-[var(--color-muted-gold)]"
          />
        </InputOTPGroup>
      </InputOTP>
      <p className="text-xs text-[var(--color-taupe)]">
        Opens the reservation book for Terrace 12.
      </p>
    </div>
  </Dark>
);

/** Partly typed and fully empty, unstyled, on the surface shadcn assumes. */
```

### Default

```jsx
() => (
  <Light>
    <div className="space-y-6">
      <div className="space-y-2">
        <Label className="text-sm font-medium">Partly entered</Label>
        <InputOTP maxLength={6} defaultValue="4831">
          <InputOTPGroup>
            <InputOTPSlot index={0} />
            <InputOTPSlot index={1} />
            <InputOTPSlot index={2} />
            <InputOTPSlot index={3} />
            <InputOTPSlot index={4} />
            <InputOTPSlot index={5} />
          </InputOTPGroup>
        </InputOTP>
      </div>
      <div className="space-y-2">
        <Label className="text-sm font-medium">Empty, and disabled</Label>
        <InputOTP maxLength={6} disabled>
          <InputOTPGroup>
            <InputOTPSlot index={0} />
            <InputOTPSlot index={1} />
            <InputOTPSlot index={2} />
            <InputOTPSlot index={3} />
            <InputOTPSlot index={4} />
            <InputOTPSlot index={5} />
          </InputOTPGroup>
        </InputOTP>
      </div>
    </div>
  </Light>
)
```
