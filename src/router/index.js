import { createRouter, createWebHistory } from "vue-router";

// 레이아웃
import DefaultLayout from "@/layouts/DefaultLayout.vue";

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
        meta: {
          title: "HeeYoung - 프론트엔드 개발자",
          description: "사용자 경험을 중시하는 프론트엔드 개발자 HeeYoung의 포트폴리오입니다.",
        },
      },
      {
        path: "about",
        name: "About",
        component: About,
        meta: {
          title: "About - HeeYoung",
          description: "프론트엔드 개발자 HeeYoung에 대해 더 자세히 알아보세요.",
        },
      },
      {
        path: "projects",
        name: "Projects",
        component: Project,
        meta: {
          title: "Projects - HeeYoung",
          description: "HeeYoung이 개발한 다양한 프로젝트들을 확인해보세요.",
        },
      },
      {
        path: "contact",
        name: "Contact",
        component: Contact,
        meta: {
          title: "Contact - HeeYoung",
          description: "HeeYoung과 연락하고 싶으시다면 언제든지 연락해주세요.",
        },
      },
    ],
  },
  // 404 페이지
  {
    path: "/:pathMatch(.*)*",
    redirect: "/",
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  },
});

// 라우터 가드 - 페이지 타이틀 설정
router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title;
  }

  if (to.meta.description) {
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", to.meta.description);
    }
  }

  next();
});

export default router;
