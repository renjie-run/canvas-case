<script setup>
import { DRAW_TYPE } from "../constants/painter";

const menus = [
  {
    key: 'base',
    name: '基础-浅尝',
    examples: [
      { key: DRAW_TYPE.LINE_SINGLE, name: '单线条' },
      { key: DRAW_TYPE.LINE_MULTIPLE, name: '多线条' },
      { key: DRAW_TYPE.LINE_FILL, name: '线条填充' },
      { key: DRAW_TYPE.LINE_WIDTH, name: '线条宽度' },
      { key: DRAW_TYPE.LINE_CAP, name: '线条顶端样式' },
      { key: DRAW_TYPE.LINE_JOIN, name: '线条交叉处样式' },
      { key: DRAW_TYPE.CIRCLE_FILL, name: '圆-填充' },
      { key: DRAW_TYPE.CIRCLE_STROKE, name: '圆-非填充' },
      { key: DRAW_TYPE.TRANS_ROTATE, name: '转换-旋转' },
      { key: DRAW_TYPE.TRANS_SCALE, name: '转换-缩放' },
      { key: DRAW_TYPE.STYLE_SHADOW, name: '样式-阴影' },
      { key: DRAW_TYPE.STYLE_CREATE_LINEAR_GRADIENT, name: '样式-线性渐变色' },
      { key: DRAW_TYPE.RANDOM_ROUNDS, name: '创建随机多个圆-静态' },
      { key: DRAW_TYPE.MOVING_ROUNDS, name: '创建随机多个圆-移动' },
      { key: DRAW_TYPE.ROUNDS_FOLLOWING_MOUSE, name: '跟随鼠标创建圆' },
      { key: DRAW_TYPE.CACHED_ROUNDS, name: '性能优化-缓存' },
    ],
  },
  {
    key: 'case',
    name: '经典案例',
    examples: [
      { key: DRAW_TYPE.METEORS_STARS, name: '流星&星星特效' },
    ],
  },
];
</script>
<template>
<div class="sidebar">
  <ul class="menus">
    <li class="menu" v-for="menu in menus" :key="menu.key">
      <div class="menu-title">{{menu.name}}</div>
      <ul class="sub-menus" v-if="menu.examples && menu.examples.length > 0">
        <li class="sub-menu" v-for="example in menu.examples" :key="example.key" @click="$emit('handleChangeType', example.key, example.name)">
          <div class="menu-title">{{example.name}}</div>
        </li>
      </ul>
    </li>
  </ul>
</div>
</template>

<style scoped>
  .sidebar {
    display: flex;
    flex-direction: column;
    width: 300px;
    height: 100%;
    overflow-y: scroll;
  }

  .menu:hover,
  .sub-menu:hover {
    cursor: pointer;
  }
</style>
