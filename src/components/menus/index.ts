import { App } from 'vue'
import menus from './src/index.vue'
import infiniteMenus from './src/index.tsx'

export default {
  install( app: App) {
    app.component('z-menus', menus)
    app.component('z-infinite-menus', infiniteMenus)
  }
}