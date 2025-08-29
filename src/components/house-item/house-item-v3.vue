<template>
  <div class="item-v3">
    <div class="item-inner">
      <div class="cover">
        <img :src="itemData.image.url" alt="">
      </div>
      <div class="info">
        <div class="location">
          <van-icon name="location" />
          <span>{{ itemData.location }}</span>
        </div>
        <div class="name">{{ itemData.houseName }}</div>
        <div class="summary">{{ itemData.summaryText }}</div>
        <div class="price">
          <div class="new">{{ itemData.finalPrice }}</div>
          <div class="old">{{ itemData.productPrice }}</div>
          <div class="tip" v-if="itemData.priceTipBadge">{{ itemData.priceTipBadge.text }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>

const props = defineProps({
  itemData: {
    type: Object,
    default: () => ({})
  }
})

</script>

<style lang="less" scoped>
.item-v3 {
  width: 50%;
}
.item-inner {
  height: 100%;
  box-sizing: border-box;
  background-color: #f3f3f3;

  margin: 5px;
  border-radius: 6px;
  overflow: hidden;

  .cover {
    img {
      width: 100%;
    }
  }

  .info {
    width: 100%;

    .location {
      color: #999;
    }

    .summary {
      font-size: 12px;
      color: #999;
      padding: 0 5px;
      line-height: 20px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    .name {
      font-size: 14px;
      color: #333;
      padding: 0 5px;
      line-height: 20px;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: normal;
    }

    .price {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 5px 5px;

      .new-price {
        font-size: 14px;
        color: #fff;
        font-weight: 600;
      }
    }
  }
}
</style>