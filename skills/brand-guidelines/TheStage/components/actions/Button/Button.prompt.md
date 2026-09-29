Button from @thestage/ui. Use via `window.TheStageUI.Button` (bundle loaded from the root `_ds_bundle.js`).

## Props

```ts
interface ButtonProps {
  asChild?: boolean;
  /** Show a spinner and disable the button while truthy. Caller-controlled — pair with `useTransition` / local `useState` so  */
  pending?: boolean;
  /** Force a short spinner feedback on click even for sync handlers. */
  spinOnClick?: boolean;
  /** Minimum spinner visibility when `spinOnClick` is enabled. */
  minPendingMs?: number;
  className?: string;
  id?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
  size?: "default" | "sm" | "lg" | "icon";
  variant?: "link" | "default" | "destructive" | "outline" | "secondary" | "ghost";
  /** Allows getting a ref to the component instance. Once the component unmounts, React will set `ref.current` to `null` (or  */
  ref?: string | ((instance: HTMLButtonElement) => void | React.DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES[keyof React.DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES]) | React.RefObject<HTMLButtonElement>;
}
```

## Examples

### Primary

```jsx
() => (
  <Dark>
    <Button className="bg-[var(--color-muted-gold)] text-black hover:bg-[var(--color-gold-light)]">
      Book a table
    </Button>
    <Button
      size="lg"
      className="bg-[var(--color-muted-gold)] text-black hover:bg-[var(--color-gold-light)] uppercase tracking-widest text-xs"
    >
      Reserve now
    </Button>
  </Dark>
);

/** Secondary actions on the dark surface: outlined in gold, or plain ghost. */
```

### OnDarkSurface

```jsx
() => (
  <Dark>
    <Button
      variant="outline"
      className="border-[var(--color-muted-gold)] bg-transparent text-[var(--color-cream)] hover:bg-white/5"
    >
      Continue with Google
    </Button>
    <Button variant="ghost" className="text-[var(--color-cream)] hover:bg-white/5">
      View the menu
    </Button>
    <Button
      variant="link"
      className="text-[var(--color-muted-gold)]"
    >
      Private events
    </Button>
  </Dark>
);

/** The built-in variant axis, on the light surface these variants are built for. */
```

### Variants

```jsx
() => (
  <Light>
    <Button>Default</Button>
    <Button variant="secondary">Secondary</Button>
    <Button variant="destructive">Cancel booking</Button>
    <Button variant="outline">Outline</Button>
    <Button variant="ghost">Ghost</Button>
    <Button variant="link">Link</Button>
  </Light>
);

/** The size axis. `icon` is square, for toolbar actions. */
```

### Sizes

```jsx
() => (
  <Dark>
    <Button size="sm" className="bg-[var(--color-muted-gold)] text-black">Small</Button>
    <Button size="default" className="bg-[var(--color-muted-gold)] text-black">Default</Button>
    <Button size="lg" className="bg-[var(--color-muted-gold)] text-black">Large</Button>
    <Button size="icon" className="bg-[var(--color-muted-gold)] text-black">★</Button>
  </Dark>
);

/** Disabled, and the library's own `pending` prop (a spinner + auto-disable). */
```

### States

```jsx
() => (
  <Dark>
    <Button disabled className="bg-[var(--color-muted-gold)] text-black">Sold out</Button>
    <Button pending className="bg-[var(--color-muted-gold)] text-black">Confirming</Button>
    <Button
      variant="outline"
      disabled
      className="border-[var(--color-muted-gold)] bg-transparent text-[var(--color-cream)]"
    >
      Unavailable
    </Button>
  </Dark>
)
```

## Related

`ButtonGroup`
