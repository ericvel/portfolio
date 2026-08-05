import { createRouter, createWebHistory } from "vue-router";
import { findProject } from "@/data/projects";
import HomeView from "@/views/HomeView.vue";

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
  scrollBehavior(to) {
    if (to.hash) return { el: to.hash, behavior: "smooth" };
    // Explicitly instant: the global `scroll-behavior: smooth` would otherwise
    // animate the jump to top, which reads as latency on a route change.
    return { top: 0, behavior: "instant" };
  },
});

export default router;
