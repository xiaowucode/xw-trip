<template>
  <div class="home">
    <homeNavBar></homeNavBar>
  </div>
  <div class="location">
    <div class="city-name" @click="chooseCity">{{ currentCity.cityName }}</div>
    <div class="position" @click="gitLocation">
      <div class="position-name">我的位置</div>
      <van-icon name="aim" color="#ff9543" />
    </div>
  </div>
</template>

<script setup>
import homeNavBar from './cpns/home-nav-bar.vue'
import { useRouter } from 'vue-router'
import { useCityStore } from '@/stores/modules/city'
import { storeToRefs } from 'pinia'

const gitLocation = () => {
  console.log('获取位置')
  navigator.geolocation.getCurrentPosition(
    (position) => {
      const latitude = position.coords.latitude
      const longitude = position.coords.longitude
      console.log('纬度:', latitude)
      console.log('经度:', longitude)
    },
    (error) => {
      console.error('获取位置失败:', error)
    }
  )
}

const router = useRouter()
const chooseCity = () => {
  console.log('选择城市')
  router.push('/city')
}

const cityStore = useCityStore()
const { currentCity } = storeToRefs(cityStore)

</script>

<style lang="less" scoped>
.location {
  display: flex;
  align-items: center;
  padding: 10px;

  .city-name {
    flex: 1;
    font-size: 12px;
    color: #333;
  }

  .position {
    display: flex;
    align-items: center;

    .van-icon {
      margin-left: 5px;
    }

    .position-name {
      font-size: 12px;
      color: #666;
    }
  }
}
</style>