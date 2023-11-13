<script setup>
import { ref } from 'vue';
import Sidebar from './components/Sidebar.vue';
import Content from './components/Content.vue';
import { DRAW_TYPE, DEFAULT_DRAW_TYPE } from './constants/painter';

let selectedType = ref(DEFAULT_DRAW_TYPE);
const handleChangeType = (type) => {
  selectedType.value = DRAW_TYPE.LINE_SINGLE;
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
  }
</style>
