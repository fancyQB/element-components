<template>
  <div>
    <el-select clearable placeholder="请选择省份" v-model="province">
      <el-option
        v-for="item in areas"
        :key="item.code"
        :value="item.name"
      ></el-option>
    </el-select>
    <el-select
      clearable
      :disabled="!province"
      style="margin: 0 20px"
      placeholder="请选择市"
      v-model="city"
    >
      <el-option v-for="item in selectCity" :key="item.code" :value="item.name">
      </el-option>
    </el-select>
    <el-select
      clearable
      :disabled="!province || !city"
      placeholder="请选择区"
      v-model="area"
    >
      <el-option
        v-for="item in selectArea"
        :key="item.code"
        :value="item.name"
      ></el-option>
    </el-select>
    <div class="print">
      <span>{{ province }} -- {{ city }} -- {{ area }} </span>
    </div>
  </div>
</template>

<script lang="ts" setup>
import allAreas from '../lib/pca-code.json'
import { ref, watch } from 'vue'

export interface AreaItem {
  name: string
  code: string
  children?: AreaItem[]
}

export interface Data {
  name: string
  code: string
}

const emits = defineEmits(['change'])

// 下拉框选择省份的值
const province = ref<string>('')
// 下拉框选择市的值
const city = ref<string>('')
// 下拉框选择区域的值
const area = ref<string>('')
console.log(allAreas)

// 所有省市区的数据
let areas = ref(allAreas)

// 城市下拉框的所有值
let selectCity = ref<AreaItem[]>([])

// 区域下拉框 所有的值
let selectArea = ref<AreaItem[]>([])

// 监听省份选择
watch(
  () => province.value,
  (val: string) => {
    if (val) {
      let cities = areas.value.find((item) => item.name === val)!.children
      selectCity.value = cities
    }
    city.value = ''
    area.value = ''
  }
)

// 监听城市选择
watch(
  () => city.value,
  (val: string) => {
    if (val) {
      let areas = selectCity.value.find((item) => item.name === val)!.children!
      selectArea.value = areas
    }
    area.value = ''
  }
)

// 监听区域
watch(
  () => area.value,
  (val) => {
    if (val) {
      let provinceData: Data = {
        name: province.value,
        code: areas.value.find((item) => item.name === province.value)!.code
      }
      let cityData: Data = {
        name: city.value,
        code: selectCity.value.find((item) => item.name === city.value)!.code
      }
      let areaData: Data = {
        name: area.value,
        code: selectArea.value.find((item) => item.name === val)!.code
      }
      console.log(province.value, city.value, area.value)
      emits('change', { province: provinceData, city: cityData, area: areaData })
    }
  }
)
</script>

<style lang="scss" scoped>
.print {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 685px;
  height: 50px;
  margin-top: 50px;
  background-color: #7f80a1;
  color: #fff;
  font-size: 20px;
  border-radius: 25px;
}
</style>
