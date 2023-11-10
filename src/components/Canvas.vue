<script setup>
import { onMounted, onUpdated, ref } from 'vue';
import { painter, clearCanvas } from '../painter';

const props = defineProps({
  type: String,
});

const canvasWrapperRef = ref(null);
const canvasRef = ref(null);

onMounted(() => {
  const { type } = props;
  const canvasWrapper = canvasWrapperRef.value;
  const canvas = canvasRef.value;
  painter({ type, canvas, canvasWrapper });
});

onUpdated(() => {
  const { type } = props;
  const canvasWrapper = canvasWrapperRef.value;
  const canvas = canvasRef.value;
  clearCanvas(canvas);
  painter({ type, canvas, canvasWrapper });
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
</style>
