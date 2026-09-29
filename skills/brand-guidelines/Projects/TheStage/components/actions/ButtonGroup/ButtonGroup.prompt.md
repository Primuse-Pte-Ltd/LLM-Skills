ButtonGroup from @thestage/ui. Use via `window.TheStageUI.ButtonGroup` (bundle loaded from the root `_ds_bundle.js`).

## Props

```ts
interface ButtonGroupProps {
  /** Allows getting a ref to the component instance. Once the component unmounts, React will set `ref.current` to `null` (or  */
  ref?: string | ((instance: HTMLDivElement) => void | DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES[keyof DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES]) | RefObject<HTMLDivElement>;
  className?: string;
  id?: string;
  style?: CSSProperties;
  children?: React.ReactNode;
  orientation?: "horizontal" | "vertical";
}
```

## Examples

### SegmentedActions

```jsx
() => (
  <Dark>
    <ButtonGroup>
      <Button variant="outline" className={gold}>
        Seated dinner
      </Button>
      <Button variant="outline" className={gold}>
        Cocktail
      </Button>
      <Button variant="outline" className={gold}>
        Full buyout
      </Button>
    </ButtonGroup>
  </Dark>
);

/** `ButtonGroupSeparator` splits a primary action from its overflow trigger. */
```

### SplitAction

```jsx
() => (
  <Dark>
    <ButtonGroup>
      <Button className="bg-[var(--color-muted-gold)] text-black hover:bg-[var(--color-gold-light)]">
        Confirm reservation
      </Button>
      <ButtonGroupSeparator className="bg-[var(--color-dark-green)]" />
      <Button
        aria-label="More booking options"
        className="bg-[var(--color-muted-gold)] text-black hover:bg-[var(--color-gold-light)]"
      >
        ▾
      </Button>
    </ButtonGroup>
  </Dark>
);

/** `ButtonGroupText` as a leading addon on an input — a fixed prefix + action. */
```

### InputWithAddon

```jsx
() => (
  <Dark>
    <ButtonGroup className="w-full max-w-sm">
      <ButtonGroupText className="border-[var(--color-moss)] bg-[var(--color-forest)] text-[var(--color-champagne)]">
        Guests
      </ButtonGroupText>
      <Input
        defaultValue="120"
        className="border-[var(--color-moss)] text-[var(--color-cream)]"
      />
      <Button className="bg-[var(--color-muted-gold)] text-black hover:bg-[var(--color-gold-light)]">
        Quote
      </Button>
    </ButtonGroup>
  </Dark>
);

/** `orientation="vertical"` stacks the group and joins the horizontal edges. */
```

### Vertical

```jsx
() => (
  <Dark>
    <ButtonGroup orientation="vertical" className="w-56">
      <Button variant="outline" className={gold}>
        The Terrace
      </Button>
      <Button variant="outline" className={gold}>
        The Rooftop
      </Button>
      <Button variant="outline" className={gold}>
        The Garden Pavilion
      </Button>
    </ButtonGroup>
  </Dark>
)
```
