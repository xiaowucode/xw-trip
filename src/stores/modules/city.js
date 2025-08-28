import { defineStore } from 'pinia'
import { getCityAll } from '@/services'

export const useCityStore = defineStore('city', {
  state: () => {
    return {
      allCities: [],
      currentCity: { name: '广州市' }
    }
  },
  actions: {
    async fetchCitiesDataAll() {
      const res = await getCityAll()
      this.allCities = res
    }
  }
})