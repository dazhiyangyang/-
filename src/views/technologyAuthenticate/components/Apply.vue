<template>
  <div class="icy-apply">
    <PlateHead title="鉴定申请" />
    <button class="icy-apply__button">
      <img class="icy-apply__button--img" src="../../../assets/images/upload.png" />
      <li class="icy-apply__button--li">科技成果鉴定证书表</li>
    </button>
    <table class="icy-table">
      <tr class="icy-table__row1">
        <td class="icy-table__row1--firstgrid">成果名称</td>
        <td class="icy-table__row1--secondgrid">
          <input type="text" class="icy-input" />
        </td>
      </tr>
      <tr class="icy-table__row1">
        <td class="icy-table__row1--firstgrid">完成单位</td>
        <td class="icy-table__row1--secondgrid">
          <input type="text" class="icy-input" />
        </td>
      </tr>
      <tr class="icy-table__row2">
        <td class="icy-table__row2--firstgrid">简要技术说明及主要技术性能指标</td>
        <td class="icy-table__row2--secondgrid">
          <input type="text" class="icy-input" />
        </td>
      </tr>
    </table>

    <div class="icy-apply__download">
      <img class="icy-apply__download--img" src="../../../assets/images/download.png" />
      <p class="icy-apply__download--p">科技成果鉴定证书</p>
    </div>
    <div class="icy-button">
      <button class="icy-button__cancel">取消</button>
      <button class="icy-button__present">提交</button>
    </div>
  </div>
</template>

<script lang="ts">
/**
 *技术鉴定-鉴定申请
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
.icy-apply {
  width: 1200px;
  height: auto;
  padding: 30px 34px 100px;
  background-color: $color-white;
  /**上传按钮 */
  &__button {
    display: flex;
    margin-top: 30px;
    width: 208px;
    height: 40px;
    border-radius: 5px;
    background-color: $font-color-3db4ba;
    &--img {
      margin-left: 20px;
      margin-top: 10px;
      height: 18px;
    }
    &--li {
      margin-left: 6px;
      margin-top: 8px;
      font-size: 16px;
      color: $color-white;
    }
  }
  &__download {
    display: flex;
    flex-direction: row-reverse;
    margin-top: 24px;
    &--p {
      font-size: 16px;
      color: $font-color-07519a;
      margin-right: 6px;
    }
    &--img {
      height: 18px;
    }
  }
}
.icy-input {
  font-size: 16px;
}
/**表格 */
.icy-table {
  border-collapse: collapse;
  margin-top: 40px;
  width: 1132px;
  height: auto;
  border: 1px solid $border-color-d8eafc;
  font-family: '微软雅黑';
  color: $color-base;
  text-align: left;
  /**第一种行样式 */
  &__row1 {
    border: 1px solid $border-color-d8eafc;
    height: 54px;

    font: 16px bold color-base;
    /**第一个表格 */
    &--firstgrid {
      border: 1px solid $border-color-d8eafc;
      width: 190px;
      background-color: $background-color-f2f9ff;
      padding: 0px 0px 0px 15px;
    }
    &--secondgrid {
      border: 1px solid $border-color-d8eafc;
      width: 942px;
      padding: 0px 0px 0px 15px;
    }
  }
  /**第二种行样式 */
  &__row2 {
    border: 1px solid $border-color-d8eafc;
    height: 492px;
    font-size: 16px;
    vertical-align: top;
    &--firstgrid {
      border: 1px solid $border-color-d8eafc;
      width: 190px;
      background-color: $background-color-f2f9ff;
      padding: 15px 35px 0px 15px;
    }
    &--secondgrid {
      border: 1px solid $border-color-d8eafc;
      width: 942px;
      padding: 15px 0px 0px 15px;
    }
  }
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
