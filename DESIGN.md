---
name: Eric Veliyulin — Frontend Specialist Portfolio
description: Warm paper, one green field, one signal orange — a hiring buyer's sixty-second scan answered by type and grid alone.
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
  carousel-arrow:
    backgroundColor: "transparent"
    textColor: "{colors.paper}"
    rounded: "{rounded.none}"
    width: "52px"
    height: "44px"
  carousel-arrow-hover:
    backgroundColor: "{colors.signal}"
    textColor: "{colors.ink}"
  carousel-arrow-disabled:
    backgroundColor: "transparent"
    textColor: "{colors.field-rule}"
  project-card:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "32px"
  project-card-muted:
    backgroundColor: "{colors.paper-deep}"
    textColor: "{colors.ink}"
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

Colour does the structural work that cards usually do. Three grounds exist and each one owns a whole region: warm paper is the default, a deep green field owns the project carousel full-bleed, and ink closes the page under the footer. A region flip is the section break — there are no dividers between grounds and no containers floating on top of them. Inside the green field the project cards flip back to paper, which is the only nesting inversion in the system. One saturated orange is reserved for actions and never spends itself on decoration.

Density is generous but not airy: 96px between major sections, 32px inside a card, hairlines rather than gaps where two things need separating. The confirmed rejections are the dark developer-portfolio default (there is no dark mode and no dark ground except the deliberate ink footer), cards-as-structure (a card exists only where there is a real object to lift onto a different ground), and opacity as an emphasis device (see The Never-Fade Rule).

**Key Characteristics:**

- One unbroken left column edge, `--measure` 1240px wide inside a fluid `--gutter`, shared by every section including the full-bleed carousel track
- Three region grounds — paper, green field, ink — each flipping text colour with it
- Zero border-radius, anywhere; zero shadows except one dropdown
- Two self-hosted families, no runtime third-party font requests
- Signal orange as fill or rule only, never as text
- Emphasis by scale and ground tint, never by opacity
- Focus rings invert per region so the indicator is always visible
- Every measure sized for Norwegian, the longer of the two locales

## Colors

A warm, paper-based palette with exactly one chromatic region and exactly one accent; nothing in the system is a neutral gray.

### Primary

- **Signal Orange** (`signal`): The action colour, and only the action colour. It fills the hero email button, the project CTA button, the footer address button and the skip link; it draws the 2px underline beneath every inline "read more" / "watch" affordance; it is the focus ring on the ink footer and the `::selection` ground. Ink sits on it at 4.8:1, which is why it can be this saturated — the orange is always the ground, never the text.
- **Signal Deep** (`signal-deep`): The pressed-down hover state of a signal-filled button on paper, paired with paper text.

### Secondary

- **Deep Green Field** (`field`): Owns the project carousel region at page scale, full-bleed edge to edge. It is a region ground, never a component fill, never a text colour, never a border on paper.
- **Field Mist** (`field-soft`): Secondary text on the field — currently the carousel counter.
- **Field Hairline** (`field-rule`): The 1px border of the carousel arrows, and their disabled text colour.

### Neutral

- **Warm Paper** (`paper`): The default page ground, the header ground, the dropdown ground, the project card ground, and the text colour on both the field and the ink footer. Never pure white.
- **Deep Paper** (`paper-deep`): The one-step-back tint. It is the ground of a de-emphasised carousel card, the hover ground of a dropdown item and an inactive locale button, and the placeholder ground behind a loading image.
- **Muted Paper** (`paper-soft`): Secondary text on the ink footer at 7.1:1 — warm-tinted so it never reads as gray.
- **Ink** (`ink`): Primary text on paper, the footer ground, the active locale button ground, the text colour on every signal fill, and the 2px structural rule above a section-defining element.
- **Soft Ink** (`ink-soft`): All secondary text on paper — ledes, blurbs, body paragraphs, mono labels, captions, resting nav links. 6.8:1 on paper.
- **Hairline** (`rule`): The default 1px divider: header underline, hero body top rule, card footer rule, image borders, list separators.
- **Strong Hairline** (`rule-strong`): The 1px border that reads as an edge rather than a division — technology tags, the locale toggle frame, the dropdown border, the secondary-talk top rule, quiet link underlines.
- **Ink Hairline** (`ink-rule`): The underline beneath quiet links on the ink footer.

