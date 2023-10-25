<template>
  <div>
    <!-- <z-notification icon="ChatRound" type="success" :max=10></z-notification> -->
    <z-notification >
      <template #default>
        <z-list :list="list" :actions="actions" @listItem="getListItem" @action="getAction"/>
      </template>
    </z-notification>
  </div>
</template>

<script lang='ts' setup>
import { list, actions } from './data.ts'
import { } from 'vue';

let getListItem = (val: any) => {
  console.log(val);
  
}

let getAction = (val: any) => {
  console.log(val);
  
}

</script>

<style lang='scss' scoped>

</style>
