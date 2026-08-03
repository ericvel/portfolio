---
target: projects section on homepage
total_score: 24
max_score: 36
na_heuristics: 10
p0_count: 0
p1_count: 4
timestamp: 2026-08-03T17-12-44Z
slug: src-components-projectledger-vue
---
Method: dual-agent (A: a0f09f169f70cc200 · B: aef53d29781dfdfe2)

Target: `src/components/ProjectLedger.vue` in `src/views/HomeView.vue`. Mode: Persuade. Inspected live at 1280/1024/1000/768/375/320 in `no` and `en`. Dev server started for this run has been stopped.

## Design Health Score

| # | Heuristic | Score | Key Issue |
|---|-----------|-------|-----------|
| 1 | Visibility of System Status | 3 | Ground flip is an unambiguous "you are on this one". No `:visited` marker, so a buyer who opens ASKO and backs out loses their place. Plate is blank paper until the `loading="lazy"` logo arrives — measured 0×0 before load, no `width`/`height`. |
| 2 | Match System / Real World | 4 | Plain Norwegian, zero jargon, client marks as marks, stack in the buyer's own vocabulary. "Utvalgte prosjekter" / "Se prosjektet" say exactly what they do. |
| 3 | User Control and Freedom | 3 | Real `<a href>`, cmd-click works. No live product URL from the row; whole-row link means no sub-part is separately actionable. |
| 4 | Consistency and Standards | 2 | `<span class="work__body">` wraps an `<h3>` (`:26-29`) — invalid HTML. `list-style: none` (`:72`) with no `role="list"`. `ProjectCta.vue:10` uses `aria-labelledby`; the ledger doesn't. `.work__title` lacks the `text-wrap: balance` DESIGN.md requires of titles. Arrow nudge is `:hover`-only (`:208`) while the underline handles focus too. |
| 5 | Error Prevention | 3 | No forms, no destructive actions. A 404'd or slow logo yields an empty plate with `alt=""` — silent, indistinguishable from intent, despite `paper-deep` existing in the tokens for exactly this. |
| 6 | Recognition Rather Than Recall | 2 | Three rows fit on no screen at any viewport — region measured 772px (1280), 911px (768), 1279px (375). Cross-row stack comparison always costs working memory. Chips unlabelled; the hero's identical list gets an `h2`. No year to anchor recency. |
| 7 | Flexibility and Efficiency | 2 | The buyer's efficiency need is real (find the row matching my stack). The widest register spends itself on "Se prosjektet" three times instead of a discriminating fact, and there is no path to a live product. |
| 8 | Aesthetic and Minimalist | 3 | Restrained and handsome. Three near-white plates are the loudest objects and carry the least information; the plate column is ~75% empty at ≤1024px; the right third is void on short-stack rows. |
| 9 | Error Recovery | 2 | The one real failure mode (logo missing or not yet loaded) is unannounced and unrecoverable: blank plate, `alt=""`, no placeholder ground. |
| 10 | Help and Documentation | n/a | A three-row evidence list read in under a minute has no help surface, and the product ships no docs. Genuinely inapplicable. |
| **Total** | | **24/36** | **Acceptable (67%)** |

## Design Specificity Verdict

**Specific in two places, generic in its bones. Authored — not yet unmistakable.**

**LLM assessment.** Two decisions could only have come from this product. The stack is a first-class register: `grid-template-columns: 180px minmax(0,1.4fr) minmax(0,1fr) auto` (`:91`) gives technology names ~25% of row width at the same optical level as the blurb, the opposite of the category habit of burying tech in grey 11px metadata, and directly downstream of PRODUCT.md's "technology names are content, not decoration." And the mark plate with `mix-blend-mode: multiply` (`:120-136`) is a real solution to a real constraint of this specific asset set — Norwegian client logos that ship on baked-in white.

Everything else survives a find-and-replace onto a generic agency work index: four-register horizontal row, full-bleed coloured section, hairline-divided list, hover ground flip, thrice-repeated CTA. The green field owns the region because the doc decided a region should own a colour, not because green means anything here.

