<script setup>
import Content from './components/Content.vue';
import { DRAW_TYPE } from './constants/painter';
</script>

<template>
  <div id="wrapper">
    <Content :type="DRAW_TYPE.CACHED_ROUNDS" />
  </div>
</template>

<style scoped>
</style>
