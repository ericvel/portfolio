---
target: home page
total_score: 28
max_score: 32
na_heuristics: 7,10
p0_count: 0
p1_count: 2
timestamp: 2026-08-09T20-37-36Z
slug: src-views-homeview-vue
---
Method: dual-agent (A: /root/design_assessment · B: /root/detector_assessment)

## Design Health Score

| # | Heuristic | Score | Key Issue |
|---|---|---:|---|
| 1 | Visibility of System Status | 3 | Locale and copy states communicate changes; no major state gap. |
| 2 | Match System / Real World | 4 | Plain language, named clients, roles, dates, stacks, and real work. |
| 3 | User Control and Freedom | 3 | Sticky navigation, native dismissible popover, and selectable email fallback avoid traps. |
| 4 | Consistency and Standards | 4 | Shared type, spacing, colors, link language, landmarks, and headings form a cohesive system. |
| 5 | Error Prevention | 3 | Few risky interactions; mailto and copy paths reinforce each other. |
| 6 | Recognition Rather Than Recall | 4 | Main destinations are labeled; navigation is not icon-only. |
| 7 | Flexibility and Efficiency | n/a | No expert workflow is expected on this portfolio surface. |
| 8 | Aesthetic and Minimalist Design | 3 | Focused overall, but staffing evidence is visually demoted and mobile chrome is heavy. |
| 9 | Error Recovery | 4 | Copy failure names a concrete recovery using the visible address. |
| 10 | Help and Documentation | n/a | Not meaningful for this Persuade/Experience surface. |
| **Total** |  | **28/32** | **Good** |

## Design Specificity Verdict

**LLM assessment:** Strongly authored and product-specific. Warm paper, green field, ink footer, named-client proof rail, asymmetric lead-project ledger, and real NDC photography create a coherent identity an unrelated SaaS or generic developer portfolio could not reuse unchanged. The implementation misses two distinctive DESIGN.md commitments: the project row uses a subtle green lift instead of the promised paper-sheet inversion, and the talk image is contained and four-sided instead of bleeding from the right edge.

**Deterministic scan:** The CLI detector returned zero findings (`[]`, exit 0) for `src/views/HomeView.vue`. No rule names, severities, locations, or false positives were reported. Scope is narrow: the page file delegates most UI to child components, so this clean result does not invalidate manual findings in those components.

**Visual overlays:** No reliable user-visible overlay exists. Browser mutation preflight failed because the page-scope title was getter-only; the detector script was never injected. Browser DOM and screenshot evidence served as fallback.

## Overall Impression

Confident, credible, unusually specific portfolio. It looks like a frontend specialist who understands structure instead of a developer using a portfolio template. Biggest opportunity: make engagement fit and stack match as visually prominent as the visual craft. Buyers should not work harder to find the evidence the page exists to sell.

## What's Working

- First viewport answers identity, specialty, stack, named proof, and contact without decorative noise. Mobile CTA remains inside the initial 844px viewport.
- Evidence feels earned: named Norwegian organizations, dated roles, concrete technologies, operational UI screenshot, and real conference photograph.
- Accessibility intent is visible: skip link, landmarks, clean heading order, labeled language group, descriptive project links, 44px core controls, live copy status, and no horizontal mobile overflow.

## Cognitive Load

Low: 1/8 checklist failures. Minimal choices fails because the persistent header exposes six controls—home/name, Projects, Talks, Contact, NO, EN. Opening Projects adds three choices while header controls remain visible. Hero contact has four actions, exactly at the recommended limit. Chunking, grouping, hierarchy, working-memory demand, and progressive disclosure pass.

## Emotional Journey

Bold claim creates confidence; proof rail reassures; ASKO becomes evidence peak; NDC photograph adds human credibility; black contact footer creates a strong ending. Mobile valley is long: ASKO alone is about 634px, total page height is 4,444px, and equal-weight Habiit shifts the story from frontend depth toward general product breadth. High-stakes inquiry arrives before the page states the reassuring engagement format: solo or embedded in a team.

## Priority Issues

### [P1] Engagement fit is buried

**Why it matters:** Consultancies and product teams need to know immediately whether Eric can join their delivery model. “Solo or embedded in a team” appears only in the footer, after many evaluators have decided.

**Fix:** Move the existing truthful phrase into the hero role, lede, or proof rail before the first inquiry CTA. Do not add new claims.

**Suggested command:** `$impeccable clarify`

### [P1] Stack match looks like footnote metadata

**Why it matters:** Technology fit is central buyer evidence, yet stacks render as 12px mono. ASKO’s six-item stack wraps on mobile; corroborating stacks recede heavily on desktop.

**Fix:** Raise stack text to roughly 14px with more line-height, group technology on its own readable line, and keep date/role quieter.

**Suggested command:** `$impeccable typeset`

### [P2] Mobile sticky chrome consumes too much reading space

**Why it matters:** At 390×844, the 127px sticky header occupies 15% of the viewport throughout a 4,444px page.

**Fix:** Make header non-sticky at ≤720px, or collapse to a compact 68px sticky row after the opening viewport while keeping the full two-row header at page start.

**Suggested command:** `$impeccable adapt`

### [P2] Signature system and implementation disagree

**Why it matters:** Future contributors cannot know which design authority to trust. ProjectLedger uses a 4% paper mix and inset rule while DESIGN.md promises paper inversion and signal underline. TalksSection contains and fully borders the photograph while DESIGN.md promises right-edge bleed and three-sided framing.

**Fix:** Choose the intended interaction and composition, implement consistently, then update DESIGN.md only if the quieter implementation is authoritative.

**Suggested command:** `$impeccable polish`

### [P2] Habiit weakens the frontend-depth claim at equal prominence

**Why it matters:** One of three selected projects is Swift/Firebase/iOS, while positioning promises React/Vue/TypeScript frontend depth. Staffing buyers scanning for web-stack fit get a diluted story.

**Fix:** Label Habiit as earlier or adjacent product work, or demote it into a smaller secondary register after the two web projects.

**Suggested command:** `$impeccable distill`

## Persona Red Flags

**Jordan, first-timer:** First action is clear, but “Faglig,” Framsia, TanStack Query, Vitest, and Playwright assume technical familiarity. Project dropdown supports recognition; engagement format remains undiscoverable until footer.

**Riley, stress tester:** Norwegian and English fit at 390px, `lang` changes correctly, copy success is announced, failure has selectable-address recovery, and scroll width stays 390px. Main red flag is contradictory design authority, which invites future drift.

**Casey, distracted mobile user:** Primary CTA fits first viewport and core buttons are 44–56px. Persistent 127px header and 4,444px page add fatigue. Recording, Meetup, and footer-social targets measure only about 26–29px high.

**Staffing buyer:** Named clients, roles, dates, scale, and public speaking build trust fast. “Solo or embedded” is buried; stack text is subordinate; Habiit muddies “right frontend specialist for this web engagement?”

## Minor Observations

- Mobile Projects popover is about 230×153 and covers part of the hero headline while open. Acceptable temporary overlay, visually abrupt.
- Current field-soft contrast is strong. Stack issue is hierarchy and size, not contrast.
- Visible V badge during review came from Vite development tooling, not product UI.

## Questions to Consider

- If the buyer has 30 seconds, why is “solo or embedded” below every project and talk?
- Does Habiit earn one-third of the selected-work narrative?
- Is the signature interaction a paper sheet arriving or a quiet green lift? Which one should future contributors trust?
- What should a staffing buyer remember after one screen: the headline, or exact stack and engagement fit?
