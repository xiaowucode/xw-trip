<template>
  <div class="city-group">
    <van-index-bar :index-list="indexList" sticky>
      <van-index-anchor index="热门">热门</van-index-anchor>
      <div class="hot-city-box">
        <template v-for="(item, key, index) in hotList" :key="index">
          <div class="hot-city" @click="clickCity(item)">{{ item.cityName }}</div>
        </template>
      </div>
      <template v-for="(item, index) in groupData?.cities" :key="index">
        <van-index-anchor :index="item.group">{{ item.group }}</van-index-anchor>
        <template v-for="(iten, indey) in item.cities" :key="indey">
          <van-cell :title="iten.cityName" @click="clickCity(iten)" />
        </template>
      </template>
    </van-index-bar>
  </div>
</template>

<script setup>

import { computed } from 'vue';
import { useRouter } from 'vue-router';
import { useCityStore } from '@/stores/modules/city'

const props = defineProps({
  groupData: {
    type: Object,
    default: () => ({})
  }
})
console.log('groupData', props.groupData);
const hotList = computed(() => {
  return props.groupData?.hotCities || []
})

const indexList = computed(() => {
  const list = props.groupData?.cities.map(item => item.group) || []
  list.unshift('#')
  return list
})

const router = useRouter()
const cityStore = useCityStore()
const clickCity = (item) => {
  cityStore.currentCity = item
  router.back()
}

</script>

<style lang="less" scoped>
.hot-city-box {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 10px;
  padding-right: 25px;
  .hot-city {
    box-sizing: border-box;
    width: 60px;
    height: 28px;
    border-radius: 14px;
    text-align: center;
    line-height: 28px;
    font-size: 12px;
    color: #000;
    background-color: #fff4ec;
    margin: 5px 0;
  }
}
</style>