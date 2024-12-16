<script setup lang="ts">
interface LyricType {
  singer: string;
  creator: string;
  lyric: string;
}

const id = ref(1)

const { data: lyricData } = await useAsyncData<LyricType>('lyric', () =>
  $fetch('/api/lyric', {
    query: {
      lyricId: id.value
    }
  })
);

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
    audioRef.value.addEventListener('ended', handleTimeEnd);
  }
});

const handleAudioCanPlay = () => {
  audioRef.value?.play();
};

const currentIndex = ref(-1);
const currentPlayTime = ref();
const handleTimeUpdate = () => {
  if (!audioRef.value || !parserLyricData.value.length) return;

  const playTime = audioRef.value.currentTime * 1000; // 当前播放时间（毫秒）
  let newIndex = parserLyricData.value.length - 1;

  for (let i = 0; i < parserLyricData.value.length; i++) {
    if (parserLyricData.value[i].time > playTime) {
      newIndex = i - 1;
      break;
    }
  }
  if (newIndex !== currentIndex.value) {
    currentIndex.value = newIndex;
  }
};

const handleTimeEnd = () => {
  // currentIndex.value = 0;
  audioRef.value?.pause();
};
</script>

<template>
  <audio ref="audioRef" controls>
    <!-- <source src="@/assets/audios/兰亭序.mp4" type="" />-->
    <source src="@/assets/audios/淘汰.mp3" type="" />
    <span>暂不支持audio</span>
  </audio>
  <div class="container">
    <template v-for="(lyric, index) in parserLyricData" :key="index">
      <div
        class="lyric"
        :class="{ active: index === currentIndex }"
        :style="{
          transform: `translateY(-${currentIndex * 30}px)`,
          'margin-top': `${index === 0 ? 60 : 0}px`,
          'margin-bottom': `${index === parserLyricData.length - 1 ? 100 : 0}px`,
        }"
      >
        {{ lyric.text }}
      </div>
    </template>
  </div>
</template>

<style lang="scss" scoped>
$Height: 300px;
.container {
  height: $Height;
  overflow: hidden;
  border: 1px dashed red;
  background-color: skyblue;
  transition: transform 0.3s ease;

  .lyric {
    height: 30px;
    line-height: 30px;
  }
}

.active {
  color: pink;
  font-weight: bold;
  font-size: 1.2rem;
}
</style>
