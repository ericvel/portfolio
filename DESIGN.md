---
name: Eric Veliyulin — Frontend Specialist Portfolio
description: Warm paper, one green field, one signal orange — a hiring buyer's sixty-second scan answered by type, rule weight and one row that shows its work, with no card and no carousel.
colors:
  paper: "#f4f1ea"
  paper-deep: "#ece7da"
  paper-soft: "#a8a49a"
  ink: "#17181a"
  ink-soft: "#55534a"
  ink-rule: "#34353a"
  rule: "#d8d2c4"
  rule-strong: "#b9b2a1"
  field: "#1f4d3c"
  field-soft: "#c3d4c8"
  field-rule: "#3d6a58"
  signal: "#e4572e"
  signal-deep: "#c8461f"
typography:
  display:
    fontFamily: "Cabinet Grotesk, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(2.75rem, 7.4vw, 5.5rem)"
    fontWeight: 800
    lineHeight: 0.94
    letterSpacing: "-0.035em"
  headline:
    fontFamily: "Cabinet Grotesk, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(2.25rem, 5vw, 3.5rem)"
    fontWeight: 800
    lineHeight: 1
    letterSpacing: "-0.03em"
  title:
    fontFamily: "Cabinet Grotesk, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(1.875rem, 3.2vw, 2.5rem)"
    fontWeight: 500
    lineHeight: 1.5
    letterSpacing: "-0.025em"
  subtitle:
    fontFamily: "Cabinet Grotesk, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.75rem"
    fontWeight: 500
    lineHeight: 1.1
    letterSpacing: "-0.02em"
  lede:
    fontFamily: "Cabinet Grotesk, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.375rem"
    fontWeight: 400
    lineHeight: 1.4
    letterSpacing: "normal"
  body:
    fontFamily: "Cabinet Grotesk, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: "normal"
  mono:
    fontFamily: "Martian Mono, ui-monospace, SFMono-Regular, Menlo, monospace"
    fontSize: "0.75rem"
    fontWeight: 400
    lineHeight: 1.4
    letterSpacing: "0.02em"
rounded:
  none: "0"
spacing:
  "1": "4px"
  "2": "8px"
  "3": "12px"
  "4": "16px"
  "5": "24px"
  "6": "32px"
  "7": "48px"
  "8": "64px"
  "9": "96px"
  "10": "128px"
  gutter: "clamp(20px, 5vw, 64px)"
  measure: "1240px"
components:
  action-primary:
    backgroundColor: "{colors.signal}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.none}"
    padding: "16px 32px"
  action-primary-hover:
    backgroundColor: "{colors.signal-deep}"
    textColor: "{colors.paper}"
  footer-mail:
    backgroundColor: "{colors.signal}"
    textColor: "{colors.ink}"
    typography: "{typography.lede}"
    rounded: "{rounded.none}"
    padding: "16px 32px"
  footer-mail-hover:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
  project-row:
    backgroundColor: "transparent"
    textColor: "{colors.paper}"
    rounded: "{rounded.none}"
    padding: "32px 24px"
  project-row-hover:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
  project-mark-plate:
    backgroundColor: "{colors.paper}"
    rounded: "{rounded.none}"
    padding: "8px 12px 8px 0"
    width: "180px"
    minWidth: "156px"
    height: "64px"
  project-row-lead:
    backgroundColor: "transparent"
    textColor: "{colors.paper}"
    typography: "{typography.title}"
    rounded: "{rounded.none}"
    padding: "48px 24px"
  project-row-facts:
    backgroundColor: "transparent"
    textColor: "{colors.paper}"
    typography: "{typography.mono}"
    rounded: "{rounded.none}"
  talk-photo:
    backgroundColor: "{colors.paper-deep}"
    rounded: "{rounded.none}"
  tech-tag:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    typography: "{typography.mono}"
    rounded: "{rounded.none}"
    padding: "6px 12px"
  nav-link:
    backgroundColor: "transparent"
    textColor: "{colors.ink-soft}"
    typography: "{typography.body}"
    rounded: "{rounded.none}"
  nav-link-hover:
    textColor: "{colors.ink}"
  nav-contact:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.none}"
  lang-option:
    backgroundColor: "transparent"
    textColor: "{colors.ink-soft}"
    typography: "{typography.mono}"
    rounded: "{rounded.none}"
    padding: "7px 10px"
  lang-option-active:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
  menu-item:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "12px 24px"
  menu-item-hover:
    backgroundColor: "{colors.paper-deep}"
    textColor: "{colors.ink}"
  skip-link:
    backgroundColor: "{colors.signal}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "12px 24px"
---

# Design System: Eric Veliyulin — Frontend Specialist Portfolio

## Overview

**Creative North Star: "The Sixty-Second Scan"**

