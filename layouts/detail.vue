<script setup lang="ts">
// const { data: list } = await useFetch('/api/todo');
// console.log('aaa', list);
</script>

<template>
  <h1>这是 detail 的头部</h1>
  <slot name="title" />
  <slot name="content" />

  <base-button></base-button>
  <h3>这是 detail 的底部</h3>
</template>

<style lang="scss" scoped></style>
