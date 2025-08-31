import { createRouter, createWebHistory } from "vue-router";

// 레이아웃
import DefaultLayout from "@/layouts/DefaultLayout.vue";
import SimpleLayout from "@/layouts/SimpleLayout.vue";

// 페이지
import Home from "@/pages/Home.vue";
import About from "@/pages/About.vue";
import Project from "@/pages/Project.vue";
import Contact from "@/pages/Contact.vue";

const routes = [
  {
    path: "/",
    component: DefaultLayout,
    children: [
      {
        path: "",
        name: "Home",
        component: Home,
      },
      {
        path: "about",
        name: "About",
        component: About,
      },
      {
        path: "projects",
        name: "Projects",
        component: Project,
      },
      {
        path: "contact",
        name: "Contact",
        component: Contact,
      },
    ],
  },
  //   {
  //     path: "/auth",
  //     component: SimpleLayout,
  //     children: [
  //       {
  //         path: "login",
  //         name: "Login",
  //         component: () => import("@/pages/Login.vue"),
  //       },
  //     ],
  //   },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
