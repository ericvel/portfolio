<script setup lang="ts">
import { useI18n } from "vue-i18n";
import { RouterLink } from "vue-router";
import AppIcon from "@/components/AppIcon.vue";
import { PROJECTS } from "@/data/projects";

const { t } = useI18n();

/** The lead project's dedicated ledger screenshot, resolved once outside the template. */
const ROWS = PROJECTS.map((project) => ({
  project,
  shot: project.lead ? project.leadImage : undefined,
}));
</script>

<template>
  <section class="work" aria-labelledby="prosjekter-tittel">
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
            view-transition
            class="work__row"
            :class="{ 'work__row--lead': project.lead }"
            :aria-label="`${project.title} — ${t('work.readMore')}`"
            :to="{ name: 'project', params: { id: project.id } }"
          >
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
              </div>

              <ul class="work__stack mono" role="list" :aria-label="t('work.techLabel')">
                <li v-for="item in project.tech" :key="item" class="work__tech">
                  {{ item }}
                </li>
              </ul>

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
.work {
  --row-pad: var(--space-7);

  background: var(--field);
  color: var(--field-ink);
  padding-block: clamp(var(--space-8), 8vw, var(--space-9));
  --focus: var(--field-ink);
}

.work__heading {
  margin: 0 0 var(--space-7);
  font-size: var(--step-4);
  font-weight: 500;
  letter-spacing: -0.025em;
}

/* ASKO makes the case at full width. The two corroborating projects share the next row,
   following the same featured-plus-pair rhythm as the talks section. */
.work__list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 340px), 1fr));
  column-gap: var(--space-8);
  row-gap: var(--space-8);
  margin: 0;
  padding: 0;
  list-style: none;
}

.work__item {
  min-width: 0;
  border-top: 1px solid var(--field-rule);
}

.work__item--lead {
  grid-column: 1 / -1;
  border-top: 0;
}

@property --row-affordance {
  syntax: "<color>";
  inherits: true;
  initial-value: #c3d4c8;
}

.work__row {
  --row-secondary: var(--field-soft);
  --row-affordance: var(--field-soft);
  --answer: 190ms;
  --ease-row: cubic-bezier(0.16, 1, 0.3, 1);

  display: block;
  height: 100%;
  padding-block: var(--space-5);
  padding-inline: var(--space-5);
  margin-inline: calc(var(--space-5) * -1);
  color: inherit;
  text-decoration: none;
  transition:
    background var(--answer) var(--ease-row),
    box-shadow var(--answer) var(--ease-row),
    --row-affordance var(--answer) var(--ease-row);

  &:hover,
  &:focus-visible {
    --answer: 140ms;
    --row-secondary: color-mix(in srgb, var(--field-soft) 62%, var(--field-ink));
    --row-affordance: var(--field-ink);

    background: color-mix(in srgb, var(--field-ink) 4%, var(--field));
    box-shadow: inset 0 -1px 0 var(--field-ink);
  }
}

/* Every project shares the same horizontal state band. The lead project keeps its distinct
   claim-and-screenshot split and more generous vertical rhythm. */
.work__row--lead {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  align-items: start;
  column-gap: var(--space-8);
  row-gap: var(--space-5);
  padding-block: var(--row-pad);

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
}

.work__body {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  min-width: 0;
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
  max-width: 58ch;
  margin: var(--space-3) 0 0;
  font-size: var(--step-0);
  line-height: 1.5;
  color: var(--row-secondary);
  text-wrap: pretty;
  transition: color var(--answer) var(--ease-row);
}

.work__meta {
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  gap: var(--space-2) var(--space-3);
  margin-top: var(--space-4);
  color: var(--row-secondary);
  transition: color var(--answer) var(--ease-row);
}

.work__sep {
  color: inherit;
}

.work__role {
  font-size: var(--step--1);
  font-weight: 500;
  color: inherit;
}

.work__stack {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-2) var(--space-3);
  margin: var(--space-2) 0 0;
  padding: 0;
  list-style: none;
  font-size: var(--step--1);
  line-height: 1.5;
}

.work__tech {
  white-space: nowrap;
}

.work__figure {
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
  min-width: 0;
  margin: 0;
}

.work__shot {
  display: block;
  width: 100%;
  max-width: 100%;
  height: auto;
  background: var(--paper-deep);
}

.work__caption {
  color: var(--row-secondary);
  transition: color var(--answer) var(--ease-row);
}

.work__more {
  display: inline-flex;
  align-items: center;
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
  transition: background-size var(--answer) var(--ease-row);
}

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

  .work__list {
    row-gap: var(--space-7);
  }

  .work__row {
    padding-inline: var(--gutter);
    margin-inline: calc(var(--gutter) * -1);
    outline-offset: -3px;
  }

  .work__row--lead .work__blurb {
    font-size: var(--step-1);
  }
}
</style>