The system is built for one reader: someone with a staffing need open in another tab, deciding in under a minute whether this person matches the work. Everything is therefore ranged left against a single column edge that runs unbroken from the header rule to the footer address, so the eye never has to re-find the start of a line. Personality comes from type and grid — a display weight used exactly once per page, hairline rules instead of boxes, and a mono face that appears only where something is being measured. There is no borrowed artifact, no texture, no illustrative conceit; the page looks like what it is.

Colour does the structural work that cards usually do. Three grounds exist and each one owns a whole region: warm paper is the default, a deep green field owns the projects region edge to edge, and ink closes the page under the footer. A region flip is the section break — there are no dividers between grounds and no containers floating on top of them. Inside the green field a project row flips back to paper the moment it is pointed at, which is the only nesting inversion in the system. One saturated orange is reserved for actions and never spends itself on decoration.

Density is generous but not airy: 96px between major sections, 32px inside a project row, hairlines rather than gaps where two things need separating. The confirmed rejections are the dark developer-portfolio default (there is no dark mode and no dark ground except the deliberate ink footer), cards-as-structure (there is no card at rest anywhere in the system), and faded text as an emphasis device (see The Never-Fade Rule).

**Key Characteristics:**

- One unbroken left column edge, `--measure` 1240px wide inside a fluid `--gutter`, shared by every section — the projects region's ground runs to the viewport edges, but its heading, its rules and each row's first register all start on the column
- Three region grounds — paper, green field, ink — each flipping text colour with it
- One lead project row that argues and two that corroborate — the lead trades its mark plate for a screenshot, and that trade is the whole of the hierarchy
- Exactly one photograph of the person on the site, in the talks region, running off the right page edge while the type holds the column
- Zero border-radius, anywhere; zero shadows except one dropdown
- Two self-hosted families, no runtime third-party font requests
- Signal orange as fill or rule only, never as text
- Emphasis by ground change alone; nothing is faded and there is no `opacity` declaration anywhere in the system
- Focus rings invert per region so the indicator is always visible
- Every measure sized for Norwegian, the longer of the two locales

## Colors

A warm, paper-based palette with exactly one chromatic region and exactly one accent; nothing in the system is a neutral gray.

### Primary

- **Signal Orange** (`signal`): The action colour, and only the action colour. It fills the hero email button, the project CTA button, the footer address button and the skip link; it draws the 2px underline beneath every inline "read more" / "watch" affordance; it is the focus ring on the ink footer and the `::selection` ground. Ink sits on it at 4.8:1, which is why it can be this saturated — the orange is always the ground, never the text.
- **Signal Deep** (`signal-deep`): The pressed-down hover state of a signal-filled button on paper, paired with paper text.

### Secondary

- **Deep Green Field** (`field`): Owns the projects region at page scale, full-bleed edge to edge. It is a region ground, never a component fill, never a text colour, never a border on paper.
- **Field Mist** (`field-soft`): Secondary text on the field — the project blurbs and technology tags in the ledger, at 6.2:1.
- **Field Hairline** (`field-rule`): The 1px line on the field — the rules between project rows, the perimeter of a technology tag there, and the rule above the lead row's facts. Not the resting underline of a row's affordance: that is `field-soft`, because it is evidence of interactivity rather than a division, and it is all a touch reader gets.

### Neutral

- **Warm Paper** (`paper`): The default page ground, the header ground, the dropdown ground, the mark plate, the ground a project row flips to, and the text colour on both the field and the ink footer. Never pure white.
- **Deep Paper** (`paper-deep`): The one-step-back tint. It is the hover ground of a dropdown item and an inactive locale button, and the placeholder ground behind a loading image.
- **Muted Paper** (`paper-soft`): Secondary text on the ink footer at 7.1:1 — warm-tinted so it never reads as gray.
- **Ink** (`ink`): Primary text on paper, the footer ground, the active locale button ground, the text colour on every signal fill, and the 2px structural rule above a section-defining element.
- **Soft Ink** (`ink-soft`): All secondary text on paper — ledes, blurbs, body paragraphs, mono labels, captions, resting nav links. 6.8:1 on paper.
- **Hairline** (`rule`): The default 1px divider on paper: header underline, hero body top rule, image borders, list separators.
- **Strong Hairline** (`rule-strong`): The 1px border that reads as an edge rather than a division — technology tags, the locale toggle frame, the dropdown border, the secondary-talk top rule, quiet link underlines.
- **Ink Hairline** (`ink-rule`): The underline beneath quiet links on the ink footer.

### Named Rules

**The Region Owns the Ground Rule.** A ground belongs to a whole region, not to a component. Paper is the default; the projects section owns the field; the footer owns ink. Setting a region ground means setting its text colour in the same rule, and anything nested that needs to sit apart (a hovered project row, a mark plate) inverts all the way back to ink-on-paper rather than half-way.

