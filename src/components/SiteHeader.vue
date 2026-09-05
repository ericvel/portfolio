<script setup lang="ts">
import { nextTick, onBeforeUnmount, ref } from "vue";
import { useI18n } from "vue-i18n";
import { RouterLink } from "vue-router";
import AppIcon from "@/components/AppIcon.vue";
import LanguageToggle from "@/components/LanguageToggle.vue";
import { PROJECTS } from "@/data/projects";

const { t } = useI18n();

const headerShell = ref<HTMLElement | null>(null);
const projectsMenu = ref<HTMLElement | null>(null);
const projectsMenuTrigger = ref<HTMLButtonElement | null>(null);
const isProjectsMenuOpen = ref(false);

let typeaheadQuery = "";
let typeaheadTimer: ReturnType<typeof setTimeout> | undefined;

function getMenuItems() {
  return Array.from(projectsMenu.value?.querySelectorAll<HTMLElement>("[role='menuitem']") ?? []);
}

function focusMenuItem(index: number) {
  const items = getMenuItems();

  if (items.length === 0) return;

  items[(index + items.length) % items.length]?.focus();
}

function openProjectsMenu(position: "first" | "last" = "first") {
  const menu = projectsMenu.value;

  if (!menu) return;

  if (!menu.matches(":popover-open")) menu.showPopover();
  isProjectsMenuOpen.value = true;

  void nextTick(() => focusMenuItem(position === "first" ? 0 : -1));
}

function closeProjectsMenu(restoreTriggerFocus = false) {
  const menu = projectsMenu.value;

  if (menu?.matches(":popover-open")) menu.hidePopover();
  isProjectsMenuOpen.value = false;

  if (restoreTriggerFocus) projectsMenuTrigger.value?.focus();
}

function toggleProjectsMenu() {
  if (projectsMenu.value?.matches(":popover-open")) {
    closeProjectsMenu();
  } else {
    openProjectsMenu();
  }
}

function moveFocusFromMenu(backwards: boolean) {
  const trigger = projectsMenuTrigger.value;
  const focusableElements = Array.from(
    headerShell.value?.querySelectorAll<HTMLElement>(
      "a[href]:not([tabindex='-1']), button:not(:disabled):not([tabindex='-1']), [tabindex]:not([tabindex='-1'])",
    ) ?? [],
  );
  const triggerIndex = trigger ? focusableElements.indexOf(trigger) : -1;

  focusableElements[triggerIndex + (backwards ? -1 : 1)]?.focus();
}

function handleTriggerKeydown(event: KeyboardEvent) {
  if (event.key === "ArrowUp") {
    event.preventDefault();
    openProjectsMenu("last");
  }

  if (event.key === "ArrowDown" || event.key === "Enter" || event.key === " ") {
    event.preventDefault();
    openProjectsMenu();
  }
}

function handleMenuKeydown(event: KeyboardEvent) {
  const items = getMenuItems();
  const currentIndex = items.indexOf(document.activeElement as HTMLElement);

  switch (event.key) {
    case "ArrowDown":
      event.preventDefault();
      focusMenuItem(currentIndex + 1);
      return;
    case "ArrowUp":
      event.preventDefault();
      focusMenuItem(currentIndex - 1);
      return;
    case "Home":
      event.preventDefault();
      focusMenuItem(0);
      return;
    case "End":
      event.preventDefault();
      focusMenuItem(-1);
      return;
    case "Escape":
      event.preventDefault();
      event.stopPropagation();
      closeProjectsMenu(true);
      return;
    case "Tab":
      event.preventDefault();
      closeProjectsMenu();
      moveFocusFromMenu(event.shiftKey);
      return;
    case " ":
      event.preventDefault();
      items[currentIndex]?.click();
      return;
  }

  if (event.ctrlKey || event.metaKey || event.altKey || event.key.length !== 1) return;

  typeaheadQuery += event.key.toLocaleLowerCase();
  clearTimeout(typeaheadTimer);
  typeaheadTimer = setTimeout(() => {
    typeaheadQuery = "";
  }, 500);

  const isRepeatedCharacter = new Set(typeaheadQuery).size === 1;
  const searchTerm = isRepeatedCharacter ? typeaheadQuery.charAt(0) : typeaheadQuery;

  for (let offset = 1; offset <= items.length; offset += 1) {
    const item = items[(currentIndex + offset) % items.length];

    if (item?.textContent?.trim().toLocaleLowerCase().startsWith(searchTerm)) {
      event.preventDefault();
      item.focus();
      return;
    }
  }
}

function handleMenuToggle() {
  isProjectsMenuOpen.value = projectsMenu.value?.matches(":popover-open") ?? false;

  if (!isProjectsMenuOpen.value) typeaheadQuery = "";
}

onBeforeUnmount(() => clearTimeout(typeaheadTimer));
</script>

