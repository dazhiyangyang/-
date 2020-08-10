<template>
  <div class="icy-list">
    <PlateHead title="鉴定列表" />
    <div class="icy-search">
      <div class="icy-search__row">
        <p class="icy-search__row--title1">成果名称：</p>
        <input class="icy-search__row--input" placeholder="请输入成果名称" />
        <p class="icy-search__row--title2">鉴定编号：</p>
        <input class="icy-search__row--input" placeholder="请输入鉴定编号" />
      </div>
      <div class="icy-search__row">
        <p class="icy-search__row--title1">鉴定单位：</p>
        <input class="icy-search__row--input" placeholder="请输入鉴定单位" />
        <p class="icy-search__row--title2">鉴定形式：</p>
        <input class="icy-search__row--input" placeholder="请输入鉴定形式" />
        <button class="icy-search__row--button">搜索</button>
      </div>
    </div>

    <button class="icy-list__button" onclick="window.location.href='/technologyAuthenticate/apply'">
      <li class="icy-list__button--li">新增</li>
    </button>

    <table id="tblMain" class="icy-table" onload="change()">
      <tr class="icy-table__row1">
        <th class="icy-table__row1--firstgrid">成果名称</th>
        <th class="icy-table__row1--secondgrid">鉴定编号</th>
        <th class="icy-table__row1--thirdgrid">鉴定日期</th>
        <th class="icy-table__row1--fourthgrid">鉴定形式</th>
        <th class="icy-table__row1--fifthgrid">组织鉴定单位</th>
      </tr>
      <tr class="icy-table__row2">
        <td class="icy-table__row2--firstgrid" onclick="window.open('/technologyAuthenticate/detail')">
          BKS- 60000/35油浸式串联电抗器
        </td>
        <td class="icy-table__row2--secondgrid">中机电科鉴字[2018]第047号</td>
        <td class="icy-table__row2--thirdgrid">2010-10-08</td>
        <td class="icy-table__row2--fourgrid">会议鉴定</td>
        <td class="icy-table__row2--fifthgrid">中国机械工业业联合会</td>
      </tr>
      <tr class="icy-table__row3">
        <td class="icy-table__row3--firstgrid">BKS- 60000/35油浸式串联电抗器</td>
        <td class="icy-table__row3--secondgrid">中机电科鉴字[2018]第047号</td>
        <td class="icy-table__row3--thirdgrid">2010-10-08</td>
        <td class="icy-table__row3--fourgrid">会议鉴定</td>
        <td class="icy-table__row3--fifthgrid">中国机械工业业联合会</td>
      </tr>
      <tr class="icy-table__row2">
        <td class="icy-table__row2--firstgrid">BKS- 60000/35油浸式串联电抗器</td>
        <td class="icy-table__row2--secondgrid">中机电科鉴字[2018]第047号</td>
        <td class="icy-table__row2--thirdgrid">2010-10-08</td>
        <td class="icy-table__row2--fourgrid">会议鉴定</td>
        <td class="icy-table__row2--fifthgrid">中国机械工业业联合会</td>
      </tr>
      <tr class="icy-table__row3">
        <td class="icy-table__row3--firstgrid">BKS- 60000/35油浸式串联电抗器</td>
        <td class="icy-table__row3--secondgrid">中机电科鉴字[2018]第047号</td>
        <td class="icy-table__row3--thirdgrid">2010-10-08</td>
        <td class="icy-table__row3--fourgrid">会议鉴定</td>
        <td class="icy-table__row3--fifthgrid">中国机械工业业联合会</td>
      </tr>
      <tr class="icy-table__row2">
        <td class="icy-table__row2--firstgrid">BKS- 60000/35油浸式串联电抗器</td>
        <td class="icy-table__row2--secondgrid">中机电科鉴字[2018]第047号</td>
        <td class="icy-table__row2--thirdgrid">2010-10-08</td>
        <td class="icy-table__row2--fourgrid">会议鉴定</td>
        <td class="icy-table__row2--fifthgrid">中国机械工业业联合会</td>
      </tr>
      <tr class="icy-table__row3">
        <td class="icy-table__row3--firstgrid">BKS- 60000/35油浸式串联电抗器</td>
        <td class="icy-table__row3--secondgrid">中机电科鉴字[2018]第047号</td>
        <td class="icy-table__row3--thirdgrid">2010-10-08</td>
        <td class="icy-table__row3--fourgrid">会议鉴定</td>
        <td class="icy-table__row3--fifthgrid">中国机械工业业联合会</td>
      </tr>
      <tr class="icy-table__row2">
        <td class="icy-table__row2--firstgrid">BKS- 60000/35油浸式串联电抗器</td>
        <td class="icy-table__row2--secondgrid">中机电科鉴字[2018]第047号</td>
        <td class="icy-table__row2--thirdgrid">2010-10-08</td>
        <td class="icy-table__row2--fourgrid">会议鉴定</td>
        <td class="icy-table__row2--fifthgrid">中国机械工业业联合会</td>
      </tr>
      <tr class="icy-table__row3">
        <td class="icy-table__row3--firstgrid">BKS- 60000/35油浸式串联电抗器</td>
        <td class="icy-table__row3--secondgrid">中机电科鉴字[2018]第047号</td>
        <td class="icy-table__row3--thirdgrid">2010-10-08</td>
        <td class="icy-table__row3--fourgrid">会议鉴定</td>
        <td class="icy-table__row3--fifthgrid">中国机械工业业联合会</td>
      </tr>
      <tr class="icy-table__row2">
        <td class="icy-table__row2--firstgrid">BKS- 60000/35油浸式串联电抗器</td>
        <td class="icy-table__row2--secondgrid">中机电科鉴字[2018]第047号</td>
        <td class="icy-table__row2--thirdgrid">2010-10-08</td>
        <td class="icy-table__row2--fourgrid">会议鉴定</td>
        <td class="icy-table__row2--fifthgrid">中国机械工业业联合会</td>
      </tr>
      <tr class="icy-table__row3">
        <td class="icy-table__row3--firstgrid">BKS- 60000/35油浸式串联电抗器</td>
        <td class="icy-table__row3--secondgrid">中机电科鉴字[2018]第047号</td>
        <td class="icy-table__row3--thirdgrid">2010-10-08</td>
        <td class="icy-table__row3--fourgrid">会议鉴定</td>
        <td class="icy-table__row3--fifthgrid">中国机械工业业联合会</td>
      </tr>
    </table>
  </div>