**The Signal-Never-Text Rule.** Signal orange is only ever a fill, a 2px rule, or an outline. There is no `color: var(--signal)` in the system and there must not be one — as text it fails on every ground the site has. Signal never appears on the green field in any form: in the projects region it becomes available only once a row has flipped its own ground to paper, and then only as the 2px underline beneath that row's affordance.

**The Inverting Focus Rule.** `--focus` is a token, and every region that changes its ground reassigns it: paper uses ink, `.work` uses paper, `.footer` uses signal, and the active locale button uses paper against its own ink fill. A project row reassigns it a second time — back to ink — in the same rule that flips the row to paper, because the flip fires on `:focus-visible` too and a paper ring on a paper sheet is not an indicator. Any new region or state with a non-paper ground must set `--focus` in the same rule that sets `background`. WCAG 2.2 AA is a hard product requirement.

## Typography

**Display Font:** Cabinet Grotesk (weights 400 / 500 / 800, self-hosted woff2, ITF Free License), falling back to `ui-sans-serif, system-ui, sans-serif`
**Body Font:** Cabinet Grotesk — the same family; there is no separate body face
**Label/Mono Font:** Martian Mono (variable 300–700, latin subset, SIL OFL 1.1), falling back to `ui-monospace, SFMono-Regular, Menlo, monospace`

**Character:** A tight, slightly condensed grotesk carrying the whole voice, cut with a wide-eyed engineering mono that never speaks — it only labels and counts. Display sizes are set hard and negative-tracked so a name at 5.5rem still reads as one object; everything below body size in mono is positive-tracked and uppercase so short strings hold their shape.

### Hierarchy

- **Display** (800, `--step-6`, 0.94, -0.035em): The name in the hero and the project title on a detail page. Once per page, capped at 17ch, `text-wrap: balance`.
- **Headline** (800, `--step-5`, 1, -0.03em): The closing call in the footer, capped at 16ch. The same step is also used at weight 500 with line-height 1.05 for the featured talk title — the only place headline scale appears without display weight.
- **Title** (500, `--step-4`, -0.025em): Section headings ("Utvalgt arbeid", "Foredrag").
- **Subtitle** (500, `--step-3`, 1.1, -0.02em): Project row titles and the project-page CTA question.
- **Lede** (400, `--step-2`, 1.4, `--ink-soft`): The hero lede at 44ch and the project blurb at 42ch. Also the size of the footer's email button label.
- **Body** (400, `--step-0`, 1.5): Project blurbs, talk descriptions, button labels, quiet links. Long-form project paragraphs step up to `--step-1` at 1.6 and 68ch.
- **Small** (400 / 500, `--step--1`): Nav links, dropdown items, inline "read more" affordances, image captions, the back link.
- **Mono label** (400, `--step--2`, 0.02em base, 0.05–0.06em when uppercase): Technology names and tags, talk venues and durations, field labels, locale codes.

Measures in use, all set in `ch` so they track the font: 44ch hero lede, 42ch project blurb, 42ch featured talk description, 46ch talk description and footer lede, 54ch talks lede, 56ch figure caption, 68ch project paragraph. Headline wraps are constrained by `ch` too (16ch, 17ch, 22ch) with `text-wrap: balance` on titles and `text-wrap: pretty` on prose — the featured talk title takes the 16ch cap, which is what breaks it to two lines beside the photograph.

### Named Rules

**The Mono-Is-Measurement Rule.** Martian Mono appears only where something is counted, named as a technology, timed, or located — tech tags, "60 MIN", "NDC London 2026", "NO"/"EN". It is never a costume for "technical", never a body face, and never a heading. Everything mono goes through the shared `.mono` primitive, which fixes it at `--step--2`; if a new label needs a different size, that is a signal the label is not mono.

**The Three Weights Rule.** 400 for prose, 500 for anything titled or interactive, 800 for display only. There is no 600, no italic, and no synthetic bolding — only three real files ship.

**The Self-Hosted Rule.** Both families are self-hosted woff2 in `src/assets/fonts/` with `font-display: swap`. No `@import`, no Google Fonts, no runtime request to a third party. Note the Martian Mono subset is latin only; æ ø å resolve inside U+00E0–U+00FF, so Norwegian mono strings are safe but anything beyond latin-1 is not.

## Layout

Everything hangs off one primitive. `.shell` is `width: 100%; max-width: var(--measure) (1240px); margin-inline: auto; padding-inline: var(--gutter)`, where `--gutter` is `clamp(20px, 5vw, 64px)`. Every section — header, hero, talks, footer, project detail — wraps its content in `.shell`, so the text column's left edge is the same x-coordinate down the entire page.

The projects region is the one place where a ground breaks the column, and only the ground: the field runs to the viewport edges while the section heading, the row rules and each row's first register all start on the shared column line. Inside a row the remaining columns are registers hanging off that line, the way the facts rail does on a project page — a register is not a column break. A hovered row extends its paper 24px past the column on both sides (the gutter's width, at mobile widths), so the sheet reads as something slid under the rules rather than as a box drawn around the text. That overhang carries no content.

