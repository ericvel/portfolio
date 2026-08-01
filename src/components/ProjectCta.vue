<script setup lang="ts">
import { useI18n } from "vue-i18n";

const { t } = useI18n();
</script>

<template>
  <aside class="cta">
    <span class="cta__title">{{ t("project.ctaTitle") }}</span>
    <a class="cta__button" href="mailto:eric.vel@outlook.com">{{ t("project.ctaButton") }}</a>
  </aside>
</template>

<style scoped lang="scss">
.cta {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 32px;
  margin-top: 72px;
  padding: 40px;
  background: #ebebeb;
  color: #111111;
}

.cta__title {
  font-size: 34px;
  color: #111111;
}

.cta__button {
  font-size: 17px;
  color: #111111;
  background: #ffffff;
  border: 1px solid #111111;
  padding: 14px 26px;
  white-space: nowrap;
}
</style>
