<script setup lang="ts">
/**
 * The site's icon vocabulary. Keep semantic names local so callers do not
 * depend on library component names. Decorative by definition — the label
 * beside it carries the meaning.
 */
import { computed } from "vue";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Check,
  ChevronDown,
  Copy,
} from "@lucide/vue";

const ICONS = {
  "arrow-right": ArrowRight,
  "arrow-left": ArrowLeft,
  "arrow-up-right": ArrowUpRight,
  "chevron-down": ChevronDown,
  copy: Copy,
  check: Check,
} as const;

type IconName = keyof typeof ICONS;

const props = defineProps<{ name: IconName }>();
const icon = computed(() => ICONS[props.name]);
</script>

<template>
  <component
    :is="icon"
    class="icon"
    :size="16"
    :stroke-width="1.5"
    :absolute-stroke-width="true"
    aria-hidden="true"
    focusable="false"
  />
</template>

<style scoped>
.icon {
  flex: none;
  /* Optical alignment with the cap height of the label it sits beside. */
  transform: translateY(-0.5px);
}
</style>
