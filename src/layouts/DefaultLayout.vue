<template>
  <div class="layout">
    <Header />

    <main class="main-content">
      <router-view />
    </main>

    <Footer />

    <!-- 스크롤 투 탑 버튼 -->
    <button v-show="showScrollTop" @click="scrollToTop" class="scroll-to-top" aria-label="맨 위로 이동">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
        <path d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z" />
      </svg>
    </button>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";

const showScrollTop = ref(false);

const handleScroll = () => {
  showScrollTop.value = window.scrollY > 300;
};

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<style lang="scss" scoped>
@import "@/assets/styles/variables";
@import "@/assets/styles/mixins";

.layout {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: $white;
}

.main-content {
  flex: 1;
  padding-top: 80px; // 헤더 높이만큼 패딩
}

.scroll-to-top {
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  z-index: 1000;
  @include flex-center;
  width: 50px;
  height: 50px;
  background: $gradient-primary;
  color: $white;
  border: none;
  border-radius: 50%;
  box-shadow: $shadow-lg;
  cursor: pointer;
  transition: all $transition-fast;
  opacity: 0;
  visibility: hidden;
  transform: translateY(20px);

  &:hover {
    transform: translateY(-2px);
    box-shadow: $shadow-xl;
  }

  // 애니메이션을 위한 클래스
  &.show {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
  }
}

// 스크롤 투 탑 버튼 표시 애니메이션
.scroll-to-top[style*="display: block"] {
  opacity: 1;
  visibility: visible;
  transform: translateY(0);
}

// 반응형 디자인
@media (max-width: 768px) {
  .scroll-to-top {
    bottom: 1rem;
    right: 1rem;
    width: 45px;
    height: 45px;
  }
}
</style>
