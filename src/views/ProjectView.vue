<script setup lang="ts">
import { computed } from "vue";
import { useI18n } from "vue-i18n";
import { RouterLink } from "vue-router";
import AppIcon from "@/components/AppIcon.vue";
import ProjectPager from "@/components/ProjectPager.vue";
import SiteFooter from "@/components/SiteFooter.vue";
import { findProject } from "@/data/projects";

const props = defineProps<{ id: string }>();

const { t, tm, rt } = useI18n();

const project = computed(() => findProject(props.id));

const copy = computed(() => {
  const found = project.value;
  if (!found) return null;
  return {
    blurb: t(`projects.${found.id}.blurb`),
    role: t(`projects.${found.id}.role`),
    body: (tm(`projects.${found.id}.body`) as string[]).map((paragraph) => rt(paragraph)),
  };
});

const figures = computed(() => {
  const found = project.value;
  if (!found) return [];
  const captions = tm(`projects.${found.id}.captions`) as string[];
  return found.images.map((image, index) => ({
    ...image,
    caption: rt(captions[index] ?? ""),
  }));
});
</script>

<template>
  <main v-if="project && copy" id="innhold" class="project">
    <div class="project__shell shell">
      <RouterLink
        view-transition
        class="project__back"
        :to="{ name: 'home' }"
        :aria-label="t('project.backLabel')"
      >
        <AppIcon name="arrow-left" />
        {{ t("project.back") }}
      </RouterLink>

      <div class="project__head">
        <div class="project__intro">
          <h1 class="project__title">{{ project.title }}</h1>
          <p class="project__blurb">{{ copy.blurb }}</p>
        </div>

        <div class="project__facts">
          <h2 class="label mono">{{ t("project.tech") }}</h2>
          <ul class="tags">
            <li v-for="item in project.tech" :key="item" class="tag mono">{{ item }}</li>
          </ul>
          <h2 class="label mono label--spaced">{{ t("project.role") }}</h2>
          <p class="project__role">{{ copy.role }}</p>
        </div>
      </div>

      <div class="project__body">
        <p v-for="(paragraph, index) in copy.body" :key="index" class="project__paragraph">
          {{ paragraph }}
        </p>
      </div>

      <div class="project__figures">
        <figure v-for="figure in figures" :key="figure.src" class="figure">
          <img
            class="figure__image"
            :src="figure.src"
            :alt="figure.caption"
            :style="{ aspectRatio: figure.ratio }"
            loading="lazy"
            decoding="async"
          />
          <figcaption class="figure__caption">{{ figure.caption }}</figcaption>
        </figure>
      </div>

      <ProjectPager :current-id="project.id" />
    </div>
  </main>
  <SiteFooter v-if="project" />
</template>

<style scoped lang="scss">
/* Tighter below the pager than above it, so the pager binds to the page's exit —
   itself and the footer — rather than to the project it just closed. */
.project {
  padding-block: 0 var(--space-8);
}

.project__back {
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  font-size: var(--step--1);
  color: var(--ink-soft);
  padding: var(--space-5) 0 var(--space-7);
  transition: color 160ms ease;

  &:hover {
    color: var(--ink);
  }
}

.project__head {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 340px);
  gap: var(--space-8);
  align-items: start;
  padding-bottom: var(--space-7);
  border-bottom: 2px solid var(--ink);
}

.project__title {
  margin: 0;
  font-size: var(--step-6);
  font-weight: 800;
  line-height: 0.95;
  letter-spacing: -0.035em;
  text-wrap: balance;
}

.project__blurb {
  margin: var(--space-5) 0 0;
  max-width: 42ch;
  font-size: var(--step-2);
  line-height: 1.4;
  color: var(--ink-soft);
  text-wrap: pretty;
}

.project__facts {
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
}

.label {
  margin: 0;
  font-weight: 400;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: var(--ink-soft);
}

.label--spaced {
  margin-top: var(--space-4);
}

.tags {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-2);
  margin: 0;
  padding: 0;
  list-style: none;
}

.tag {
  padding: 6px var(--space-3);
  border: 1px solid var(--rule-strong);
  white-space: nowrap;
}

.project__role {
  margin: 0;
  font-size: var(--step-0);
}

.project__body {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
  gap: var(--space-7);
  padding-block: var(--space-8);
}

.project__paragraph {
  margin: 0;
  max-width: 68ch;
  font-size: var(--step-1);
  line-height: 1.6;
  color: var(--ink-soft);
  text-wrap: pretty;
}

.project__figures {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
  gap: var(--space-7);
}

.figure {
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
}

.figure__image {
  display: block;
  width: 100%;
  background-color: var(--paper-deep);
  object-fit: cover;
  object-position: 50% 0;
  border: 1px solid var(--rule);
}

.figure__caption {
  max-width: 56ch;
  font-size: var(--step--1);
  line-height: 1.5;
  color: var(--ink-soft);
}

@media (max-width: 900px) {
  .project__head {
    grid-template-columns: minmax(0, 1fr);
    gap: var(--space-7);
  }
}
</style>
