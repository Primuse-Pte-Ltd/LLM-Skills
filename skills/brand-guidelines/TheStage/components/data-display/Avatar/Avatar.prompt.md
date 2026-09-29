Avatar from @thestage/ui. Use via `window.TheStageUI.Avatar` (bundle loaded from the root `_ds_bundle.js`).

## Props

```ts
interface AvatarProps {
  style?: CSSProperties;
  className?: string;
  id?: string;
  children?: React.ReactNode;
  asChild?: boolean;
  /** Allows getting a ref to the component instance. Once the component unmounts, React will set `ref.current` to `null` (or  */
  ref?: string | ((instance: HTMLSpanElement) => void | React.DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES[keyof React.DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES]) | React.RefObject<HTMLSpanElement>;
}
```

## Examples

### Monograms

```jsx
() => (
  <Dark>
    <p className="text-xs uppercase tracking-widest text-[var(--color-taupe)] mb-4">
      Concierge team
    </p>
    <div className="flex flex-wrap items-center gap-4">
      <Avatar className="border border-[var(--color-muted-gold)]">
        <AvatarFallback className={monogram}>AK</AvatarFallback>
      </Avatar>
      <Avatar className="border border-[var(--color-muted-gold)]">
        <AvatarFallback className={monogram}>MW</AvatarFallback>
      </Avatar>
      <Avatar className="border border-[var(--color-muted-gold)]">
        <AvatarFallback className={monogram}>PA</AvatarFallback>
      </Avatar>
      <Avatar className="border border-white/10">
        <AvatarFallback className="bg-[var(--color-forest)] text-[var(--color-taupe)] font-display text-lg font-normal">
          +6
        </AvatarFallback>
      </Avatar>
    </div>
  </Dark>
);

/** The size axis — h/w on the root scales the whole disc. */
```

### Sizes

```jsx
() => (
  <Dark>
    <div className="flex flex-wrap items-center gap-4">
      <Avatar className="h-8 w-8 border border-[var(--color-muted-gold)]">
        <AvatarFallback className="bg-[var(--color-moss)] text-[var(--color-muted-gold)] font-display text-xs font-normal">
          AK
        </AvatarFallback>
      </Avatar>
      <Avatar className="border border-[var(--color-muted-gold)]">
        <AvatarFallback className={monogram}>AK</AvatarFallback>
      </Avatar>
      <Avatar className="h-12 w-12 border border-[var(--color-muted-gold)]">
        <AvatarFallback className="bg-[var(--color-moss)] text-[var(--color-muted-gold)] font-display text-xl font-normal">
          AK
        </AvatarFallback>
      </Avatar>
      <Avatar
        style={{ width: 80, height: 80 }}
        className="border border-[var(--color-muted-gold)]"
      >
        <AvatarFallback className="bg-[var(--color-moss)] text-[var(--color-muted-gold)] font-display text-3xl font-normal">
          AK
        </AvatarFallback>
      </Avatar>
    </div>
    <p className="text-xs uppercase tracking-widest text-[var(--color-taupe)] mt-4">
      32 · 40 · 48 · 80
    </p>
  </Dark>
);

/** In context: a guest row, where the avatar sits beside the reservation. */
```

### GuestRow

```jsx
() => (
  <Dark>
    <div className="border border-white/10 bg-white/5 rounded-md p-6 max-w-md">
      <div className="flex items-center gap-4">
        <Avatar className="h-12 w-12 border border-[var(--color-muted-gold)]">
          <AvatarFallback className="bg-[var(--color-moss)] text-[var(--color-muted-gold)] font-display text-xl font-normal">
            NP
          </AvatarFallback>
        </Avatar>
        <div className="flex-1 min-w-0">
          <p className="font-display text-2xl font-normal tracking-wide">
            Nadia Prameswari
          </p>
          <p className="text-xs uppercase tracking-widest text-[var(--color-taupe)] mt-1">
            Table C5 · party of 3 · 21:30
          </p>
        </div>
        <Badge className="bg-[var(--color-muted-gold)] text-black hover:bg-[var(--color-muted-gold)]">
          VIP
        </Badge>
      </div>
    </div>
  </Dark>
);

/** AvatarImage with a fallback behind it: Radix shows the fallback until the
 *  image decodes, and keeps it forever if the image never loads. */
```

### WithImage

```jsx
() => (
  <Dark>
    <div className="flex flex-wrap items-center gap-4">
      <Avatar className="h-12 w-12 border border-[var(--color-muted-gold)]">
        <AvatarImage
          src="data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2296%22%20height%3D%2296%22%3E%3Crect%20width%3D%2296%22%20height%3D%2296%22%20fill%3D%22%23243d2f%22%2F%3E%3Ccircle%20cx%3D%2248%22%20cy%3D%2238%22%20r%3D%2216%22%20fill%3D%22%23c9a962%22%2F%3E%3Cpath%20d%3D%22M16%2096c0-18%2014-30%2032-30s32%2012%2032%2030z%22%20fill%3D%22%23c9a962%22%2F%3E%3C%2Fsvg%3E"
          alt="Wayan Sudarsana"
        />
        <AvatarFallback className={monogram}>WS</AvatarFallback>
      </Avatar>
      <div>
        <p className="font-display text-2xl font-normal tracking-wide">
          Wayan Sudarsana
        </p>
        <p className="text-xs uppercase tracking-widest text-[var(--color-taupe)] mt-1">
          Uluwatu desk · host
        </p>
      </div>
    </div>
  </Dark>
)
```
