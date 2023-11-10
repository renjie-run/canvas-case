<template>
<div class="sidebar" @click="$emit('handleChangeType', '')">
  <ul>
    <li>
      <div>基础-初尝试</div>
      <ul>
        <li>画一条线</li>
      </ul>
    </li>
  </ul>
</div>
</template>

<style scoped>
  .sidebar {
    width: 300px;
  }
</style>
