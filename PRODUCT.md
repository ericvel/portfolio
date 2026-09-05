# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Primary: people who buy frontend capacity in Norway.

- **Consultancies and agencies** looking for a frontend specialist to subcontract or place into a
  client team. They are comparing a shortlist, often under time pressure on a staffing need, and
  need to judge depth of specialization and whether the person is safe to put in front of a client.
- **Product companies hiring direct** — in-house teams that need a frontend specialist without a
  middleman. They care about whether the work matches their own stack and problem shape.

Both arrive to answer one question: is this person the right frontend specialist for a specific
piece of work we already have? The site is evaluated, not browsed.

Not primary audiences: conference organizers and recruiters/screeners. Talks content serves as
credibility evidence for the buying audiences, not as a speaker-booking funnel.

## Product Purpose

A personal portfolio for Eric Veliyulin, freelance frontend specialist. It exists to convert an
evaluating buyer into an email inquiry about paid freelance work. Success is a qualified inbound
email from a consultancy or product company with real work to place.

## Positioning

Freelance frontend specialist — currently independent and taking freelance engagements, solo or
embedded in an existing team. The claim is depth rather than breadth: five years across React, Vue
and TypeScript, with test coverage and accessibility treated as standard rather than as add-ons,
backed by shipped work in production at named Norwegian organizations (ASKO, Røde Kors) and by
public speaking on browser platform features (NDC London, Framsia).

The differentiator a neighboring portfolio could not truthfully copy: platform-level frontend
expertise demonstrated in public — talks on the Popover API, `dialog`, anchor positioning and
customizable select — paired with production work on large-scale operational UI (catalogues with
tens of thousands of items, keyboard navigation, predictable states).

## Operating Context

Visitors evaluate on desktop during a workday and on mobile between meetings. They typically arrive
from a LinkedIn profile, a referral, or a direct link sent by a colleague, already knowing the name.
They scan for stack match and evidence, then leave to email or to forward the link to a decision
maker. English-language visitors are the default case; Norwegian visitors can switch languages.

## Capabilities and Constraints

- Existing implementation: Vue 3 + Vite + TypeScript, vue-router, SCSS, deliberately unstyled at
  the current commit and awaiting a visual system.
- Bilingual via vue-i18n. **English (`en`) is the default locale; Norwegian (`no`) remains the
  canonical copy.** Locale persists to `localStorage`
  (`ev-portfolio-lang`) and is mirrored to `document.documentElement.lang`. Every string added
  anywhere must exist in both [no.ts](src/locales/no.ts) and [en.ts](src/locales/en.ts).
- Surfaces: home (hero, project carousel, talks, contact footer) and a per-project detail route.
- Project data is structured, not hand-written per page — see [projects.ts](src/data/projects.ts)
  and [types.ts](src/data/types.ts); project prose lives in the locale files.
- No CV or PDF download is part of the product.
- No backend, no forms, no analytics. Contact is a `mailto:` plus GitHub and LinkedIn links.

## Brand Commitments

- Name in use: **Eric Veliyulin**. Title in use: **frontendspesialist / frontend specialist**,
  freelance.
- Voice as written and confirmed: plain, specific, unhyped. States what was built and in what, names
  real clients and real constraints, no superlatives about itself. Norwegian copy sets the tone;
  English follows it.
- Contact identities are fixed: `eric.vel@outlook.com`, `github.com/ericvel`,
  `linkedin.com/in/eric-veliyulin`.
- Client names appear as real marks: ASKO, Røde Kors, Habiit logos ship as assets.

## Evidence on Hand

Real, in-repo, and usable:

- **ASKO Servering / Fiks** — [asko-servering.png](src/assets/projects/asko-servering.png),
  [asko-fiks.png](src/assets/projects/asko-fiks.png), [asko-logo.jpg](src/assets/projects/asko-logo.jpg).
  Vue, Vite, TypeScript, Vitest, Playwright, TanStack Query.
- **Mitt Røde Kors** — [mitt-rode-kors.png](src/assets/projects/mitt-rode-kors.png),
  [rode-kors-logo.svg](src/assets/projects/rode-kors-logo.svg). React, Next.js, Tailwind CSS.
- **Habiit** — [habiit.png](src/assets/projects/habiit.png),
  [habiit-logo.svg](src/assets/projects/habiit-logo.svg). Swift, Firebase, iOS.
- **Talks** — NDC London 2026, "The New Frontend Toolkit", recording at
  `youtube.com/watch?v=rjMwM7--9cA`, 60 min, English. Framsia Oslo, "Customizable select
  components", `meetup.com/framsia/events/313652618/`. Ongoing in-house sessions, on request.

Project screenshots are not NDA-restricted; more client imagery can be sourced if a design needs it,
but it must be requested from Eric, never invented.

Absent — future work must not fabricate these: testimonials or client quotes, named references,
performance or business metrics, case-study outcomes, awards, client lists beyond the three named
projects, availability dates, rates, and any headcount or company framing (this is one person).

## Product Principles

1. **Evidence over adjectives.** Every claim on the site is anchored to a named client, a shipped
   product, a recorded talk, or a listed technology. If it cannot be pointed at, it does not ship.
2. **Built for the stack-match scan.** A visitor deciding in under a minute must be able to find
   what was built, for whom, and in what. Technology names are content, not decoration.
3. **Practice what the copy claims.** The site claims accessibility and test coverage as standard,
   so the site itself must hold to **WCAG 2.2 AA**. A portfolio that fails its own claim is the
   worst possible proof.
4. **Norwegian first, English equal.** Norwegian is the canonical voice; English is never a
   second-class layout. Any design must survive both string lengths.
5. **One path out: email.** Contact is a single, unmissable action. Nothing competes with it for the
   role of primary conversion.

## Accessibility & Inclusion

**WCAG 2.2 AA is a hard requirement**, not an aspiration — it is the product's central credibility
claim. Full keyboard operability, visible focus, sufficient contrast, correct landmarks and heading
order, and correct `lang` per locale are non-negotiable for every surface.
