<script setup lang="ts">
import { useId } from "vue";
import { useI18n } from "vue-i18n";
import type { Locale } from "@/data/types";
import { setLocale } from "@/i18n";

const { t, locale } = useI18n();
const groupName = useId();

const LOCALES: {
  value: Locale;
  label: string;
  nameKey: "nav.englishLanguage" | "nav.norwegianLanguage";
}[] = [
  { value: "en", label: "EN", nameKey: "nav.englishLanguage" },
  { value: "no", label: "NO", nameKey: "nav.norwegianLanguage" },
];
</script>

<template>
  <fieldset class="toggle">
    <legend class="visually-hidden">{{ t("nav.language") }}</legend>
    <label v-for="option in LOCALES" :key="option.value" class="option">
      <input
        class="option__input visually-hidden"
        type="radio"
        :name="groupName"
        :value="option.value"
        :checked="locale === option.value"
        :aria-label="t(option.nameKey)"
        @change="setLocale(option.value)"
      />
      <span class="option__control mono preference-control" aria-hidden="true">
        {{ option.label }}
      </span>
    </label>
  </fieldset>
</template>

<style scoped lang="scss">
.toggle {
  display: flex;
  align-items: center;
  min-inline-size: 0;
  margin: 0;
  padding: 0;
  border: 0;
}

.option__control {
  padding: 7px 10px;
  letter-spacing: 0.06em;
}

.option + .option {
  margin-inline-start: -1px;
}

.option__input:focus-visible + .option__control {
  outline: 2px solid var(--focus);
  outline-offset: -3px;
}

/* The focus ring is drawn inset, so on the ink-filled selected option it has to invert
   with the control — an ink ring on an ink ground is a 1:1 indicator, i.e. none. */
.option__input:checked + .option__control {
  position: relative;
  z-index: 1;
  border-color: var(--ink);
  background: var(--ink);
  color: var(--paper);
  --focus: var(--paper);
}

.option__input:checked:focus-visible + .option__control {
  outline-color: var(--paper);
}

@media (forced-colors: active) {
  .option__input:focus-visible + .option__control {
    outline-color: Highlight;
  }
}
</style>
