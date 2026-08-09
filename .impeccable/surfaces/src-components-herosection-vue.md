---
version: 1
slug: "src-components-herosection-vue"
primary_target: "src/components/HeroSection.vue"
related_targets: ["src/components/SiteHeader.vue","src/components/LanguageToggle.vue"]
---

# Home hero

- **Scope / mode:** `src/components/HeroSection.vue`; Persuade inside established portfolio world.
- **Audience / job:** Norwegian staffing buyer shortlisting frontend capacity; establish specialist fit and trust within first viewport, then invite freelance inquiry.
- **Proof / action:** ASKO and Røde Kors production work; NDC London 2026 public expertise; primary action “Ta kontakt om oppdrag”; visible selectable `eric.vel@outlook.com` fallback.
- **Direction:** approved full-width proof rail from `.impeccable/mocks/hero-option-b-proof-rail.png`. Sequence: eyebrow → headline → lede → two-part proof rail → contact row. Project field enters first desktop viewport. On mobile, proof cells stack before contact.
- **Boundaries:** preserve existing paper/ink/green/signal system, type families, square geometry, shared register, bilingual copy, GitHub/LinkedIn, and downstream sections. No cards, logos, invented metrics, testimonials, descriptive NDC claim, technology chips, new accent, or second primary action.

## Fidelity inventory

| Commitment | Implementation medium | Notes |
|---|---|---|
| Sticky header and shared left register | Existing semantic Vue/CSS | Preserve behavior; enlarge compact targets to 44px hit area. |
| Oversized headline and mono eyebrow | Existing semantic HTML/CSS | Preserve established type scale and exact localized copy. |
| Two-cell horizontal proof rail | Semantic `dl`/CSS grid | Open hairlines; labels PRODUKSJON/FAGLIG; values ASKO · RØDE KORS and NDC LONDON 2026. |
| Qualified primary contact | Existing `mailto:` link | Localized hero-specific label. |
| Visible email fallback | Semantic selectable text/link | Quiet treatment; same address, no competing filled action. |
| GitHub / LinkedIn | Existing links | Quiet; 44px minimum interaction height. |
| Green projects entry in viewport | CSS interval reduction | Preserve downstream section design. |
| Generated comp text/layout artifacts | Accepted omission | Do not copy orange square inside button, incorrect font weight, or mock-only typography literally. |
