Slider from @thestage/ui. Use via `window.TheStageUI.Slider` (bundle loaded from the root `_ds_bundle.js`).

## Props

```ts
interface SliderProps {
  form?: string;
  style?: CSSProperties;
  defaultValue?: number[];
  className?: string;
  dir?: "ltr" | "rtl";
  id?: string;
  children?: React.ReactNode;
  asChild?: boolean;
  disabled?: boolean;
  value?: number[];
  max?: number;
  min?: number;
  name?: string;
  orientation?: "horizontal" | "vertical";
  step?: number;
  inverted?: boolean;
  minStepsBetweenThumbs?: number;
  /** Allows getting a ref to the component instance. Once the component unmounts, React will set `ref.current` to `null` (or  */
  ref?: string | ((instance: HTMLSpanElement) => void | React.DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES[keyof React.DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES]) | React.RefObject<HTMLSpanElement>;
}
```

## Examples

### BudgetPerGuest

```jsx
() => (
  <Dark>
    <div className="max-w-md space-y-3">
      <div className="flex items-baseline justify-between">
        <Label
          htmlFor="sl-budget"
          className="text-xs uppercase tracking-wider text-[var(--color-taupe)]"
        >
          Budget per guest
        </Label>
        <span className="font-display text-2xl text-[var(--color-muted-gold)]">
          IDR 850,000
        </span>
      </div>
      <Slider
        id="sl-budget"
        name="budget"
        defaultValue={[850]}
        min={250}
        max={2500}
        step={50}
      />
      <div className="flex justify-between text-xs text-[var(--color-taupe)]">
        <span>IDR 250,000</span>
        <span>IDR 2,500,000</span>
      </div>
    </div>
  </Dark>
);

/**
 * A coarse `step` with the marks written underneath. The vendored component
 * renders exactly one Radix thumb, so every slider here is single-value — a
 * two-ended range is not available from this kit.
 */
```

### SteppedWithMarks

```jsx
() => (
  <Dark>
    <div className="max-w-md space-y-3">
      <div className="flex items-baseline justify-between">
        <Label
          htmlFor="sl-party"
          className="text-xs uppercase tracking-wider text-[var(--color-taupe)]"
        >
          Party size
        </Label>
        <span className="font-display text-2xl text-[var(--color-muted-gold)]">
          8 guests
        </span>
      </div>
      <Slider id="sl-party" name="party" defaultValue={[8]} min={2} max={12} step={2} />
      <div className="flex justify-between text-xs text-[var(--color-taupe)]">
        <span>2</span>
        <span>4</span>
        <span>6</span>
        <span>8</span>
        <span>10</span>
        <span>12</span>
      </div>
    </div>
  </Dark>
);

/** The stock look, and the disabled state, on the surface shadcn assumes. */
```

### DefaultAndDisabled

```jsx
() => (
  <Light>
    <div className="max-w-md space-y-8">
      <div className="space-y-3">
        <Label htmlFor="sl-deposit" className="text-sm font-medium">
          Deposit — 25% of the minimum spend
        </Label>
        <Slider id="sl-deposit" defaultValue={[25]} min={0} max={100} step={5} />
      </div>
      <div className="space-y-3">
        <Label htmlFor="sl-service" className="text-sm font-medium">
          Service charge — fixed at 10% for private hire
        </Label>
        <Slider id="sl-service" defaultValue={[10]} min={0} max={100} step={1} disabled />
      </div>
    </div>
  </Light>
)
```
