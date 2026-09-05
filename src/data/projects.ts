import askoServeringHome from "@/assets/projects/askoservering-forside.png";
import askoServeringCheckout from "@/assets/projects/askoservering-handlekurv.png";
import fiksHome from "@/assets/projects/fiks-forside.png";
import fiksCatalog from "@/assets/projects/fiks-varebok.png";
import mittRodeKors from "@/assets/projects/mitt-rode-kors.png";
import rewindifyDesktop from "@/assets/projects/rewindify-desktop.jpg";
import rewindifyMobile from "@/assets/projects/rewindify-mobile.jpg";
import type { Project } from "./types";

/** Non-empty by type: the ledger, the header menu and the project pager all assume a first entry. */
export const PROJECTS: [Project, ...Project[]] = [
  {
    id: "asko",
    title: "ASKO Servering",
    year: "2023–2026",
    lead: true,
    tech: ["Vue", "TypeScript", "Vitest", "Playwright", "TanStack Query"],
    leadImage: { src: askoServeringHome, ratio: "2904 / 1712" },
    images: [
      { src: askoServeringCheckout, ratio: "2904 / 1712" },
      { src: fiksHome, ratio: "2904 / 1712" },
      { src: fiksCatalog, ratio: "2904 / 1712" },
    ],
  },
  {
    id: "rodekors",
    title: "Mitt Røde Kors",
    year: "2021–2023",
    tech: ["React", "Next.js", "Tailwind CSS"],
    images: [{ src: mittRodeKors, ratio: "2400 / 1528" }],
  },
  {
    id: "rewindify",
    title: "Rewindify",
    year: "2026",
    tech: ["Vue", "TypeScript", "Vitest", "Impeccable", "Spotify Web API"],
    repository: "https://github.com/ericvel/rewindify",
    images: [
      { src: rewindifyDesktop, ratio: "2904 / 1712" },
      { src: rewindifyMobile, ratio: "724 / 1424" },
    ],
  },
];

export function findProject(id: string): Project | undefined {
  return PROJECTS.find((project) => project.id === id);
}
