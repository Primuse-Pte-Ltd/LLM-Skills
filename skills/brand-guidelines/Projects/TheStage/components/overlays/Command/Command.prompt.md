Command from @thestage/ui. Use via `window.TheStageUI.Command` (bundle loaded from the root `_ds_bundle.js`).

## Props

```ts
interface CommandProps {
  /** Accessible label for this command menu. Not shown visibly. */
  label?: string;
  style?: React.CSSProperties;
  /** Custom filter function for whether each command menu item should matches the given search query. It should return a numb */
  filter?: (value: string, search: string, keywords?: string[]) => number;
  className?: string;
  id?: string;
  children?: React.ReactNode;
  asChild?: boolean;
  /** Optional controlled state of the selected command menu item. */
  value?: string;
  /** Optionally set to `true` to turn on looping around when using the arrow keys. */
  loop?: boolean;
  /** Optionally set to `false` to turn off the automatic filtering and sorting. If `false`, you must conditionally render val */
  shouldFilter?: boolean;
  /** Optionally set to `true` to disable selection via pointer events. */
  disablePointerSelection?: boolean;
  /** Set to `false` to disable ctrl+n/j/p/k shortcuts. Defaults to `true`. */
  vimBindings?: boolean;
  /** Allows getting a ref to the component instance. Once the component unmounts, React will set `ref.current` to `null` (or  */
  ref?: string | ((instance: HTMLDivElement) => void | React.DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES[keyof React.DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES]) | React.RefObject<HTMLDivElement>;
}
```

## Examples

### StaffSearch

```jsx
() => (
  <div
    className="font-body flex items-start justify-center bg-[var(--color-dark-green)] p-8"
    style={{ minHeight: 472 }}
  >
    <Command
      shouldFilter={false}
      value="ts-4821"
      className="w-full max-w-lg rounded-lg border border-[var(--color-muted-gold)] text-[var(--color-charcoal)]"
    >
      <CommandInput placeholder="Search reservations, guests, events…" value="wirawan" onValueChange={() => {}} />
      <CommandList>
        <CommandEmpty>Nothing matches that search.</CommandEmpty>
        <CommandGroup heading="Reservations">
          <CommandItem value="ts-4821">
            TS-4821 · Kadek Wirawan · Table 14
            <CommandShortcut>IDR 3,600,000</CommandShortcut>
          </CommandItem>
          <CommandItem value="ts-4612">
            TS-4612 · Kadek Wirawan · Cabana 03
            <CommandShortcut>IDR 2,400,000</CommandShortcut>
          </CommandItem>
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Guests">
          <CommandItem value="guest-kadek">
            Kadek Wirawan
            <CommandShortcut>11 bookings</CommandShortcut>
          </CommandItem>
          <CommandItem value="guest-putu">
            Putu Wirawan
            <CommandShortcut>2 bookings</CommandShortcut>
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
  </div>
);

/** The ⌘K palette, opened over the page. CommandDialog owns its own Command
 *  root, so the children go in directly — nesting a second one breaks cmdk. */
```

### CommandPalette

```jsx
() => (
  <CommandDialog open>
    <CommandInput placeholder="Type a command or search…" />
    <CommandList className="text-[var(--color-charcoal)]">
      <CommandEmpty>No command found.</CommandEmpty>
      <CommandGroup heading="Tonight">
        <CommandItem value="new-manual-sale">
          New manual sale
          <CommandShortcut>⌘N</CommandShortcut>
        </CommandItem>
        <CommandItem value="open-door-list">
          Open the door list
          <CommandShortcut>⌘D</CommandShortcut>
        </CommandItem>
      </CommandGroup>
      <CommandSeparator />
      <CommandGroup heading="Events">
        <CommandItem value="midnight-sessions">
          Midnight Sessions · Sat 22 Mar
        </CommandItem>
        <CommandItem value="full-moon-rooftop">
          Full Moon Rooftop · Fri 3 Apr
        </CommandItem>
      </CommandGroup>
    </CommandList>
  </CommandDialog>
)
```
