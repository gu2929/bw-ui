<template>
  <div class='btn'>
    <span>
      <slot></slot>
    </span>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'bwButton'
})
</script>
<style lang="less">

</style>
