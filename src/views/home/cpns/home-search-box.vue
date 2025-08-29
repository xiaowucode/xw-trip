<template>
  <div class="search-box">
    <div class="location">
      <div class="city-name" @click="chooseCity">{{ currentCity.cityName }}</div>
      <div class="position" @click="gitLocation">
        <div class="position-name">我的位置</div>
        <van-icon name="aim" color="#ff9543" />
      </div>
    </div>
    <div class="date-box" @click="showCalendar = true">
      <div class="start-date">
        <div class="date-item">
          <div class="tip">入住</div>
          <div class="date">{{ startDate }}</div>
        </div>
      </div>
      <div class="stay">共{{ stayCount }}晚</div>
      <div class="end-date">
        <div class="date-item">
          <div class="tip">入住</div>
          <div class="date">{{ endDate }}</div>
        </div>
      </div>
    </div>
    <van-calendar v-model:show="showCalendar" color="#ff9854" :round="false" :show-confirm="false"
      :formatter="formatterCalendar" @confirm="calendarConfirm" type="range" />
    <div class="input-container">
      <div class="price-count-box">
        <div class="price">价格不限</div>
        <div class="count">人数不限</div>
      </div>
      <div class="keyword">关键字/位置/民宿名</div>
    </div>
    <div class="hot-suggest">
      <template v-for="(item, index) in hotSuggests" :key="index">
        <div class="suggest-item" :style="{color: item.tagText.color, backgroundColor: item.tagText.background.color}">{{ item.tagText.text }}</div>
      </template>
    </div>
    <div class="search-btn" @click="clickSearch">开始搜索</div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { useCityStore } from '@/stores/modules/city'
import { storeToRefs } from 'pinia'
import { ref } from 'vue'
import { formateMonthDay, getDiffDays } from '@/utils/format_date'
import { useHomeStore } from '@/stores/modules/home'

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

const nowDate = new Date()
const startDate = ref(formateMonthDay(nowDate))
const newDate = new Date(nowDate.getTime() + 24 * 60 * 60 * 1000)
const endDate = ref(formateMonthDay(new Date(newDate)))
const stayCount = ref(getDiffDays(nowDate, newDate))

const showCalendar = ref(false)
const formatterCalendar = (day) => {
  if (day.type === 'start') {
    day.bottomInfo = '入住';
  } else if (day.type === 'end') {
    day.bottomInfo = '离店';
  }
  return day;
}
const calendarConfirm = (date) => {
  startDate.value = formateMonthDay(date[0])
  endDate.value = formateMonthDay(date[1])
  stayCount.value = getDiffDays(date[0], date[1])
  showCalendar.value = false
}

const homeStore = useHomeStore()
const { hotSuggests } = storeToRefs(homeStore)

const clickSearch = () => {
  router.push({
    path: '/search',
    query: {
      city: currentCity.value.cityName,
      startDate: startDate.value,
      endDate: endDate.value,
    }
  })
}

</script>

<style lang="less" scoped>
.search-box {
  --van-calendar-popup-height: 100%;
}

.location {
  display: flex;
  align-items: center;
  padding: 10px 20px;

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

.date-box {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;

  .stay {
    font-size: 12px;
    color: #666;
  }

  .date-item {
    .tip {
      font-size: 12px;
      color: #666;
    }

    .date {
      font-size: 14px;
      color: #333;
    }
  }
}

.input-container {
  font-size: 14px;
  color: #999;
  padding: 0 20px;

  div {
    height: 30px;
    line-height: 30px;
  }

  .price-count-box {
    display: flex;
    align-items: center;
    margin-bottom: 10px;

    .price {
      width: 70%;
    }
  }
}

.hot-suggest {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  padding: 0 20px;
  padding-top: 20px;

  .suggest-item {
    padding: 5px 10px;
    margin: 0 10px 10px 0;
    font-size: 12px;
    border-radius: 12px;
  }
}

.search-btn {
  font-size: 20px;
  margin: 10px 20px;
  height: 40px;
  line-height: 40px;
  text-align: center;
  color: #fff;
  background-image: var(--theme-linear-gradient);
  border-radius: 20px;
}
</style>