import button from './button.vue'
button.install = (Vue: any): void => {
  Vue.component(button.name, button)
}
export default button
