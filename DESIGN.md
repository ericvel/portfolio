---
name: Eric Veliyulin — Frontend Specialist Portfolio
description: Warm paper, one green field, one signal orange — a hiring buyer's sixty-second scan answered by type, interval and one row that shows its work, with no card, no carousel and one line per row division.
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
    height: "56px"
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
    padding: "24px 24px"
  project-row-hover:
    backgroundColor: "color-mix(in srgb, {colors.paper} 4%, {colors.field})"
    textColor: "{colors.paper}"
    boxShadow: "inset 0 -1px 0 {colors.paper}"
  project-row-lead:
    backgroundColor: "transparent"
    textColor: "{colors.paper}"
    typography: "{typography.title}"
    rounded: "{rounded.none}"
    padding: "48px 24px"
  project-row-meta:
    backgroundColor: "transparent"
    textColor: "{colors.field-soft}"
    typography: "{typography.mono}"
    rounded: "{rounded.none}"
  talk-photo:
    backgroundColor: "{colors.paper-deep}"
    rounded: "{rounded.none}"
    border: "1px solid {colors.rule}"
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

Colour does the structural work that cards usually do. Three grounds exist and each one owns a whole region: warm paper is the default, a deep green field owns the projects region edge to edge, and ink closes the page under the footer. A region change is the section break — there are no dividers between grounds and no containers floating on top of them. Inside the green field, a project row never claims a new ground: pointing at it mixes 4% paper into the field, raises its secondary ink and draws one inset paper edge. One saturated orange is reserved for actions and never spends itself on decoration.

Density is generous between regions and deliberately uneven inside the projects region: 96px between major sections and up to 96px around the projects region, but 48px inside the lead project against 24px inside each corroborating one. The lead spans the measure as a block of claim and visual evidence; Mitt Røde Kors and Habiit then share an equal two-column row, echoing the featured-plus-pair rhythm of the talks section. Each supporting project starts beneath its own hairline and reads vertically as title, claim, metadata, technologies and action. At narrow widths the pair stacks in source order. The confirmed rejections are the dark developer-portfolio default (there is no dark mode and no dark ground except the deliberate ink footer), cards-as-structure (there is no card at rest anywhere in the system), and faded text as an emphasis device (see The Never-Fade Rule).

**Key Characteristics:**

- One unbroken left column edge, `--measure` 1240px wide inside a fluid `--gutter`, shared by every section — the projects region's ground runs to the viewport edges, but its heading, its rules and each row's first register all start on the column
- The hero answers fit before asking for contact: title, freelance role and lede name both capability and engagement format before a full-width two-cell proof rail names ASKO, Røde Kors and NDC London 2026, then the inquiry row
- Three region grounds — paper, green field, ink — each flipping text colour with it
- One lead project that argues and two equal columns that corroborate — the lead owns the full measure and the only screenshot; the supporting pair is text-only
- A project entry is one vertical register: title and claim, quiet metadata, one readable technology line, then its action
- The supporting pair uses the same 64px column rhythm and individual top hairlines as the talks pair, then collapses without reordering
- Exactly one photograph of the person on the site, contained beside the featured talk inside the shared column
- Zero border-radius anywhere; one elevation shadow under the dropdown, plus one inset project-row edge that carries no depth
- Two self-hosted families, no runtime third-party font requests
- Signal orange as fill or rule only, never as text
- Emphasis by a restrained ground-and-ink lift; nothing is faded through `opacity`
- Focus rings invert per region so the indicator is always visible
- Every measure sized for Norwegian, the longer of the two locales

## Colors

A warm, paper-based palette with exactly one chromatic region and exactly one accent; nothing in the system is a neutral gray.

### Primary

- **Signal Orange** (`signal`): The action colour, and only the action colour. It fills the hero email button, the footer address button and the skip link; it draws the 2px underline beneath inline affordances on paper and beneath the next-project name at the foot of a project page; it is the focus ring on the ink footer and the `::selection` ground. Ink sits on it at 4.8:1, which is why it can be this saturated — the orange is always the ground, never the text. The projects field is the one region where an inline affordance uses field mist at rest and paper when active instead.
- **Signal Deep** (`signal-deep`): The pressed-down hover state of a signal-filled button on paper, paired with paper text.

### Secondary

- **Deep Green Field** (`field`): Owns the projects region at page scale, full-bleed edge to edge. It is a region ground, never a component fill, never a text colour, never a border on paper.
- **Field Mist** (`field-soft`): Secondary text on the field — project blurbs, dates, roles and captions in the ledger, at 6.2:1.
- **Field Hairline** (`field-rule`): The 1px line on the field, used as the top edge of each supporting project. It does not outline a technology or edge a screenshot. It is not the resting underline of a row's affordance either: that is `field-soft`, because it is evidence of interactivity rather than a division, and it is all a touch reader gets.

### Neutral