Sections are separated by vertical rhythm, not by dividers: `--space-9` (96px) padding-block on the projects, talks and footer regions; the hero opens on `clamp(--space-8, 9vw, --space-10)`. Inside a region, 64px separates the two halves of a grid, 48px is the gap between a project row's columns, 32px is a row's vertical padding, 24px is a control group's gap, and 16px/12px/8px handle label-to-value spacing.

Grids are two-column asymmetric and collapse to one:

- Hero body: `minmax(0, 1fr) minmax(0, 0.85fr)` — lede+actions beside the technology strip — collapsing at 900px
- Project detail head: `minmax(0, 1fr) minmax(0, 340px)` — title+blurb beside the facts rail — collapsing at 900px
- Featured talk: `minmax(0, 0.85fr) minmax(0, 1fr)` — type beside the photograph, the grid's own `padding-left` set to `--column-inset` so the left column lands on the shared line while the right column runs off the page; collapsing at 860px
- Footer: `minmax(0, 1fr) minmax(0, auto)`, bottom-aligned — collapsing at 860px
- Project row: `180px minmax(0, 1.4fr) minmax(0, 1fr) auto` — mark plate, name and claim, stack, affordance — collapsing to `156px minmax(0, 1fr)` at 1024px and to one column at 560px
- Auto-fit grids for repeating content: talks at `minmax(300px, 1fr)`, project paragraphs at `minmax(340px, 1fr)`, project figures at `minmax(360px, 1fr)`

Breakpoints are max-width and there are five: 1024px (a project row drops its stack and affordance under the body, before either column gets too narrow for a Norwegian tech list), 900px (asymmetric grids to single column), 860px (the featured talk goes to one column with its photograph ordered last and bled to both viewport edges, and the footer collapses), 720px (header nav wraps to its own full-width row), 560px (hero actions stack full-width, a project row goes to one column with its bleed widened to the gutter so the paper runs exactly edge to edge).

**The Unbroken Column Rule.** A new surface uses `.shell` or reproduces its exact inner edge. Nothing on this site sets its own max-width in px, and no section indents its content past the shared gutter. Every heading on the site starts on that line — `h1`, all four `h2`s, and the `h3`s in both the projects and talks regions — and so does the first register of every row. Nothing is centred rather than ranged.

Exactly two things extend past the column, and **neither one is type**: a hovered project row's paper overhang, and the talks photograph. A section that needs to break the column without `.shell` reproduces the inner edge with `--column-inset`, `max(var(--gutter), calc((100% - var(--measure)) / 2 + var(--gutter)))` — a percentage, never `vw`, because `vw` counts the scrollbar and would push the page into a horizontal scroll. The talks region declares that token and the featured grid spends it as `padding-left`, which is why the type stays on the line while the picture does not.

**The Norwegian-First Measure Rule.** Norwegian is canonical and is the longer of the two locales. Every measure is set in `ch` and every heading wrap in `ch` with `text-wrap: balance`; no label, button or nav item is given a fixed px width. New surfaces get checked in Norwegian first — if it fits in `no`, it fits in `en`.

## Elevation & Depth

The system is flat by construction. There is exactly one `box-shadow` in the entire codebase: `0 14px 30px -14px rgb(23 24 26 / 26%)` under the header's projects dropdown, where an overlay genuinely floats above the page and needs to be read as detached. Nothing else — no card, no button, no image, no region — has a shadow at rest or on hover.

Depth is instead carried by three devices: a change of ground (paper → deep paper → field → ink), a hairline (1px `rule` for a division, 1px `rule-strong` for an edge, 2px `ink` for a structural break above a section-defining element), and a 2px `translateY` lift on the primary buttons that returns to 0 on `:active`. The projects region adds a fourth: a row flips its ground from field to paper on hover and focus, which is the whole of its depth vocabulary — nothing lifts, nothing scales, nothing fades.

### Shadow Vocabulary

- **Overlay** (`box-shadow: 0 14px 30px -14px rgb(23 24 26 / 26%)`): The header dropdown only. Warm-tinted from ink rather than black, and offset downward with a negative spread so it reads as a lifted sheet, not a glow.

### Named Rules

**The One Shadow Rule.** A shadow exists only where an element overlays content it did not push out of the way. If a new element is in normal flow, it gets a hairline or a ground change — not a shadow.

**The Never-Fade Rule.** No text and no control label ever carries `opacity`, at any state. Faded text drops below the contrast floor, and a site whose central claim is WCAG 2.2 AA cannot fade a third of its evidence to 2:1 for effect: de-emphasis is a cooler ground, never a lower alpha. There is no `opacity` declaration left anywhere in the system, and a new use of it on anything readable is a defect. Note what this costs and why it is worth paying: the projects region distinguishes the row being considered from the other two entirely by ground, which is why the ground flip has to be as large as it is.

