GoogleOAuthInAppNotice from @thestage/ui. Use via `window.TheStageUI.GoogleOAuthInAppNotice` (bundle loaded from the root `_ds_bundle.js`).

When Google Sign-In is opened inside an in-app browser, steer the user into
a real browser (auto-attempt + manual buttons). Email/password remains below.

## Props

```ts
interface GoogleOAuthInAppNoticeProps {
  className?: string;
  /** Try opening Safari/Chrome automatically on first visit in this tab. */
  autoOpen?: boolean;
  onBlockedChange?: (blocked: boolean) => void;
}
```

## Examples

### OnSignIn

```jsx
() => (
  <Panel>
    <p className="text-[11px] uppercase tracking-[0.2em] text-[var(--color-taupe)]">
      Sign in
    </p>
    <h2 className="font-display text-4xl font-normal tracking-wide">
      The Stage
    </h2>
    <GoogleOAuthInAppNotice
      autoOpen={false}
      className="border-amber-400/30 bg-amber-400/10 text-[var(--color-cream)]"
    />
  </Panel>
);

/** The component's stock styling — its own amber-500 border and tint. */
```

### DefaultStyling

```jsx
() => (
  <Panel>
    <GoogleOAuthInAppNotice autoOpen={false} />
  </Panel>
);

/** Restyled to the brand instead of amber: gold hairline on a raised panel. */
```

### BrandTinted

```jsx
() => (
  <Panel>
    <GoogleOAuthInAppNotice
      autoOpen={false}
      className="border-[var(--color-muted-gold)] bg-[var(--color-forest)] text-[var(--color-champagne)]"
    />
  </Panel>
)
```
