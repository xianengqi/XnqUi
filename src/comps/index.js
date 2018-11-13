import './styles/index.scss'

import Button from './components/button/index'
const components = {
  // 这里写入要引入的组件
  Button,
  ButtonGroup: Button.group
}

const install = function (Vue) {
  if (install.installed) return
  // components.map(component => Vue.component(component.name, component))
  Object.keys(components).forEach(key => {
    Vue.component(components[key].name, components[key])
  })
  // Vue.prototype.$modal = GlobalModal
  // Vue.prototype.$toast = Toast
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

const API = {
  install,
  ...components
}

export default API
