DropdownMenu from @thestage/ui. Use via `window.TheStageUI.DropdownMenu` (bundle loaded from the root `_ds_bundle.js`).

## Props

```ts
interface DropdownMenuProps {
  children?: React.ReactNode;
  dir?: "ltr" | "rtl";
  open?: boolean;
  defaultOpen?: boolean;
  modal?: boolean;
}
```

## Examples

### ReservationActions

```jsx
() => (
  <Stage>
    <div className="text-center">
      <div className="text-xs uppercase tracking-widest text-[var(--color-taupe)]">
        Reservations · Midnight Sessions
      </div>
      <div className="font-display text-3xl text-[var(--color-cream)]">
        TS-4821 · Table 14
      </div>
    </div>
    <DropdownMenu open>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          className="border-[var(--color-muted-gold)] bg-transparent text-[var(--color-cream)] hover:bg-white/5"
        >
          Actions
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="start"
        className="w-64 text-[var(--color-charcoal)]"
      >
        <DropdownMenuLabel>Reservation TS-4821</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            Check in guests
            <DropdownMenuShortcut>⌘K</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            Resend confirmation
            <DropdownMenuShortcut>⌘R</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>Move to another table</DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuSub>
          <DropdownMenuSubTrigger>Refund</DropdownMenuSubTrigger>
          <DropdownMenuSubContent className="text-[var(--color-charcoal)]">
            <DropdownMenuItem>Full — IDR 3,600,000</DropdownMenuItem>
            <DropdownMenuItem>Deposit only — IDR 1,800,000</DropdownMenuItem>
            <DropdownMenuItem>Custom amount</DropdownMenuItem>
          </DropdownMenuSubContent>
        </DropdownMenuSub>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="text-destructive">
          Cancel reservation
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  </Stage>
);

/** Checkbox and radio items — the guest-list view switcher in the backoffice. */
```

### ViewOptions

```jsx
() => (
  <Stage>
    <div className="text-center">
      <div className="text-xs uppercase tracking-widest text-[var(--color-taupe)]">
        Guest list · Sat 22 March
      </div>
      <div className="font-display text-3xl text-[var(--color-cream)]">
        142 names
      </div>
    </div>
    <DropdownMenu open>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          className="border-[var(--color-muted-gold)] bg-transparent text-[var(--color-cream)] hover:bg-white/5"
        >
          View
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="start"
        className="w-64 text-[var(--color-charcoal)]"
      >
        <DropdownMenuLabel>Columns</DropdownMenuLabel>
        <DropdownMenuCheckboxItem checked>Table</DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem checked>Promoter</DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem>Arrival time</DropdownMenuCheckboxItem>
        <DropdownMenuSeparator />
        <DropdownMenuLabel>Show</DropdownMenuLabel>
        <DropdownMenuRadioGroup value="unchecked">
          <DropdownMenuRadioItem value="all">Everyone</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="unchecked">
            Not yet arrived
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="comps">
            Comped entries
          </DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  </Stage>
);

/** The staff account menu in the backoffice header. */
```

### AccountMenu

```jsx
() => (
  <Stage>
    <div className="text-center">
      <div className="text-xs uppercase tracking-widest text-[var(--color-taupe)]">
        The Stage · backoffice
      </div>
      <div className="font-display text-3xl text-[var(--color-cream)]">
        Tonight at a glance
      </div>
    </div>
    <DropdownMenu open>
      <DropdownMenuTrigger asChild>
        <Button className="bg-[var(--color-muted-gold)] text-black hover:bg-[var(--color-gold-light)]">
          Ayu Pradnyani
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        className="w-64 text-[var(--color-charcoal)]"
      >
        <DropdownMenuLabel>ayu@thestage.net · ops</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Manual sale</DropdownMenuItem>
        <DropdownMenuItem>Venue map editor</DropdownMenuItem>
        <DropdownMenuItem>Settings</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Sign out</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  </Stage>
)
```
