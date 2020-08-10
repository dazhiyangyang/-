<template>
  <div class="icy-information">
    <router-view />
    <PlateHead title="成果库" />
    <div class="icy-search">
      <div class="icy-search__row">
        <p class="icy-search__row--title1">成果名称：</p>
        <input class="icy-search__row--input" placeholder="请输入成果名称" />
        <p class="icy-search__row--title2">完成单位：</p>
        <input class="icy-search__row--input" placeholder="请输入完成单位" />
        <button class="icy-search__row--button">搜索</button>
      </div>
    </div>
    <button class="icy-information__button">
      <li class="icy-information__button--li">导出excel</li>
    </button>

    <table id="tblMain" class="icy-table" onload="change()">
      <tr class="icy-table__row1">
        <th class="icy-table__row1--firstgrid">科技成果</th>
        <th class="icy-table__row1--secondgrid">研究起始时间</th>
        <th class="icy-table__row1--thirdgrid">研究终止时间</th>
        <th class="icy-table__row1--fourthgrid">成果完成单位</th>
        <th class="icy-table__row1--fifthgrid">鉴定日期</th>
      </tr>
      <tr class="icy-table__row2">
        <td class="icy-table__row2--firstgrid" onclick="window.open('/achievenmentChange/detail')">xxx科技成果</td>
        <td class="icy-table__row2--secondgrid">2019-10-28</td>
        <td class="icy-table__row2--thirdgrid">2019-12-28</td>
        <td class="icy-table__row2--fourgrid">徐州徐工随车起重机有限公司</td>
        <td class="icy-table__row2--fifthgrid">2019-12-28</td>
      </tr>
      <tr class="icy-table__row3">
        <td class="icy-table__row3--firstgrid">xxx科技成果</td>
        <td class="icy-table__row3--secondgrid">2019-10-28</td>
        <td class="icy-table__row3--thirdgrid">2019-12-28</td>
        <td class="icy-table__row3--fourgrid">徐州徐工随车起重机有限公司</td>
        <td class="icy-table__row3--fifthgrid">2019-12-28</td>
      </tr>
      <tr class="icy-table__row2">
        <td class="icy-table__row2--firstgrid">xxx科技成果</td>
        <td class="icy-table__row2--secondgrid">2019-10-28</td>
        <td class="icy-table__row2--thirdgrid">2019-12-28</td>
        <td class="icy-table__row2--fourgrid">徐州徐工随车起重机有限公司</td>
        <td class="icy-table__row2--fifthgrid">2019-12-28</td>
      </tr>
      <tr class="icy-table__row3">
        <td class="icy-table__row3--firstgrid">xxx科技成果</td>
        <td class="icy-table__row3--secondgrid">2019-10-28</td>
        <td class="icy-table__row3--thirdgrid">2019-12-28</td>
        <td class="icy-table__row3--fourgrid">徐州徐工随车起重机有限公司</td>
        <td class="icy-table__row3--fifthgrid">2019-12-28</td>
      </tr>
      <tr class="icy-table__row2">
        <td class="icy-table__row2--firstgrid">xxx科技成果</td>
        <td class="icy-table__row2--secondgrid">2019-10-28</td>
        <td class="icy-table__row2--thirdgrid">2019-12-28</td>
        <td class="icy-table__row2--fourgrid">徐州徐工随车起重机有限公司</td>
        <td class="icy-table__row2--fifthgrid">2019-12-28</td>
      </tr>
      <tr class="icy-table__row3">
        <td class="icy-table__row3--firstgrid">xxx科技成果</td>
        <td class="icy-table__row3--secondgrid">2019-10-28</td>
        <td class="icy-table__row3--thirdgrid">2019-12-28</td>
        <td class="icy-table__row3--fourgrid">徐州徐工随车起重机有限公司</td>
        <td class="icy-table__row3--fifthgrid">2019-12-28</td>
      </tr>
      <tr class="icy-table__row2">
        <td class="icy-table__row2--firstgrid">xxx科技成果</td>
        <td class="icy-table__row2--secondgrid">2019-10-28</td>
        <td class="icy-table__row2--thirdgrid">2019-12-28</td>
        <td class="icy-table__row2--fourgrid">徐州徐工随车起重机有限公司</td>
        <td class="icy-table__row2--fifthgrid">2019-12-28</td>
      </tr>
      <tr class="icy-table__row3">
        <td class="icy-table__row3--firstgrid">xxx科技成果</td>
        <td class="icy-table__row3--secondgrid">2019-10-28</td>
        <td class="icy-table__row3--thirdgrid">2019-12-28</td>
        <td class="icy-table__row3--fourgrid">徐州徐工随车起重机有限公司</td>
        <td class="icy-table__row3--fifthgrid">2019-12-28</td>
      </tr>
      <tr class="icy-table__row2">
        <td class="icy-table__row2--firstgrid">xxx科技成果</td>
        <td class="icy-table__row2--secondgrid">2019-10-28</td>
        <td class="icy-table__row2--thirdgrid">2019-12-28</td>
        <td class="icy-table__row2--fourgrid">徐州徐工随车起重机有限公司</td>
        <td class="icy-table__row2--fifthgrid">2019-12-28</td>
      </tr>
      <tr class="icy-table__row3">
        <td class="icy-table__row3--firstgrid">xxx科技成果</td>
        <td class="icy-table__row3--secondgrid">2019-10-28</td>
        <td class="icy-table__row3--thirdgrid">2019-12-28</td>
        <td class="icy-table__row3--fourgrid">徐州徐工随车起重机有限公司</td>
        <td class="icy-table__row3--fifthgrid">2019-12-28</td>
      </tr>
    </table>
  </div>
