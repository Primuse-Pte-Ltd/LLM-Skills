Calendar from @thestage/ui. Use via `window.TheStageUI.Calendar` (bundle loaded from the root `_ds_bundle.js`).

## Props

```ts
interface CalendarProps {
  /** Enable the selection of a single day, multiple days, or a range of days. */
  mode?: "multiple" | "range" | "single";
  /** Whether the selection is required. */
  required?: boolean;
  /** Class name to add to the root element. */
  className?: string;
  /** Change the class names used by DayPicker. Use this prop when you need to change the default class names — for example, w */
  classNames?: Partial<ClassNames> & Partial<DeprecatedUI<string>>;
  /** Change the class name for the day matching the `modifiers`. */
  modifiersClassNames?: ModifiersClassNames;
  /** Style to apply to the root element. */
  style?: React.CSSProperties;
  /** Change the inline styles of the HTML elements. */
  styles?: Partial<Styles> & Partial<DeprecatedUI<React.CSSProperties>>;
  /** Change the class name for the day matching the {@link modifiers}. */
  modifiersStyles?: ModifiersStyles;
  /** A unique id to add to the root element. */
  id?: string;
  /** The initial month to show in the calendar. Use this prop to let DayPicker control the current month. If you need to set  */
  defaultMonth?: Date;
  /** The month displayed in the calendar. As opposed to `defaultMonth`, use this prop with `onMonthChange` to change the mont */
  month?: Date;
  /** The number of displayed months. */
  numberOfMonths?: number;
  /** The earliest month to start the month navigation. */
  startMonth?: Date;
  fromDate?: Date;
  fromMonth?: Date;
  fromYear?: number;
  /** The latest month to end the month navigation. */
  endMonth?: Date;
  toDate?: Date;
  toMonth?: Date;
  toYear?: number;
  /** Paginate the month navigation displaying the `numberOfMonths` at a time. */
  pagedNavigation?: boolean;
  /** Render the months in reversed order (when {@link numberOfMonths} is set) to display the most recent month first. */
  reverseMonths?: boolean;
  /** Hide the navigation buttons. This prop won't disable the navigation: to disable the navigation, use {@link disableNaviga */
  hideNavigation?: boolean;
  /** Disable the navigation between months. This prop won't hide the navigation: to hide the navigation, use {@link hideNavig */
  disableNavigation?: boolean;
  /** Show dropdowns to navigate between months or years. - `label`: Displays the month and year as a label. Default value. -  */
  captionLayout?: "label" | "dropdown" | "dropdown-months" | "dropdown-years";
  /** Reverse the order of years in the dropdown when using `captionLayout="dropdown"` or `captionLayout="dropdown-years"`. */
  reverseYears?: boolean;
  /** Adjust the positioning of the navigation buttons. - `around`: Displays the buttons on either side of the caption. - `aft */
  navLayout?: "around" | "after";
  /** Display always 6 weeks per each month, regardless of the month’s number of weeks. Weeks will be filled with the days fro */
  fixedWeeks?: boolean;
  /** Hide the row displaying the weekday row header. */
  hideWeekdays?: boolean;
  /** Show the outside days (days falling in the next or the previous month). **Note:** when a {@link broadcastCalendar} is se */
  showOutsideDays?: boolean;
  /** Show the week numbers column. Weeks are numbered according to the local week index. */
  showWeekNumber?: boolean;
  /** Animate navigating between months. */
  animate?: boolean;
  /** Display the weeks in the month following the broadcast calendar. Setting this prop will ignore {@link weekStartsOn} (alw */
  broadcastCalendar?: boolean;
  /** Use ISO week dates instead of the locale setting. Setting this prop will ignore `weekStartsOn` and `firstWeekContainsDat */
  ISOWeek?: boolean;
  /** The time zone (IANA or UTC offset) to use in the calendar (experimental). See [Wikipedia](https://en.wikipedia.org/wiki/ */
  timeZone?: string;
  /** Keep calendar math at noon in the configured {@link timeZone} to avoid historical second-level offsets drifting dates ac */
  noonSafe?: boolean;
  /** Change the components used for rendering the calendar elements. */
  components?: Partial<CustomComponents>;
  /** Add a footer to the calendar, acting as a live region. Use this prop to communicate the calendar's status to screen read */
  footer?: React.ReactNode;
  /** When a selection mode is set, DayPicker will focus the first selected day (if set) or today's date (if not disabled). Us */
  autoFocus?: boolean;
  initialFocus?: boolean;
  /** Apply the `disabled` modifier to the matching days. Disabled days cannot be selected when in a selection mode is set. */
  disabled?: boolean | Date | ((date: Date) => boolean) | Date[] | DateRange | DateBefore | DateAfter | DateInterval | DayOfWeek | Matcher[];
  /** Apply the `hidden` modifier to the matching days. Will hide them from the calendar. */
  hidden?: boolean | Date | ((date: Date) => boolean) | Date[] | DateRange | DateBefore | DateAfter | DateInterval | DayOfWeek | Matcher[];
  /** The today’s date. Default is the current date. This date will get the `today` modifier to style the day. */
  today?: Date;
  /** Add modifiers to the matching days. */
  modifiers?: Record<string, Matcher | Matcher[]>;
  /** Labels creators to override the defaults. Use this prop to customize the aria-label attributes in DayPicker. */
  labels?: Partial<Labels>;
  /** Formatters used to format dates to strings. Use this prop to override the default functions. */
  formatters?: Partial<Formatters>;
  /** The text direction of the calendar. Use `ltr` for left-to-right (default) or `rtl` for right-to-left. */
  dir?: string;
  /** The role attribute to add to the container element. */
  role?: "dialog" | "application";
  /** A cryptographic nonce ("number used once") which can be used by Content Security Policy for the inline `style` attribute */
  nonce?: string;
  /** Add a `title` attribute to the container element. */
  title?: string;
  /** Add the language tag to the container element. When omitted, DayPicker uses the active locale code (`locale.code`). Set  */
  lang?: string;
  /** The locale object used to localize dates. Pass a locale from `react-day-picker/locale` to localize the calendar. */
  locale?: Partial<DayPickerLocale>;
  /** The numeral system to use when formatting dates. - `latn`: Latin (Western Arabic) - `arab`: Arabic-Indic - `arabext`: Ea */
  numerals?: "latn" | "arab" | "arabext" | "deva" | "geez" | "beng" | "guru" | "gujr" | "orya" | "tamldec" | "telu" | "knda" | "mlym" | "thai" | "mymr" | "khmr" | "laoo" | "tibt";
  /** The index of the first day of the week (0 - Sunday). Overrides the locale's default. */
  weekStartsOn?: 0 | 1 | 2 | 4 | 3 | 5 | 6;
  /** The day of January that is always in the first week of the year. */
  firstWeekContainsDate?: 1 | 4;
  /** Enable `DD` and `DDDD` for week year tokens when formatting or parsing dates. */
  useAdditionalWeekYearTokens?: boolean;
  /** Enable `YY` and `YYYY` for day of year tokens when formatting or parsing dates. */
  useAdditionalDayOfYearTokens?: boolean;
  /** Replace the default date library with a custom one. Experimental: not guaranteed to be stable (may not respect semver). */
  dateLib?: Partial<DateLib>;
  buttonVariant?: "link" | "default" | "destructive" | "outline" | "secondary" | "ghost";
}
```

## Examples

### VenueHire

```jsx
() => (
  <Dark>
    <div className="mx-auto max-w-md border border-[var(--color-muted-gold)] bg-[var(--color-deep-green)] px-5 py-6">
      <Calendar
        mode="single"
        month={MARCH}
        today={TODAY}
        selected={CHOSEN}
        disabled={SOLD_OUT}
        modifiers={{ available: OPEN_DAYS }}
        modifiersClassNames={{
          available:
            "[&_button]:after:absolute [&_button]:after:bottom-1.5 [&_button]:after:left-1/2 [&_button]:after:-translate-x-1/2 [&_button]:after:h-1 [&_button]:after:w-1 [&_button]:after:rounded-full [&_button]:after:bg-[var(--color-muted-gold)] [&_button]:after:content-['']",
        }}
        showOutsideDays={false}
        className="mx-auto w-full bg-transparent p-0 text-[var(--color-cream)] [--cell-size:2.5rem]"
        classNames={{
          months: "relative flex w-full flex-col gap-5",
          month: "flex w-full flex-col gap-5",
          month_caption: "relative flex h-10 w-full items-center justify-center",
          caption_label:
            "text-lg font-light tracking-[0.08em] text-[var(--color-cream)]",
          nav: "absolute inset-x-0 top-0 flex w-full items-center justify-between",
          button_previous:
            "inline-flex h-10 w-10 items-center justify-center border border-[var(--color-muted-gold)] text-[var(--color-cream)] aria-disabled:opacity-30",
          button_next:
            "inline-flex h-10 w-10 items-center justify-center border border-[var(--color-muted-gold)] text-[var(--color-cream)] aria-disabled:opacity-30",
          weekdays: "flex w-full",
          weekday:
            "flex-1 select-none text-[0.65rem] font-normal uppercase tracking-[0.2em] text-[var(--color-muted-gold)]",
          week: "mt-1.5 flex w-full",
          day: "relative aspect-square h-full w-full p-0.5",
          today: "[&_button]:text-[var(--color-muted-gold)]",
          disabled: "opacity-50 [&_button]:line-through",
          selected: "[&_button]:after:hidden",
          day_button:
            "relative rounded-none border border-transparent font-light text-[var(--color-cream)] transition-colors duration-200 data-[selected-single=true]:border-[var(--color-muted-gold)] data-[selected-single=true]:bg-[var(--color-muted-gold)] data-[selected-single=true]:text-[var(--color-dark-green)] data-[selected-single=true]:font-medium focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-muted-gold)]",
        }}
      />

      <ul className="mt-6 flex flex-wrap items-center justify-center gap-5 text-[0.65rem] uppercase tracking-[0.18em] text-[var(--color-taupe)]">
        <li className="inline-flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-muted-gold)]" />
          Available
        </li>
        <li className="inline-flex items-center gap-2">
          <span className="h-4 w-4 bg-[var(--color-muted-gold)]" />
          Selected
        </li>
        <li className="inline-flex items-center gap-2">
          <span className="line-through">12</span>
          Fully booked
        </li>
      </ul>
    </div>
  </Dark>
);

/** The stock single-date calendar, on the light surface shadcn styles for. */
```

### Default

```jsx
() => (
  <Light>
    <div className="mx-auto w-fit rounded-md border bg-background">
      <Calendar
        mode="single"
        month={MARCH}
        today={TODAY}
        selected={CHOSEN}
        className="bg-transparent"
      />
    </div>
  </Light>
);

/** `mode="range"` over two months — picking a private-hire window. */
```

### DateRange

```jsx
() => (
  <Light>
    <div className="mx-auto w-fit rounded-md border bg-background">
      <Calendar
        mode="range"
        month={MARCH}
        today={TODAY}
        numberOfMonths={2}
        selected={{ from: day(12), to: day(16) }}
        disabled={[day(1), day(2), day(3)]}
        className="bg-transparent"
      />
    </div>
    <p className="mt-3 text-center text-sm text-[var(--color-graphite)]">
      12 – 16 March 2026 · five nights · IDR 185,000,000
    </p>
  </Light>
)
```
