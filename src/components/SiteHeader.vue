<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from "vue";
import { useI18n } from "vue-i18n";
import { RouterLink } from "vue-router";
import LanguageToggle from "@/components/LanguageToggle.vue";
import { PROJECTS } from "@/data/projects";

const { t } = useI18n();

const menuOpen = ref(false);
const menu = ref<HTMLElement | null>(null);
const trigger = ref<HTMLButtonElement | null>(null);

function close() {
  menuOpen.value = false;
}

function closeAndRefocus() {
  if (!menuOpen.value) return;
  close();
  trigger.value?.focus();
}

function onPointerDown(event: MouseEvent) {
  if (menuOpen.value && !menu.value?.contains(event.target as Node)) close();
}

onMounted(() => document.addEventListener("mousedown", onPointerDown));
onBeforeUnmount(() => document.removeEventListener("mousedown", onPointerDown));
</script>

<template>
  <header class="header">
    <RouterLink class="logo" :to="{ name: 'home' }">Eric Veliyulin</RouterLink>

    <nav class="nav" @keydown.escape="closeAndRefocus">
      <div
        ref="menu"
        class="menu"
        @mouseenter="menuOpen = true"
        @mouseleave="close"
        @focusout="menuOpen && !menu?.contains($event.relatedTarget as Node) && close()"
      >
        <button
          ref="trigger"
          type="button"
          class="menu__trigger"
          aria-haspopup="true"
          :aria-expanded="menuOpen"
          aria-controls="projects-menu"
          @click="menuOpen = !menuOpen"
        >
          {{ t("nav.projects") }} <span class="menu__caret" aria-hidden="true">▾</span>
        </button>
        <div class="menu__anchor" :class="{ 'menu__anchor--open': menuOpen }">
          <ul id="projects-menu" class="menu__list" :aria-label="t('nav.projectsMenu')">
            <li v-for="project in PROJECTS" :key="project.id">
              <RouterLink
                class="menu__item"
                :to="{ name: 'project', params: { id: project.id } }"
                @click="close"
              >
                {{ project.title }}
              </RouterLink>
            </li>
          </ul>
        </div>
      </div>

      <RouterLink :to="{ name: 'home', hash: '#foredrag' }">{{ t("nav.talks") }}</RouterLink>
      <a class="nav__contact" href="mailto:eric.vel@outlook.com">{{ t("nav.contact") }}</a>

      <LanguageToggle />
    </nav>
  </header>
</template>

<style scoped lang="scss">
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 26px 64px;
  background: #ffffff;
}

.logo {
  font-size: 24px;
}

.nav {
  display: flex;
  align-items: center;
  gap: 28px;
  font-size: 15px;
  color: #555555;
}

.nav__contact {
  color: #111111;
}

.menu {
  position: relative;
}

.menu__trigger {
  appearance: none;
  background: none;
  border: 0;
  padding: 0;
  font: inherit;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  color: #555555;

  &:hover {
    color: #111111;
  }
}

.menu__caret {
  font-size: 15px;
  line-height: 1;
}

.menu__anchor {
  position: absolute;
  top: 100%;
  left: -20px;
  z-index: 10;
  padding-top: 14px;
  display: none;
}

.menu__anchor--open {
  display: block;
}

.menu__list {
  display: flex;
  flex-direction: column;
  min-width: 220px;
  margin: 0;
  padding: 6px 0;
  list-style: none;
  background: #ffffff;
  border: 1px solid #cccccc;
}

.menu__item {
  display: block;
  padding: 10px 20px;
  font-size: 15px;
  color: #111111;

  &:hover {
    background: #eeeeee;
  }
}
</style>
