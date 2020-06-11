import Component from './component.vue'
import Config from './config'
export default {
  install (Vue, options) {
    Config.options = options
    Vue.component('MyComponent', Component)
  }
}
