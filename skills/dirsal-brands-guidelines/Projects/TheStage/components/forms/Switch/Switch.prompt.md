Switch from @thestage/ui. Use via `window.TheStageUI.Switch` (bundle loaded from the root `_ds_bundle.js`).

## Props

```ts
interface SwitchProps {
  style?: CSSProperties;
  defaultChecked?: boolean;
  className?: string;
  id?: string;
  children?: React.ReactNode;
  asChild?: boolean;
  checked?: boolean;
  required?: boolean;
  /** Allows getting a ref to the component instance. Once the component unmounts, React will set `ref.current` to `null` (or  */
  ref?: string | ((instance: HTMLButtonElement) => void | React.DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES[keyof React.DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES]) | React.RefObject<HTMLButtonElement>;
}
```

## Examples

### BookingPreferences

```jsx
() => (
  <Dark>
    <div className="max-w-md space-y-5">
      <p className="text-xs uppercase tracking-wider text-[var(--color-taupe)]">
        How we reach you
      </p>
      <div className="flex items-center justify-between gap-6">
        <Label htmlFor="sw-wa" className="text-sm text-[var(--color-cream)]">
          Table reminders on WhatsApp
        </Label>
        <Switch id="sw-wa" defaultChecked />
      </div>
      <div className="flex items-center justify-between gap-6">
        <Label htmlFor="sw-events" className="text-sm text-[var(--color-cream)]">
          Rooftop session announcements
        </Label>
        <Switch id="sw-events" defaultChecked />
      </div>
      <div className="flex items-center justify-between gap-6">
        <Label htmlFor="sw-offers" className="text-sm text-[var(--color-cream)]">
          Seasonal offers and set menus
        </Label>
        <Switch id="sw-offers" />
      </div>
    </div>
  </Dark>
);

/** With a supporting line, inside the bordered panel the account pages use. */
```

### WithDescription

```jsx
() => (
  <Dark>
    <div className="max-w-md space-y-3">
      <div className="flex items-start justify-between gap-6 rounded-md border border-[var(--color-muted-gold)] p-5">
        <div className="space-y-1">
          <Label htmlFor="sw-auto" className="text-sm text-[var(--color-cream)]">
            Hold my usual table
          </Label>
          <p className="text-xs leading-relaxed text-[var(--color-taupe)]">
            Terrace 12 is kept for you every Friday until 20:45, then released to
            the waiting list.
          </p>
        </div>
        <Switch id="sw-auto" defaultChecked />
      </div>
      <div className="flex items-start justify-between gap-6 rounded-md border border-white/10 p-5">
        <div className="space-y-1">
          <Label htmlFor="sw-valet" className="text-sm text-[var(--color-cream)]">
            Valet on arrival
          </Label>
          <p className="text-xs leading-relaxed text-[var(--color-taupe)]">
            IDR 150,000 per visit, added to the bill.
          </p>
        </div>
        <Switch id="sw-valet" />
      </div>
    </div>
  </Dark>
);

/** On, off, and both disabled — the stock look on a light surface. */
```

### States

```jsx
() => (
  <Light>
    <div className="max-w-md space-y-4">
      <div className="flex items-center gap-4">
        <Switch id="sw-off" />
        <Label htmlFor="sw-off">Off</Label>
      </div>
      <div className="flex items-center gap-4">
        <Switch id="sw-on" defaultChecked />
        <Label htmlFor="sw-on">On</Label>
      </div>
      <div className="flex items-center gap-4">
        <Switch id="sw-doff" disabled className="peer" />
        <Label htmlFor="sw-doff">Disabled, off</Label>
      </div>
      <div className="flex items-center gap-4">
        <Switch id="sw-don" disabled defaultChecked className="peer" />
        <Label htmlFor="sw-don">Disabled, on</Label>
      </div>
    </div>
  </Light>
)
```
