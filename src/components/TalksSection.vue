<script setup lang="ts">
import { useI18n } from "vue-i18n";
import AppIcon from "@/components/AppIcon.vue";
import ndcPhoto from "@/assets/images/ndc-london.jpg";

const { t } = useI18n();
</script>

<template>
  <section id="foredrag" class="talks" aria-labelledby="talks-heading">
    <div class="shell">
      <div class="talks__head">
        <h2 id="talks-heading" class="talks__heading">{{ t("talks.heading") }}</h2>
        <p class="talks__lede">{{ t("talks.lede") }}</p>
      </div>

      <!-- The recorded conference talk is the strongest single piece of speaking evidence. It
           sits above a 2px ink rule with the claim on the column line and the photograph in
           the register beside it — both ending on the column's far edge, so nothing here
           crosses the line the rest of the page is ranged against. -->
      <div class="featured">
        <div class="featured__main">
          <h3 class="featured__title">The New Frontend Toolkit</h3>
          <p class="featured__meta mono">NDC London 2026 · {{ t("talks.ndc.meta") }}</p>
          <p class="featured__desc">{{ t("talks.ndc.desc") }}</p>
          <a
            class="featured__watch"
            href="https://www.youtube.com/watch?v=rjMwM7--9cA"
            target="_blank"
            rel="noopener"
          >
            {{ t("talks.watch") }}
            <AppIcon name="arrow-up-right" />
          </a>
        </div>

        <figure class="featured__figure">
          <img
            class="featured__photo"
            :src="ndcPhoto"
            :alt="t('talks.ndc.photoAlt')"
            width="1672"
            height="941"
            loading="lazy"
          />
          <figcaption class="featured__caption mono">{{ t("talks.ndc.photoCaption") }}</figcaption>
        </figure>
      </div>

      <div class="talks__grid">
        <div class="talk">
          <h3 class="talk__title">Customizable select components</h3>
          <p class="talk__meta mono">Framsia, Oslo</p>
          <p class="talk__desc">{{ t("talks.framsia.desc") }}</p>
          <a
            class="talk__link"
            href="https://www.meetup.com/framsia/events/313652618/"
            target="_blank"
            rel="noopener"
          >
            Meetup
            <AppIcon name="arrow-up-right" />
          </a>
        </div>

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

.featured {
  display: grid;
  grid-template-columns: minmax(0, 0.85fr) minmax(0, 1fr);
  gap: var(--space-8);
  align-items: start;
  padding-top: var(--space-6);
  border-top: 2px solid var(--ink);
}

.featured__main {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-bottom: var(--space-2);
}

.featured__title {
  margin: 0;
  max-width: 16ch;
  font-size: var(--step-5);
  font-weight: 500;
  line-height: 1.05;
  letter-spacing: -0.03em;
  text-wrap: balance;
}

.featured__meta {
  margin: var(--space-4) 0 0;
  color: var(--ink-soft);
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.featured__desc {
  margin: var(--space-5) 0 0;
  max-width: 42ch;
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

.featured__watch:hover :deep(.icon),
.featured__watch:focus-visible :deep(.icon),
.talk__link:hover :deep(.icon),
.talk__link:focus-visible :deep(.icon) {
  transform: translate(2px, -2.5px);
}

.featured__watch :deep(.icon),
.talk__link :deep(.icon) {
  transition: transform 220ms cubic-bezier(0.16, 1, 0.3, 1);
}

.featured__figure {
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
}

.featured__photo {
  display: block;
  width: 100%;
  height: auto;
  /* Deep paper rather than nothing, so a slow image reads as loading instead of as an
     empty rectangle someone meant to fill. */
  background: var(--paper-deep);
  /* Hairlined on all four sides: inside the column the picture is an object on the page, so
     it gets a full edge rather than the three-sided crop a bleed would take. */
  border: 1px solid var(--rule);
}

.featured__caption {
  color: var(--ink-soft);
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

  /* The picture goes under the claim on narrow screens: the reader reaches the talk and
     what it covers before the proof that it happened. */
  .featured__figure {
    order: 2;
  }
}
</style>
