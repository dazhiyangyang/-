<template>
  <div class="icy-subject">
    <p class="icy-subject__title">政策法规</p>
    <div class="icy-subject__symbol">
      <p class="icy-subject__symbol--blue"></p>
    </div>
    <ExhibitionETS :data="5" />
    <ExhibitionETS :data="5" />
    <ExhibitionETS :data="5" />
    <!-- 分页 -->
    <el-pagination
      class="icy-page"
      background
      layout="prev, pager, next"
      :total="500"
      prev-text="上一页"
      next-text="下一页"
    />
  </div>
</template>

<script lang="ts">
/**
 *科技奖励-获奖项目
 * @author
 */
import { Component, Vue } from 'vue-property-decorator'
import ExhibitionETS from '@/components/article/ExhibitioneEST.vue'
@Component({
  components: {
    ExhibitionETS
  }
})
export default class Subject extends Vue {}
</script>

<style scoped lang="scss">
@import '@/styles/variables';
/** 获奖项目 */
.icy-subject {
  width: 880px;
  height: auto;
  padding: 30px 34px;
  /**标题 */
  &__title {
    display: flex;
    height: 30px;
    font-family: '微软雅黑';
    font-size: 24px;
    font-weight: bold;
    color: $font-color-07519a;
  }
  /**蓝色图标 */
  &__symbol {
    display: flex;
    width: 812px;
    height: 2px;
    margin-top: 20px;
    background-color: $background-color-e9eef4;
    &--blue {
      background-color: $font-color-07519a;
      width: 94px;
      height: 2px;
    }
  }
  /**中间内容 */
  &__matter {
    padding: 0px 10px 0px 0px;
    height: 206px;
    width: 812px;
  }
  /**副标题区域 */
  .icy-subheading {
    margin-top: 38px;
    display: flex;
    height: 16px;
    /**红色图标 */
    &__symbol {
      width: 4px;
      background-color: $color-red1;
    }
    /**副标题 */
    &__title {
      font-family: '微软雅黑';
      font-size: 16px;
      font-weight: bold;
      margin-left: 5px;
      color: $font-color-07519a;
      line-height: 18px;
    }
  }
  /**表格 */
  .icy-table {
    border-collapse: collapse;
    margin-top: 20px;
    width: 812px;
    height: 160px;
    border: 1px solid $border-color-c1dbf0;
    font-family: '微软雅黑';
    font-size: 16px;
    color: $color-base;
    text-align: left;
    /**第一行 */
    &__row1 {
      border: 1px solid $border-color-c1dbf0;
      /**第一个表格 */
      &--firstgrid {
        border: 1px solid $border-color-c1dbf0;
        width: 120px;
        background-color: $background-color-f0f6fb;
        padding: 0px 0px 0px 15px;
      }
      &--secondgrid {
        border: 1px solid $border-color-c1dbf0;
        width: 292px;
        padding: 0px 0px 0px 15px;
      }
      &--thirdgrid {
        border: 1px solid $border-color-c1dbf0;
        width: 72px;
        background-color: $background-color-f0f6fb;
        padding: 0px 0px 0px 15px;
      }
      &--fourthgrid {
        border: 1px solid $border-color-c1dbf0;
        width: 130px;
        padding: 0px 0px 0px 15px;
      }
      &--fifthgrid {
        border: 1px solid $border-color-c1dbf0;
        width: 72px;
        background-color: $background-color-f0f6fb;
        padding: 0px 0px 0px 15px;
      }
      &--sixthgrid {
        border: 1px solid $border-color-c1dbf0;
        width: 126px;
        padding: 0px 0px 0px 15px;
      }
    }
    /**第二行 */
    &__row2 {
      border: 1px solid $border-color-c1dbf0;
      &--firstgrid {
        border: 1px solid $border-color-c1dbf0;
        width: 120px;
        background-color: $background-color-f0f6fb;
        padding: 0px 0px 0px 15px;
      }
      &--secondgrid {
        border: 1px solid $border-color-c1dbf0;
        width: 691px;
        padding: 0px 0px 0px 15px;
      }
    }
    /**第三行 */
    &__row3 {
      border: 1px solid $border-color-c1dbf0;
      &--firstgrid {
        border: 1px solid $border-color-c1dbf0;
        width: 120px;
        background-color: $background-color-f0f6fb;
        padding: 0px 0px 0px 15px;
      }
      &--secondgrid {
        border: 1px solid $border-color-c1dbf0;
        width: 691px;
        padding: 0px 0px 0px 15px;
      }
    }
  }
}
</style>
