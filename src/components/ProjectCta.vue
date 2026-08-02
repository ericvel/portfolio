<script setup lang="ts">
import { useI18n } from "vue-i18n";
import AppIcon from "@/components/AppIcon.vue";

const { t } = useI18n();
</script>

<template>
  <!-- A section, not an aside: this is the page's conversion, not a side note. -->
  <section class="cta" aria-labelledby="cta-title">
    <h2 id="cta-title" class="cta__title">{{ t("project.ctaTitle") }}</h2>
    <a class="cta__button" href="mailto:eric.vel@outlook.com">
      {{ t("project.ctaButton") }}
      <AppIcon name="arrow-right" />
    </a>
  </section>
</template>

<style scoped lang="scss">
.cta {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-6);
  flex-wrap: wrap;
  margin-top: var(--space-9);
  padding-top: var(--space-6);
  border-top: 2px solid var(--ink);
}

.cta__title {
  margin: 0;
  max-width: 22ch;
  font-size: var(--step-3);
  font-weight: 500;
  line-height: 1.15;
  letter-spacing: -0.025em;
  text-wrap: balance;
}

.cta__button {
  display: inline-flex;
  align-items: center;
  gap: var(--space-3);
  padding: var(--space-4) var(--space-6);
  background: var(--signal);
  color: var(--ink);
  font-size: var(--step-0);
  font-weight: 500;
  white-space: nowrap;
  transition:
    background 180ms ease,
    transform 180ms cubic-bezier(0.16, 1, 0.3, 1);

  &:hover {
    background: var(--signal-deep);
    color: var(--paper);
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(0);
  }
}
</style>
