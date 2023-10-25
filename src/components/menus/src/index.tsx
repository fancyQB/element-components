// tsx jsx 的组件对应递归比较合适
import { defineComponent, PropType, useAttrs } from 'vue'

import * as Icons from '@element-plus/icons-vue'

import { MenuItem } from './type';
import './menus.scss'
export default defineComponent({
  props: {
    data: {
      type: Array as PropType<MenuItem []>,
      required: true
    },
    defaultActive: {
      type: String,
      default: ''
    },
    route: {
      type: Boolean,
      default: false
    }
  },

  setup(props) {
    
    // 封装无限层级的菜单
    let renderMenu = (data: MenuItem[]) => {
      return data.map((item: MenuItem) => {
        let slots = {
          title: () => {
            item.i = (Icons as any)[item.icon!]
            return (
              <>
                <item.i/>
                <span>{item.name}</span>
              </>
            )
          }
        }

        // 递归渲染children
        if (item.children && item.children.length) {
          return (
            <el-sub-menu index={item.index} v-slots={slots}>
              {renderMenu(item.children)}
            </el-sub-menu>
          )
        }
        // 正常渲染普通菜单
        return (
          <el-menu-item index={item.index} v-slots={slots} />
        )
      })
    }

    let attrs = useAttrs()
        
    return () => {
      return (
        <el-menu
          class="menu-icon-svg el-menu-vertical-demo"
          default-active={props.defaultActive}
          router={props.route}
          {...attrs}
        >
          {renderMenu(props.data)}
        </el-menu>
      )
    }
  }
})