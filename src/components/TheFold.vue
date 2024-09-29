<script setup lang="ts">
import BaseButton from '@/components/BaseButton.vue'
</script>

<template>
  <div class="h-[calc(100vh-4rem)] flex flex-col justify-center">
    <!-- 100vh moins la hauteur du header -->
    <div class="text-center">
      <h1 class="text-8xl font-git text-purple">Passionate Developer</h1>
      <h1 class="text-8xl font-git text-orange">Movie Enthusiast</h1>
    </div>
    <div class="space-x-2 text-center">
      <BaseButton>About me</BaseButton>
      <BaseButton>My projects</BaseButton>
    </div>
  </div>
</template>
