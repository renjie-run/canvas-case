<script setup>
import { onMounted, ref } from 'vue';
import Sidebar from './components/Sidebar.vue';
import Content from './components/Content.vue';
import { DEFAULT_DRAW_TYPE } from './constants/painter';

const originalTileRef = ref('');

onMounted(() => {
  const originalTile = document.title;
  originalTileRef.value = originalTile;
  document.title = `${originalTile} - 创建随机多个圆-移动`;
});

let selectedType = ref(DEFAULT_DRAW_TYPE);
const handleChangeType = (type, name) => {
  selectedType.value = type;
  document.title = `${originalTileRef.value} - ${name}`;
};
</script>

<template>
  <div id="wrapper">
    <Sidebar @handleChangeType="handleChangeType" />
    <Content :type="selectedType" />
  </div>
</template>

<style scoped>
  #wrapper {
    display: flex;
    flex-direction: row;
    height: 100%;
  }
</style>
