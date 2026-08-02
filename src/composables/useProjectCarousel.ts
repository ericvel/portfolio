import { onBeforeUnmount, onMounted, ref, type Ref } from "vue";

function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

/**
 * Drives the scroll-snap project carousel: tracks which card is at the reading edge
 * so the counter, de-emphasis and arrow states stay in sync however the user got
 * there — pointer scroll, arrow buttons, or Tab.
 *
 * Positions are measured off the live DOM rather than transcribed as constants, so a
 * card can be whatever width its breakpoint gives it and the maths still lands. Cards
 * align to the track's own start padding, which is the page's column edge, so the
 * carousel sits on the same grid line as every other section.
 *
 * The track element is owned by the calling component — a template ref cannot be
 * created here and handed back, because Vue will not populate a destructured const.
 */
export function useProjectCarousel(track: Ref<HTMLElement | null>, count: number) {
  const activeIndex = ref(0);

  function cards(): HTMLElement[] {
    return Array.from(track.value?.children ?? []) as HTMLElement[];
  }

  /** The track's inline start padding — the column edge cards are measured against. */
  function inset(el: HTMLElement) {
    return parseFloat(getComputedStyle(el).paddingInlineStart) || 0;
  }

  function sync() {
    const el = track.value;
    if (!el) return;
    const edge = el.scrollLeft + inset(el);

    let nearest = 0;
    let shortest = Number.POSITIVE_INFINITY;
    cards().forEach((card, index) => {
      const distance = Math.abs(card.offsetLeft - edge);
      if (distance < shortest) {
        shortest = distance;
        nearest = index;
      }
    });

    activeIndex.value = Math.min(Math.max(nearest, 0), count - 1);
  }

  function scrollTo(index: number, behavior: ScrollBehavior) {
    const el = track.value;
    if (!el) return;
    const card = cards()[index];
    if (!card) return;

    el.scrollTo({ left: card.offsetLeft - inset(el), behavior });
  }

  function go(delta: number) {
    const next = Math.min(Math.max(activeIndex.value + delta, 0), count - 1);
    scrollTo(next, prefersReducedMotion() ? "auto" : "smooth");
  }

  /**
   * Tab moves focus to the next card whether or not it is in view. Without this the
   * keyboard user ends up on a card scrolled off-screen while the counter and the
   * arrow disabled-states still describe the previous one.
   *
   * The scroll is instant, never smooth: the browser runs its own scroll-into-view the
   * moment focus lands, and a competing smooth animation loses that race — leaving the
   * card half-shown and the counter reporting the wrong position.
   */
  function focusCard(index: number) {
    scrollTo(index, "auto");
    activeIndex.value = index;
  }

  // Attached on mount, not through a watcher on the ref. The watcher form looks tidier
  // but its first run lands while the template ref is still null, and it does not
  // reliably re-run once Vue assigns the element — which leaves the whole carousel
  // inert: the counter frozen at 01, the arrows permanently disabled.
  onMounted(() => {
    track.value?.addEventListener("scroll", sync, { passive: true });
    window.addEventListener("resize", sync, { passive: true });
    sync();
  });

  onBeforeUnmount(() => {
    track.value?.removeEventListener("scroll", sync);
    window.removeEventListener("resize", sync);
  });

  return { activeIndex, go, focusCard };
}

/** `1` → `'01'`. The counter is set in mono, so it needs a fixed width. */
export function pad(n: number) {
  return String(n).padStart(2, "0");
}
