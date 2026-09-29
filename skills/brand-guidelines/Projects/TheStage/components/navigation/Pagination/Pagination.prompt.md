Pagination from @thestage/ui. Use via `window.TheStageUI.Pagination` (bundle loaded from the root `_ds_bundle.js`).

## Props

```ts
interface PaginationProps {
  /** Allows getting a ref to the component instance. Once the component unmounts, React will set `ref.current` to `null` (or  */
  ref?: string | ((instance: HTMLElement) => void | DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES[keyof DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES]) | RefObject<HTMLElement>;
  className?: string;
  id?: string;
  style?: CSSProperties;
  children?: React.ReactNode;
}
```

## Examples

### EventsPager

```jsx
() => (
  <Dark>
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious href="/events?page=2" className={link} />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="/events?page=1" className={link}>1</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="/events?page=2" className={link}>2</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="/events?page=3" isActive className={active}>3</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="/events?page=4" className={link}>4</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationEllipsis className="text-[var(--color-bronze)]" />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="/events?page=12" className={link}>12</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationNext href="/events?page=4" className={link} />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  </Dark>
);

/** Prev / next only — the guest-list footer, where the count is shown instead. */
```

### PrevNextOnly

```jsx
() => (
  <Dark>
    <div className="flex items-center justify-between gap-6">
      <span className="text-xs uppercase tracking-widest text-[var(--color-taupe)]">
        Showing 21&ndash;40 of 142 guests
      </span>
      <Pagination className="w-auto justify-end">
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious
              href="/guest-list?page=1"
              className="border border-white/20 text-[var(--color-cream)] hover:bg-white/10 hover:text-[var(--color-muted-gold)]"
            />
          </PaginationItem>
          <PaginationItem>
            <PaginationNext
              href="/guest-list?page=3"
              className="border border-[var(--color-muted-gold)] text-[var(--color-muted-gold)] hover:bg-white/10 hover:text-[var(--color-muted-gold)]"
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  </Dark>
);

/** The plain component, on the light surface its ghost/outline cells assume. */
```

### Default

```jsx
() => (
  <Light>
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious href="/reservations?page=1" />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="/reservations?page=1">1</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="/reservations?page=2" isActive>2</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="/reservations?page=3">3</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationEllipsis />
        </PaginationItem>
        <PaginationItem>
          <PaginationNext href="/reservations?page=3" />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  </Light>
)
```