## Shapes

Every corner in the system is square. There is no `border-radius` declaration anywhere in the source, and the reset explicitly zeroes it on form controls, so buttons, cards, tags, images and the dropdown all share one silhouette: a rectangle, cut flush.

Form language is drawn with lines rather than boxes:

- **1px `rule`** — divisions inside a region: the header underline, the rule the hero body hangs from, a figure's border, list separators
- **1px `rule-strong`** — the perimeter of a small object on paper: technology tags, the locale toggle, the dropdown, the secondary-talk top rule
- **1px `field-rule`** — the same job on the field: the rules between project rows, a technology tag's perimeter there, and a row's resting affordance underline
- **2px `ink`** — the structural break above something that behaves like a section of its own: the featured talk, the project CTA, the project head's bottom edge
- **2px `signal`** — the underline that marks an inline affordance ("Se foredraget", "Les mer"), sitting 3px below the baseline
- **Animated rule** — a `linear-gradient` background drawn at `background-size: 100% 1px` and grown to 2px or 8px on hover, so a thickening underline never moves its label. Used by the header's contact link and by a project row's affordance, and the required idiom for any underline that changes weight

The only non-rectangular mark is the 9px signal square beside the hero role line, drawn as an element rather than a glyph. Screenshots live on the project pages, clipped to their real per-image `aspect-ratio`; in the projects region a client logo appears instead, on a small paper plate. The talks photograph is the one image that is not a screenshot or a mark, and it is the one image bounded on three sides rather than four — `border-block` and `border-left` in 1px `rule`, no trailing edge, because a hairline there would draw a box around something that is meant to read as the page running out. Icons are strokes in a 16-unit box; there are no filled shapes.

**The Printed Mark Rule.** Client logos arrive on white grounds — a baked-in white in a JPG, a white `<rect>` in an SVG — and a white rectangle on warm paper is a visible defect. Every logo is rendered with `mix-blend-mode: multiply`, which drops the white into the paper and lets the plate merge into a row that has flipped to paper; where the ground is part of the file it is deleted from the asset as well. A supplied mark also gets cropped to its own bounding box before it ships, so the plate's budget is spent on logo rather than on the file's own margin.

**The Wide Plate Rule.** The marks in use run from a 2.5:1 lockup (ASKO) to a 4.4:1 wordmark (Røde Kors), and a mark with less than roughly 156px of **content** width goes width-bound — which lands it visibly shorter than the others and reads as a mistake rather than as variety. The number governs content, not the plate box, and the plate's `padding-inline` comes off the box: the plate is `min(100%, 180px)` against a `156px` minimum and a 36px `max-height`, its column is `180px` at full width and `172px` below 1024px, and its inline padding is `0` at the start edge and `12px` at the end. Read that as one rule with one job — every mark ends up bounded by height, so all of them arrive at the same optical weight. Check a new mark's rendered height against the others rather than trusting the `max-height` alone; if it comes back short, the column is too narrow, not the `max-height` too low.

**The Ranged Mark Rule.** The plate has no padding at its start edge, because the mark's own ink is what has to land on the shared column line — not the rectangle drawn around it. A mark centred in a fixed plate starts at a different x in every row, which is precisely the re-finding the whole grid exists to prevent, and it is fully exposed the moment the row flips to paper and the plate dissolves into the sheet.

## Components

### Buttons

- **Shape:** Square, always (0 radius). No borders on filled actions.
- **Primary action** (`.action`, `.cta__button`, `.footer__mail`): Signal ground with ink text, `16px 32px` padding, weight 500, inline-flex with a 12px gap before an optional arrow icon. On paper it hovers to signal-deep with paper text; on the ink footer it hovers to paper with ink text — in both cases the ground changes and the text follows it. All three lift `translateY(-2px)` on hover and settle to 0 on `:active`, over 180ms.
- **Focus:** No component defines its own ring except where inversion demands it. The global `:focus-visible` draws `2px solid var(--focus)` at `3px` offset, and `--focus` is whatever the region or state set.
- **Quiet link** (`.quiet`, `.footer__link`, `.work__more`): No fill. Text over a 1px hairline underline that goes to full contrast on hover; in the projects region the underline also thickens to 2px signal once the row is paper.
- **Icon buttons:** None. The site has no icon-only control; every icon sits beside a real text label.

### Chips / Tags

- **Style:** Mono at `--step--2`, `6px 12px` padding, 1px `rule-strong` border, no fill, square. Ink text on the project page and in the hero strip. In the projects region they run tighter (`5px 10px`) and take their border and text colour from the row's `--row-chip` / `--row-secondary`, so they follow the ground flip instead of being restated for it.
- **State:** Static. Technology tags are content, not filters — they have no hover of their own, no selected state, and never become links.

### Cards / Containers

