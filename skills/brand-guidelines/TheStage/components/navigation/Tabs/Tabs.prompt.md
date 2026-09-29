Tabs from @thestage/ui. Use via `window.TheStageUI.Tabs` (bundle loaded from the root `_ds_bundle.js`).

## Props

```ts
interface TabsProps {
  /** The value for the selected tab, if controlled */
  value?: string;
  /** The value of the tab to select by default, if uncontrolled */
  defaultValue?: string;
  /** The orientation the tabs are layed out. Mainly so arrow navigation is done accordingly (left & right vs. up & down) */
  orientation?: "horizontal" | "vertical";
  /** The direction of navigation between toolbar items. */
  dir?: "ltr" | "rtl";
  /** Whether a tab is activated automatically or manually. */
  activationMode?: "automatic" | "manual";
  style?: CSSProperties;
  className?: string;
  id?: string;
  children?: React.ReactNode;
  asChild?: boolean;
  /** Allows getting a ref to the component instance. Once the component unmounts, React will set `ref.current` to `null` (or  */
  ref?: string | ((instance: HTMLDivElement) => void | React.DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES[keyof React.DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES]) | React.RefObject<HTMLDivElement>;
}
```

## Examples

### EventDetail

```jsx
() => (
  <Dark>
    <Tabs defaultValue="overview">
      <TabsList className="border border-white/10 bg-white/5">
        <TabsTrigger value="overview">Overview</TabsTrigger>
        <TabsTrigger value="lineup">Line-up</TabsTrigger>
        <TabsTrigger value="tables">Table plans</TabsTrigger>
      </TabsList>
      <TabsContent value="overview" className="mt-6 max-w-md">
        <h3 className="font-display text-3xl tracking-wide text-[var(--color-cream)]">
          Midnight Sessions
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-[var(--color-champagne)]">
          Saturday 22:00 until late, on the rooftop. Deep house, Balinese
          cocktails and table service for parties of four or more.
        </p>
      </TabsContent>
      <TabsContent value="lineup" className="mt-6 max-w-md text-sm">
        Kalya, then Ruma B from 01:00.
      </TabsContent>
      <TabsContent value="tables" className="mt-6 max-w-md text-sm">
        18 tables, 6 cabanas, 2 held for walk-ins.
      </TabsContent>
    </Tabs>
  </Dark>
);

/** orientation="vertical" — the rail used by the venue settings screens. */
```

### Vertical

```jsx
() => (
  <Dark>
    <Tabs defaultValue="floorplan" orientation="vertical" className="flex gap-6">
      <TabsList className="h-auto w-48 flex-col items-stretch justify-start gap-1 border border-white/10 bg-white/5 p-2">
        <TabsTrigger value="floorplan" className="justify-start">Floor plan</TabsTrigger>
        <TabsTrigger value="hours" className="justify-start">Opening hours</TabsTrigger>
        <TabsTrigger value="deposits" className="justify-start">Deposits</TabsTrigger>
        <TabsTrigger value="staff" className="justify-start">Staff access</TabsTrigger>
      </TabsList>
      <TabsContent value="floorplan" className="mt-0 max-w-md">
        <h3 className="font-display text-2xl tracking-wide text-[var(--color-cream)]">
          Floor plan
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-[var(--color-champagne)]">
          18 tables across the rooftop and cliff terrace, 6 cabanas, 2 held back
          for walk-ins every night.
        </p>
      </TabsContent>
      <TabsContent value="hours" className="mt-0 max-w-md text-sm text-[var(--color-champagne)]">
        17:00 until 02:00, Wednesday to Sunday.
      </TabsContent>
      <TabsContent value="deposits" className="mt-0 max-w-md text-sm text-[var(--color-champagne)]">
        IDR 1,500,000 per cabana, refundable up to 48 hours before.
      </TabsContent>
      <TabsContent value="staff" className="mt-0 max-w-md text-sm text-[var(--color-champagne)]">
        11 accounts, 3 with floor-manager rights.
      </TabsContent>
    </Tabs>
  </Dark>
);

/** The plain component, on the light surface its tokens assume. */
```

### Default

```jsx
() => (
  <Light>
    <Tabs defaultValue="details">
      <TabsList>
        <TabsTrigger value="details">Details</TabsTrigger>
        <TabsTrigger value="guests">Guests</TabsTrigger>
        <TabsTrigger value="payment">Payment</TabsTrigger>
      </TabsList>
      <TabsContent value="details" className="max-w-md text-sm">
        Table 12 &middot; Friday 14 March &middot; 20:30 &middot; party of six.
      </TabsContent>
      <TabsContent value="guests" className="max-w-md text-sm">
        Six names on the list, four checked in.
      </TabsContent>
      <TabsContent value="payment" className="max-w-md text-sm">
        Deposit of IDR 1,500,000 paid on 2 March.
      </TabsContent>
    </Tabs>
  </Light>
)
```
