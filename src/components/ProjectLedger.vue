<script setup lang="ts">
import { useI18n } from "vue-i18n";
import AppIcon from "@/components/AppIcon.vue";
import { PROJECTS } from "@/data/projects";

const { t } = useI18n();

/** The lead row's screenshot, resolved once so the template never indexes into `images`. */
const ROWS = PROJECTS.map((project) => ({
  project,
  shot: project.lead ? project.images[0] : undefined,
}));
</script>

<template>
  <section id="prosjekter" class="work" aria-labelledby="prosjekter-tittel">
    <div class="shell">
      <h2 id="prosjekter-tittel" class="work__heading">{{ t("work.heading") }}</h2>

      <ul class="work__list" role="list">
        <li
          v-for="{ project, shot } in ROWS"
          :key="project.id"
          class="work__item"
          :class="{ 'work__item--lead': project.lead }"
        >
          <RouterLink
            class="work__row"
            :class="{ 'work__row--lead': project.lead }"
            :aria-label="`${project.title} — ${t('work.readMore')}`"
            :to="{ name: 'project', params: { id: project.id } }"
          >
            <span v-if="!project.lead" class="work__mark">
              <img class="work__logo" :src="project.logo" alt="" width="180" height="36" />
            </span>

            <div class="work__body">
              <h3 class="work__title">{{ project.title }}</h3>
              <p class="work__blurb">{{ t(`projects.${project.id}.blurb`) }}</p>

              <div class="work__meta">
                <span class="work__year mono">
                  <span class="visually-hidden">{{ t("work.periodLabel") }}: </span>
                  {{ project.year }}
                </span>
                <span class="work__sep mono" aria-hidden="true">·</span>
                <span class="work__role">{{ t(`projects.${project.id}.role`) }}</span>
                <span v-if="!project.lead" class="work__sep mono" aria-hidden="true">·</span>
                <ul class="work__stack" role="list" :aria-label="t('work.techLabel')">
                  <li v-for="item in project.tech" :key="item" class="work__tech mono">
                    {{ item }}
                  </li>
                </ul>
              </div>

              <span class="work__more">
                {{ t("work.readMore") }}
                <AppIcon name="arrow-right" />
              </span>
            </div>

            <figure v-if="shot" class="work__figure">
              <img
                class="work__shot"
                :src="shot.src"
                :style="{ aspectRatio: shot.ratio }"
                alt=""
                loading="lazy"
              />
              <figcaption class="work__caption mono">
                {{ t(`projects.${project.id}.leadCaption`) }}
              </figcaption>
            </figure>
          </RouterLink>
        </li>
      </ul>
    </div>
  </section>
</template>

<style scoped lang="scss">
/* The one region that owns a colour at page scale. The field runs edge to edge and
   everything inside it inverts to paper. */
.work {
  /* Two rhythms, because the region holds two kinds of object: the lead row buys air, and a
     corroborating line spends about half of it. The gap between those two numbers is what
     makes the hierarchy legible before a single word is read. */
  --row-pad: var(--space-7);
  --line-pad: var(--space-5);

  background: var(--field);
  color: var(--paper);
  padding-block: clamp(var(--space-9), 10vw, var(--space-10));
  --focus: var(--paper);
}

.work__heading {
  margin: 0 0 var(--space-8);
  font-size: var(--step-4);
  font-weight: 500;
  letter-spacing: -0.025em;
}

/* Two hairlines for three rows rather than four: a rule above the first row and below the
   last one was drawing a box, and the field's own edges already say where the region ends. */
.work__list {
  margin: 0;
  padding: 0;
  list-style: none;
}

.work__item {
  border-bottom: 1px solid var(--field-rule);

  &:last-child {
    border-bottom: 0;
  }
}

/* The affordance's colour is inherited from the row so the underline follows the ground
   through one variable rather than being restated — but an unregistered custom property is a
   token swap, not a value, so it snaps at t=0 and the gradient drawn from it snaps with it.
   Typing it as a colour is what makes it interpolable, which is what lets the underline
   brighten on the ground's own clock instead of arriving ahead of it. */
@property --row-affordance {
  syntax: "<color>";
  inherits: true;
  initial-value: #c3d4c8;
}

