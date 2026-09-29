ContextMenu from @thestage/ui. Use via `window.TheStageUI.ContextMenu` (bundle loaded from the root `_ds_bundle.js`).

## Props

```ts
interface ContextMenuProps {
  children?: React.ReactNode;
  open?: boolean;
  dir?: "ltr" | "rtl";
  modal?: boolean;
}
```

## Examples

### TableActions

```jsx
() => {
  const trigger = useRightClickOnMount(360, 230);
  return (
    <ContextMenu>
      <ContextMenuTrigger
        ref={trigger}
        className="font-body flex flex-col gap-3 bg-[var(--color-dark-green)] p-8"
        style={{ minHeight: 472 }}
      >
        <div className="text-xs uppercase tracking-widest text-[var(--color-taupe)]">
          Venue map editor · Terrace
        </div>
        <div className="font-display text-4xl text-[var(--color-cream)]">
          Table 14
        </div>
        <div className="text-sm text-[var(--color-champagne)]">
          Seats 6 · stage-facing · minimum spend IDR 3,600,000
        </div>
        <div className="text-xs text-[var(--color-taupe)]">
          Right-click a hotspot to edit it
        </div>
      </ContextMenuTrigger>
      <ContextMenuContent className="w-64 text-[var(--color-charcoal)]">
        <ContextMenuLabel>Table 14 · seats 6</ContextMenuLabel>
        <ContextMenuSeparator />
        <ContextMenuItem>
          Edit minimum spend
          <ContextMenuShortcut>⌘E</ContextMenuShortcut>
        </ContextMenuItem>
        <ContextMenuItem>Duplicate hotspot</ContextMenuItem>
        <ContextMenuSub>
          <ContextMenuSubTrigger>Assign to area</ContextMenuSubTrigger>
          <ContextMenuSubContent className="text-[var(--color-charcoal)]">
            <ContextMenuItem>Terrace</ContextMenuItem>
            <ContextMenuItem>Pool Deck</ContextMenuItem>
            <ContextMenuItem>Rooftop</ContextMenuItem>
          </ContextMenuSubContent>
        </ContextMenuSub>
        <ContextMenuSeparator />
        <ContextMenuItem className="text-destructive">
          Remove from map
        </ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  );
};

/** Right-clicking a guest-list row — checkbox and radio items. */
```

### GuestListRow

```jsx
() => {
  const trigger = useRightClickOnMount(360, 180);
  return (
    <ContextMenu>
      <ContextMenuTrigger
        ref={trigger}
        className="font-body flex flex-col gap-3 bg-[var(--color-dark-green)] p-8"
        style={{ minHeight: 472 }}
      >
        <div className="text-xs uppercase tracking-widest text-[var(--color-taupe)]">
          Guest list · Midnight Sessions · Sat 22 March
        </div>
        <div className="font-display text-4xl text-[var(--color-cream)]">
          Kadek Wirawan
        </div>
        <div className="text-sm text-[var(--color-champagne)]">
          Party of 4 · Table 14 · not yet arrived
        </div>
        <div className="text-xs text-[var(--color-taupe)]">
          Right-click a row to change its status
        </div>
      </ContextMenuTrigger>
      <ContextMenuContent className="w-64 text-[var(--color-charcoal)]">
        <ContextMenuLabel>Kadek Wirawan · +4</ContextMenuLabel>
        <ContextMenuSeparator />
        <ContextMenuCheckboxItem checked>Comped entry</ContextMenuCheckboxItem>
        <ContextMenuCheckboxItem>Birthday</ContextMenuCheckboxItem>
        <ContextMenuSeparator />
        <ContextMenuLabel>Status</ContextMenuLabel>
        <ContextMenuRadioGroup value="expected">
          <ContextMenuRadioItem value="expected">Expected</ContextMenuRadioItem>
          <ContextMenuRadioItem value="arrived">Arrived</ContextMenuRadioItem>
          <ContextMenuRadioItem value="noshow">No-show</ContextMenuRadioItem>
        </ContextMenuRadioGroup>
      </ContextMenuContent>
    </ContextMenu>
  );
}
```
