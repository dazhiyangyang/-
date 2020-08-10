<template>
  <div class="icy-information">
    <PlateHead title="案例成果信息" />
    <div class="icy-search">
      <div class="icy-search__row">
        <p class="icy-search__row--title1">成果名称：</p>
        <input class="icy-search__row--input" placeholder="请输入成果名称" />
        <p class="icy-search__row--title2">完成单位：</p>
        <input class="icy-search__row--input" placeholder="请输入完成单位" />
      </div>
      <div class="icy-search__row">
        <p class="icy-search__row--title1">所属行业：</p>
        <input class="icy-search__row--input" placeholder="请输入所属行业" />
        <p class="icy-search__row--title2" style="text-align:right">成熟度：</p>
        <input class="icy-search__row--input" placeholder="请输入成熟度" />
        <button class="icy-search__row--button">搜索</button>
      </div>
    </div>

    <table id="tblMain" class="icy-table" onload="change()">
      <tr class="icy-table__row1">
        <th class="icy-table__row1--firstgrid">成果名称</th>
        <th class="icy-table__row1--secondgrid">完成单位</th>
        <th class="icy-table__row1--thirdgrid">所属行业</th>
        <th class="icy-table__row1--fourthgrid">成熟度</th>
        <th class="icy-table__row1--fifthgrid">鉴定日期</th>
      </tr>
      <tr class="icy-table__row2">
        <td class="icy-table__row2--firstgrid">BKS- 60000/35油浸式串联电抗器</td>
        <td class="icy-table__row2--secondgrid">徐州徐工随车起重机有限公司</td>
        <td class="icy-table__row2--thirdgrid">IT软件</td>
        <td class="icy-table__row2--fourgrid">不 熟</td>
        <td class="icy-table__row2--fifthgrid">2019- 10- 10</td>
      </tr>
      <tr class="icy-table__row3">
        <td class="icy-table__row3--firstgrid">BKS- 60000/35油浸式串联电抗器</td>
        <td class="icy-table__row3--secondgrid">徐州徐工随车起重机有限公司</td>
        <td class="icy-table__row3--thirdgrid">IT软件</td>
        <td class="icy-table__row3--fourgrid">不 熟</td>
        <td class="icy-table__row3--fifthgrid">2019- 10- 10</td>
      </tr>
      <tr class="icy-table__row2">
        <td class="icy-table__row2--firstgrid">BKS- 60000/35油浸式串联电抗器</td>
        <td class="icy-table__row2--secondgrid">徐州徐工随车起重机有限公司</td>
        <td class="icy-table__row2--thirdgrid">IT软件</td>
        <td class="icy-table__row2--fourgrid">不 熟</td>
        <td class="icy-table__row2--fifthgrid">2019- 10- 10</td>
      </tr>
      <tr class="icy-table__row3">
        <td class="icy-table__row3--firstgrid">BKS- 60000/35油浸式串联电抗器</td>
        <td class="icy-table__row3--secondgrid">徐州徐工随车起重机有限公司</td>
        <td class="icy-table__row3--thirdgrid">IT软件</td>
        <td class="icy-table__row3--fourgrid">不 熟</td>
        <td class="icy-table__row3--fifthgrid">2019- 10- 10</td>
      </tr>
      <tr class="icy-table__row2">
        <td class="icy-table__row2--firstgrid">BKS- 60000/35油浸式串联电抗器</td>
        <td class="icy-table__row2--secondgrid">徐州徐工随车起重机有限公司</td>
        <td class="icy-table__row2--thirdgrid">IT软件</td>
        <td class="icy-table__row2--fourgrid">不 熟</td>
        <td class="icy-table__row2--fifthgrid">2019- 10- 10</td>
      </tr>
      <tr class="icy-table__row3">
        <td class="icy-table__row3--firstgrid">BKS- 60000/35油浸式串联电抗器</td>
        <td class="icy-table__row3--secondgrid">徐州徐工随车起重机有限公司</td>
        <td class="icy-table__row3--thirdgrid">IT软件</td>
        <td class="icy-table__row3--fourgrid">不 熟</td>
        <td class="icy-table__row3--fifthgrid">2019- 10- 10</td>
      </tr>
      <tr class="icy-table__row2">
        <td class="icy-table__row2--firstgrid">BKS- 60000/35油浸式串联电抗器</td>
        <td class="icy-table__row2--secondgrid">徐州徐工随车起重机有限公司</td>
        <td class="icy-table__row2--thirdgrid">IT软件</td>
        <td class="icy-table__row2--fourgrid">不 熟</td>
        <td class="icy-table__row2--fifthgrid">2019- 10- 10</td>
      </tr>
      <tr class="icy-table__row3">
        <td class="icy-table__row3--firstgrid">BKS- 60000/35油浸式串联电抗器</td>
        <td class="icy-table__row3--secondgrid">徐州徐工随车起重机有限公司</td>
        <td class="icy-table__row3--thirdgrid">IT软件</td>
        <td class="icy-table__row3--fourgrid">不 熟</td>
        <td class="icy-table__row3--fifthgrid">2019- 10- 10</td>
      </tr>
      <tr class="icy-table__row2">
        <td class="icy-table__row2--firstgrid">BKS- 60000/35油浸式串联电抗器</td>
        <td class="icy-table__row2--secondgrid">徐州徐工随车起重机有限公司</td>
        <td class="icy-table__row2--thirdgrid">IT软件</td>
        <td class="icy-table__row2--fourgrid">不 熟</td>
        <td class="icy-table__row2--fifthgrid">2019- 10- 10</td>
      </tr>
      <tr class="icy-table__row3">
        <td class="icy-table__row3--firstgrid">BKS- 60000/35油浸式串联电抗器</td>
        <td class="icy-table__row3--secondgrid">徐州徐工随车起重机有限公司</td>
        <td class="icy-table__row3--thirdgrid">IT软件</td>
        <td class="icy-table__row3--fourgrid">不 熟</td>
        <td class="icy-table__row3--fifthgrid">2019- 10- 10</td>
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
export default class Information extends Vue {}
</script>