- **Warm Paper** (`paper`): The default page ground, the header ground, the dropdown ground, and the text colour on both the field and the ink footer. A project row may mix 4% of it into the field for its active state, but never becomes a paper ground. Never pure white.
- **Deep Paper** (`paper-deep`): The one-step-back tint. It is the hover ground of a dropdown item and an inactive locale button, and the placeholder ground behind a loading image.
- **Muted Paper** (`paper-soft`): Secondary text on the ink footer at 7.1:1 — warm-tinted so it never reads as gray.
- **Ink** (`ink`): Primary text on paper, the footer ground, the active locale button ground, the text colour on every signal fill, and the 2px structural rule above a section-defining element.
- **Soft Ink** (`ink-soft`): All secondary text on paper — ledes, blurbs, body paragraphs, mono labels, captions, resting nav links. 6.8:1 on paper.
- **Hairline** (`rule`): The default 1px divider on paper: header underline, the hero proof rail's mobile cell separator, image borders, list separators.
- **Strong Hairline** (`rule-strong`): The 1px border that reads as an edge rather than a division — technology tags, the locale toggle frame, the dropdown border, the secondary-talk top rule, quiet link underlines.
- **Ink Hairline** (`ink-rule`): The underline beneath quiet links on the ink footer.

### Named Rules

**The Region Owns the Ground Rule.** A ground belongs to a whole region, not to a component. Paper is the default; the projects section owns the field; the footer owns ink. Setting a region ground means setting its text colour in the same rule. Components do not claim a competing ground: the project-row state stays recognizably field.

**The Signal-Never-Text Rule.** Signal orange is only ever a fill, a 2px rule, or an outline. There is no `color: var(--signal)` in the system and there must not be one — as text it fails on every ground the site has. Signal never appears on the green field in any form. A project-row affordance brightens from field mist to paper instead.

**The Inverting Focus Rule.** `--focus` is a token, and every region that changes its ground reassigns it: paper uses ink, `.work` uses paper, `.footer` uses signal, and the active locale button uses paper against its own ink fill. A project row keeps the field's paper ring because its 4% lift never leaves the field. Any new region with a non-paper ground must set `--focus` in the same rule that sets `background`. WCAG 2.2 AA is a hard product requirement.

## Typography

**Display Font:** Cabinet Grotesk (weights 400 / 500 / 800, self-hosted woff2, ITF Free License), falling back to `ui-sans-serif, system-ui, sans-serif`
**Body Font:** Cabinet Grotesk — the same family; there is no separate body face
**Label/Mono Font:** Martian Mono (variable 300–700, latin subset, SIL OFL 1.1), falling back to `ui-monospace, SFMono-Regular, Menlo, monospace`

**Character:** A tight, slightly condensed grotesk carrying the whole voice, cut with a wide-eyed engineering mono that never speaks — it only labels and counts. Display sizes are set hard and negative-tracked so a name at 5.5rem still reads as one object; everything below body size in mono is positive-tracked and uppercase so short strings hold their shape.

### Hierarchy

- **Display** (800, `--step-6`, 0.94, -0.035em): The name in the hero and the project title on a detail page. Once per page, capped at 17ch, `text-wrap: balance`.
- **Headline** (800, `--step-5`, 1, -0.03em): The closing call in the footer, capped at 16ch. The same step is also used at weight 500 with line-height 1.05 for the featured talk title — the only place headline scale appears without display weight.
- **Title** (500, `--step-4`, -0.025em): Section headings ("Utvalgt arbeid", "Foredrag").
- **Subtitle** (500, `--step-3`, 1.1, -0.02em): The next-project name at the foot of a project page. A corroborating project row's title takes the same weight, line-height and tracking one step down at `--step-2`, which is what lets the row be a line; the lead row's title goes up to `--step-4`.
- **Lede** (400, `--step-2`, 1.4, `--ink-soft`): The hero lede at 44ch and the lead project row's blurb at 40ch. Also the size of the footer's email button label.
- **Body** (400, `--step-0`, 1.5): Project blurbs, talk descriptions, button labels, quiet links. Long-form project paragraphs step up to `--step-1` at 1.6 and 68ch.
- **Small** (400 / 500, `--step--1`): Nav links, dropdown items, inline "read more" affordances, image captions, the back link.
- **Mono label** (400, `--step--2`, 0.02em base, 0.05–0.06em when uppercase): Talk venues and durations, field labels, locale codes, and technology chips on paper. Buyer-critical technology names in the project ledger step up once to `--step--1`.

Measures in use, all set in `ch` so they track the font: 44ch hero lede, 58ch corroborating project blurb against 40ch on the lead row — the wider measure is on the shorter row, because a narrow one there is what left a column of nothing to its right — 42ch featured talk description, 46ch talk description and footer lede, 54ch talks lede, 56ch figure caption, 68ch project paragraph. Headline wraps are constrained by `ch` too (16ch, 17ch, 22ch) with `text-wrap: balance` on titles and `text-wrap: pretty` on prose — the featured talk title takes the 16ch cap, which is what breaks it to two lines beside the photograph.

### Named Rules

**The Mono-Is-Measurement Rule.** Martian Mono appears only where something is counted, named as a technology, timed, or located — tech tags, "60 MIN", "NDC London 2026", "NO"/"EN". It is never a costume for "technical", never a body face, and never a heading. Everything mono goes through the shared `.mono` primitive at `--step--2`; the project ledger's buyer-critical technology line is the single `--step--1` exception.

