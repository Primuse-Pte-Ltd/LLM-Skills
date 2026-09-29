Select from @thestage/ui. Use via `window.TheStageUI.Select` (bundle loaded from the root `_ds_bundle.js`).

## Props

```ts
interface SelectProps {
  children?: React.ReactNode;
  open?: boolean;
  defaultOpen?: boolean;
  dir?: "ltr" | "rtl";
  name?: string;
  autoComplete?: string;
  disabled?: boolean;
  required?: boolean;
  form?: string;
  value?: string;
  defaultValue?: string;
}
```

## Examples

### PartySize

```jsx
() => (
  <Dark>
    <div className="w-[300px] space-y-5 pb-12">
      <p className="font-display text-2xl font-normal tracking-wide">
        Reserve a table
      </p>

      <div>
        <Label className="text-xs uppercase tracking-wider text-[var(--color-champagne)]">
          Party size
        </Label>
        <div className="mt-2">
          <Select open defaultValue="4">
            <SelectTrigger className={triggerDark}>
              <SelectValue />
            </SelectTrigger>
            <SelectContent className="text-[var(--color-charcoal)]">
              <SelectGroup>
                <SelectLabel>Tables</SelectLabel>
                <SelectItem value="2">2 guests</SelectItem>
                <SelectItem value="4">4 guests</SelectItem>
                <SelectItem value="6">6 guests</SelectItem>
              </SelectGroup>
              <SelectSeparator />
              <SelectGroup>
                <SelectLabel>Cabanas</SelectLabel>
                <SelectItem value="8">8 guests — cabana only</SelectItem>
                <SelectItem value="12" disabled>
                  12 guests — terrace hire
                </SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="border border-white/10 bg-white/5 p-4 text-sm text-[var(--color-champagne)]">
        <p>Table minimum · IDR 4,500,000</p>
        <p className="mt-1 text-[var(--color-taupe)]">
          Redeemable against food and drinks on the night.
        </p>
      </div>

      <Button className="w-full bg-[var(--color-muted-gold)] text-black hover:bg-[var(--color-gold-light)]">
        Check availability
      </Button>
    </div>
  </Dark>
);

/** The trigger's own states, closed: placeholder, chosen value, disabled. */
```

### TriggerStates

```jsx
() => (
  <Dark>
    <div className="w-[300px] space-y-5">
      <div>
        <Label className="text-xs uppercase tracking-wider text-[var(--color-champagne)]">
          Seating area
        </Label>
        <div className="mt-2">
          <Select>
            <SelectTrigger className={triggerDark}>
              <SelectValue placeholder="Choose an area" />
            </SelectTrigger>
            <SelectContent className="text-[var(--color-charcoal)]">
              <SelectItem value="terrace">Terrace</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div>
        <Label className="text-xs uppercase tracking-wider text-[var(--color-champagne)]">
          Arrival time
        </Label>
        <div className="mt-2">
          <Select defaultValue="2030">
            <SelectTrigger className={triggerDark}>
              <SelectValue />
            </SelectTrigger>
            <SelectContent className="text-[var(--color-charcoal)]">
              <SelectItem value="2030">20:30</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div>
        <Label className="text-xs uppercase tracking-wider text-[var(--color-taupe)]">
          Cabana — sold out tonight
        </Label>
        <div className="mt-2">
          <Select disabled defaultValue="cabana3">
            <SelectTrigger className={triggerDark}>
              <SelectValue />
            </SelectTrigger>
            <SelectContent className="text-[var(--color-charcoal)]">
              <SelectItem value="cabana3">Cabana 3</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  </Dark>
);

/** The stock component, unstyled by brand classes, on the light surface. */
```

### OnLightSurface

```jsx
() => (
  <Light>
    <div className="w-[300px] space-y-5">
      <div>
        <Label>Event</Label>
        <div className="mt-2">
          <Select defaultValue="midnight">
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent className="text-[var(--color-charcoal)]">
              <SelectGroup>
                <SelectLabel>This week</SelectLabel>
                <SelectItem value="midnight">Midnight Sessions</SelectItem>
                <SelectItem value="sunset">Sunset Ceremony</SelectItem>
              </SelectGroup>
              <SelectSeparator />
              <SelectGroup>
                <SelectLabel>Private hire</SelectLabel>
                <SelectItem value="terrace">Terrace buy-out</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div>
        <Label>Ticket type</Label>
        <div className="mt-2">
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Select a ticket" />
            </SelectTrigger>
            <SelectContent className="text-[var(--color-charcoal)]">
              <SelectItem value="ga">General admission — IDR 450,000</SelectItem>
              <SelectItem value="table">Table for four — IDR 4,500,000</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  </Light>
)
```
