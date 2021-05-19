<template>
  <div>
    <bw-button>
      按钮
    </bw-button>
    <bw-input
      :iptValue='value'/>
  </div>
</template>

<script lang='ts'>
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'App',
  setup () {
    const value = '传入的值1411'
    return {
      value
    }
  }
})
</script>

<style>
</style>