**The Three Weights Rule.** 400 for prose, 500 for anything titled or interactive, 800 for display only. There is no 600, no italic, and no synthetic bolding — only three real files ship.

**The Self-Hosted Rule.** Both families are self-hosted woff2 in `src/assets/fonts/` with `font-display: swap`. No `@import`, no Google Fonts, no runtime request to a third party. Note the Martian Mono subset is latin only; æ ø å resolve inside U+00E0–U+00FF, so Norwegian mono strings are safe but anything beyond latin-1 is not.

## Layout

Everything hangs off one primitive. `.shell` is `width: 100%; max-width: var(--measure) (1240px); margin-inline: auto; padding-inline: var(--gutter)`, where `--gutter` is `clamp(20px, 5vw, 64px)`. Every section — header, hero, talks, footer, project detail — wraps its content in `.shell`, so the text column's left edge is the same x-coordinate down the entire page.

The projects region is the one place where a ground breaks the column, and only the ground: the field runs to the viewport edges while the section heading and lead project start on the shared column line. The supporting pair establishes a subordinate two-column grid within the same measure, as the talks pair does below it. Every hovered or focused project extends its 4% field lift 24px beyond its content track on both sides. The supporting pair's 64px content gap therefore leaves 16px between active bands without overlap. At mobile widths every stacked row extends to the gutter. These extensions carry no content.

Sections are separated by vertical rhythm, not by dividers: `--space-9` (96px) padding-block on the talks and footer regions, `clamp(--space-8, 8vw, --space-9)` on the projects region; the hero uses `clamp(--space-7, 7vw, --space-9)` above its title and `--space-8` below its contact row so the green project field enters the fold. Inside a region, 64px separates the two halves of a grid, the supporting project pair and the lead project's two registers. Supporting projects use 24px padding-block; 16px/12px/8px handle label-to-value spacing.

The projects region runs on two row rhythms: `--row-pad` (48px, `--space-6` below 560px) is the lead project's padding-block; each supporting project uses `--space-5` (24px). A new row type picks one of the two; it does not invent a third number.

Grids are two-column asymmetric and collapse to one:

- Hero proof rail: `repeat(2, minmax(0, 1fr))` — equal Production and Expertise cells across the full column, stacking to one column at 560px with a horizontal separator
- Project detail head: `minmax(0, 1fr) minmax(0, 340px)` — title+blurb beside the facts rail — collapsing at 900px
- Featured talk: `minmax(0, 0.85fr) minmax(0, 1fr)` — type beside a contained photograph inside `.shell`, collapsing at 860px
- Footer: `minmax(0, 1fr) minmax(0, auto)`, bottom-aligned — collapsing at 860px
- Supporting projects: `repeat(auto-fit, minmax(min(100%, 340px), 1fr))` with a 64px gap — two equal text columns that collapse intrinsically before either becomes cramped
- Lead project row: `minmax(0, 1fr) minmax(0, 0.8fr)` — the entry beside its screenshot — collapsing to one column at 1024px with the screenshot ordered last
- Auto-fit grids for repeating content: talks at `minmax(300px, 1fr)`, project paragraphs at `minmax(340px, 1fr)`, and multi-image project figures at `minmax(360px, 1fr)`. A lone project figure uses a centered 12-column composition with 12px gutters instead: landscape UI spans ten columns, while the near-square Habiit phone composition spans six. Both widen progressively below 900px and use the full available width on small screens.

Breakpoints are max-width and there are five: 1024px (the lead project row goes to one column with its screenshot last), 900px (the project detail head and pager collapse to one column), 860px (the featured talk goes to one column with its contained photograph ordered last, and the footer collapses), 720px (the header stops sticking and its nav wraps to a full-width row), 560px (the hero proof rail stacks with a horizontal separator and its signal action becomes full-width; stacked project rows widen their active bands to the gutter so they run exactly edge to edge). The supporting project pair collapses intrinsically when two 340px tracks plus their 64px gap no longer fit.

**The Unbroken Column Rule.** A new surface uses `.shell` or reproduces its exact inner edge. Nothing on this site sets its own max-width in px, and no section indents its content past the shared gutter. Every section heading and featured entry starts on that line; repeating two-column groups establish one subordinate start edge for their second item. Nothing is centred rather than ranged.

Every project row's interactive band extends 24px beyond its content track on desktop while its content stays on the grid line. Paired supporting bands retain 16px of visible separation. At 560px and below every stacked band widens to the gutter and reaches the viewport edges. No type or image crosses the column.

**The Norwegian-First Measure Rule.** Norwegian is canonical and is the longer of the two locales. Every measure is set in `ch` and every heading wrap in `ch` with `text-wrap: balance`; no label, button or nav item is given a fixed px width. New surfaces get checked in Norwegian first — if it fits in `no`, it fits in `en`.

## Elevation & Depth

The system is flat by construction. There is exactly one elevation shadow: `0 14px 30px -14px rgb(23 24 26 / 26%)` under the header's projects dropdown, where an overlay genuinely floats above the page and needs to be read as detached. A project row uses `box-shadow: inset 0 -1px 0 var(--paper)` only to draw its active bottom edge without shifting layout; it carries no elevation. Nothing else — no card, no button, no image, no region — has a shadow at rest or on hover.

