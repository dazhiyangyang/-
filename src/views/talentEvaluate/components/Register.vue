<template>
  <div class="icy-authenticate">
    <li class="icy-authenticate__li">工程技术人才评价信息登记</li>
    <table class="icy-table">
      <tr class="icy-table__row1">
        <td class="icy-table__row1--firstgrid">姓名</td>
        <td class="icy-table__row1--secondgrid">
          <input type="text" class="icy-input" />
        </td>
        <td class="icy-table__row1--firstgrid">年龄</td>
        <td class="icy-table__row1--secondgrid"></td>
      </tr>
      <tr class="icy-table__row1">
        <td class="icy-table__row1--firstgrid">性别</td>
        <td class="icy-table__row1--secondgrid">
          <input type="text" class="icy-input" />
        </td>
        <td class="icy-table__row1--firstgrid">应聘职位</td>
        <td class="icy-table__row1--secondgrid">
          <input type="text" class="icy-input" />
        </td>
      </tr>
      <tr class="icy-table__row1">
        <td class="icy-table__row1--firstgrid">获得证书情况</td>
        <td class="icy-table__row1--secondgrid">
          <input type="text" class="icy-input" />
        </td>
        <td class="icy-table__row1--firstgrid">电子邮件</td>
        <td class="icy-table__row1--secondgrid">
          <input type="text" class="icy-input" />
        </td>
      </tr>
      <tr class="icy-table__row1">
        <td class="icy-table__row1--firstgrid">手机号</td>
        <td class="icy-table__row1--secondgrid">
          <input type="text" class="icy-input" />
        </td>
        <td class="icy-table__row1--firstgrid">专业</td>
        <td class="icy-table__row1--secondgrid">
          <input type="text" class="icy-input" />
        </td>
      </tr>

      <tr class="icy-table__row2">
        <td class="icy-table__row2--firstgrid">最高学历</td>
        <td class="icy-table__row2--secondgrid" colspan="3">
          <input type="text" class="icy-input" />
        </td>
      </tr>
    </table>

    <div class="icy-button">
      <button class="icy-button__cancel">取消</button>
      <button class="icy-button__present">提交</button>
    </div>
  </div>
</template>

<script lang="ts">
/**
 *人才评价-工程人才信息登记
 * @author wyr
 */
import { Component, Vue } from 'vue-property-decorator'
@Component
export default class Authenticate extends Vue {}
</script>

<style scoped lang="scss">
@import '@/styles/variables';
/** 获奖项目 */
.icy-authenticate {
  width: 1200px;
  height: auto;
  padding: 60px 40px;
  background-color: $color-white;
  &__li {
    font-size: 30px;
    color: $color-base;
  }
}
/**表格 */
.icy-table {
  border-collapse: collapse;
  margin-top: 48px;
  width: 1120px;
  height: auto;
  border: 1px solid $border-color-d8eafc;
  font-family: '微软雅黑';
  color: $color-base;
  /**第一种行样式 */
  &__row1 {
    border: 1px solid $border-color-d8eafc;
    height: 54px;
    font: 16px bold color-base;
    text-align: left;
    /**第一个表格 */
    &--firstgrid {
      border: 1px solid $border-color-d8eafc;
      width: 190px;
      background-color: $background-color-f2f9ff;
      padding: 0px 0px 0px 16px;
    }
    &--secondgrid {
      border: 1px solid $border-color-d8eafc;
      width: 370px;
      padding: 0px 0px 0px 16px;
    }
  }
  /**第二种行样式 */
  &__row2 {
    border: 1px solid $border-color-d8eafc;
    height: 108px;
    font-size: 16px;
    text-align: left;

    &--firstgrid {
      border: 1px solid $border-color-d8eafc;
      width: 190px;
      background-color: $background-color-f2f9ff;
      padding: 0px 0px 0px 15px;
    }
    &--secondgrid {
      border: 1px solid $border-color-d8eafc;
      width: 930px;
      padding: 0px 0px 0px 15px;
    }
  }
}
.icy-input {
  line-height: 54px;
  font-size: 16px;
}
/**按钮 */
.icy-button {
  display: flex;
  margin: 80px auto;
  width: 420px;
  height: 40px;
  font-size: 14px;
  /**取消 */
  &__cancel {
    width: 200px;
    height: 40px;
    color: $color-base;
    border-radius: 5px;
    background-color: $background-color-e8f3fd;
  }
  /**提交 */
  &__present {
    margin-left: 20px;
    width: 200px;
    height: 40px;
    color: $color-white;
    border-radius: 5px;
    background-color: $border-color-1d6cb9;
  }
}
</style>
