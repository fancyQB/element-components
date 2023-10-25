<template>
  <!-- <z-menus :data="data" default-active="1-1" :collapse="false"></z-menus> -->
  <z-infinite-menus :data="data" default-active="1-1-1-1"></z-infinite-menus>
</template>

<script lang="ts" setup>
let data = [
  {
    icon: 'Plus',
    index: '1',
    
    name: '加号',
    children: [
      {
        icon: 'Minus',
        index: '1-1',
        name: '减号',
        children: [
          {
            index: '1-1-1',
            name: '1-1-1',
            children: [
          {
            index: '1-1-1-1',
            name: '1-1-1-1'
          }
        ]
          }
        ]
      }
    ]
  },

  {
    icon: 'Select',
    index: '2',
    name: '选择',
    children: [
      {
        icon: 'Switch',
        index: '2-1',
        name: '转换'
      },
      {
        icon: 'More',
        index: '2-2',
        name: '更多'
      },
      {
        icon: 'Compass',
        index: '2-3',
        name: '转换'
      }
    ]
  },
  {
    icon: 'Switch',
    index: '3',
    name: '转换'
  }
]

</script>

<style lang="scss" scoped></style>
