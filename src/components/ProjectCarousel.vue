<script setup lang="ts">
import { computed, ref } from "vue";
import { useI18n } from "vue-i18n";
import AppIcon from "@/components/AppIcon.vue";
import ProjectCard from "@/components/ProjectCard.vue";
import { pad, useProjectCarousel } from "@/composables/useProjectCarousel";
import { PROJECTS } from "@/data/projects";

const { t } = useI18n();
// Declared here rather than inside the composable: Vue only populates a template ref
// that is a plain top-level `ref()` binding in this component.
const track = ref<HTMLElement | null>(null);
const { activeIndex, go, focusCard } = useProjectCarousel(track, PROJECTS.length);

const counter = computed(() => `${pad(activeIndex.value + 1)} / ${pad(PROJECTS.length)}`);
</script>

<template>
  <section id="prosjekter" class="work">
    <div class="work__head shell">
      <h2 class="work__heading">{{ t("work.heading") }}</h2>

      <div class="work__controls">
        <span class="work__counter mono">{{ counter }}</span>
        <div class="work__arrows">
          <button
            type="button"
            class="arrow"
            :aria-label="t('work.prev')"
            :disabled="activeIndex === 0"
            @click="go(-1)"
          >
            <AppIcon name="arrow-left" />
          </button>
          <button
            type="button"
            class="arrow"
            :aria-label="t('work.next')"
            :disabled="activeIndex === PROJECTS.length - 1"
            @click="go(1)"
          >
            <AppIcon name="arrow-right" />
          </button>
        </div>
      </div>
    </div>

    <div ref="track" class="work__track">
      <ProjectCard
        v-for="(project, index) in PROJECTS"
        :key="project.id"
        :project="project"
        :active="index === activeIndex"
        @focusin="focusCard(index)"
      />
    </div>
  </section>
</template>

<style scoped lang="scss">
/* The one region that owns a colour at page scale. Everything inside it inverts:
   paper becomes the card, the field becomes the ground. */
.work {
  background: var(--field);
  color: var(--paper);
  padding-block: var(--space-9);
  --focus: var(--paper);
}

.work__head {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: var(--space-6);
  flex-wrap: wrap;
  padding-bottom: var(--space-6);
}

.work__heading {
  margin: 0;
  font-size: var(--step-4);
  font-weight: 500;
  letter-spacing: -0.025em;
}

.work__controls {
  display: flex;
  align-items: center;
  gap: var(--space-5);
}

.work__counter {
  color: var(--field-soft);
  font-variant-numeric: tabular-nums;
}

.work__arrows {
  display: flex;
  gap: var(--space-3);
}

.arrow {
  appearance: none;
  background: none;
  font: inherit;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 52px;
  height: 44px;
  border: 1px solid var(--field-rule);
  color: var(--paper);
  cursor: pointer;
  transition:
    background 200ms ease,
    color 200ms ease,
    border-color 200ms ease;

  &:hover:not(:disabled) {
    background: var(--signal);
    border-color: var(--signal);
    color: var(--ink);
  }

  &:disabled {
    cursor: default;
    color: var(--field-rule);
  }
}

.work__track {
  /* Positioned so the composable can measure card offsets against the track. */
  position: relative;
  display: flex;
  gap: var(--space-6);
  /* Deliberately mirrors `.shell`'s inner edge instead of centring the cards: the
     first card starts on the same column line as the section heading above it, so
     the page's left edge runs unbroken through the one full-bleed region. */
  --track-inset: max(var(--gutter), calc((100% - var(--measure)) / 2 + var(--gutter)));
  --card-width: min(680px, 84vw);

  padding-inline-start: var(--track-inset);
  /* Start-snap needs trailing room for the LAST card to reach the column edge. Mirror
     the inset here and maxScroll stops short of the final snap point: the last project
     can never become active and the Next arrow becomes a dead control. */
  padding-inline-end: max(var(--track-inset), calc(100% - var(--card-width) - var(--track-inset)));
  padding-block: var(--space-2) var(--space-4);
  scroll-padding-inline-start: var(--track-inset);
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  overscroll-behavior-x: contain;

  // The arrows and the counter are the affordance; the native bar would only add chrome.
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
}

@media (max-width: 560px) {
  .work__head {
    align-items: flex-start;
    flex-direction: column;
    gap: var(--space-4);
  }
}
</style>
