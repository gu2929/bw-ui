import button from './button'
import input from './input'
import './index.less'
const components = [
  button,
  input
]
const install = (vue: any): void => {
  // if (install.installed) return
  components.forEach(item => {
    vue.component(item.name, item)
  })
}
export {
  install,
  button,
  input
}
