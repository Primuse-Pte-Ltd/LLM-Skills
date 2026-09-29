# Default — no project identified

You are here because the brand could not be determined with confidence. This
project has **no design system**: no colors, no fonts, no components. Its only job
is to stop you from guessing and get a clear answer from the user.

## Why this exists

Every internal brand looks deliberately different (Kisum is purple-on-cool-gray
analytics; The Stage is dark green and gold luxury hospitality; Nextkt is a light,
teal-and-navy, photo-first ticketing storefront). Applying the wrong
one produces work that has to be thrown away, and inventing a "neutral" style is
just as wrong — it isn't anyone's brand. Asking costs one message; guessing wrong
costs the whole artifact.

## What to do

1. **Do not apply any brand styling.** Don't pick colors, fonts, logos, or
   components from any project, and don't fall back to a generic palette.
2. **Ask the user which project the work is for**, listing only the projects this
   skill supports (read the registry in the parent `SKILL.md` so the list is
   current). Keep it to one short question. If the user offered partial hints,
   mention what you noticed so they can confirm quickly — e.g. *"This mentions
   venue bookings — is it for The Stage (the Bali venue) or Kisum (the live-music
   platform)?"*
3. **Pause the design work until they answer.** Non-visual parts of the task
   (data wiring, logic, copy drafts that don't depend on brand voice) can continue.
4. **Once they answer**, go back to the parent `SKILL.md`, load that project, and
   carry on.

## If the answer is "none of those"

This skill only covers our internal projects. Tell the user plainly that there is
no brand guideline for their project here, then continue the task without this
skill (use their own design system or other design skills as appropriate). Do
not borrow an internal brand's look for an unrelated project.

## Example question

> Which project is this for? I can apply brand guidelines for:
> - **Kisum** — the live-music operating platform (web + mobile app)
> - **The Stage** — the luxury event venue in Bali (website + booking)
> - **Nextkt** — the ticketing platform (storefront + operator admin)
>
> If it's something else, let me know and I'll proceed without these guidelines.
