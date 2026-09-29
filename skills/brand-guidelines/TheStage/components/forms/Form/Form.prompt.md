Form from @thestage/ui. Use via `window.TheStageUI.Form` (bundle loaded from the root `_ds_bundle.js`).

## Props

```ts
interface FormProps {
  children: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | React.ReactNode[];
  watch: UseFormWatch<TFieldValues>;
  getValues: UseFormGetValues<TFieldValues>;
  getFieldState: UseFormGetFieldState<TFieldValues>;
  setError: UseFormSetError<TFieldValues>;
  clearErrors: UseFormClearErrors<TFieldValues>;
  setValue: UseFormSetValue<TFieldValues>;
  setValues: UseFormSetValues<TFieldValues>;
  trigger: UseFormTrigger<TFieldValues>;
  formState: FormState<TFieldValues>;
  resetField: UseFormResetField<TFieldValues>;
  reset: UseFormReset<TFieldValues>;
  resetDefaultValues: UseFormResetDefaultValues<TFieldValues>;
  handleSubmit: UseFormHandleSubmit<TFieldValues, TTransformedValues>;
  unregister: UseFormUnregister<TFieldValues>;
  control: Control<TFieldValues, TContext, TTransformedValues>;
  register: UseFormRegister<TFieldValues>;
  setFocus: UseFormSetFocus<TFieldValues>;
  subscribe: UseFormSubscribe<TFieldValues>;
}
```

## Examples

### BookingRequest

```jsx
() => {
  const form = useForm({
    defaultValues: {
      name: "Amelia Hart",
      email: "amelia.hart@gmail.com",
      guests: "18",
      notes: "Seated dinner then a DJ set on the terrace. One vegan guest.",
    },
  });

  return (
    <Dark>
      <Form {...form}>
        <form className="w-[300px] space-y-5">
          <p className="font-display text-3xl font-normal tracking-wide">
            Request the terrace
          </p>

          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className={labelDark}>Full name</FormLabel>
                <FormControl>
                  <Input {...field} className={inputDark} />
                </FormControl>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className={labelDark}>Email</FormLabel>
                <FormControl>
                  <Input {...field} type="email" className={inputDark} />
                </FormControl>
                <FormDescription className="text-xs text-[var(--color-taupe)]">
                  We reply within one working day.
                </FormDescription>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="guests"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-xs uppercase tracking-wider text-rose-300">
                  Number of guests
                </FormLabel>
                <FormControl>
                  <Input {...field} className={inputDark} />
                </FormControl>
                <FormMessage className="text-rose-300">
                  The terrace seats 12. Ask us about a full venue hire.
                </FormMessage>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="notes"
            render={({ field }) => (
              <FormItem>
                <FormLabel className={labelDark}>Notes for the host</FormLabel>
                <FormControl>
                  <Textarea {...field} rows={3} className={inputDark} />
                </FormControl>
              </FormItem>
            )}
          />

          <Button
            type="submit"
            className="w-full bg-[var(--color-muted-gold)] text-black hover:bg-[var(--color-gold-light)]"
          >
            Send enquiry
          </Button>
        </form>
      </Form>
    </Dark>
  );
};

/** All five parts of a FormItem, on the light surface shadcn styles for. */
```

### Anatomy

```jsx
() => {
  const form = useForm({
    defaultValues: { code: "STAGE-4471", lookup: "STAGE-0000" },
  });

  return (
    <Light>
      <Form {...form}>
        <form className="w-[300px] space-y-6">
          <FormField
            control={form.control}
            name="code"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Booking reference</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormDescription>
                  Printed on your confirmation email, above the QR code.
                </FormDescription>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="lookup"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-destructive">
                  Booking reference
                </FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage>
                  We cannot find that reference. Check the last four digits.
                </FormMessage>
              </FormItem>
            )}
          />
        </form>
      </Form>
    </Light>
  );
};

/** Two fields per row — the checkout step where guest details are collected. */
```

### GuestDetails

```jsx
() => {
  const form = useForm({
    defaultValues: {
      firstName: "Ketut",
      lastName: "Wirawan",
      phone: "+62 812 3456 7890",
      table: "Cabana 3",
    },
  });

  return (
    <Light>
      <Form {...form}>
        <form className="w-full space-y-5">
          <div className="grid grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="firstName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>First name</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="lastName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Last name</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Mobile</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormDescription>
                  The host messages this number when your table is ready.
                </FormDescription>
              </FormItem>
            )}
          />

          <div className="flex items-center justify-between">
            <span className="text-sm">
              Cabana 3 · IDR 4,500,000
            </span>
            <Button size="sm">Continue to payment</Button>
          </div>
        </form>
      </Form>
    </Light>
  );
}
```