Depth is instead carried by three devices: a change of regional ground (paper → deep paper → field → ink), a hairline (1px `rule` for a division, 1px `rule-strong` for an edge, 2px `ink` for a structural break above a section-defining element), and a 2px `translateY` lift on the primary buttons that returns to 0 on `:active`. The projects region stays flat: a row answers hover and focus with a 4% field lift, brighter secondary ink and one inset edge — nothing rises above the field.

### Shadow Vocabulary

- **Overlay** (`box-shadow: 0 14px 30px -14px rgb(23 24 26 / 26%)`): The header dropdown only. Warm-tinted from ink rather than black, and offset downward with a negative spread so it reads as a lifted sheet, not a glow.
- **Inset edge** (`box-shadow: inset 0 -1px 0 var(--paper)`): The active project row only. It is a hairline implementation, not elevation; inset drawing avoids moving the row when the edge appears.

### Named Rules

**The One Elevation Shadow Rule.** An elevation shadow exists only where an element overlays content it did not push out of the way. If a new element is in normal flow, it gets a hairline or a ground change — not an elevation shadow. An inset `box-shadow` may implement a zero-displacement rule, but it must not imply depth.

**The Never-Fade Rule.** No text and no control label ever carries `opacity`, at any state. Faded text drops below the contrast floor, and a site whose central claim is WCAG 2.2 AA cannot fade evidence for effect. There is no `opacity` declaration left anywhere in the system, and a new use of it on anything readable is a defect. The project row instead transitions its secondary text from field mist toward paper while a 4% ground lift preserves contrast throughout.

## Shapes

Every corner in the system is square. There is no `border-radius` declaration anywhere in the source, and the reset explicitly zeroes it on form controls, so buttons, cards, tags, images and the dropdown all share one silhouette: a rectangle, cut flush.

Form language is drawn with lines rather than boxes:

- **1px `rule`** — divisions inside a region: the header underline, the hero proof rail's mobile cell separator, a figure's border, list separators
- **1px `rule-strong`** — the perimeter of a small object on paper, plus the hero proof rail's hairlines at its block edges while its inline edges stay open: technology tags, the locale toggle, the dropdown, the secondary-talk top rule
- **1px `field-rule`** — one resting job on the field: the top edge of each supporting project. A row's resting affordance underline is `field-soft`, not this; its active bottom edge is an inset paper rule
- **2px `ink`** — the structural break above something that behaves like a section of its own: the featured talk, the project pager, the project head's bottom edge
- **2px `signal`** — the underline that marks an inline affordance ("Se foredraget", "Les mer"), sitting 3px below the baseline
- **Animated rule** — a `linear-gradient` background drawn at `background-size: 100% 1px` and grown to 2px or 8px on hover, so a thickening underline never moves its label. Used by the header's contact link and by a project row's affordance, and the required idiom for any underline that changes weight

The only non-rectangular mark is the 9px signal square beside the hero role line, drawn as an element rather than a glyph. Screenshots live on the project pages, clipped to their real per-image `aspect-ratio`; the lead project carries the one screenshot permitted in the home-page projects region. Supporting projects are text-only so their evidence compares without logo plates competing with titles. The talks photograph is the one image that is not a screenshot, and it is contained with a 1px `rule` border on all four sides so it reads as evidence placed on the paper rather than as a page bleed. Icons are strokes in a 16-unit box; there are no filled shapes.

## Components

### Buttons

- **Shape:** Square, always (0 radius). No borders on filled actions.
- **Primary action** (`.action`, `.footer__mail`): Signal ground with ink text, `16px 32px` padding, 56px minimum height, weight 500, inline-flex with a 12px gap before an optional arrow icon. The hero uses the localized freelance-inquiry label; the footer uses the address itself. On paper it hovers to signal-deep with paper text; on the ink footer it hovers to paper with ink text — in both cases the ground changes and the text follows it. Both lift `translateY(-2px)` on hover and settle to 0 on `:active`, over 180ms. **There are exactly two of these on any page**, the hero's and the footer's, and only the home page carries both.
- **Focus:** No component defines its own ring except where inversion demands it. The global `:focus-visible` draws `2px solid var(--focus)` at `3px` offset, and `--focus` is whatever the region or state set.
- **Quiet link** (`.quiet`, `.footer__link`, `.work__more`): No fill. Text over a 1px hairline drawn as a background underline so the label never shifts; it goes to full contrast on hover. Hero email, GitHub and LinkedIn links are at least 44px high. In the projects region the underline thickens from 1px field mist to 2px paper while the row stays on the field.
- **Icon buttons:** None. The site has no icon-only control; every icon sits beside a real text label.

### Chips / Tags

- **Style:** Mono at `--step--2`, `6px 12px` padding, 1px `rule-strong` border, no fill, square. Ink text on paper in the project detail and project pager, where the border is what makes a technology name read as an object on a ground that has no other structure. The hero has no technology tags; it presents named production and public expertise in its proof rail instead.
- **On the field there is no chip.** In the projects region the technologies are bare mono words in the row's primary ink at `--step--1`, spaced 12px apart on their own evidence line. Twelve hairline rectangles were the densest ink in a region whose whole job is to be scanned, and a technology name was never a chip: it is content, and it reads as a list without being boxed into one.
- **State:** Static. Technology tags are content, not filters — they have no hover of their own, no selected state, and never become links.

