<template>
  <div>
    <z-choose-time
      @startChange="startChange"
      @endChange="endChange"
      :startOptions="startOption"
    ></z-choose-time>
    <br />
    <br />
    <z-choose-date @startChange="dateStartChange" @endChange="dateEndChange" :startOptions="dateStartOptions" :disaledToday="false"></z-choose-date>
  </div>
</template>

<script lang="ts" setup>
import {} from 'vue'
interface endValue {
  startTime: string
  endTime: string
}

interface enDateValue {
  startDate: Date
  endDate: Date
}

const startChange = (val: string) => {
  console.log('startChange', val)
}
const endChange = (val: endValue) => {
  console.log('endChage', val)
}

const dateStartChange = (val: Date) => {
  console.log('dateStartChange', val)
}

const dateEndChange = (val: enDateValue) => {
  console.log('dateEndChange', val)
}

let startOption = {
  size: 'small',
  clearable: false,
  editable: true
}

let dateStartOptions = {
  size: 'small'
}
</script>

<style lang="scss" scoped></style>
