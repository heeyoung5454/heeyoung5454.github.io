<template>
  <footer class="footer">
    <p>© {{ year }} My Portfolio. All rights reserved.</p>
    <div class="social-links">
      <a href="https://github.com/username" target="_blank">GitHub</a>
      <a href="https://linkedin.com/in/username" target="_blank">LinkedIn</a>
    </div>
  </footer>
</template>

<script setup>
import { ref } from "vue";

const year = ref(new Date().getFullYear());
</script>

<style lang="scss" scoped>
@import "@/assets/styles/variables";

.footer {
  background: $light-bg;
  color: $text-color;
  text-align: center;
  padding: 1rem;
  margin-top: auto;

  .social-links {
    margin-top: 0.5rem;

    a {
      margin: 0 0.5rem;
      text-decoration: none;
      color: $text-color;
      font-weight: 500;
      transition: color 0.2s;

      &:hover {
        color: $primary-color;
      }
    }
  }
}
</style>
