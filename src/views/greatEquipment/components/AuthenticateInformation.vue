<template>
  <div class="icy-authenticateInformation">
    <PlateHead :title="鉴定信息" />
    <div class="icy-authenticateInformation__search">
      <p class="icy-authenticateInformation__search--title1">产品名称：</p>
      <input class="icy-authenticateInformation__search--input" placeholder="请输入产品名称" />
      <p class="icy-authenticateInformation__search--title2">企业名称：</p>
      <input class="icy-authenticateInformation__search--input" placeholder="请输入企业名称" />
      <button class="icy-authenticateInformation__search--button">搜索</button>
    </div>
    <table class="icy-table">
      <tr class="icy-table__row1">
        <th class="icy-table__row1--firstgrid">产品名称</th>
        <th class="icy-table__row1--secondgrid">企业名称</th>
        <th class="icy-table__row1--thirdgrid">所属地</th>
        <th class="icy-table__row1--fourthgrid">鉴定时间</th>
        <th class="icy-table__row1--fifthgrid">鉴定结果</th>
      </tr>
      <tr class="icy-table__row2">
        <td class="icy-table__row2--firstgrid">首套催化汽油脱硫装置</td>
        <td class="icy-table__row2--secondgrid">苏州电加工机床研究所</td>
        <td class="icy-table__row2--thirdgrid">北京</td>
        <td class="icy-table__row2--fourgrid">2020年3月21日</td>
        <td class="icy-table__row2--fifthgrid">通过</td>
      </tr>
      <tr class="icy-table__row3">
        <td class="icy-table__row3--firstgrid">首套催化汽油脱硫装置</td>
        <td class="icy-table__row3--secondgrid">苏州电加工机床研究所</td>
        <td class="icy-table__row3--thirdgrid">北京</td>
        <td class="icy-table__row3--fourgrid">2020年3月21日</td>
        <td class="icy-table__row3--fifthgrid">通过</td>
      </tr>
      <tr class="icy-table__row2">
        <td class="icy-table__row2--firstgrid">首套催化汽油脱硫装置</td>
        <td class="icy-table__row2--secondgrid">苏州电加工机床研究所</td>
        <td class="icy-table__row2--thirdgrid">北京</td>
        <td class="icy-table__row2--fourgrid">2020年3月21日</td>
        <td class="icy-table__row2--fifthgrid">通过</td>
      </tr>
      <tr class="icy-table__row3">
        <td class="icy-table__row3--firstgrid">首套催化汽油脱硫装置</td>
        <td class="icy-table__row3--secondgrid">苏州电加工机床研究所</td>
        <td class="icy-table__row3--thirdgrid">北京</td>
        <td class="icy-table__row3--fourgrid">2020年3月21日</td>
        <td class="icy-table__row3--fifthgrid">通过</td>
      </tr>
      <tr class="icy-table__row2">
        <td class="icy-table__row2--firstgrid">首套催化汽油脱硫装置</td>
        <td class="icy-table__row2--secondgrid">苏州电加工机床研究所</td>
        <td class="icy-table__row2--thirdgrid">北京</td>
        <td class="icy-table__row2--fourgrid">2020年3月21日</td>
        <td class="icy-table__row2--fifthgrid">通过</td>
      </tr>
      <tr class="icy-table__row3">
        <td class="icy-table__row3--firstgrid">首套催化汽油脱硫装置</td>
        <td class="icy-table__row3--secondgrid">苏州电加工机床研究所</td>
        <td class="icy-table__row3--thirdgrid">北京</td>
        <td class="icy-table__row3--fourgrid">2020年3月21日</td>
        <td class="icy-table__row3--fifthgrid">通过</td>
      </tr>
      <tr class="icy-table__row2">
        <td class="icy-table__row2--firstgrid">首套催化汽油脱硫装置</td>
        <td class="icy-table__row2--secondgrid">苏州电加工机床研究所</td>
        <td class="icy-table__row2--thirdgrid">北京</td>
        <td class="icy-table__row2--fourgrid">2020年3月21日</td>
        <td class="icy-table__row2--fifthgrid">通过</td>
      </tr>
      <tr class="icy-table__row3">
        <td class="icy-table__row3--firstgrid">首套催化汽油脱硫装置</td>
        <td class="icy-table__row3--secondgrid">苏州电加工机床研究所</td>
        <td class="icy-table__row3--thirdgrid">北京</td>
        <td class="icy-table__row3--fourgrid">2020年3月21日</td>
        <td class="icy-table__row3--fifthgrid">通过</td>
      </tr>
      <tr class="icy-table__row2">
        <td class="icy-table__row2--firstgrid">首套催化汽油脱硫装置</td>
        <td class="icy-table__row2--secondgrid">苏州电加工机床研究所</td>
        <td class="icy-table__row2--thirdgrid">北京</td>
        <td class="icy-table__row2--fourgrid">2020年3月21日</td>
        <td class="icy-table__row2--fifthgrid">通过</td>
      </tr>
      <tr class="icy-table__row3">
        <td class="icy-table__row3--firstgrid">首套催化汽油脱硫装置</td>
        <td class="icy-table__row3--secondgrid">苏州电加工机床研究所</td>
        <td class="icy-table__row3--thirdgrid">北京</td>
        <td class="icy-table__row3--fourgrid">2020年3月21日</td>
        <td class="icy-table__row3--fifthgrid">通过</td>
      </tr>
    </table>
  </div>
