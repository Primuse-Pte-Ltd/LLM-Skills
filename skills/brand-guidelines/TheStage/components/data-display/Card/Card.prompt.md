Card from @thestage/ui. Use via `window.TheStageUI.Card` (bundle loaded from the root `_ds_bundle.js`).

## Props

```ts
interface CardProps {
  className?: string;
  id?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
  /** Allows getting a ref to the component instance. Once the component unmounts, React will set `ref.current` to `null` (or  */
  ref?: string | ((instance: HTMLDivElement) => void | React.DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES[keyof React.DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES]) | React.RefObject<HTMLDivElement>;
}
```

## Examples

### EventCard

```jsx
() => (
  <Dark>
    <Card className="w-[340px] border-[var(--color-muted-gold)] bg-white/5 text-[var(--color-cream)]">
      <CardHeader>
        <Badge className="mb-2 w-fit bg-[var(--color-muted-gold)] text-black hover:bg-[var(--color-muted-gold)]">
          Saturday
        </Badge>
        <CardTitle className="font-display text-3xl font-normal tracking-wide">
          Midnight Sessions
        </CardTitle>
        <CardDescription className="text-[var(--color-taupe)]">
          Live sets from the rooftop, 22:00 until late.
        </CardDescription>
      </CardHeader>
      <CardContent className="text-sm leading-relaxed text-[var(--color-champagne)]">
        An intimate evening of deep house and Balinese cocktails, served under the
        canopy. Table service available for parties of four or more.
      </CardContent>
      <CardFooter className="justify-between">
        <span className="text-xs uppercase tracking-widest text-[var(--color-taupe)]">
          From IDR 450,000
        </span>
        <Button
          size="sm"
          className="bg-[var(--color-muted-gold)] text-black hover:bg-[var(--color-gold-light)]"
        >
          Book
        </Button>
      </CardFooter>
    </Card>
  </Dark>
);

/** The plain component, unstyled by brand classes, on the surface it assumes. */
```

### Default

```jsx
() => (
  <Light>
    <Card className="w-[340px]">
      <CardHeader>
        <CardTitle>Reservation confirmed</CardTitle>
        <CardDescription>Table 12 · Friday 14 March · 20:30</CardDescription>
      </CardHeader>
      <CardContent className="text-sm">
        Your table is held for 15 minutes past the reservation time. Bring the QR
        code in your confirmation email.
      </CardContent>
      <CardFooter className="gap-2">
        <Button size="sm">View ticket</Button>
        <Button size="sm" variant="outline">Cancel</Button>
      </CardFooter>
    </Card>
  </Light>
);

/** Header + content only — the shape used for summary panels. */
```

### Minimal

```jsx
() => (
  <Dark>
    <Card className="w-[280px] border-white/10 bg-white/5 text-[var(--color-cream)]">
      <CardHeader className="pb-2">
        <CardDescription className="text-xs uppercase tracking-widest text-[var(--color-taupe)]">
          Tonight
        </CardDescription>
        <CardTitle className="font-display text-4xl font-normal">142</CardTitle>
      </CardHeader>
      <CardContent className="text-sm text-[var(--color-champagne)]">
        guests on the list
      </CardContent>
    </Card>
  </Dark>
)
```
