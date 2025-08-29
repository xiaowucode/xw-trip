<template>
  <div class="home">
    <homeNavBar></homeNavBar>
    <homeSearchBox></homeSearchBox>
    <homeCategories></homeCategories>
    <homeContent></homeContent>
    <button @click="getMoreHouseList">获取更多</button>
  </div>
</template>

<script setup>
import homeNavBar from './cpns/home-nav-bar.vue'
import homeSearchBox from './cpns/home-search-box.vue';
import homeCategories from './cpns/home-categories.vue';
import homeContent from './cpns/home-content.vue';
import { useHomeStore } from '@/stores/modules/home'

const homeStore = useHomeStore()
homeStore.fetchHotSuggests()
homeStore.fetchCategories()
homeStore.fetchHouseList()

const getMoreHouseList = () => {
  homeStore.fetchHouseList()
}

</script>

<style lang="less" scoped>
.home {
  padding-bottom: 50px;

  button {
    height: 50px;
    width: 100px;
  }
}
</style>