<template>
  <div class="icy-exhibition icy-content__container">
    <router-view />
  </div>
</template>

<script lang="ts">
/**
 *展览展示页
 * @author chenjiaqing
 */
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class Index extends Vue {}
</script>

<style scoped lang="scss">
@import '@/styles/variables';
/* 展示内容框 */
.icy-exhibition {
  width: 1200px;
  padding-top: 30px;
  background-color: $color-white;
  vertical-align: baseline;
  /* 内容框设置间距 */
  &__contentblock {
    display: flex;
    width: 1168px;
    flex-wrap: wrap;
    margin: 0 auto;
    justify-content: space-between;
    /* 单个内容框*/
    .icy-exhibition__content {
      margin-bottom: 24px;
      width: 558px;
      height: 160px;
      box-shadow: 0px 0px 5px 3px $font-color-f2f2f2;
      display: flex;
      cursor: pointer;
      /* 展示内容图片 */
      &--picture {
        width: 210px;
        height: 100%;
      }
      /* 展示内容标题 */
      &--title {
        height: 72px;
        margin-right: 40px;
        margin-left: 20px;
        font-weight: 700;
        margin-bottom: 30px;
        font-size: 16px;
        color: #333;
        line-height: 26px;
        text-align: left;
        margin-top: 20px;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
      }
      /* 展示内容时间 */
      &--time {
        margin-left: 20px;
        // margin-top: 45px;
        margin-bottom: 20px;
        font-size: $font-size-base;
        color: $color-gray-999;
        flex-direction: column-reverse;
        text-align: left;
        flex-direction: column-reverse;
      }
    }
  }
  &__page {
    width: 1168px;
    margin: 0 auto;
    text-align: center;
    padding-top: 40px;
  }
}
</style>
