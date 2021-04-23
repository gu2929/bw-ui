import { createApp } from 'vue'
import 'babel-polyfill'
import App from './App.vue'
import router from './router'
import store from './store'
const app = createApp(App)
app.use(store)
app.use(router)
app.mount('#app')
// app.config.globalProperties
