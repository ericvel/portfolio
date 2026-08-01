<script setup lang="ts">
import { computed } from "vue";
import { useI18n } from "vue-i18n";

const { t, tm, rt } = useI18n();

const ndcPoints = computed(() => tm("talks.ndc.points") as string[]);
</script>

<template>
  <section id="foredrag" class="talks">
    <div class="talks__head">
      <h2 class="talks__heading">{{ t("talks.heading") }}</h2>
      <p class="talks__lede">{{ t("talks.lede") }}</p>
    </div>

    <a
      class="featured"
      href="https://www.youtube.com/watch?v=rjMwM7--9cA"
      target="_blank"
      rel="noopener"
    >
      <div class="featured__main">
        <span class="eyebrow">NDC London 2026</span>
        <h3 class="featured__title">The New Frontend Toolkit</h3>
        <p class="featured__desc">{{ t("talks.ndc.desc") }}</p>
        <span class="featured__watch">{{ t("talks.watch") }}</span>
      </div>
      <div class="featured__aside">
        <span v-for="(point, index) in ndcPoints" :key="index" class="featured__point">
          {{ rt(point) }}
        </span>
        <span class="featured__meta">{{ t("talks.ndc.meta") }}</span>
      </div>
    </a>

    <div class="talks__grid">
      <a
        class="talk"
        href="https://www.meetup.com/framsia/events/313652618/"
        target="_blank"
        rel="noopener"
      >
        <span class="eyebrow">Framsia, Oslo</span>
        <h3 class="talk__title">Customizable select components</h3>
        <span class="talk__desc">{{ t("talks.framsia.desc") }}</span>
        <span class="talk__link">Meetup ↗</span>
      </a>
      <div class="talk">
        <span class="eyebrow">{{ t("talks.ongoing") }}</span>
        <h3 class="talk__title">{{ t("talks.inhouse.title") }}</h3>
        <span class="talk__desc">{{ t("talks.inhouse.desc") }}</span>
        <span class="talk__note">{{ t("talks.onRequest") }}</span>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.talks {
  display: flex;
  flex-direction: column;
  gap: 40px;
  padding: 88px 64px;
}

.talks__head {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 48px;
  flex-wrap: wrap;
}

.talks__heading {
  margin: 0;
  font-size: 44px;
  font-weight: 400;
}

.talks__lede {
  margin: 0;
  max-width: 52ch;
  font-size: 17px;
  line-height: 1.5;
  color: #555555;
}

.eyebrow {
  font-size: 14px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: #555555;
}

.featured {
  display: grid;
  grid-template-columns: minmax(0, 1.4fr) minmax(0, 1fr);
  gap: 56px;
  padding: 32px 0 36px;
  border-top: 1px solid #111111;
}

.featured__main {
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.featured__title {
  margin: 0;
  font-size: 40px;
  line-height: 1.1;
  font-weight: 400;
}

.featured__desc {
  margin: 0;
  max-width: 58ch;
  font-size: 18px;
  line-height: 1.5;
  color: #555555;
}

.featured__watch {
  font-size: 16px;
  color: #111111;
}

.featured__aside {
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-self: start;
  padding-top: 4px;
}

.featured__point {
  font-size: 16px;
  line-height: 1.5;
  color: #555555;
}

.featured__meta {
  font-size: 15px;
  color: #777777;
  padding-top: 6px;
}

.talks__grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 0 64px;
}

.talk {
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 26px 0;
  border-top: 1px solid #cccccc;
}

.talk__title {
  margin: 0;
  font-size: 30px;
  font-weight: 400;
}

.talk__desc {
  font-size: 17px;
  line-height: 1.45;
  color: #555555;
}

.talk__link {
  font-size: 15px;
  color: #111111;
}

.talk__note {
  font-size: 15px;
  color: #555555;
}
</style>
