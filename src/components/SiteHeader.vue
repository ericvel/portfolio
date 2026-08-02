<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from "vue";
import { useI18n } from "vue-i18n";
import { RouterLink } from "vue-router";
import AppIcon from "@/components/AppIcon.vue";
import LanguageToggle from "@/components/LanguageToggle.vue";
import { PROJECTS } from "@/data/projects";

const { t } = useI18n();

const menuOpen = ref(false);
const menu = ref<HTMLElement | null>(null);
const trigger = ref<HTMLButtonElement | null>(null);

function close() {
  menuOpen.value = false;
}

function onPointerDown(event: MouseEvent) {
  if (menuOpen.value && !menu.value?.contains(event.target as Node)) close();
}

/**
 * Escape is bound to the document rather than the nav: the menu also opens on hover,
 * so a pointer user can have it open with focus nowhere near it. WCAG 1.4.13 wants
 * that dismissible without moving the pointer. Focus only returns to the trigger when
 * it was already inside the menu — otherwise Escape would yank focus across the page.
 */
function onKeydown(event: KeyboardEvent) {
  if (event.key !== "Escape" || !menuOpen.value) return;
  const focusWasInside = menu.value?.contains(document.activeElement);
  close();
  if (focusWasInside) trigger.value?.focus();
}

onMounted(() => {
  document.addEventListener("mousedown", onPointerDown);
  document.addEventListener("keydown", onKeydown);
});

onBeforeUnmount(() => {
  document.removeEventListener("mousedown", onPointerDown);
  document.removeEventListener("keydown", onKeydown);
});
</script>

<template>
  <header class="header">
    <div class="header__shell shell">
      <RouterLink class="logo" :to="{ name: 'home' }">Eric Veliyulin</RouterLink>

      <nav class="nav">
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
            class="menu__trigger nav__link"
            :aria-expanded="menuOpen"
            aria-controls="projects-menu"
            @click="menuOpen = !menuOpen"
          >
            {{ t("nav.projects") }}
            <span class="menu__caret" :class="{ 'menu__caret--open': menuOpen }">
              <AppIcon name="chevron-down" />
            </span>
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

        <RouterLink class="nav__link" :to="{ name: 'home', hash: '#foredrag' }">
          {{ t("nav.talks") }}
        </RouterLink>

        <a class="nav__contact" href="mailto:eric.vel@outlook.com">{{ t("nav.contact") }}</a>

        <LanguageToggle />
      </nav>
    </div>
  </header>
</template>

<style scoped lang="scss">
.header {
  position: sticky;
  top: 0;
  z-index: 20;
  background: var(--paper);
  border-bottom: 1px solid var(--rule);
}

.header__shell {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-5);
  min-height: 68px;
  padding-block: var(--space-3);
}

.logo {
  font-size: var(--step-1);
  font-weight: 500;
  letter-spacing: -0.015em;
  white-space: nowrap;
}

.nav {
  display: flex;
  align-items: center;
  gap: var(--space-6);
  font-size: var(--step--1);
}

.nav__link {
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  color: var(--ink-soft);
  transition: color 160ms ease;

  &:hover {
    color: var(--ink);
  }
}

/* The one persistent action in the chrome. The rule under it grows on hover rather
   than the label changing colour, so the target never shifts. */
.nav__contact {
  color: var(--ink);
  font-weight: 500;
  padding-bottom: 3px;
  background-image: linear-gradient(var(--signal), var(--signal));
  background-repeat: no-repeat;
  background-position: 0 100%;
  background-size: 100% 2px;
  transition: background-size 220ms cubic-bezier(0.16, 1, 0.3, 1);

  &:hover {
    background-size: 100% 8px;
  }
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
  cursor: pointer;
}

.menu__caret {
  display: inline-flex;
  transition: transform 200ms cubic-bezier(0.16, 1, 0.3, 1);
}

.menu__caret--open {
  transform: rotate(180deg);
}

.menu__anchor {
  position: absolute;
  top: 100%;
  left: calc(var(--space-5) * -1);
  z-index: 10;
  padding-top: var(--space-4);
  display: none;
}

.menu__anchor--open {
  display: block;
}

.menu__list {
  display: flex;
  flex-direction: column;
  min-width: 232px;
  margin: 0;
  padding: var(--space-2) 0;
  list-style: none;
  background: var(--paper);
  border: 1px solid var(--rule-strong);
  box-shadow: 0 14px 30px -14px rgb(23 24 26 / 26%);
}

.menu__item {
  display: block;
  padding: var(--space-3) var(--space-5);
  font-size: var(--step--1);
  color: var(--ink);
  transition: background 140ms ease;

  &:hover {
    background: var(--paper-deep);
  }
}

@media (max-width: 720px) {
  .header__shell {
    flex-wrap: wrap;
    row-gap: var(--space-2);
    padding-block: var(--space-3) var(--space-4);
  }

  .nav {
    width: 100%;
    justify-content: space-between;
    gap: var(--space-4);
  }
}
</style>
