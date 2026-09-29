Tooltip from @thestage/ui. Use via `window.TheStageUI.Tooltip` (bundle loaded from the root `_ds_bundle.js`).

## Props

```ts
interface TooltipProps {
  children?: React.ReactNode;
  open?: boolean;
  defaultOpen?: boolean;
  /** The duration from when the pointer enters the trigger until the tooltip gets opened. This will override the prop with th */
  delayDuration?: number;
  /** When `true`, trying to hover the content will result in the tooltip closing as the pointer leaves the trigger. */
  disableHoverableContent?: boolean;
}
```

## Examples

### TableStatus

```jsx
() => (
  <Stage>
    <div className="text-center">
      <div className="text-xs uppercase tracking-widest text-[var(--color-taupe)]">
        Pool Deck · Full Moon Rooftop
      </div>
      <div className="font-display text-3xl text-[var(--color-cream)]">
        Friday 3 April
      </div>
    </div>
    <TooltipProvider>
      <Tooltip open>
        <TooltipTrigger asChild>
          <Button
            variant="outline"
            className="border-[var(--color-muted-gold)] bg-transparent text-[var(--color-cream)] hover:bg-white/5"
          >
            Cabana 03 · unavailable
          </Button>
        </TooltipTrigger>
        <TooltipContent side="bottom" className="text-[var(--color-charcoal)]">
          Held by a promoter until 18:00 today
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  </Stage>
);

/** A square help button and its tooltip — the booking bar's inline explainer. */
```

### IconAction

```jsx
() => (
  <Stage>
    <div className="text-center">
      <div className="text-xs uppercase tracking-widest text-[var(--color-taupe)]">
        Reservation TS-4821
      </div>
      <div className="font-display text-3xl text-[var(--color-cream)]">
        Table 14 · Terrace
      </div>
    </div>
    <TooltipProvider>
      <Tooltip open>
        <TooltipTrigger asChild>
          <Button
            size="icon"
            className="bg-[var(--color-muted-gold)] text-black hover:bg-[var(--color-gold-light)]"
          >
            ?
          </Button>
        </TooltipTrigger>
        <TooltipContent side="bottom" className="text-[var(--color-charcoal)]">
          Minimum spend is redeemable against bottles and food
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  </Stage>
)
```
