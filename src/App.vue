<script setup>
import { onMounted, ref } from 'vue';
import Content from './components/Content.vue';
import SideBarVue from './components/SideBar.vue';
import { DRAW_TYPE, DEFAULT_DRAW_TYPE } from './constants/painter';

let selectedType = ref(DEFAULT_DRAW_TYPE);
const handleChangeType = (type) => {
  selectedType.value = DRAW_TYPE.LINE_SINGLE;
};
</script>

<template>
  <div id="wrapper">
    <!-- <SideBarVue @handleChangeType="handleChangeType" /> -->
    <Content :type="selectedType" />
  </div>
</template>

<style scoped>
  #wrapper {
    display: flex;
    flex-direction: row;
  }
</style>
