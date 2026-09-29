---
name: dirsal-theme-factory
description: Toolkit for styling artifacts with a theme. These artifacts can be slides, docs, reportings, HTML landing pages, etc. There are 10 pre-set themes with colors/fonts that you can apply to any artifact that has been creating, or can generate a new theme on-the-fly. It also has brand themes for our internal Dirsal projects (Kisum, The Stage, Nextkt). For those projects it first loads the dirsal-brands-guidelines skill and applies that brand's theme instead of a preset. Pairs with dirsal-frontend-design for layout and design craft.
license: Complete terms in LICENSE.txt
---


# Dirsal Theme Factory

This skill provides a curated collection of professional font and color themes, each with carefully selected color palettes and font pairings. Once a theme is chosen, it can be applied to any artifact.

## First: check whether this is one of our brands

A Dirsal brand is already a theme. Before showing the showcase or offering any
preset, read the `dirsal-brands-guidelines` skill (`../dirsal-brands-guidelines/SKILL.md`
next to this one) and follow its Step 1 to identify the project. It will either:

- **identify a brand** (Kisum, The Stage, Nextkt): use that brand's theme from
  Brand Themes below. Don't show the showcase, don't offer the 10 preset themes, and
  don't create a custom one. The brand theme is a quick reference for color and
  type. The project's guidelines stay the source of truth for logos, components,
  voice, and anything the theme file doesn't cover. Say which brand you're applying
  instead of asking the user to pick a theme;
- **not be able to tell**: its Default project asks the user which project this is.
  Wait for the answer before showing themes;
- **be told it's none of ours**: continue with this skill as written.

Never mix a preset theme with a brand's palette or fonts, and never use a brand
theme for work that isn't that brand's. One brand or one theme per artifact.

## Pairing with dirsal-frontend-design

A theme covers color and type only. When the artifact is a web page, UI, or another
designed layout, also read `dirsal-frontend-design` (`../dirsal-frontend-design/SKILL.md`)
for layout, hierarchy, motion, accessibility, and writing. The chosen theme's hex
codes and fonts become the Color and Type of that skill's design plan. Spend the plan
on layout and principles, and don't swap the theme's palette for a new one.

## Purpose

To apply consistent, professional styling to presentation slide decks, use this skill. Each theme includes:
- A cohesive color palette with hex codes
- Complementary font pairings for headers and body text
- A distinct visual identity suitable for different contexts and audiences

## Usage Instructions

To apply styling to a slide deck or other artifact:

1. **Show the theme showcase**: Display the `theme-showcase.pdf` file to allow users to see all available themes visually. Do not make any modifications to it; simply show the file for viewing.
2. **Ask for their choice**: Ask which theme to apply to the deck
3. **Wait for selection**: Get explicit confirmation about the chosen theme
4. **Apply the theme**: Once a theme has been chosen, apply the selected theme's colors and fonts to the deck/artifact

## Themes Available

The following 10 themes are available, each showcased in `theme-showcase.pdf`:

1. **Ocean Depths** - Professional and calming maritime theme
2. **Sunset Boulevard** - Warm and vibrant sunset colors
3. **Forest Canopy** - Natural and grounded earth tones
4. **Modern Minimalist** - Clean and contemporary grayscale
5. **Golden Hour** - Rich and warm autumnal palette
6. **Arctic Frost** - Cool and crisp winter-inspired theme
7. **Desert Rose** - Soft and sophisticated dusty tones
8. **Tech Innovation** - Bold and modern tech aesthetic
9. **Botanical Garden** - Fresh and organic garden colors
10. **Midnight Galaxy** - Dramatic and cosmic deep tones

## Brand Themes

One theme per Dirsal project. Use them only for that project's work, after
`dirsal-brands-guidelines` has identified it. They are not in `theme-showcase.pdf`
and are never offered as options for other work.

- **Kisum** (`themes/kisum.md`) - Cool neutrals with a single Kisum Purple accent; Manrope and Inter
- **The Stage** (`themes/thestage.md`) - Dark green with a muted gold accent; Cormorant Garamond and Montserrat
- **Nextkt** (`themes/nextkt.md`) - Light surface with the logo's teal and navy; Inter. Provisional until Nextkt's design system is added: say so when applying it

## Theme Details

Each theme is defined in the `themes/` directory with complete specifications including:
- Cohesive color palette with hex codes
- Complementary font pairings for headers and body text
- Distinct visual identity suitable for different contexts and audiences

## Application Process

After a preferred theme is selected, or a Dirsal brand was identified:
1. Read the corresponding theme file from the `themes/` directory. For a brand, also read the project's entry file named in `dirsal-brands-guidelines` Step 2
2. Apply the specified colors and fonts consistently throughout the deck
3. Ensure proper contrast and readability
4. Maintain the theme's visual identity across all slides

## Create your Own Theme
To handle cases where none of the existing themes work for an artifact, create a custom theme. Based on provided inputs, generate a new theme similar to the ones above. Give the theme a similar name describing what the font/color combinations represent. Use any basic description provided to choose appropriate colors/fonts. After generating the theme, show it for review and verification. Following that, apply the theme as described above.