The gap is entirely about **information chosen**. `role` is authored in both locales (`no.ts:75,93,109`) and rendered on the detail page (`ProjectView.vue:56`) — and withheld from the one region whose job is to prevent that click. `year` exists nowhere in `types.ts`. The row answers what / for whom / in what, and stops one column short of the answer that separates this person from the next name on the shortlist.

**Deterministic scan.** `detect.mjs --json` on `src/components/ProjectLedger.vue`, `src/views/HomeView.vue` and the whole of `src`: **0 findings, exit 0.** Assessment B did not take that at face value — it planted a canary file with `border-radius: 8px`, `box-shadow`, `opacity: .6`, `transition: all`, `font-size: 11px` and `#999` on `#fff`, and the detector produced 6 findings from repo cwd (0 with `--no-config`, 0 outside the repo). The harness is live and the clean result is genuine. All live rules are `severity: advisory`, so count is the signal, not exit code. **No false positives to triage** — the intentional choices (zero radius, one licensed shadow, the deep-green field) produce no noise because they go through documented tokens.

Targeted grep for DESIGN.md's absolute bans: `border-radius` only at `reset.css:148` (`0`, sanctioned); `box-shadow` only at `SiteHeader.vue:205` (the one licensed dropdown) and `reset.css:213` (`none`); no `color: var(--signal)` anywhere; `--signal` inside `.work` appears once, at `:200`, correctly gated behind the paper flip. One literal doc overclaim: DESIGN.md says "there is no `opacity` declaration left anywhere in the system," and `reset.css:150,166` each set `opacity: 1` — anti-fade normalizations, so intent holds and the doc is what's wrong.

**Visual overlays.** Not available. Both agents worked in a hidden Browser pane where pointer events time out; screenshots were captured with the display-none-the-siblings workaround (1280×800 and 375×812, both non-blank), but no user-visible detector overlay was injected. Fallback signal is the CLI scan plus in-page measurement below.

**Where the two assessments agree, exactly.** Contrast, computed independently in-page from resolved tokens, matched to the hundredth:

| Pair | Ratio | Threshold | Verdict |
|---|---|---|---|
| `.work__blurb` — field-soft on field | **6.21** | 4.5 | Pass. DESIGN.md's 6.2:1 claim **verified** |
| `.work__tech` text — field-soft on field | **6.21** | 4.5 | Pass |
| `.work__title` / `.work__heading` — paper on field | **8.52** | 3 | Pass |
| Flipped blurb + chips — ink-soft on paper | **6.84** | 4.5 | Pass |
| Flipped title + label — ink on paper | **15.75** | 4.5 | Pass |
| Flipped affordance — signal on paper | **3.27** | 3 | Pass, by 0.27 |
| Row rules + chip borders — field-rule on field | **1.56** | 3 if UI-identifying | Below |
| Flipped chip borders — rule-strong on paper | **1.87** | 3 | Below |

All text passes AA everywhere in both states. The 1.56 and 1.87 hairlines are defensible as decoration under 1.4.11 because the information they enclose is carried by 6.21:1 text — with one exception, called out as P1 below.

**Where B caught what A didn't.** At 320px in Norwegian, `document.documentElement.scrollWidth` is 334 against a 320 client width — 14px of horizontal overflow. It is **not** the ledger: `.work` measures maxRight 320.0 exactly in both locales and its negative-margin bleed causes zero overflow. The widest element is the header's `.toggle` at right=333.4. Out of scope here, worth a separate look.

**Where A caught what B didn't.** The Wide Plate Rule failure is worse than B's numbers show. B reported Røde Kors 35.16px at "1024" against 36 for the others; A measured 132×**30** at both 1000 and 768, which is arithmetically the consistent figure — the `max-width: 1024px` query sets a 156px plate box, `padding: var(--space-2) var(--space-3)` eats 24px, and 132 ÷ 4.41 = 29.9. Take A's number: the real worst case is a **6px** shortfall across the whole tablet range, not sub-pixel.

## Overall Impression

This is a real design with a real thesis, executed by someone who decided what the depth vocabulary was and then held to it. The paper flip is the best-engineered state in the codebase; the detector is silent; every text pair passes AA in both grounds. That is a genuinely strong floor.

