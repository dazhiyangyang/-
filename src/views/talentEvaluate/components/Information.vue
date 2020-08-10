<template>
  <div class="icy-information">
    <router-view />
    <PlateHead title="工程技术人才评价信息" />
    <div class="icy-search">
      <div class="icy-search__row">
        <p class="icy-search__row--title1">姓名：</p>
        <input class="icy-search__row--input" placeholder="请输入姓名" />
        <p class="icy-search__row--title2">专业：</p>
        <input class="icy-search__row--input" placeholder="请输入专业" />
        <button class="icy-search__row--button">搜索</button>
      </div>
    </div>
    <button class="icy-information__button" onclick="window.location.href='/talentEvaluate/register'">
      <li class="icy-information__button--li">新增</li>
    </button>

    <table id="tblMain" class="icy-table" onload="change()">
      <tr class="icy-table__row1">
        <th class="icy-table__row1--firstgrid">姓名</th>
        <th class="icy-table__row1--secondgrid">性别</th>
        <th class="icy-table__row1--thirdgrid">获得证书情况</th>
        <th class="icy-table__row1--fourthgrid">手机号</th>
        <th class="icy-table__row1--fifthgrid">专业</th>
      </tr>
      <tr class="icy-table__row2">
        <td class="icy-table__row2--firstgrid">张文华</td>
        <td class="icy-table__row2--secondgrid">男</td>
        <td class="icy-table__row2--thirdgrid">已获得高级软件工程师</td>
        <td class="icy-table__row2--fourgrid">xxxxxxxxxxx</td>
        <td class="icy-table__row2--fifthgrid">计算机</td>
      </tr>
      <tr class="icy-table__row3">
        <td class="icy-table__row3--firstgrid">张文华</td>
        <td class="icy-table__row3--secondgrid">男</td>
        <td class="icy-table__row3--thirdgrid">已获得高级软件工程师</td>
        <td class="icy-table__row3--fourgrid">xxxxxxxxxxx</td>
        <td class="icy-table__row3--fifthgrid">计算机</td>
      </tr>
      <tr class="icy-table__row2">
        <td class="icy-table__row2--firstgrid">张文华</td>
        <td class="icy-table__row2--secondgrid">男</td>
        <td class="icy-table__row2--thirdgrid">已获得高级软件工程师</td>
        <td class="icy-table__row2--fourgrid">xxxxxxxxxxx</td>
        <td class="icy-table__row2--fifthgrid">计算机</td>
      </tr>
      <tr class="icy-table__row3">
        <td class="icy-table__row3--firstgrid">张文华</td>
        <td class="icy-table__row3--secondgrid">男</td>
        <td class="icy-table__row3--thirdgrid">已获得高级软件工程师</td>
        <td class="icy-table__row3--fourgrid">xxxxxxxxxxx</td>
        <td class="icy-table__row3--fifthgrid">计算机</td>
      </tr>
      <tr class="icy-table__row2">
        <td class="icy-table__row2--firstgrid">张文华</td>
        <td class="icy-table__row2--secondgrid">男</td>
        <td class="icy-table__row2--thirdgrid">已获得高级软件工程师</td>
        <td class="icy-table__row2--fourgrid">xxxxxxxxxxx</td>
        <td class="icy-table__row2--fifthgrid">计算机</td>
      </tr>
      <tr class="icy-table__row3">
        <td class="icy-table__row3--firstgrid">张文华</td>
        <td class="icy-table__row3--secondgrid">男</td>
        <td class="icy-table__row3--thirdgrid">已获得高级软件工程师</td>
        <td class="icy-table__row3--fourgrid">xxxxxxxxxxx</td>
        <td class="icy-table__row3--fifthgrid">计算机</td>
      </tr>
      <tr class="icy-table__row2">
        <td class="icy-table__row2--firstgrid">张文华</td>
        <td class="icy-table__row2--secondgrid">男</td>
        <td class="icy-table__row2--thirdgrid">已获得高级软件工程师</td>
        <td class="icy-table__row2--fourgrid">xxxxxxxxxxx</td>
        <td class="icy-table__row2--fifthgrid">计算机</td>
      </tr>
      <tr class="icy-table__row3">
        <td class="icy-table__row3--firstgrid">张文华</td>
        <td class="icy-table__row3--secondgrid">男</td>
        <td class="icy-table__row3--thirdgrid">已获得高级软件工程师</td>
        <td class="icy-table__row3--fourgrid">xxxxxxxxxxx</td>
        <td class="icy-table__row3--fifthgrid">计算机</td>
      </tr>
      <tr class="icy-table__row2">
        <td class="icy-table__row2--firstgrid">张文华</td>
        <td class="icy-table__row2--secondgrid">男</td>
        <td class="icy-table__row2--thirdgrid">已获得高级软件工程师</td>
        <td class="icy-table__row2--fourgrid">xxxxxxxxxxx</td>
        <td class="icy-table__row2--fifthgrid">计算机</td>
      </tr>
      <tr class="icy-table__row3">
        <td class="icy-table__row3--firstgrid">张文华</td>
        <td class="icy-table__row3--secondgrid">男</td>
        <td class="icy-table__row3--thirdgrid">已获得高级软件工程师</td>
        <td class="icy-table__row3--fourgrid">xxxxxxxxxxx</td>
        <td class="icy-table__row3--fifthgrid">计算机</td>
      </tr>
    </table>
  </div>