/* Two registers, not four: the mark, then the entry. Period, role and stack used to be three
   more columns to cross, and a ledger row a buyer reads in one pass should be one paragraph
   with a mark beside it. Nothing needs lifting off the field until the reader points at a
   row, so there is no card here at rest.

   The default row is a line, not a panel. A corroborating project set at full row height left
   a column of nothing to the right of a 42ch blurb — and that emptiness was vertical, not
   horizontal: at a third of the height the same text reads as a line in a ledger and the space
   after it reads as the end of a line rather than as an unfinished column. The plate column is
   172px here, which is what the widest wordmark needs in content width; every number below is
   one step quieter than the lead row's. */
.work__row {
  --row-secondary: var(--field-soft);
  --row-affordance: var(--field-soft);
  /* One clock and one curve for the whole state, read by every child through inheritance so the
     ground, the ink, the underline and the arrow cannot come apart into separately timed events.
     They used to: a 200ms underline, a 220ms arrow and a 300ms ground, on two different curves,
     because a ground that large had to be nursed and the faster parts were compensating for it.

     This is the leaving figure. Arriving is quicker — see the hover block — which is the reverse
     of the old arrangement, and follows from the size of the change: a full sheet of paper had
     to arrive gently or it read as the region losing its ground, but a four-point lift has no
     weight to land, and anything spent easing it in is felt only as delay. */
  --answer: 190ms;
  /* The site's interaction curve, aliased once here because six declarations below spend it.
     Quick off the mark, settling at the end. The row previously used `--ease-ground`, which is
     sine-in-out: near-flat for its first third, which over 66 points of lightness reads as the
     sheet arriving and over four points reads as nothing happening yet. */
  --ease-row: cubic-bezier(0.16, 1, 0.3, 1);

  display: grid;
  grid-template-columns: 172px minmax(0, 1fr);
  /* Registers start together rather than centring apart: a ledger's whole power is that its
     columns agree on a row line. */
  align-items: start;
  column-gap: var(--space-6);
  row-gap: var(--space-5);
  /* The lift runs 24px past the column edge on both sides, so the type keeps the site's
     unbroken left line while the band reads as something slid under the rule. */
  padding: var(--line-pad) var(--space-5);
  margin-inline: calc(var(--space-5) * -1);
  color: inherit;
  text-decoration: none;

  transition:
    background var(--answer) var(--ease-row),
    box-shadow var(--answer) var(--ease-row),
    --row-affordance var(--answer) var(--ease-row);

  /* The row under consideration is lit, not reprinted. Full inversion put a 1160 × 860px sheet
     of paper on screen for the lead row — and because a ground treatment's area scales with row
     height, the biggest row always took the biggest hit, which is exactly backwards. So the
     ground barely moves here (4% of paper mixed into the field, against the 66 points of
     lightness it used to travel) and the state is carried by the ink instead: the secondary line
     lifts out of field mist toward paper, holding the blurb at 6.3:1 against the 6.2:1 it reads
     at rest. That pairing is the reason for the ink half. Lifting the ground alone costs
     contrast — a 9% wash with the secondary left where it is drops the blurb to 4.9:1 — so the
     ink has to rise with the ground just to stay level, and rising slightly further is free.

     That is the point of the whole arrangement — pointing at a row makes it easier to read
     rather than differently coloured — and it is height-independent, so a 150px line and an
     860px lead row answer the pointer identically. It also lets the ink genuinely fade, which a
     full flip never could: paper ink crossing to dark ink has to pass through the ground's own
     lightness on the way, but field mist crossing to paper never does. */
  &:hover,
  &:focus-visible {
    /* Arriving is the half the pointer is waiting on, so it is the shorter one. On this curve
       140ms is most of the way there inside 40, which is what makes the row feel answered rather
       than animated; the remainder is settle the eye reads as smoothness, not as latency. */
    --answer: 140ms;

    /* Never all the way to paper: the primary line is paper, and a secondary that reaches it has
       stopped being secondary. */
    --row-secondary: color-mix(in srgb, var(--field-soft) 62%, var(--paper));
    /* Signal is illegal on the field in any form, and the ground never leaves the field now, so
       the affordance brightens to paper rather than turning orange. */
    --row-affordance: var(--paper);

    color: var(--paper);
    background: color-mix(in srgb, var(--paper) 4%, var(--field));
    /* The row's own edge, drawn inset so it never displaces a pixel. At this little ground
       movement the band needs one hard line to say where it ends. */
    box-shadow: inset 0 -1px 0 var(--paper);
  }
}

