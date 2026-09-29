Table from @thestage/ui. Use via `window.TheStageUI.Table` (bundle loaded from the root `_ds_bundle.js`).

## Props

```ts
interface TableProps {
  className?: string;
  id?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
  /** Allows getting a ref to the component instance. Once the component unmounts, React will set `ref.current` to `null` (or  */
  ref?: string | ((instance: HTMLTableElement) => void | React.DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES[keyof React.DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES]) | React.RefObject<HTMLTableElement>;
}
```

## Examples

### Reservations

```jsx
() => (
  <Dark>
    <p className="text-xs uppercase tracking-widest text-[var(--color-taupe)]">
      Saturday 14 March
    </p>
    <h3 className="font-display text-3xl font-normal tracking-wide mt-1 mb-6">
      Floor sheet
    </h3>
    <Table>
      <TableCaption className="text-[var(--color-taupe)]">
        Six of nine tables seated. Kitchen closes at 23:30.
      </TableCaption>
      <TableHeader>
        <TableRow className="hover:bg-[var(--color-moss)]">
          <TableHead className={headClass}>Table</TableHead>
          <TableHead className={headClass}>Guest</TableHead>
          <TableHead className={headClass}>Arrival</TableHead>
          <TableHead className={headClass}>Party</TableHead>
          <TableHead className={headClass}>Status</TableHead>
          <TableHead className="text-xs uppercase tracking-widest text-[var(--color-taupe)] font-normal text-right">
            Minimum
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell className="font-display text-lg text-[var(--color-muted-gold)]">
            R1
          </TableCell>
          <TableCell>Ayu Kusuma</TableCell>
          <TableCell className="tabular-nums">19:30</TableCell>
          <TableCell className="tabular-nums">4</TableCell>
          <TableCell>
            <Badge className="bg-[var(--color-muted-gold)] text-black hover:bg-[var(--color-muted-gold)]">
              Seated
            </Badge>
          </TableCell>
          <TableCell className="text-right tabular-nums">IDR 3,500,000</TableCell>
        </TableRow>
        <TableRow data-state="selected" className="data-[state=selected]:bg-[var(--color-moss)]">
          <TableCell className="font-display text-lg text-[var(--color-muted-gold)]">
            C2
          </TableCell>
          <TableCell>Made Wirawan</TableCell>
          <TableCell className="tabular-nums">20:00</TableCell>
          <TableCell className="tabular-nums">2</TableCell>
          <TableCell>
            <Badge className="bg-[var(--color-muted-gold)] text-black hover:bg-[var(--color-muted-gold)]">
              Seated
            </Badge>
          </TableCell>
          <TableCell className="text-right tabular-nums">IDR 1,800,000</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-display text-lg text-[var(--color-muted-gold)]">
            L3
          </TableCell>
          <TableCell>Sasha Lindqvist</TableCell>
          <TableCell className="tabular-nums">20:30</TableCell>
          <TableCell className="tabular-nums">6</TableCell>
          <TableCell>
            <Badge
              variant="outline"
              className="border-[var(--color-muted-gold)] text-[var(--color-muted-gold)]"
            >
              Confirmed
            </Badge>
          </TableCell>
          <TableCell className="text-right tabular-nums">IDR 6,000,000</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-display text-lg text-[var(--color-muted-gold)]">
            R4
          </TableCell>
          <TableCell>Ketut Suardana</TableCell>
          <TableCell className="tabular-nums">21:00</TableCell>
          <TableCell className="tabular-nums">8</TableCell>
          <TableCell>
            <Badge
              variant="outline"
              className="border-[var(--color-taupe)] text-[var(--color-taupe)]"
            >
              Waitlist
            </Badge>
          </TableCell>
          <TableCell className="text-right tabular-nums">IDR 9,200,000</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-display text-lg text-[var(--color-muted-gold)]">
            C5
          </TableCell>
          <TableCell>Nadia Prameswari</TableCell>
          <TableCell className="tabular-nums">21:30</TableCell>
          <TableCell className="tabular-nums">3</TableCell>
          <TableCell>
            <Badge
              variant="outline"
              className="border-[var(--color-muted-gold)] text-[var(--color-muted-gold)]"
            >
              Confirmed
            </Badge>
          </TableCell>
          <TableCell className="text-right tabular-nums">IDR 2,700,000</TableCell>
        </TableRow>
        <TableRow className="opacity-60">
          <TableCell className="font-display text-lg text-[var(--color-taupe)]">
            L6
          </TableCell>
          <TableCell>Bram de Vries</TableCell>
          <TableCell className="tabular-nums">22:00</TableCell>
          <TableCell className="tabular-nums">2</TableCell>
          <TableCell>
            <Badge variant="destructive">No show</Badge>
          </TableCell>
          <TableCell className="text-right tabular-nums">IDR 1,800,000</TableCell>
        </TableRow>
      </TableBody>
      <TableFooter>
        <TableRow className="hover:bg-[var(--color-moss)]">
          <TableCell className="text-xs uppercase tracking-widest text-[var(--color-taupe)]">
            Total
          </TableCell>
          <TableCell className="tabular-nums">6 tables</TableCell>
          <TableCell></TableCell>
          <TableCell className="tabular-nums">25</TableCell>
          <TableCell></TableCell>
          <TableCell className="text-right font-display text-xl text-[var(--color-muted-gold)] tabular-nums">
            IDR 25,000,000
          </TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  </Dark>
);

/** A narrow read-only summary: header + body only, no footer, no caption. */
```

