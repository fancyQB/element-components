import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import { toLine } from './utils'

import zUI from './components'

const app = createApp(App)
for (let i in ElementPlusIconsVue) {
  // 注册全部的图标组件
  app.component(`el-icon-${toLine(i)}`, (ElementPlusIconsVue as any)[i])
}
app.use(router).use(ElementPlus).use(zUI)
app.mount('#app')
