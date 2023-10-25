export interface MenuItem {
  icon?: string, // 图标
  name: string, // 导航名字
  index: string, // 标识
  i?: any, 
  children?: MenuItem [] // 子菜单
 }