Checkbox from @thestage/ui. Use via `window.TheStageUI.Checkbox` (bundle loaded from the root `_ds_bundle.js`).

## Props

```ts
interface CheckboxProps {
  style?: CSSProperties;
  defaultChecked?: boolean | "indeterminate";
  className?: string;
  id?: string;
  children?: React.ReactNode;
  asChild?: boolean;
  checked?: boolean | "indeterminate";
  required?: boolean;
  /** Allows getting a ref to the component instance. Once the component unmounts, React will set `ref.current` to `null` (or  */
  ref?: string | ((instance: HTMLButtonElement) => void | React.DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES[keyof React.DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES]) | React.RefObject<HTMLButtonElement>;
}
```

## Examples

### GuestPreferences

```jsx
() => (
  <Dark>
    <div className="max-w-md space-y-4">
      <p className="text-xs uppercase tracking-wider text-[var(--color-taupe)]">
        Before you arrive
      </p>
      <div className="flex items-center gap-3">
        <Checkbox id="cb-terrace" defaultChecked />
        <Label htmlFor="cb-terrace" className="text-sm text-[var(--color-cream)]">
          Seat us on the terrace
        </Label>
      </div>
      <div className="flex items-center gap-3">
        <Checkbox id="cb-veg" defaultChecked />
        <Label htmlFor="cb-veg" className="text-sm text-[var(--color-cream)]">
          Two vegetarian tasting menus
        </Label>
      </div>
      <div className="flex items-center gap-3">
        <Checkbox id="cb-cake" />
        <Label htmlFor="cb-cake" className="text-sm text-[var(--color-cream)]">
          Birthday cake at the table (IDR 350,000)
        </Label>
      </div>
      <div className="flex items-center gap-3">
        <Checkbox id="cb-pickup" />
        <Label htmlFor="cb-pickup" className="text-sm text-[var(--color-cream)]">
          Arrange a car from Seminyak
        </Label>
      </div>
    </div>
  </Dark>
);

/** The consent shape: box aligned to the first line of a longer statement. */
```

### ConsentBlock

```jsx
() => (
  <Dark>
    <div className="max-w-md space-y-4">
      <div className="flex items-start gap-3">
        <Checkbox id="cb-terms" defaultChecked className="mt-1" />
        <Label htmlFor="cb-terms" className="text-sm leading-relaxed text-[var(--color-cream)]">
          I accept the reservation terms
          <span className="block text-xs text-[var(--color-taupe)]">
            The table is held for fifteen minutes. The deposit of IDR 1,500,000 is
            refundable up to 48 hours before the booking.
          </span>
        </Label>
      </div>
      <div className="flex items-start gap-3">
        <Checkbox id="cb-photo" className="mt-1" />
        <Label htmlFor="cb-photo" className="text-sm leading-relaxed text-[var(--color-cream)]">
          Photography consent
          <span className="block text-xs text-[var(--color-taupe)]">
            Our house photographer works the rooftop on Saturdays.
          </span>
        </Label>
      </div>
    </div>
  </Dark>
);

/** The full state axis, on the surface the stock component is drawn for. */
```

### States

```jsx
() => (
  <Light>
    <div className="max-w-md space-y-4">
      <div className="flex items-center gap-3">
        <Checkbox id="cb-off" />
        <Label htmlFor="cb-off">Unchecked</Label>
      </div>
      <div className="flex items-center gap-3">
        <Checkbox id="cb-on" defaultChecked />
        <Label htmlFor="cb-on">Checked</Label>
      </div>
      <div className="flex items-center gap-3">
        <Checkbox id="cb-req" required defaultChecked />
        <Label htmlFor="cb-req">Required, and satisfied</Label>
      </div>
      <div className="flex items-center gap-3">
        <Checkbox id="cb-dis" disabled className="peer" />
        <Label htmlFor="cb-dis">Disabled</Label>
      </div>
      <div className="flex items-center gap-3">
        <Checkbox id="cb-dison" disabled defaultChecked className="peer" />
        <Label htmlFor="cb-dison">Disabled and checked</Label>
      </div>
    </div>
  </Light>
)
```
