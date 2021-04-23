<template>
  <div class='wrap'>
    我是页面{{this.list}}
  </div>
</template>
<script lang="ts">
import { defineComponent, computed, onMounted } from 'vue'
import { Store, useStore } from 'vuex'
import TYPES from './store/actionType/index'
import { ILogin } from './typings/login'
export default defineComponent({
  setup () {
    const store: Store<any> = useStore()
    const list = computed(() => {
      return store.state.List
    })
    const getList = (): void => {
      store.dispatch(TYPES.LOGIN, [{ name: '123' }]).then((res: ILogin[]): void => {
        console.log(res, 'res')
      })
    }
    onMounted(() => {
      getList()
    })
    return {
      list
    }
  }
})
</script>
<style lang="less">
</style>
