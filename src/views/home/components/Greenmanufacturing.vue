<template>
  <div class="icy-greenmanufacturing">
    <!-- 查看更多 -->
    <ReadMore readmoreIndex="2" :title="title" />
    <!-- 展览展示 列表-->
    <div class="icy-greenmanufacturing__external">
      <div class="icy-greenmanufacturing__external--left">
        <p class="icy-greenmanufacturing__title">联盟简介</p>
        <div class="icy-greenmanufacturing__imgExternal">
          <img class="icy-greenmanufacturing__img" src="@/assets/images/connectus_banner.png" />
          <p class="icy-greenmanufacturing__overview">
            绿色制造(Green Manuufacturing-GM)是一种在保证产品 的功能、质量、成本的前提下，综合考虑环境影响和资源效率的
            现代制造模式，通过开展技术创新及系统优化，使产品在设计...
          </p>
        </div>
        <p class="icy-greenmanufacturing__details">详细了解联盟></p>
      </div>
      <ul class="icy-greenmanufacturing__external--ui">
        <li v-for="item in data" :key="item.id">
          <InformationExhibition :information="item" :type="type" />
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
/**
 * 首页-绿色制造
 * author:haoyu
 */
import { Component, Prop, Vue } from 'vue-property-decorator'
import ReadMore from '@/components/article/ReadMore.vue'
import InformationExhibition from '@/components/article/InformationExhibition.vue'

@Component({
  components: {
    ReadMore,
    InformationExhibition
  }
})
export default class Greenmanufacturing extends Vue {
  @Prop() private type!: number
  @Prop() private data!: number
  @Prop() private title!: string
}
</script>

<style scoped lang="scss">
@import '@/styles/variables';
.icy-greenmanufacturing {
  &__external {
    display: flex;
    height: 243px;
    margin-top: 20px;
    &--left {
      width: 484px;
      height: 242px;
      background: url('../../../assets/images/allianceIntroduction.png');
    }
    &--ui {
      width: 656px;
      position: relative;
      bottom: 17px;
      margin-left: 20px;
    }
    &--ui li {
      border-bottom: 1px dashed $color-gray-e0e0e0;
    }
    &--ui li:last-child {
      border-bottom: 0px dashed $color-gray-e0e0e0;
    }
  }
  &__img {
    width: 190px;
    height: 130px;
  }
  &__title {
    width: 484px;
    height: 56px;
    text-align: left;
    font-size: $font-size-large;
    color: $background-color-07519a;
    line-height: 56px;
    margin-left: 16px;
  }
  &__imgExternal {
    display: flex;
    padding-left: 16px;
  }
  &__overview {
    text-align: left;
    font-size: $font-size-small;
    padding-left: 10px;
    line-height: 26px;
  }
  &__details {
    text-align: right;
    padding-right: 24px;
    color: $color-red2;
    font-size: $font-size-small;
    cursor: pointer;
  }
}
</style>
