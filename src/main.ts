import { createApp } from 'vue'
import 'babel-polyfill'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementPlus from 'element-plus'
import 'element-plus/lib/theme-chalk/index.css'
import locale from 'element-plus/lib/locale/lang/zh-cn'
import './style/index.css'
import './style/common.less'
import './style/iconfont.css'
import './style/reset.less'
import common from './common/js/common'
import moment from 'moment'
// const init = {
//   install: (Vue: any) => {
//   }
// }
const app = createApp(App)
  .use(store)
  .use(router)
  .use(ElementPlus, { locale })
app.mount('#app')
app.config.globalProperties.$common = common
app.config.globalProperties.$moment = moment
