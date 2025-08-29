<template>
  <div class="categories-box">
    <template v-for="item in categories" :key="item.id">
      <div class="item">
        <img :src="item.pictureUrl" alt="">
        <div class="text">{{ item.title }}</div>
      </div>
    </template>
  </div>
</template>

<script setup>

import { useHomeStore } from '@/stores/modules/home'
import { storeToRefs } from 'pinia'

const homeStore = useHomeStore()
const { categories } = storeToRefs(homeStore)

</script>

<style lang="less" scoped>
.categories-box {
  display: flex;
  padding: 10px 15px 0;
  overflow-x: auto;
  &::-webkit-scrollbar {
    display: none;
  }

  .item {
    width: 65px;
    flex-shrink: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 15px;
    img {
      width: 40px;
      height: 40px;
      margin-bottom: 5px;
    }
    .text {
      font-size: 12px;
      color: #666;
    }
  }
}
</style>