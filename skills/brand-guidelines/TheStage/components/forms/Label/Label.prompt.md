Label from @thestage/ui. Use via `window.TheStageUI.Label` (bundle loaded from the root `_ds_bundle.js`).

## Props

```ts
interface LabelProps {
  style?: CSSProperties;
  className?: string;
  id?: string;
  children?: React.ReactNode;
  asChild?: boolean;
  /** Allows getting a ref to the component instance. Once the component unmounts, React will set `ref.current` to `null` (or  */
  ref?: string | ((instance: HTMLLabelElement) => void | React.DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES[keyof React.DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES]) | React.RefObject<HTMLLabelElement>;
}
```

## Examples

### FieldLabels

```jsx
() => (
  <Dark>
    <div className="max-w-md space-y-4">
      <div className="space-y-1.5">
        <Label
          htmlFor="lb-name"
          className="text-xs uppercase tracking-wider text-[var(--color-taupe)]"
        >
          Name on the booking
        </Label>
        <Input
          id="lb-name"
          defaultValue="Ketut Raharja"
          className="on-brand-dark bg-[var(--color-dark-green)] text-[var(--color-cream)]"
        />
      </div>
      <div className="space-y-1.5">
        <Label
          htmlFor="lb-note"
          className="text-xs uppercase tracking-wider text-[var(--color-taupe)]"
        >
          Message to the maître d&rsquo;
        </Label>
        <Textarea
          id="lb-note"
          rows={3}
          defaultValue="Celebrating a tenth anniversary — a quiet corner if one is free."
          className="on-brand-dark bg-[var(--color-dark-green)] text-[var(--color-cream)]"
        />
      </div>
    </div>
  </Dark>
);

/** Wired to a control by `htmlFor`, so the whole label is a hit target. */
```

### WithControls

```jsx
() => (
  <Dark>
    <div className="max-w-md space-y-4">
      <div className="flex items-center gap-3">
        <Checkbox id="lb-terrace" defaultChecked />
        <Label htmlFor="lb-terrace" className="text-sm text-[var(--color-cream)]">
          Seat us on the terrace if the weather holds
        </Label>
      </div>
      <div className="flex items-center justify-between gap-6">
        <Label htmlFor="lb-sms" className="text-sm text-[var(--color-cream)]">
          Send the table reminder by WhatsApp
        </Label>
        <Switch id="lb-sms" defaultChecked />
      </div>
      <div className="flex items-start gap-3">
        <Checkbox id="lb-news" className="mt-0.5" />
        <Label htmlFor="lb-news" className="text-sm leading-relaxed text-[var(--color-cream)]">
          Tell me about private dinners and rooftop sessions
          <span className="block text-xs text-[var(--color-taupe)]">
            One note a month, never a ticket sale.
          </span>
        </Label>
      </div>
    </div>
  </Dark>
);

/**
 * Required marking, and the `peer-disabled` rule the component ships with — a
 * label next to a `peer` input dims and blocks the cursor when that input is
 * disabled.
 */
```

### RequiredAndDisabled

```jsx
() => (
  <Light>
    <div className="max-w-md space-y-4">
      <div className="space-y-1.5">
        <Label htmlFor="lb-req">
          Card holder <span className="text-[var(--color-bronze)]">*</span>
        </Label>
        <Input id="lb-req" required defaultValue="Ayu Pramesti" />
      </div>
      <div className="space-y-1.5">
        <Label htmlFor="lb-plain" className="text-sm font-medium">
          Company (for the invoice)
        </Label>
        <Input id="lb-plain" placeholder="Optional" />
      </div>
      {/* The component ships `peer-disabled:opacity-70` and
          `peer-disabled:cursor-not-allowed`, so a label placed after a control
          marked `peer` dims by itself once that control is disabled. */}
      <div className="flex items-center gap-3">
        <Checkbox id="lb-split" className="peer" disabled defaultChecked />
        <Label htmlFor="lb-split">Split the bill — locked once the deposit is settled</Label>
      </div>
      <div className="flex items-center gap-3">
        <Checkbox id="lb-active" className="peer" />
        <Label htmlFor="lb-active">Email me the receipt</Label>
      </div>
    </div>
  </Light>
)
```
