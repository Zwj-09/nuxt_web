<script setup lang="ts">
import lottie from 'lottie-web';
import animationData from '@/public/json/error.json';

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
    <div ref="animationRef" class="w-150 h-150"></div>
    <div class="w-140">
      <h2 class="text-3xl">Error</h2>
      <h3 class="mt-4">UH OH! You're lost.</h3>
      <p class="my-4 leading-6">
        The page you are looking for does not exist. How you got here is a mystery. But you can
        click the button below to go back to the homepage.
      </p>

      <Button label="Submit" severity="info">
        <NuxtLink to="/" class="decoration-none text-white">回到首页</NuxtLink>
      </Button>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