<style scoped lang="scss">
@import '@/styles/variables';
/** 获奖项目 */
.icy-information {
  width: 880px;
  height: auto;
  padding: 30px 34px 100px;
  background-color: $color-white;
}
/**搜索 */
.icy-search {
  width: 812px;
  height: auto;
  margin-top: 20px;
  color: $border-color-1d6cb9;
  &__row {
    display: flex;
    margin-top: 20px;
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

    font: 16px bold color-base;
    background-color: $background-color-f2f9ff;
    /**第一个表格 */
    &--firstgrid {
      border: 1px solid $border-color-d8eafc;
      width: 260px;
    }
    &--secondgrid {
      border: 1px solid $border-color-d8eafc;
      width: 230px;
    }
    &--thirdgrid {
      border: 1px solid $border-color-d8eafc;
      width: 100px;
    }
    &--fourgrid {
      border: 1px solid $border-color-d8eafc;
      width: 80px;
    }
    &--fifthgrid {
      border: 1px solid $border-color-d8eafc;
      width: 142px;
    }
  }
  /**第二种行样式 */
  &__row2 {
    border: 1px solid $border-color-d8eafc;
    height: 38px;
    font-size: 14px;

    /**第一个表格 */
    &--firstgrid {
      border: 1px solid $border-color-d8eafc;
      width: 260px;
      color: $font-color-07519a;
    }
    &--secondgrid {
      border: 1px solid $border-color-d8eafc;
      width: 230px;
    }
    &--thirdgrid {
      border: 1px solid $border-color-d8eafc;
      width: 100px;
    }
    &--fourgrid {
      border: 1px solid $border-color-d8eafc;
      width: 80px;
    }
    &--fifthgrid {
      border: 1px solid $border-color-d8eafc;
      width: 142px;
    }
  }
  /**第三种行样式 */
  &__row3 {
    border: 1px solid $border-color-d8eafc;
    height: 38px;
    font-size: 14px;
    background-color: $color-gray-fafafa;
    /**第一个表格 */
    &--firstgrid {
      border: 1px solid $border-color-d8eafc;
      width: 260px;
      color: $font-color-07519a;
    }
    &--secondgrid {
      border: 1px solid $border-color-d8eafc;
      width: 230px;
    }
    &--thirdgrid {
      border: 1px solid $border-color-d8eafc;
      width: 100px;
    }
    &--fourgrid {
      border: 1px solid $border-color-d8eafc;
      width: 80px;
    }
    &--fifthgrid {
      border: 1px solid $border-color-d8eafc;
      width: 142px;
    }
  }
}
</style>