</template>

<script lang="ts">
/**
 *重大装备-鉴定信息
 * @author wyr
 */
import { Component, Vue } from 'vue-property-decorator'
import PlateHead from '@/components/article/PlateHead.vue'
@Component({
  components: {
    PlateHead
  }
})
export default class AuthenticateInformation extends Vue {}
</script>

<style scoped lang="scss">
@import '@/styles/variables';
/** 获奖项目 */
.icy-authenticateInformation {
  width: 880px;
  height: auto;
  padding: 30px 34px 60px;

  /**搜索 */
  &__search {
    width: 812px;
    height: 40px;
    margin-top: 40px;
    color: $border-color-1d6cb9;
    display: flex;
    &--title1 {
      font-size: 14px;
      font-family: '微软雅黑';
      width: 80px;
      font-size: 16px;
      color: $color-base;
      margin-top: 8px;
    }
    &--input {
      width: 284px;
      height: 40px;
      border: 1px;

      border-style: solid;
      border-width: 1px;
      color: $border-color-d1d1d1;
      font-size: 16px;
      color: $font-color-cccccc;
      padding: 10px;
    }
    &--title2 {
      font-size: 16px;
      font-family: '微软雅黑';
      width: 80px;

      color: $color-base;
      margin-top: 8px;
      margin-left: 14px;
    }

    &--button {
      margin-left: 10px;
      width: 60px;
      height: 40px;
      border: 1px;
      border-radius: 0px 3px 3px 0px;
      color: $border-color-1d6cb9;
      font-size: 14px;
      color: $color-white;
      background-color: $border-color-1d6cb9;
    }
  }
}
/**表格 */
.icy-table {
  border-collapse: collapse;
  margin-top: 40px;
  width: 812px;
  height: 422px;
  border: 1px solid $border-color-d8eafc;
  font-family: '微软雅黑';
  color: $color-base;
  text-align: center;
  /**第一种行样式 */
  &__row1 {
    border: 1px solid $border-color-d8eafc;
    height: 42px;
    background-color: $background-color-f2f9ff;
    font: 14px bold color-base;

    /**第一个表格 */
    &--firstgrid {
      border: 1px solid $border-color-d8eafc;
      width: 230px;
    }
    &--secondgrid {
      border: 1px solid $border-color-d8eafc;
      width: 260px;
    }
    &--thirdgrid {
      border: 1px solid $border-color-d8eafc;
      width: 80px;
    }
    &--fourgrid {
      border: 1px solid $border-color-d8eafc;
      width: 162px;
    }
    &--fifthgrid {
      border: 1px solid $border-color-d8eafc;
      width: 80px;
    }
  }
  /**第二种行样式 */
  &__row2 {
    border: 1px solid $border-color-d8eafc;
    height: 38px;
    font-size: 14px;

    &--firstgrid {
      border: 1px solid $border-color-d8eafc;
      width: 230px;
    }
    &--secondgrid {
      border: 1px solid $border-color-d8eafc;
      width: 260px;
    }
    &--thirdgrid {
      border: 1px solid $border-color-d8eafc;
      width: 80px;
    }
    &--fourgrid {
      border: 1px solid $border-color-d8eafc;
      width: 162px;
    }
    &--fifthgrid {
      border: 1px solid $border-color-d8eafc;
      width: 80px;
    }
  }
  /**第三种行样式 */
  &__row3 {
    border: 1px solid $border-color-d8eafc;
    height: 38px;
    font-size: 14px;
    background-color: $background-color-f2f9ff;
    &--firstgrid {
      border: 1px solid $border-color-d8eafc;
      width: 230px;
    }
    &--secondgrid {
      border: 1px solid $border-color-d8eafc;
      width: 260px;
    }
    &--thirdgrid {
      border: 1px solid $border-color-d8eafc;
      width: 80px;
    }
    &--fourgrid {
      border: 1px solid $border-color-d8eafc;
      width: 162px;
    }
    &--fifthgrid {
      border: 1px solid $border-color-d8eafc;
      width: 80px;
    }
  }
}
</style>
