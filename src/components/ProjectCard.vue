<script setup lang="ts">
import { computed } from "vue";
import { useI18n } from "vue-i18n";
import { RouterLink } from "vue-router";
import AppIcon from "@/components/AppIcon.vue";
import type { Project } from "@/data/types";

const props = defineProps<{
  project: Project;
  active: boolean;
}>();

const { t } = useI18n();

const blurb = computed(() => t(`projects.${props.project.id}.blurb`));
/** The shipped screenshot leads: it is the evidence, and the logo only says who for. */
const shot = computed(() => props.project.images[0]);
</script>

<template>
  <RouterLink
    class="card"
    :class="{ 'card--muted': !active }"
    :aria-label="`${project.title} — ${t('work.readMore')}`"
    :to="{ name: 'project', params: { id: project.id } }"
  >
    <figure v-if="shot" class="card__shot">
      <img class="card__shot-image" :src="shot.src" alt="" loading="lazy" decoding="async" />
    </figure>

    <div class="card__body">
      <div class="card__head">
        <!-- Decorative: the client name is the h3 immediately beside it. -->
        <img class="card__logo" :src="project.logo" alt="" loading="lazy" />
        <h3 class="card__title">{{ project.title }}</h3>
      </div>

      <p class="card__blurb">{{ blurb }}</p>

      <div class="card__foot">
        <ul class="card__stack">
          <li v-for="item in project.tech" :key="item" class="card__tech mono">{{ item }}</li>
        </ul>
        <span class="card__more">
          {{ t("work.readMore") }}
          <AppIcon name="arrow-right" />
        </span>
      </div>
    </div>
  </RouterLink>
</template>

<style scoped lang="scss">
.card {
  /* The track owns the width so its trailing-padding maths cannot drift from it. */
  flex: 0 0 var(--card-width, min(680px, 84vw));
  scroll-snap-align: start;
  display: flex;
  flex-direction: column;
  background: var(--paper);
  /* The section inverts to paper-on-field; inside the card it inverts back. Without
     this the card inherits the field's paper text and the title vanishes. */
  color: var(--ink);
  cursor: pointer;
  transition:
    background 520ms cubic-bezier(0.16, 1, 0.3, 1),
    transform 520ms cubic-bezier(0.16, 1, 0.3, 1);

  &:focus-visible {
    outline: 2px solid var(--paper);
    outline-offset: 4px;
  }
}

/* The only motion on the page that carries meaning: the cards off the reading edge
   recede so the aligned one reads as the one being offered. The recession is scale
   and a cooler ground, never opacity — this text stays a real 6:1 link at all times,
   and a site claiming AA cannot fade a third of its evidence to 2:1 for effect. */
.card--muted {
  background: var(--paper-deep);
  transform: scale(0.97);
}

.card__shot {
  margin: 0;
  overflow: hidden;
  border-bottom: 1px solid var(--rule);
}

.card__shot-image {
  display: block;
  width: 100%;
  /* Ratios differ per project; a single display ratio keeps the row even and the
     comparison honest. Anchored to the top, where the interface chrome lives. */
  aspect-ratio: 16 / 10;
  object-fit: cover;
  object-position: 50% 0;
  background: var(--paper-deep);
}

.card__body {
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
  padding: var(--space-6);
}

.card__head {
  display: flex;
  align-items: center;
  gap: var(--space-4);
}

.card__logo {
  width: auto;
  height: 26px;
  max-width: 108px;
  object-fit: contain;
  object-position: left center;
  flex: none;
}

.card__title {
  margin: 0;
  font-size: var(--step-3);
  font-weight: 500;
  line-height: 1.1;
  letter-spacing: -0.02em;
}

.card__blurb {
  margin: 0;
  font-size: var(--step-0);
  line-height: 1.5;
  color: var(--ink-soft);
  text-wrap: pretty;
}

.card__foot {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: var(--space-5);
  margin-top: var(--space-2);
  padding-top: var(--space-4);
  border-top: 1px solid var(--rule);
}

.card__stack {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-1) var(--space-3);
  margin: 0;
  padding: 0;
  list-style: none;
}

.card__tech {
  color: var(--ink-soft);
  white-space: nowrap;
}

.card__more {
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  flex: none;
  font-size: var(--step--1);
  font-weight: 500;
  color: var(--ink);
  padding-bottom: 3px;
  border-bottom: 2px solid var(--signal);
  white-space: nowrap;
}

.card:hover .card__more :deep(.icon) {
  transform: translate(3px, -0.5px);
}

.card__more :deep(.icon) {
  transition: transform 220ms cubic-bezier(0.16, 1, 0.3, 1);
}

@media (max-width: 560px) {
  .card__body {
    padding: var(--space-5);
  }

  .card__foot {
    flex-direction: column;
    align-items: flex-start;
    gap: var(--space-4);
  }
}
</style>
