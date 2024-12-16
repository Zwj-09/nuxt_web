<script setup lang="ts">
import type { RouteLocationNormalized } from 'vue-router';
import home from '~/middleware/home';

definePageMeta({
  middleware: [
    // function (to, from) {
    //   console.log('to', to);
    //   console.log('from', from);
    // },
    'home',
  ],
  validate: (route: RouteLocationNormalized) => {
    console.log('qqq', route);
    return true;
  },
});
</script>

<template>
  <h1>Vue Page</h1>

  <p>
    {{ $route.params }}
  </p>

  <nuxt-link to="/">Home</nuxt-link>
</template>

<style lang="scss" scoped></style>
