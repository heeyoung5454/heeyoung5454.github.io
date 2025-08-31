<template>
  <header class="header">
    <nav class="nav">
      <h1 class="logo">My Portfolio</h1>
      <ul class="nav-links">
        <li><RouterLink to="/">Home</RouterLink></li>
        <li><RouterLink to="/about">About</RouterLink></li>
        <li><RouterLink to="/projects">Projects</RouterLink></li>
        <li><RouterLink to="/contact">Contact</RouterLink></li>
      </ul>
    </nav>
  </header>
</template>

<script setup>
import { RouterLink } from "vue-router";
</script>

<style lang="scss" scoped>
@import "@/assets/styles/variables";

.header {
  background: $dark-bg;
  color: $white;
  padding: 1rem 2rem;

  .nav {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .logo {
      font-size: 1.5rem;
      font-weight: bold;
    }

    .nav-links {
      display: flex;
      list-style: none;
      gap: 1.5rem;

      a {
        text-decoration: none;
        color: $white;
        transition: color 0.2s;

        &:hover {
          color: $primary-color;
        }
      }
    }
  }
}
</style>
