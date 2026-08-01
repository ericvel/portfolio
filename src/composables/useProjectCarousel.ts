import { onBeforeUnmount, onMounted, ref, watch, type Ref } from "vue";

/** Card width and gap, transcribed from the design. */
const CARD = 720;
const GAP = 40;
const STEP = CARD + GAP;

function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

/**
 * Drives the scroll-snap project carousel: tracks which card is centred so the
 * counter, de-emphasis and arrow states stay in sync however the user scrolled.
 *
 * The track element is owned by the calling component — a template ref cannot be
 * created here and handed back, because Vue will not populate a destructured const.
 */
export function useProjectCarousel(track: Ref<HTMLElement | null>, count: number) {
  const activeIndex = ref(0);

  function sync() {
    const el = track.value;
    if (!el) return;
    const index = Math.round(el.scrollLeft / STEP);
    activeIndex.value = Math.min(Math.max(index, 0), count - 1);
  }

  function go(delta: number) {
    const el = track.value;
    if (!el) return;
    const next = Math.min(Math.max(activeIndex.value + delta, 0), count - 1);
    el.scrollTo({
      left: next * STEP,
      behavior: prefersReducedMotion() ? "auto" : "smooth",
    });
  }

  // The element only exists after mount, and `watch` also covers it being swapped out.
  const stop = watch(
    track,
    (el, previous) => {
      previous?.removeEventListener("scroll", sync);
      el?.addEventListener("scroll", sync, { passive: true });
    },
    { immediate: true },
  );

  onMounted(sync);
  onBeforeUnmount(() => {
    stop();
    track.value?.removeEventListener("scroll", sync);
  });

  return { activeIndex, go };
}

/** `1` → `'01'`, matching the design's `pad()`. */
export function pad(n: number) {
  return String(n).padStart(2, "0");
}
