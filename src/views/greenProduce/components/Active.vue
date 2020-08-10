<template>
  <div class="icy-detail"></div>
</template>

<script lang="ts">
/**
 *科技奖励-获奖项目详情
 * @author wyr
 */
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class Active extends Vue {}
</script>

<style scoped lang="scss">
@import '@/styles/variables';
/** 获奖项目 */
.icy-detail {
  width: 880px;
  height: auto;
  padding: 56px 34px 80px;
  /**标题 */
  &__title {
    font-family: '微软雅黑';
    font-size: 36px;
    font-weight: bold;
    color: $font-color-07519a;
  }
  /**红色图标 */
  &__symbol {
    display: flex;
    width: 812px;
    height: 2px;
    margin-top: 46px;
    background-color: $color-red1;
  }
  /**表格 */
  .icy-table {
    border-collapse: collapse;
    margin-top: 40px;
    width: 812px;
    height: 706px;
    border: 1px solid $border-color-c1dbf0;
    font-family: '微软雅黑';
    font-size: 16px;
    color: $color-base;

    /**第一种行样式 */
    &__row1 {
      border: 1px solid $border-color-c1dbf0;
      height: 54px;
      text-align: left;

      /**第一个表格 */
      &--firstgrid {
        border: 1px solid $border-color-c1dbf0;
        width: 142px;
        background-color: $background-color-f0f6fb;
        padding: 0px 0px 0px 15px;
        color: $font-color-e9100e;
      }
      &--secondgrid {
        border: 1px solid $border-color-c1dbf0;
        width: 670px;
        padding: 0px 0px 0px 15px;
      }
    }
    /**第二种行样式 */
    &__row2 {
      border: 1px solid $border-color-c1dbf0;
      height: 436px;
      text-align: left;
      vertical-align: top;
      &--firstgrid {
        border: 1px solid $border-color-c1dbf0;
        width: 142px;
        background-color: $background-color-f0f6fb;
        padding: 15px 0px 0px 15px;
        color: $font-color-e9100e;
      }
      &--secondgrid {
        border: 1px solid $border-color-c1dbf0;
        width: 670px;
        padding: 15px 0px 0px 15px;
      }
    }
  }
}
</style>
