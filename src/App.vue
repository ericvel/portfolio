<script setup lang="ts">
import { watchEffect } from "vue";
import { useI18n } from "vue-i18n";
import { RouterView, useRoute } from "vue-router";
import SiteHeader from "@/components/SiteHeader.vue";
import { findProject } from "@/data/projects";

const { t } = useI18n();
const route = useRoute();
const titleSeparator = "|";

/**
 * Title and description are owned here rather than in a router hook because they have
 * two inputs, not one: the route AND the locale. A router-only hook leaves an English
 * visitor with a Norwegian browser tab — the most-seen string on the site — which the
 * "English equal" commitment does not allow.
 */
watchEffect(() => {
  const project = route.name === "project" ? findProject(String(route.params.id)) : undefined;

  document.title = project
    ? t("meta.titleProject", { project: project.title, separator: titleSeparator })
    : t("meta.title", { separator: titleSeparator });

  document
    .querySelector('meta[name="description"]')
    ?.setAttribute("content", t("meta.description"));
});
</script>

<template>
  <a class="skip-link" href="#innhold">{{ t("a11y.skip") }}</a>
  <SiteHeader />
  <RouterView />
</template>