**There is no card in this system at rest.** The one container that exists is transient: a project row becomes a paper sheet while it is hovered or focused, and returns to bare type on the field when it is not. Nothing on this site is boxed in order to be grouped — grouping is done by hairlines, and lifting is done by a ground flip that only happens in response to the reader.

The single persistent paper object is the mark plate: a `180 × 64px` paper rectangle holding one client logo, which exists solely because `mix-blend-mode: multiply` needs a light ground to print onto. It is not a card and holds no text.

Before adding a container, check which of these you actually need: a hairline (grouping), a ground flip (this is the live one), or a mark plate (an image needs a light ground). If none fit, the content does not need a box.

### Inputs / Fields

None. The site has no forms, no inputs, and no backend; the only conversion is a `mailto:` link. Do not introduce an input pattern speculatively — if a field is ever genuinely needed, derive it from the technology tag (square, 1px `rule-strong`, mono where it holds a measured value) rather than importing a component library.

### Navigation

- **Style:** Sticky header on paper with a 1px `rule` bottom edge, `68px` min-height, wordmark left at `--step-1` / 500, nav right at `--step--1`.
- **States:** Links rest in soft ink and hover to ink over 160ms. The one persistent action, the contact link, is full ink at weight 500 with a growing signal underline instead of a colour change — the target never shifts.
- **Dropdown:** Opens on hover, click, and focus; closes on outside pointer-down, focus-out, and document-level Escape (Escape returns focus to the trigger only when focus was already inside). Panel is paper with a 1px `rule-strong` border and the system's single shadow; items are `12px 24px` and hover to deep paper. The caret rotates 180° over 200ms.
- **Mobile (≤720px):** The header wraps rather than collapsing into a drawer — the nav takes a full-width second row with `justify-content: space-between`. There is no hamburger and no overlay menu.
- **Language toggle:** Two mono buttons inside a single 1px `rule-strong` frame, no gap. Inactive is transparent with soft ink and hovers to deep paper; active is an ink fill with paper text, `aria-pressed`, and a locally inverted `--focus` drawn inset at `-3px` offset so the ring stays inside the fill.
- **Skip link:** Signal fill, ink text, parked at `translateY(-250%)` and dropping to 0 on focus over 180ms at the gutter's left edge.

### Project Ledger (signature)

The one region that owns a colour at page scale, and the one place with a meaningful state change. All three projects are present at once, and one of them argues while the other two corroborate.

- **Ground:** Field, full-bleed, `96px` padding-block, `--focus` reassigned to paper.
- **Structure:** A `ul` with an explicit `role="list"` on the column — the reset strips list bullets, and WebKit strips list semantics with them, so the role is restored rather than assumed. `1px field-rule` above the first row and below every row. The section carries `aria-labelledby` pointing at its own `h2`, so it is a named landmark. There is no head beyond the section title, no counter, no arrows, and no notion of an active item — with three projects, machinery for moving between them was cost without a reader benefit.
- **Row:** One `RouterLink` per project, laid out `180px minmax(0, 1.4fr) minmax(0, 1fr) 210px` with a 48px gap and `32px` padding-block — mark plate, then `h3` title over blurb, then the stack, then the facts. Every column is a single register; `align-items: start` so all four registers begin on one row line, because a ledger's power is that its columns agree and a reader can run down the stack column alone. The title is a real `h3` so the three projects sit in the document outline beside the talks, and the link's `aria-label` carries the name plus the action.
- **The facts register.** Year in mono, role beneath it, then the affordance. Both are measured values a buyer needs before deciding whether the click is worth it — role answers solo-or-embedded, the year turns a stack list from a possibly-stale claim into a dated one. The register replaced a "Se prosjektet" label repeated once per row: the row is already the link, so that label was never the click boundary, and the widest column was spending itself on nothing. The bare year gets a `.visually-hidden` "Periode" label so a screen reader hears a fact rather than a loose number.
- **The stack.** A `ul role="list"` with an `aria-label` naming it — six bare technology words read as a sentence otherwise, and the chip borders that carry that meaning visually are hairlines a screen reader cannot see.
- **The paper flip.** On `:hover` and `:focus-visible` the row sets `background: var(--paper)`, `color: var(--ink)`, and `--focus: var(--ink)` in one rule, and swaps two inherited variables — `--row-secondary` (field-mist → soft ink) and `--row-chip` (field-rule → strong hairline) — so the blurb and the tags follow the ground rather than being restated. 200ms `ease` on background and colour. This is the region's entire depth vocabulary: nothing lifts, nothing scales, nothing fades.
- **Why a flip rather than a highlight.** The Never-Fade Rule forbids distinguishing rows by alpha, and scale on a full-width row would shift the type off the column. A ground change is the only device left that is both legible and large enough to read as "this one" — and it is already the system's section-break language, so the row reads as a small region asserting itself.
- **The bleed.** The row's paper extends `24px` past the column on both sides (`padding-inline: var(--space-5)` against a matching negative margin), while the type stays on the shared line. At 560px and below the bleed widens to the gutter so the sheet runs exactly edge to edge instead of stopping a few pixels short. Nothing but this overhang is off the column, and it carries no content.
- **Signal.** The affordance rests as a 1px `field-soft` underline and becomes a 2px signal underline only once the row is paper — signal never touches the field. It rests at field mist rather than at `field-rule` because it is not a divider: on touch there is no hover, so this underline is the only resting evidence that the row is live, and a 1.56:1 hairline is not evidence. Both weights are drawn as a `linear-gradient` background grown by `background-size`, so the label never moves. The arrow nudges 3px right on hover **and on focus**.
- **Focus:** The whole row is one link, and tabbing produces the same paper flip as hovering, so a keyboard reader gets the identical pointer rather than only an outline. The ring is ink, on the paper the flip just created. At 560px and below the row is as wide as the viewport, so the ring flips to `outline-offset: -3px` — an outset ring there draws its vertical sides off-screen and a two-sided indicator is not an indicator.
- **The lead row.** Exactly one project sets `lead` in the data, and that row is the argument the other two corroborate. It drops the mark plate entirely and spends its right-hand column on one screenshot at the image's real `aspect-ratio`, with a mono caption; the title steps up to `--step-4`, the blurb to `--step-2` at 40ch, and the facts sit under the body on a `--row-chip` rule of their own. The plate goes because the mark, the `h3` and the screenshot were all saying the same client name — and because a row that shows its work needs no badge to say whose work it is. Below 1024px the row collapses to one column with the screenshot ordered last, so the reader reaches the claim and the stack before the evidence.
- **Why the lead row is not just a bigger row.** Emphasis by scale alone reads as "that one happens to have more text". Emphasis by permanent paper would spend the ground flip, which is the system's one device for saying _this is the one you are pointing at_ and cannot also mean _this is the important one_. Giving the lead row a second content type is the only emphasis that does not borrow from something already in use.
- **The screenshot exception.** Screenshots are otherwise the project page's evidence, not the ledger's. The lead row is the single licensed exception, and it stays single: a second screenshot in this region turns the ledger back into a list of cards and takes the lead row's emphasis with it. A screenshot here runs at its real ratio on a `paper-deep` ground so a slow image reads as loading rather than as an empty rectangle.
- **Reduced motion:** The global reduced-motion block clamps the transitions to 0.01ms; the flip still happens, instantly, because it is the affordance and not an embellishment.

