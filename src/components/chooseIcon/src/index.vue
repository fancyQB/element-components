<template>
  <el-button type="primary" @click="handleClick">
    <slot></slot>
  </el-button>
  <el-dialog :title="title" v-model="dialogVisible" class="choose-icon-dialog-body-height">
    <div class="container">
      <div class="item" v-for="(item, index) in Object.keys(ElementPlusIconsVue)" :key="index">
        <div @click="handleCopyClick(item)">
          <component :is="`el-icon-${toLine(item)}`"></component>
        </div>
        <div class="item-text">{{ item }}</div>
      </div>
    </div>
  </el-dialog>
</template>

<script lang="ts" setup>
import { watch, ref } from 'vue'

import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import { toLine } from '../../../utils';
import { useCopy } from '../../../hooks/useCopy/index';

const props = defineProps<{
  // 弹出框的标题
  title: string
  // 控制弹出框的显示与隐藏
  visible: boolean
}>()

// 拷贝一份父组件传递过来的visible -- 不直接操作父组件的数据
let dialogVisible = ref<boolean>(props.visible)

// 显示图标选择器dialog
const handleClick = () => {
  dialogVisible.value = !dialogVisible.value
}
// 点击图标进行复制
const handleCopyClick = (item: string) => {
  let text = `<el-icon-${toLine(item)} />`
  useCopy(text)
  // 复制成功后关闭 dialog
  dialogVisible.value = false
}

// 监听组件内部的 dialogVisible 的变化
watch(() => dialogVisible.value, val => {
  dialogVisible.value = val
}) 
</script>

<style lang="scss" scoped>
.container {
  // overflow: auto;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
}
.item {
  width: 20%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  cursor: pointer;
}
svg {
  width: 2em;
  height: 2em;
}
.item-text {
  font-size: 12px;
  // transform: scale(50%);
}
.el-dialog__body {
  overflow: scroll;
  height: 500px;
}
</style>