/* The lead row: the argument the other two corroborate. It gives its evidence a column of
   its own, so the emphasis is a thing the row does rather than the same row done larger. */
.work__row--lead {
  grid-template-columns: minmax(0, 1fr) minmax(0, 0.8fr);
  /* 64px between the two registers, where a line gets 32: the interval is part of the
     argument, not just spacing. */
  column-gap: var(--space-8);
  padding-block: calc(var(--row-pad) + var(--space-6));

  .work__body {
    grid-area: 1 / 1;
    gap: var(--space-3);
  }

  .work__figure {
    grid-area: 1 / 2 / 2 / 3;
  }

  .work__title {
    font-size: var(--step-4);
    letter-spacing: -0.025em;
  }

  .work__blurb {
    max-width: 40ch;
    font-size: var(--step-2);
    line-height: 1.4;
  }

  /* Six technologies do not fit beside a dated role at any width this site has, so the lead
     row's stack keeps its own line. A three-technology line does fit, which is why the
     corroborating rows no longer break. */
  .work__stack {
    flex-basis: 100%;
  }

  .work__more {
    margin-top: var(--space-5);
  }
}

.work__body {
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
  min-width: 0;
}

/* The mark keeps a paper plate of its own, because multiply needs a light ground to print
   onto. It is the one piece of paper in the region that is always present, which is also why
   the row's own lift can afford to be as slight as it is: the plate already gives the eye a
   light object to read the line against. The plate is sized by its content box so a 4.4:1
   wordmark stays bounded by height rather than landing visibly shorter than a 2.5:1 lockup. */
.work__mark {
  display: grid;
  /* A mount, not a column: the plate is one fixed rectangle and the mark is centred in it.
     The mark used to range left with no padding at the start edge, so that its own ink landed
     on the shared column line — which was the right call while the row flipped to a full sheet
     of paper and the plate dissolved into it. The row lifts 4% now and the plate is permanent,
     so what the eye reads is a frame with its picture jammed into one corner: Røde Kors' cross
     touching the left edge like a crop, and 88px of empty paper trailing the Habiit wordmark.
     The plate's own edge holds the column line instead — a paper-to-field boundary is a harder
     vertical than a glyph edge ever was — and both marks get even air on all four sides.

     Uniform rather than shrink-to-fit: a plate hugging each mark puts two paper rectangles of
     different widths against the field, and at this contrast the shape's raggedness is louder
     than the 20px of x-position the centring costs. */
  place-items: center;
  /* Bounded rather than stretched: once the row collapses to one column, a plate that fills
     the viewport is a paper slab with a small mark parked in it. */
  justify-self: start;
  width: min(100%, 180px);
  min-width: 156px;
  /* 48px, not 64: the plate is sized to the line it labels. Both marks stay bounded by
     height at this size — check a new one's rendered height against them rather than
     trusting the max-height. */
  height: 48px;
  /* 16px of side margin against 10px above and below — a wordmark's mount carries slightly
     more air at the sides than at the head. It also sets the content width to 140px, which is
     what a new mark has to stay inside at 28px tall to remain bounded by height. */
  padding-block: var(--space-1);
  padding-inline: var(--space-4);
  background: var(--paper);
}

.work__logo {
  display: block;
  width: auto;
  max-height: 28px;
  max-width: 100%;
  object-fit: contain;
  /* Client marks are supplied on white grounds. Multiply prints them onto the plate
     instead of parking a white rectangle on it. */
  mix-blend-mode: multiply;
}

.work__title {
  margin: 0;
  font-size: var(--step-2);
  font-weight: 500;
  line-height: 1.1;
  letter-spacing: -0.02em;
  text-wrap: balance;
}

.work__blurb {
  margin: 0;
  /* Wider than the lead row's 40ch, because a line has the whole column to spend and a
     shorter measure here is what left the emptiness on the right in the first place. */
  max-width: 58ch;
  font-size: var(--step-0);
  line-height: 1.5;
  color: var(--row-secondary);
  text-wrap: pretty;
  transition: color var(--answer) var(--ease-row);
}