### GuestList

```jsx
() => (
  <Dark>
    <p className="text-xs uppercase tracking-widest text-[var(--color-taupe)] mb-4">
      Midnight Sessions · guest list
    </p>
    <Table>
      <TableHeader>
        <TableRow className="hover:bg-[var(--color-moss)]">
          <TableHead className={headClass}>Guest</TableHead>
          <TableHead className={headClass}>Host</TableHead>
          <TableHead className="text-xs uppercase tracking-widest text-[var(--color-taupe)] font-normal text-right">
            Plus ones
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell className="font-medium">Wayan Sudarsana</TableCell>
          <TableCell className="text-[var(--color-champagne)]">Uluwatu desk</TableCell>
          <TableCell className="text-right tabular-nums">2</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-medium">Clara Menezes</TableCell>
          <TableCell className="text-[var(--color-champagne)]">Seminyak desk</TableCell>
          <TableCell className="text-right tabular-nums">0</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-medium">Putu Ariani</TableCell>
          <TableCell className="text-[var(--color-champagne)]">Canggu desk</TableCell>
          <TableCell className="text-right tabular-nums">4</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-medium">Haruto Ishikawa</TableCell>
          <TableCell className="text-[var(--color-champagne)]">Ubud desk</TableCell>
          <TableCell className="text-right tabular-nums">1</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  </Dark>
);

/** The stock component, unstyled, on the light surface shadcn designs for. */
```

### Default

```jsx
() => (
  <div className="bg-[var(--color-cream)] text-[var(--color-charcoal)] font-body p-8">
    <div className="bg-background rounded-md border p-4">
      <Table>
        <TableCaption>Deposits taken in the last seven days.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Reference</TableHead>
            <TableHead>Event</TableHead>
            <TableHead>Method</TableHead>
            <TableHead className="text-right">Amount</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="font-medium">TS-4412</TableCell>
            <TableCell>Midnight Sessions</TableCell>
            <TableCell>Card</TableCell>
            <TableCell className="text-right tabular-nums">IDR 1,500,000</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">TS-4413</TableCell>
            <TableCell>Wedding · Jimbaran</TableCell>
            <TableCell>Transfer</TableCell>
            <TableCell className="text-right tabular-nums">IDR 42,000,000</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">TS-4414</TableCell>
            <TableCell>Sunset Gamelan</TableCell>
            <TableCell>Card</TableCell>
            <TableCell className="text-right tabular-nums">IDR 900,000</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">TS-4415</TableCell>
            <TableCell>Private hire · Rooftop</TableCell>
            <TableCell>Transfer</TableCell>
            <TableCell className="text-right tabular-nums">IDR 18,000,000</TableCell>
          </TableRow>
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell>Total</TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell className="text-right tabular-nums">IDR 62,400,000</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </div>
  </div>
)
```
