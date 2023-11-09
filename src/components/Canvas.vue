<script setup>
import { onMounted, ref } from 'vue';
const canvasWrapperRef = ref(null);
const canvasRef = ref(null);

const draw = ({ canvas, canvasWrapper }) => {
  if (!canvas) {
    return;
  }
  canvas.height = 400;
  canvas.width = 400;
  const ctx = canvas.getContext('2d');

  ctx.beginPath();
  ctx.moveTo(100, 100); // move pencil
  ctx.lineTo(200, 200);
  ctx.strokeStyle = '#fff';
  ctx.stroke();
};

onMounted(() => {
  // const canvasWrapper = canvasWrapperRef.value;
  const canvas = canvasRef.value;
  draw({ canvas });
});
</script>
<template>
  <div class="canvas-wrapper" ref="canvasWrapperRef">
    <canvas class="canvas" ref="canvasRef"></canvas>
  </div>
</template>

<style scoped>
.canvas-wrapper {
  width: 100%;
  min-height: 100vh;
}

.canvas {
  background-color: #000;
}
</style>