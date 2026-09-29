AspectRatio from @thestage/ui. Use via `window.TheStageUI.AspectRatio` (bundle loaded from the root `_ds_bundle.js`).

## Props

```ts
interface AspectRatioProps {
  ratio?: number;
  style?: CSSProperties;
  className?: string;
  id?: string;
  children?: React.ReactNode;
  asChild?: boolean;
  /** Allows getting a ref to the component instance. Once the component unmounts, React will set `ref.current` to `null` (or  */
  ref?: string | ((instance: HTMLDivElement) => void | DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES[keyof DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES]) | RefObject<HTMLDivElement>;
}
```

## Examples

### EventPoster

```jsx
() => (
  <Dark>
    <div style={{ width: 460 }}>
      <AspectRatio ratio={16 / 9} className="overflow-hidden rounded-lg">
        <div
          className="flex h-full w-full flex-col justify-end p-6"
          style={poster("#122019", "#c9a962")}
        >
          <Badge className="mb-3 w-fit bg-black/20 text-[var(--color-cream)] hover:bg-black/20">
            Saturday · 22:00
          </Badge>
          <h3 className="font-display text-4xl font-normal tracking-wide">
            Midnight Sessions
          </h3>
          <p className="mt-1 text-xs uppercase tracking-widest text-[var(--color-cream)]">
            Rooftop · The Stage, Seminyak
          </p>
        </div>
      </AspectRatio>
      <p className="mt-3 text-sm text-[var(--color-champagne)]">
        ratio&#123;16 / 9&#125; — the standard listing thumbnail.
      </p>
    </div>
  </Dark>
);

/** A 3:4 portrait, used for artist and host cards. */
```

### PortraitCard

```jsx
() => (
  <Dark>
    <div style={{ width: 240 }}>
      <AspectRatio ratio={3 / 4} className="overflow-hidden rounded-lg">
        <div
          className="flex h-full w-full flex-col justify-end p-5"
          style={poster("#1a2e23", "#8b7355")}
        >
          <p className="font-display text-3xl font-normal leading-none tracking-wide">
            Ayu Laksmi
          </p>
          <p className="mt-2 text-[11px] uppercase tracking-widest text-[var(--color-champagne)]">
            Resident · Gamelan Nights
          </p>
        </div>
      </AspectRatio>
      <p className="mt-3 text-sm text-[var(--color-champagne)]">
        ratio&#123;3 / 4&#125; — artist portrait.
      </p>
    </div>
  </Dark>
);

/** The ratio axis: square, widescreen and cinematic, all at one width. */
```

### Ratios

```jsx
() => (
  <Dark>
    <div className="flex items-start gap-6">
      {[
        { label: "1 / 1", ratio: 1, name: "The Cellar" },
        { label: "16 / 9", ratio: 16 / 9, name: "Rooftop" },
        { label: "21 / 9", ratio: 21 / 9, name: "Garden Pavilion" },
      ].map((r) => (
        <div key={r.label} style={{ width: 200 }}>
          <AspectRatio
            ratio={r.ratio}
            className="overflow-hidden rounded-md border border-[var(--color-muted-gold)]"
          >
            <div
              className="flex h-full w-full items-center justify-center bg-white/5"
            >
              <span className="font-display text-2xl font-normal text-[var(--color-muted-gold)]">
                {r.label}
              </span>
            </div>
          </AspectRatio>
          <p className="mt-2 text-[11px] uppercase tracking-widest text-[var(--color-taupe)]">
            {r.name}
          </p>
        </div>
      ))}
    </div>
  </Dark>
)
```
