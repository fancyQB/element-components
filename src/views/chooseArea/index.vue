<template>
  <z-choose-area style="margin: 40px ;" @change="change"></z-choose-area>
</template>

<script lang='ts' setup>
const change = (val: {}) => {
  console.log(val);
}
</script>

<style lang='scss' scoped>
</style>
