<script setup lang="ts">
import { computed } from "vue";
import { useI18n } from "vue-i18n";
import AppIcon from "@/components/AppIcon.vue";

const { t, tm, rt } = useI18n();

const ndcPoints = computed(() => tm("talks.ndc.points") as string[]);
</script>

<template>
  <section id="foredrag" class="talks">
    <div class="talks__shell shell">
      <div class="talks__head">
        <h2 class="talks__heading">{{ t("talks.heading") }}</h2>
        <p class="talks__lede">{{ t("talks.lede") }}</p>
      </div>

      <a
        class="featured"
        :aria-label="`The New Frontend Toolkit — ${t('talks.watch')}`"
        href="https://www.youtube.com/watch?v=rjMwM7--9cA"
        target="_blank"
        rel="noopener"
      >
        <div class="featured__main">
          <h3 class="featured__title">The New Frontend Toolkit</h3>
          <p class="featured__meta mono">NDC London 2026 · {{ t("talks.ndc.meta") }}</p>
          <p class="featured__desc">{{ t("talks.ndc.desc") }}</p>
          <span class="featured__watch">
            {{ t("talks.watch") }}
            <AppIcon name="arrow-up-right" />
          </span>
        </div>

        <ul class="featured__points">
          <li v-for="(point, index) in ndcPoints" :key="index" class="featured__point">
            {{ rt(point) }}
          </li>
        </ul>
      </a>

      <div class="talks__grid">
        <a
          class="talk"
          aria-label="Customizable select components — Framsia, Oslo (Meetup)"
          href="https://www.meetup.com/framsia/events/313652618/"
          target="_blank"
          rel="noopener"
        >
          <h3 class="talk__title">Customizable select components</h3>
          <p class="talk__meta mono">Framsia, Oslo</p>
          <p class="talk__desc">{{ t("talks.framsia.desc") }}</p>
          <span class="talk__link">
            Meetup
            <AppIcon name="arrow-up-right" />
          </span>
        </a>

        <div class="talk talk--static">
          <h3 class="talk__title">{{ t("talks.inhouse.title") }}</h3>
          <p class="talk__meta mono">{{ t("talks.ongoing") }} · {{ t("talks.onRequest") }}</p>
          <p class="talk__desc">{{ t("talks.inhouse.desc") }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.talks {
  padding-block: var(--space-9);
}

.talks__head {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: var(--space-7);
  flex-wrap: wrap;
  padding-bottom: var(--space-7);
}

.talks__heading {
  margin: 0;
  font-size: var(--step-4);
  font-weight: 500;
  letter-spacing: -0.025em;
}

.talks__lede {
  margin: 0;
  max-width: 54ch;
  font-size: var(--step-0);
  line-height: 1.55;
  color: var(--ink-soft);
  text-wrap: pretty;
}

/* The recorded conference talk is the strongest single piece of speaking evidence,
   so it gets the heavy rule and the width; the other two hang off hairlines. */
.featured {
  display: grid;
  grid-template-columns: minmax(0, 1.5fr) minmax(0, 1fr);
  gap: var(--space-8);
  padding-top: var(--space-6);
  border-top: 2px solid var(--ink);

  &:hover .featured__title {
    text-decoration: underline;
  }
}

.featured__main {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.featured__title {
  margin: 0;
  font-size: var(--step-5);
  font-weight: 500;
  line-height: 1.05;
  letter-spacing: -0.03em;
  text-wrap: balance;
}

.featured__meta {
  margin: var(--space-3) 0 0;
  color: var(--ink-soft);
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.featured__desc {
  margin: var(--space-5) 0 0;
  max-width: 56ch;
  font-size: var(--step-1);
  line-height: 1.55;
  color: var(--ink-soft);
  text-wrap: pretty;
}

.featured__watch {
  display: inline-flex;
  align-items: center;
  gap: var(--space-3);
  margin-top: var(--space-6);
  font-size: var(--step-0);
  font-weight: 500;
  padding-bottom: 3px;
  border-bottom: 2px solid var(--signal);
}

.featured:hover .featured__watch :deep(.icon),
.talk:hover .talk__link :deep(.icon) {
  transform: translate(2px, -2.5px);
}

.featured__watch :deep(.icon),
.talk__link :deep(.icon) {
  transition: transform 220ms cubic-bezier(0.16, 1, 0.3, 1);
}

.featured__points {
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0;
  list-style: none;
  align-self: start;
}

.featured__point {
  padding-block: var(--space-3);
  font-size: var(--step-0);
  line-height: 1.4;
  color: var(--ink-soft);
  border-bottom: 1px solid var(--rule);

  &:first-child {
    padding-top: var(--space-1);
  }
}

.talks__grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: var(--space-8);
  margin-top: var(--space-8);
}

.talk {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-top: var(--space-5);
  border-top: 1px solid var(--rule-strong);

  &:not(.talk--static):hover .talk__title {
    text-decoration: underline;
  }
}

.talk__title {
  margin: 0;
  font-size: var(--step-2);
  font-weight: 500;
  line-height: 1.15;
  letter-spacing: -0.02em;
  text-wrap: balance;
}

.talk__meta {
  margin: var(--space-3) 0 0;
  color: var(--ink-soft);
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.talk__desc {
  margin: var(--space-4) 0 0;
  max-width: 46ch;
  font-size: var(--step-0);
  line-height: 1.5;
  color: var(--ink-soft);
  text-wrap: pretty;
}

.talk__link {
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  margin-top: var(--space-5);
  font-size: var(--step--1);
  font-weight: 500;
  padding-bottom: 3px;
  border-bottom: 2px solid var(--signal);
}

@media (max-width: 860px) {
  .featured {
    grid-template-columns: minmax(0, 1fr);
    gap: var(--space-6);
  }

  .featured__points {
    border-top: 1px solid var(--rule);
    padding-top: var(--space-1);
  }
}
</style>
