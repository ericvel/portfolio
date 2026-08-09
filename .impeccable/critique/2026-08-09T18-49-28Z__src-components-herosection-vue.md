---
target: hero__contact
total_score: 21
max_score: 32
na_heuristics: 7,10
p0_count: 0
p1_count: 2
timestamp: 2026-08-09T18-49-28Z
slug: src-components-herosection-vue
---
Method: dual-agent (A: /root/hero_contact_design_review · B: /root/hero_contact_detector)

## Design Health Score

| # | Heuristic | Score | Key Issue |
|---|-----------|-------|-----------|
| 1 | Visibility of System Status | 2 | Copy success is glyph-only; failure is indistinguishable from idle. |
| 2 | Match System / Real World | 4 | Plain language and a natural evidence-to-contact sequence. |
| 3 | User Control and Freedom | 4 | Direct exits; no funnel or trapping state. |
| 4 | Consistency and Standards | 3 | The underlined email looks like a link but copies instead. |
| 5 | Error Prevention | 2 | Manual selection is disabled; copy may fail silently. |
| 6 | Recognition Rather Than Recall | 2 | Copy intent is invisible until hover or focus. |
| 7 | Flexibility and Efficiency | n/a | Not meaningfully applicable to this short Persuade surface. |
| 8 | Aesthetic and Minimalist Design | 3 | Strong hierarchy; active copy icon crowds GitHub around 390px. |
| 9 | Error Recovery | 1 | No diagnosis or recovery path for copy failure. |
| 10 | Help and Documentation | n/a | This portfolio contact action requires no documentation. |
| **Total** | | **21/32** | **Acceptable — excellent visual foundation, weak utility states** |

## Design Specificity Verdict

**LLM assessment:** Strongly authored. Cabinet Grotesk, the mono role line, paper/green/signal palette, named proof rail, and proof-before-conversion sequence belong to Eric's positioning. The category-interchangeable weak spot is `.hero__email`: an address-shaped copy button whose intent and state rely on generic icon behavior.

**Deterministic scan:** The bundled CLI detector returned exit code 0 and `[]`: zero findings, zero rule counts, no file locations, and no false positives. Its clean result does not validate runtime feedback or breakpoint-specific spacing. Browser state testing caught issues the static detector missed.

**Visual overlays:** No reliable user-visible overlay exists. Mutable injection failed during the required title-mutation preflight with `TypeError: Cannot set property title of [object Object] which has only a getter`. The overlay script and its live server were therefore not started. Fallback evidence came from fresh-browser screenshots, accessibility snapshots, DOM state, and computed geometry.

## Overall Impression

The contact row looks disciplined, confident, and subordinate to one unmistakable orange CTA. Biggest opportunity: make the email fallback behave as plainly as the surrounding design looks. Right now it presents as a selectable/link-like address, acts as a copy button, and explains neither success nor failure.

## Cognitive Load

Single focus, grouping, hierarchy, and chunking pass. The contact row exposes exactly four choices: primary mail, copy address, GitHub, and LinkedIn. This does not exceed the critique threshold, but the copy button adds interpretation cost because its action is hidden until hover/focus. Desktop header exposes five secondary actions excluding Home; the orange CTA still dominates.

## Emotional Journey

The sequence builds trust cleanly: specialist claim → stack → named production/public proof → inquiry. Green projects entering the first desktop viewport provides a satisfying “show me” continuation. The emotional valley begins on interaction: copy success becomes an unexplained checkmark; copy failure looks like nothing happened. That is especially damaging on a portfolio claiming accessibility and predictable states.

## What's Working

- `.hero__proof` earns the ask: ASKO, Røde Kors, NDC London, and Framsia appear before contact.
- The orange `mailto:` remains unmistakably primary while email/GitHub/LinkedIn stay quiet.
- Desktop and 390px mobile retain strong hierarchy. CTA height is 56px; secondary targets measure 44px.

## Priority Issues

### [P1] The fallback address impersonates two different controls

**Why it matters:** The surface brief promises a visible selectable email fallback. `HeroSection.vue` renders a button with `user-select: none`; its resting underline makes it read like navigation while activation copies. First-time visitors must discover behavior by trial.

**Fix:** Render the address as selectable text or a real `mailto:` link. Add a separate, explicitly labeled copy control beside it. Preserve the orange CTA as the only primary action.

**Suggested command:** `$impeccable clarify`

### [P1] Copy success and failure are not communicated

**Why it matters:** The visual check icon is `aria-hidden`; the accessible name stays “Kopier eric.vel@outlook.com.” No live/status region exists. The `failed` branch renders the idle copy icon, providing neither diagnosis nor recovery.

**Fix:** Add localized visible status copy plus `role="status"` or `aria-live="polite"`: success (“E-postadressen er kopiert”) and recovery-oriented failure (“Kunne ikke kopiere — marker adressen”). Update both Norwegian and English strings.

**Suggested command:** `$impeccable harden`

### [P2] The copy indicator has no reserved responsive space

**Why it matters:** At 390px, the absolutely positioned 16px check ends only 0.8125px before GitHub, reading as `email ✓GitHub`. At 375px, the social group drops to a third line, adding 56px of height after a 15px viewport reduction. The state changes layout comprehension without the flex row accounting for it.

**Fix:** Reserve indicator width inside the email utility or place textual status on a dedicated line. Set an intentional breakpoint for the secondary utility group instead of relying on incidental flex wrapping.

**Suggested command:** `$impeccable adapt`

## Persona Red Flags

**Jordan (First-Timer):** The orange CTA is obvious. The underlined email looks like a link; clicking unexpectedly copies, then produces no explanatory text. Clipboard failure appears as no response.

**Casey (Distracted Mobile User):** At 390px, the check nearly attaches to GitHub. At 375px, social links jump to a third line. The abrupt reflow makes the secondary action cluster feel unstable.

**Nora (Staffing Buyer):** The title → stack → clients → expertise scan works exceptionally well. Forwarding contact details is weaker: the fallback cannot be selected, and failed copying offers no recovery.

## Minor Observations

- Assessment A measured 345px document width at a 320px viewport and clipped `EN`; Assessment B measured no page overflow at 320px. Treat this as unresolved header evidence, outside `.hero__contact`, and verify with `$impeccable audit` before changing it.
- The surface brief specifies eyebrow → headline, while implementation renders headline → eyebrow. The rendered order works, but documentation and code disagree.
- The brief names NDC London 2026 alone; locale copy adds Framsia. Decide whether the extra proof strengthens the rail or softens its strongest credential.
- `AppIcon.vue` includes copy/check icons while `DESIGN.md` documents only four single-path icons. Small design-system drift is concentrated in this utility.

## Questions to Consider

- Is the address fundamentally a fallback or a copy utility? Why make one element impersonate both?
- Should copy failure be the only silent failure on a site selling accessibility and predictable states?
- Should secondary utilities remain one stable group across mobile widths, even if that costs one deliberate extra line?
