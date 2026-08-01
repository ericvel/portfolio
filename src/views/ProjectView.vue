<script setup lang="ts">
import { computed } from "vue";
import { useI18n } from "vue-i18n";
import { RouterLink } from "vue-router";
import ProjectCta from "@/components/ProjectCta.vue";
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
  <main v-if="project && copy" class="project">
    <RouterLink class="project__back" :to="{ name: 'home' }">{{ t("project.back") }}</RouterLink>

    <div class="project__head">
      <div class="project__intro">
        <h1 class="project__title">{{ project.title }}</h1>
        <p class="project__blurb">{{ copy.blurb }}</p>
      </div>
      <div class="project__facts">
        <span class="label">{{ t("project.tech") }}</span>
        <ul class="tags">
          <li v-for="item in project.tech" :key="item" class="tag">{{ item }}</li>
        </ul>
        <span class="label label--spaced">{{ t("project.role") }}</span>
        <span class="project__role">{{ copy.role }}</span>
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
        />
        <figcaption class="figure__caption">{{ figure.caption }}</figcaption>
      </figure>
    </div>

    <ProjectCta />
  </main>
</template>

<style scoped lang="scss">
.project {
  display: block;
  padding: 8px 64px 88px;
  background: #ffffff;
}

.project__back {
  display: inline-block;
  font-size: 16px;
  color: #555555;
  padding: 12px 0 40px;

  &:hover {
    color: #111111;
  }
}

.project__head {
  display: grid;
  grid-template-columns: 1fr 360px;
  gap: 64px;
  align-items: start;
  padding-bottom: 48px;
  border-bottom: 1px solid #cccccc;
}

.project__intro {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.project__title {
  margin: 0;
  font-size: 84px;
  line-height: 0.98;
  letter-spacing: -0.02em;
  font-weight: 400;
}

.project__blurb {
  margin: 0;
  font-size: 24px;
  line-height: 1.4;
  color: #555555;
  max-width: 44ch;
}

.project__facts {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.label {
  font-size: 14px;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: #555555;
}

.label--spaced {
  margin-top: 12px;
}

.tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin: 0;
  padding: 0;
  list-style: none;
}

.tag {
  font-size: 15px;
  padding: 7px 15px;
  border: 1px solid #cccccc;
  border-radius: 999px;
}

.project__role {
  font-size: 17px;
}

.project__body {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 48px;
  padding: 48px 0 56px;
}

.project__paragraph {
  margin: 0;
  font-size: 20px;
  line-height: 1.55;
}

.project__figures {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
  gap: 32px 40px;
  max-width: 900px;
}

.figure {
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.figure__image {
  display: block;
  width: 100%;
  background-color: #ebebeb;
  object-fit: cover;
  object-position: 50% 0;
  border: 1px solid #cccccc;
}

.figure__caption {
  font-size: 14px;
  line-height: 1.45;
  color: #555555;
}
</style>
