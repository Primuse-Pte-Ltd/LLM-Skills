Carousel from @thestage/ui. Use via `window.TheStageUI.Carousel` (bundle loaded from the root `_ds_bundle.js`).

## Props

```ts
interface CarouselProps {
  className?: string;
  id?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
  opts?: Partial<OptionsType>;
  plugins?: CreatePluginType<LoosePluginType, {}>[];
  orientation?: "horizontal" | "vertical";
  setApi?: (api: CarouselApi) => void;
  /** Allows getting a ref to the component instance. Once the component unmounts, React will set `ref.current` to `null` (or  */
  ref?: string | ((instance: HTMLDivElement) => void | React.DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES[keyof React.DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES]) | React.RefObject<HTMLDivElement>;
}
```

## Examples

### EventLineup

```jsx
() => (
  <Dark>
    <p className="text-xs uppercase tracking-widest text-[var(--color-taupe)]">
      What&rsquo;s on
    </p>
    <h3 className="mt-2 font-display text-3xl font-normal tracking-wide">
      Similar Events
    </h3>
    <div className="mt-6" style={{ paddingLeft: 56, paddingRight: 56, width: 660 }}>
      <Carousel opts={{ align: "start" }}>
        <CarouselContent>
          {lineup.map(([date, title, blurb, price]) => (
            <CarouselItem key={title} style={{ flexBasis: "33.3333%" }}>
              <div className="h-full rounded-lg border border-[var(--color-muted-gold)] bg-white/5 p-5">
                <p className="text-[11px] uppercase tracking-widest text-[var(--color-muted-gold)]">
                  {date}
                </p>
                <p className="mt-2 font-display text-2xl font-normal leading-none tracking-wide">
                  {title}
                </p>
                <p className="mt-3 text-sm text-[var(--color-champagne)]">{blurb}</p>
                <p className="mt-4 text-[11px] uppercase tracking-widest text-[var(--color-taupe)]">
                  {price}
                </p>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className={navClass} />
        <CarouselNext className={navClass} />
      </Carousel>
    </div>
  </Dark>
);

/** One slide at a time — the full-bleed hero the home page opens with. */
```

### HeroSlides

```jsx
() => (
  <Dark>
    <div style={{ paddingLeft: 56, paddingRight: 56, width: 660 }}>
      <Carousel>
        <CarouselContent>
          {[
            ["Rooftop", "Midnight Sessions", "#122019", "#c9a962"],
            ["Garden Pavilion", "Gamelan Nights", "#1a2e23", "#8b7355"],
            ["The Cellar", "Cellar Tasting", "#060c09", "#243d2f"],
          ].map(([venue, title, from, to]) => (
            <CarouselItem key={title}>
              <div
                className="flex flex-col justify-end rounded-lg p-6"
                style={{
                  height: 220,
                  backgroundImage: `linear-gradient(140deg, ${from} 0%, ${to} 100%)`,
                }}
              >
                <p className="text-[11px] uppercase tracking-widest text-[var(--color-cream)]">
                  {venue}
                </p>
                <p className="mt-2 font-display text-4xl font-normal tracking-wide">
                  {title}
                </p>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className={navClass} />
        <CarouselNext className={navClass} />
      </Carousel>
    </div>
  </Dark>
);

/** `orientation="vertical"` — items stack and the controls move above/below. */
```

### Vertical

```jsx
() => (
  <Dark>
    <p className="text-xs uppercase tracking-widest text-[var(--color-taupe)]">
      Tonight&rsquo;s running order
    </p>
    <div className="mt-6" style={{ paddingTop: 56, paddingBottom: 56, width: 380 }}>
      <Carousel orientation="vertical" opts={{ align: "start" }}>
        <CarouselContent style={{ height: 210 }}>
          {[
            ["21:00", "Doors & welcome pour"],
            ["22:00", "Ayu Laksmi, opening set"],
            ["23:15", "Midnight Sessions"],
            ["01:00", "Last service"],
          ].map(([time, what]) => (
            <CarouselItem key={time} style={{ flexBasis: "50%" }}>
              <div className="flex h-full items-center gap-4 rounded-lg border border-white/10 bg-white/5 px-5">
                <span className="font-display text-2xl font-normal tabular-nums text-[var(--color-muted-gold)]">
                  {time}
                </span>
                <span className="text-sm text-[var(--color-champagne)]">{what}</span>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className={navClass} />
        <CarouselNext className={navClass} />
      </Carousel>
    </div>
  </Dark>
)
```
