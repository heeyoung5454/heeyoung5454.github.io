<template>
  <div class="simple-layout">
    <router-view />
  </div>
</template>

<script setup>
// 특별한 Header/Footer 없음
</script>

<style scoped>
.simple-layout {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
