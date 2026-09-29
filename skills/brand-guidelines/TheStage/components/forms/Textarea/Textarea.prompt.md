Textarea from @thestage/ui. Use via `window.TheStageUI.Textarea` (bundle loaded from the root `_ds_bundle.js`).

## Props

```ts
interface TextareaProps {
  style?: CSSProperties;
  className?: string;
  id?: string;
  children?: React.ReactNode;
  /** Allows getting a ref to the component instance. Once the component unmounts, React will set `ref.current` to `null` (or  */
  ref?: string | ((instance: HTMLTextAreaElement) => void | React.DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES[keyof React.DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES]) | React.RefObject<HTMLTextAreaElement>;
}
```

## Examples

### EventBrief

```jsx
() => (
  <Dark>
    <div className="max-w-md space-y-1.5">
      <FieldLabel htmlFor="brief">Tell us about your event</FieldLabel>
      <Textarea
        id="brief"
        rows={5}
        className="on-brand-dark bg-[var(--color-dark-green)] text-[var(--color-cream)] leading-relaxed"
        defaultValue={
          "Engagement dinner for 40 guests on the rooftop, Saturday 18 April. We would like the long table under the canopy, a Balinese gamelan trio for the first hour, and a vegetarian tasting menu for eight of the party."
        }
      />
      <p className="text-xs text-[var(--color-taupe)]">
        Our events team replies within one working day.
      </p>
    </div>
  </Dark>
);

/** Empty with a placeholder, plus the counter and action row it usually sits in. */
```

### WithCounter

```jsx
() => (
  <Dark>
    <div className="max-w-md space-y-1.5">
      <FieldLabel htmlFor="request">Special requests</FieldLabel>
      <Textarea
        id="request"
        rows={4}
        placeholder="Allergies, seating preference, a birthday to mark…"
        className="on-brand-dark bg-[var(--color-dark-green)] text-[var(--color-cream)]"
      />
      <div className="flex items-center justify-between">
        <span className="text-xs text-[var(--color-taupe)]">0 / 500 characters</span>
        <Button
          size="sm"
          className="bg-[var(--color-muted-gold)] text-black hover:bg-[var(--color-gold-light)]"
        >
          Send to the team
        </Button>
      </div>
    </div>
  </Dark>
);

/** Filled, empty and disabled, on the surface the stock component assumes. */
```

### States

```jsx
() => (
  <Light>
    <div className="max-w-md space-y-4">
      <div className="space-y-1.5">
        <Label htmlFor="ta-filled">Note to the host</Label>
        <Textarea
          id="ta-filled"
          rows={3}
          defaultValue="Arriving from Ubud, may be twenty minutes late. Please hold the terrace table."
        />
      </div>
      <div className="space-y-1.5">
        <Label htmlFor="ta-empty">Dietary notes</Label>
        <Textarea id="ta-empty" rows={3} placeholder="No shellfish, one guest is coeliac…" />
      </div>
      <div className="space-y-1.5">
        <Label htmlFor="ta-disabled">Cancellation reason</Label>
        <Textarea
          id="ta-disabled"
          rows={2}
          disabled
          defaultValue="Locked once the deposit is settled."
        />
      </div>
    </div>
  </Light>
)
```
