<template>
  <footer class="footer">
    <div class="footer-content">
      <div class="footer-section">
        <h3 class="footer-title">HeeYoung</h3>
        <p class="footer-description">프론트엔드 개발자로서 사용자 중심의 웹 애플리케이션을 만듭니다.</p>
        <div class="social-links">
          <a href="https://github.com/heeyoung5454" target="_blank" class="social-link" aria-label="GitHub">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path
                d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
              />
            </svg>
          </a>
          <a href="https://linkedin.com/in/heeyoung5454" target="_blank" class="social-link" aria-label="LinkedIn">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path
                d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
              />
            </svg>
          </a>
          <a href="mailto:heeyoung5454@example.com" class="social-link" aria-label="Email">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path
                d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-.904.732-1.636 1.636-1.636h20.728c.904 0 1.636.732 1.636 1.636zM12 14.545l8.182-6.136V4.364H3.818v4.045L12 14.545z"
              />
            </svg>
          </a>
        </div>
      </div>

      <div class="footer-section">
        <h4 class="footer-subtitle">빠른 링크</h4>
        <ul class="footer-links">
          <li><RouterLink to="/">홈</RouterLink></li>
          <li><RouterLink to="/about">소개</RouterLink></li>
          <li><RouterLink to="/projects">프로젝트</RouterLink></li>
          <li><RouterLink to="/contact">연락처</RouterLink></li>
        </ul>
      </div>

      <div class="footer-section">
        <h4 class="footer-subtitle">기술 스택</h4>
        <div class="tech-stack">
          <span class="tech-tag">Vue.js</span>
          <span class="tech-tag">React</span>
          <span class="tech-tag">JavaScript</span>
          <span class="tech-tag">TypeScript</span>
          <span class="tech-tag">SCSS</span>
          <span class="tech-tag">Node.js</span>
        </div>
      </div>
    </div>

    <div class="footer-bottom">
      <p>© {{ year }} HeeYoung. All rights reserved.</p>
      <p class="footer-note">Made with ❤️ using Vue.js</p>
    </div>
  </footer>
</template>

<script setup>
import { ref } from "vue";
import { RouterLink } from "vue-router";

const year = ref(new Date().getFullYear());
</script>

<style lang="scss" scoped>
@import "@/assets/styles/variables";
@import "@/assets/styles/mixins";

.footer {
  background: $dark-bg;
  color: $white;
  padding: 3rem 0 1rem;
  margin-top: 4rem;

  .footer-content {
    @include container;
    display: grid;
    grid-template-columns: 2fr 1fr 1fr;
    gap: 2rem;
    margin-bottom: 2rem;

    .footer-section {
      .footer-title {
        font-size: 1.5rem;
        font-weight: 700;
        @include text-gradient;
        margin-bottom: 1rem;
      }

      .footer-subtitle {
        font-size: 1.125rem;
        font-weight: 600;
        color: $white;
        margin-bottom: 1rem;
      }

      .footer-description {
        color: $text-light;
        line-height: 1.6;
        margin-bottom: 1.5rem;
      }

      .social-links {
        display: flex;
        gap: 1rem;

        .social-link {
          @include flex-center;
          width: 40px;
          height: 40px;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 50%;
          color: $white;
          transition: all $transition-fast;

          &:hover {
            background: $primary-color;
            transform: translateY(-2px);
          }

          svg {
            width: 20px;
            height: 20px;
          }
        }
      }

      .footer-links {
        list-style: none;
        padding: 0;
        margin: 0;

        li {
          margin-bottom: 0.5rem;

          a {
            color: $text-light;
            transition: color $transition-fast;

            &:hover {
              color: $primary-color;
            }
          }
        }
      }

      .tech-stack {
        display: flex;
        flex-wrap: wrap;
        gap: 0.5rem;

        .tech-tag {
          background: rgba(255, 255, 255, 0.1);
          color: $white;
          padding: 0.25rem 0.75rem;
          border-radius: 20px;
          font-size: 0.875rem;
          font-weight: 500;
        }
      }
    }
  }

  .footer-bottom {
    @include container;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    padding-top: 1.5rem;
    @include flex-between;

    p {
      color: $text-light;
      margin: 0;
    }

    .footer-note {
      font-size: 0.875rem;
    }
  }
}

// 반응형 디자인
@media (max-width: 768px) {
  .footer {
    padding: 2rem 0 1rem;

    .footer-content {
      grid-template-columns: 1fr;
      gap: 2rem;
      text-align: center;
    }

    .footer-bottom {
      flex-direction: column;
      gap: 0.5rem;
      text-align: center;
    }
  }
}
</style>
