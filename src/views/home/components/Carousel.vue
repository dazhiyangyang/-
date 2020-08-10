<template>
  <div class="icy-carousel">
    <el-carousel height="480px">
      <el-carousel-item v-for="item in 4" :key="item">
        <img src="@/assets/images/banner.png" alt="首页轮播图" />
        <p class="icy-carousel__title">2019年产业链协同发展深度行</p>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script lang="ts">
/**
 * 首页-->轮播图
 * author:haoyu
 */
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class Carousel extends Vue {
  @Prop() private msg!: string
}
</script>

<style scoped lang="scss">
@import '@/styles/variables';
.icy-carousel {
  width: 100%;
  position: relative;
  img {
    width: 100%;
    height: 100%;
  }
  /deep/.el-carousel__button {
    width: 10px;
    height: 10px;
    background-color: $color-white;
    opacity: 1;
  }
  /deep/.el-carousel__indicator.is-active button {
    background-color: $background-color-07519a;
  }
  /deep/.el-carousel__indicator {
    width: 0px;
    margin: 7px 10px 0 2px;
  }
  /deep/.el-carousel__indicators--horizontal {
    width: 1160px;
    height: 48px;
    background-color: $color-base;
    text-align: right;
    padding-right: 16px;
    opacity: 0.6;
  }
  &__title {
    position: absolute;
    bottom: 16px;
    left: 20px;
    color: $color-white;
    font-size: $font-size-base;
    font-weight: bold;
  }
}
</style>