### Named Rules

**The Region Owns the Ground Rule.** A ground belongs to a whole region, not to a component. Paper is the default; the project carousel section owns the field; the footer owns ink. Setting a region ground means setting its text colour in the same rule, and anything nested that needs to sit apart (the project card) inverts all the way back to ink-on-paper rather than half-way.

**The Signal-Never-Text Rule.** Signal orange is only ever a fill, a 2px rule, or an outline. There is no `color: var(--signal)` in the system and there must not be one — as text it fails on every ground the site has. On the green field, signal appears only as the hover fill of an arrow with ink on top; it is never a hairline, a label, or a heading there.

**The Inverting Focus Rule.** `--focus` is a token, and every region that changes its ground reassigns it: paper uses ink, `.work` uses paper, `.footer` uses signal, and the active locale button uses paper against its own ink fill. Any new region with a non-paper ground must set `--focus` in the same rule that sets `background`. WCAG 2.2 AA is a hard product requirement, and an ink ring on an ink ground is not an indicator.

## Typography

**Display Font:** Cabinet Grotesk (weights 400 / 500 / 800, self-hosted woff2, ITF Free License), falling back to `ui-sans-serif, system-ui, sans-serif`
**Body Font:** Cabinet Grotesk — the same family; there is no separate body face
**Label/Mono Font:** Martian Mono (variable 300–700, latin subset, SIL OFL 1.1), falling back to `ui-monospace, SFMono-Regular, Menlo, monospace`

**Character:** A tight, slightly condensed grotesk carrying the whole voice, cut with a wide-eyed engineering mono that never speaks — it only labels and counts. Display sizes are set hard and negative-tracked so a name at 5.5rem still reads as one object; everything below body size in mono is positive-tracked and uppercase so short strings hold their shape.

### Hierarchy

- **Display** (800, `--step-6`, 0.94, -0.035em): The name in the hero and the project title on a detail page. Once per page, capped at 17ch, `text-wrap: balance`.
- **Headline** (800, `--step-5`, 1, -0.03em): The closing call in the footer, capped at 16ch. The same step is also used at weight 500 with line-height 1.05 for the featured talk title — the only place headline scale appears without display weight.
- **Title** (500, `--step-4`, -0.025em): Section headings ("Utvalgt arbeid", "Foredrag").
- **Subtitle** (500, `--step-3`, 1.1, -0.02em): Project card titles and the project-page CTA question.
- **Lede** (400, `--step-2`, 1.4, `--ink-soft`): The hero lede at 44ch and the project blurb at 42ch. Also the size of the footer's email button label.
- **Body** (400, `--step-0`, 1.5): Card blurbs, talk descriptions, button labels, quiet links. Long-form project paragraphs step up to `--step-1` at 1.6 and 68ch.
- **Small** (400 / 500, `--step--1`): Nav links, dropdown items, inline "read more" affordances, image captions, the back link.
- **Mono label** (400, `--step--2`, 0.02em base, 0.05–0.06em when uppercase): Technology names and tags, the carousel counter (`tabular-nums`), talk venues and durations, field labels, locale codes.

Measures in use, all set in `ch` so they track the font: 44ch hero lede, 42ch project blurb, 46ch talk description and footer lede, 54ch talks lede, 56ch featured description and figure caption, 68ch project paragraph. Headline wraps are constrained by `ch` too (16ch, 17ch, 22ch) with `text-wrap: balance` on titles and `text-wrap: pretty` on prose.

