import askoLogo from "@/assets/projects/asko-logo.jpg";
import askoServering from "@/assets/projects/asko-servering.png";
import askoFiks from "@/assets/projects/asko-fiks.png";
import rodeKorsLogo from "@/assets/projects/rode-kors-logo.svg";
import mittRodeKors from "@/assets/projects/mitt-rode-kors.png";
import habiitLogo from "@/assets/projects/habiit-logo.svg";
import habiit from "@/assets/projects/habiit.png";
import type { Project } from "./types";

export const PROJECTS: Project[] = [
  {
    id: "asko",
    title: "ASKO Servering",
    logo: askoLogo,
    stack: "Vue · Vite · TypeScript · Vitest · Playwright · TanStack Query",
    tech: ["Vue", "Vite", "TypeScript", "Vitest", "Playwright", "TanStack Query"],
    images: [
      { src: askoServering, ratio: "2400 / 1528" },
      { src: askoFiks, ratio: "2400 / 1528" },
    ],
  },
  {
    id: "rodekors",
    title: "Mitt Røde Kors",
    logo: rodeKorsLogo,
    stack: "React · Next.js · Tailwind CSS",
    tech: ["React", "Next.js", "Tailwind CSS"],
    images: [{ src: mittRodeKors, ratio: "2400 / 1528" }],
  },
  {
    id: "habiit",
    title: "Habiit",
    logo: habiitLogo,
    stack: "Swift · Firebase · iOS",
    tech: ["Swift", "Firebase", "iOS"],
    images: [{ src: habiit, ratio: "1002 / 890" }],
  },
];

export function findProject(id: string): Project | undefined {
  return PROJECTS.find((project) => project.id === id);
}