/* Period, role and stack in one register rather than three columns. On a corroborating line all
   three read as one sentence — 2021–2023 · Lead frontendutvikler · React Next.js Tailwind CSS —
   which is what keeps the row one line tall. The lead row's six-technology list does not fit
   beside a dated role at any width the site has, so it alone breaks to a second line. */
.work__meta {
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  gap: var(--space-2) var(--space-3);
  margin-top: var(--space-1);
  color: var(--row-secondary);
  transition: color var(--answer) var(--ease-row);
}

/* Decorative in the markup as well as here: the period and the role are separate elements, so
   the divider between them is a mark for the eye only. */
.work__sep {
  color: inherit;
}

.work__role {
  font-size: var(--step--1);
  font-weight: 500;
  color: inherit;
}

/* Named in the markup, because six bare technology words read as a sentence to a screen
   reader. The chip border is gone: twelve hairline rectangles were the densest ink in the
   region, and a technology name is content that needs no box to be read as one. */
.work__stack {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-2) var(--space-3);
  margin: 0;
  padding: 0;
  list-style: none;
}

.work__tech {
  color: inherit;
  white-space: nowrap;
}

.work__figure {
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
}

/* No hairline of its own: the screenshot's own edge against the field is the division, and a
   border here was one more line in a region that had too many. */
.work__shot {
  display: block;
  width: 100%;
  /* Deep paper rather than nothing, so a slow image reads as loading instead of as an
     empty rectangle someone meant to fill. */
  background: var(--paper-deep);
}

.work__caption {
  color: var(--row-secondary);
  transition: color var(--answer) var(--ease-row);
}

/* Drawn as a background rather than a border so growing it from 1px to 2px never
   moves the label — the same idiom as the header's contact link. At rest this is field mist:
   the only resting cue that the row is live has to clear 3:1 on its own ground. */
.work__more {
  display: inline-flex;
  align-items: center;
  /* The affordance sits in the body column now, so it has to hug its own label: stretched to the
     column it would drag its underline across the whole row. */
  align-self: start;
  gap: var(--space-2);
  margin-top: var(--space-2);
  padding-bottom: 5px;
  font-size: var(--step--1);
  font-weight: 500;
  white-space: nowrap;
  background-image: linear-gradient(var(--row-affordance), var(--row-affordance));
  background-repeat: no-repeat;
  background-position: 0 100%;
  background-size: 100% 1px;
  /* One clock now. The underline used to run 100ms ahead of the ground on a curve of its own,
     so that its weight — which is geometry, and lands instantly — could cover for a ground that
     took 300ms to show up. With the ground answering in 140 there is nothing left to cover for,
     and the weight and the colour can travel together: the colour rides the row's interpolated
     `--row-affordance`, the weight rides the same clock, and the line thickens and brightens as
     one gesture instead of thickening first and colouring in afterwards. */
  transition: background-size var(--answer) var(--ease-row);
}

/* Doubling the weight is what marks this row's link as the one live action in the region —
   the underline is already present at rest, so nothing appears out of nowhere. */
.work__row:hover .work__more,
.work__row:focus-visible .work__more {
  background-size: 100% 2px;
}

.work__more :deep(.icon) {
  transition: transform var(--answer) var(--ease-row);
}

.work__row:hover .work__more :deep(.icon),
.work__row:focus-visible .work__more :deep(.icon) {
  transform: translate(3px, -0.5px);
}


@media (max-width: 1024px) {
  /* The screenshot goes last on a single column: the reader should reach the claim and the
     stack before the evidence, not scroll past a picture to find them. */
  .work__row--lead {
    grid-template-columns: minmax(0, 1fr);

    .work__body,
    .work__figure {
      grid-area: auto / 1;
    }

    .work__figure {
      order: 3;
    }
  }
}

@media (max-width: 560px) {
  .work {
    --row-pad: var(--space-6);
  }

  .work__row {
    grid-template-columns: minmax(0, 1fr);
    /* At this width the bleed is the gutter itself, so the lifted band runs exactly
       edge to edge instead of being clipped a few pixels short of it. */
    padding-inline: var(--gutter);
    margin-inline: calc(var(--gutter) * -1);
    /* The row is now as wide as the viewport, so an outset ring would draw its vertical
       sides off-screen. Inset keeps all four edges of the indicator visible. */
    outline-offset: -3px;
  }

  .work__row--lead .work__blurb {
    font-size: var(--step-1);
  }
}
</style>
