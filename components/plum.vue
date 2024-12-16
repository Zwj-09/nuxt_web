<script setup>
const el = ref(null);
const ctx = computed(() => el.value.getContext('2d'));

const WIDTH = 600;
const HEIGHT = 600;

onMounted(() => {
  init();
});

const init = () => {
  if (ctx.value) {
    ctx.value.globalAlpha = 1;
    ctx.value.strokeStyle = '#DBDBDB';
    ctx.value.lineWidth = 1;

    step({
      start: {
        // x: WIDTH / 2,
        // y: HEIGHT,
        x: 0,
        y: HEIGHT / 2,
      },
      length: 30,
      angle: (Math.PI / 2) * 360,
    });
  }
};

const pendingTask = [];

const step = (branch, depth = 0) => {
  drawBranch(branch);
  const endPoint = getEndPoint(branch);

  if (depth < 3 || Math.random() < 0.5) {
    pendingTask.push(() =>
      step(
        {
          start: endPoint,
          length: branch.length * 0.7 + (Math.random() * 10 - 5),
          angle: branch.angle - 0.6 + Math.random() * 0.2,
        },
        depth + 1
      )
    );
  }

  if (depth < 3 || Math.random() < 0.5) {
    pendingTask.push(() =>
      step(
        {
          start: endPoint,
          length: branch.length * 0.8 + (Math.random() * 10 - 5),
          angle: branch.angle + 0.6 - Math.random() * 0.4,
        },
        depth + 1
      )
    );
  }
};

const lineTo = (p1, p2) => {
  ctx.value?.beginPath();
  ctx.value?.moveTo(p1.x, p1.y);
  ctx.value?.lineTo(p2.x, p2.y);
  ctx.value?.stroke();
};

const getEndPoint = (branch) => {
  return {
    x: branch.start.x + branch.length * Math.cos(branch.angle),
    y: branch.start.y + branch.length * Math.sin(branch.angle),
  };
};

const drawBranch = (branch) => {
  lineTo(branch.start, getEndPoint(branch));
};

const frame = () => {
  const clonePendingTask = [...pendingTask];
  pendingTask.length = 0;
  clonePendingTask.forEach((fn) => fn());
};

let framesCount = 0;

function startFrame() {
  if (process.client) {
    requestAnimationFrame(() => {
      framesCount += 1;
      if (framesCount % 5 === 0) {
        frame();
      }
      startFrame();
    });
  }
}

startFrame();
</script>

<template>
  <canvas ref="el" width="600" height="600"></canvas>
</template>

<style lang="scss" scoped></style>
