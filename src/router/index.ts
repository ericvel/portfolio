import { createRouter, createWebHistory } from "vue-router";
import { findProject } from "@/data/projects";
import HomeView from "@/views/HomeView.vue";
import { setRouteMotion } from "./routeMotion";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: "/", name: "home", component: HomeView },
    {
      path: "/prosjekter/:id",
      name: "project",
      component: () => import("@/views/ProjectView.vue"),
      props: true,
      beforeEnter: (to) => (findProject(String(to.params.id)) ? true : { name: "home" }),
    },
    { path: "/:pathMatch(.*)*", redirect: "/" },
  ],
  scrollBehavior(to, from) {
    if (to.hash === "#foredrag") {
      return {
        el: "#foredrag",
        top: document.querySelector<HTMLElement>(".header")?.offsetHeight ?? 0,
        behavior:
          from.name === "home" && !matchMedia("(prefers-reduced-motion: reduce)").matches
            ? "smooth"
            : "instant",
      };
    }

    return { top: 0, behavior: "instant" };
  },
});

router.beforeEach((to, from) => setRouteMotion(to, from));

export default router;
