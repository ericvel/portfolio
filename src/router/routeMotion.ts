import type { RouteLocationNormalized } from "vue-router";

type RouteMotion = "forward" | "back" | "none";

export function setRouteMotion(to: RouteLocationNormalized, from: RouteLocationNormalized): void {
  const fromProject = from.name === "project";
  const toProject = to.name === "project";
  let motion: RouteMotion = "none";

  if (toProject && (from.name === "home" || fromProject)) {
    motion = "forward";
  } else if (fromProject && to.name === "home") {
    motion = "back";
  }

  if (typeof document !== "undefined") {
    document.documentElement.dataset.routeMotion = motion;
  }
}
