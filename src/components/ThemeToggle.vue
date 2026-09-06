<script setup lang="ts">
import { computed } from "vue";
import { useI18n } from "vue-i18n";
import AppIcon from "@/components/AppIcon.vue";
import { useTheme } from "@/theme";

const { t } = useI18n();
const { themePreference, cycleThemePreference } = useTheme();

const isDark = computed(() => themePreference.value === "dark");
const label = computed(() => t(isDark.value ? "theme.darkLabel" : "theme.lightLabel"));
const title = computed(() => t(isDark.value ? "theme.darkTitle" : "theme.lightTitle"));
</script>

<template>
  <button
    type="button"
    class="theme-toggle"
    data-theme-toggle
    :aria-label="label"
    :title="title"
    @click="cycleThemePreference"
  >
    <AppIcon :name="isDark ? 'theme-dark' : 'theme-light'" />
  </button>
</template>

<style scoped lang="scss">
.theme-toggle {
  display: inline-flex;
  flex: none;
  align-items: center;
  justify-content: center;
  width: 44px;
  min-height: 44px;
  padding: 0;
  border: 1px solid var(--rule-strong);
  background: transparent;
  color: var(--ink-soft);
  cursor: pointer;
  transition:
    color 160ms ease,
    border-color 160ms ease,
    background 160ms ease;

  &:hover {
    border-color: var(--ink);
    background: var(--paper-deep);
    color: var(--ink);
  }

  &:focus-visible {
    outline-offset: -3px;
  }
}

.theme-toggle :deep(.icon) {
  width: 18px;
  height: 18px;
  transform: none;
}

.theme-toggle :deep(.icon--theme-dark) {
  transform: translate(-1px, 1px);
}
</style>
