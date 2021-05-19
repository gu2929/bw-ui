import input from './input.vue'
input.install = (Vue: any): void => {
  Vue.component(input.name, input)
}
export default input
