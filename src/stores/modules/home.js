import { defineStore } from 'pinia'
import { getHotSuggests, getCategories, getHouseList } from '@/services'

export const useHomeStore = defineStore('home', {
  state: () => {
    return {
      hotSuggests: [],
      categories: [],
      houseList: [],
      currentPage: 0
    }
  },
  actions: {
    async fetchHotSuggests() {
      const res = await getHotSuggests()
      this.hotSuggests = res
    },
    async fetchCategories() {
      const res = await getCategories()
      this.categories = res
    },
    async fetchHouseList() {
      this.currentPage++
      const res = await getHouseList(this.currentPage)
      this.houseList.push(...res)
    }
  }
})