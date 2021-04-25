<template>
  <LoginPage v-if='isLogin'/>
  <el-form
    ref="loginFormRef"
    :model="loginForm"
    :rules="loginFormRules"
    class="login-form">
    <el-form-item prop="name" label='姓名'>
      <el-input
        ref="mobile"
        v-model="loginForm.name"
        placeholder="请输入真实姓名"
        maxlength="10"
      ></el-input>
    </el-form-item>
  </el-form>
  <el-button type="primary" @click='downLoad'>{{time}}</el-button>
</template>

<script lang="ts">
import Rules from '@/common/js/rules'
import { IPageLoginFrom, IPageLoginFormRules, ILoginData, IDownLoadData } from '@/typing/login'
import { ref, getCurrentInstance, onMounted, defineComponent, computed } from 'vue'
import { Store, useStore } from 'vuex'
import TYPES from '@/store/actionType/index'
import LoginPage from '@/components/LoadingPage.vue'
export default defineComponent({
  name: 'main',
  components: {
    LoginPage
  },
  setup (): any {
    const { ctx } = (getCurrentInstance() as any)

    const store: Store<any> = useStore()

    const loginForm = ref<IPageLoginFrom>({
      name: ''
    })

    const loginFormRules = ref<IPageLoginFormRules>({
      name: [
        {
          required: true, validator: Rules.validateCode, trigger: 'blur'
        }
      ]
    })

    const isLogin = computed(() => {
      return store.state.Loading
    })

    const time = ref<string>('')

    time.value = ctx.$moment().format('YYYY-MM-DD HH:mm:ss')

    const getList = (): void => {
      const payload: ILoginData = {
        outerIpAddress: null,
        password: 'GZY@123123',
        username: 'ze0911@163.com'
      }
      store.dispatch(TYPES.LOGIN, payload).then(res => {
        console.log(res, 'res')
      })
    }
    const downLoad = (): void => {
      const blobType = 'application/vnd.ms-excel'
      const payload: IDownLoadData = {
        topCompanyId: '1216907539902976000',
        selectedYear: '2021',
        attendanceCycleId: '1357495611945472000'
      }
      store.dispatch(TYPES.CHECKANALYSISDOWN, payload).then(res => {
        ctx.$common.DownloadFileFn(res, blobType)
      })
    }

    onMounted(() => {
      getList()
    })

    return {
      loginForm,
      loginFormRules,
      isLogin,
      time,
      downLoad
    }
  }
})
</script>
<style lang="less" scoped>

</style>