Two things hold it at 24. First, the region is called a ledger and does not rule — `align-items: center` on four independently-centred registers plus `place-items: center` on the plate means no two things in a row share a line, and the leftmost ink in each row starts at a different x. Second, and bigger: the row spends its widest column repeating "Se prosjektet" while `role` sits translated and unused in both locale files. **The single biggest opportunity is the fourth register.** Put the year and the role where the CTA is, let the row keep being the link it already is, and the region stops being a handsome index and starts closing the buyer without a click.

## What's Working

1. **The paper flip is right for a reason the doc actually articulates.** `:107-115` sets `background`, `color`, `--focus`, `--row-secondary` and `--row-chip` in one block, and the consumers transition their own `color` / `border-color` so nested text follows the ground instead of being restated per state. Verified by CSSOM: `.work` rests `--focus: var(--paper)` (8.52:1 ring on field) and the flip overrides to `--ink` (15.75:1 ring on the paper it just created) — ink-on-paper, not the invisible paper-on-paper it could have been. `:hover` and `:focus-visible` are the same rule, so there is no keyboard second-class path, and `base.css:121-130` clamps the transition rather than removing the flip, which is correct because the flip *is* the affordance. Nothing lifts, scales or fades.

2. **The stack column is the most product-specific composition decision on the site, and the grid proves it.** A full quarter of row width at `:91` for the technology register. Chips take border and text from `--row-chip` / `--row-secondary` so they follow the flip by inheritance. Ingrid arrives needing Vue and TypeScript and wins on row one in about two seconds — that is the moment the region earns its existence, and the composition puts it where the eye lands second.

3. **The mark plate solves a real asset problem instead of hiding it.** `asko-logo.jpg` is baked white; `mix-blend-mode: multiply` on a `--paper` plate drops that white into the sheet, and the plate vanishes entirely when the row flips — confirmed in the forced-flip screenshot, no visible seam. Fonts are self-hosted `.woff2` (Cabinet Grotesk 400/500/800 ~20KB each, Martian Mono 23.5KB), zero third-party requests, console clean, all network 200.

## Priority Issues

### [P1] The marks do not start on the column — and that is the region's own thesis

**What.** `place-items: center` (`:121`) centres each logo inside a fixed-width plate. Measured at 768 with the plate at x=38: ASKO's first stroke at x=71, Røde Kors' cross at x=50, Habiit's "h" at x=63. Three rows, three optical starts (+33 / +12 / +25px). Fully exposed on the flipped row, where the plate dissolves into the sheet and the mark floats off the line with nothing to explain it.

**Why it matters.** DESIGN.md states the north star as "ranged left against a single column edge... so the eye never has to re-find the start of a line," and requires "the first register of every row" to start on it. The plate rectangle starts on the line; the thing the reader actually looks at does not. This is the one failure that contradicts the design's stated reason for existing.

**Fix.** `.work__mark { place-items: center start; }` — vertical centring preserved, marks hang off the shared line in both states. One line.

**Suggested command:** `/impeccable layout`

### [P1] The row answers three of the buyer's six questions, and the fourth answer already exists

**What.** No role, no year, no scale. `role` is authored in both locales (`no.ts:75,93,109`; `en.ts:76,94,110`) and rendered at `ProjectView.vue:56`. `year` exists nowhere in `Project` (`types.ts:20-29`). Meanwhile `stack` (`types.ts:24`) is dead — no component reads it — and its comment still says "shown on the carousel card," post-rename debris. The fourth and widest register spends itself on "Se prosjektet" three times, while the row is already the link, so the label isn't even the click boundary.

**Why it matters.** The buyer is deciding whether to place this person into a team. "Frontendutvikler i produktteam" versus "Frontendutvikler" is the solo-or-embedded distinction that is literally the positioning line. Recency turns `React · Next.js` from a possibly-stale claim into a current one — and turns `Swift · Firebase · iOS` from "is he a generalist?" into "that was 2021." Both are exactly the facts that convert a scan into an email.