### Named Rules

**The Mono-Is-Measurement Rule.** Martian Mono appears only where something is counted, named as a technology, timed, or located — tech tags, `01 / 03`, "60 MIN", "NDC London 2026", "NO"/"EN". It is never a costume for "technical", never a body face, and never a heading. Everything mono goes through the shared `.mono` primitive, which fixes it at `--step--2`; if a new label needs a different size, that is a signal the label is not mono.

**The Three Weights Rule.** 400 for prose, 500 for anything titled or interactive, 800 for display only. There is no 600, no italic, and no synthetic bolding — only three real files ship.

**The Self-Hosted Rule.** Both families are self-hosted woff2 in `src/assets/fonts/` with `font-display: swap`. No `@import`, no Google Fonts, no runtime request to a third party. Note the Martian Mono subset is latin only; æ ø å resolve inside U+00E0–U+00FF, so Norwegian mono strings are safe but anything beyond latin-1 is not.

## Layout

Everything hangs off one primitive. `.shell` is `width: 100%; max-width: var(--measure) (1240px); margin-inline: auto; padding-inline: var(--gutter)`, where `--gutter` is `clamp(20px, 5vw, 64px)`. Every section — header, hero, talks, footer, project detail — wraps its content in `.shell`, so the text column's left edge is the same x-coordinate down the entire page.

The carousel is the one full-bleed region, and it does not get to break that edge. Its scroll track is not inside `.shell`; instead it recreates the same inner edge arithmetically with `padding-inline: max(var(--gutter), calc((100% - var(--measure)) / 2 + var(--gutter)))`, mirrored by `scroll-padding-inline-start`. The first card therefore starts on exactly the column line as the heading above it. Any future full-bleed region must use the same expression rather than centring its own content.

Sections are separated by vertical rhythm, not by dividers: `--space-9` (96px) padding-block on the carousel, talks and footer regions; the hero opens on `clamp(--space-8, 9vw, --space-10)`. Inside a region, 64px separates the two halves of a grid, 32px is a card's internal padding, 24px is a control group's gap, and 16px/12px/8px handle label-to-value spacing.

Grids are two-column asymmetric and collapse to one:

- Hero body: `minmax(0, 1fr) minmax(0, 0.85fr)` — lede+actions beside the technology strip — collapsing at 900px
- Project detail head: `minmax(0, 1fr) minmax(0, 340px)` — title+blurb beside the facts rail — collapsing at 900px
- Featured talk: `minmax(0, 1.5fr) minmax(0, 1fr)` — collapsing at 860px
- Footer: `minmax(0, 1fr) minmax(0, auto)`, bottom-aligned — collapsing at 860px
- Auto-fit grids for repeating content: talks at `minmax(300px, 1fr)`, project paragraphs at `minmax(340px, 1fr)`, project figures at `minmax(360px, 1fr)`

Breakpoints are max-width and there are four: 900px (asymmetric grids to single column), 860px (featured talk and footer), 720px (header nav wraps to its own full-width row), 560px (hero actions stack full-width, card padding drops to 24px, card footer stacks, carousel head stacks). Carousel cards are `flex: 0 0 min(680px, 84vw)` — fluid by viewport rather than by breakpoint.

**The Unbroken Column Rule.** A new surface uses `.shell` or reproduces its exact inner edge. Nothing on this site is centred, nothing sets its own max-width in px, and no section indents its content past the shared gutter.

**The Norwegian-First Measure Rule.** Norwegian is canonical and is the longer of the two locales. Every measure is set in `ch` and every heading wrap in `ch` with `text-wrap: balance`; no label, button or nav item is given a fixed px width. New surfaces get checked in Norwegian first — if it fits in `no`, it fits in `en`.

## Elevation & Depth

