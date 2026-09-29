VenueMapSvgContent from @thestage/ui. Use via `window.TheStageUI.VenueMapSvgContent` (bundle loaded from the root `_ds_bundle.js`).

## Props

```ts
interface VenueMapSvgContentProps {
  /** Raw SVG document XML from fetch / server action */
  svgMarkup: string;
  /** Inventory map labels to bind (e.g. R1, L2) */
  labels: string[];
  activeLabel?: string;
  onSelectLabel: (label: string) => void;
  /** Fires with the hovered label + its viewport center; `null` on mouseleave. */
  onHoverLabel?: (label: string | null, info?: VenueMapHoverInfo) => void;
  /** Labels (uppercase) that are sold out — rendered with a red SOLD OUT banner, dimmed, and no click/hover handlers attached */
  soldOutLabels?: string[];
  className?: string;
}
```

## Examples

### AllAvailable

```jsx
() => (
  <Floor>
    <VenueMapSvgContent
      className="venue-map-interactive"
      svgMarkup={FLOORPLAN}
      labels={LABELS}
      onSelectLabel={() => {}}
    />
  </Floor>
);

/** A table selected — the active hotspot is brightened by `venue-map-slot--active`. */
```

### TableSelected

```jsx
() => (
  <Floor>
    <VenueMapSvgContent
      className="venue-map-interactive"
      svgMarkup={FLOORPLAN}
      labels={LABELS}
      activeLabel="C2"
      onSelectLabel={() => {}}
    />
  </Floor>
);

/** Sold-out tables: dimmed, desaturated, no pointer events, red SOLD OUT banner. */
```

### SoldOut

```jsx
() => (
  <Floor>
    <VenueMapSvgContent
      className="venue-map-interactive"
      svgMarkup={FLOORPLAN}
      labels={LABELS}
      activeLabel="L2"
      soldOutLabels={["C1", "C3", "R1"]}
      onSelectLabel={() => {}}
    />
  </Floor>
)
```