Related: the strongest project has the weakest sentence. ASKO's blurb (`no.ts:72-74`) inventories two surfaces. PRODUCT.md names its differentiator explicitly — catalogues with tens of thousands of items, keyboard navigation, predictable states — and none of it reaches the scan region. Røde Kors' single most valuable string for this audience, "universell utforming var et krav... hele flyten fungerer med tastatur" (`no.ts:99-101`), lives two clicks away.

**Fix.** Add `year` to `Project` and `projects.ts`. Replace the repeated CTA with two registers in column four — year in mono, role at `--step--1` — and keep a bare `arrow-right` as the pointer. Delete dead `stack` and fix the stale `types.ts:26` comment. Rewrite the ASKO and Røde Kors blurbs to lead with the constraint rather than the surface inventory. *Blurb rewrites touch factual copy — confirm the specifics with Eric before shipping claims.*

**Suggested command:** `/impeccable shape`, then `/impeccable clarify`

### [P1] The Wide Plate Rule is broken at every breakpoint, worst on tablet

Measured rendered `.work__logo` heights (logos forced eager; `loading="lazy"` returned 0×0 on first pass):

| Mark | Aspect | 1280 (box 180 / content 156) | 1000–1024 (box 156 / content 132) | 375–320 (box 168 / content 144) |
|---|---|---|---|---|
| ASKO | 2.51:1 | 36.0 height-bound | 36.0 | 36.0 height-bound |
| **Røde Kors** | **4.41:1** | **35.16 — width-bound** | **~30 — width-bound** | **32.5 — width-bound** |
| Habiit | 3.00:1 | 36.0 height-bound | 36.0 | 36.0 height-bound |

**Why it matters.** DESIGN.md names this exact failure and its exact consequence — a wide wordmark "lands visibly shorter than the others... reads as a mistake rather than as variety" — then prescribes a number that was applied to the wrong box. The doc's threshold is "roughly 156px of **content** width"; `:216` and `:252` set the **box** width, and `padding: var(--space-2) var(--space-3)` (`:124`) removes 24px. The code delivers 132px and 144px of content against a 156px threshold. Even at full width, 156px is the boundary exactly, and Røde Kors clears it by 0.02px. The doc is internally inconsistent too: it prescribes "168px on mobile," which is 144px of content — below its own stated threshold.

**Fix.** Make the plate `width: fit-content; min-width: 156px; padding-inline: var(--space-3)` so content width is the governed dimension at every breakpoint — which also fixes ASKO's 42%-empty plate at full width. Or raise the boxes to 180/192px. Then check each mark's *rendered* height against the others rather than trusting `max-height`, per the doc's own instruction. Also: `habiit-logo.svg` is **63,932 bytes** for a mark rendered at 107×36, 21× the Røde Kors file.

**Suggested command:** `/impeccable polish`

### [P1] Screen-reader and touch-affordance cluster — the site's own credibility claim

Five cheap defects, in the region that carries the accessibility argument:

- **`list-style: none` at `:72` with no `role="list"`.** Chrome keeps `list` / `listitem` (B confirmed in the a11y tree), but Safari + VoiceOver strips them. In a region whose entire premise is *there are exactly three and you should compare them*, losing "list, 3 items" is substantive. `reset.css:116` applies a blanket `list-style: none`, so the hero and talks lists are affected too — no `role="list"` exists anywhere in `src/`.
- **The stack is an unlabelled word run.** Six bare `<span>`s (`:33-37`). VoiceOver reads "Vue Vite TypeScript Vitest Playwright TanStack Query" with nothing saying these are technologies; the meaning is carried by chip borders at 1.56:1. `HeroSection.vue:49` labels its identical list.
- **`<span class="work__body">` containing `<h3>`** (`:26-29`) — invalid HTML on the one site whose central claim is standards compliance. (The `<h3>` inside `<a>` is fine and is exposed as a heading; the `span` is the problem.)
- **`section#prosjekter` has no accessible name** (`:10`), so it isn't a landmark and can't be reached from a rotor. `ProjectCta.vue:10` shows the codebase already knows the `aria-labelledby` idiom.
- **The resting affordance underline is a rumour.** `:188` rests it at `field-rule`, **1.56:1**. This is the *only* resting visual cue that anything in the region is interactive, and unlike the row rules it is not decorative. On touch there is no hover, the flip never fires, and a mobile buyer sees three text blocks with the words "Se prosjektet" and no signal that the row is tappable. Also: at ≤560px the row is x=0..375 and `base.css:113` sets `outline-offset: 3px`, putting the ring's vertical sides at −5px and +380px — off-screen. Two-sided focus indicator.

