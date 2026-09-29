ResizablePanelGroup from @thestage/ui. Use via `window.TheStageUI.ResizablePanelGroup` (bundle loaded from the root `_ds_bundle.js`).

## Props

```ts
interface ResizablePanelGroupProps {
  style?: CSSProperties;
  className?: string;
  children?: React.ReactNode;
  autoSaveId?: string;
  direction: "horizontal" | "vertical";
  id?: string;
  keyboardResizeBy?: number;
  storage?: ResizablePrimitive.PanelGroupStorage;
  tagName?: "object" | "a" | "button" | "div" | "form" | "h2" | "h3" | "img" | "input" | "label" | "li" | "nav" | "ol" | "p" | "select" | "span" | (string & {}) /* +96 more */;
  /** Allows getting a ref to the component instance. Once the component unmounts, React will set `ref.current` to `null` (or  */
  ref?: unknown;
}
```

## Examples

### FloorPlanSplit

```jsx
() => (
  <Dark>
    <p className="text-xs uppercase tracking-widest text-[var(--color-taupe)]">
      Floor plan · Saturday 14 March
    </p>
    <div className={`mt-4 ${shell}`} style={{ height: 260, width: 620 }}>
      <ResizablePanelGroup direction="horizontal">
        <ResizablePanel defaultSize={34} minSize={20}>
          <div className="h-full p-5">
            <Label>Rooms</Label>
            <div className="mt-3 space-y-2 text-sm">
              <p className="text-[var(--color-muted-gold)]">Rooftop</p>
              <p className="text-[var(--color-champagne)]">Garden Pavilion</p>
              <p className="text-[var(--color-champagne)]">The Cellar</p>
              <p className="text-[var(--color-champagne)]">Private Hire</p>
            </div>
          </div>
        </ResizablePanel>
        <ResizableHandle withHandle className={handleClass} style={handleH} />
        <ResizablePanel defaultSize={66}>
          <div className="h-full p-5">
            <Label>Rooftop</Label>
            <p className="mt-2 font-display text-3xl font-normal tracking-wide">
              18 tables · 96 covers
            </p>
            <Separator className="mt-4 mb-4 bg-white/10" />
            <p className="text-sm leading-relaxed text-[var(--color-champagne)]">
              Open air, bar service from 18:00. Twelve tables are held for
              reservations until 21:00; the remaining six are released to walk-ins.
            </p>
          </div>
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  </Dark>
);

/** `direction="vertical"` — the handle becomes a full-width rule. */
```

### Vertical

```jsx
() => (
  <Dark>
    <div className={shell} style={{ height: 280, width: 460 }}>
      <ResizablePanelGroup direction="vertical">
        <ResizablePanel defaultSize={45} minSize={20}>
          <div className="h-full p-5">
            <Label>Tonight</Label>
            <p className="mt-2 font-display text-4xl font-normal leading-none tabular-nums">
              142
            </p>
            <p className="mt-2 text-sm text-[var(--color-champagne)]">
              covers across three rooms
            </p>
          </div>
        </ResizablePanel>
        <ResizableHandle withHandle className={handleClass} style={handleV} />
        <ResizablePanel defaultSize={55}>
          <div className="h-full p-5">
            <Label>Notes for the pass</Label>
            <p className="mt-3 text-sm leading-relaxed text-[var(--color-champagne)]">
              Table 12 is an anniversary — send the petit fours with the candle.
              Two shellfish allergies on the Garden side, both flagged in the book.
            </p>
          </div>
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  </Dark>
);

/** Three panels, two handles — the full service-night dashboard layout. */
```

### ThreePanels

```jsx
() => (
  <Dark>
    <div className={shell} style={{ height: 220, width: 660 }}>
      <ResizablePanelGroup direction="horizontal">
        <ResizablePanel defaultSize={30}>
          <div className="h-full p-5">
            <Label>Arrivals</Label>
            <p className="mt-2 font-display text-4xl font-normal leading-none tabular-nums">
              38
            </p>
          </div>
        </ResizablePanel>
        <ResizableHandle className={handleClass} style={handleH} />
        <ResizablePanel defaultSize={40}>
          <div className="h-full p-5">
            <Label>On the floor</Label>
            <p className="mt-2 font-display text-4xl font-normal leading-none tabular-nums">
              104
            </p>
          </div>
        </ResizablePanel>
        <ResizableHandle className={handleClass} style={handleH} />
        <ResizablePanel defaultSize={30}>
          <div className="h-full p-5">
            <Label>Revenue</Label>
            <p className="mt-2 font-display text-3xl font-normal leading-none tabular-nums">
              IDR 64.2M
            </p>
          </div>
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  </Dark>
)
```
