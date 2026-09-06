import { readonly, ref } from "vue";

export type ThemePreference = "light" | "dark";

export const THEME_STORAGE_KEY = "ev-portfolio-theme";

const DEFAULT_THEME: ThemePreference = "light";
const THEME_COLORS: Record<ThemePreference, string> = {
  light: "#f4f1ea",
  dark: "#161815",
};
const NEXT_THEME: Record<ThemePreference, ThemePreference> = {
  dark: "light",
  light: "dark",
};

function isThemePreference(value: unknown): value is ThemePreference {
  return value === "light" || value === "dark";
}

function storedThemePreference(): ThemePreference {
  try {
    const saved = localStorage.getItem(THEME_STORAGE_KEY);
    if (isThemePreference(saved)) return saved;
  } catch {
    // Storage is optional. Light remains the default when persistence is blocked.
  }

  return DEFAULT_THEME;
}

const themePreference = ref<ThemePreference>(storedThemePreference());

function applyTheme() {
  const root = document.documentElement;
  const theme = themePreference.value;

  root.classList.remove("light", "dark");
  root.classList.add(theme);
  root.dataset.theme = theme;
  document
    .querySelector('meta[name="theme-color"]')
    ?.setAttribute("content", THEME_COLORS[theme]);
}

export function setThemePreference(preference: ThemePreference) {
  themePreference.value = preference;

  try {
    localStorage.setItem(THEME_STORAGE_KEY, preference);
  } catch {
    // The visible switch remains functional for this session without storage.
  }

  applyTheme();
}

export function cycleThemePreference() {
  setThemePreference(NEXT_THEME[themePreference.value]);
}

window.addEventListener("storage", (event) => {
  if (event.key !== THEME_STORAGE_KEY) return;

  themePreference.value = isThemePreference(event.newValue) ? event.newValue : DEFAULT_THEME;
  applyTheme();
});

applyTheme();

export function useTheme() {
  return {
    themePreference: readonly(themePreference),
    cycleThemePreference,
    setThemePreference,
  };
}
