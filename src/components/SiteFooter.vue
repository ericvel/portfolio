<script setup lang="ts">
import { useI18n } from "vue-i18n";

const { t } = useI18n();
</script>

<template>
  <footer class="footer">
    <div class="footer__text">
      <h2 class="footer__title">{{ t("cta.title") }}</h2>
      <p class="footer__lede">{{ t("cta.lede") }}</p>
    </div>
    <div class="footer__links">
      <a href="mailto:eric.vel@outlook.com">eric.vel@outlook.com</a>
      <a href="https://github.com/ericvel" target="_blank" rel="noopener">GitHub ↗</a>
      <a href="https://www.linkedin.com/in/eric-veliyulin/" target="_blank" rel="noopener">
        LinkedIn ↗
      </a>
    </div>
  </footer>
</template>

<style scoped lang="scss">
.footer {
  background: #ebebeb;
  color: #111111;
  padding: 88px 64px;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 56px;
}

.footer__text {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.footer__title {
  margin: 0;
  font-size: 68px;
  line-height: 1;
  font-weight: 400;
}

.footer__lede {
  margin: 0;
  max-width: 46ch;
  font-size: 20px;
  line-height: 1.5;
  color: #555555;
}

.footer__links {
  display: flex;
  flex-direction: column;
  gap: 10px;
  font-size: 18px;
  text-align: right;
}
</style>
