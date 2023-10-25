<template>
  <div>
    <!-- <div class="flex">
      <z-trend-mark></z-trend-mark>
      <z-trend-mark text="营业额" type="down"></z-trend-mark>
    </div>
    <br>
    <div class="flex">
      <z-trend-mark upIconColor="red"></z-trend-mark>
      <z-trend-mark text="营业额" type="down" downIconColor="black"></z-trend-mark>
    </div> -->
    <!--

      <div class="flex">
        <z-trend-mark text="1223">营业额</z-trend-mark>
        <z-trend-mark type="down" text="销售额"></z-trend-mark>
      </div>
    -->
    <!-- 颜色翻转 
    <div class="flex">
      <z-trend-mark reverseColor upIconColor="yellow">营业额</z-trend-mark>
      <z-trend-mark type="down" text="销售额" reverseColor></z-trend-mark>
    </div>
    -->
    <div class="flex">
      <z-trend-mark upIcon="CaretTop"></z-trend-mark>
      <z-trend-mark type="down" downIcon="CaretBottom">营业额</z-trend-mark>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {} from 'vue'
</script>

<style lang="scss" scoped>
.flex {
  display: flex;
}
</style>
