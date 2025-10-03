<template>
  <div class="home">
    <!-- 히어로 섹션 -->
    <section class="hero">
      <div class="hero-content">
        <div class="hero-text">
          <h1 class="hero-title">
            안녕하세요! <br />
            <span class="gradient-text">HeeYoung</span>입니다
          </h1>
          <p class="hero-description">사용자 경험을 중시하는 프론트엔드 개발자로, 현대적이고 반응형 웹 애플리케이션을 만듭니다.</p>
          <div class="hero-buttons">
            <RouterLink to="/projects" class="btn btn-primary"> 프로젝트 보기 </RouterLink>
            <RouterLink to="/contact" class="btn btn-secondary"> 연락하기 </RouterLink>
          </div>
        </div>
        <div class="hero-image">
          <div class="profile-card">
            <div class="profile-image">
              <div class="image-placeholder">
                <svg width="120" height="120" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                </svg>
              </div>
            </div>
            <div class="profile-info">
              <h3>HeeYoung</h3>
              <p>Frontend Developer</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 기술 스택 섹션 -->
    <section class="tech-stack">
      <div class="container">
        <h2 class="section-title">기술 스택</h2>
        <div class="tech-grid">
          <div class="tech-item" v-for="tech in techStack" :key="tech.name">
            <div class="tech-icon">
              <component :is="tech.icon" />
            </div>
            <h3>{{ tech.name }}</h3>
            <p>{{ tech.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 최근 프로젝트 미리보기 -->
    <section class="recent-projects">
      <div class="container">
        <h2 class="section-title">최근 프로젝트</h2>
        <div class="projects-grid">
          <div class="project-card" v-for="project in recentProjects" :key="project.id">
            <div class="project-image">
              <div class="image-placeholder">
                <svg width="60" height="60" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z" />
                </svg>
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
        <div class="projects-cta">
          <RouterLink to="/projects" class="btn btn-outline">모든 프로젝트 보기</RouterLink>
        </div>
      </div>
    </section>

    <!-- 연락처 CTA -->
    <section class="contact-cta">
      <div class="container">
        <div class="cta-content">
          <h2>함께 일하고 싶으신가요?</h2>
          <p>새로운 프로젝트나 협업 기회에 대해 이야기해보세요.</p>
          <RouterLink to="/contact" class="btn btn-primary btn-large">연락하기</RouterLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from "vue";

const techStack = ref([
  {
    name: "Vue.js",
    description: "반응형 UI 개발",
    icon: "div", // 실제로는 아이콘 컴포넌트
  },
  {
    name: "React",
    description: "컴포넌트 기반 개발",
    icon: "div",
  },
  {
    name: "JavaScript",
    description: "ES6+ 문법 활용",
    icon: "div",
  },
  {
    name: "TypeScript",
    description: "타입 안전성",
    icon: "div",
  },
  {
    name: "SCSS",
    description: "스타일링",
    icon: "div",
  },
  {
    name: "Node.js",
    description: "백엔드 개발",
    icon: "div",
  },
]);

const recentProjects = ref([
  {
    id: 1,
    title: "E-commerce Platform",
    description: "Vue.js와 Node.js를 활용한 온라인 쇼핑몰",
    tech: ["Vue.js", "Node.js", "MongoDB"],
  },
  {
    id: 2,
    title: "Task Management App",
    description: "React로 개발한 프로젝트 관리 도구",
    tech: ["React", "TypeScript", "Firebase"],
  },
  {
    id: 3,
    title: "Portfolio Website",
    description: "반응형 포트폴리오 웹사이트",
    tech: ["Vue.js", "SCSS", "Vite"],
  },
]);
</script>

<style lang="scss" scoped>
@import "@/assets/styles/variables";
@import "@/assets/styles/mixins";

.home {
  .hero {
    padding: 4rem 0;
    background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
    min-height: 80vh;
    @include flex-center;

    .hero-content {
      @include container;
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 4rem;
      align-items: center;

      .hero-text {
        .hero-title {
          font-size: 3.5rem;
          font-weight: 700;
          line-height: 1.1;
          margin-bottom: 1.5rem;
          color: $text-primary;

          .gradient-text {
            @include text-gradient;
          }
        }

        .hero-description {
          font-size: 1.25rem;
          color: $text-secondary;
          line-height: 1.6;
          margin-bottom: 2rem;
        }

        .hero-buttons {
          display: flex;
          gap: 1rem;
        }
      }

      .hero-image {
        @include flex-center;

        .profile-card {
          @include card;
          padding: 2rem;
          text-align: center;
          max-width: 300px;

          .profile-image {
            margin-bottom: 1.5rem;

            .image-placeholder {
              width: 150px;
              height: 150px;
              margin: 0 auto;
              background: $gradient-primary;
              border-radius: 50%;
              @include flex-center;
              color: $white;
            }
          }

          .profile-info {
            h3 {
              font-size: 1.5rem;
              margin-bottom: 0.5rem;
              color: $text-primary;
            }

            p {
              color: $text-secondary;
              font-weight: 500;
            }
          }
        }
      }
    }
  }

  .tech-stack {
    padding: 4rem 0;
    background: $white;

    .tech-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 2rem;
      margin-top: 3rem;

      .tech-item {
        @include card;
        padding: 2rem;
        text-align: center;
        transition: all $transition-medium;

        .tech-icon {
          width: 60px;
          height: 60px;
          margin: 0 auto 1rem;
          background: $gradient-primary;
          border-radius: 50%;
          @include flex-center;
          color: $white;
          font-size: 1.5rem;
        }

        h3 {
          font-size: 1.25rem;
          margin-bottom: 0.5rem;
          color: $text-primary;
        }

        p {
          color: $text-secondary;
          font-size: 0.875rem;
        }
      }
    }
  }

  .recent-projects {
    padding: 4rem 0;
    background: $light-bg;

    .projects-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 2rem;
      margin: 3rem 0;

      .project-card {
        @include card;
        padding: 0;
        overflow: hidden;

        .project-image {
          height: 200px;
          background: $gradient-accent;
          @include flex-center;

          .image-placeholder {
            color: $white;
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

    .projects-cta {
      text-align: center;
      margin-top: 3rem;
    }
  }

  .contact-cta {
    padding: 4rem 0;
    background: $gradient-primary;
    color: $white;

    .cta-content {
      @include container;
      text-align: center;

      h2 {
        font-size: 2.5rem;
        margin-bottom: 1rem;
        color: $white;
      }

      p {
        font-size: 1.25rem;
        margin-bottom: 2rem;
        opacity: 0.9;
      }

      .btn-large {
        padding: 1rem 2rem;
        font-size: 1.125rem;
      }
    }
  }
}

// 반응형 디자인
@media (max-width: 768px) {
  .home {
    .hero {
      .hero-content {
        grid-template-columns: 1fr;
        gap: 2rem;
        text-align: center;

        .hero-text {
          .hero-title {
            font-size: 2.5rem;
          }

          .hero-description {
            font-size: 1.125rem;
          }

          .hero-buttons {
            justify-content: center;
            flex-wrap: wrap;
          }
        }
      }
    }

    .tech-stack {
      .tech-grid {
        grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
        gap: 1rem;
      }
    }

    .recent-projects {
      .projects-grid {
        grid-template-columns: 1fr;
      }
    }

    .contact-cta {
      .cta-content {
        h2 {
          font-size: 2rem;
        }

        p {
          font-size: 1.125rem;
        }
      }
    }
  }
}
</style>
