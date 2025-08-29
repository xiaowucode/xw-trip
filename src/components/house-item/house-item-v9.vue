<template>
  <div class="item-v9">
    <div class="item-inner">
      <div class="cover">
        <img :src="itemData.image.url" alt="">
      </div>
      <div class="info">
        <div class="summary">{{ itemData.summaryText }}</div>
        <div class="name">{{ itemData.houseName }}</div>
        <div class="price">
          <van-rate :model-value="Number(itemData.commentScore)" void-color="#eee" color="#fff" readonly allow-half />
          <div class="new-price"> ¥{{ itemData.finalPrice }}</div>
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
.item-v9 {
  --van-rate-icon-size: 14px;
  width: 50%;
}
.item-inner {
  margin: 5px;
  position: relative;
  border-radius: 6px;
  overflow: hidden;

  .cover {
    img {
      width: 100%;
    }
  }

  .info {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;

    .summary {
      font-size: 12px;
      color: #fff;
      padding: 0 5px;
      line-height: 20px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    .name {
      font-size: 14px;
      color: #fff;
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