### Talks Block

Evidence ranked by rule weight rather than by card, and the one region on the site that shows the person rather than the work.

- **Structure.** The heading and lede sit in `.shell`. The featured talk then leaves it: a `0.85fr / 1fr` grid whose `padding-left` is `--column-inset`, so its type starts on the shared column line while its right-hand column runs to the viewport's right edge. The two lesser talks return to `.shell` below, on 1px `rule-strong` tops at subtitle scale in an auto-fit `minmax(300px, 1fr)` grid.
- **The 2px ink rule spans the full bleed width**, not the column. That is what makes the escape structural instead of accidental: the rule declares a section, the picture then exceeds it, and both read as intended.
- **Type.** Headline scale at weight 500 capped at 16ch (two lines), mono venue line in uppercase, description at 42ch on `--step-1`, and a signal-underlined watch affordance whose arrow travels up-right 2px on hover and on focus.
- **The photograph.** One landscape image of Eric presenting at NDC London, at its real ratio on a `paper-deep` ground, hairlined on three sides only, with a mono caption beneath it that stays inside the gutter. The whole block is one link to the recording, the picture included.
- **Why a photograph earns its place here.** Everywhere else the site refuses decoration, and a stock-feeling portrait would be exactly that. This one is evidence of the same kind as a client logo or a screenshot: it shows the talk happened, in front of a room, at a named conference whose wordmark is in the frame. It is licensed for this region only — a second photograph of the person anywhere on the site turns the first one into styling.
- **Below 860px** the grid goes to one column, the picture is ordered last so the reader reaches the claim before the proof, and it bleeds to both edges with its side hairlines dropped.
- **No talking-points list.** The narrow column used to hold three hairline-separated bullets restating what the description already says. The description carries it alone now; a list there would compete with the photograph for the same register.

### Icons

One set, defined entirely in `AppIcon.vue`: `arrow-right`, `arrow-left`, `arrow-up-right`, `chevron-down`. All four are single paths in a 16-unit viewBox, `stroke-width: 1.5`, `fill: none`, `stroke: currentColor`, rendered at 16px, `aria-hidden` and `focusable="false"` — always decorative, with the adjacent label carrying the meaning. A shared `translateY(-0.5px)` optically aligns them to cap height. Icons animate only as a directional hint on the parent's hover (3px right for `arrow-right`, 2px up-right for `arrow-up-right`), never on their own.

### Motion

