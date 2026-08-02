<script setup lang="ts">
import { computed } from "vue";
import { useI18n } from "vue-i18n";
import { PROJECTS } from "@/data/projects";

const { t } = useI18n();

/**
 * Every technology named on the site, in first-appearance order. Derived from the
 * project data rather than written by hand so it can never drift from the evidence:
 * nothing appears here that isn't backed by a shipped project.
 */
const technologies = computed(() => [...new Set(PROJECTS.flatMap((project) => project.tech))]);
</script>

<template>
  <section class="hero">
    <div class="hero__shell shell">
      <h1 class="hero__title">{{ t("hero.title") }}</h1>

      <p class="hero__role mono">
        <span class="hero__marker" aria-hidden="true"></span>
        {{ t("hero.eyebrow") }}
      </p>

      <div class="hero__body">
        <div class="hero__lead">
          <p class="hero__lede">{{ t("hero.lede") }}</p>

          <div class="hero__actions">
            <a class="action" href="mailto:eric.vel@outlook.com">{{ t("nav.contact") }}</a>
            <div class="hero__elsewhere">
              <a class="quiet" href="https://github.com/ericvel" target="_blank" rel="noopener">
                GitHub
              </a>
              <a
                class="quiet"
                href="https://www.linkedin.com/in/eric-veliyulin/"
                target="_blank"
                rel="noopener"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        <div class="hero__stack">
          <h2 class="hero__stack-label mono">{{ t("hero.stackLabel") }}</h2>
          <ul class="hero__stack-list">
            <li v-for="item in technologies" :key="item" class="hero__tech mono">{{ item }}</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.hero {
  padding-block: clamp(var(--space-8), 9vw, var(--space-10)) var(--space-9);
}

.hero__title {
  margin: 0;
  max-width: 17ch;
  font-size: var(--step-6);
  font-weight: 800;
  line-height: 0.94;
  letter-spacing: -0.035em;
  text-wrap: balance;
}

.hero__role {
  display: flex;
  align-items: center;
  gap: var(--space-3);
  margin: var(--space-6) 0 0;
  color: var(--ink-soft);
  text-transform: uppercase;
  letter-spacing: 0.06em;
}

/* A drawn mark, not a glyph — it is the same square that flags the live talk. */
.hero__marker {
  width: 9px;
  height: 9px;
  flex: none;
  background: var(--signal);
}

.hero__body {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 0.85fr);
  gap: var(--space-8);
  align-items: start;
  margin-top: var(--space-8);
  padding-top: var(--space-6);
  border-top: 1px solid var(--rule);
}

.hero__lede {
  margin: 0;
  max-width: 44ch;
  font-size: var(--step-2);
  line-height: 1.4;
  color: var(--ink-soft);
  text-wrap: pretty;
}

.hero__actions {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: var(--space-5) var(--space-7);
  margin-top: var(--space-6);
}

/* The primary action. Ink on signal reads at 4.8:1 — the orange is the ground, not
   the text, which is why it can be this saturated. */
.action {
  display: inline-flex;
  align-items: center;
  padding: var(--space-4) var(--space-6);
  background: var(--signal);
  color: var(--ink);
  font-size: var(--step-0);
  font-weight: 500;
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

.hero__elsewhere {
  display: flex;
  gap: var(--space-6);
}

.quiet {
  font-size: var(--step-0);
  color: var(--ink-soft);
  padding-bottom: 3px;
  border-bottom: 1px solid var(--rule-strong);
  transition:
    color 160ms ease,
    border-color 160ms ease;

  &:hover {
    color: var(--ink);
    border-bottom-color: var(--ink);
  }
}

.hero__stack {
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
}

.hero__stack-label {
  margin: 0;
  font-weight: 400;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: var(--ink-soft);
}

.hero__stack-list {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-2);
  margin: 0;
  padding: 0;
  list-style: none;
}

.hero__tech {
  padding: 6px var(--space-3);
  border: 1px solid var(--rule-strong);
  color: var(--ink);
  white-space: nowrap;
}

@media (max-width: 900px) {
  .hero__body {
    grid-template-columns: minmax(0, 1fr);
    gap: var(--space-7);
  }
}

@media (max-width: 560px) {
  .hero__body {
    margin-top: var(--space-6);
    padding-top: var(--space-5);
  }

  .hero__role {
    margin-top: var(--space-5);
  }

  .hero__actions {
    align-items: stretch;
    flex-direction: column;
    gap: var(--space-5);
  }

  .action {
    justify-content: center;
  }

  .hero__elsewhere {
    gap: var(--space-5);
  }
}
</style>
