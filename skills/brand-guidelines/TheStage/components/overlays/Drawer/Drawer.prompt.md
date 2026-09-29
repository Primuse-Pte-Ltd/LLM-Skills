Drawer from @thestage/ui. Use via `window.TheStageUI.Drawer` (bundle loaded from the root `_ds_bundle.js`).

## Props

```ts
interface DrawerProps {
  activeSnapPoint?: string | number;
  setActiveSnapPoint?: (snapPoint: number | string | null) => void;
  children?: React.ReactNode;
  open?: boolean;
  /** Number between 0 and 1 that determines when the drawer should be closed. Example: threshold of 0.5 would close the drawe */
  closeThreshold?: number;
  /** When `true` the `body` doesn't get any styles assigned from Vaul */
  noBodyStyles?: boolean;
  shouldScaleBackground?: boolean;
  /** When `false` we don't change body's background color when the drawer is open. */
  setBackgroundColorOnScale?: boolean;
  /** Duration for which the drawer is not draggable after scrolling content inside of the drawer. */
  scrollLockTimeout?: number;
  /** When `true`, don't move the drawer upwards if there's space, but rather only change it's height so it's fully scrollable */
  fixed?: boolean;
  /** When `true` only allows the drawer to be dragged by the `<Drawer.Handle />` component. */
  handleOnly?: boolean;
  /** When `false` dragging, clicking outside, pressing esc, etc. will not close the drawer. Use this in comination with the ` */
  dismissible?: boolean;
  /** When `false` it allows to interact with elements outside of the drawer without closing it. */
  modal?: boolean;
  nested?: boolean;
  /** Direction of the drawer. Can be `top` or `bottom`, `left`, `right`. */
  direction?: "top" | "bottom" | "left" | "right";
  /** Opened by default, skips initial enter animation. Still reacts to `open` state changes */
  defaultOpen?: boolean;
  /** When set to `true` prevents scrolling on the document body on mount, and restores it on unmount. */
  disablePreventScroll?: boolean;
  /** When `true` Vaul will reposition inputs rather than scroll then into view if the keyboard is in the way. Setting it to ` */
  repositionInputs?: boolean;
  /** Disabled velocity based swiping for snap points. This means that a snap point won't be skipped even if the velocity is h */
  snapToSequentialPoint?: boolean;
  container?: HTMLElement;
  preventScrollRestoration?: boolean;
  autoFocus?: boolean;
  /** Array of numbers from 0 to 100 that corresponds to % of the screen a given snap point should take up. Should go from lea */
  snapPoints?: (string | number)[];
  /** Index of a `snapPoint` from which the overlay fade should be applied. Defaults to the last snap point. */
  fadeFromIndex?: number;
}
```

## Examples

### TableDetails

```jsx
() => (
  <Drawer open>
    <DrawerContent className="text-[var(--color-charcoal)]">
      <DrawerHeader>
        <DrawerTitle className="font-display text-2xl font-normal tracking-wide">
          Table 14 — Terrace
        </DrawerTitle>
        <DrawerDescription>
          Seats six, facing the stage. Minimum spend IDR 3,600,000, redeemable
          against bottles and food.
        </DrawerDescription>
      </DrawerHeader>
      <div className="px-4 text-sm">
        <div className="flex items-center justify-between py-3 border-t">
          <span className="text-muted-foreground">Event</span>
          <span>Midnight Sessions · Sat 22 Mar</span>
        </div>
        <div className="flex items-center justify-between py-3 border-t">
          <span className="text-muted-foreground">Arrival</span>
          <span>from 21:00, held until 22:30</span>
        </div>
        <div className="flex items-center justify-between py-3 border-t">
          <span className="text-muted-foreground">Deposit today</span>
          <span className="tabular-nums">IDR 1,800,000</span>
        </div>
      </div>
      <DrawerFooter className="gap-2">
        <Button className="bg-[var(--color-muted-gold)] text-black hover:bg-[var(--color-gold-light)]">
          Hold this table
        </Button>
        <Button variant="outline">Back to the map</Button>
      </DrawerFooter>
    </DrawerContent>
  </Drawer>
);

/** A short confirmation drawer — the shape used after a successful payment. */
```

### PaymentConfirmed

```jsx
() => (
  <Drawer open>
    <DrawerContent className="text-[var(--color-charcoal)]">
      <DrawerHeader>
        <DrawerTitle className="font-display text-2xl font-normal tracking-wide">
          Payment received
        </DrawerTitle>
        <DrawerDescription>
          IDR 6,000,000 paid. Reservation TS-4821 is confirmed and your QR codes
          are on their way to kadek.wirawan@gmail.com.
        </DrawerDescription>
      </DrawerHeader>
      <DrawerFooter className="gap-2">
        <Button className="bg-[var(--color-muted-gold)] text-black hover:bg-[var(--color-gold-light)]">
          View my tickets
        </Button>
        <Button variant="outline">Add to calendar</Button>
      </DrawerFooter>
    </DrawerContent>
  </Drawer>
)
```