Two easings and a short duration ladder. `ease` for pure colour changes (140–200ms, including the project row's 200ms ground flip); `cubic-bezier(0.16, 1, 0.3, 1)` for anything that moves or grows (180ms button lift, 200ms caret, 220ms underline growth and icon nudge). `prefers-reduced-motion: reduce` clamps all animation and transition durations to 0.01ms and turns off `scroll-behavior: smooth`. There is no JavaScript-driven motion anywhere on the site.

## Do's and Don'ts

### Do:

- **Do** wrap every new section's content in `.shell`, or reproduce its inner edge exactly with `max(var(--gutter), calc((100% - var(--measure)) / 2 + var(--gutter)))` if the section is full-bleed.
- **Do** set `--focus` in the same rule where you set a `background` that changes the ground — paper ground uses ink, field uses paper, ink uses signal, and a row flipping to paper resets it to ink.
- **Do** reach for a hairline (1px `rule`, `rule-strong`, or `field-rule`) or a 2px ink rule where you are tempted to draw a box.
- **Do** keep signal orange as a ground under ink text, a 2px underline, or a focus outline — and only on paper.
- **Do** use `.mono` only for measured values — technologies, durations, venues, locale codes — and let it stay at `--step--2`.
- **Do** size every measure and heading wrap in `ch`, and check the surface in Norwegian first.
- **Do** distinguish one item from its siblings with a ground change, and pass it down to nested text through an inherited variable rather than restating each colour.
- **Do** grow a changing underline with `background-size` on a `linear-gradient`, so the label it belongs to never moves.
- **Do** add new icons as single 1.5-stroke paths in the same 16-unit box in `AppIcon.vue`, `aria-hidden`, with a real text label beside them.
- **Do** add every new string to both `src/locales/no.ts` and `src/locales/en.ts`.
- **Do** ship a photograph as an optimized JPEG cut to the ratio it renders at, with `width`/`height` on the element and `loading="lazy"`.

### Don't:

- **Don't** add a `border-radius`. Every corner in this system is square.
- **Don't** add a `box-shadow` to anything in normal flow — the dropdown overlay is the only shadow that exists.
- **Don't** put `opacity` on anything. There is no `opacity` declaration left in the system, on text or on images; de-emphasis is a cooler ground.
- **Don't** write `color: var(--signal)`. Signal is a fill, a rule, or an outline; as text it fails on every ground here.
- **Don't** put signal orange on the green field in any form. In the projects region it becomes available only after a row has flipped its own ground to paper.
- **Don't** introduce a third accent, a gray, or a dark mode. There are three grounds and one accent.
- **Don't** use mono as a "technical" costume for headings, prose, or button labels.
- **Don't** add a fourth font weight, an italic, or a second sans; three Cabinet Grotesk files and one variable mono are what ships.
- **Don't** load a font, icon set, or stylesheet from a third-party host at runtime.
- **Don't** wrap content in a card. There is no persistent card in this system — grouping is hairlines, lifting is a ground flip in response to the reader, and the mark plate is a light ground for a logo, not a container.
- **Don't** put a screenshot in a project row other than the lead row. The lead row is the one licensed exception and it stays one; a second screenshot here turns the ledger back into a list of cards. Elsewhere a row is a mark, a name, a claim, a stack and its facts, and screenshots are the project page's evidence.
- **Don't** give the lead row a mark plate, and don't give the other rows a screenshot. Each row type is missing exactly one thing the other has, and that trade is what the hierarchy is made of.
- **Don't** drop a supplied logo in untrimmed or without `mix-blend-mode: multiply`, and don't centre a mark in its plate — it ranges left so its ink starts on the column line.
- **Don't** narrow a mark below ~156px of **content** width, and don't judge a new mark by its `max-height`. The plate's inline padding comes off its column, so a 156px column is not a 156px mark: a 4.4:1 wordmark goes width-bound and lands visibly shorter than the others. Measure its rendered height against them.
- **Don't** rest an interactive underline on a hairline token. On the field the affordance rests at `field-soft`, not `field-rule` — on touch the flip never fires, so that underline is the only resting evidence the row is live.
- **Don't** reintroduce carousel machinery — a track, arrows, a counter, a notion of an active item — for three projects. All three fit on the column at once, and the reader is comparing, not advancing.
- **Don't** give a label, button, or nav item a fixed px width; Norwegian is the longer locale and it is canonical.
- **Don't** collapse the mobile header into a hamburger drawer; it wraps to a second full-width row at 720px by design.
- **Don't** let type cross the column line. A ground may bleed, and two images do; a heading, a label or a paragraph never does.
- **Don't** compute a bleed from `vw`. `100vw` includes the scrollbar and buys a horizontal scroll on the whole page; derive it from `--column-inset`, which is a percentage.
- **Don't** add a second photograph of Eric. One is evidence in the talks region; two make the first one decoration, and this system has no decoration.
