<template>
  <div class="tabbar">
    <template v-for="(item, index) in tabbarData" :key="index">
      <div class="tabbar-item"
        :class="{ active: currentIndex === index }"
        @click="clickTabbarItem(item, index)">
        <img v-if="currentIndex === index" :src="getAssetsURL(item.imageUrlActive)" alt="">
        <img v-else :src="getAssetsURL(item.imageUrl)" alt="">
        <span>{{ item.text }}</span>
      </div>
    </template>
  </div>
</template>

<script setup>

import { tabbarData } from '@/assets/data/tabbar'
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { getAssetsURL } from '@/utils/load_assets'

const router = useRouter()

const currentIndex = ref(0)

const clickTabbarItem = (item, index) => {
    currentIndex.value = index
    // 路由跳转
    router.push(item.path)
}


</script>

<style lang="less" scoped>
.tabbar{
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 50px;
  background-color: #fff;
  display: flex;
  border-top: 1px solid #eee;
  .tabbar-item{
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: #666;
    img{
      width: 22px;
      height: 22px;
      margin-bottom: 2px;
    }
    span{
      font-size: 12px;
    }
    &.active{
      color: var(--color-primary);
    }
  }

}
</style>