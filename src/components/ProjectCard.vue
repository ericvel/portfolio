<script setup lang="ts">
import { computed } from "vue";
import { useI18n } from "vue-i18n";
import { RouterLink } from "vue-router";
import type { Project } from "@/data/types";

const props = defineProps<{
  project: Project;
  active: boolean;
}>();

const { t } = useI18n();

const blurb = computed(() => t(`projects.${props.project.id}.blurb`));
</script>

<template>
  <RouterLink
    class="card"
    :class="{ 'card--muted': !active }"
    :to="{ name: 'project', params: { id: project.id } }"
  >
    <div class="card__logo">
      <img class="card__logo-image" :src="project.logo" :alt="project.title" />
    </div>
    <div class="card__body">
      <div class="card__text">
        <span class="card__title">{{ project.title }}</span>
        <span class="card__blurb">{{ blurb }}</span>
      </div>
      <div class="card__aside">
        <span class="card__stack">{{ project.stack }}</span>
        <span class="card__more">{{ t("work.readMore") }}</span>
      </div>
    </div>
  </RouterLink>
</template>

<style scoped lang="scss">
.card {
  flex: 0 0 720px;
  scroll-snap-align: center;
  background: #ebebeb;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  transition:
    opacity 520ms ease,
    transform 520ms ease;
  opacity: 1;
  transform: scale(1);

  &:focus-visible {
    outline: 2px solid #111111;
    outline-offset: 4px;
  }
}

.card--muted {
  opacity: 0.32;
  transform: scale(0.92);
}

.card__logo {
  padding: 32px 32px 0;
}

.card__logo-image {
  display: block;
  box-sizing: border-box;
  width: 100%;
  height: 220px;
  background: #ffffff;
  border: 1px solid #cccccc;
  padding: 40px 25%;
  object-fit: contain;
}

.card__body {
  display: grid;
  grid-template-columns: 1fr 220px;
  gap: 32px;
  padding: 32px;
}

.card__text {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.card__title {
  font-size: 40px;
  line-height: 1;
  color: #111111;
}

.card__blurb {
  font-size: 18px;
  line-height: 1.45;
  min-height: 78px;
}

.card__aside {
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.card__stack {
  font-size: 14px;
  line-height: 1.5;
  color: #777777;
}

.card__more {
  font-size: 16px;
  color: #111111;
  border-bottom: 1px solid #111111;
  align-self: flex-start;
  padding-bottom: 3px;
}
</style>
