<script setup lang="ts">
const loadingText = ref('loading...');
</script>

<template>
  <div class="loading">
    <div class="balls">
      <div class="ball">
        <!-- <slot /> -->
        <img src="/imgs/tigger.png" alt="" />
      </div>
    </div>
    <p class="txt">{{ loadingText }}</p>
  </div>
</template>

<style lang="scss" scoped>
.loading {
  width: 100px;
  height: $headerHeight;
  text-align: center;
  .balls {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 50px;
    .ball {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      overflow: hidden;
      animation: beating 1.2s alternate infinite linear;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
}
@keyframes beating {
  0% {
    transform: translateY(-10px);
  }
  50% {
    transform: translateY(0px);
  }
  100% {
    transform: translateY(10px);
  }
}
</style>
