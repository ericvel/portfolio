<script setup lang="ts">
import { computed } from "vue";
import { useI18n } from "vue-i18n";
import { RouterLink } from "vue-router";
import AppIcon from "@/components/AppIcon.vue";
import { PROJECTS } from "@/data/projects";
import type { ProjectId } from "@/data/types";

const props = defineProps<{ currentId: ProjectId }>();

const { t } = useI18n();

/** Ledger order, wrapping at the end, so every project page has a next one. */
const next = computed(() => {
  const index = PROJECTS.findIndex((project) => project.id === props.currentId);
  return PROJECTS[(index + 1) % PROJECTS.length] ?? PROJECTS[0];
});
</script>

<template>
  <!-- The page used to close on a second email button 96px above the footer's own. The
       reader here has finished one piece of evidence and is comparing; navigation is the
       thing the footer does not already do. -->
  <nav class="pager" :aria-label="t('project.pagerNav')">
    <RouterLink
      view-transition
      class="pager__link"
      :to="{ name: 'project', params: { id: next.id } }"
    >
      <span class="pager__lead">
        <span class="pager__label">{{ t("project.next") }}</span>
        <span class="pager__name">
          {{ next.title }}
          <AppIcon name="arrow-right" />
        </span>
      </span>

      <!-- Named, because bare technology words read as a sentence to a screen reader and the
           hairline chips that carry the meaning visually are borders. -->
      <ul class="pager__stack" role="list" :aria-label="t('project.tech')">
        <li v-for="item in next.tech" :key="item" class="pager__tech mono">{{ item }}</li>
      </ul>
    </RouterLink>
  </nav>
</template>

<style scoped lang="scss">
/* Same 2px ink rule and column split as the page's head, so the surface opens and closes
   on the same structure — the next project's stack lands in the column where this
   project's stack was read. */
/* The interval above is the widest on the page and roughly twice the one below it: the
   evidence has ended, and what follows belongs to leaving the page rather than to reading
   it. Equal intervals on both sides read as one more project section. */
.pager {
  margin-top: clamp(var(--space-9), 9vw, var(--space-10));
  border-top: 2px solid var(--ink);
}

.pager__link {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 340px);
  gap: var(--space-8);
  align-items: start;
  padding-top: var(--space-6);
}

.pager__lead {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: var(--space-3);
}

.pager__label {
  font-size: var(--step--1);
  color: var(--ink-soft);
}

/* The underline rests at 2px: on touch the hover never fires, so it is the only standing
   evidence the name is a link. It grows rather than appears, so the name never moves. */
.pager__name {
  display: inline-flex;
  align-items: center;
  gap: var(--space-3);
  padding-bottom: 4px;
  font-size: var(--step-3);
  font-weight: 500;
  line-height: 1.15;
  letter-spacing: -0.025em;
  background-image: linear-gradient(var(--signal), var(--signal));
  background-repeat: no-repeat;
  background-position: 0 100%;
  background-size: 100% 2px;
  transition: background-size 220ms cubic-bezier(0.16, 1, 0.3, 1);
}

.pager__name :deep(.icon) {
  transition: transform 220ms cubic-bezier(0.16, 1, 0.3, 1);
}

.pager__link:hover .pager__name,
.pager__link:focus-visible .pager__name {
  background-size: 100% 6px;
}

.pager__link:hover .pager__name :deep(.icon),
.pager__link:focus-visible .pager__name :deep(.icon) {
  transform: translate(3px, -0.5px);
}

.pager__stack {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-2);
  margin: 0;
  padding: 0;
  list-style: none;
}

.pager__tech {
  padding: 5px 10px;
  border: 1px solid var(--rule-strong);
  color: var(--ink-soft);
  white-space: nowrap;
  transition:
    border-color 200ms ease,
    color 200ms ease;
}

.pager__link:hover .pager__tech,
.pager__link:focus-visible .pager__tech {
  border-color: var(--ink);
  color: var(--ink);
}

@media (max-width: 900px) {
  .pager__link {
    grid-template-columns: minmax(0, 1fr);
    gap: var(--space-5);
  }
}
</style>
