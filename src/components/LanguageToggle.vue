<script setup lang="ts">
import { useI18n } from "vue-i18n";
import type { Locale } from "@/data/types";
import { setLocale } from "@/i18n";

const { t, locale } = useI18n();

const LOCALES: { value: Locale; label: string }[] = [
  { value: "no", label: "NO" },
  { value: "en", label: "EN" },
];
</script>

<template>
  <div class="toggle" role="group" :aria-label="t('nav.language')">
    <button
      v-for="option in LOCALES"
      :key="option.value"
      type="button"
      class="option"
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
  align-items: center;
  border: 1px solid #cccccc;
  border-radius: 999px;
  overflow: hidden;
}

.option {
  appearance: none;
  border: 0;
  font: inherit;
  cursor: pointer;
  padding: 6px 13px;
  font-size: 13px;
  letter-spacing: 0.08em;
  transition:
    background 160ms ease,
    color 160ms ease;
  background: transparent;
  color: #777777;

  &:focus-visible {
    outline: 2px solid #111111;
    outline-offset: -2px;
  }
}

.option--active {
  background: #111111;
  color: #ffffff;
}
</style>
