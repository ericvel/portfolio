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
            <!-- The lead row drops the plate: with the mark, the title and the screenshot all
                 saying the same name, the plate was the third repetition — and its absence is
                 itself part of what separates the lead row from the two below it. -->
            <!-- Decorative: the client name is the title immediately beside it. -->
            <span v-if="!project.lead" class="work__mark">
              <img class="work__logo" :src="project.logo" alt="" width="180" height="36" />
            </span>

            <div class="work__body">
              <!-- A heading, not a styled span: the talks below are h3s, and a project
                   the reader can navigate to belongs in the same outline. -->
              <h3 class="work__title">{{ project.title }}</h3>
              <p class="work__blurb">{{ t(`projects.${project.id}.blurb`) }}</p>
            </div>

            <!-- Named, because six bare technology words read as a sentence to a screen
                 reader and the chip borders that carry the meaning visually are hairlines. -->
            <ul class="work__stack" role="list" :aria-label="t('work.techLabel')">
              <li v-for="item in project.tech" :key="item" class="work__tech mono">
                {{ item }}
              </li>
            </ul>

            <!-- Evidence, on the lead row only. It runs at the image's real ratio, the way the
                 project page runs it, rather than being cropped to a decorative band. -->
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

            <div class="work__facts">
              <span class="work__year mono">
                <span class="visually-hidden">{{ t("work.periodLabel") }}: </span>
                {{ project.year }}
              </span>
              <span class="work__role">{{ t(`projects.${project.id}.role`) }}</span>
              <span class="work__more">
                {{ t("work.readMore") }}
                <AppIcon name="arrow-right" />
              </span>
            </div>
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
  --row-pad: var(--space-6);

  background: var(--field);
  color: var(--paper);
  padding-block: var(--space-9);
  --focus: var(--paper);
}

.work__heading {
  margin: 0 0 var(--space-7);
  font-size: var(--step-4);
  font-weight: 500;
  letter-spacing: -0.025em;
}

.work__list {
  margin: 0;
  padding: 0;
  list-style: none;
  border-top: 1px solid var(--field-rule);
}

.work__item {
  border-bottom: 1px solid var(--field-rule);
}

/* One row per project — body, then the facts register — divided by hairlines rather than
   boxed. Nothing needs lifting off the field until the reader points at a row, so there is
   no card here at rest. */
.work__row {
  --row-secondary: var(--field-soft);
  --row-chip: var(--field-rule);
  --row-affordance: var(--field-soft);

  display: grid;
  /* Mark, name and claim, stack, facts. */
  grid-template-columns: 180px minmax(0, 1.4fr) minmax(0, 1fr) 210px;
  /* Registers start together rather than centring apart: a ledger's whole power is that its
     columns agree on a row line, which is what makes a stack readable down the page. */
  align-items: start;
  gap: var(--space-7);
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
    --row-chip: var(--rule-strong);
    --row-affordance: var(--signal);
    --focus: var(--ink);

    background: var(--paper);
    color: var(--ink);
  }
}

/* The lead row: the argument the other two corroborate. It gives its evidence a column of
   its own, so the emphasis is a thing the row does rather than the same row done larger. */
.work__row--lead {
  grid-template-columns: minmax(0, 1fr) minmax(0, 0.82fr);
  gap: var(--space-4) var(--space-7);
  padding-block: var(--space-7);

  .work__body {
    grid-area: 1 / 1;
  }

  .work__stack {
    grid-area: 2 / 1;
  }

  /* The facts sit under the body on the lead row, on a rule of their own, because the
     right-hand column is spent on the screenshot. */
  .work__facts {
    grid-area: 3 / 1;
    flex-direction: row;
    flex-wrap: wrap;
    gap: var(--space-3) var(--space-6);
    align-items: baseline;
    margin-top: var(--space-2);
    padding-top: var(--space-4);
    border-top: 1px solid var(--row-chip);
    transition: border-color 200ms ease;
  }

  .work__figure {
    grid-area: 1 / 2 / 4 / 3;
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
  gap: var(--space-2);
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

.work__stack {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-2);
  margin: 0;
  padding: 0;
  list-style: none;
}

.work__tech {
  padding: 5px 10px;
  border: 1px solid var(--row-chip);
  color: var(--row-secondary);
  white-space: nowrap;
  transition:
    border-color 200ms ease,
    color 200ms ease;
}

.work__figure {
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
}

.work__shot {
  display: block;
  width: 100%;
  /* Deep paper rather than nothing, so a slow image reads as loading instead of as an
     empty rectangle someone meant to fill. */
  background: var(--paper-deep);
  border: 1px solid var(--row-chip);
  transition: border-color 200ms ease;
}

.work__caption {
  color: var(--row-secondary);
  transition: color 200ms ease;
}

/* Year, role, then the affordance — the three facts a buyer needs before deciding whether
   the click is worth it. The row itself is the link, so the label is a pointer, not a
   target of its own. */
.work__facts {
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: var(--space-2);
}

.work__year {
  color: var(--row-secondary);
  transition: color 200ms ease;
}

.work__role {
  font-size: var(--step--1);
  font-weight: 500;
  line-height: 1.3;
}

/* Drawn as a background rather than a border so growing it from 1px to 2px never
   moves the label — the same idiom as the header's contact link. Signal may only appear
   on the field as a fill under ink, so at rest this is field mist: the only resting cue
   that the row is live has to clear 3:1 on its own ground. */
.work__more {
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  margin-top: var(--space-1);
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

/* The facts drop under the body before the columns get too narrow to hold a Norwegian
   role line on one line. */
/* The stack and the facts drop under the body before either column gets too narrow to hold
   a Norwegian tech list or role line on one line. */
@media (max-width: 1024px) {
  .work__row {
    /* 172px, not 156: the plate's inline padding comes off the column, and a 4.4:1 wordmark
       needs 156px of content left over or it goes width-bound and lands short of the others. */
    grid-template-columns: 172px minmax(0, 1fr);
    gap: var(--space-4) var(--space-6);
  }

  .work__body,
  .work__stack,
  .work__facts {
    grid-column: 2;
  }

  .work__facts {
    flex-direction: row;
    flex-wrap: wrap;
    gap: var(--space-3) var(--space-6);
    align-items: baseline;
    margin-top: var(--space-1);
  }

  .work__row--lead {
    grid-template-columns: minmax(0, 1fr);

    .work__body,
    .work__stack,
    .work__facts,
    .work__figure {
      grid-area: auto / 1;
    }

    /* The screenshot goes last on a single column: the reader should reach the claim and
       the stack before the evidence, not scroll past a picture to find them. */
    .work__figure {
      order: 3;
    }

    .work__facts {
      order: 4;
    }
  }
}

@media (max-width: 560px) {
  .work {
    --row-pad: var(--space-5);
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

  .work__body,
  .work__stack,
  .work__facts {
    grid-column: 1;
  }

  .work__row--lead .work__blurb {
    font-size: var(--step-1);
  }
}
</style>