The system is flat by construction. There is exactly one `box-shadow` in the entire codebase: `0 14px 30px -14px rgb(23 24 26 / 26%)` under the header's projects dropdown, where an overlay genuinely floats above the page and needs to be read as detached. Nothing else — no card, no button, no image, no region — has a shadow at rest or on hover.

Depth is instead carried by three devices: a change of ground (paper → deep paper → field → ink), a hairline (1px `rule` for a division, 1px `rule-strong` for an edge, 2px `ink` for a structural break above a section-defining element), and a 2px `translateY` lift on the primary buttons that returns to 0 on `:active`. The carousel's de-emphasis uses `scale(0.97)` plus the deep-paper ground.

### Shadow Vocabulary

- **Overlay** (`box-shadow: 0 14px 30px -14px rgb(23 24 26 / 26%)`): The header dropdown only. Warm-tinted from ink rather than black, and offset downward with a negative spread so it reads as a lifted sheet, not a glow.

### Named Rules

**The One Shadow Rule.** A shadow exists only where an element overlays content it did not push out of the way. If a new element is in normal flow, it gets a hairline or a ground change — not a shadow.

**The Never-Fade Rule.** De-emphasis is scale plus a cooler ground, never opacity. Faded text drops below the contrast floor, and a site whose central claim is WCAG 2.2 AA cannot fade a third of its evidence to 2:1 for effect. There is no `opacity` in the system.

## Shapes

Every corner in the system is square. There is no `border-radius` declaration anywhere in the source, and the reset explicitly zeroes it on form controls, so buttons, cards, tags, images and the dropdown all share one silhouette: a rectangle, cut flush.

Form language is drawn with lines rather than boxes:

- **1px `rule`** — divisions inside a region: the header underline, the rule the hero body hangs from, a card's footer rule, a figure's border, list separators
- **1px `rule-strong`** — the perimeter of a small object: technology tags, the locale toggle, the dropdown, the secondary-talk top rule
- **1px `field-rule`** — the perimeter of the carousel arrows, on the field
- **2px `ink`** — the structural break above something that behaves like a section of its own: the featured talk, the project CTA, the project head's bottom edge
- **2px `signal`** — the underline that marks an inline affordance ("Se foredraget", "Les mer"), sitting 3px below the baseline
- **Animated rule** — the header's contact link draws its underline as a `linear-gradient` background that grows from 2px to 8px on hover, so the label never moves

The only non-rectangular mark is the 9px signal square beside the hero role line, drawn as an element rather than a glyph. Images are clipped to a fixed `16 / 10` in the carousel (object-position top, where interface chrome lives) and to their real per-image `aspect-ratio` on project pages. Icons are strokes in a 16-unit box; there are no filled shapes.

## Components

### Buttons

- **Shape:** Square, always (0 radius). No borders on filled actions.
- **Primary action** (`.action`, `.cta__button`, `.footer__mail`): Signal ground with ink text, `16px 32px` padding, weight 500, inline-flex with a 12px gap before an optional arrow icon. On paper it hovers to signal-deep with paper text; on the ink footer it hovers to paper with ink text — in both cases the ground changes and the text follows it. All three lift `translateY(-2px)` on hover and settle to 0 on `:active`, over 180ms.
- **Focus:** No component defines its own ring except where inversion demands it. The global `:focus-visible` draws `2px solid var(--focus)` at `3px` offset, and `--focus` is whatever the region set.
- **Quiet link** (`.quiet`, `.footer__link`): No fill. Soft text over a 1px hairline underline; both go to full-contrast ink (or paper, on the footer) on hover.
- **Icon buttons** (`.arrow`): See Carousel below.

### Chips / Tags

- **Style:** Mono at `--step--2`, `6px 12px` padding, 1px `rule-strong` border, no fill, square. Ink text on the project page and in the hero strip; soft ink inside a card, where they are secondary to the title.
- **State:** Static. Technology tags are content, not filters — they have no hover, no selected state, and never become links.

### Cards / Containers

