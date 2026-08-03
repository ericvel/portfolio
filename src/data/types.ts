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
  /** Engagement period, e.g. `'2023–2026'` or a single year. Rendered as a measured value. */
  year: string;
  /** Individual tech tags, shown both in the ledger row and on the project page. */
  tech: string[];
  images: ProjectImage[];
  /**
   * The one project the ledger argues from. The lead row drops the mark plate and carries
   * `images[0]` instead — see the Project Ledger section of DESIGN.md. Exactly one project
   * sets this.
   */
  lead?: true;
}