<template>
  <header class="header">
    <div ref="headerShell" class="header__shell shell">
      <RouterLink view-transition class="logo" :to="{ name: 'home' }"> Eric Veliyulin </RouterLink>

      <nav class="nav">
        <div class="menu">
          <button
            id="projects-menu-trigger"
            ref="projectsMenuTrigger"
            type="button"
            class="menu__trigger nav__link"
            popovertarget="projects-menu"
            aria-haspopup="menu"
            aria-controls="projects-menu"
            :aria-expanded="isProjectsMenuOpen"
            @click.prevent="toggleProjectsMenu"
            @keydown="handleTriggerKeydown"
          >
            {{ t("nav.projects") }}
            <span class="menu__caret">
              <AppIcon name="chevron-down" />
            </span>
          </button>
          <ul
            id="projects-menu"
            ref="projectsMenu"
            class="menu__list"
            popover="auto"
            role="menu"
            :aria-label="t('nav.projectsMenu')"
            @keydown="handleMenuKeydown"
            @toggle="handleMenuToggle"
          >
            <li v-for="project in PROJECTS" :key="project.id" role="none">
              <RouterLink
                view-transition
                class="menu__item"
                :to="{ name: 'project', params: { id: project.id } }"
                role="menuitem"
                tabindex="-1"
                @click="closeProjectsMenu()"
              >
                {{ project.title }}
              </RouterLink>
            </li>
          </ul>
        </div>

        <RouterLink class="nav__link" :to="{ name: 'home', hash: '#foredrag' }">
          {{ t("nav.talks") }}
        </RouterLink>

        <a class="nav__contact" href="mailto:eric.vel@outlook.com">{{ t("nav.contact") }}</a>
      </nav>

      <LanguageToggle class="header__language" />
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
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  column-gap: var(--space-6);
  min-height: 68px;
  padding-block: var(--space-3);
}

.logo {
  display: inline-flex;
  align-items: center;
  min-height: 44px;
  font-size: var(--step-1);
  font-weight: 500;
  letter-spacing: -0.015em;
  white-space: nowrap;
}

.nav {
  display: flex;
  align-items: center;
  justify-self: end;
  gap: var(--space-6);
  font-size: var(--step--1);
}

.nav__link {
  display: inline-flex;
  align-items: center;
  min-height: 44px;
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
  display: inline-flex;
  align-items: center;
  min-height: 44px;
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

.menu__trigger {
  anchor-name: --projects-menu-trigger;
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

.menu:has(.menu__list:popover-open) .menu__caret {
  transform: rotate(180deg);
}

.menu__list {
  position: fixed;
  position-anchor: --projects-menu-trigger;
  inset: auto;
  top: calc(anchor(bottom) + var(--space-4));
  left: calc(anchor(left) - var(--space-5));
  flex-direction: column;
  min-width: 232px;
  margin: 0;
  padding: var(--space-2) 0;
  list-style: none;
  background: var(--paper);
  border: 1px solid var(--rule-strong);
  box-shadow: 0 14px 30px -14px rgb(23 24 26 / 26%);
  clip-path: inset(0 0 100% 0);
  animation: projects-menu-out 140ms cubic-bezier(0.4, 0, 1, 1) forwards;
}

.menu__list:popover-open {
  display: flex;
  animation: projects-menu-in 220ms cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

@keyframes projects-menu-in {
  from {
    clip-path: inset(0 0 100% 0);
  }

  to {
    clip-path: inset(0);
  }
}

@keyframes projects-menu-out {
  from {
    display: flex;
    clip-path: inset(0);
  }

  to {
    display: none;
    clip-path: inset(0 0 100% 0);
  }
}

.menu__item {
  display: block;
  padding: var(--space-3) var(--space-5);
  font-size: var(--step--1);
  color: var(--ink);
  transition: background 140ms ease;

  &:hover,
  &:focus-visible {
    background: var(--paper-deep);
  }
}

@media (max-width: 720px) {
  .header {
    position: static;
  }

  .header__shell {
    grid-template-columns: minmax(0, 1fr) auto;
    row-gap: var(--space-2);
    padding-block: var(--space-3) var(--space-4);
  }

  .nav {
    grid-row: 2;
    grid-column: 1 / -1;
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    width: 100%;
    gap: var(--space-4);
  }

  .nav__link {
    min-width: 44px;
    justify-content: center;
  }

  .menu {
    justify-self: start;
  }

  .nav > .nav__link {
    justify-self: center;
  }

  .nav__contact {
    justify-self: end;
    min-width: 44px;
    justify-content: flex-end;
    white-space: nowrap;
  }

  .menu__list {
    top: calc(anchor(bottom) + var(--space-2));
    left: anchor(left);
    width: min(232px, calc(100vw - (2 * var(--gutter))));
    min-width: 0;
  }
}
</style>
