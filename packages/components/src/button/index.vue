<template>
  <button class="btn">
    <slot></slot>
  </button>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';
export default defineComponent({
  name: 'ryb-button',
  setup() {
    return {};
  }
});
</script>

<style lang="less" scoped>
@import './style/index.less';
</style>
