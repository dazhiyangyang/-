<template>
  <div class="icy-authenticate">
    <PlateHead title="首台鉴定" />
    <table class="icy-table">
      <tr class="icy-table__row1">
        <td class="icy-table__row1--firstgrid">编号</td>
        <td class="icy-table__row1--secondgrid"></td>
      </tr>
      <tr class="icy-table__row1">
        <td class="icy-table__row1--firstgrid">产品名称</td>
        <td class="icy-table__row1--secondgrid"></td>
      </tr>
      <tr class="icy-table__row1">
        <td class="icy-table__row1--firstgrid">企业名称</td>
        <td class="icy-table__row1--secondgrid"></td>
      </tr>
      <tr class="icy-table__row1">
        <td class="icy-table__row1--firstgrid">所属地</td>
        <td class="icy-table__row1--secondgrid"></td>
      </tr>

      <tr class="icy-table__row2">
        <td class="icy-table__row2--firstgrid">鉴定结果</td>
        <td class="icy-table__row2--secondgrid"></td>
      </tr>
    </table>

    <button class="icy-button">提交</button>
  </div>
</template>

<script lang="ts">
/**
 *科技奖励-首台鉴定
 * @author wyr
 */
import { Component, Vue } from 'vue-property-decorator'

import PlateHead from '@/components/article/PlateHead.vue'
@Component({
  components: {
    PlateHead
  }
})
export default class Authenticate extends Vue {}
</script>

<style scoped lang="scss">
@import '@/styles/variables';
/** 获奖项目 */
.icy-authenticate {
  width: 880px;
  height: auto;
  padding: 30px 34px 60px;
}
/**表格 */
.icy-table {
  border-collapse: collapse;
  margin-top: 40px;
  width: 812px;
  height: 464px;
  border: 1px solid $border-color-d8eafc;
  font-family: '微软雅黑';
  color: $color-base;
  /**第一种行样式 */
  &__row1 {
    border: 1px solid $border-color-d8eafc;
    height: 54px;

    font: 14px bold color-base;
    /**第一个表格 */
    &--firstgrid {
      border: 1px solid $border-color-d8eafc;
      width: 142px;
      background-color: $background-color-f2f9ff;
      padding: 0px 0px 0px 15px;
    }
    &--secondgrid {
      border: 1px solid $border-color-d8eafc;
      width: 670px;
      padding: 0px 0px 0px 15px;
    }
  }
  /**第二种行样式 */
  &__row2 {
    border: 1px solid $border-color-d8eafc;
    height: 248px;
    font-size: 14px;
    text-align: left;
    vertical-align: top;
    &--firstgrid {
      border: 1px solid $border-color-d8eafc;
      width: 142px;
      background-color: $background-color-f2f9ff;
      padding: 15px 0px 0px 15px;
    }
    &--secondgrid {
      border: 1px solid $border-color-d8eafc;
      width: 670px;
      padding: 15px 0px 0px 15px;
    }
  }
}
/**提交 */
.icy-button {
  display: block;
  margin: 80px auto;
  width: 400px;
  height: 40px;
  border: 1px;
  color: $border-color-1d6cb9;
  font-size: 14px;
  color: $color-white;
  background-color: $border-color-1d6cb9;
}
</style>
