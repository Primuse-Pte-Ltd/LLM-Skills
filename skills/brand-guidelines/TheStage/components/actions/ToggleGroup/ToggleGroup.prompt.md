ToggleGroup from @thestage/ui. Use via `window.TheStageUI.ToggleGroup` (bundle loaded from the root `_ds_bundle.js`).

## Props

```ts
interface ToggleGroupProps {
  style?: CSSProperties;
  /** The value of the item that is pressed when initially rendered. Use `defaultValue` if you do not need to control the stat */
  defaultValue?: string | string[];
  className?: string;
  dir?: "ltr" | "rtl";
  id?: string;
  children?: React.ReactNode;
  asChild?: boolean;
  /** Whether the group is disabled from user interaction. */
  disabled?: boolean;
  /** The controlled stateful value of the item that is pressed. */
  value?: string | string[];
  type: "multiple" | "single";
  orientation?: "horizontal" | "vertical";
  loop?: boolean;
  /** Whether the group should maintain roving focus of its buttons. */
  rovingFocus?: boolean;
  size?: "default" | "sm" | "lg";
  variant?: "default" | "outline";
  /** Allows getting a ref to the component instance. Once the component unmounts, React will set `ref.current` to `null` (or  */
  ref?: string | ((instance: HTMLDivElement) => void | React.DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES[keyof React.DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES]) | React.RefObject<HTMLDivElement>;
}
```

## Examples

### VenueAreas

```jsx
() => (
  <Dark>
    <Label>Spaces required</Label>
    <ToggleGroup
      type="multiple"
      variant="outline"
      defaultValue={["terrace", "rooftop"]}
    >
      <ToggleGroupItem value="terrace" className={outlineItem}>
        Terrace
      </ToggleGroupItem>
      <ToggleGroupItem value="rooftop" className={outlineItem}>
        Rooftop
      </ToggleGroupItem>
      <ToggleGroupItem value="garden" className={outlineItem}>
        Garden
      </ToggleGroupItem>
      <ToggleGroupItem value="cellar" className={outlineItem}>
        Wine Cellar
      </ToggleGroupItem>
    </ToggleGroup>
  </Dark>
);

/** `type="single"` — exactly one seating time, always one selected. */
```

### SeatingTime

```jsx
() => (
  <Dark>
    <Label>Seating</Label>
    <ToggleGroup type="single" defaultValue="sunset">
      <ToggleGroupItem value="early" className={item}>
        17:30
      </ToggleGroupItem>
      <ToggleGroupItem value="sunset" className={item}>
        19:00
      </ToggleGroupItem>
      <ToggleGroupItem value="late" className={item}>
        21:30
      </ToggleGroupItem>
    </ToggleGroup>
  </Dark>
);

/** The size axis. `size` set on the group cascades to every item. */
```

### Sizes

```jsx
() => (
  <Dark>
    <ToggleGroup type="single" size="sm" defaultValue="terrace">
      <ToggleGroupItem value="terrace" className={item}>
        Terrace
      </ToggleGroupItem>
      <ToggleGroupItem value="rooftop" className={item}>
        Rooftop
      </ToggleGroupItem>
    </ToggleGroup>
    <ToggleGroup type="single" size="default" defaultValue="terrace">
      <ToggleGroupItem value="terrace" className={item}>
        Terrace
      </ToggleGroupItem>
      <ToggleGroupItem value="rooftop" className={item}>
        Rooftop
      </ToggleGroupItem>
    </ToggleGroup>
    <ToggleGroup type="single" size="lg" defaultValue="terrace">
      <ToggleGroupItem value="terrace" className={item}>
        Terrace
      </ToggleGroupItem>
      <ToggleGroupItem value="rooftop" className={item}>
        Rooftop
      </ToggleGroupItem>
    </ToggleGroup>
  </Dark>
);

/** The variant axis on the light surface these stock tokens are drawn for.
 *  The stock `on` fill is near-invisible here, so selection is drawn in charcoal. */
```

### Variants

```jsx
() => (
  <Light>
    <ToggleGroup type="single" defaultValue="rooftop">
      <ToggleGroupItem value="terrace" className={lightItem}>
        Terrace
      </ToggleGroupItem>
      <ToggleGroupItem value="rooftop" className={lightItem}>
        Rooftop
      </ToggleGroupItem>
      <ToggleGroupItem value="garden" className={lightItem}>
        Garden
      </ToggleGroupItem>
    </ToggleGroup>
    <ToggleGroup type="multiple" variant="outline" defaultValue={["garden"]}>
      <ToggleGroupItem value="terrace" className={lightOutlineItem}>
        Terrace
      </ToggleGroupItem>
      <ToggleGroupItem value="rooftop" className={lightOutlineItem}>
        Rooftop
      </ToggleGroupItem>
      <ToggleGroupItem value="garden" className={lightOutlineItem}>
        Garden
      </ToggleGroupItem>
    </ToggleGroup>
  </Light>
)
```
