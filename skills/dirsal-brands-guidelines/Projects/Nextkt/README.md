# Nextkt — design system pending

Nextkt is our standalone ticketing platform: the consumer storefront (buyer-facing),
the operator admin dashboard, the sysadmin console, and the public developer portal
(`nextkt.com`, `developers.nextkt.com`). **Its design-system files have not been
added to this folder yet.** This placeholder is replaced when they arrive.

## What to do until then

1. **Tell the user plainly** that Nextkt is a recognized project but its brand
   guidelines aren't in this skill yet, so you can't guarantee on-brand output.
2. **Don't borrow another brand.** In particular, don't apply Kisum: Kisum's own
   spec lists Nextkt as an explicit exception that keeps its own logo-derived
   teal/navy palette. Don't apply The Stage either, and don't invent a palette and
   present it as "the Nextkt brand".
3. **If you're working inside a Nextkt repo**, the existing code is the best
   available reference: reuse its current theme tokens, Tailwind config, components,
   and logo files rather than introducing new colors or fonts. Say that's what
   you're doing.
   A provisional color and type summary taken from the storefront code
   (`Nextkt-Frontend/tailwind.config.ts`) is in `dirsal-theme-factory/themes/nextkt.md`.
   Use it when you're outside the repo, and say it's provisional.
4. **If there's no Nextkt code or theme file to reference**, ask the user for references (logo,
   colors, fonts, screenshots of the current storefront/admin) before doing visual
   design. Non-visual work can continue.
