<script setup lang="ts">
import { computed, ref } from "vue";
import { useI18n } from "vue-i18n";
import ProjectCard from "@/components/ProjectCard.vue";
import { pad, useProjectCarousel } from "@/composables/useProjectCarousel";
import { PROJECTS } from "@/data/projects";

const { t } = useI18n();
// Declared here rather than inside the composable: Vue only populates a template ref
// that is a plain top-level `ref()` binding in this component.
const track = ref<HTMLElement | null>(null);
const { activeIndex, go } = useProjectCarousel(track, PROJECTS.length);

const counter = computed(() => `${pad(activeIndex.value + 1)} / ${pad(PROJECTS.length)}`);
</script>

<template>
  <section id="prosjekter" class="work">
    <div class="work__head">
      <h2 class="work__heading">{{ t("work.heading") }}</h2>
      <div class="work__controls">
        <span class="work__counter">{{ counter }}</span>
        <button
          type="button"
          class="arrow"
          :aria-label="t('work.prev')"
          :disabled="activeIndex === 0"
          @click="go(-1)"
        >
          ←
        </button>
        <button
          type="button"
          class="arrow"
          :aria-label="t('work.next')"
          :disabled="activeIndex === PROJECTS.length - 1"
          @click="go(1)"
        >
          →
        </button>
      </div>
    </div>

    <div ref="track" class="work__track">
      <ProjectCard
        v-for="(project, index) in PROJECTS"
        :key="project.id"
        :project="project"
        :active="index === activeIndex"
      />
    </div>
  </section>
</template>

<style scoped lang="scss">
.work {
  background: #f2f2f2;
  color: #111111;
  padding: 56px 0 72px;
}

.work__head {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  padding: 0 64px 40px;
}

.work__heading {
  margin: 0;
  font-size: 44px;
  font-weight: 400;
  color: #111111;
}

.work__controls {
  display: flex;
  align-items: center;
  gap: 20px;
}

.work__counter {
  font-size: 15px;
  color: #777777;
}

.arrow {
  appearance: none;
  background: none;
  font: inherit;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  border: 1px solid #bbbbbb;
  border-radius: 999px;
  cursor: pointer;
  font-size: 18px;
  transition:
    background 200ms ease,
    color 200ms ease;

  &:hover:not(:disabled) {
    background: #111111;
    border-color: #111111;
    color: #ffffff;
  }

  &:disabled {
    cursor: default;
    color: #bbbbbb;
  }

  &:focus-visible {
    outline: 2px solid #111111;
    outline-offset: 2px;
  }
}

.work__track {
  display: flex;
  gap: 40px;
  padding: 8px calc(50% - 360px) 12px;
  overflow-x: auto;
  scroll-snap-type: x mandatory;

  // The design had no scrollbar; keep the chrome out of the layout.
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
}
</style>
