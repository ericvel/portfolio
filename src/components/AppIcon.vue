<script setup lang="ts">
/**
 * The site's whole icon set. Drawn, not glyphs: one 16-unit box and one stroke
 * weight, so an arrow next to 12px mono and one next to 18px body read as the same
 * family. Decorative by definition — the label beside it carries the meaning.
 */
type IconName = "arrow-right" | "arrow-left" | "arrow-up-right" | "chevron-down";

const PATHS: Record<IconName, string> = {
  "arrow-right": "M2 8h12m0 0l-4.5-4.5M14 8l-4.5 4.5",
  "arrow-left": "M14 8H2m0 0l4.5-4.5M2 8l4.5 4.5",
  "arrow-up-right": "M4 12L12 4m0 0H5.5M12 4v6.5",
  "chevron-down": "M3.5 6.5L8 11l4.5-4.5",
};

defineProps<{ name: IconName }>();
</script>

<template>
  <svg class="icon" viewBox="0 0 16 16" width="16" height="16" aria-hidden="true" focusable="false">
    <path :d="PATHS[name]" fill="none" stroke="currentColor" stroke-width="1.5" />
  </svg>
</template>

<style scoped>
.icon {
  flex: none;
  /* Optical alignment with the cap height of the label it sits beside. */
  transform: translateY(-0.5px);
}
</style>