**Why it matters.** PRODUCT.md makes WCAG 2.2 AA the central credibility claim and Principle 3 says a portfolio failing its own claim is the worst possible proof. A technically-minded buyer running VoiceOver or a validator over this exact region is a plausible, cheap check — and it is the check most likely to be run on a candidate whose pitch is platform-level frontend depth.

**Fix.** `role="list"` on `.work__list`; wrap chips in a labelled container ("Teknologier" / "Technologies"); `span.work__body` → `div`; `aria-labelledby` pointing at the `h2`; raise the resting underline to `--field-soft` (#c3d4c8, 6.21:1, not signal, breaks no rule); `outline-offset: -3px` on `.work__row` at ≤560px.

**Suggested command:** `/impeccable harden`

### [P2] `align-items: center` prevents the ledger from being a ledger

**What.** `:92` centres each of the four registers independently. At 1280 on the ASKO row: the `h3` cap at y≈903, the first chip row at y≈895, "Se prosjektet" at y≈934 — three different lines. The chip block is 102px tall on ASKO (three wrapped rows) against 29px on Habiit, so the offsets differ per row as well. The forced-flip screenshot makes it unmistakable.

**Why it matters.** A ledger's power is that its columns agree on a row line — that is what makes column-wise scanning ("show me all the stacks") possible, and column-wise scanning is how a buyer with a specific stack in mind actually reads this. Right now the reader re-finds the vertical position of each register in each row.

**Fix.** `align-items: start` at desktop with a small `padding-block-start` on `.work__mark` and `.work__more` to bring their optical tops onto the `h3` cap line. This also removes the wander caused by variable chip wrapping.

**Suggested command:** `/impeccable layout`

## Persona Red Flags

**Sam (screen-reader dependent)** — most exposed. `:72` drops list semantics in Safari/VoiceOver, so Sam never learns there are exactly three projects. `:33-37` reads six technologies with no announcement that they are technologies. `:10` has no accessible name, so the projects region is unreachable from the landmarks rotor. `:26-29` is invalid HTML in the signature region of an accessibility-claiming portfolio. At 375px, `outline-offset: 3px` against a full-bleed row puts the focus ring's sides off-screen.

**Casey (distracted, mobile)** — second most exposed. No affordance at rest: `:188` rests at 1.56:1 and `:107` gates the flip on `:hover` / `:focus-visible`, neither of which fires on touch. The region measures **1279px** at 375×812 — 1.6 screens of scroll for three facts. `:249-252` spends 88px per row (264px, ~21% of the region) on a mark the code's own comment at `:21` calls decorative, positioned directly above the `h3` so it reads as a card header with the title as its caption — the one thing DESIGN.md insists the plate is not.

**Ingrid — staffing lead at a Norwegian consultancy, 40 seconds, Vue + TypeScript role open.** Wins on `:34` in about two seconds. Then stalls: her next question is solo-or-embedded, and the answer sits at `no.ts:75` rendering only on the detail page, so she makes the click this region exists to prevent. Her second question is recency; nothing in `types.ts:20-29` carries a date. `projects.ts:34-36` gives `Swift · Firebase · iOS` equal billing and the last word, which makes her ask whether he's a generalist — directly against the depth positioning.

**Tobias — tech lead, product company, React/Next.js shop.** Row two is his match, but `no.ts:92` is the shortest blurb in the region and describes what the *product* does, not what Eric did or what was hard. The one sentence that would close him — the keyboard-flow accessibility line at `no.ts:99-101` — is invisible in the scan region.

**Alex (power user)** — three identical labels in the widest column, nothing to scan column-wise; no live product URL; no `:visited` rule anywhere in `src/`, so after opening ASKO and backing out he has no marker of what he already read.

## Minor Observations

- **Røde Kors brand red vs signal orange: 1.35:1.** `#D52D27` against `--signal` `#e4572e` — effectively the same colour. On the flipped Røde Kors row, the brand cross and the action underline are indistinguishable in hue and value, and the cross is larger and more saturated, so an asset outcompetes the one element the system reserves for action.
- **Peak-end.** DESIGN.md's "none is privileged" is defensible in principle but has an undefended cost here: ASKO is the argument, Røde Kors corroborates, Habiit is a footnote — given equal type, equal plate, and the last word before the reader leaves the field.
- **`loading="lazy"` on the three logos with no `width`/`height`.** The fixed 64px plate prevents CLS, but these are the "for whom" answer in the primary evidence region, sitting just below the fold at 1280×800 (region top y≈767). Lazy buys nothing here. `loading="eager"` plus explicit dimensions on at least the first.
- **`.work__more`'s underline colour snaps while its thickness animates.** `:192` transitions only `background-size`; `background-image` isn't interpolable, so field-rule→signal is instant while 1px→2px takes 200ms. Arguably desirable, but not what the doc describes.
- **`.work__title` has no `text-wrap: balance` and no `ch` cap** (`:145-151`) against a 398px column at 1280 and 697px at 1000 — a rule DESIGN.md states and the code omits.
- **The right third is void on rows two and three at desktop** — Habiit's chips end at x≈941, the affordance starts at x=1083. Resolves itself once year and role move there.
- **Mobile row heights are irregular** — 362 / 302 / 326px, driven by 2- vs 3-line blurb wraps.
- **`.mono` on `<h2>`** at `HeroSection.vue:49` and `ProjectView.vue:52,56` contradicts DESIGN.md's "never a heading." Outside this region, but the ledger is the reference implementation others will copy.
- **`prefers-reduced-motion` confirmed present** at `base.css:121-130`, clamping all five transitions this component declares.

## Questions to Consider

1. The plate is the highest-contrast object in the region and the code's own comment calls the logo decorative. If the loudest thing carries the least information, why is the mark a **register** at all — rather than a 24px mark set inline before the `h3`, freeing an entire 180px column for year and role?
2. Three rows fit no screen at any viewport (772 / 911 / 1279px measured). If the reader must scroll regardless, what is the four-register horizontal row buying that a **two-line-per-project dense table** — name + year + role on line one, stack on line two — wouldn't buy at a third of the height, with true column alignment and three rows genuinely comparable at once?
3. "Se prosjektet" occupies the widest column, three times, and the row is already the link. What **single fact**, placed there instead, would remove the click this region exists to prevent?
4. The Never-Fade Rule pushed all de-emphasis onto hairlines, and on the field a hairline computes to 1.56:1. Is the honest conclusion that the field needs a second, brighter rule token — or that a ground this dark cannot support a hairline-based form language, and the region has been paying for the Never-Fade Rule in legibility without naming the bill?
5. PRODUCT.md names ASKO's scale as *the* differentiator and Habiit is a Swift game. What does this region look like if the composition admits that one row is the argument and two are corroboration?

## Verification Limits

Both agents worked in a hidden Browser pane. Real pointer `:hover` and real `:focus-visible` were never painted: `el.focus()` does not match `:focus-visible` on a link in Chrome (confirmed directly), and `computer{key}` / `computer{left_click}` time out. The flip's end state was reproduced by injecting a stylesheet duplicating the scoped `:hover` declarations, and the focus ring's colour was resolved through CSSOM plus token arithmetic — both sound, both static rather than rendered. The 375px ring-clipping finding is a geometric deduction from a measured row rect and a confirmed absence of clipping ancestors, not an observed paint. Screen-reader behaviour was read from the Chrome accessibility tree and the accname spec; no VoiceOver, NVDA or JAWS was run, so the Safari list-semantics claim is known-behaviour rather than measured. No visual detector overlay was injected.
