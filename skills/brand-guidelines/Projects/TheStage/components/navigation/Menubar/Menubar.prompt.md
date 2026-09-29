Menubar from @thestage/ui. Use via `window.TheStageUI.Menubar` (bundle loaded from the root `_ds_bundle.js`).

## Props

```ts
interface MenubarProps {
  style?: CSSProperties;
  defaultValue?: string;
  className?: string;
  dir?: "ltr" | "rtl";
  id?: string;
  children?: React.ReactNode;
  asChild?: boolean;
  value?: string;
  loop?: boolean;
  /** Allows getting a ref to the component instance. Once the component unmounts, React will set `ref.current` to `null` (or  */
  ref?: string | ((instance: HTMLDivElement) => void | React.DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES[keyof React.DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES]) | React.RefObject<HTMLDivElement>;
}
```

## Examples

### BackofficeBar

```jsx
() => (
  <Dark>
    <Menubar className="border-white/20">
      <MenubarMenu>
        <MenubarTrigger className={triggerClass}>Venue</MenubarTrigger>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger className={triggerClass}>Events</MenubarTrigger>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger className={triggerClass}>Reservations</MenubarTrigger>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger className={triggerClass}>Team</MenubarTrigger>
      </MenubarMenu>
    </Menubar>
  </Dark>
);

/** The Events menu held open — items, a submenu trigger and shortcuts. */
```

### EventsMenuOpen

```jsx
() => (
  <Dark minHeight={380}>
    <Menubar defaultValue="events" className="border-white/20">
      <MenubarMenu>
        <MenubarTrigger className={triggerClass}>Venue</MenubarTrigger>
      </MenubarMenu>
      <MenubarMenu value="events">
        <MenubarTrigger className={triggerClass}>Events</MenubarTrigger>
        <MenubarContent style={brandTokens} className={contentClass}>
          <MenubarItem className={itemClass}>
            New event <MenubarShortcut>&#8984;N</MenubarShortcut>
          </MenubarItem>
          <MenubarItem className={itemClass}>
            Duplicate tonight <MenubarShortcut>&#8984;D</MenubarShortcut>
          </MenubarItem>
          <MenubarSub>
            <MenubarSubTrigger className={itemClass}>Export</MenubarSubTrigger>
            <MenubarSubContent style={brandTokens} className={contentClass}>
              <MenubarItem className={itemClass}>Guest list (CSV)</MenubarItem>
              <MenubarItem className={itemClass}>Table plan (PDF)</MenubarItem>
            </MenubarSubContent>
          </MenubarSub>
          <MenubarSeparator />
          <MenubarItem className={itemClass}>Publish to the site</MenubarItem>
          <MenubarItem className={itemClass} disabled>
            Archive season
          </MenubarItem>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger className={triggerClass}>Reservations</MenubarTrigger>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger className={triggerClass}>Team</MenubarTrigger>
      </MenubarMenu>
    </Menubar>
  </Dark>
);

/** The plain component on the light surface its popover tokens assume —
 *  checkbox and radio items included. The portalled panel still needs an
 *  explicit text colour, because body{color:cream} outranks the base layer. */
```

### Default

```jsx
() => (
  <Light>
    <Menubar defaultValue="view">
      <MenubarMenu>
        <MenubarTrigger>Reservations</MenubarTrigger>
      </MenubarMenu>
      <MenubarMenu value="view">
        <MenubarTrigger>View</MenubarTrigger>
        <MenubarContent className="text-[var(--color-charcoal)]">
          <MenubarCheckboxItem checked>Show cancelled</MenubarCheckboxItem>
          <MenubarCheckboxItem>Show walk-ins</MenubarCheckboxItem>
          <MenubarSeparator />
          <MenubarLabel>Group by</MenubarLabel>
          <MenubarRadioGroup value="floor">
            <MenubarRadioItem value="floor">Floor</MenubarRadioItem>
            <MenubarRadioItem value="time">Arrival time</MenubarRadioItem>
            <MenubarRadioItem value="host">Host</MenubarRadioItem>
          </MenubarRadioGroup>
          <MenubarSeparator />
          <MenubarItem>
            Refresh <MenubarShortcut>&#8984;R</MenubarShortcut>
          </MenubarItem>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>Team</MenubarTrigger>
      </MenubarMenu>
    </Menubar>
  </Light>
)
```
