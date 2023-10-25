<template>
  <el-menu
    default-active="/chooseArea"
    class="el-menu-vertical-demo"
    :collapse="collapse"
    router
  >
    <el-menu-item index="/">
      <el-icon><el-icon-menu /></el-icon>
      <span>首页</span>
    </el-menu-item>
    <el-menu-item index="/chooseIcon">
      <el-icon><el-icon-select /></el-icon>
      <span>图标选择器</span>
    </el-menu-item>
    <el-menu-item index="/chooseArea">
      <el-icon><el-icon-position  /></el-icon>
      <span>省市区选择器</span>
    </el-menu-item>
    <el-menu-item index="/trendMark">
      <el-icon><el-icon-sort /></el-icon>
      <span>趋势标记</span>
    </el-menu-item>
    <el-menu-item index="/notification">
      <el-icon><el-icon-bell /></el-icon>
      <span>显示通知</span>
    </el-menu-item>
    
  </el-menu>
</template>

<script lang="ts" setup>
defineProps<{
  collapse: boolean
}>()
</script>

<style lang="scss" scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
}
</style>
