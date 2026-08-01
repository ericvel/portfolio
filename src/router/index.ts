import { createRouter, createWebHistory } from "vue-router";
import { findProject } from "@/data/projects";
import HomeView from "@/views/HomeView.vue";

const SITE_TITLE = "Eric Veliyulin — Frontendspesialist";

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
    return { top: 0 };
  },
});

router.afterEach((to) => {
  const project = to.name === "project" ? findProject(String(to.params.id)) : undefined;
  document.title = project ? `Eric Veliyulin — ${project.title}` : SITE_TITLE;
});

export default router;
