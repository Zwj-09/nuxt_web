<script setup lang="ts">
interface LyricType {
  singer: string;
  creator: string;
  lyric: string;
}
const { data: lyricData } = await useAsyncData<LyricType>('lyric', () => $fetch('/api/lyric'));

interface ParsedLyric {
  time: number;
  text: string;
}
const parserLyricData = ref<ParsedLyric[]>(parseLyrics(lyricData.value));

const audioRef = ref<HTMLAudioElement | null>(null);
onMounted(() => {
  if (audioRef.value) {
    audioRef.value.addEventListener('canplay', handleAudioCanPlay);
    audioRef.value.addEventListener('timeupdate', handleTimeUpdate);
  }
});

const handleAudioCanPlay = () => {
  audioRef.value?.play();
};
const handleTimeUpdate = () => {
  console.log('Current time:', audioRef.value?.currentTime);
};
</script>

<template>
  <div class="w-100 h-10 flex items-center">
    <div class="icon">
      <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
        <g
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
        >
          <circle cx="12" cy="13" r="8" />
          <path d="M5 3L2 6m20 0l-3-3M6.38 18.7L4 21m13.64-2.33L20 21m-8-11v6m-3-3h6" />
        </g>
      </svg>
    </div>

    <swiperNotice>
      <template #content>
        <span>
          222这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容
        </span>
        <span>
          1111这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容
        </span>
      </template>
    </swiperNotice>
  </div>

  <h1>父级</h1>
  <NuxtPage />

  <audio ref="audioRef" controls>
    <source src="@/assets/audios/兰亭序.mp4" type="" />
    <span>暂不支持audio</span>
  </audio>
  <div class="h-60 bg-red-400 overflow-hidden">
    <template v-for="(lyric, index) in parserLyricData" :key="index">
      <div class="h-5 bg-yellow-red">{{ lyric.text }}</div>
    </template>
  </div>
</template>

<style lang="scss" scoped></style>
