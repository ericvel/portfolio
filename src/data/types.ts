export type Locale = "no" | "en";

/**
 * Literal union rather than `string` so that template-literal message keys such as
 * `` `projects.${id}.blurb` `` still resolve against the typed locale schema.
 */
export type ProjectId = "asko" | "rodekors" | "habiit";

export interface ProjectImage {
  /** Resolved asset URL. */
  src: string;
  /** CSS `aspect-ratio` value, e.g. `'2400 / 1528'`. */
  ratio: string;
}

/**
 * Non-translatable project structure. All copy lives in the locale files under
 * `projects.<id>.*` — see `src/locales/no.ts`.
 */
export interface Project {
  id: ProjectId;
  title: string;
  logo: string;
  /** Pre-joined tech list shown on the carousel card. */
  stack: string;
  /** Individual tech tags shown on the project page. */
  tech: string[];
  images: ProjectImage[];
}