The project card is the only card in the system, and it exists because it must lift off the green field.

- **Corner Style:** Square.
- **Background:** Paper, inverting back to ink text inside the field region. De-emphasised siblings take the deep-paper ground.
- **Shadow Strategy:** None. Separation comes from the paper/field contrast.
- **Border:** None on the outside. Internally, a 1px `rule` under the screenshot and above the footer row.
- **Internal Padding:** 32px (24px below 560px). Screenshot is flush to all three edges above the body.
- **Anatomy:** screenshot (16/10, top-anchored) → client logo at 26px height beside the `h3` title → blurb in soft ink → hairline → mono technology list opposite a "read more" affordance underlined in 2px signal, whose arrow nudges 3px right on card hover.
- **Focus:** The whole card is one link; `:focus-visible` draws a `2px solid var(--paper)` ring at 4px offset so the ring reads against the field, not the card.

### Inputs / Fields

None. The site has no forms, no inputs, and no backend; the only conversion is a `mailto:` link. Do not introduce an input pattern speculatively — if a field is ever genuinely needed, derive it from the technology tag (square, 1px `rule-strong`, mono where it holds a measured value) rather than importing a component library.

### Navigation

- **Style:** Sticky header on paper with a 1px `rule` bottom edge, `68px` min-height, wordmark left at `--step-1` / 500, nav right at `--step--1`.
- **States:** Links rest in soft ink and hover to ink over 160ms. The one persistent action, the contact link, is full ink at weight 500 with a growing signal underline instead of a colour change — the target never shifts.
- **Dropdown:** Opens on hover, click, and focus; closes on outside pointer-down, focus-out, and document-level Escape (Escape returns focus to the trigger only when focus was already inside). Panel is paper with a 1px `rule-strong` border and the system's single shadow; items are `12px 24px` and hover to deep paper. The caret rotates 180° over 200ms.
- **Mobile (≤720px):** The header wraps rather than collapsing into a drawer — the nav takes a full-width second row with `justify-content: space-between`. There is no hamburger and no overlay menu.
- **Language toggle:** Two mono buttons inside a single 1px `rule-strong` frame, no gap. Inactive is transparent with soft ink and hovers to deep paper; active is an ink fill with paper text, `aria-pressed`, and a locally inverted `--focus` drawn inset at `-3px` offset so the ring stays inside the fill.
- **Skip link:** Signal fill, ink text, parked at `translateY(-250%)` and dropping to 0 on focus over 180ms at the gutter's left edge.

### Project Carousel (signature)

The one region that owns a colour at page scale, and the one place with meaningful motion.

- **Ground:** Field, full-bleed, `96px` padding-block, `--focus` reassigned to paper.
- **Head:** Section title left, mono counter (`01 / 03`, tabular-nums, field-mist) and arrow pair right, bottom-aligned; stacks at 560px.
- **Arrows:** `52 × 44px`, transparent with a 1px `field-rule` border and paper icon. Hover fills signal with an ink icon and a matching border. Disabled drops the icon to `field-rule` and keeps the border — the boundary of the set stays visible.
- **Track:** Native `overflow-x: auto` with `scroll-snap-type: x mandatory`, `scroll-snap-align: start`, `overscroll-behavior-x: contain`, and the scrollbar hidden — the arrows and the counter are the affordance. Cards `min(680px, 84vw)` wide with a 32px gap.
- **Active card:** Determined by measuring which card's `offsetLeft` is nearest the track's inline start padding, resynced on scroll, resize, and `focusin`. Tabbing to an off-screen card scrolls it to the edge and updates the counter and arrow states with it.
- **De-emphasis:** Inactive cards take the deep-paper ground and `scale(0.97)` over 520ms on `cubic-bezier(0.16, 1, 0.3, 1)`. Never opacity.
- **Reduced motion:** Programmatic scrolling switches from `smooth` to `auto`, and the global reduced-motion block clamps every transition to 0.01ms.

