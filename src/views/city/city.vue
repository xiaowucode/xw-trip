<template>
  <div class="city top-page">
    <div class="top">
      <van-search v-model="searchValue" placeholder="城市/区域/位置" shape="round" show-action @cancel="onCancel" />
      <van-tabs v-model:active="activeName" color="#ff9854">
        <template v-for="(value, key) in allCities" :key="key">
          <van-tab :title="value.title" :name="key"></van-tab>
        </template>
      </van-tabs>
    </div>
    <div class="content">
      <template v-for="(value, key, index) in allCities" :key="index">
        <city-group v-show="key === activeName" :groupData="value"></city-group>
      </template>
    </div>
  </div>
</template>

<script setup>

import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useCityStore } from '@/stores/modules/city'
import { storeToRefs } from 'pinia'
import CityGroup from './cpns/city-group.vue'

const searchValue = ref('')

const router = useRouter()
const onCancel = () => {
  router.back()
}

const activeName = ref('')

// 获取城市数据
const cityStore = useCityStore()
cityStore.fetchCitiesDataAll()
const { allCities } = storeToRefs(cityStore)

</script>

<style lang="less" scoped>
.top {
  position: relative;
  z-index: 9;
}
.content {
  height: calc(100vh - 98px);
  overflow-y: auto;
}
</style>