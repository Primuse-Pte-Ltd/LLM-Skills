NavigationMenu from @thestage/ui. Use via `window.TheStageUI.NavigationMenu` (bundle loaded from the root `_ds_bundle.js`).

## Props

```ts
interface NavigationMenuProps {
  style?: CSSProperties;
  defaultValue?: string;
  className?: string;
  dir?: "ltr" | "rtl";
  id?: string;
  children?: React.ReactNode;
  asChild?: boolean;
  value?: string;
  orientation?: "horizontal" | "vertical";
  /** The duration from when the pointer enters the trigger until the tooltip gets opened. */
  delayDuration?: number;
  /** How much time a user has to enter another trigger without incurring a delay again. */
  skipDelayDuration?: number;
  /** Allows getting a ref to the component instance. Once the component unmounts, React will set `ref.current` to `null` (or  */
  ref?: string | ((instance: HTMLElement) => void | React.DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES[keyof React.DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES]) | React.RefObject<HTMLElement>;
}
```

## Examples

### SiteHeader

```jsx
() => (
  <Dark>
    <div className="flex items-center justify-between gap-10">
      <span className="font-display text-2xl tracking-[0.3em] text-[var(--color-muted-gold)]">
        THE STAGE
      </span>
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuLink href="/" className={linkClass}>Home</NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink href="/events" className={linkClass}>Events</NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink href="/booking" className={linkClass}>Reserve VIP</NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink href="/gallery" className={linkClass}>Gallery</NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink href="/contact" className={linkClass}>Contact</NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  </Dark>
);

/** The Events panel held open, on the retinted viewport. */
```

### EventsPanelOpen

```jsx
() => (
  <Dark minHeight={400}>
    <NavigationMenu defaultValue="events">
      <NavigationMenuList>
        <NavigationMenuItem value="events">
          <NavigationMenuTrigger className="text-xs uppercase tracking-[0.15em]">
            Events
          </NavigationMenuTrigger>
          <NavigationMenuContent style={{ width: 460 }} className="p-6">
            <p className="mb-4 text-xs uppercase tracking-[0.15em] text-[var(--color-muted-gold)]">
              What&rsquo;s on
            </p>
            <ul className="grid grid-cols-2 gap-3">
              <li>
                <NavigationMenuLink
                  href="/events/midnight-sessions"
                  className="block rounded-md p-3 hover:bg-white/10"
                >
                  <span className="font-display text-xl">Midnight Sessions</span>
                  <span className="mt-2 block text-xs text-[var(--color-taupe)]">
                    Rooftop, Saturdays from 22:00
                  </span>
                </NavigationMenuLink>
              </li>
              <li>
                <NavigationMenuLink
                  href="/events/sunset-ceremony"
                  className="block rounded-md p-3 hover:bg-white/10"
                >
                  <span className="font-display text-xl">Sunset Ceremony</span>
                  <span className="mt-2 block text-xs text-[var(--color-taupe)]">
                    Cliff terrace, Fridays 17:30
                  </span>
                </NavigationMenuLink>
              </li>
              <li>
                <NavigationMenuLink
                  href="/events/private-events"
                  className="block rounded-md p-3 hover:bg-white/10"
                >
                  <span className="font-display text-xl">Private events</span>
                  <span className="mt-2 block text-xs text-[var(--color-taupe)]">
                    Weddings and buy-outs
                  </span>
                </NavigationMenuLink>
              </li>
              <li>
                <NavigationMenuLink
                  href="/events/venue-hire"
                  className="block rounded-md p-3 hover:bg-white/10"
                >
                  <span className="font-display text-xl">Venue hire</span>
                  <span className="mt-2 block text-xs text-[var(--color-taupe)]">
                    Four rooms, up to 320 guests
                  </span>
                </NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink href="/gallery" className={linkClass}>Gallery</NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink href="/contact" className={linkClass}>Contact</NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  </Dark>
);

/** The plain component on the light surface its tokens are drawn for. */
```

### Default

```jsx
() => (
  <Light>
    <NavigationMenu defaultValue="venue">
      <NavigationMenuList>
        <NavigationMenuItem value="venue">
          <NavigationMenuTrigger>Venue</NavigationMenuTrigger>
          <NavigationMenuContent
            style={{ width: 320 }}
            className="p-4 text-[var(--color-charcoal)]"
          >
            <ul className="space-y-1">
              <li>
                <NavigationMenuLink href="/venue/the-terrace" className="block rounded-md p-2 text-sm hover:bg-black/5">
                  The Terrace
                </NavigationMenuLink>
              </li>
              <li>
                <NavigationMenuLink href="/venue/the-cellar" className="block rounded-md p-2 text-sm hover:bg-black/5">
                  The Cellar
                </NavigationMenuLink>
              </li>
              <li>
                <NavigationMenuLink href="/venue/the-garden" className="block rounded-md p-2 text-sm hover:bg-black/5">
                  The Garden
                </NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink href="/events" className={navigationMenuTriggerStyle()}>
            Events
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink href="/contact" className={navigationMenuTriggerStyle()}>
            Contact
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  </Light>
)
```