### Cards / Containers

**There is no card in this system at rest or in motion.** A project row remains part of the field while hovered or focused: its ground lifts by 4%, its secondary ink brightens, and an inset edge appears. Nothing is boxed in order to be grouped — grouping is done by interval and hairlines.

Before adding a container, check whether the content needs a hairline for grouping or a restrained state lift for interaction. If neither fits, the content does not need a box.

### Inputs / Fields

None. The site has no forms, no inputs, and no backend; the only conversion is a `mailto:` link. Do not introduce an input pattern speculatively — if a field is ever genuinely needed, derive it from the technology tag (square, 1px `rule-strong`, mono where it holds a measured value) rather than importing a component library.

### Navigation

- **Style:** Sticky desktop header on paper with a 1px `rule` bottom edge, `68px` min-height, wordmark left at `--step-1` / 500, nav right at `--step--1`. The wordmark, every nav link, the contact link and each locale option provide at least 44px of interaction height.
- **States:** Links rest in soft ink and hover to ink over 160ms. The one persistent action, the contact link, is full ink at weight 500 with a growing signal underline instead of a colour change — the target never shifts.
- **Dropdown:** Opens on hover, click, and focus; closes on outside pointer-down, focus-out, and document-level Escape (Escape returns focus to the trigger only when focus was already inside). Panel is paper with a 1px `rule-strong` border and the system's single shadow; items are `12px 24px` and hover to deep paper. The caret rotates 180° over 200ms.
- **Mobile (≤720px):** The header becomes static and wraps rather than collapsing into a drawer — the full navigation remains at page start in a second row, but does not consume reading space throughout the page. There is no hamburger and no overlay menu.
- **Language toggle:** Two mono buttons inside a single 1px `rule-strong` frame, no gap. Inactive is transparent with soft ink and hovers to deep paper; active is an ink fill with paper text, `aria-pressed`, and a locally inverted `--focus` drawn inset at `-3px` offset so the ring stays inside the fill.
- **Skip link:** Signal fill, ink text, parked at `translateY(-250%)` and dropping to 0 on focus over 180ms at the gutter's left edge.

### Hero & Proof Rail (signature)

The opening is a buyer's sixty-second scan in one downward sequence: display title, mono freelance role, 44ch lede, full-width proof rail, then contact. Evidence arrives before conversion, and the green projects field follows closely enough to break at the desktop fold.

- **Interval:** The region uses `clamp(--space-7, 7vw, --space-9)` above the title and `--space-8` below the contact row. Role follows the title by `--space-6`; lede follows by `--space-8`; rail follows by `--space-7`; contact follows by `--space-5`.
- **Proof rail:** A semantic `dl` with two equal cells and no side perimeter. `rule-strong` hairlines run across its block start and end; the second cell gets the single vertical separator. Labels are mono uppercase Production / Expertise; values are ASKO · Røde Kors and NDC London 2026 at subtitle scale. This is named evidence, not a technology inventory, and the hero does not derive content from project data.
- **Contact row:** A 56px signal-filled, localized freelance-inquiry link comes first. The visible mono `mailto:` address remains selectable as the fallback, followed by quiet GitHub and LinkedIn links. Every quiet link is at least 44px high and carries a standing 1px `rule-strong` background underline so touch readers do not depend on hover.
- **Mobile (≤560px):** The proof rail becomes one column, replaces the vertical divider with a horizontal `rule` separator, and reduces the value scale by one step. The primary inquiry becomes full-width; email and social links remain visible beneath it rather than becoming an icon row or hidden action menu.

### Project Ledger (signature)

The one region that owns a colour at page scale, and the one place with a meaningful state change. All three projects are present at once, and one of them argues while the other two corroborate.

