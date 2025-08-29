<template>
  <div class="content">
    <div class="content-title">热门精选</div>
    <div class="content-list">
      <template v-for="item in houseList" :key="item.data.houseId">
        <houseItemV3 v-if="item.discoveryContentType === 3" :itemData="item.data" />
        <houseItemV9 v-else-if="item.discoveryContentType === 9" :itemData="item.data" />
      </template>
    </div>
  </div>
</template>

<script setup>

import houseItemV3 from '@/components/house-item/house-item-v3.vue';
import houseItemV9 from '@/components/house-item/house-item-v9.vue';
import { useHomeStore } from '@/stores/modules/home';
import { storeToRefs } from 'pinia'

const homeStore = useHomeStore()
const { houseList } = storeToRefs(homeStore)

</script>

<style lang="less" scoped>
.content {

  .content-title {
    font-size: 22px;
    font-weight: 600;
    padding: 10px 0;
    padding-left: 20px
  }

  .content-list {
    display: flex;
    flex-wrap: wrap;
    margin: 0 10px;
  }
}
</style>