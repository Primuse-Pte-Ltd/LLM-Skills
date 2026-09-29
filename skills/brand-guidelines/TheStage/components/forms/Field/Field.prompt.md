Field from @thestage/ui. Use via `window.TheStageUI.Field` (bundle loaded from the root `_ds_bundle.js`).

## Props

```ts
interface FieldProps {
  /** Allows getting a ref to the component instance. Once the component unmounts, React will set `ref.current` to `null` (or  */
  ref?: string | ((instance: HTMLDivElement) => void | DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES[keyof DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES]) | RefObject<HTMLDivElement>;
  className?: string;
  id?: string;
  style?: CSSProperties;
  children?: React.ReactNode;
  orientation?: "horizontal" | "vertical" | "responsive";
}
```

## Examples

### ReservationDetails

```jsx
() => (
  <Dark>
    <FieldSet className="w-[300px]">
      {/* FieldLegend caps its own font-size with a data-variant selector that
          outranks a plain utility, so the display size lives on a child. */}
      <FieldLegend className="font-display text-[var(--color-cream)]">
        <span className="text-2xl font-normal tracking-wide">
          Reservation details
        </span>
      </FieldLegend>
      <FieldDescription className="text-[var(--color-taupe)]">
        The name on the door list and how many of you we should seat.
      </FieldDescription>

      <FieldGroup>
        <Field>
          <FieldLabel htmlFor="rd-name" className={labelDark}>
            Name on the booking
          </FieldLabel>
          <Input id="rd-name" defaultValue="Amelia Hart" className={inputDark} />
        </Field>

        <Field>
          <FieldLabel htmlFor="rd-guests" className={labelDark}>
            Party size
          </FieldLabel>
          <Input id="rd-guests" defaultValue="18" className={inputDark} />
          <FieldError className="text-rose-300">
            The terrace seats 12. Ask us about a full venue hire.
          </FieldError>
        </Field>

        <Field>
          <FieldLabel htmlFor="rd-notes" className={labelDark}>
            Notes for the host
          </FieldLabel>
          <Textarea
            id="rd-notes"
            rows={3}
            defaultValue="Seated dinner, then a DJ set on the terrace."
            className={inputDark}
          />
          <FieldDescription className="text-[var(--color-taupe)]">
            Allergies, celebrations, arrival time.
          </FieldDescription>
        </Field>
      </FieldGroup>
    </FieldSet>
  </Dark>
);

/** Horizontal fields: the control sits beside a FieldTitle + FieldDescription. */
```

### Preferences

```jsx
() => (
  <Light>
    <FieldSet className="w-[300px]">
      <FieldLegend>Add to your evening</FieldLegend>

      <FieldGroup>
        <Field orientation="horizontal">
          <FieldContent>
            <FieldTitle>Dedicated host</FieldTitle>
            <FieldDescription>
              One host for your table all night. IDR 350,000.
            </FieldDescription>
          </FieldContent>
          <Switch defaultChecked />
        </Field>

        <Field orientation="horizontal">
          <FieldContent>
            <FieldTitle>Welcome bottle</FieldTitle>
            <FieldDescription>
              Ruinart Blanc de Blancs on arrival. IDR 2,900,000.
            </FieldDescription>
          </FieldContent>
          <Switch />
        </Field>

        <Field orientation="horizontal">
          <Checkbox id="pf-news" defaultChecked />
          <FieldContent>
            <FieldTitle>Event announcements</FieldTitle>
            <FieldDescription>
              Tell me when tickets open for the rooftop sessions.
            </FieldDescription>
          </FieldContent>
        </Field>
      </FieldGroup>
    </FieldSet>
  </Light>
);

/** The orientation axis, and a field in its error state, on the light surface. */
```

### Orientations

```jsx
() => (
  <Light>
    <FieldGroup className="w-[300px]">
      <Field>
        <FieldLabel htmlFor="or-vertical">Vertical — label above</FieldLabel>
        <Input id="or-vertical" defaultValue="Table 12" />
        <FieldDescription>The default for text inputs.</FieldDescription>
      </Field>

      <Field orientation="horizontal">
        <FieldLabel htmlFor="or-horizontal">Horizontal — label beside</FieldLabel>
        <Switch id="or-horizontal" defaultChecked />
      </Field>

      <Field>
        <FieldLabel htmlFor="or-invalid">Promo code</FieldLabel>
        <Input id="or-invalid" defaultValue="SUNSET24" aria-invalid />
        <FieldError
          errors={[
            { message: "This code expired on 31 December." },
            { message: "Codes cannot be combined with table minimums." },
          ]}
        />
      </Field>

      <Button size="sm" className="w-fit">
        Apply
      </Button>
    </FieldGroup>
  </Light>
)
```
