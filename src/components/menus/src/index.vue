<template>
  <el-menu
    :default-active="defaultActive"
    :router="router"
    class="el-menu-vertical-demo"
    v-bind="$attrs"
  >
    <template v-for="item in data" :key="item.index">
      <el-menu-item :index="item.index" v-if="!item.children || !item.children.length">
        <el-icon>
          <component
            :is="`el-icon-${toLine(item.icon)}`"
            v-if="item.icon"
          ></component>
        </el-icon>
        <span>{{ item.name }}</span>
      </el-menu-item>
      <el-sub-menu
        v-if="item.children && item.children.length"
        :index="item.index"
      >
        <template #title>
          <el-icon>
          <component
            :is="`el-icon-${toLine(item.icon)}`"
            v-if="item.icon"
          ></component>
        </el-icon>
          <span>{{ item.name }}</span>
        </template>
        <el-menu-item v-for="item1 in item.children" :key="item1.index" :index="item1.index">
          <component
            :is="`el-icon-${toLine(item1.icon)}`"
            v-if="item1.icon"
          ></component>
          <span>{{ item1.name }}</span>
        </el-menu-item>
      </el-sub-menu>
    </template>
  </el-menu>
</template>

<script lang="ts" setup>
import { PropType } from 'vue'
import { MenuItem } from './type'
import { toLine } from '../../../utils'

let props = defineProps({
  data: {
    type: Array as PropType<MenuItem[]>,
    required: true
  },
  defaultActive: {
    type: String,
    default: ''
  },
  router: {
    type: Boolean,
    default: false
  }
})
console.log(props.data)
console.log('default', props.defaultActive)
</script>

<style lang="scss" scoped>
@import './menus.scss';

</style>
