<script setup lang="ts">
import { computed } from "vue";
import { useI18n } from "vue-i18n";
import AppIcon from "@/components/AppIcon.vue";
import { useTheme } from "@/theme";

const { t } = useI18n();
const { themePreference, cycleThemePreference } = useTheme();

const isDark = computed(() => themePreference.value === "dark");
const label = computed(() => t(isDark.value ? "theme.darkLabel" : "theme.lightLabel"));
</script>

<template>
  <button
    type="button"
    class="theme-toggle preference-control"
    data-theme-toggle
    :aria-label="label"
    :title="label"
    @click="cycleThemePreference"
  >
    <AppIcon :name="isDark ? 'theme-light' : 'theme-dark'" />
  </button>
</template>

<style scoped lang="scss">
.theme-toggle {
  flex: none;
  aspect-ratio: 1;
  padding: 0;
}
</style>
