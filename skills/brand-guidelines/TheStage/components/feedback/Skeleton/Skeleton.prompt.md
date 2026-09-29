Skeleton from @thestage/ui. Use via `window.TheStageUI.Skeleton` (bundle loaded from the root `_ds_bundle.js`).

## Props

```ts
interface SkeletonProps {
  className?: string;
  id?: string;
  style?: CSSProperties;
  children?: React.ReactNode;
}
```

## Examples

### EventCardLoading

```jsx
() => (
  <Dark>
    <div
      className="rounded-lg border border-[var(--color-muted-gold)] bg-white/5 p-6 flex flex-col gap-4"
      style={{ width: 340 }}
    >
      <Skeleton className="h-5 rounded-full" style={{ width: 84 }} />
      <Skeleton className="h-8" style={{ width: 220 }} />
      <div className="flex flex-col gap-2">
        <Skeleton className="h-3 w-full" />
        <Skeleton className="h-3 w-full" />
        <Skeleton className="h-3" style={{ width: 180 }} />
      </div>
      <div className="flex items-center justify-between pt-2">
        <Skeleton className="h-3" style={{ width: 110 }} />
        <Skeleton className="h-9 rounded-md" style={{ width: 72 }} />
      </div>
    </div>
  </Dark>
);

/** The reservations table while tonight's list is fetched. */
```

### ReservationsLoading

```jsx
() => (
  <Dark>
    <div className="flex flex-col gap-4" style={{ width: 460 }}>
      <p className="text-xs uppercase tracking-widest text-[var(--color-taupe)]">
        Tonight&rsquo;s guest list
      </p>
      {[0, 1, 2, 3].map((i) => (
        <div key={i} className="flex items-center gap-4 border-b border-white/10 pb-4">
          <Skeleton className="h-10 w-10 rounded-full" />
          <div className="flex flex-1 flex-col gap-2">
            <Skeleton className="h-3" style={{ width: 150 }} />
            <Skeleton className="h-3" style={{ width: 96 }} />
          </div>
          <Skeleton className="h-3" style={{ width: 56 }} />
        </div>
      ))}
    </div>
  </Dark>
);

/** The raw primitive: a div with a pulsing muted fill, sized by className.
 *  --muted is #f5f5f5, which is LIGHTER than cream — the stock skeleton is only
 *  legible on a `bg-background` panel, which is how the product frames it. */
```

### Shapes

```jsx
() => (
  <Light>
    <div className="flex items-center gap-6 rounded-lg border bg-background p-6">
      <Skeleton className="h-16 w-16 rounded-full" />
      <Skeleton className="h-16 w-16 rounded-md" />
      <div className="flex flex-col gap-2">
        <Skeleton className="h-4" style={{ width: 200 }} />
        <Skeleton className="h-4" style={{ width: 160 }} />
        <Skeleton className="h-4" style={{ width: 120 }} />
      </div>
    </div>
  </Light>
)
```
