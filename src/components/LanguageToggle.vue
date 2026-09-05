<script setup lang="ts">
import { useI18n } from "vue-i18n";
import type { Locale } from "@/data/types";
import { setLocale } from "@/i18n";

const { t, locale } = useI18n();

const LOCALES: { value: Locale; label: string }[] = [
  { value: "en", label: "EN" },
  { value: "no", label: "NO" },
];
</script>

<template>
  <div class="toggle" role="group" :aria-label="t('nav.language')">
    <button
      v-for="option in LOCALES"
      :key="option.value"
      type="button"
      class="option mono"
      :class="{ 'option--active': locale === option.value }"
      :aria-pressed="locale === option.value"
      @click="setLocale(option.value)"
    >
      {{ option.label }}
    </button>
  </div>
</template>

<style scoped lang="scss">
.toggle {
  display: flex;
  align-items: stretch;
  border: 1px solid var(--rule-strong);
}

.option {
  appearance: none;
  min-width: 44px;
  min-height: 44px;
  border: 0;
  cursor: pointer;
  padding: 7px 10px;
  letter-spacing: 0.06em;
  background: transparent;
  color: var(--ink-soft);
  transition:
    background 160ms ease,
    color 160ms ease;

  &:hover:not(.option--active) {
    background: var(--paper-deep);
    color: var(--ink);
  }

  &:focus-visible {
    outline-offset: -3px;
  }
}

/* The focus ring is drawn inset, so on the ink-filled active button it has to invert
   with the button — an ink ring on an ink ground is a 1:1 indicator, i.e. none. */
.option--active {
  background: var(--ink);
  color: var(--paper);
  --focus: var(--paper);
}
</style>
