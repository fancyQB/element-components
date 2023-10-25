<template>
  <div class="trend">
    <div class="text">
      <slot v-if="slots.default"></slot>
      <div v-else>{{ text }}</div>
    </div>
    <div class="icon">
      <!-- <el-icon-arrowup
        v-if="props.type === 'up'"
        :style="{ color: !reverseColor ? props.upIconColor :  '#52c41a'}"
      />
      <el-icon-arrowdown
        v-else="props.type === 'down'"
        :style="{ color: !reverseColor ? props.downIconColor : '#f5222d'}"
      /> -->
      <component
        :is="`el-icon-${toLine(upIcon)}`"
        v-if="props.type === 'up'"
        :style="{ color: !reverseColor ? props.upIconColor : '#52c41a' }"
      ></component>
      <component
        :is="`el-icon-${toLine(downIcon)}`"
        v-else="props.type === 'down'"
        :style="{ color: !reverseColor ? props.downIconColor : '#f5222d' }"
      ></component>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed, useSlots } from 'vue'

import { toLine } from '../../../utils'

let props = defineProps({
  type: {
    type: String,
    default: 'up'
  },
  // 趋势显示的文字
  // 1. 父组件传递过来的数据
  // 2. 插槽
  text: {
    type: String,
    default: '销售额'
  },
  // 上升图标的颜色
  upIconColor: {
    type: String,
    default: '#f5222d'
  },
  // 下降图标的颜色
  downIconColor: {
    type: String,
    default: '#52c41a'
  },
  // 上升文字的颜色
  upTextColor: {
    type: String,
    default: '#000'
  },
  // 下降文字的颜色
  downTextColor: {
    type: String,
    default: '#000'
  },
  // 自定义上升图标
  upIcon: {
    type: String,
    default: 'Arrowup'
  },
  // 自定义下降图标
  downIcon: {
    type: String,
    default: 'Arrowdown'
  },
  // 颜色只在默认颜色下生效, 如果使用了自定义颜色, 就不生效
  reverseColor: {
    type: Boolean,
    default: false
  }
})
console.log(props.reverseColor)
console.log(toLine(props.upIcon))

const slots = useSlots()

// 文字颜色
const textColor = computed(() => {
  return props.type === 'up' ? props.upTextColor : props.downTextColor
})
</script>

<style lang="scss" scoped>
.trend {
  display: flex;
}
.text {
  margin: 0 8px;
  font-size: 6px;
  color: v-bind(textColor);
}
.icon {
  line-height: 1em;
  svg {
    width: 0.8em;
    height: 0.8em;
  }
}
</style>
