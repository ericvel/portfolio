<script setup lang="ts">
import { computed } from "vue";
import { useI18n } from "vue-i18n";
import AppIcon from "@/components/AppIcon.vue";
import { useClipboard } from "@/composables/useClipboard";

const EMAIL = "eric.vel@outlook.com";
const { t } = useI18n();
const { copy: copyEmail, copyState } = useClipboard(EMAIL);

const copyStatus = computed(() => {
  if (copyState.value === "copied") return t("hero.copySuccess");
  if (copyState.value === "failed") return t("hero.copyFailure");
  return "";
});

const copyButtonLabel = computed(() => {
  if (copyState.value === "copied") return t("hero.copySuccess");
  if (copyState.value === "failed") return t("hero.copyRetryLabel");
  return t("hero.copyEmail", { email: EMAIL });
});
</script>

<template>
  <footer class="footer">
    <div class="footer__shell shell">
      <div class="footer__text">
        <h2 class="footer__title">{{ t("cta.title") }}</h2>
        <p class="footer__lede">{{ t("cta.lede") }}</p>
      </div>

      <div class="footer__act">
        <div class="footer__email-tools">
          <a class="footer__mail" :href="`mailto:${EMAIL}`">{{ EMAIL }}</a>
          <button
            type="button"
            class="footer__copy"
            :aria-label="copyButtonLabel"
            @click="copyEmail"
          >
            <AppIcon :name="copyState === 'copied' ? 'check' : 'copy'" />
          </button>
          <span class="visually-hidden" role="status" aria-live="polite" aria-atomic="true">
            {{ copyStatus }}
          </span>
          <span v-if="copyState === 'failed'" class="footer__copy-recovery">
            {{ t("hero.copyFailure") }}
          </span>
        </div>
        <div class="footer__links">
          <a class="footer__link" href="https://github.com/ericvel" target="_blank" rel="noopener">
            GitHub
          </a>
          <a
            class="footer__link"
            href="https://www.linkedin.com/in/eric-veliyulin/"
            target="_blank"
            rel="noopener"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped lang="scss">
/* The page ends on the darkest ground it has. Nothing below this competes with the
   address, which is the only thing this section exists to deliver. */
.footer {
  background: var(--footer-ground);
  color: var(--footer-ink);
  padding-block: var(--space-9);
  --focus: var(--signal);
}

.footer__shell {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, auto);
  gap: var(--space-8);
  align-items: end;
}

.footer__title {
  margin: 0;
  max-width: 16ch;
  font-size: var(--step-5);
  font-weight: 800;
  line-height: 1;
  letter-spacing: -0.03em;
  text-wrap: balance;
}

.footer__lede {
  margin: var(--space-5) 0 0;
  max-width: 46ch;
  font-size: var(--step-1);
  line-height: 1.5;
  color: var(--footer-soft);
  text-wrap: pretty;
}

.footer__act {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: var(--space-5);
}

.footer__email-tools {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: var(--space-2);
  max-width: 100%;
}

.footer__mail {
  display: inline-block;
  padding: var(--space-4) var(--space-6);
  background: var(--signal);
  color: var(--signal-ink);
  font-size: var(--step-2);
  font-weight: 500;
  letter-spacing: -0.015em;
  word-break: break-word;
  user-select: text;
  transition:
    background 180ms ease,
    transform 180ms cubic-bezier(0.16, 1, 0.3, 1);

  &:hover {
    background: var(--footer-ink);
    color: var(--footer-ground);
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(0);
  }
}

.footer__copy {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  min-height: 44px;
  border: 0;
  color: var(--footer-soft);
  cursor: pointer;
  transition:
    color 160ms ease,
    background 160ms ease;

  &:hover {
    background: var(--footer-rule);
    color: var(--footer-ink);
  }
}

.footer__copy-recovery {
  flex-basis: 100%;
  color: var(--footer-soft);
  font-family: var(--font-mono);
  font-size: var(--step--2);
  line-height: 1.4;
}

.footer__links {
  display: flex;
  gap: var(--space-6);
}

.footer__link {
  font-size: var(--step-0);
  color: var(--footer-soft);
  padding-bottom: 3px;
  border-bottom: 1px solid var(--footer-rule);
  transition:
    color 160ms ease,
    border-color 160ms ease;

  &:hover {
    color: var(--footer-ink);
    border-bottom-color: var(--footer-ink);
  }
}

@media (max-width: 860px) {
  .footer__shell {
    grid-template-columns: minmax(0, 1fr);
    align-items: start;
    gap: var(--space-7);
  }
}
</style>
