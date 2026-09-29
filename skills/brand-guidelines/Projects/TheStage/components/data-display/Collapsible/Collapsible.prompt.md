Collapsible from @thestage/ui. Use via `window.TheStageUI.Collapsible` (bundle loaded from the root `_ds_bundle.js`).

## Props

```ts
interface CollapsibleProps {
  defaultOpen?: boolean;
  open?: boolean;
  disabled?: boolean;
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

### BookingDetails

```jsx
() => (
  <Dark>
    <div className="border border-[var(--color-muted-gold)] bg-white/5 rounded-md p-6 max-w-md">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="font-display text-2xl font-normal tracking-wide">
            Midnight Sessions
          </h3>
          <p className="text-xs uppercase tracking-widest text-[var(--color-taupe)] mt-1">
            Saturday 14 March · 22:00
          </p>
        </div>
        <Badge className="bg-[var(--color-muted-gold)] text-black hover:bg-[var(--color-muted-gold)]">
          Confirmed
        </Badge>
      </div>
      <Collapsible defaultOpen className="mt-4">
        <CollapsibleTrigger className={triggerClass}>
          <span>Reservation details</span>
          <span className="text-base">−</span>
        </CollapsibleTrigger>
        <CollapsibleContent>
          <div className="border-t border-white/10 pt-2">
            <div className="flex items-center justify-between py-2">
              <span className="text-sm text-[var(--color-taupe)]">Table</span>
              <span className="text-sm text-[var(--color-cream)]">R1 · rooftop</span>
            </div>
            <div className="flex items-center justify-between py-2">
              <span className="text-sm text-[var(--color-taupe)]">Party</span>
              <span className="text-sm text-[var(--color-cream)] tabular-nums">4 guests</span>
            </div>
            <div className="flex items-center justify-between py-2">
              <span className="text-sm text-[var(--color-taupe)]">Host</span>
              <span className="text-sm text-[var(--color-cream)]">Ayu Kusuma</span>
            </div>
            <div className="flex items-center justify-between py-2">
              <span className="text-sm text-[var(--color-taupe)]">Minimum spend</span>
              <span className="font-display text-xl text-[var(--color-muted-gold)] tabular-nums">
                IDR 3,500,000
              </span>
            </div>
          </div>
        </CollapsibleContent>
      </Collapsible>
    </div>
  </Dark>
);

/** Open and closed side by side — the same panel in both states. */
```

### OpenAndClosed

```jsx
() => (
  <Dark>
    <div className="flex flex-wrap gap-6">
      <Collapsible defaultOpen className="border border-white/10 bg-white/5 rounded-md p-4 w-[300px]">
        <CollapsibleTrigger className={triggerClass}>
          <span>Dietary notes</span>
          <span className="text-base">−</span>
        </CollapsibleTrigger>
        <CollapsibleContent>
          <p className="text-sm leading-relaxed text-[var(--color-champagne)] border-t border-white/10 pt-2">
            Two pescatarian, one shellfish allergy. Kitchen notified 12 March.
          </p>
        </CollapsibleContent>
      </Collapsible>
      <Collapsible className="border border-white/10 bg-white/5 rounded-md p-4 w-[300px]">
        <CollapsibleTrigger className={triggerClass}>
          <span>Dietary notes</span>
          <span className="text-base">+</span>
        </CollapsibleTrigger>
        <CollapsibleContent>
          <p className="text-sm leading-relaxed text-[var(--color-champagne)] border-t border-white/10 pt-2">
            Two pescatarian, one shellfish allergy. Kitchen notified 12 March.
          </p>
        </CollapsibleContent>
      </Collapsible>
    </div>
    <p className="text-xs uppercase tracking-widest text-[var(--color-taupe)] mt-4">
      defaultOpen · closed
    </p>
  </Dark>
);

/** A long guest note truncated behind a "show all" toggle. */
```

### StaffNotes

```jsx
() => (
  <Dark>
    <Collapsible defaultOpen className="border border-white/10 bg-white/5 rounded-md p-6 max-w-xl">
      <p className="text-xs uppercase tracking-widest text-[var(--color-taupe)]">
        Table C5 · Nadia Prameswari
      </p>
      <p className="text-sm leading-relaxed text-[var(--color-champagne)] mt-2">
        Regular since 2022. Prefers the corner banquette facing the sea.
      </p>
      <CollapsibleTrigger className={triggerClass}>
        <span>Full history</span>
        <span className="text-base">−</span>
      </CollapsibleTrigger>
      <CollapsibleContent>
        <div className="border-t border-white/10 pt-2 text-sm leading-relaxed text-[var(--color-champagne)] space-y-2">
          <p>14 Feb — Anniversary dinner, party of 2. Champagne on arrival.</p>
          <p>28 Dec — New Year rooftop, party of 8. Deposit IDR 12,000,000.</p>
          <p>03 Nov — Gamelan sunset, party of 3. Left a note for the kitchen.</p>
        </div>
      </CollapsibleContent>
    </Collapsible>
  </Dark>
)
```
