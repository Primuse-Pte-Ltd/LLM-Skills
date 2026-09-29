AlertDialog from @thestage/ui. Use via `window.TheStageUI.AlertDialog` (bundle loaded from the root `_ds_bundle.js`).

## Props

```ts
interface AlertDialogProps {
  children?: React.ReactNode;
  defaultOpen?: boolean;
  open?: boolean;
}
```

## Examples

### RefundReservation

```jsx
() => (
  <AlertDialog open>
    <AlertDialogContent className="text-[var(--color-charcoal)]">
      <AlertDialogHeader>
        <AlertDialogTitle className="font-display text-2xl font-normal tracking-wide">
          Refund IDR 3,600,000?
        </AlertDialogTitle>
        <AlertDialogDescription>
          Reservation TS-4821 — Table 14, Saturday 22 March, four guests. The
          refund returns to the card ending 4417 and releases the table to
          inventory immediately. Xendit settles within 14 days.
        </AlertDialogDescription>
      </AlertDialogHeader>
      <AlertDialogFooter className="gap-2">
        <AlertDialogCancel>Keep reservation</AlertDialogCancel>
        <AlertDialogAction className="bg-[var(--color-muted-gold)] text-black hover:bg-[var(--color-gold-light)]">
          Refund and release
        </AlertDialogAction>
      </AlertDialogFooter>
    </AlertDialogContent>
  </AlertDialog>
);

/** A destructive confirmation. The action carries the token classes directly:
 *  going through `asChild` leaves buttonVariants()' bg-primary in the class list
 *  (Slot concatenates, it does not tailwind-merge) and the button renders black. */
```

### ReleaseHeldTables

```jsx
() => (
  <AlertDialog open>
    <AlertDialogContent className="text-[var(--color-charcoal)]">
      <AlertDialogHeader>
        <AlertDialogTitle className="font-display text-2xl font-normal tracking-wide">
          Release 6 held cabanas?
        </AlertDialogTitle>
        <AlertDialogDescription>
          Pool Deck cabanas 01 to 06 are held for Full Moon Rooftop on 3 April.
          Releasing them puts 24 seats back on sale and cancels the promoter
          allocation for Ayu Pradnyani. This cannot be undone.
        </AlertDialogDescription>
      </AlertDialogHeader>
      <AlertDialogFooter className="gap-2">
        <AlertDialogCancel>Keep the hold</AlertDialogCancel>
        <AlertDialogAction className="bg-destructive text-destructive-foreground hover:bg-destructive/90">
          Release cabanas
        </AlertDialogAction>
      </AlertDialogFooter>
    </AlertDialogContent>
  </AlertDialog>
)
```
