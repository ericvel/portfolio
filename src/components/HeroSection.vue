<script setup lang="ts">
import { computed, onBeforeUnmount, ref } from "vue";
import { useI18n } from "vue-i18n";
import AppIcon from "@/components/AppIcon.vue";

const EMAIL = "eric.vel@outlook.com";
const COPY_FEEDBACK_MS = 800;
const { t } = useI18n();
const copyState = ref<"idle" | "copied" | "failed">("idle");
let copyAttempt = 0;
let copyResetTimer: ReturnType<typeof setTimeout> | undefined;

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

function clearCopyResetTimer() {
  if (copyResetTimer === undefined) return;
  clearTimeout(copyResetTimer);
  copyResetTimer = undefined;
}

onBeforeUnmount(() => {
  copyAttempt += 1;
  clearCopyResetTimer();
});

function fallbackCopy(text: string) {
  const textarea = document.createElement("textarea");
  textarea.value = text;
  textarea.setAttribute("readonly", "");
  textarea.style.position = "fixed";
  textarea.style.insetInlineStart = "-9999px";
  textarea.style.insetBlockStart = "-9999px";
  document.body.append(textarea);
  textarea.focus();
  textarea.select();

  try {
    return document.execCommand("copy");
  } finally {
    textarea.remove();
  }
}

async function copyText(text: string) {
  if (navigator.clipboard?.writeText) {
    try {
      await navigator.clipboard.writeText(text);
      return;
    } catch {
      // Fall through to the legacy path when clipboard permission is unavailable.
    }
  }

  if (!fallbackCopy(text)) throw new Error("Clipboard copy failed");
}

async function copyEmail() {
  clearCopyResetTimer();
  const attempt = ++copyAttempt;
  copyState.value = "idle";

  try {
    await copyText(EMAIL);
    if (attempt !== copyAttempt) return;

    copyState.value = "copied";
    copyResetTimer = setTimeout(() => {
      if (attempt === copyAttempt) copyState.value = "idle";
      copyResetTimer = undefined;
    }, COPY_FEEDBACK_MS);
  } catch {
    if (attempt === copyAttempt) copyState.value = "failed";
  }
}
</script>

<template>
  <section class="hero">
    <div class="hero__shell shell">
      <h1 class="hero__title">{{ t("hero.title") }}</h1>

      <p class="hero__role mono">
        <span class="hero__marker" aria-hidden="true"></span>
        {{ t("hero.eyebrow") }}
      </p>

      <p class="hero__lede">{{ t("hero.lede") }}</p>

      <dl class="hero__proof">
        <div class="hero__proof-item">
          <dt class="hero__proof-label mono">{{ t("hero.proofProductionLabel") }}</dt>
          <dd class="hero__proof-value">{{ t("hero.proofProduction") }}</dd>
        </div>
        <div class="hero__proof-item">
          <dt class="hero__proof-label mono">{{ t("hero.proofExpertiseLabel") }}</dt>
          <dd class="hero__proof-value">{{ t("hero.proofExpertise") }}</dd>
        </div>
      </dl>

      <div class="hero__contact">
        <a class="action" href="mailto:eric.vel@outlook.com">{{ t("hero.contact") }}</a>
        <div class="hero__email-tools">
          <span class="hero__email">{{ EMAIL }}</span>
          <button type="button" class="hero__copy" :aria-label="copyButtonLabel" @click="copyEmail">
            <AppIcon :name="copyState === 'copied' ? 'check' : 'copy'" />
          </button>
          <span class="visually-hidden" role="status" aria-live="polite" aria-atomic="true">
            {{ copyStatus }}
          </span>
          <span v-if="copyState === 'failed'" class="hero__copy-recovery">
            {{ t("hero.copyFailure") }}
          </span>
        </div>
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
  </section>
</template>

<style scoped lang="scss">
.hero {
  padding-block: clamp(var(--space-7), 7vw, var(--space-9)) var(--space-8);
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

.hero__lede {
  margin-top: var(--space-8);
  max-width: 44ch;
  font-size: var(--step-2);
  line-height: 1.4;
  color: var(--ink-soft);
  text-wrap: pretty;
}

.hero__proof {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  margin: var(--space-7) 0 0;
  padding: 0;
  border-block: 1px solid var(--rule-strong);
}

.hero__proof-item {
  min-width: 0;
  padding: var(--space-5) var(--space-6) var(--space-6) 0;

  & + & {
    padding-inline: var(--space-6) 0;
    border-left: 1px solid var(--rule-strong);
  }
}

.hero__proof-label {
  color: var(--ink-soft);
  text-transform: uppercase;
  letter-spacing: 0.06em;
}

.hero__proof-value {
  margin: var(--space-3) 0 0;
  font-size: var(--step-3);
  font-weight: 500;
  line-height: 1.1;
  letter-spacing: -0.02em;
  text-wrap: balance;
}

.hero__contact {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: var(--space-4) var(--space-7);
  margin-top: var(--space-5);
}

/* The primary action. Ink on signal reads at 4.8:1 — the orange is the ground, not
   the text, which is why it can be this saturated. */
.action {
  display: inline-flex;
  align-items: center;
  min-height: 56px;
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
  gap: var(--space-5);
}

.quiet {
  display: inline-flex;
  align-items: center;
  min-height: 44px;
  font-size: var(--step-0);
  color: var(--ink-soft);
  background-image: linear-gradient(var(--rule-strong), var(--rule-strong));
  background-repeat: no-repeat;
  background-position: 0 calc(100% - 8px);
  background-size: 100% 1px;
  transition:
    color 160ms ease,
    background-size 160ms ease;

  &:hover {
    color: var(--ink);
    background-image: linear-gradient(var(--ink), var(--ink));
    background-size: 100% 2px;
  }
}

.hero__email {
  display: inline-flex;
  align-items: center;
  min-height: 44px;
  color: var(--ink-soft);
  font-family: var(--font-mono);
  font-size: var(--step--1);
  user-select: text;
}

.hero__email-tools {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: var(--space-2) var(--space-1);
  min-width: 0;
}

.hero__copy {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  min-height: 44px;
  border: 0;
  color: var(--ink-soft);
  cursor: pointer;
  transition:
    color 160ms ease,
    background 160ms ease;

  &:hover {
    background: var(--paper-deep);
    color: var(--ink);
  }
}

.hero__copy-recovery {
  flex-basis: 100%;
  color: var(--ink-soft);
  font-family: var(--font-mono);
  font-size: var(--step--2);
  line-height: 1.4;
}

@media (max-width: 560px) {
  .hero__role {
    margin-top: var(--space-5);
  }

  .hero__lede {
    margin-top: var(--space-6);
  }

  .hero__proof {
    grid-template-columns: minmax(0, 1fr);
    margin-top: var(--space-5);
  }

  .hero__proof-item {
    padding: var(--space-4) 0 var(--space-5);

    & + & {
      padding: var(--space-4) 0 var(--space-5);
      border-top: 1px solid var(--rule);
      border-left: 0;
    }
  }

  .hero__proof-value {
    margin-top: var(--space-2);
    font-size: var(--step-2);
  }

  .hero__contact {
    align-items: stretch;
    gap: var(--space-3) var(--space-5);
  }

  .action {
    width: 100%;
    justify-content: center;
  }

  .hero__email {
    margin-right: auto;
  }

  .hero__elsewhere {
    gap: var(--space-5);
  }
}
</style>
