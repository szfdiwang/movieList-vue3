import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import globalComponent from '@/utils/components'
import './style/index.scss'
createApp(App)
  .use(store)
  .use(globalComponent)
  .use(router)
  .mount('#app')
