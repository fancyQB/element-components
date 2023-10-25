<template>
  <div class="list-tabs__item">
    <el-tabs v-model="activeName" tab-position="top" stretch>
      <el-tab-pane
        v-for="item in props.list"
        :label="item.title"
        :key="item.title"
        :name="item.title"
      >
        <el-scrollbar :height="height" >
          <div
            class="container"
            v-for="(item1, index1) in item.content"
            :key="index1"
            @click="handleItemClick(item1, index1)"
          >
            <div class="avatar" v-if="item1.avatar">
              <el-avatar size="small" :src="item1.avatar"></el-avatar>
            </div>
            <div class="content">
              <div class="title" v-if="item1.title">
                <div>{{ item1.title }}</div>
                <el-tag v-if="item1.tag" size="small" :type="item1.tagType">{{
                  item1.tag
                }}</el-tag>
              </div>
              <div class="time" v-if="item1.desc">{{ item1.desc }}</div>
              <div class="time" v-if="item1.time">{{ item1.time }}</div>
            </div>
          </div>
        </el-scrollbar>
      </el-tab-pane>
    </el-tabs>
    <div class="actions">
      <div
        class="a-item"
        v-for="(action, i) in props.actions"
        :key="i"
        @click="handleActionClick(action, i)"
      >
        <div class="a-icon" v-if="action.icon">
          <component :is="`el-icon-${action.icon}`"></component>
        </div>
        <div class="a-text">{{ action.text }}</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { PropType } from 'vue'
import { ListOptions, ActionOptions, ListItem } from './types'

let props = defineProps({
  // 列表的内容
  list: {
    type: Array as PropType<ListOptions[]>,
    required: true
  },
  // 操作的内容
  actions: {
    type: Array as PropType<ActionOptions[]>,
    default: () => []
  },
  // 列表高度
  height: {
    type: Number,
    default: 200
  }
})

const emits = defineEmits(['listItem', 'action'])

const activeName = props.list[0].title

let handleItemClick = (item: ListItem, index: Number) => {
  emits('listItem', { item, index })
}

let handleActionClick = (action: ActionOptions, index: Number) => {
  emits('action', { action, index })
}

console.log(props.actions)
</script>

<style lang="scss" scoped>
.list-tabs__item {
  position: relative;
}
.container {
  border-bottom: 1px solid #e4e7ed;
  display: flex;
  align-items: center;
  padding: 12px 20px;
  cursor: pointer;
  &:hover {
    background: #e6f6ff;
  }
  .avatar {
    flex: 1;
  }
  .content {
    flex: 3;
    .title {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    .time {
      font-size: 12px;
      color: #999;
      margin-top: 4px;
    }
  }
}
.actions {
  margin-left: -12px;
  margin-right: -12px;
  height: 35px;
  position: relative;
  bottom: -10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-top: 1px solid #eee;
  .a-item {
    padding: 0 10px;
    height: 35px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    .a-icon {
      margin-right: 4px;
      position: relative;
      top: 2px;
    }
  }
}
</style>