- **Ground:** Field, full-bleed, `clamp(64px, 8vw, 96px)` padding-block, `--focus` reassigned to paper. The field stays generous enough to establish a region while keeping its evidence visible as one composition.
- **Structure:** A `ul` with an explicit `role="list"` becomes an auto-fit grid. The lead item spans `1 / -1`; the two supporting items occupy equal tracks with a 64px gap and their own `1px field-rule` top edges. The section carries `aria-labelledby` pointing at its own `h2`, so it is a named landmark. There is no counter, arrows, or notion of an active item — all three projects remain visible at once.
- **Row:** One `RouterLink` per project and one vertical entry per link. Supporting projects use 24px padding-block and the same 24px inline bleed as the lead. Their 64px content gap leaves 16px between the expanded state bands. The title is a real `h3`, and the link's `aria-label` carries the project name plus the action.
- **The entry.** Title at `--step-2`, blurb at 58ch, a quiet meta line, a readable technology line, then the affordance. Everything the reader needs is read downward in one place.
- **Why a pair rather than a ledger.** Mitt Røde Kors and Habiit are equal corroborating evidence. Sharing one row makes that relationship visible, removes the empty logo register, and repeats the supporting-talk topology already learned farther down the page. Equal columns compare without becoming cards because field ground, interval and hairlines still do the grouping.
- **The meta line.** Period in mono, a decorative `·`, then the role. Both are supporting context in `--row-secondary`; the bare year keeps its `.visually-hidden` "Periode" label so a screen reader hears a fact rather than a loose number, and the separator is `aria-hidden` because the parts are separate elements.
- **The stack.** Every row places its stack on the next line at `--step--1`, one step larger and in primary field ink because stack match is decision evidence rather than footnote metadata. It remains a `ul role="list"` with an `aria-label` naming it — bare technology words read as a sentence otherwise. The words stay unboxed (see Chips / Tags).
- **Why one register rather than four.** An earlier four-column ledger assumed a reader would compare one shared stack column. Three projects with different stacks gave that column little to compare, while its hairlines and chips competed with the sixty-second scan. Keeping every project's facts and stack in one vertical entry makes each column self-contained.
- **The quiet lift.** On `:hover` and `:focus-visible` the row stays on the field. Its background becomes `color-mix(in srgb, var(--paper) 4%, var(--field))`, `--row-secondary` moves from field mist toward paper, `--row-affordance` becomes paper, and an inset paper edge closes the band. Primary ink remains paper throughout. Pointing at a row therefore makes it easier to read rather than differently coloured.
- **Why 4%.** A full paper inversion made the lead row's much larger area produce the loudest flash, so hierarchy determined interaction weight. A 4% lift is visible on both row sizes, preserves the field as the region's ground, and keeps the secondary text at roughly its resting 6.2:1 contrast while still increasing emphasis.
- **One answer clock.** Background, secondary ink, affordance colour, underline weight, inset edge and arrow all read `--answer` through the same `cubic-bezier(0.16, 1, 0.3, 1)` curve. Arrival is 140ms because the reader is waiting for it; departure is 190ms so the state settles without snapping. One inherited clock keeps the response from assembling in pieces.
- **The band.** Every row's active ground extends `24px` past its content track on both sides (`padding-inline: var(--space-5)` against a matching negative margin). The two supporting bands consume 48px of their 64px content gap without touching. At 560px and below every stacked row widens its band to the gutter and runs exactly edge to edge. The lift carries no content beyond the grid line.
- **The field affordance.** The affordance rests as a 1px `field-soft` underline and becomes a 2px paper underline. Signal never touches the field. Field mist rather than `field-rule` is the resting colour because this line is evidence of interactivity, not a divider, and on touch it is the only standing cue that the row is live. Both weights are drawn as a `linear-gradient` background grown by `background-size`, so the label never moves. The arrow nudges 3px right on hover **and on focus**.
- **The registered colour.** `--row-affordance` is registered with `@property` as a `<color>` so field mist can interpolate to paper on the same clock as the rest of the state instead of snapping at t=0. It is the only registered custom property in the system.
- **Focus:** The whole row is one link, and tabbing produces the same quiet lift as hovering plus the field's paper focus ring. At 560px and below the row is as wide as the viewport, so the ring uses `outline-offset: -3px` — an outset ring there would draw its vertical sides off-screen.
- **The lead row.** Exactly one project sets `lead` in the data, and that row is the argument the other two corroborate. It spends its right-hand column on one screenshot at the image's real `aspect-ratio`, with a mono caption, on a `minmax(0, 1fr) minmax(0, 0.8fr)` split with a 64px column gap and `48px` padding-block; the title steps up to `--step-4`, the blurb to `--step-2` at 40ch, and the affordance sits 24px under the technology line. Below 1024px the row collapses to one column with the screenshot ordered last, so the reader reaches the claim and the stack before the evidence.
- **Why the lead row is not just a bigger row.** It is bigger, by roughly 3:1, but scale is the second half of the trade rather than the whole of it. Emphasis by scale alone reads as "that one happens to have more text". A permanent highlight would spend the row's one device for saying _this is the one you are pointing at_ and cannot also mean _this is the important one_. Giving the lead row a second content type is the only emphasis that does not borrow from something already in use.
- **The screenshot exception.** Screenshots are otherwise the project page's evidence, not the ledger's. The lead row is the single licensed exception, and it stays single: a second screenshot in this region turns the ledger back into a list of cards and takes the lead row's emphasis with it. A screenshot here runs at its real ratio on a `paper-deep` ground so a slow image reads as loading rather than as an empty rectangle — and with no border of its own, because the image's own edge against the field is already the division.
- **The affordance is a flex child now.** "Se prosjektet" sits inside the entry rather than in a facts column, so it carries `align-self: start`. Stretched to the column it would drag its underline — the one resting cue that the row is live — across the full width of the row.
- **Reduced motion:** The global reduced-motion block clamps transitions to 0.01ms and delays to 0. The row's lift still happens, instantly and in one piece, because it is interaction feedback rather than embellishment.

### Talks Block

Evidence ranked by rule weight rather than by card, and the one region on the site that shows the person rather than the work.

