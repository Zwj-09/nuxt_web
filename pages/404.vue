<script setup lang="ts">
import lottie from 'lottie-web';
import animationData from '@/public/json/Vue.json';

const animationRef = ref<HTMLDivElement | null>(null);
let lottieAnimation = null;
onMounted(() => {
  if (animationRef.value) {
    lottieAnimation = lottie.loadAnimation({
      animationData,
      loop: true,
      autoplay: true,
      renderer: 'svg',
      container: animationRef.value,
    });
    lottieAnimation.setSpeed(0.5);
  }
});

definePageMeta({
  layout: 'common',
});
</script>

<template>
  <div class="w-screen h-screen overflow-hidden flex items-center justify-center">
    <div ref="animationRef" class="w-80 h-80"></div>
    <NuxtLink to="/">回到首页</NuxtLink>
  </div>
</template>

<style lang="scss" scoped></style>
