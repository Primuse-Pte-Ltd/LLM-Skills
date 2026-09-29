Separator from @thestage/ui. Use via `window.TheStageUI.Separator` (bundle loaded from the root `_ds_bundle.js`).

## Props

```ts
interface SeparatorProps {
  style?: CSSProperties;
  className?: string;
  id?: string;
  children?: React.ReactNode;
  asChild?: boolean;
  /** Either `vertical` or `horizontal`. Defaults to `horizontal`. */
  orientation?: "horizontal" | "vertical";
  /** Whether or not the component is purely decorative. When true, accessibility-related attributes are updated so that that  */
  decorative?: boolean;
  /** Allows getting a ref to the component instance. Once the component unmounts, React will set `ref.current` to `null` (or  */
  ref?: string | ((instance: HTMLDivElement) => void | React.DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES[keyof React.DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES]) | React.RefObject<HTMLDivElement>;
}
```

## Examples

### StatRow

```jsx
() => (
  <Dark>
    <p className="text-xs uppercase tracking-widest text-[var(--color-taupe)]">
      Tonight · Saturday 14 March
    </p>
    <div className="mt-4 flex h-16 items-center gap-6">
      <div>
        <p className="font-display text-4xl font-normal leading-none tabular-nums">142</p>
        <p className="mt-2 text-[11px] uppercase tracking-widest text-[var(--color-taupe)]">
          Covers
        </p>
      </div>
      <Separator orientation="vertical" className="bg-[var(--color-muted-gold)]" />
      <div>
        <p className="font-display text-4xl font-normal leading-none tabular-nums">38</p>
        <p className="mt-2 text-[11px] uppercase tracking-widest text-[var(--color-taupe)]">
          Reservations
        </p>
      </div>
      <Separator orientation="vertical" className="bg-[var(--color-muted-gold)]" />
      <div>
        <p className="font-display text-4xl font-normal leading-none tabular-nums">IDR 64.2M</p>
        <p className="mt-2 text-[11px] uppercase tracking-widest text-[var(--color-taupe)]">
          Revenue
        </p>
      </div>
    </div>
    <Separator className="mt-6 bg-white/10" />
    <p className="mt-4 text-sm text-[var(--color-champagne)]">
      Rooftop and Garden Pavilion combined. Walk-ins close at 23:00.
    </p>
  </Dark>
);

/** Horizontal rules between menu sections, on the cream surface. */
```

### MenuSection

```jsx
() => (
  <Light>
    <div style={{ maxWidth: 380 }}>
      <h3 className="font-display text-3xl font-normal tracking-wide">Tasting Menu</h3>
      <p className="mt-1 text-xs uppercase tracking-widest text-[var(--color-bronze)]">
        Five courses · IDR 1,250,000 per guest
      </p>
      <Separator className="mt-4 mb-4 bg-[var(--color-bronze)]" />
      <div className="space-y-2 text-sm">
        <div className="flex justify-between">
          <span>Kingfish crudo, green mango</span>
          <span className="tabular-nums text-[var(--color-bronze)]">I</span>
        </div>
        <div className="flex justify-between">
          <span>Charred palm heart, kemiri</span>
          <span className="tabular-nums text-[var(--color-bronze)]">II</span>
        </div>
        <div className="flex justify-between">
          <span>Bebek betutu, twelve hours</span>
          <span className="tabular-nums text-[var(--color-bronze)]">III</span>
        </div>
      </div>
      <Separator className="mt-4 mb-4 bg-[var(--color-bronze)]" />
      <p className="text-xs text-[var(--color-bronze)]">
        Wine pairing available. Please advise dietary requirements 24 hours ahead.
      </p>
    </div>
  </Light>
);

/** The raw orientation axis, with the component's own `bg-border` colour. */
```

### Orientations

```jsx
() => (
  <Light>
    <p className="text-xs uppercase tracking-widest text-[var(--color-bronze)]">Horizontal</p>
    <Separator className="mt-3" />
    <p className="mt-6 text-xs uppercase tracking-widest text-[var(--color-bronze)]">Vertical</p>
    <div className="mt-3 flex h-10 items-center gap-4 text-sm">
      <span>Rooftop</span>
      <Separator orientation="vertical" />
      <span>Garden Pavilion</span>
      <Separator orientation="vertical" />
      <span>The Cellar</span>
    </div>
  </Light>
)
```
