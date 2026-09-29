Toggle from @thestage/ui. Use via `window.TheStageUI.Toggle` (bundle loaded from the root `_ds_bundle.js`).

## Props

```ts
interface ToggleProps {
  style?: CSSProperties;
  className?: string;
  id?: string;
  children?: React.ReactNode;
  asChild?: boolean;
  /** The controlled state of the toggle. */
  pressed?: boolean;
  /** The state of the toggle when initially rendered. Use `defaultPressed` if you do not need to control the state of the tog */
  defaultPressed?: boolean;
  size?: "default" | "sm" | "lg";
  variant?: "default" | "outline";
  /** Allows getting a ref to the component instance. Once the component unmounts, React will set `ref.current` to `null` (or  */
  ref?: string | ((instance: HTMLButtonElement) => void | React.DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES[keyof React.DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES]) | React.RefObject<HTMLButtonElement>;
}
```

## Examples

### EventFilters

```jsx
() => (
  <Dark>
    <Toggle defaultPressed className={on}>
      Live music
    </Toggle>
    <Toggle defaultPressed className={on}>
      Rooftop
    </Toggle>
    <Toggle className={on}>Private dining</Toggle>
    <Toggle className={on}>Wedding</Toggle>
  </Dark>
);

/** `variant="outline"` keeps an unpressed hairline, so the off state still reads. */
```

### OutlineOnDark

```jsx
() => (
  <Dark>
    <Toggle
      variant="outline"
      defaultPressed
      className={`border-white/10 ${on} data-[state=on]:border-[var(--color-muted-gold)]`}
    >
      Sunset seating
    </Toggle>
    <Toggle
      variant="outline"
      className={`border-white/10 ${on} data-[state=on]:border-[var(--color-muted-gold)]`}
    >
      Late seating
    </Toggle>
    <Toggle
      variant="outline"
      disabled
      className={`border-white/10 ${on}`}
    >
      Fully booked
    </Toggle>
  </Dark>
);

/** The size axis: `sm`, `default`, `lg`. Each shown pressed. */
```

### Sizes

```jsx
() => (
  <Dark>
    <Toggle size="sm" defaultPressed className={on}>
      Sm
    </Toggle>
    <Toggle size="default" defaultPressed className={on}>
      Default
    </Toggle>
    <Toggle size="lg" defaultPressed className={on}>
      Large
    </Toggle>
  </Dark>
);

/** The variant axis on the light surface these stock tokens are drawn for.
 *  The stock `on` fill is near-invisible here, so selection is drawn in charcoal. */
```

### Variants

```jsx
() => (
  <Light>
    <Toggle defaultPressed className={lightOn}>
      Vegetarian
    </Toggle>
    <Toggle className={lightOn}>Pescatarian</Toggle>
    <Toggle
      variant="outline"
      defaultPressed
      className={`border-[var(--color-stone)] ${lightOn} data-[state=on]:border-[var(--color-charcoal)]`}
    >
      Halal
    </Toggle>
    <Toggle
      variant="outline"
      className={`border-[var(--color-stone)] ${lightOn}`}
    >
      Gluten free
    </Toggle>
  </Light>
)
```

## Related

`ToggleGroup`
