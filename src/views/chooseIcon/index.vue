<template>
  <z-choose-icon title="选择图标" v-model:visible="isVisible">选择图标</z-choose-icon>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
// import ChooseIcon from '../../components/chooseIcon/src/index.vue'

const isVisible = ref<boolean>(false)
</script>

<style lang="scss" scoped></style>
