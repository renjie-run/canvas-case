<script setup>
import { ref } from 'vue';
import Sidebar from './components/Sidebar.vue';
import Content from './components/Content.vue';
import { DEFAULT_DRAW_TYPE } from './constants/painter';

let selectedType = ref(DEFAULT_DRAW_TYPE);
const handleChangeType = (type) => {
  selectedType.value = type;
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
