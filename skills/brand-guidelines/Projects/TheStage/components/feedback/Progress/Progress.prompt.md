Progress from @thestage/ui. Use via `window.TheStageUI.Progress` (bundle loaded from the root `_ds_bundle.js`).

## Props

```ts
interface ProgressProps {
  style?: CSSProperties;
  className?: string;
  id?: string;
  children?: React.ReactNode;
  asChild?: boolean;
  value?: number;
  max?: number;
  getValueLabel?: (value: number, max: number) => string;
  /** Allows getting a ref to the component instance. Once the component unmounts, React will set `ref.current` to `null` (or  */
  ref?: string | ((instance: HTMLDivElement) => void | React.DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES[keyof React.DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES]) | React.RefObject<HTMLDivElement>;
}
```

## Examples

### GalleryUpload

```jsx
() => (
  <Dark>
    <div className="flex flex-col gap-3" style={{ width: 420 }}>
      <div className="flex items-baseline justify-between">
        <span className="text-xs uppercase tracking-widest text-[var(--color-taupe)]">
          Uploading gallery
        </span>
        <span className="font-display text-2xl font-normal tracking-wide">68%</span>
      </div>
      <Progress value={68} className="h-2" />
      <p className="text-sm text-[var(--color-champagne)]">
        rooftop-canopy-04.jpg — 14 of 21 images
      </p>
    </div>
  </Dark>
);

/** Capacity bars: how full each night is. The value prop is the whole axis. */
```

### CapacityTonight

```jsx
() => (
  <Dark>
    <div className="flex flex-col gap-5" style={{ width: 440 }}>
      <p className="text-xs uppercase tracking-widest text-[var(--color-taupe)]">
        This weekend
      </p>
      {[
        { name: "Midnight Sessions", taken: 180, total: 180, value: 100 },
        { name: "Gamelan Supper Club", taken: 94, total: 130, value: 72 },
        { name: "Sunday Long Lunch", taken: 21, total: 90, value: 24 },
      ].map((e) => (
        <div key={e.name} className="flex flex-col gap-2">
          <div className="flex items-baseline justify-between">
            <span className="font-display text-xl font-normal tracking-wide">
              {e.name}
            </span>
            <span className="text-sm text-[var(--color-champagne)]">
              {e.taken} / {e.total}
            </span>
          </div>
          <Progress value={e.value} className="h-2" />
        </div>
      ))}
    </div>
  </Dark>
);

/** The raw component across its value range. The stock track is --secondary
 *  (#f5f5f5), LIGHTER than cream, so it only reads on a bg-background panel. */
```

### Values

```jsx
() => (
  <Light>
    <div
      className="flex flex-col gap-4 rounded-lg border bg-background p-6"
      style={{ width: 420 }}
    >
      {[0, 25, 60, 100].map((v) => (
        <div key={v} className="flex items-center gap-4">
          <span className="text-sm" style={{ width: 48 }}>{v}%</span>
          <Progress value={v} className="flex-1" />
        </div>
      ))}
    </div>
  </Light>
)
```
