ChartContainer from @thestage/ui. Use via `window.TheStageUI.ChartContainer` (bundle loaded from the root `_ds_bundle.js`).

## Props

```ts
interface ChartContainerProps {
  style?: CSSProperties;
  className?: string;
  id?: string;
  children: unknown;
  config: ChartConfig;
  /** Allows getting a ref to the component instance. Once the component unmounts, React will set `ref.current` to `null` (or  */
  ref?: string | ((instance: HTMLDivElement) => void | React.DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES[keyof React.DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES]) | React.RefObject<HTMLDivElement>;
}
```

## Examples

### NightlyCovers

```jsx
() => (
  <Dark>
    <p className="text-xs uppercase tracking-widest text-[var(--color-taupe)]">
      Covers by night · March
    </p>
    <h3 className="mt-2 font-display text-3xl font-normal tracking-wide">
      778 guests served
    </h3>
    <ChartContainer config={coversConfig} className="mt-4" style={chartBox}>
      <BarChart data={coversData} margin={{ top: 8, right: 8, bottom: 0, left: 0 }}>
        <CartesianGrid vertical={false} stroke="rgba(255,255,255,0.08)" />
        <XAxis dataKey="night" tickLine={false} axisLine={false} tick={axisTick} />
        <YAxis tickLine={false} axisLine={false} tick={axisTick} width={34} />
        <ChartTooltip content={<ChartTooltipContent />} />
        <ChartLegend content={<ChartLegendContent />} />
        <Bar
          dataKey="seated"
          stackId="a"
          fill="var(--color-seated)"
          radius={[0, 0, 2, 2]}
          isAnimationActive={false}
        />
        <Bar
          dataKey="walkIns"
          stackId="a"
          fill="var(--color-walkIns)"
          radius={[2, 2, 0, 0]}
          isAnimationActive={false}
        />
      </BarChart>
    </ChartContainer>
  </Dark>
);

const revenueData = [
  { month: "Oct", revenue: 812 },
  { month: "Nov", revenue: 946 },
  { month: "Dec", revenue: 1430 },
  { month: "Jan", revenue: 1180 },
  { month: "Feb", revenue: 1024 },
  { month: "Mar", revenue: 1362 },
];

const revenueConfig = {
  revenue: { label: "Revenue (IDR m)", color: "#c9a962" },
};

/** Revenue trend as an area chart, with a gold gradient fill. */
```

### RevenueTrend

```jsx
() => (
  <Dark>
    <p className="text-xs uppercase tracking-widest text-[var(--color-taupe)]">
      Revenue · rolling six months
    </p>
    <h3 className="mt-2 font-display text-3xl font-normal tracking-wide tabular-nums">
      IDR 1.36 bn
    </h3>
    <ChartContainer config={revenueConfig} className="mt-4" style={chartBox}>
      <AreaChart data={revenueData} margin={{ top: 8, right: 8, bottom: 0, left: 0 }}>
        <defs>
          <linearGradient id="theStageRevenueFill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="var(--color-revenue)" stopOpacity={0.55} />
            <stop offset="100%" stopColor="var(--color-revenue)" stopOpacity={0.04} />
          </linearGradient>
        </defs>
        <CartesianGrid vertical={false} stroke="rgba(255,255,255,0.08)" />
        <XAxis dataKey="month" tickLine={false} axisLine={false} tick={axisTick} />
        <YAxis tickLine={false} axisLine={false} tick={axisTick} width={44} />
        <ChartTooltip content={<ChartTooltipContent />} />
        <Area
          dataKey="revenue"
          type="monotone"
          stroke="var(--color-revenue)"
          strokeWidth={2}
          fill="url(#theStageRevenueFill)"
          dot={false}
          isAnimationActive={false}
        />
      </AreaChart>
    </ChartContainer>
  </Dark>
);

const mixData = [
  { room: "rooftop", bookings: 184, fill: "#c9a962" },
  { room: "garden", bookings: 142, fill: "#8b7355" },
  { room: "cellar", bookings: 76, fill: "#d4c8b8" },
  { room: "private", bookings: 41, fill: "#9a998f" },
];

const mixConfig = {
  bookings: { label: "Bookings" },
  rooftop: { label: "Rooftop", color: "#c9a962" },
  garden: { label: "Garden Pavilion", color: "#8b7355" },
  cellar: { label: "The Cellar", color: "#d4c8b8" },
  private: { label: "Private Hire", color: "#9a998f" },
};

/** A donut over the same config shape — the legend reads its labels from it. */
```

### BookingsByRoom

```jsx
() => (
  <Dark>
    <p className="text-xs uppercase tracking-widest text-[var(--color-taupe)]">
      Bookings by room · March
    </p>
    <ChartContainer config={mixConfig} className="mt-4" style={chartBox}>
      <PieChart>
        <ChartTooltip content={<ChartTooltipContent nameKey="room" hideLabel />} />
        <Pie
          data={mixData}
          dataKey="bookings"
          nameKey="room"
          innerRadius={52}
          outerRadius={82}
          paddingAngle={2}
          stroke="none"
          isAnimationActive={false}
        >
          {mixData.map((d) => (
            <Cell key={d.room} fill={d.fill} />
          ))}
        </Pie>
        <ChartLegend content={<ChartLegendContent nameKey="room" />} />
      </PieChart>
    </ChartContainer>
  </Dark>
)
```