</template>

<script lang="ts">
/**
 *人才评价-工程技术人才评价信息
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
  width: 1200px;
  height: auto;
  padding: 30px 34px 100px;
  background-color: $color-white;
  /**新增 */
  &__button {
    display: flex;
    width: 80px;
    height: 40px;
    border: 1px;
    border-radius: 5px;
    color: $border-color-1d6cb9;

    background-color: $font-color-3db4ba;
    margin-top: 30px;
    &--li {
      font-size: 16px;
      margin: 8px auto;
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
      width: 60px;
      font-size: 16px;
      color: $color-base;
      margin-top: 28px;
    }
    &--input {
      width: 400px;
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
      width: 60px;
      color: $color-base;
      margin-top: 28px;
      margin-left: 20px;
    }

    &--button {
      margin-left: 10px;
      width: 100px;
      height: 40px;
      border: 1px;
      border-radius: 5px;
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
  width: 1132px;
  height: 422px;
  border: 1px solid $border-color-c1dbf0;
  font-family: '微软雅黑';
  color: $color-base;
  text-align: center;
  /**第一种行样式 */
  &__row1 {
    border: 1px solid $border-color-c1dbf0;
    height: 42px;

    font: 16px bold color-base;

    /**第一个表格 */
    &--firstgrid {
      border: 1px solid $border-color-c1dbf0;
      width: 232px;
    }
    &--secondgrid {
      border: 1px solid $border-color-c1dbf0;
      width: 110px;
    }
    &--thirdgrid {
      border: 1px solid $border-color-c1dbf0;
      width: 330px;
    }
    &--fourgrid {
      border: 1px solid $border-color-c1dbf0;
      width: 190px;
    }
    &--fifthgrid {
      border: 1px solid $border-color-c1dbf0;
      width: 270px;
    }
  }
  /**第二种行样式 */
  &__row2 {
    border: 1px solid $border-color-c1dbf0;
    height: 38px;
    font-size: 16px;
    background-color: $color-gray-fafafa;
    /**第一个表格 */
    &--firstgrid {
      border: 1px solid $border-color-c1dbf0;
      width: 232px;
      color: $font-color-07519a;
    }
    &--secondgrid {
      border: 1px solid $border-color-c1dbf0;
      width: 110px;
    }
    &--thirdgrid {
      border: 1px solid $border-color-c1dbf0;
      width: 330px;
    }
    &--fourgrid {
      border: 1px solid $border-color-c1dbf0;
      width: 190px;
    }
    &--fifthgrid {
      border: 1px solid $border-color-c1dbf0;
      width: 270px;
    }
  }
  /**第三种行样式 */
  &__row3 {
    border: 1px solid $border-color-c1dbf0;
    height: 38px;
    font-size: 16px;

    /**第一个表格 */
    &--firstgrid {
      border: 1px solid $border-color-c1dbf0;
      width: 232px;
      color: $font-color-07519a;
    }
    &--secondgrid {
      border: 1px solid $border-color-c1dbf0;
      width: 110px;
    }
    &--thirdgrid {
      border: 1px solid $border-color-c1dbf0;
      width: 330px;
    }
    &--fourgrid {
      border: 1px solid $border-color-c1dbf0;
      width: 190px;
    }
    &--fifthgrid {
      border: 1px solid $border-color-c1dbf0;
      width: 270px;
    }
  }
}
</style>
