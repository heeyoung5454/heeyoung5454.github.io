<template>
  <div class="projects">
    <!-- 히어로 섹션 -->
    <section class="hero">
      <div class="container">
        <div class="hero-content">
          <h1 class="hero-title">My Projects</h1>
          <p class="hero-subtitle">사용자 경험을 중시하며 개발한 다양한 웹 애플리케이션들을 소개합니다.</p>
        </div>
      </div>
    </section>

    <!-- 프로젝트 필터 -->
    <section class="filters">
      <div class="container">
        <div class="filter-buttons">
          <button v-for="filter in filters" :key="filter" @click="activeFilter = filter" :class="['filter-btn', { active: activeFilter === filter }]">
            {{ filter }}
          </button>
        </div>
      </div>
    </section>

    <!-- 프로젝트 그리드 -->
    <section class="projects-grid">
      <div class="container">
        <div class="projects-container">
          <div v-for="project in filteredProjects" :key="project.id" class="project-card" @click="openProjectModal(project)">
            <div class="project-image">
              <div class="image-placeholder">
                <svg width="80" height="80" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z" />
                </svg>
              </div>
              <div class="project-overlay">
                <div class="project-links">
                  <a :href="project.demo" target="_blank" class="project-link" v-if="project.demo">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M14,3V5H17.59L7.76,14.83L9.17,16.24L19,6.41V10H21V3M19,19H5V5H12V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19Z" />
                    </svg>
                  </a>
                  <a :href="project.github" target="_blank" class="project-link">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path
                        d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div class="project-info">
              <h3>{{ project.title }}</h3>
              <p>{{ project.description }}</p>
              <div class="project-tech">
                <span v-for="tech in project.tech" :key="tech" class="tech-tag">{{ tech }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 프로젝트 모달 -->
    <div v-if="selectedProject" class="modal-overlay" @click="closeProjectModal">
      <div class="modal-content" @click.stop>
        <button class="modal-close" @click="closeProjectModal">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" />
          </svg>
        </button>

        <div class="modal-body">
          <div class="modal-image">
            <div class="image-placeholder">
              <svg width="120" height="120" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z" />
              </svg>
            </div>
          </div>

          <div class="modal-info">
            <h2>{{ selectedProject.title }}</h2>
            <p class="modal-description">{{ selectedProject.fullDescription }}</p>

            <div class="modal-tech">
              <h4>기술 스택</h4>
              <div class="tech-tags">
                <span v-for="tech in selectedProject.tech" :key="tech" class="tech-tag">{{ tech }}</span>
              </div>
            </div>

            <div class="modal-features">
              <h4>주요 기능</h4>
              <ul>
                <li v-for="feature in selectedProject.features" :key="feature">{{ feature }}</li>
              </ul>
            </div>

            <div class="modal-links">
              <a :href="selectedProject.demo" target="_blank" class="btn btn-primary" v-if="selectedProject.demo"> 라이브 데모 </a>
              <a :href="selectedProject.github" target="_blank" class="btn btn-secondary"> GitHub </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";

const filters = ref(["All", "Vue.js", "React", "JavaScript", "TypeScript"]);
const activeFilter = ref("All");

const projects = ref([
  {
    id: 1,
    title: "E-commerce Platform",
    description: "Vue.js와 Node.js를 활용한 온라인 쇼핑몰",
    fullDescription: "사용자 친화적인 인터페이스와 안전한 결제 시스템을 갖춘 완전한 전자상거래 플랫폼입니다. 반응형 디자인과 실시간 재고 관리 기능을 포함합니다.",
    tech: ["Vue.js", "Node.js", "MongoDB", "SCSS", "Stripe"],
    category: "Vue.js",
    demo: "https://example.com",
    github: "https://github.com/heeyoung5454/ecommerce",
    features: ["사용자 인증 및 권한 관리", "상품 검색 및 필터링", "장바구니 및 위시리스트", "안전한 결제 시스템", "관리자 대시보드"],
  },
  {
    id: 2,
    title: "Task Management App",
    description: "React로 개발한 프로젝트 관리 도구",
    fullDescription: "팀 협업을 위한 직관적인 프로젝트 관리 애플리케이션입니다. 칸반 보드, 일정 관리, 파일 공유 등 다양한 기능을 제공합니다.",
    tech: ["React", "TypeScript", "Firebase", "Material-UI"],
    category: "React",
    demo: "https://example.com",
    github: "https://github.com/heeyoung5454/taskmanager",
    features: ["드래그 앤 드롭 칸반 보드", "실시간 협업 기능", "파일 첨부 및 댓글", "일정 및 알림 관리", "프로젝트 통계 및 리포트"],
  },
  {
    id: 3,
    title: "Weather Dashboard",
    description: "실시간 날씨 정보 대시보드",
    fullDescription: "API를 활용한 실시간 날씨 정보를 제공하는 대시보드입니다. 위치 기반 서비스와 7일 예보 기능을 포함합니다.",
    tech: ["JavaScript", "API", "Chart.js", "CSS"],
    category: "JavaScript",
    demo: "https://example.com",
    github: "https://github.com/heeyoung5454/weather",
    features: ["실시간 날씨 정보", "위치 기반 서비스", "7일 날씨 예보", "인터랙티브 차트", "다크/라이트 모드"],
  },
  {
    id: 4,
    title: "Portfolio Website",
    description: "반응형 포트폴리오 웹사이트",
    fullDescription: "현대적이고 반응형 디자인의 개인 포트폴리오 웹사이트입니다. 프로젝트 소개, 기술 스택, 연락처 정보를 포함합니다.",
    tech: ["Vue.js", "SCSS", "Vite", "TypeScript"],
    category: "Vue.js",
    demo: "https://example.com",
    github: "https://github.com/heeyoung5454/portfolio",
    features: ["반응형 디자인", "다크/라이트 테마", "애니메이션 효과", "SEO 최적화", "성능 최적화"],
  },
  {
    id: 5,
    title: "Chat Application",
    description: "실시간 채팅 애플리케이션",
    fullDescription: "WebSocket을 활용한 실시간 채팅 애플리케이션입니다. 그룹 채팅, 파일 공유, 이모지 지원 등의 기능을 제공합니다.",
    tech: ["React", "TypeScript", "Socket.io", "Node.js"],
    category: "React",
    demo: "https://example.com",
    github: "https://github.com/heeyoung5454/chat",
    features: ["실시간 메시징", "그룹 채팅방", "파일 및 이미지 공유", "이모지 및 스티커", "온라인 상태 표시"],
  },
  {
    id: 6,
    title: "Blog CMS",
    description: "마크다운 기반 블로그 CMS",
    fullDescription: "마크다운 에디터와 카테고리 관리 기능을 갖춘 블로그 CMS입니다. 관리자 대시보드와 댓글 시스템을 포함합니다.",
    tech: ["Vue.js", "TypeScript", "Markdown", "Express"],
    category: "Vue.js",
    demo: "https://example.com",
    github: "https://github.com/heeyoung5454/blog-cms",
    features: ["마크다운 에디터", "카테고리 및 태그 관리", "댓글 시스템", "SEO 최적화", "관리자 대시보드"],
  },
]);

const selectedProject = ref(null);

const filteredProjects = computed(() => {
  if (activeFilter.value === "All") {
    return projects.value;
  }
  return projects.value.filter((project) => project.category === activeFilter.value);
});

const openProjectModal = (project) => {
  selectedProject.value = project;
  document.body.style.overflow = "hidden";
};

const closeProjectModal = () => {
  selectedProject.value = null;
  document.body.style.overflow = "auto";
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/variables";
@import "@/assets/styles/mixins";

.projects {
  .hero {
    padding: 6rem 0 4rem;
    background: $gradient-primary;
    color: $white;
    text-align: center;

    .hero-title {
      font-size: 3rem;
      margin-bottom: 1rem;
      color: $white;
    }

    .hero-subtitle {
      font-size: 1.25rem;
      opacity: 0.9;
      max-width: 600px;
      margin: 0 auto;
    }
  }

  .filters {
    padding: 2rem 0;
    background: $white;
    border-bottom: 1px solid #e2e8f0;

    .filter-buttons {
      display: flex;
      justify-content: center;
      gap: 1rem;
      flex-wrap: wrap;

      .filter-btn {
        padding: 0.75rem 1.5rem;
        border: 2px solid $primary-color;
        background: transparent;
        color: $primary-color;
        border-radius: $border-radius;
        font-weight: 500;
        cursor: pointer;
        transition: all $transition-fast;

        &:hover,
        &.active {
          background: $primary-color;
          color: $white;
        }
      }
    }
  }

  .projects-grid {
    padding: 4rem 0;

    .projects-container {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
      gap: 2rem;
    }

    .project-card {
      @include card;
      padding: 0;
      overflow: hidden;
      cursor: pointer;
      transition: all $transition-medium;

      &:hover {
        transform: translateY(-5px);
        box-shadow: $shadow-xl;

        .project-overlay {
          opacity: 1;
        }
      }

      .project-image {
        position: relative;
        height: 250px;
        background: $gradient-accent;
        @include flex-center;

        .image-placeholder {
          color: $white;
        }

        .project-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.8);
          @include flex-center;
          opacity: 0;
          transition: opacity $transition-fast;

          .project-links {
            display: flex;
            gap: 1rem;

            .project-link {
              @include flex-center;
              width: 50px;
              height: 50px;
              background: $primary-color;
              color: $white;
              border-radius: 50%;
              transition: all $transition-fast;

              &:hover {
                background: $white;
                color: $primary-color;
                transform: scale(1.1);
              }
            }
          }
        }
      }

      .project-info {
        padding: 1.5rem;

        h3 {
          font-size: 1.25rem;
          margin-bottom: 0.5rem;
          color: $text-primary;
        }

        p {
          color: $text-secondary;
          margin-bottom: 1rem;
          line-height: 1.5;
        }

        .project-tech {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;

          .tech-tag {
            background: $light-bg;
            color: $primary-color;
            padding: 0.25rem 0.75rem;
            border-radius: 20px;
            font-size: 0.75rem;
            font-weight: 500;
          }
        }
      }
    }
  }

  .modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.8);
    @include flex-center;
    z-index: 2000;
    padding: 2rem;

    .modal-content {
      background: $white;
      border-radius: $border-radius-lg;
      max-width: 800px;
      max-height: 90vh;
      overflow-y: auto;
      position: relative;
      width: 100%;

      .modal-close {
        position: absolute;
        top: 1rem;
        right: 1rem;
        @include flex-center;
        width: 40px;
        height: 40px;
        background: rgba(0, 0, 0, 0.1);
        border: none;
        border-radius: 50%;
        cursor: pointer;
        color: $text-primary;
        transition: all $transition-fast;

        &:hover {
          background: rgba(0, 0, 0, 0.2);
        }
      }

      .modal-body {
        display: grid;
        grid-template-columns: 1fr 2fr;
        gap: 2rem;
        padding: 2rem;

        .modal-image {
          @include flex-center;

          .image-placeholder {
            width: 200px;
            height: 200px;
            background: $gradient-primary;
            border-radius: $border-radius;
            @include flex-center;
            color: $white;
          }
        }

        .modal-info {
          h2 {
            font-size: 2rem;
            margin-bottom: 1rem;
            color: $text-primary;
          }

          .modal-description {
            color: $text-secondary;
            line-height: 1.6;
            margin-bottom: 2rem;
          }

          .modal-tech,
          .modal-features {
            margin-bottom: 1.5rem;

            h4 {
              font-size: 1.125rem;
              margin-bottom: 0.75rem;
              color: $text-primary;
            }

            .tech-tags {
              display: flex;
              flex-wrap: wrap;
              gap: 0.5rem;

              .tech-tag {
                background: $primary-color;
                color: $white;
                padding: 0.5rem 1rem;
                border-radius: 20px;
                font-size: 0.875rem;
                font-weight: 500;
              }
            }

            ul {
              list-style: none;
              padding: 0;

              li {
                padding: 0.5rem 0;
                color: $text-secondary;
                position: relative;
                padding-left: 1.5rem;

                &::before {
                  content: "✓";
                  position: absolute;
                  left: 0;
                  color: $primary-color;
                  font-weight: bold;
                }
              }
            }
          }

          .modal-links {
            display: flex;
            gap: 1rem;
            margin-top: 2rem;
          }
        }
      }
    }
  }
}

// 반응형 디자인
@media (max-width: 768px) {
  .projects {
    .hero {
      .hero-title {
        font-size: 2.5rem;
      }

      .hero-subtitle {
        font-size: 1.125rem;
      }
    }

    .filters {
      .filter-buttons {
        gap: 0.5rem;

        .filter-btn {
          padding: 0.5rem 1rem;
          font-size: 0.875rem;
        }
      }
    }

    .projects-grid {
      .projects-container {
        grid-template-columns: 1fr;
      }
    }

    .modal-overlay {
      padding: 1rem;

      .modal-content {
        .modal-body {
          grid-template-columns: 1fr;
          padding: 1.5rem;

          .modal-links {
            flex-direction: column;
          }
        }
      }
    }
  }
}
</style>
