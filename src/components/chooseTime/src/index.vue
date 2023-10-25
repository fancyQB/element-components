<template>
  <div style="display: flex">
    <div style="margin-right: 10px">
      <el-time-select
        v-model="startTime"
        :max-time="endTime"
        :placeholder="startPlaceholder"
        :start="startTimeStart"
        :step="startTimeStep"
        :end="startTimeEnd"
        v-bind="$attrs.startOptions"
      />
    </div>
    <div>
      <el-time-select
        v-model="endTime"
        :min-time="startTime"
        :placeholder="endPlaceholder"
        :start="endTimeStart"
        :step="endTimeStep"
        :end="endTimeEnd"
        :disabled="disabledEndTime"
        v-bind="$attrs.endOptions"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, watch } from 'vue';

let props = defineProps({
  // 开始时间的占位符
  startPlaceholder: {
    type: String,
    default: '请选择开始时间'
  },
  // 开始时间的初始化选择
  startTimeStart: {
    type: String,
    default: '08:00'
  },
  // 开始时间的步进
  startTimeStep: {
    type: String,
    default: '00:15'
  },
  // 开始时间的结束选择
  startTimeEnd: {
    type: String,
    default: '24:00'
  },
  // 结束时间的占位符
  endPlaceholder: {
    type: String,
    default: '请选择结束时间'
  },
  // 结束时间的初始化选择
  endTimeStart: {
    type: String,
    default: '08:00'
  },
  // 结束时间的步进
  endTimeStep: {
    type: String,
    default: '00:15'
  },
  // 结束时间的结束选择
  endTimeEnd: {
    type: String,
    default: '24:00'
  },
})

let emits = defineEmits(['startChange', 'endChange'])

const startTime = ref<string>('')
const endTime = ref<string>('')
const disabledEndTime = ref<boolean>(true)

watch(() => startTime.value, val => {
  if (val === '') {
    endTime.value = ''
    disabledEndTime.value = true
  } else {
    disabledEndTime.value = false
    emits('startChange', val)
  }
})

watch(() => endTime.value, val => {
  if (val !== '') {
    emits('endChange', {
      startTime: startTime.value,
      endTime: val
    })
  }
})
</script>

<style lang="scss" scoped></style>
