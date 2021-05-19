<template>
  <el-input placeholder="请输入内容" v-model='value'></el-input>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'
export default defineComponent({
  name: 'bwInput',
  props: {
    iptValue: {
      type: String
    }
  },
  setup (props: any): unknown {
    const value = ref(props.iptValue)
    console.log(props, 'props')
    return {
      value
    }
  }
})
</script>
<style lang="less">

</style>
