import { App } from 'vue'

const requireComponent = require.context('../components/global', false, /[A-Z]\w+\.(vue|js)$/)
export default {
  install: (app: App) => {
    requireComponent.keys().forEach(fileName => {
      console.log('fileName', fileName)

      // 数组配置
      const componentConfig = requireComponent(fileName)
      console.log('componentConfig', componentConfig)

      const conponentName = fileName.replace(/^\.\/(.*)\.\w+$/, '$1')
      // 默认选择default输出
      app.component(conponentName, componentConfig.default || componentConfig)
    })
  }
}