- **Structure.** The heading, lede, featured talk and two lesser talks all sit inside one `.shell`. The featured talk is a `0.85fr / 1fr` grid, with type and photograph ending on the same far column edge. The lesser talks follow below on 1px `rule-strong` tops at subtitle scale in an auto-fit `minmax(300px, 1fr)` grid.
- **The 2px ink rule spans the shared content width.** It binds the featured claim and photograph into one evidence block without asking either column to escape the page grid.
- **Type.** Headline scale at weight 500 capped at 16ch (two lines), mono venue line in uppercase, description at 42ch on `--step-1`, and a signal-underlined watch affordance whose arrow travels up-right 2px on hover and on focus.
- **The photograph.** One landscape image of Eric presenting at NDC London, at its real ratio on a `paper-deep` ground, hairlined on all four sides, with a mono caption beneath it. It is evidence beside the claim, not a link; the explicit “Se opptaket” / “Watch the recording” affordance is the only recording link.
- **Why a photograph earns its place here.** Everywhere else the site refuses decoration, and a stock-feeling portrait would be exactly that. This one is evidence of the same kind as a project screenshot: it shows the talk happened, in front of a room, at a named conference whose wordmark is in the frame. It is licensed for this region only — a second photograph of the person anywhere on the site turns the first one into styling.
- **Below 860px** the grid goes to one column and the picture is ordered last so the reader reaches the claim before the proof. It remains inside `.shell` with all four hairlines intact.
- **No talking-points list.** The narrow column used to hold three hairline-separated bullets restating what the description already says. The description carries it alone now; a list there would compete with the photograph for the same register.

### Project Pager

The foot of a project page, and a deliberate refusal of a second conversion. The page used to close on a signal-filled "Get in touch" button under a "Need something similar built?" question — 96px above a footer that asks for the same email in bigger type, with the same orange button. Two asks that close together do not double the pull; the first one spends the footer's surprise, and the reader has to decide twice about the same thing. The footer is the site's one email action and it is on this page already.

- **What replaces it.** A `<nav>` holding one link to the next project in ledger order, wrapping from the last back to the first, so no project page is a dead end.
- **Interval.** `clamp(--space-9, 9vw, --space-10)` above the rule against `--space-8` below the pager — the widest gap on the page, roughly twice the one under it. Equal intervals on both sides made the pager read as one more section of the project it closes; the asymmetry is what binds it to the page's exit instead.
- **Structure.** The same 2px `ink` rule and the same `minmax(0, 1fr) minmax(0, 340px)` split as the project head, collapsing at the same 900px — the surface opens and closes on one structure, and the next project's stack lands in the column where this project's stack was read.
- **Type.** A small `--step--1` `ink-soft` label, the project name at subtitle scale (500, `--step-3`), and the full technology list as hairline mono chips. No kicker, no "onwards" copy, no restating what the page just said.
- **State.** The name carries a resting 2px signal underline that grows to 6px, the arrow travels 3px right, and the chips go from `rule-strong`/`ink-soft` to `ink` — one hover, three registers responding, nothing moving. The rest state matters more than the hover here: on touch the hover never fires, so the underline is the only standing evidence the name is a link.
- **Why the stack repeats here.** The reader arrives at this rule deciding whether one more project is worth the scroll, and stack match is what that decision is made of. It is the same information the ledger row gave them, in the same mono register, which is the point — it answers the question without a second page load.

### Icons

One set, defined entirely in `AppIcon.vue`: `arrow-right`, `arrow-left`, `arrow-up-right`, `chevron-down`. All four are single paths in a 16-unit viewBox, `stroke-width: 1.5`, `fill: none`, `stroke: currentColor`, rendered at 16px, `aria-hidden` and `focusable="false"` — always decorative, with the adjacent label carrying the meaning. A shared `translateY(-0.5px)` optically aligns them to cap height. Icons animate only as a directional hint on the parent's hover (3px right for `arrow-right`, 2px up-right for `arrow-up-right`), never on their own.

### Motion

Two easing families and a short duration ladder. `ease` handles small colour changes at 140–200ms. `cubic-bezier(0.16, 1, 0.3, 1)` handles anything that moves, grows, or answers a pointer: 180ms button lift, 200ms caret, 220ms talk-link icon nudge, and the project row's 140ms arrival / 190ms departure. `prefers-reduced-motion: reduce` clamps all animation and transition durations to 0.01ms **and all transition delays to 0**, and turns off `scroll-behavior: smooth`. There is no JavaScript-driven motion anywhere on the site.

**The Area-Proportional State Rule.** A state treatment's visual weight scales with the area it changes. A full inversion made the lead row shout more loudly than a corroborating line, even though both interactions meant the same thing. Large bands therefore change ground only slightly: the project row mixes 4% paper into field and lets ink, rule weight and the arrow carry the response. Small controls may make stronger colour changes because their area keeps them local.

**The One Answer Clock Rule.** A compound state answers as one gesture. The project row inherits `--answer` and `--ease-row` into its background, secondary ink, inset edge, affordance colour, underline weight and arrow. Arrival is faster than departure, but parts within either direction do not keep separate clocks or delays. A reader sees one response, not an effect assembling itself.

## Do's and Don'ts

### Do:

