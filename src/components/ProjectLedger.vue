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

              <!-- Period, role and stack in one register: three facts a buyer reads as one
                   sentence, so they stop being three columns to cross. -->
              <div class="work__meta">
                <span class="work__year mono">
                  <span class="visually-hidden">{{ t("work.periodLabel") }}: </span>
                  {{ project.year }}
                </span>
                <span class="work__sep mono" aria-hidden="true">·</span>
                <span class="work__role">{{ t(`projects.${project.id}.role`) }}</span>
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
  --row-pad: var(--space-7);

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

/* Two registers, not four: the mark, then the entry. Period, role and stack used to be three
   more columns to cross, and a ledger row a buyer reads in one pass should be one paragraph
   with a mark beside it. Nothing needs lifting off the field until the reader points at a
   row, so there is no card here at rest. */
.work__row {
  --row-secondary: var(--field-soft);
  --row-affordance: var(--field-soft);

  display: grid;
  grid-template-columns: 180px minmax(0, 1fr);
  /* Registers start together rather than centring apart: a ledger's whole power is that its
     columns agree on a row line. */
  align-items: start;
  column-gap: var(--space-8);
  row-gap: var(--space-5);
  /* The paper flip runs 24px past the column edge on both sides, so the type keeps the
     site's unbroken left line while the sheet reads as something slid under the rule. */
  padding: var(--row-pad) var(--space-5);
  margin-inline: calc(var(--space-5) * -1);
  color: inherit;
  text-decoration: none;
  transition:
    background 200ms ease,
    color 200ms ease;

  /* The system's one licensed inversion, used as the pointer: the row under
     consideration becomes the paper object. Nothing fades, nothing shrinks — the
     ground changes and the text colour changes with it. */
  &:hover,
  &:focus-visible {
    --row-secondary: var(--ink-soft);
    --row-affordance: var(--signal);
    --focus: var(--ink);

    background: var(--paper);
    color: var(--ink);
  }
}

/* The lead row: the argument the other two corroborate. It gives its evidence a column of
   its own, so the emphasis is a thing the row does rather than the same row done larger. */
.work__row--lead {
  grid-template-columns: minmax(0, 1fr) minmax(0, 0.8fr);
  padding-block: calc(var(--row-pad) + var(--space-4));

  .work__body {
    grid-area: 1 / 1;
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
}

.work__body {
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
  min-width: 0;
}

/* The mark keeps a paper plate of its own at rest, because multiply needs a light
   ground to print onto — and when the row flips, the plate merges into the sheet.
   The plate is sized by its content box so a 4.4:1 wordmark stays bounded by height
   rather than landing visibly shorter than a 2.5:1 lockup. */
.work__mark {
  display: grid;
  /* Ranged left, not centred: the mark is the row's first register and has to start on
     the same column line as every heading on the site. */
  place-items: center start;
  /* Bounded rather than stretched: once the row collapses to one column, a plate that fills
     the viewport is a paper slab with a small mark parked in it. */
  justify-self: start;
  width: min(100%, 180px);
  min-width: 156px;
  height: 64px;
  /* No inline padding at the start edge: the plate is a ground for the mark, and it is the
     mark's own ink that has to land on the shared column line, not the rectangle around it. */
  padding-block: var(--space-2);
  padding-inline: 0 var(--space-3);
  background: var(--paper);
}

.work__logo {
  display: block;
  width: auto;
  max-height: 36px;
  max-width: 100%;
  object-fit: contain;
  /* Client marks are supplied on white grounds. Multiply prints them onto the plate
     instead of parking a white rectangle on it. */
  mix-blend-mode: multiply;
}

.work__title {
  margin: 0;
  font-size: var(--step-3);
  font-weight: 500;
  line-height: 1.1;
  letter-spacing: -0.02em;
  text-wrap: balance;
}

.work__blurb {
  margin: 0;
  max-width: 42ch;
  font-size: var(--step-0);
  line-height: 1.5;
  color: var(--row-secondary);
  text-wrap: pretty;
  transition: color 200ms ease;
}

/* Period, role and stack in one register — two lines rather than three columns. The stack takes
   a line of its own rather than flowing after the role: a Norwegian six-technology list does not
   fit beside a dated role at any width the site has, and a divider left hanging at the end of a
   wrapped line reads as a mistake. */
.work__meta {
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  gap: var(--space-2) var(--space-3);
  margin-top: var(--space-1);
  color: var(--row-secondary);
  transition: color 200ms ease;
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
  flex-basis: 100%;
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
  transition: color 200ms ease;
}

/* Drawn as a background rather than a border so growing it from 1px to 2px never
   moves the label — the same idiom as the header's contact link. Signal may only appear
   on the field as a fill under ink, so at rest this is field mist: the only resting cue
   that the row is live has to clear 3:1 on its own ground. */
.work__more {
  display: inline-flex;
  align-items: center;
  /* The affordance sits in the body column now, so it has to hug its own label: stretched to the
     column it would drag its underline across the whole row. */
  align-self: start;
  gap: var(--space-2);
  margin-top: var(--space-5);
  padding-bottom: 5px;
  font-size: var(--step--1);
  font-weight: 500;
  white-space: nowrap;
  background-image: linear-gradient(var(--row-affordance), var(--row-affordance));
  background-repeat: no-repeat;
  background-position: 0 100%;
  background-size: 100% 1px;
  transition: background-size 200ms ease;
}

/* Once the row has flipped to paper the signal underline is legal — and it marks the row
   being offered as the one live action in the region. */
.work__row:hover .work__more,
.work__row:focus-visible .work__more {
  background-size: 100% 2px;
}

.work__more :deep(.icon) {
  transition: transform 220ms cubic-bezier(0.16, 1, 0.3, 1);
}

.work__row:hover .work__more :deep(.icon),
.work__row:focus-visible .work__more :deep(.icon) {
  transform: translate(3px, -0.5px);
}

@media (max-width: 1024px) {
  .work__row {
    /* 172px, not 156: the plate's inline padding comes off the column, and a 4.4:1 wordmark
       needs 156px of content left over or it goes width-bound and lands short of the others. */
    grid-template-columns: 172px minmax(0, 1fr);
    column-gap: var(--space-6);
  }

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
    /* At this width the bleed is the gutter itself, so the paper sheet runs exactly
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
