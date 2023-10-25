import { App } from 'vue'
import chooseIcon from './chooseIcon'
import chooseArea from './chooseArea'
import trendMark from './trendMark'
import notification from './notification'
import list from './list'
import menus from './menus'

const component = [
  chooseArea,
  chooseIcon,
  trendMark,
  notification,
  list,
  menus
]

export default {
  install(app: App) {
    component.map(item => {
      app.use(item)
    })
  }
}