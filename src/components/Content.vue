<script setup>
import Canvas from './Canvas.vue';

const props = defineProps({
  type: String,
});
</script>

<template>
  <div class="content"><Canvas :type="props.type" /></div>
</template>

<style scoped>
.content {
  flex: 1;
}
</style>
