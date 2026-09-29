InputGroup from @thestage/ui. Use via `window.TheStageUI.InputGroup` (bundle loaded from the root `_ds_bundle.js`).

## Props

```ts
interface InputGroupProps {
  /** Allows getting a ref to the component instance. Once the component unmounts, React will set `ref.current` to `null` (or  */
  ref?: string | ((instance: HTMLDivElement) => void | DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES[keyof DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES]) | RefObject<HTMLDivElement>;
  className?: string;
  id?: string;
  style?: CSSProperties;
  children?: React.ReactNode;
}
```

## Examples

### SearchGuests

```jsx
() => (
  <Dark>
    <div className="max-w-md space-y-3">
      <Label
        htmlFor="ig-search"
        className="text-xs uppercase tracking-wider text-[var(--color-taupe)]"
      >
        Tonight&rsquo;s guest list
      </Label>
      <InputGroup className="border-white/10">
        <InputGroupAddon>
          <InputGroupText className="text-[var(--color-muted-gold)]">
            {/* lucide-react is not an entry of the preview bundle, so the
                magnifier is drawn inline. */}
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            >
              <circle cx="11" cy="11" r="7" />
              <line x1="16.5" y1="16.5" x2="21" y2="21" />
            </svg>
          </InputGroupText>
        </InputGroupAddon>
        <InputGroupInput
          id="ig-search"
          defaultValue="Pramesti"
          className="text-[var(--color-cream)]"
        />
        <InputGroupAddon align="inline-end">
          <InputGroupButton className="text-[var(--color-taupe)]">Clear</InputGroupButton>
        </InputGroupAddon>
      </InputGroup>
      <p className="text-xs text-[var(--color-taupe)]">3 of 142 guests match</p>
    </div>
  </Dark>
);

/** Currency prefix and unit suffix — the pattern every IDR field on the site uses. */
```

### PriceField

```jsx
() => (
  <Dark>
    <div className="max-w-md space-y-3">
      <Label
        htmlFor="ig-price"
        className="text-xs uppercase tracking-wider text-[var(--color-taupe)]"
      >
        Minimum spend
      </Label>
      <InputGroup className="border-[var(--color-muted-gold)]">
        <InputGroupAddon>
          <InputGroupText className="text-[var(--color-muted-gold)]">IDR</InputGroupText>
        </InputGroupAddon>
        <InputGroupInput
          id="ig-price"
          defaultValue="1,500,000"
          className="text-[var(--color-cream)]"
        />
        <InputGroupAddon align="inline-end">
          <InputGroupText className="text-[var(--color-taupe)]">per table</InputGroupText>
        </InputGroupAddon>
      </InputGroup>
      <p className="text-xs text-[var(--color-taupe)]">
        Applied to rooftop bookings on Friday and Saturday.
      </p>
    </div>
  </Dark>
);

/** `align="block-end"` turns the group into a column: textarea above, toolbar below. */
```

### MessageWithToolbar

```jsx
() => (
  <Light>
    <div className="max-w-md space-y-3">
      <Label htmlFor="ig-msg" className="text-sm font-medium">
        Note for the events team
      </Label>
      <InputGroup>
        <InputGroupTextarea
          id="ig-msg"
          rows={4}
          defaultValue="Engagement dinner for 40 on the rooftop, Saturday 18 April. Gamelan trio for the first hour."
        />
        <InputGroupAddon align="block-end" className="border-t">
          <InputGroupText>92 / 500</InputGroupText>
          <InputGroupButton size="sm" variant="outline" className="ml-auto">
            Attach menu
          </InputGroupButton>
          <InputGroupButton size="sm" variant="default">
            Send
          </InputGroupButton>
        </InputGroupAddon>
      </InputGroup>
    </div>
  </Light>
)
```
