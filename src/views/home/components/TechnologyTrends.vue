<template>
  <div class="icy-technologytrends">
    <!-- 查看更多 -->
    <ReadMore readmoreIndex="2" :title="title" />
    <!-- 展览展示 列表-->
    <ul class="icy-technologytrends__external">
      <li v-for="item in 3" :key="item" class="icy-technologytrends__internal">
        <img class="icy-technologytrends__internal--img" src=@/assets/images/connectus_banner.png>
        <div class="icy-technologytrends__internal--content">
          <p class="icy-technologytrends__internal--detail">
            2019年全国机械行业两化融合推荐大会暨工业互联网促进机械工业转型发展论坛2019年全国机械行业两化融合推荐大会暨工业互联网促进机械工业转型发展论坛2019年全国机械行业两化融合推荐大会暨工业互联网促进机械工业转型发展论坛2019年全国机械行业两化融合推荐大会暨工业互联网促进机械工业转型发展论坛
          </p>
          <p class="icy-technologytrends__internal--time">2019-10-14</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
/**
 * 首页-科技动态
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
export default class TechnologyTrends extends Vue {
  @Prop() private title!: string
}
</script>

<style scoped lang="scss">
@import '@/styles/variables';
.icy-technologytrends {
  &__external {
    width: 100%;
    margin-top: -5px;
  }
  &__internal {
    display: flex;
    width: 100%;
    height: 130px;
    background-color: $background-color-f2f4f7;
    margin-top: 25px;
    &--img {
      width: 160px;
      height: 110px;
      margin-top: 10px;
      margin-left: 10px;
    }
    &--content {
      height: 110px;
      margin-top: 10px;
      margin-left: 16px;
    }
    &--detail {
      text-align: left;
      font-size: $font-size-base;
      color: $color-base;
      padding-right: 30px;
      height: 55px;
      line-height: 30px;
      margin-bottom: 34px;
      cursor: pointer;
      overflow: hidden;
      -webkit-line-clamp: 2;
      display: -webkit-box;
      -webkit-box-orient: vertical;
    }
    &--time {
      text-align: right;
      font-size: $font-size-small;
      color: $font-color-666666;
      margin-right: 20px;
    }
  }
  &__internal:hover {
    box-shadow: 0px 0px 5px 5px #f2f2f2;
  }
  .icy-technologytrends__internal--content:hover p {
    color: $color-red;
  }
}
</style>
