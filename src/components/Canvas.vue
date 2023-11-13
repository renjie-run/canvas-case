<script setup>
import { onMounted, ref, watch } from 'vue';
import { painter } from '../painter';

const props = defineProps({
  type: String,
});

const canvasWrapperRef = ref(null);

const generateCanvas = () => {
  canvasWrapperRef.value.innerHTML = '';
  const canvas = document.createElement('canvas');
  canvasWrapperRef.value.appendChild(canvas);
  return canvas;
}

onMounted(() => {
  const { type } = props;
  const canvas = generateCanvas();
  painter({ type, canvas, canvasWrapper: canvasWrapperRef.value });
});

watch(() => props.type, (currType, prevType) => {
  if (currType !== prevType) {
    const canvas = generateCanvas();
    painter({
      canvas,
      canvasWrapper: canvasWrapperRef.value,
      type: currType
    });
  }
});
</script>
<template>
  <div class="canvas-wrapper" ref="canvasWrapperRef">
  </div>
</template>

<style scoped>
.canvas-wrapper {
  width: 100%;
  min-height: 100vh;
}
</style>
