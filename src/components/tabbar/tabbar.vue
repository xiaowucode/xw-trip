<template>
  <van-tabbar v-model="currentIndex" active-color="#ff9854">
    <template v-for="(item, index) in tabbarData" :key="index">
      <van-tabbar-item :to="item.path">
        <span>{{ item.text }}</span>
        <template #icon="props">
          <img :src="getAssetsURL(currentIndex === index ? item.imageUrlActive : item.imageUrl)" />
        </template>
      </van-tabbar-item>
    </template>
  </van-tabbar>
</template>

<script setup>

import { tabbarData } from '@/assets/data/tabbar'
import { ref } from 'vue'
import { getAssetsURL } from '@/utils/load_assets'

const currentIndex = ref(0)

</script>

<style lang="less" scoped>
</style>