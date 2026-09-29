Sidebar from @thestage/ui. Use via `window.TheStageUI.Sidebar` (bundle loaded from the root `_ds_bundle.js`).

## Props

```ts
interface SidebarProps {
  style?: CSSProperties;
  className?: string;
  id?: string;
  children?: React.ReactNode;
  variant?: "inset" | "sidebar" | "floating";
  side?: "left" | "right";
  collapsible?: "icon" | "none" | "offcanvas";
  /** Allows getting a ref to the component instance. Once the component unmounts, React will set `ref.current` to `null` (or  */
  ref?: string | ((instance: HTMLDivElement) => void | React.DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES[keyof React.DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES]) | React.RefObject<HTMLDivElement>;
}
```

## Examples

### BackofficeNav

```jsx
() => (
  <SidebarProvider style={{ ...brandTokens, ...shell }} className="w-full font-body">
    <Sidebar collapsible="none" className="border-r border-sidebar-border">
      <SidebarHeader className="px-4 py-5">
        <span className="font-display text-xl tracking-[0.3em] text-[var(--color-muted-gold)]">
          THE STAGE
        </span>
        <span className={`${label} text-[var(--color-taupe)]`}>Uluwatu, Bali</span>
      </SidebarHeader>
      <SidebarSeparator />
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className={label}>Operations</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton isActive>
                  <CalendarDays />
                  <span>Events</span>
                </SidebarMenuButton>
                <SidebarMenuBadge>4</SidebarMenuBadge>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton>
                  <ClipboardList />
                  <span>Reservations</span>
                </SidebarMenuButton>
                <SidebarMenuBadge>27</SidebarMenuBadge>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton>
                  <Users />
                  <span>Guest list</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton>
                  <Package />
                  <span>Inventory</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton>
                  <BarChart3 />
                  <span>Analytics</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="px-4 py-4">
        <span className={`${label} text-[var(--color-taupe)]`}>Signed in as</span>
        <span className="text-sm">Wayan &middot; Floor manager</span>
      </SidebarFooter>
    </Sidebar>

    <SidebarInset className="text-[var(--color-cream)]">
      <header className="flex items-center gap-3 border-b border-white/10 px-6 py-4">
        <SidebarTrigger />
        <span className={`${label} text-[var(--color-taupe)]`}>Events</span>
      </header>
      <div className="p-6">
        <h2 className="font-display text-3xl tracking-wide">Midnight Sessions</h2>
        <p className="mt-2 max-w-md text-sm leading-relaxed text-[var(--color-champagne)]">
          Saturday 22:00 &middot; rooftop &middot; 142 guests on the list, 18
          tables confirmed and 2 held for walk-ins.
        </p>
      </div>
    </SidebarInset>
  </SidebarProvider>
);

/** Two groups, a nested sub-menu and a count badge — the full menu vocabulary,
 *  as the rail alone (w-fit, so the provider hugs the nav column). */
```

### GroupedSections

```jsx
() => (
  <SidebarProvider style={{ ...brandTokens, ...shell }} className="w-fit font-body">
    <Sidebar collapsible="none" className="border-r border-sidebar-border">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className={label}>Tonight</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton isActive>
                  <ClipboardList />
                  <span>Reservations</span>
                </SidebarMenuButton>
                <SidebarMenuSub>
                  <SidebarMenuSubItem>
                    <SidebarMenuSubButton isActive>Arrivals</SidebarMenuSubButton>
                  </SidebarMenuSubItem>
                  <SidebarMenuSubItem>
                    <SidebarMenuSubButton>Waitlist</SidebarMenuSubButton>
                  </SidebarMenuSubItem>
                  <SidebarMenuSubItem>
                    <SidebarMenuSubButton>No-shows</SidebarMenuSubButton>
                  </SidebarMenuSubItem>
                </SidebarMenuSub>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton>
                  <Users />
                  <span>Guest list</span>
                </SidebarMenuButton>
                <SidebarMenuBadge>142</SidebarMenuBadge>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarSeparator />
        <SidebarGroup>
          <SidebarGroupLabel className={label}>Venue</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton>
                  <Package />
                  <span>Inventory</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton>
                  <BarChart3 />
                  <span>Analytics</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton>
                  <Settings />
                  <span>Settings</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  </SidebarProvider>
);

/** The stock component on its own --sidebar-* tokens, which are light. */
```

### Default

```jsx
() => (
  <SidebarProvider style={shell} className="w-full font-body">
    <Sidebar collapsible="none" className="border-r border-sidebar-border">
      <SidebarHeader className="px-4 py-4 text-sm font-medium">
        The Stage &middot; Backoffice
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Operations</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton isActive>
                  <CalendarDays />
                  <span>Events</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton>
                  <ClipboardList />
                  <span>Reservations</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton>
                  <Users />
                  <span>Guest list</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton variant="outline">
                  <Settings />
                  <span>Settings</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="px-4 py-3 text-xs">
        Wayan &middot; Floor manager
      </SidebarFooter>
    </Sidebar>
    <SidebarInset className="text-[var(--color-charcoal)]">
      <header className="flex items-center gap-3 border-b px-6 py-4">
        <SidebarTrigger />
        <span className="text-sm font-medium">Events</span>
      </header>
      <div className="p-6 text-sm text-muted-foreground">
        Four events on sale this month.
      </div>
    </SidebarInset>
  </SidebarProvider>
)
```