</template>

<script lang="ts">
/**
 *成果转化-案例成果信息
 * @author wyr
 */
import { Component, Vue } from 'vue-property-decorator'
import PlateHead from '@/components/article/PlateHead.vue'
@Component({
  components: {
    PlateHead
  }
})
export default class Storeroom extends Vue {}
</script>

<style scoped lang="scss">
@import '@/styles/variables';
/** 获奖项目 */
.icy-information {
  width: 880px;
  height: auto;
  padding: 30px 34px 100px;
  background-color: $color-white;
  &__button {
    display: flex;
    margin-top: 30px;
    width: 100px;
    height: 40px;
    border-radius: 5px;
    background-color: $font-color-3db4ba;
    &--li {
      margin: 8px auto;

      font-size: 16px;
      color: $color-white;
    }
  }
}
/**搜索 */
.icy-search {
  width: 1132px;
  height: auto;
  color: $border-color-1d6cb9;
  padding: 10px 0px 0px 0px;
  &__row {
    display: flex;
    &--title1 {
      font-size: 14px;
      font-family: '微软雅黑';
      width: 80px;
      font-size: 16px;
      color: $color-base;
      margin-top: 28px;
    }
    &--input {
      width: 250px;
      height: 40px;
      border: 1px;
      border-style: solid;
      border-width: 1px;
      color: $border-color-d1d1d1;
      font-size: 16px;
      color: $font-color-cccccc;
      padding: 12px;
      margin-top: 20px;
    }
    &--title2 {
      font-size: 16px;
      font-family: '微软雅黑';
      width: 80px;
      color: $color-base;
      margin-top: 28px;
      margin-left: 20px;
    }

    &--button {
      margin-left: 10px;
      width: 100px;
      height: 40px;
      border: 1px;
      border-radius: 0px 3px 3px 0px;
      color: $border-color-1d6cb9;
      font-size: 14px;
      color: $color-white;
      background-color: $border-color-1d6cb9;
      margin-top: 20px;
    }
  }
}
/**表格 */
.icy-table {
  border-collapse: collapse;
  margin-top: 10px;
  width: 812px;
  height: auto;
  border: 1px solid $border-color-d8eafc;
  font-family: '微软雅黑';
  color: $color-base;
  text-align: center;
  /**第一种行样式 */
  &__row1 {
    border: 1px solid $border-color-d8eafc;
    height: 42px;
    font: 16px bold color-base;
    /**第一个表格 */
    &--firstgrid {
      border: 1px solid $border-color-d8eafc;
      width: 232px;
    }
    &--secondgrid {
      border: 1px solid $border-color-d8eafc;
      width: 140px;
    }
    &--thirdgrid {
      border: 1px solid $border-color-d8eafc;
      width: 140px;
    }
    &--fourgrid {
      border: 1px solid $border-color-d8eafc;
      width: 260px;
    }
    &--fifthgrid {
      border: 1px solid $border-color-d8eafc;
      width: 140px;
    }
  }
  /**第二种行样式 */
  &__row2 {
    border: 1px solid $border-color-d8eafc;
    height: 38px;
    font-size: 14px;
    background-color: $color-gray-fafafa;
    /**第一个表格 */
    &--firstgrid {
      border: 1px solid $border-color-d8eafc;
      width: 224px;
      color: $font-color-07519a;
    }
    &--secondgrid {
      border: 1px solid $border-color-d8eafc;
      width: 140px;
    }
    &--thirdgrid {
      border: 1px solid $border-color-d8eafc;
      width: 140px;
    }
    &--fourgrid {
      border: 1px solid $border-color-d8eafc;
      width: 260px;
    }
    &--fifthgrid {
      border: 1px solid $border-color-d8eafc;
      width: 140px;
    }
  }
  /**第三种行样式 */
  &__row3 {
    border: 1px solid $border-color-d8eafc;
    height: 38px;
    font-size: 14px;

    /**第一个表格 */
    &--firstgrid {
      border: 1px solid $border-color-d8eafc;
      width: 224px;
      color: $font-color-07519a;
    }
    &--secondgrid {
      border: 1px solid $border-color-d8eafc;
      width: 140px;
    }
    &--thirdgrid {
      border: 1px solid $border-color-d8eafc;
      width: 140px;
    }
    &--fourgrid {
      border: 1px solid $border-color-d8eafc;
      width: 260px;
    }
    &--fifthgrid {
      border: 1px solid $border-color-d8eafc;
      width: 140px;
    }
  }
}
</style>
