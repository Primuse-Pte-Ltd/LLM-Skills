RadioGroup from @thestage/ui. Use via `window.TheStageUI.RadioGroup` (bundle loaded from the root `_ds_bundle.js`).

## Props

```ts
interface RadioGroupProps {
  style?: CSSProperties;
  defaultValue?: string;
  className?: string;
  dir?: "ltr" | "rtl";
  id?: string;
  children?: React.ReactNode;
  asChild?: boolean;
  disabled?: boolean;
  value?: string;
  name?: string;
  orientation?: "horizontal" | "vertical";
  required?: boolean;
  loop?: boolean;
  /** Allows getting a ref to the component instance. Once the component unmounts, React will set `ref.current` to `null` (or  */
  ref?: string | ((instance: HTMLDivElement) => void | React.DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES[keyof React.DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES]) | React.RefObject<HTMLDivElement>;
}
```

## Examples

### SeatingChoice

```jsx
() => (
  <Dark>
    <div className="max-w-md space-y-4">
      <p className="text-xs uppercase tracking-wider text-[var(--color-taupe)]">
        Where would you like to sit
      </p>
      <RadioGroup defaultValue="rooftop" name="seating">
        <div className="flex items-start gap-3 rounded-md border border-white/10 p-4">
          <RadioGroupItem value="terrace" id="rg-terrace" className="mt-1" />
          <Label htmlFor="rg-terrace" className="text-sm leading-relaxed text-[var(--color-cream)]">
            Garden terrace
            <span className="block text-xs text-[var(--color-taupe)]">
              Open air, seats six · from IDR 450,000
            </span>
          </Label>
        </div>
        <div className="flex items-start gap-3 rounded-md border border-[var(--color-muted-gold)] p-4">
          <RadioGroupItem value="rooftop" id="rg-rooftop" className="mt-1" />
          <Label htmlFor="rg-rooftop" className="text-sm leading-relaxed text-[var(--color-cream)]">
            Rooftop canopy
            <span className="block text-xs text-[var(--color-taupe)]">
              Sunset view, seats eight · from IDR 1,200,000
            </span>
          </Label>
        </div>
        <div className="flex items-start gap-3 rounded-md border border-white/10 p-4">
          <RadioGroupItem value="pavilion" id="rg-pavilion" className="mt-1" />
          <Label htmlFor="rg-pavilion" className="text-sm leading-relaxed text-[var(--color-cream)]">
            Private pavilion
            <span className="block text-xs text-[var(--color-taupe)]">
              Enclosed, seats twelve · from IDR 3,500,000
            </span>
          </Label>
        </div>
      </RadioGroup>
    </div>
  </Dark>
);

/** `orientation="horizontal"` lays the items out in a row for short answers. */
```

### Horizontal

```jsx
() => (
  <Dark>
    <div className="max-w-md space-y-4">
      <p className="text-xs uppercase tracking-wider text-[var(--color-taupe)]">
        Party size
      </p>
      <RadioGroup
        defaultValue="4"
        orientation="horizontal"
        name="party"
        className="flex flex-wrap gap-6"
      >
        <div className="flex items-center gap-2">
          <RadioGroupItem value="2" id="rg-2" />
          <Label htmlFor="rg-2" className="text-sm text-[var(--color-cream)]">
            Two
          </Label>
        </div>
        <div className="flex items-center gap-2">
          <RadioGroupItem value="4" id="rg-4" />
          <Label htmlFor="rg-4" className="text-sm text-[var(--color-cream)]">
            Four
          </Label>
        </div>
        <div className="flex items-center gap-2">
          <RadioGroupItem value="6" id="rg-6" />
          <Label htmlFor="rg-6" className="text-sm text-[var(--color-cream)]">
            Six
          </Label>
        </div>
        <div className="flex items-center gap-2">
          <RadioGroupItem value="8" id="rg-8" />
          <Label htmlFor="rg-8" className="text-sm text-[var(--color-cream)]">
            Eight or more
          </Label>
        </div>
      </RadioGroup>
    </div>
  </Dark>
);

/** The stock component, plus the whole-group `disabled` prop. */
```

### States

```jsx
() => (
  <Light>
    <div className="max-w-md space-y-6">
      <div className="space-y-2">
        <Label className="text-sm font-medium">Deposit</Label>
        <RadioGroup defaultValue="half" name="deposit">
          <div className="flex items-center gap-3">
            <RadioGroupItem value="full" id="rg-full" />
            <Label htmlFor="rg-full">Pay IDR 3,000,000 in full</Label>
          </div>
          <div className="flex items-center gap-3">
            <RadioGroupItem value="half" id="rg-half" />
            <Label htmlFor="rg-half">Half now, half on the night</Label>
          </div>
        </RadioGroup>
      </div>
      <div className="space-y-2">
        <Label className="text-sm font-medium">
          Table upgrade — unavailable for this date
        </Label>
        <RadioGroup defaultValue="none" name="upgrade" disabled>
          <div className="flex items-center gap-3">
            <RadioGroupItem value="none" id="rg-none" />
            <Label htmlFor="rg-none">Keep my table</Label>
          </div>
          <div className="flex items-center gap-3">
            <RadioGroupItem value="cabana" id="rg-cabana" />
            <Label htmlFor="rg-cabana">Move to a pool cabana</Label>
          </div>
        </RadioGroup>
      </div>
    </div>
  </Light>
)
```
