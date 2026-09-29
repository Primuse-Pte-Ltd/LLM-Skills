Accordion from @thestage/ui. Use via `window.TheStageUI.Accordion` (bundle loaded from the root `_ds_bundle.js`).

## Props

```ts
interface AccordionProps {
  type: "multiple" | "single";
  /** The controlled stateful value of the accordion item whose content is expanded. */
  value?: string | string[];
  /** The value of the item whose content is expanded when the accordion is initially rendered. Use `defaultValue` if you do n */
  defaultValue?: string | string[];
  /** Whether or not an accordion is disabled from user interaction. */
  disabled?: boolean;
  /** The layout in which the Accordion operates. */
  orientation?: "horizontal" | "vertical";
  /** The language read direction. */
  dir?: "ltr" | "rtl";
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

### Faq

```jsx
() => (
  <Dark>
    <p className="text-xs uppercase tracking-widest text-[var(--color-taupe)] mb-4">
      Before you arrive
    </p>
    <Accordion type="single" defaultValue="dress" className="max-w-xl">
      <AccordionItem value="dress" className="border-white/10">
        <AccordionTrigger className={trigger}>What is the dress code?</AccordionTrigger>
        <AccordionContent className={content}>
          Smart resort after 20:00 — linen, collared shirts, closed shoes on the
          rooftop. Swimwear is fine at the garden pavilion until sunset.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="deposit" className="border-white/10">
        <AccordionTrigger className={trigger}>Is a deposit required?</AccordionTrigger>
        <AccordionContent className={content}>
          Tables of six or more hold a IDR 1,500,000 deposit, redeemable against
          the bill on the night.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="parking" className="border-white/10">
        <AccordionTrigger className={trigger}>Where do we park?</AccordionTrigger>
        <AccordionContent className={content}>
          Valet on Jalan Kayu Aya from 18:00. Scooters park free at the Seminyak
          gate.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  </Dark>
);

/** `type="multiple"` — two panels open at once, with a gold rule per section. */
```

### MultipleOpen

```jsx
() => (
  <Dark>
    <p className="text-xs uppercase tracking-widest text-[var(--color-taupe)] mb-4">
      Venue hire · Jimbaran
    </p>
    <Accordion
      type="multiple"
      defaultValue={["spaces", "catering"]}
      className="max-w-xl"
    >
      <AccordionItem value="spaces" className="border-[var(--color-muted-gold)]">
        <AccordionTrigger className={trigger}>Spaces</AccordionTrigger>
        <AccordionContent className={content}>
          Rooftop terrace (120 standing), garden pavilion (80 seated) and the
          cellar room (24 seated). All three can be taken together for a buyout.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="catering" className="border-[var(--color-muted-gold)]">
        <AccordionTrigger className={trigger}>Catering</AccordionTrigger>
        <AccordionContent className={content}>
          Five-course tasting menu from IDR 850,000 per guest, or a Balinese
          megibung service from IDR 620,000. Vegetarian menus at no extra charge.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="music" className="border-[var(--color-muted-gold)]">
        <AccordionTrigger className={trigger}>Music and sound</AccordionTrigger>
        <AccordionContent className={content}>
          House gamelan ensemble included until 22:00. DJ booth and rider on
          request.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  </Dark>
);

/** The stock component, on the light surface shadcn designs for. */
```

### Default

```jsx
() => (
  <div className="bg-[var(--color-cream)] text-[var(--color-charcoal)] font-body p-8">
    <div className="bg-background rounded-md border p-6">
      <Accordion type="single" defaultValue="cancel" className="max-w-xl">
        <AccordionItem value="cancel">
          <AccordionTrigger>Can I cancel a reservation?</AccordionTrigger>
          <AccordionContent>
            Yes — up to 24 hours before your arrival time, from the link in your
            confirmation email. The deposit is refunded within five working days.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="children">
          <AccordionTrigger>Are children welcome?</AccordionTrigger>
          <AccordionContent>
            Until 20:00 in the garden pavilion. The rooftop is 18+ all evening.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="accessible">
          <AccordionTrigger>Is the venue accessible?</AccordionTrigger>
          <AccordionContent>
            Step-free from the Seminyak gate to the pavilion and the rooftop lift.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  </div>
)
```