### Talks Block

Evidence ranked by rule weight rather than by card. The recorded conference talk sits above a 2px ink rule in a `1.5fr / 1fr` grid — headline-scale title at weight 500, mono venue line, description at 56ch, a signal-underlined watch affordance whose arrow travels up-right 2px on hover, and a hairline-separated list of talking points in the narrow column. The two lesser talks sit below on 1px `rule-strong` tops at subtitle scale in an auto-fit grid. Nothing is boxed; the hierarchy is entirely rule weight, type size, and column width.

### Icons

One set, defined entirely in `AppIcon.vue`: `arrow-right`, `arrow-left`, `arrow-up-right`, `chevron-down`. All four are single paths in a 16-unit viewBox, `stroke-width: 1.5`, `fill: none`, `stroke: currentColor`, rendered at 16px, `aria-hidden` and `focusable="false"` — always decorative, with the adjacent label carrying the meaning. A shared `translateY(-0.5px)` optically aligns them to cap height. Icons animate only as a directional hint on the parent's hover (3px right for `arrow-right`, 2px up-right for `arrow-up-right`), never on their own.

### Motion

Two easings and a short duration ladder. `ease` for pure colour changes (140–200ms); `cubic-bezier(0.16, 1, 0.3, 1)` for anything that moves or grows (180ms button lift, 200ms caret, 220ms underline growth and icon nudge, 520ms card recession). `prefers-reduced-motion: reduce` clamps all animation and transition durations to 0.01ms, turns off `scroll-behavior: smooth`, and the carousel checks the same query before every programmatic scroll.

## Do's and Don'ts

### Do:

- **Do** wrap every new section's content in `.shell`, or reproduce its inner edge exactly with `max(var(--gutter), calc((100% - var(--measure)) / 2 + var(--gutter)))` if the section is full-bleed.
- **Do** set `--focus` in the same rule where you set a non-paper `background` — paper ground uses ink, field uses paper, ink uses signal.
- **Do** reach for a hairline (1px `rule` or `rule-strong`) or a 2px ink rule where you are tempted to draw a box.
- **Do** keep signal orange as a ground under ink text, a 2px underline, or a focus outline.
- **Do** use `.mono` only for measured values — technologies, counts, durations, venues, locale codes — and let it stay at `--step--2`.
- **Do** size every measure and heading wrap in `ch`, and check the surface in Norwegian first.
- **Do** de-emphasise with scale and a cooler ground.
- **Do** add new icons as single 1.5-stroke paths in the same 16-unit box in `AppIcon.vue`, `aria-hidden`, with a real text label beside them.
- **Do** add every new string to both `src/locales/no.ts` and `src/locales/en.ts`.

### Don't:

- **Don't** add a `border-radius`. Every corner in this system is square.
- **Don't** add a `box-shadow` to anything in normal flow — the dropdown overlay is the only shadow that exists.
- **Don't** use `opacity` for emphasis, hierarchy, or hover states.
- **Don't** write `color: var(--signal)`. Signal is a fill, a rule, or an outline; as text it fails on every ground here.
- **Don't** put signal orange on the green field as text or as a hairline — on the field it may only appear as a fill with ink on top.
- **Don't** introduce a third accent, a gray, or a dark mode. There are three grounds and one accent.
- **Don't** use mono as a "technical" costume for headings, prose, or button labels.
- **Don't** add a fourth font weight, an italic, or a second sans; three Cabinet Grotesk files and one variable mono are what ships.
- **Don't** load a font, icon set, or stylesheet from a third-party host at runtime.
- **Don't** wrap content in a card unless it must lift onto a different ground — the project card is the only card, and it exists because it sits on the field.
- **Don't** give a label, button, or nav item a fixed px width; Norwegian is the longer locale and it is canonical.
- **Don't** collapse the mobile header into a hamburger drawer; it wraps to a second full-width row at 720px by design.
