Dialog from @thestage/ui. Use via `window.TheStageUI.Dialog` (bundle loaded from the root `_ds_bundle.js`).

## Props

```ts
interface DialogProps {
  children?: React.ReactNode;
  open?: boolean;
  defaultOpen?: boolean;
  modal?: boolean;
}
```

## Examples

### Confirm

```jsx
() => (
  <Dialog open>
    <DialogContent className="max-w-md text-[var(--color-charcoal)]">
      <DialogHeader>
        <DialogTitle className="font-display text-2xl font-normal">
          Confirm your table
        </DialogTitle>
        <DialogDescription>
          Table 12 for four guests, Friday 14 March at 20:30. We hold the table
          for 15 minutes past the reservation time.
        </DialogDescription>
      </DialogHeader>
      <DialogFooter className="gap-2">
        <Button variant="outline">Change time</Button>
        <Button className="bg-[var(--color-muted-gold)] text-black hover:bg-[var(--color-gold-light)]">
          Confirm booking
        </Button>
      </DialogFooter>
    </DialogContent>
  </Dialog>
);

/** A destructive confirmation, used in the backoffice for cancellations. */
```

### Destructive

```jsx
() => (
  <Dialog open>
    <DialogContent className="max-w-md text-[var(--color-charcoal)]">
      <DialogHeader>
        <DialogTitle>Cancel reservation</DialogTitle>
        <DialogDescription>
          This releases table 12 back to inventory and refunds IDR 1,800,000 to
          the original payment method. This cannot be undone.
        </DialogDescription>
      </DialogHeader>
      <DialogFooter className="gap-2">
        <Button variant="outline">Keep reservation</Button>
        <Button variant="destructive">Cancel and refund</Button>
      </DialogFooter>
    </DialogContent>
  </Dialog>
)
```
