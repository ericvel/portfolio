<script setup lang="ts">
import { useI18n } from "vue-i18n";

const { t } = useI18n();
</script>

<template>
  <section class="hero">
    <span class="hero__eyebrow">{{ t("hero.eyebrow") }}</span>
    <h1 class="hero__title">{{ t("hero.title") }}</h1>
    <div class="hero__meta">
      <p class="hero__lede">{{ t("hero.lede") }}</p>
      <div class="hero__links">
        <a href="https://github.com/ericvel" target="_blank" rel="noopener">GitHub ↗</a>
        <a href="https://www.linkedin.com/in/eric-veliyulin/" target="_blank" rel="noopener">
          LinkedIn ↗
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.hero {
  display: flex;
  flex-direction: column;
  gap: 40px;
  padding: 96px 64px 72px;
}

.hero__eyebrow {
  font-size: 14px;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: #555555;
}

.hero__title {
  margin: 0;
  font-size: clamp(72px, 9vw, 132px);
  line-height: 0.92;
  letter-spacing: -0.03em;
  font-weight: 400;
  max-width: 14ch;
}

.hero__meta {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 56px;
  flex-wrap: wrap;
  border-top: 1px solid #cccccc;
  padding-top: 24px;
}

.hero__lede {
  margin: 0;
  max-width: 34ch;
  font-size: 21px;
  line-height: 1.45;
  color: #555555;
}

.hero__links {
  display: flex;
  gap: 24px;
  font-size: 16px;

  a {
    border-bottom: 1px solid #cccccc;
    padding-bottom: 3px;
  }
}
</style>