</template>

<script lang="ts">
/**
 *技术鉴定-鉴定列表
 * @author wyr
 */
import { Component, Vue } from 'vue-property-decorator'
import PlateHead from '@/components/article/PlateHead.vue'
@Component({
  components: {
    PlateHead
  }
})
export default class TechnologAuthenicate extends Vue {}
</script>

<style scoped lang="scss">
@import '@/styles/variables';
/** 获奖项目 */
.icy-list {
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
      width: 80px;
      font-size: 16px;
      color: $color-base;
      margin-top: 28px;
    }
    &--input {
      width: 380px;
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
      margin-left: 60px;
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
  width: 1132px;
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

    /**第一个表格 */
    &--firstgrid {
      border: 1px solid $border-color-d8eafc;
      width: 364px;
    }
    &--secondgrid {
      border: 1px solid $border-color-d8eafc;
      width: 260px;
    }
    &--thirdgrid {
      border: 1px solid $border-color-d8eafc;
      width: 150px;
    }
    &--fourgrid {
      border: 1px solid $border-color-d8eafc;
      width: 130px;
    }
    &--fifthgrid {
      border: 1px solid $border-color-d8eafc;
      width: 228px;
    }
  }
  /**第二种行样式 */
  &__row2 {
    border: 1px solid $border-color-d8eafc;
    height: 38px;
    font-size: 16px;
    background-color: $color-gray-fafafa;
    /**第一个表格 */
    &--firstgrid {
      border: 1px solid $border-color-d8eafc;
      width: 364px;
      color: $font-color-07519a;
    }
    &--secondgrid {
      border: 1px solid $border-color-d8eafc;
      width: 260px;
    }
    &--thirdgrid {
      border: 1px solid $border-color-d8eafc;
      width: 150px;
    }
    &--fourgrid {
      border: 1px solid $border-color-d8eafc;
      width: 130px;
    }
    &--fifthgrid {
      border: 1px solid $border-color-d8eafc;
      width: 228px;
    }
  }
  /**第三种行样式 */
  &__row3 {
    border: 1px solid $border-color-d8eafc;
    height: 38px;
    font-size: 16px;

    /**第一个表格 */
    &--firstgrid {
      border: 1px solid $border-color-d8eafc;
      width: 364px;
      color: $font-color-07519a;
    }
    &--secondgrid {
      border: 1px solid $border-color-d8eafc;
      width: 260px;
    }
    &--thirdgrid {
      border: 1px solid $border-color-d8eafc;
      width: 150px;
    }
    &--fourgrid {
      border: 1px solid $border-color-d8eafc;
      width: 130px;
    }
    &--fifthgrid {
      border: 1px solid $border-color-d8eafc;
      width: 228px;
    }
  }
}
</style>
