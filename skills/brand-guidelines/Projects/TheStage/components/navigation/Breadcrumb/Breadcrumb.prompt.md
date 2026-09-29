Breadcrumb from @thestage/ui. Use via `window.TheStageUI.Breadcrumb` (bundle loaded from the root `_ds_bundle.js`).

## Props

```ts
interface BreadcrumbProps {
  style?: CSSProperties;
  className?: string;
  id?: string;
  children?: React.ReactNode;
  separator?: React.ReactNode;
  /** Allows getting a ref to the component instance. Once the component unmounts, React will set `ref.current` to `null` (or  */
  ref?: string | ((instance: HTMLElement) => void | React.DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES[keyof React.DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES]) | React.RefObject<HTMLElement>;
}
```

## Examples

### EventTrail

```jsx
() => (
  <Dark>
    <Breadcrumb>
      <BreadcrumbList className="text-[var(--color-taupe)] text-xs uppercase tracking-widest">
        <BreadcrumbItem>
          <BreadcrumbLink href="/" className="hover:text-[var(--color-muted-gold)]">
            Home
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator className="text-[var(--color-bronze)]" />
        <BreadcrumbItem>
          <BreadcrumbLink href="/events" className="hover:text-[var(--color-muted-gold)]">
            Events
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator className="text-[var(--color-bronze)]" />
        <BreadcrumbItem>
          <BreadcrumbPage className="text-[var(--color-muted-gold)]">
            Midnight Sessions
          </BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  </Dark>
);

/** A deep trail folded down with the ellipsis, and a custom slash separator. */
```

### Collapsed

```jsx
() => (
  <Dark>
    <Breadcrumb>
      <BreadcrumbList className="text-sm text-[var(--color-champagne)]">
        <BreadcrumbItem>
          <BreadcrumbLink href="/" className="hover:text-[var(--color-muted-gold)]">
            Home
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator className="text-[var(--color-bronze)]">/</BreadcrumbSeparator>
        <BreadcrumbItem>
          <BreadcrumbEllipsis className="h-4 w-4 text-[var(--color-bronze)]" />
        </BreadcrumbItem>
        <BreadcrumbSeparator className="text-[var(--color-bronze)]">/</BreadcrumbSeparator>
        <BreadcrumbItem>
          <BreadcrumbLink
            href="/private-events"
            className="hover:text-[var(--color-muted-gold)]"
          >
            Private events
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator className="text-[var(--color-bronze)]">/</BreadcrumbSeparator>
        <BreadcrumbItem>
          <BreadcrumbPage className="font-display text-lg text-[var(--color-muted-gold)]">
            Cliffside dinner
          </BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  </Dark>
);

/** The plain component, on the light surface shadcn designs it for. */
```

### Default

```jsx
() => (
  <Light>
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="/">Home</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink href="/reservations">Reservations</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage>Table 12 &middot; Friday 14 March</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  </Light>
)
```
