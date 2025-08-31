<template>
  <div class="layout">
    <!-- 좌측 사이드바 -->
    <aside :class="['sidebar', { collapsed: !sidebarOpen }]">
      <div class="logo">
        <h1>MyPortfolio</h1>
      </div>

      <!-- 네비게이션 메뉴 -->
      <nav class="nav">
        <ul>
          <li v-for="route in routes" :key="route.path">
            <RouterLink :to="route.path">{{ route.name }}</RouterLink>
          </li>
        </ul>
      </nav>

      <!-- 사이드바 토글 -->
      <button class="toggle-btn" @click="sidebarOpen = !sidebarOpen">
        {{ sidebarOpen ? "⟨" : "⟩" }}
      </button>
    </aside>

    <!-- 메인 콘텐츠 영역 -->
    <div class="main">
      <Header />
      <!-- 로고만 표시 -->
      <main>
        <router-view />
      </main>
      <Footer />
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";

const sidebarOpen = ref(true);

// 라우터 메뉴 가져오기 (name 있는 라우트만)
const router = useRouter();
const routes = router.options.routes.filter((r) => r.name);
</script>

<style lang="scss" scoped>
@import "@/assets/styles/variables";

.layout {
  display: flex;
  height: 100vh;
  font-family: $font-main;

  .sidebar {
    background: $dark-bg;
    color: $white;
    width: 250px;
    display: flex;
    flex-direction: column;
    padding: 1.5rem 1rem;
    transition: width 0.3s ease;

    &.collapsed {
      width: 80px;

      .logo h1 {
        font-size: 1rem;
      }

      .nav ul li a {
        font-size: 0; // 글자 숨김
      }
    }

    .logo {
      margin-bottom: 2rem;

      h1 {
        font-size: 1.5rem;
        font-weight: bold;
      }
    }

    .nav {
      flex: 1;

      ul {
        list-style: none;
        padding: 0;

        li {
          margin: 1rem 0;

          a {
            color: $white;
            text-decoration: none;
            font-weight: 500;
            display: block;
            transition: color 0.2s;

            &:hover {
              color: $primary-color;
            }
          }
        }
      }
    }

    .toggle-btn {
      margin-top: auto;
      padding: 0.5rem;
      background: $primary-color;
      color: $white;
      border: none;
      cursor: pointer;
      border-radius: 4px;
      font-weight: bold;
    }
  }

  .main {
    flex: 1;
    display: flex;
    flex-direction: column;
    background: $light-bg;

    main {
      flex: 1;
      padding: 2rem;
      overflow-y: auto;
    }
  }
}
</style>
