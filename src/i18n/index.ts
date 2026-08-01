import { createI18n } from "vue-i18n";
import type { Locale } from "@/data/types";
import en from "@/locales/en";
import no from "@/locales/no";

type MessageSchema = typeof no;

declare module "vue-i18n" {
  // Augmenting vue-i18n's message schema is what gives `t()` and `tm()` typed keys. The
  // interface is intentionally empty — it exists only to merge `MessageSchema` in.
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  export interface DefineLocaleMessage extends MessageSchema {}
}

const LANG_KEY = "ev-portfolio-lang";
const DEFAULT_LOCALE: Locale = "no";

function isLocale(value: unknown): value is Locale {
  return value === "no" || value === "en";
}

function storedLocale(): Locale {
  try {
    const saved = localStorage.getItem(LANG_KEY);
    if (isLocale(saved)) return saved;
  } catch {
    // localStorage can throw in private mode or with storage blocked — fall back to the default.
  }
  return DEFAULT_LOCALE;
}

const i18n = createI18n({
  legacy: false,
  locale: storedLocale(),
  fallbackLocale: DEFAULT_LOCALE,
  messages: { no, en },
});

/** Applies a locale everywhere it is observable: vue-i18n, the DOM, and storage. */
export function setLocale(locale: Locale) {
  i18n.global.locale.value = locale;
  document.documentElement.lang = locale;
  try {
    localStorage.setItem(LANG_KEY, locale);
  } catch {
    // Persisting is best-effort; the switch itself still works for this session.
  }
}

document.documentElement.lang = i18n.global.locale.value;

export default i18n;
