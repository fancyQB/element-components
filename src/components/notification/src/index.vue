<template>
  <div>
    <el-popover
      placement="top-start"
      :width="300"
      trigger="click"
    >
      <template #default>
        <slot></slot>
      </template>
      <template #reference>
        <el-badge
          style="cursor: pointer"
          :value="value"
          :type="type"
          :max="max"
          :is-dot="isDot"
        >
          <component :is="`el-icon-${toLine(props.icon)}`"></component>
        </el-badge>
      </template>
    </el-popover>
  </div>
</template>

<script lang="ts" setup>
import {} from 'vue'
import { toLine } from '../../../utils/index'

let props = defineProps({
  icon: {
    type: String,
    default: 'bell'
  },
  value: {
    type: [Number, String],
    default: 12
  },
  max: {
    type: Number,
    default: 99
  },
  isDot: {
    type: Boolean,
    default: false
  },
  type: {
    validator(value: string) {
      return ['primary', 'success', 'warning', 'danger', 'info'].includes(value)
    }
  }
})
console.log(toLine(props.icon))
</script>

<style lang="scss" scoped></style>
