import { onBeforeUnmount, ref } from "vue";

const COPY_FEEDBACK_MS = 800;

export function useClipboard(text: string) {
  const copyState = ref<"idle" | "copied" | "failed">("idle");
  let copyAttempt = 0;
  let copyResetTimer: ReturnType<typeof setTimeout> | undefined;

  function clearCopyResetTimer() {
    if (copyResetTimer === undefined) return;
    clearTimeout(copyResetTimer);
    copyResetTimer = undefined;
  }

  onBeforeUnmount(() => {
    copyAttempt += 1;
    clearCopyResetTimer();
  });

  function fallbackCopy() {
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

  async function writeToClipboard() {
    if (navigator.clipboard?.writeText) {
      try {
        await navigator.clipboard.writeText(text);
        return;
      } catch {
        // Fall through when clipboard permission is unavailable.
      }
    }

    if (!fallbackCopy()) throw new Error("Clipboard copy failed");
  }

  async function copy() {
    clearCopyResetTimer();
    const attempt = ++copyAttempt;
    copyState.value = "idle";

    try {
      await writeToClipboard();
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

  return { copy, copyState };
}