- **Do** wrap every new section's content in `.shell`; only a non-content state band may extend into the gutter.
- **Do** set `--focus` in the same rule where you establish a region ground — paper uses ink, field uses paper and ink uses signal. A project-row state stays on the field and inherits its paper ring.
- **Do** reach for a hairline (1px `rule`, `rule-strong`, or `field-rule`) or a 2px ink rule where you are tempted to draw a box — and on the field, check first whether interval alone will separate the two things, because that region has one line and spends it on row divisions.
- **Do** keep signal orange as a ground under ink text, a 2px underline, or a focus outline — and only on paper.
- **Do** use `.mono` only for measured values — technologies, durations, venues, locale codes — at `--step--2`, except the ledger's buyer-critical technology line at `--step--1`.
- **Do** size every measure and heading wrap in `ch`, and check the surface in Norwegian first.
- **Do** distinguish one row from its siblings with a restrained ground-and-ink lift, and pass the state to nested text through inherited variables rather than restating each colour.
- **Do** keep a compound state on one inherited answer clock; 140ms in and 190ms out on the interaction curve are the project row's established figures.
- **Do** register a custom colour with `@property` when it must interpolate on that shared clock rather than snap.
- **Do** grow a changing underline with `background-size` on a `linear-gradient`, so the label it belongs to never moves.
- **Do** add new icons as single 1.5-stroke paths in the same 16-unit box in `AppIcon.vue`, `aria-hidden`, with a real text label beside them.
- **Do** add every new string to both `src/locales/no.ts` and `src/locales/en.ts`.
- **Do** ship a photograph as an optimized JPEG cut to the ratio it renders at, with `width`/`height` on the element and `loading="lazy"`.

### Don't:

- **Don't** add a `border-radius`. Every corner in this system is square.
- **Don't** add an elevation `box-shadow` to anything in normal flow — the dropdown overlay owns the only elevation shadow. An inset shadow may draw a zero-displacement rule, as the project row does.
- **Don't** put `opacity` on anything. There is no `opacity` declaration left in the system, on text or on images; de-emphasis is a cooler ground.
- **Don't** write `color: var(--signal)`. Signal is a fill, a rule, or an outline; as text it fails on every ground here.
- **Don't** put signal orange on the green field in any form. Project-row affordances move from field mist to paper, never to signal.
- **Don't** invert a project row to paper or reprint its type in ink. The field remains the ground; a 4% lift is the maximum established change.
- **Don't** give the parts of one project-row response separate clocks or delays. Background, ink, edge, underline and arrow answer together.
- **Don't** introduce a third accent, a gray, or a dark mode. There are three grounds and one accent.
- **Don't** use mono as a "technical" costume for headings, prose, or button labels.
- **Don't** add a fourth font weight, an italic, or a second sans; three Cabinet Grotesk files and one variable mono are what ships.
- **Don't** load a font, icon set, or stylesheet from a third-party host at runtime.
- **Don't** wrap content in a card. There is no card in this system — grouping is interval and hairlines, and every project row stays on the field.
- **Don't** put a screenshot in a project row other than the lead row. The lead row is the one licensed exception and it stays one; the supporting pair remains text-only so it compares without becoming two cards.
- **Don't** put a border around anything inside the projects region: not a technology, screenshot, set of facts, or whole project. Resting structure uses only the top hairline on each supporting item; the active row may add its documented inset paper edge.
- **Don't** add a closing rule beneath the supporting pair. The field's own edge says where the region ends.
- **Don't** give the ledger a third column or visual register. Period, role and the separate technology line all belong inside the entry; a new fact goes into that entry or it does not go into this region.
- **Don't** split a supporting project into internal columns. Its grid track is already its horizontal allocation; title, claim, metadata, stack and action remain one vertical reading path.
- **Don't** set a corroborating row at the lead row's numbers. There are two row rhythms and two title steps, and closing the gap between them removes the hierarchy that lets a buyer see which project is the argument.
- **Don't** add project logos back to the home-page region. Names carry identity; the lead screenshot and supporting copy carry evidence.
- **Don't** rest an interactive underline on a hairline token. On the field the affordance rests at `field-soft`, not `field-rule` — on touch the lift never fires, so that underline is the only resting evidence the row is live.
- **Don't** reintroduce carousel machinery — a track, arrows, a counter, a notion of an active item — for three projects. All three fit on the column at once, and the reader is comparing, not advancing.
- **Don't** give a label, button, or nav item a fixed px width; Norwegian is the longer locale and it is canonical.
- **Don't** collapse the mobile header into a hamburger drawer; it becomes static and wraps to a second full-width row at 720px by design.
- **Don't** let type or imagery cross the column line. The project row's active background band may extend into the gutter; its content never follows it.
- **Don't** compute the project-row band from `vw`. Pair container-relative padding with an equal negative margin so the page never gains horizontal scroll.
- **Don't** put a second email action on a page that already ends on the footer. The footer's address button is the site's one conversion, and it closes every page; an ask stacked directly above it competes with the thing it is copying. A surface that feels like it needs a closer gets navigation or evidence there instead — see Project Pager.
- **Don't** add a second photograph of Eric. One is evidence in the talks region; two make the first one decoration, and this system has no decoration.
