Kbd from @thestage/ui. Use via `window.TheStageUI.Kbd` (bundle loaded from the root `_ds_bundle.js`).

## Props

```ts
interface KbdProps {
  /** Allows getting a ref to the component instance. Once the component unmounts, React will set `ref.current` to `null` (or  */
  ref?: string | ((instance: HTMLElement) => void | DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES[keyof DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES]) | RefObject<HTMLElement>;
  className?: string;
  id?: string;
  style?: CSSProperties;
  children?: React.ReactNode;
}
```

## Examples

### Shortcuts

```jsx
() => (
  <Dark>
    <p className="text-xs uppercase tracking-widest text-[var(--color-taupe)] mb-4">
      Door app · keyboard
    </p>
    <div className="flex flex-wrap items-center gap-6">
      <Kbd>⌘</Kbd>
      <Kbd>K</Kbd>
      <Kbd>Esc</Kbd>
      <KbdGroup>
        <Kbd className={goldKey}>⌘</Kbd>
        <span className="text-[var(--color-taupe)] text-xs">+</span>
        <Kbd className={goldKey}>K</Kbd>
      </KbdGroup>
      <KbdGroup>
        <Kbd>Shift</Kbd>
        <span className="text-[var(--color-taupe)] text-xs">+</span>
        <Kbd>Enter</Kbd>
      </KbdGroup>
    </div>
  </Dark>
);

/** In context: the shortcut legend the floor staff see beside each action. */
```

### ActionLegend

```jsx
() => (
  <Dark>
    <div className="border border-white/10 bg-white/5 rounded-md p-6 max-w-md">
      <h3 className="font-display text-2xl font-normal tracking-wide mb-4">
        Floor shortcuts
      </h3>
      <div className="flex items-center justify-between py-2 border-b border-white/10">
        <span className="text-sm text-[var(--color-champagne)]">Search guests</span>
        <KbdGroup>
          <Kbd className={goldKey}>⌘</Kbd>
          <Kbd className={goldKey}>K</Kbd>
        </KbdGroup>
      </div>
      <div className="flex items-center justify-between py-2 border-b border-white/10">
        <span className="text-sm text-[var(--color-champagne)]">Seat selected table</span>
        <KbdGroup>
          <Kbd>Shift</Kbd>
          <Kbd>S</Kbd>
        </KbdGroup>
      </div>
      <div className="flex items-center justify-between py-2 border-b border-white/10">
        <span className="text-sm text-[var(--color-champagne)]">Move to waitlist</span>
        <KbdGroup>
          <Kbd>Shift</Kbd>
          <Kbd>W</Kbd>
        </KbdGroup>
      </div>
      <div className="flex items-center justify-between py-2">
        <span className="text-sm text-[var(--color-champagne)]">Close panel</span>
        <Kbd>Esc</Kbd>
      </div>
    </div>
  </Dark>
);

/** The stock component, on the light surface its grey tokens are built for. */
```

### Default

```jsx
() => (
  <div className="bg-[var(--color-cream)] text-[var(--color-charcoal)] font-body p-8">
    <div className="bg-background rounded-md border p-6 flex flex-wrap items-center gap-4">
      <Kbd>⌘</Kbd>
      <Kbd>K</Kbd>
      <Kbd>Esc</Kbd>
      <Kbd>Enter</Kbd>
      <KbdGroup>
        <Kbd>⌘</Kbd>
        <Kbd>Shift</Kbd>
        <Kbd>P</Kbd>
      </KbdGroup>
    </div>
  </div>
)
```
