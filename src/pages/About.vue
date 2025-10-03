<template>
  <div class="about">
    <!-- 히어로 섹션 -->
    <section class="hero">
      <div class="container">
        <div class="hero-content">
          <h1 class="hero-title">About Me</h1>
          <p class="hero-subtitle">사용자 중심의 웹 애플리케이션을 만드는 프론트엔드 개발자</p>
        </div>
      </div>
    </section>

    <!-- 소개 섹션 -->
    <section class="intro">
      <div class="container">
        <div class="intro-content">
          <div class="intro-text">
            <h2>안녕하세요, HeeYoung입니다!</h2>
            <p>
              프론트엔드 개발자로서 사용자 경험을 최우선으로 생각하며, 현대적이고 반응형 웹 애플리케이션을 개발합니다. 깔끔하고 직관적인 인터페이스를 통해 사용자에게 최고의 경험을 제공하는 것이 저의
              목표입니다.
            </p>
            <p>Vue.js, React, TypeScript 등 최신 기술을 활용하여 효율적이고 확장 가능한 코드를 작성하며, 지속적으로 새로운 기술을 학습하고 적용하고 있습니다.</p>
          </div>
          <div class="intro-image">
            <div class="image-placeholder">
              <svg width="200" height="200" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 기술 스택 섹션 -->
    <section class="skills">
      <div class="container">
        <h2 class="section-title">기술 스택</h2>
        <div class="skills-grid">
          <div class="skill-category" v-for="category in skillCategories" :key="category.name">
            <h3>{{ category.name }}</h3>
            <div class="skill-items">
              <div class="skill-item" v-for="skill in category.skills" :key="skill.name">
                <span class="skill-name">{{ skill.name }}</span>
                <div class="skill-bar">
                  <div class="skill-progress" :style="{ width: skill.level + '%' }"></div>
                </div>
                <span class="skill-percentage">{{ skill.level }}%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 경력 섹션 -->
    <section class="experience">
      <div class="container">
        <h2 class="section-title">경력 & 교육</h2>
        <div class="timeline">
          <div class="timeline-item" v-for="item in experience" :key="item.id">
            <div class="timeline-marker"></div>
            <div class="timeline-content">
              <div class="timeline-period">{{ item.period }}</div>
              <h3>{{ item.title }}</h3>
              <h4>{{ item.company }}</h4>
              <p>{{ item.description }}</p>
              <div class="timeline-tech" v-if="item.tech">
                <span v-for="tech in item.tech" :key="tech" class="tech-tag">{{ tech }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 관심사 섹션 -->
    <section class="interests">
      <div class="container">
        <h2 class="section-title">관심사</h2>
        <div class="interests-grid">
          <div class="interest-item" v-for="interest in interests" :key="interest.name">
            <div class="interest-icon">
              <component :is="interest.icon" />
            </div>
            <h3>{{ interest.name }}</h3>
            <p>{{ interest.description }}</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from "vue";

const skillCategories = ref([
  {
    name: "Frontend",
    skills: [
      { name: "Vue.js", level: 90 },
      { name: "React", level: 85 },
      { name: "JavaScript", level: 95 },
      { name: "TypeScript", level: 80 },
      { name: "HTML/CSS", level: 95 },
    ],
  },
  {
    name: "Styling",
    skills: [
      { name: "SCSS/Sass", level: 90 },
      { name: "CSS Modules", level: 85 },
      { name: "Tailwind CSS", level: 80 },
      { name: "Styled Components", level: 75 },
    ],
  },
  {
    name: "Tools & Others",
    skills: [
      { name: "Git", level: 90 },
      { name: "Node.js", level: 70 },
      { name: "Webpack", level: 75 },
      { name: "Vite", level: 85 },
    ],
  },
]);

const experience = ref([
  {
    id: 1,
    period: "2023 - 현재",
    title: "프론트엔드 개발자",
    company: "프리랜서",
    description: "다양한 클라이언트의 웹 애플리케이션 개발 프로젝트를 진행하며, Vue.js와 React를 활용한 반응형 웹사이트 개발에 집중하고 있습니다.",
    tech: ["Vue.js", "React", "TypeScript", "SCSS"],
  },
  {
    id: 2,
    period: "2022 - 2023",
    title: "주니어 프론트엔드 개발자",
    company: "웹 에이전시",
    description: "기업 웹사이트 및 랜딩 페이지 개발을 담당하며, 사용자 경험 개선과 성능 최적화에 중점을 두었습니다.",
    tech: ["Vue.js", "JavaScript", "SCSS", "jQuery"],
  },
  {
    id: 3,
    period: "2021 - 2022",
    title: "웹 개발 교육",
    company: "부트캠프",
    description: "프론트엔드 개발 기초부터 실무까지 체계적인 교육을 받으며, 다양한 프로젝트를 통해 실무 경험을 쌓았습니다.",
    tech: ["HTML", "CSS", "JavaScript", "React"],
  },
]);

const interests = ref([
  {
    name: "UI/UX 디자인",
    description: "사용자 중심의 직관적인 인터페이스 설계에 관심이 많습니다.",
    icon: "div",
  },
  {
    name: "성능 최적화",
    description: "웹 애플리케이션의 로딩 속도와 사용자 경험 개선에 집중합니다.",
    icon: "div",
  },
  {
    name: "새로운 기술",
    description: "최신 프론트엔드 트렌드와 기술을 지속적으로 학습하고 적용합니다.",
    icon: "div",
  },
  {
    name: "오픈소스",
    description: "오픈소스 프로젝트에 기여하며 개발 커뮤니티와 함께 성장합니다.",
    icon: "div",
  },
]);
</script>

<style lang="scss" scoped>
@import "@/assets/styles/variables";
@import "@/assets/styles/mixins";

.about {
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

  .intro {
    padding: 4rem 0;
    background: $white;

    .intro-content {
      display: grid;
      grid-template-columns: 2fr 1fr;
      gap: 4rem;
      align-items: center;

      .intro-text {
        h2 {
          font-size: 2.5rem;
          margin-bottom: 1.5rem;
          color: $text-primary;
        }

        p {
          font-size: 1.125rem;
          line-height: 1.8;
          color: $text-secondary;
          margin-bottom: 1.5rem;

          &:last-child {
            margin-bottom: 0;
          }
        }
      }

      .intro-image {
        @include flex-center;

        .image-placeholder {
          width: 250px;
          height: 250px;
          background: $gradient-accent;
          border-radius: 50%;
          @include flex-center;
          color: $white;
        }
      }
    }
  }

  .skills {
    padding: 4rem 0;
    background: $light-bg;

    .skills-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 3rem;
      margin-top: 3rem;

      .skill-category {
        background: $white;
        padding: 2rem;
        border-radius: $border-radius;
        box-shadow: $shadow-md;

        h3 {
          font-size: 1.5rem;
          margin-bottom: 1.5rem;
          color: $text-primary;
          text-align: center;
        }

        .skill-item {
          display: flex;
          align-items: center;
          margin-bottom: 1.5rem;
          gap: 1rem;

          .skill-name {
            min-width: 100px;
            font-weight: 500;
            color: $text-primary;
          }

          .skill-bar {
            flex: 1;
            height: 8px;
            background: $light-bg;
            border-radius: 4px;
            overflow: hidden;

            .skill-progress {
              height: 100%;
              background: $gradient-primary;
              transition: width 1s ease-in-out;
            }
          }

          .skill-percentage {
            min-width: 40px;
            text-align: right;
            font-weight: 600;
            color: $primary-color;
          }
        }
      }
    }
  }

  .experience {
    padding: 4rem 0;
    background: $white;

    .timeline {
      position: relative;
      margin-top: 3rem;

      &::before {
        content: "";
        position: absolute;
        left: 2rem;
        top: 0;
        bottom: 0;
        width: 2px;
        background: $gradient-primary;
      }

      .timeline-item {
        position: relative;
        margin-bottom: 3rem;
        padding-left: 6rem;

        .timeline-marker {
          position: absolute;
          left: 1.25rem;
          top: 0.5rem;
          width: 1.5rem;
          height: 1.5rem;
          background: $primary-color;
          border-radius: 50%;
          border: 4px solid $white;
          box-shadow: $shadow-md;
        }

        .timeline-content {
          background: $white;
          padding: 2rem;
          border-radius: $border-radius;
          box-shadow: $shadow-md;
          transition: all $transition-medium;

          &:hover {
            box-shadow: $shadow-lg;
            transform: translateY(-2px);
          }

          .timeline-period {
            color: $primary-color;
            font-weight: 600;
            font-size: 0.875rem;
            margin-bottom: 0.5rem;
          }

          h3 {
            font-size: 1.5rem;
            margin-bottom: 0.5rem;
            color: $text-primary;
          }

          h4 {
            font-size: 1.125rem;
            color: $secondary-color;
            margin-bottom: 1rem;
          }

          p {
            color: $text-secondary;
            line-height: 1.6;
            margin-bottom: 1rem;
          }

          .timeline-tech {
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
  }

  .interests {
    padding: 4rem 0;
    background: $light-bg;

    .interests-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 2rem;
      margin-top: 3rem;

      .interest-item {
        @include card;
        padding: 2rem;
        text-align: center;

        .interest-icon {
          width: 80px;
          height: 80px;
          margin: 0 auto 1.5rem;
          background: $gradient-primary;
          border-radius: 50%;
          @include flex-center;
          color: $white;
          font-size: 2rem;
        }

        h3 {
          font-size: 1.25rem;
          margin-bottom: 1rem;
          color: $text-primary;
        }

        p {
          color: $text-secondary;
          line-height: 1.6;
        }
      }
    }
  }
}

// 반응형 디자인
@media (max-width: 768px) {
  .about {
    .hero {
      .hero-title {
        font-size: 2.5rem;
      }

      .hero-subtitle {
        font-size: 1.125rem;
      }
    }

    .intro {
      .intro-content {
        grid-template-columns: 1fr;
        gap: 2rem;
        text-align: center;
      }
    }

    .skills {
      .skills-grid {
        grid-template-columns: 1fr;
      }
    }

    .experience {
      .timeline {
        &::before {
          left: 1rem;
        }

        .timeline-item {
          padding-left: 3rem;

          .timeline-marker {
            left: 0.25rem;
          }
        }
      }
    }

    .interests {
      .interests-grid {
        grid-template-columns: 1fr;
      }
    }
  }
}
</style>
